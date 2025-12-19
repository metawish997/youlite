import Colors from "@/utils/Colors";
import { Ionicons } from "@expo/vector-icons";
import axios from "axios";
import { Image } from "expo-image";
import { router } from "expo-router";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

const Header: React.FC = () => {
  const [inputValue, setInputValue] = useState("");
  const [searchResults, setSearchResults] = useState<any[]>([]);
  const [loadingSearch, setLoadingSearch] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);

  /* Animated placeholder */
  const placeholderTexts = useMemo(
    () => ["Categories", "All items", "Discount items", "Lights"],
    []
  );

  const [placeholderText, setPlaceholderText] = useState("");

  useEffect(() => {
    let index = 0;
    let text = "";
    let deleting = false;

    const run = () => {
      const word = placeholderTexts[index];

      if (!deleting && text.length < word.length) {
        text = word.slice(0, text.length + 1);
      } else if (!deleting) {
        deleting = true;
        setTimeout(run, 1500);
        return;
      } else if (deleting && text.length > 0) {
        text = text.slice(0, -1);
      } else {
        deleting = false;
        index = (index + 1) % placeholderTexts.length;
      }

      setPlaceholderText(text);
      setTimeout(run, deleting ? 50 : 100);
    };

    const timer = setTimeout(run, 1000);
    return () => clearTimeout(timer);
  }, [placeholderTexts]);

  /* Live search */
  const searchProducts = useCallback(async (query: string) => {
    if (!query.trim()) {
      setSearchResults([]);
      setShowDropdown(false);
      return;
    }

    try {
      setLoadingSearch(true);
      const { data } = await axios.get(
        `https://youlitestore.in/wp-json/wc/v3/products?search=${encodeURIComponent(
          query
        )}&consumer_key=ck_d75d53f48f9fb87921a2523492a995c741d368df&consumer_secret=cs_ae3184c5435dd5d46758e91fa9ed3917d85e0c17`
      );
      setSearchResults(data);
      setShowDropdown(true);
    } catch (e) {
      console.error("Search error", e);
    } finally {
      setLoadingSearch(false);
    }
  }, []);

  useEffect(() => {
    const t = setTimeout(() => {
      if (inputValue) searchProducts(inputValue);
    }, 300);
    return () => clearTimeout(t);
  }, [inputValue, searchProducts]);

  const handleSelect = (item: any) => {
    setShowDropdown(false);
    setInputValue("");
    router.push({
      pathname: "/pages/DetailsOfItem/ItemDetails",
      params: { id: String(item.id), title: item.name },
    });
  };

  return (
    <View style={styles.container}>
      {/* Search bar */}
      <View style={styles.searchContainer}>
        <TextInput
          value={inputValue}
          onChangeText={setInputValue}
          placeholder={`Search ${placeholderText}...`}
          placeholderTextColor="#999"
          style={styles.searchInput}
        />
        <TouchableOpacity style={styles.searchButton}>
          <Ionicons name="search" size={20} color={Colors.PRIMARY} />
        </TouchableOpacity>
      </View>

      {/* Search dropdown */}
      {showDropdown && (
        <View style={styles.dropdown}>
          {loadingSearch ? (
            <ActivityIndicator color={Colors.PRIMARY} />
          ) : searchResults.length === 0 ? (
            <Text style={styles.noResult}>No results found</Text>
          ) : (
            <FlatList
              data={searchResults}
              keyExtractor={(item) => item.id.toString()}
              renderItem={({ item }) => (
                <TouchableOpacity
                  style={styles.dropdownItem}
                  onPress={() => handleSelect(item)}
                >
                  <Image
                    source={{ uri: item.images?.[0]?.src }}
                    style={styles.dropdownImage}
                  />
                  <View style={{ flex: 1 }}>
                    <Text numberOfLines={1} style={styles.dropdownText}>
                      {item.name}
                    </Text>
                    <Text style={styles.dropdownPrice}>₹{item.price}</Text>
                  </View>
                </TouchableOpacity>
              )}
            />
          )}
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.PRIMARY,
    padding: 16,
    paddingTop: 35,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  searchInput: {
    flex: 1,
    height: 40,
    backgroundColor: "#fff",
    borderRadius: 10,
    paddingHorizontal: 10,
    fontWeight: "600",
  },
  searchButton: {
    width: 40,
    height: 40,
    backgroundColor: "#fff",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  dropdown: {
    backgroundColor: "#fff",
    borderRadius: 10,
    marginTop: 6,
    maxHeight: 300,
  },
  dropdownItem: {
    flexDirection: "row",
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  dropdownImage: {
    width: 40,
    height: 40,
    borderRadius: 6,
    marginRight: 10,
  },
  dropdownText: {
    fontWeight: "600",
  },
  dropdownPrice: {
    fontSize: 12,
    color: Colors.PRIMARY,
  },
  noResult: {
    textAlign: "center",
    padding: 12,
    color: "#777",
  },
});

export default Header;
