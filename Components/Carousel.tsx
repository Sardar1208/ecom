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
  Dimensions,
} from "react-native";
import { Box, Text, Image, HStack, ScrollView } from "native-base";

// since flatlist is not directly available in reanimated,
// it is converted into custom component using this hook.
const AnimatedFlatList = Animated.createAnimatedComponent(FlatList);

const { width, height } = Dimensions.get("window");
const SIDECARD_LENGTH = (width*0.18) /2;
const SPACING = width*0.02;
const CARD_LENGTH = width*0.8;

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
  // console.log("width: ", width);
  // console.log("height: ", height);
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

  const size = useSharedValue(0.8);
  const sizeInputRange = [
    (index - 1) * CARD_LENGTH,
    index * CARD_LENGTH,
    (index + 1) * CARD_LENGTH,
  ];
  size.value = interpolate(
    scroll,
    sizeInputRange,
    [0.8, 1, 0.8],
    Extrapolate.CLAMP
  );

  const cardStyle = useAnimatedStyle(() => {
    return {
      transform: [{ scaleY: size.value }],
      opacity: opacity.value,
    };
  });

  return (
    <Animated.View style={[styles.card, cardStyle, {
      marginLeft: index == 0 ? SIDECARD_LENGTH : SPACING,
      marginRight: index == 2 ? SIDECARD_LENGTH : SPACING,
    }]}>
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
        showsHorizontalScrollIndicator={false}
        horizontal={true}
        decelerationRate={0.8}
        snapToInterval={CARD_LENGTH + (SPACING * 1.5)}
        disableIntervalMomentum={true}
        disableScrollViewPanResponder={true}
        snapToAlignment={"center"}
        data={DATA}
        renderItem={({ item, index }) => {
          // console.log("index: ", index);
          // Item is rendered having props - (scroll.x and index)
          return <Item scroll={scrollX} index={index} />;
        }}
        //@ts-ignore
        keyExtractor={(item) => item.id}
        onScroll={(event) => {
          // the scroll.x value is updated whenever list is scrolled.
          setScrollX(event.nativeEvent.contentOffset.x);
          // console.log(scrollX);
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
