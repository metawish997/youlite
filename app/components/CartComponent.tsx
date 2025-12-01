// components/CartComponent.tsx
import React, { useCallback, useEffect, useState } from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
  ActivityIndicator,
  Alert,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useFocusEffect } from "@react-navigation/native";
import { router } from "expo-router";
import {
  getCustomerById,
  getSession,
  updateCustomerById,
} from "@/lib/services/authService";
import { getProductDetail } from "@/lib/api/productApi";
import Colors from "@/utils/Colors";
import styles from "./CartComponentStyle";
import Loading from "./Loading";

interface CartItem {
  id: string;
  name: string;
  price: number;
  originalPrice: number;
  size: string;
  color: string;
  image: { uri: string };
  quantity: number;
}

const CartComponent = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [userId, setUserId] = useState<number | null>(null);
  const [errorText, setErrorText] = useState<string>("");
  const [busyQty, setBusyQty] = useState<Record<string, boolean>>({});
  const [busyRemove, setBusyRemove] = useState<Record<string, boolean>>({});

  // Navigation helper
  const go = (path: string) => router.push(path as any);

  /* -------------------- Load Cart -------------------- */
  const loadCart = useCallback(async () => {
    try {
      setLoading(true);
      setErrorText("");

      const session = await getSession();

      if (!session?.user?.id) {
        setErrorText("Please log in to view your cart.");
        setCartItems([]);
        setLoading(false);
        return;
      }

      setUserId(session.user.id);
      const customer = await getCustomerById(session.user.id);

      if (!customer) {
        setErrorText("Failed to load customer data.");
        setCartItems([]);
        setLoading(false);
        return;
      }

      const cartMeta =
        customer.meta_data?.find((m: any) => m.key === "cart")?.value || [];

      if (!Array.isArray(cartMeta) || cartMeta.length === 0) {
        setCartItems([]);
        setLoading(false);
        return;
      }

      const fetched: CartItem[] = [];

      for (const entry of cartMeta) {
        const { id, quantity } = entry;
        if (!id) continue;

        try {
          const productResponse = await getProductDetail(id.toString());
          const productData = productResponse?.data || productResponse;
          if (!productData) continue;

          const attrs = Array.isArray(productData.attributes)
            ? productData.attributes
            : [];
          const color =
            attrs.find((a: any) => a?.name?.toLowerCase().includes("color"))
              ?.options?.[0] || "Default";
          const size =
            attrs.find((a: any) => a?.name?.toLowerCase().includes("size"))
              ?.options?.[0] || "Default";

          const price = parseFloat(
            productData.sale_price ||
              productData.price ||
              productData.regular_price ||
              "0"
          );

          const originalPrice = parseFloat(
            productData.regular_price || productData.price || price.toString()
          );

          const imageUri =
            productData.images?.[0]?.src ||
            productData.image?.src ||
            "https://via.placeholder.com/100";

          fetched.push({
            id: productData.id?.toString() || id.toString(),
            name: productData.name || "Unnamed Product",
            price: isNaN(price) ? 0 : price,
            originalPrice: isNaN(originalPrice) ? price : originalPrice,
            size,
            color,
            image: { uri: imageUri },
            quantity: quantity || 1,
          });
        } catch (err) {
          continue;
        }
      }

      setCartItems(fetched);
    } catch (err) {
      setErrorText("Failed to load cart. Please try again.");
      setCartItems([]);
    } finally {
      setLoading(false);
    }
  }, []);

  useFocusEffect(
    useCallback(() => {
      loadCart();
    }, [loadCart])
  );

  /* -------------------- Meta Update -------------------- */
  const updateCartMeta = async (items: CartItem[]) => {
    if (!userId) return;

    const meta = items.map((it) => ({
      id: it.id,
      quantity: it.quantity,
    }));

    try {
      await updateCustomerById(userId, {
        meta_data: [{ key: "cart", value: meta }],
      });
    } catch {
      Alert.alert("Error", "Failed to update cart");
    }
  };

  /* -------------------- Update Quantity -------------------- */
  const updateQuantity = async (id: string, qty: number) => {
    if (qty < 1) return;

    setBusyQty((p) => ({ ...p, [id]: true }));
    const updated = cartItems.map((it) =>
      it.id === id ? { ...it, quantity: qty } : it
    );
    setCartItems(updated);
    await updateCartMeta(updated);
    setBusyQty((p) => ({ ...p, [id]: false }));
  };

  /* -------------------- Remove Item -------------------- */
  const removeItem = async (id: string) => {
    setBusyRemove((p) => ({ ...p, [id]: true }));
    const updated = cartItems.filter((it) => it.id !== id);
    setCartItems(updated);
    await updateCartMeta(updated);
    setBusyRemove((p) => ({ ...p, [id]: false }));
  };

  /* -------------------- Totals -------------------- */
  const subtotal = cartItems.reduce((s, it) => s + it.price * it.quantity, 0);
  const totalQuantity = cartItems.reduce((s, it) => s + it.quantity, 0);
  const total = subtotal;

  /* -------------------- Quick Links (Always Visible) -------------------- */
  const QuickLinks = () => (
    <View style={styles.buttonContainer}>
      <TouchableOpacity
        style={styles.optionButton}
        onPress={() => go("/pages/orderHistory/orderHistory")}
      >
        <Ionicons name="receipt-outline" size={20} color={Colors.PRIMARY} />
        <Text style={styles.optionText}>Orders</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.optionButton}
        onPress={() => go("/pages/AddToCart/Coupons")}
      >
        <Ionicons name="pricetag-outline" size={20} color={Colors.PRIMARY} />
        <Text style={styles.optionText}>Coupons</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.optionButton}
        onPress={() => go("/pages/AddToCart/Help")}
      >
        <Ionicons name="help-circle-outline" size={20} color={Colors.PRIMARY} />
        <Text style={styles.optionText}>Help</Text>
      </TouchableOpacity>
    </View>
  );

  /* -------------------- Loading -------------------- */
  if (loading) {
    return (
      <View style={styles.loader}>
        <Loading />
      </View>
    );
  }

  /* -------------------- Error State (Still Show Quick Links) -------------------- */
  if (errorText) {
    return (
      <View style={styles.container}>
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity
            onPress={() => router.back()}
            style={styles.headerButton}
          >
            <Ionicons name="arrow-back" size={24} color={Colors.WHITE} />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>My Cart</Text>
          <Text style={styles.cartCountText}>0 items</Text>
        </View>

        <QuickLinks />

        <View style={styles.errorContainer}>
          <Ionicons name="cart-outline" size={80} color="#ccc" />
          <Text style={styles.errorText}>{errorText}</Text>

          <TouchableOpacity style={styles.retryButton} onPress={loadCart}>
            <Text style={styles.retryText}>Retry</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.retryButton, { backgroundColor: "#555" }]}
            onPress={() => router.push("/Login/LoginRegisterPage")}
          >
            <Text style={styles.retryText}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  /* -------------------- Empty Cart (Still Show Quick Links) -------------------- */
  if (cartItems.length === 0) {
    return (
      <View style={styles.container}>
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity
            onPress={() => router.back()}
            style={styles.headerButton}
          >
            <Ionicons name="arrow-back" size={24} color={Colors.WHITE} />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>My Cart</Text>
          <Text style={styles.cartCountText}>0 items</Text>
        </View>

        <QuickLinks />

        <View style={styles.emptyCart}>
          <Ionicons name="cart-outline" size={80} color="#ddd" />
          <Text style={styles.emptyText}>Your cart is empty</Text>
          <Text style={styles.emptySubtext}>
            Browse our products and start adding items!
          </Text>

          <TouchableOpacity
            style={styles.shopButton}
            onPress={() => router.push("/(tabs)/Category")}
          >
            <Text style={styles.shopButtonText}>Shop Now</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  /* -------------------- Main Cart -------------------- */
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => router.back()}
          style={styles.headerButton}
        >
          <Ionicons name="arrow-back" size={24} color={Colors.WHITE} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>My Cart</Text>
        <Text style={styles.cartCountText}>{totalQuantity} items</Text>
      </View>

      <QuickLinks />

      <ScrollView
        style={styles.itemsContainer}
        showsVerticalScrollIndicator={false}
      >
        {cartItems.map((item) => (
          <View key={item.id} style={styles.itemCard}>
            <TouchableOpacity
              style={styles.imageContainer}
              onPress={() =>
                router.push({
                  pathname: "/pages/DetailsOfItem/ItemDetails",
                  params: { id: item.id, title: item.name },
                })
              }
            >
              <Image
                source={{ uri: item.image.uri }}
                style={styles.itemImage}
              />
            </TouchableOpacity>

            <View style={styles.itemDetails}>
              <Text style={styles.itemName} numberOfLines={2}>
                {item.name}
              </Text>
              <Text style={styles.itemSizeColor}>
                Size: {item.size} | Color: {item.color}
              </Text>

              <View style={styles.priceContainer}>
                <Text style={styles.itemPrice}>
                  ₹{item.price.toLocaleString()}
                </Text>
                {item.originalPrice > item.price && (
                  <>
                    <Text style={styles.originalPrice}>
                      ₹{item.originalPrice.toLocaleString()}
                    </Text>
                    <Text style={styles.discountText}>
                      {Math.round(
                        ((item.originalPrice - item.price) /
                          item.originalPrice) *
                          100
                      )}
                      % OFF
                    </Text>
                  </>
                )}
              </View>

              <View style={styles.quantityContainer}>
                <TouchableOpacity
                  onPress={() => updateQuantity(item.id, item.quantity - 1)}
                  style={styles.quantityButton}
                  disabled={busyQty[item.id] || item.quantity <= 1}
                >
                  {busyQty[item.id] ? (
                    <ActivityIndicator size={16} color={Colors.PRIMARY} />
                  ) : (
                    <Ionicons name="remove" size={20} color="#333" />
                  )}
                </TouchableOpacity>

                <Text style={styles.quantityText}>{item.quantity}</Text>

                <TouchableOpacity
                  onPress={() => updateQuantity(item.id, item.quantity + 1)}
                  style={styles.quantityButton}
                  disabled={busyQty[item.id]}
                >
                  {busyQty[item.id] ? (
                    <ActivityIndicator size={16} color={Colors.PRIMARY} />
                  ) : (
                    <Ionicons name="add" size={20} color="#333" />
                  )}
                </TouchableOpacity>

                <TouchableOpacity
                  onPress={() => removeItem(item.id)}
                  style={styles.removeButton}
                  disabled={busyRemove[item.id]}
                >
                  {busyRemove[item.id] ? (
                    <ActivityIndicator size={14} color="#ff3f6c" />
                  ) : (
                    <Text style={styles.removeText}>Remove</Text>
                  )}
                </TouchableOpacity>
              </View>
            </View>
          </View>
        ))}

        <View style={styles.spacer} />
      </ScrollView>

      {/* Footer */}
      <View style={styles.bottomContainer}>
        <View style={styles.summaryContainer}>
          <View style={styles.summaryRow}>
            <Text style={styles.summaryLabel}>
              Subtotal ({totalQuantity} items)
            </Text>
            <Text style={styles.summaryValue}>
              ₹{subtotal.toLocaleString()}
            </Text>
          </View>

          <View style={styles.summaryRow}>
            <Text style={styles.summaryLabel}>Delivery</Text>
            <Text style={styles.summaryValue}>FREE</Text>
          </View>

          <View style={styles.totalRow}>
            <Text style={styles.totalLabel}>Total</Text>
            <Text style={styles.totalValue}>₹{total.toLocaleString()}</Text>
          </View>
        </View>

        <TouchableOpacity
          style={styles.checkoutButton}
          onPress={() => router.push("/pages/Checkout/Checkout")}
        >
          <Text style={styles.checkoutText}>Proceed to Checkout</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CartComponent;
