// src/pages/PeopleAlsoViewed/PeopleAlsoViewed.tsx
import imagePath from "@/constant/imagePath";
import Colors from "@/utils/Colors";
import { Ionicons } from "@expo/vector-icons";
import { useFocusEffect } from "@react-navigation/native";
import { router } from "expo-router";
import React, { useCallback, useEffect, useState } from "react";
import {
  ActivityIndicator,
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

// Import APIs
import { getProductDetail, getProducts } from "@/lib/api/productApi";
import {
  getCustomerById,
  getSession,
  updateCustomerById,
} from "@/lib/services/authService";

const { width } = Dimensions.get("window");

// --- Types ---
type WCImage = { id: number; src: string; alt?: string };
type WCAttribute = {
  id: number;
  name: string;
  slug?: string;
  options?: string[];
};
type WCVariation = {
  id: number;
  price: string;
  regular_price: string;
  sale_price: string;
  attributes: { name: string; option: string }[];
  [k: string]: any;
};
type WCProduct = {
  id: number | string;
  name: string;
  type?: "simple" | "variable" | string;
  price: string | number;
  regular_price?: string | number;
  sale_price?: string | number;
  price_html?: string;
  average_rating?: string | number;
  rating_count?: number;
  images?: WCImage[];
  categories?: { id: number; name: string }[];
  variations?: number[];
  attributes?: WCAttribute[];
  [k: string]: any;
};

interface CartItem {
  id: string;
  quantity: number;
}

interface ProductCardProps {
  imageSource: any;
  title: string;
  price: number;
  originalPrice?: number;
  discount?: number;
  rating: number;
  isInWishlist: boolean;
  isInCart: boolean;
  effectiveId: string;
  onToggleWishlist: (id: string) => void;
  onAddToCart: (effectiveId: string) => void;
  isWishlistLoading?: boolean;
  isCartLoading?: boolean;
}

// --- Helpers ---
const toNum = (v: any, fb = 0): number => {
  const n = parseFloat(String(v ?? ""));
  return Number.isFinite(n) ? n : fb;
};

const normalizeUri = (uri: string): string => {
  const trimmed = (uri || "").trim();
  if (!trimmed) return "";
  if (trimmed.startsWith("http://"))
    return trimmed.replace("http://", "https://");
  return trimmed;
};

const parsePriceRangeFromHtml = (
  priceHtml?: string
): { min?: number; max?: number } => {
  if (!priceHtml || typeof priceHtml !== "string") return {};

  try {
    const priceMatches = priceHtml.match(/&#8377;([\d,]+\.?\d*)/g) || [];
    const prices: number[] = [];

    priceMatches.forEach((match) => {
      const priceStr = match.replace("&#8377;", "").replace(/,/g, "");
      const price = parseFloat(priceStr);
      if (!isNaN(price)) {
        prices.push(price);
      }
    });

    if (prices.length >= 2) {
      return { min: Math.min(...prices), max: Math.max(...prices) };
    } else if (prices.length === 1) {
      return { min: prices[0], max: prices[0] };
    }

    return {};
  } catch (error) {
    console.error("Error parsing price range:", error);
    return {};
  }
};

const pctDiscount = (regular: number, sale: number): number | undefined => {
  if (regular > 0 && sale > 0 && regular > sale) {
    const pct = Math.round(((regular - sale) / regular) * 100);
    return Number.isFinite(pct) && pct > 0 ? pct : undefined;
  }
  return undefined;
};

// Function to get variation details
const getVariationDetails = async (
  productId: string,
  variationIds: number[]
): Promise<{
  variationPrices: { [key: string]: number };
  variationOriginalPrices: { [key: string]: number };
  variationDiscounts: { [key: string]: number };
  variationIds: { [key: string]: number };
}> => {
  const variationPrices: { [key: string]: number } = {};
  const variationOriginalPrices: { [key: string]: number } = {};
  const variationDiscounts: { [key: string]: number } = {};
  const variationIdMap: { [key: string]: number } = {};

  try {
    for (const variationId of variationIds) {
      const variationRes = await getProductDetail(variationId.toString());
      const variationData = variationRes?.data as WCVariation;

      if (variationData) {
        const salePrice = toNum(
          variationData.sale_price || variationData.price,
          0
        );
        const regularPrice = toNum(
          variationData.regular_price || variationData.price,
          0
        );
        const discount = pctDiscount(regularPrice, salePrice);

        const attributes = variationData.attributes || [];
        if (attributes.length > 0 && attributes[0].option) {
          const optionKey = attributes[0].option;
          variationPrices[optionKey] = salePrice;
          variationOriginalPrices[optionKey] = regularPrice;
          variationIdMap[optionKey] = variationData.id;
          if (discount) {
            variationDiscounts[optionKey] = discount;
          }
        }
      }
    }
  } catch (error) {
    console.error("Error fetching variation details:", error);
  }

  return {
    variationPrices,
    variationOriginalPrices,
    variationDiscounts,
    variationIds: variationIdMap,
  };
};

const pickImageSource = (p: WCProduct) => {
  const imgs = Array.isArray(p?.images) ? p.images : [];
  const first = imgs.length > 0 ? imgs[0] : undefined;
  const src = typeof first?.src === "string" ? normalizeUri(first.src) : "";
  return src.length > 0 ? { uri: src } : imagePath.image11;
};

// Async map WCProduct to card data
const mapToCard = async (
  p: WCProduct
): Promise<ProductCardProps & { id: string; title: string }> => {
  let sale = toNum(p?.sale_price ?? p?.price, 0);
  let regular = toNum(p?.regular_price ?? p?.price, 0);
  let discount: number | undefined;
  let isVariable = p?.type === "variable";
  let variationId: string | undefined;
  let effectiveId = String(p?.id ?? "");

  if (isVariable) {
    const range = parsePriceRangeFromHtml(p?.price_html);
    if (range.min !== undefined && range.max !== undefined) {
      sale = range.min;
      regular = range.max;
    }

    if (
      p.variations &&
      Array.isArray(p.variations) &&
      p.variations.length > 0
    ) {
      const variationDetails = await getVariationDetails(
        String(p.id),
        p.variations
      );
      if (Object.keys(variationDetails.variationPrices).length > 0) {
        sale = Math.min(...Object.values(variationDetails.variationPrices));
      }
      const firstOption = Object.keys(variationDetails.variationIds)[0];
      if (firstOption) {
        variationId = String(variationDetails.variationIds[firstOption]);
        effectiveId = variationId;
        const firstSale = variationDetails.variationPrices[firstOption];
        const firstRegular =
          variationDetails.variationOriginalPrices[firstOption];
        discount = pctDiscount(firstRegular, firstSale);
      }
    }
  } else {
    discount = pctDiscount(regular, sale);
  }

  const title = typeof p?.name === "string" && p.name ? p.name : "Unnamed";

  return {
    id: String(p?.id ?? ""),
    title,
    imageSource: pickImageSource(p),
    price: sale,
    originalPrice: regular > sale ? regular : undefined,
    discount,
    rating: toNum(p?.average_rating ?? 0, 0),
    isInWishlist: false,
    isInCart: false,
    effectiveId,
    onToggleWishlist: () => {},
    onAddToCart: () => {},
    isWishlistLoading: false,
    isCartLoading: false,
  };
};

// --- Components ---
const ProductCard = ({
  imageSource,
  title,
  price,
  originalPrice,
  discount,
  rating,
  isInWishlist,
  isInCart,
  effectiveId,
  onToggleWishlist,
  onAddToCart,
  isWishlistLoading = false,
  isCartLoading = false,
}: ProductCardProps) => {
  return (
    <View style={styles.card}>
      <View style={styles.imageContainer}>
        <Image source={imageSource} style={styles.image} />
        <View style={styles.ratingContainer}>
          <Ionicons name="star" size={12} color="#FFD700" />
          <Text style={styles.ratingText}>{rating.toFixed(1)}</Text>
        </View>
      </View>
      <Text style={styles.title} numberOfLines={2}>
        {title}
      </Text>
      <View style={styles.priceContainer}>
        <View>
          {originalPrice && originalPrice > price && (
            <Text style={styles.originalPrice}>
              ₹{originalPrice.toFixed(0)}
            </Text>
          )}
          <Text style={styles.discountedPrice}>₹{price.toFixed(0)}</Text>
        </View>
        {discount && discount > 0 ? (
          <Text style={styles.discount}>{discount}% OFF</Text>
        ) : null}
        <TouchableOpacity
          onPress={() => onToggleWishlist("")}
          style={styles.wishlistButton}
          disabled={isWishlistLoading}
        >
          {isWishlistLoading ? (
            <ActivityIndicator size="small" color={Colors.PRIMARY} />
          ) : (
            <Ionicons
              name={isInWishlist ? "heart" : "heart-outline"}
              size={20}
              color={isInWishlist ? Colors.PRIMARY : "#000"}
            />
          )}
        </TouchableOpacity>
      </View>

      <TouchableOpacity
        style={[
          styles.addToCartButton,
          isInCart && { backgroundColor: "#10B981" },
        ]}
        onPress={() => onAddToCart(effectiveId)}
        disabled={isInCart || isCartLoading}
      >
        {isCartLoading ? (
          <ActivityIndicator size="small" color={Colors.WHITE} />
        ) : (
          <>
            <Ionicons
              name={isInCart ? "checkmark" : "cart"}
              size={16}
              color={Colors.WHITE}
            />
            <Text style={styles.addToCartText}>
              {isInCart ? "Added" : "Add to Cart"}
            </Text>
          </>
        )}
      </TouchableOpacity>
    </View>
  );
};

const ITEMS_PER_PAGE = 12;

const PeopleAlsoViewed = () => {
  const [items, setItems] = useState<
    (Omit<ProductCardProps, "onToggleWishlist" | "onAddToCart"> & {
      id: string;
      title: string;
    })[]
  >([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [loadingMore, setLoadingMore] = useState<boolean>(false);
  const [hasMore, setHasMore] = useState<boolean>(true);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [userId, setUserId] = useState<number | null>(null);
  const [wishlistIds, setWishlistIds] = useState<string[]>([]);
  const [cartIds, setCartIds] = useState<string[]>([]);
  const [feedbackMessage, setFeedbackMessage] = useState<string>("");

  const [loadingWishlist, setLoadingWishlist] = useState<
    Record<string, boolean>
  >({});
  const [loadingCart, setLoadingCart] = useState<Record<string, boolean>>({});

  const loadInitialData = useCallback(async () => {
    try {
      setLoading(true);
      setCurrentPage(1);

      const res = await getProducts({
        per_page: ITEMS_PER_PAGE,
        page: 1,
        status: "publish",
        order: "desc",
        orderby: "date",
      });

      const list: WCProduct[] = Array.isArray(res?.data)
        ? res.data
        : Array.isArray(res)
        ? (res as any)
        : [];

      const mappedPromises = list.map(async (p) => await mapToCard(p));
      const mapped = await Promise.all(mappedPromises);

      setItems(mapped);
      setHasMore(mapped.length === ITEMS_PER_PAGE);
    } catch (e) {
      console.error("PeopleAlsoViewed: failed to load products", e);
      setItems([]);
      setHasMore(false);
    } finally {
      setLoading(false);
    }
  }, []);

  const loadMoreData = useCallback(async () => {
    if (loadingMore || !hasMore) return;

    try {
      setLoadingMore(true);
      const nextPage = currentPage + 1;

      const res = await getProducts({
        per_page: ITEMS_PER_PAGE,
        page: nextPage,
        status: "publish",
        order: "desc",
        orderby: "date",
      });

      const list: WCProduct[] = Array.isArray(res?.data)
        ? res.data
        : Array.isArray(res)
        ? (res as any)
        : [];

      if (list.length === 0) {
        setHasMore(false);
        return;
      }

      const mappedPromises = list.map(async (p) => await mapToCard(p));
      const mapped = await Promise.all(mappedPromises);

      setItems((prev) => [...prev, ...mapped]);
      setCurrentPage(nextPage);
      setHasMore(mapped.length === ITEMS_PER_PAGE);
    } catch (e) {
      console.error("PeopleAlsoViewed: failed to load more products", e);
      setHasMore(false);
    } finally {
      setLoadingMore(false);
    }
  }, [currentPage, loadingMore, hasMore]);

  const loadUserData = useCallback(async () => {
    const session = await getSession();
    if (session?.user?.id) {
      setUserId(session.user.id);
      const customer = await getCustomerById(session.user.id);
      const wl =
        customer?.meta_data?.find((m: any) => m.key === "wishlist")?.value ||
        [];
      const cart =
        customer?.meta_data?.find((m: any) => m.key === "cart")?.value || [];
      setWishlistIds(wl);
      setCartIds(cart.map((c: CartItem) => String(c.id)));
    } else {
      setUserId(null);
      setWishlistIds([]);
      setCartIds([]);
    }
  }, []);

  useEffect(() => {
    loadUserData();
    loadInitialData();
  }, [loadUserData, loadInitialData]);

  useFocusEffect(
    useCallback(() => {
      loadUserData();
    }, [loadUserData])
  );

  const showFeedback = (msg: string) => {
    setFeedbackMessage(msg);
    setTimeout(() => setFeedbackMessage(""), 1000);
  };

  const toggleWishlist = async (productId: string) => {
    if (!userId) {
      router.push("/Login/LoginRegisterPage");
      return;
    }

    setLoadingWishlist((prev) => ({ ...prev, [productId]: true }));

    try {
      const customer = await getCustomerById(userId);
      let wishlist =
        customer?.meta_data?.find((m: any) => m.key === "wishlist")?.value ||
        [];
      const exists = wishlist.includes(productId);
      wishlist = exists
        ? wishlist.filter((id: string) => id !== productId)
        : [...wishlist, productId];
      await updateCustomerById(userId, {
        meta_data: [{ key: "wishlist", value: wishlist }],
      });

      await loadUserData();
      showFeedback(
        exists ? "Item removed from wishlist" : "Item added to wishlist"
      );
    } catch (error) {
      console.error("Error toggling wishlist:", error);
      showFeedback("Failed to update wishlist");
    } finally {
      setLoadingWishlist((prev) => ({ ...prev, [productId]: false }));
    }
  };

  const addToCart = async (effectiveProductId: string) => {
    if (!userId) {
      router.push("/Login/LoginRegisterPage");
      return;
    }

    setLoadingCart((prev) => ({ ...prev, [effectiveProductId]: true }));

    try {
      const customer = await getCustomerById(userId);
      let cart =
        customer?.meta_data?.find((m: any) => m.key === "cart")?.value || [];
      const idx = cart.findIndex((c: CartItem) => c.id === effectiveProductId);
      if (idx === -1) {
        cart.push({ id: effectiveProductId, quantity: 1 });
        await updateCustomerById(userId, {
          meta_data: [{ key: "cart", value: cart }],
        });

        await loadUserData();
        showFeedback("Item added to cart");
      }
    } catch (error) {
      console.error("Error adding to cart:", error);
      showFeedback("Failed to update cart");
    } finally {
      setLoadingCart((prev) => ({ ...prev, [effectiveProductId]: false }));
    }
  };

  const handleProductPress = (item: any) => {
    router.push({
      pathname: "/pages/DetailsOfItem/ItemDetails",
      params: { id: String(item.id), title: item.title },
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>People also viewed</Text>

      {/* Loading Initial State */}
      {loading && items.length === 0 ? (
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color={Colors.PRIMARY} />
          <Text style={styles.loadingText}>Loading products...</Text>
        </View>
      ) : (
        /* Render Grid manually using Map to safely nest inside parent ScrollView */
        <View style={styles.gridContainer}>
          {items.map((item) => (
            <TouchableOpacity
              key={item.id}
              style={styles.cardContainer}
              onPress={() => handleProductPress(item)}
            >
              <ProductCard
                imageSource={item.imageSource}
                title={item.title}
                price={item.price}
                originalPrice={item.originalPrice}
                discount={item.discount}
                rating={item.rating}
                isInWishlist={wishlistIds.includes(item.id)}
                isInCart={cartIds.includes(item.effectiveId)}
                effectiveId={item.effectiveId}
                onToggleWishlist={() => toggleWishlist(item.id)}
                onAddToCart={addToCart}
                isWishlistLoading={loadingWishlist[item.id]}
                isCartLoading={loadingCart[item.effectiveId]}
              />
            </TouchableOpacity>
          ))}
        </View>
      )}

      {/* Empty State */}
      {!loading && items.length === 0 && (
        <View style={styles.emptyContainer}>
          <Ionicons name="search-outline" size={48} color="#ddd" />
          <Text style={styles.emptyText}>No products available.</Text>
        </View>
      )}

      {/* Load More Button */}
      {hasMore && !loading && items.length > 0 && (
        <TouchableOpacity
          style={styles.loadMoreButton}
          onPress={loadMoreData}
          disabled={loadingMore}
        >
          {loadingMore ? (
            <ActivityIndicator size="small" color="#fff" />
          ) : (
            <Text style={styles.loadMoreText}>Load More</Text>
          )}
        </TouchableOpacity>
      )}

      {/* Feedback Toast */}
      {feedbackMessage ? (
        <View style={styles.messageContainer}>
          <Text style={styles.messageText}>{feedbackMessage}</Text>
        </View>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F9FAFB",
    paddingHorizontal: 16,
    paddingBottom: 20,
  },
  header: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#111827",
    marginBottom: 16,
    marginTop: 8,
  },
  loadingContainer: {
    alignItems: "center",
    padding: 40,
  },
  loadingText: {
    color: "#6B7280",
    marginTop: 8,
  },
  // Grid Styles
  gridContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  cardContainer: {
    width: (width - 48) / 2, // calculate 2 columns with spacing
    marginBottom: 16,
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 6,
    padding: 12,
  },
  imageContainer: {
    position: "relative",
    marginBottom: 8,
  },
  image: {
    width: "100%",
    height: 120,
    borderRadius: 8,
    resizeMode: "cover",
  },
  ratingContainer: {
    position: "absolute",
    top: 6,
    left: 6,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "rgba(255, 255, 255, 0.9)",
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 8,
  },
  ratingText: {
    fontSize: 10,
    fontWeight: "600",
    color: "#374151",
    marginLeft: 2,
  },
  title: {
    fontSize: 14,
    fontWeight: "500",
    color: "#111827",
    marginBottom: 8,
    height: 40,
  },
  priceContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginBottom: 12,
  },
  originalPrice: {
    fontSize: 12,
    color: "#9CA3AF",
    textDecorationLine: "line-through",
    marginBottom: 2,
  },
  discountedPrice: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#111827",
  },
  discount: {
    fontSize: 10,
    fontWeight: "600",
    color: "#EF4444",
    backgroundColor: "#FEF2F2",
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 4,
  },
  wishlistButton: {
    padding: 4,
  },
  addToCartButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Colors.PRIMARY,
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 8,
  },
  addToCartText: {
    color: Colors.WHITE,
    fontSize: 12,
    fontWeight: "600",
    marginLeft: 4,
  },
  emptyContainer: {
    alignItems: "center",
    padding: 40,
  },
  emptyText: {
    color: "#6B7280",
    marginTop: 8,
  },
  messageContainer: {
    position: "absolute",
    bottom: 20,
    left: 20,
    right: 20,
    backgroundColor: "rgba(0, 0, 0, 0.8)",
    padding: 12,
    borderRadius: 8,
    alignItems: "center",
    zIndex: 999,
  },
  messageText: {
    color: Colors.WHITE,
    fontSize: 14,
    fontWeight: "500",
  },
  // Load More Button Styles
  loadMoreButton: {
    backgroundColor: Colors.PRIMARY,
    paddingVertical: 12,
    alignItems: "center",
    borderRadius: 8,
    marginTop: 10,
    marginBottom: 30,
    alignSelf: "center",
    width: "60%",
  },
  loadMoreText: {
    color: "#fff",
    fontWeight: "600",
    fontSize: 14,
  },
});

export default PeopleAlsoViewed;
