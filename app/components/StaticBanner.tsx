import { router } from 'expo-router';
import React, { useEffect, useRef, useState } from 'react';
import {
  Dimensions,
  FlatList,
  ImageBackground,
  NativeScrollEvent,
  NativeSyntheticEvent,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

const { width } = Dimensions.get('window');

const bannerData = [
  {
    id: '1',
    image: require('@/assets/images/scrollbanner/1.jpg'),
    title: 'Solar Mashal Light (Y-23)',
    description: "Bring classic elegance to your outdoor.",
  },
  {
    id: '2',
    image: require('@/assets/images/scrollbanner/2.jpg'),
    title: 'Solar Mini Flood Light (Y-23 Modal )',
    description: "Perfect for security and decorative purposes.",
  },
  {
    id: '3',
    image: require('@/assets/images/scrollbanner/3.jpg'),
    title: 'Solar Pillar Light Glove (Y-18 Modal)',
    description: "Combines elegance with functionality.",
  },
];

// Duplicate list for infinite effect
const loopData = [...bannerData, ...bannerData];

const ITEM_WIDTH = width;

const StaticBanner: React.FC = () => {
  const flatListRef = useRef<FlatList<any>>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  // In React Native, timers are numbers
  const timerRef = useRef<number | null>(null);

  const navigateToList = () => {
    router.push('/pages/LIstPage/AllProductsScreen');
  };

  // Auto-scroll every 2.5s with guard
  useEffect(() => {
    // clear any previous
    if (timerRef.current != null) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
    // set new interval
    timerRef.current = setInterval(() => {
      setCurrentIndex((prev) => {
        const nextIndex = (prev + 1) % loopData.length;
        try {
          flatListRef.current?.scrollToIndex({ index: nextIndex, animated: true });
        } catch {
          flatListRef.current?.scrollToOffset({ offset: nextIndex * ITEM_WIDTH, animated: true });
        }
        return nextIndex;
      });
    }, 2500) as unknown as number;

    // cleanup
    return () => {
      if (timerRef.current != null) {
        clearInterval(timerRef.current);
        timerRef.current = null;
      }
    };
  }, []);

  // Track scroll
  const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const offsetX = event.nativeEvent.contentOffset.x;
    const index = Math.round(offsetX / ITEM_WIDTH);
    setCurrentIndex(index);
  };

  const getItemLayout = (_: any, index: number) => ({
    length: ITEM_WIDTH,
    offset: ITEM_WIDTH * index,
    index,
  });

  return (
    <View>
      <FlatList
        ref={flatListRef}
        data={loopData}
        keyExtractor={(_, index) => index.toString()}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={handleScroll}
        scrollEventThrottle={16}
        getItemLayout={getItemLayout}
        renderItem={({ item }) => (
          <TouchableOpacity activeOpacity={0.9} onPress={navigateToList}>
            <ImageBackground source={item.image} style={styles.bannerImage} imageStyle={{ borderRadius: 0 }}>
              {/* Overlay content */}
              <View style={styles.contentBox}>
                <Text
                  style={[
                    styles.title,
                    item.id === '1' && { color: '#000' },
                  ]}
                >
                  {item.title}
                </Text>
                <Text
                  style={[
                    styles.description, item.id === '1' && { color: '#363636ff' },
                  ]}
                >
                  {item.description}
                </Text>
                <View
                  style={[
                    styles.button,
                    item.id !== '1' && { borderColor: 'white' }
                  ]}
                >
                  <Text style={item.id === '1' ? styles.buttonText : styles.buttonTextWhite}>
                    Shop Now
                  </Text>
                </View>

              </View>
            </ImageBackground>
          </TouchableOpacity>
        )
        }
      />

      {/* Dots Indicator */}
      <View style={styles.dotContainer}>
        {bannerData.map((_, index) => {
          const isActive = currentIndex % bannerData.length === index;
          return <View key={`dot_${index}`} style={[styles.dot, isActive && styles.activeDot]} />;
        })}
      </View>
    </View >
  );
};

const styles = StyleSheet.create({
  bannerImage: {
    width: ITEM_WIDTH,
    height: 220,
    justifyContent: 'center',
    paddingLeft: 20,
  },
  contentBox: {
    width: '55%',
    padding: 15,
    borderRadius: 0,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 5,
  },
  description: {
    fontSize: 14,
    color: '#f2f2f2',
    marginBottom: 10,
  },
  button: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 12,
    alignSelf: 'flex-start',
    borderWidth: 1
  },
  buttonText: {
    color: '#000',
    fontWeight: 'bold',
    fontSize: 14,
  },
  buttonTextWhite: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 14
  },
  dotContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#ccc',
    marginHorizontal: 4,
  },
  activeDot: {
    backgroundColor: '#000',
    width: 16,
  },
});

export default StaticBanner;
