import React, { useState, useEffect } from "react";
import Animated, {
  useSharedValue,
  interpolate,
  useAnimatedStyle,
  Extrapolate,
} from "react-native-reanimated";
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  StatusBar,
} from "react-native";
import { Box, Text, Image, HStack, ScrollView } from "native-base";

// since flatlist is not directly available in reanimated,
// it is converted into custom component using this hook.
const AnimatedFlatList = Animated.createAnimatedComponent(FlatList);

const SIDECARD_LENGTH = 15;
const SPACING = 5;
const CARD_LENGTH = 300;

const DATA = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "First Item",
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    title: "Second Item",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    title: "Third Item",
  },
];

// the Item inside the flatlist (component)
interface itemProps {
  scroll: any;
  index: number;
}

function Item({ scroll, index }: itemProps) {
  // Stores the shared value opacity.
  const opacity = useSharedValue(1);

  const inputRange = [
    (index - 1) * CARD_LENGTH,
    index * CARD_LENGTH,
    (index + 1) * CARD_LENGTH,
  ];
  opacity.value = interpolate(
    scroll,
    inputRange,
    [0.5, 1, 0.5],
    Extrapolate.CLAMP
  );

  useEffect(() => {
    console.log("scale: ", scroll);
  }, [scroll]);
  const cardStyle = useAnimatedStyle(() => {
    return {
      // transform: [{ scaleY: scale.value }],
      opacity: opacity.value,
    };
  });

  return (
    <Animated.View style={[styles.card, cardStyle]}>
      <Image
        source={require("../assets/images/temp.jpg")}
        alt={"product banner"}
        size={"full"}
        rounded={16}
      />
    </Animated.View>
  );
}

export default function Carousel() {
  const [scrollX, setScrollX] = useState(0);

  return (
    <Animated.View>
      <AnimatedFlatList
        scrollEventThrottle={16}
        horizontal={true}
        data={DATA}
        renderItem={({ item, index }) => {
          console.log("index: ", index);
          // Item is rendered having props - (scroll.x and index)
          return <Item scroll={scrollX} index={index} />;
        }}
        //@ts-ignore
        keyExtractor={(item) => item.id}
        onScroll={(event) => {
          // the scroll.x value is updated whenever list is scrolled.
          setScrollX(event.nativeEvent.contentOffset.x);
          console.log(scrollX);
        }}
      />
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  card: {
    height: 200,
    width: CARD_LENGTH,
    overflow: "hidden",
  },
});
