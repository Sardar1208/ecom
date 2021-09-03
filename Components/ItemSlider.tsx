import React from "react";
import {
  Box,
  Text,
  Image,
  HStack,
  Button,
  Pressable,
  FlatList,
} from "native-base";
import { Dimensions } from "react-native";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
} from "react-native-reanimated";

const LIST_DATA = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba0",
    title: "First Item",
    price: 0.0,
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f631",
    price: 0.0,
    title: "Second Item",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d722",
    price: 0.0,
    title: "Third Item",
  },
  {
    id: "58694a0f-4na1-471f-bd96-145571e29d723",
    price: 0.0,
    title: "Fourth Item",
  },
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba4",
    title: "First Item",
    price: 0.0,
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f635",
    price: 0.0,
    title: "Second Item",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d726",
    price: 0.0,
    title: "Third Item",
  },
  {
    id: "58694a0f-4na1-471f-bd96-145571e29d727",
    price: 0.0,
    title: "Fourth Item",
  },
];

// the data for flatlist of dots (half of the data of main list because 2 items are displayed in single dot).
let dotData: any = [];
for (let i = 0; i < LIST_DATA.length / 2; i++) {
  dotData.push({ id: i });
}

// Dimentions and constants
const window = Dimensions.get("window");
const SCR_WIDTH = window.width;
const SPACING = (SCR_WIDTH / 2) * 0.05; // space between each item
const SIDE_PADDING = (SCR_WIDTH / 2) * 0.1; // margin horizontal of the entire list
const ITEM_SIZE = (SCR_WIDTH / 2) * 0.85;
const IMG_SIZE = ITEM_SIZE * 0.9;
const SCROLL = (ITEM_SIZE + SPACING * 2) * 2; // How much to scroll in a single swipe.

interface dotProps {
  index: any;
  scrollX: any;
}

interface listProps {
  title: String;
}

function Dot({ index, scrollX }: dotProps) {
  const dotStyle = useAnimatedStyle(() => {
    return {
      width: withTiming(
        Math.abs(scrollX.value - index * SCROLL) < SPACING ? 20 : 10
      ),
      height: 10,
    };
  });

  return (
    <Box>
      <Animated.View
        style={[
          {
            backgroundColor: "#4ade80",
            marginHorizontal: 5,
            borderRadius: 5,
          },
          dotStyle,
        ]}
      ></Animated.View>
    </Box>
  );
}

export default function itemSlider({ title }: listProps) {
  const scrollX = useSharedValue(0);

  return (
    <Box
      my={4}
      style={{
        paddingHorizontal: SIDE_PADDING,
      }}
    >
      <Text fontSize={"xl"} fontWeight={"bold"} mb={2} ml={2}>
        {title}
      </Text>
      <FlatList
        scrollEventThrottle={16}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        disableIntervalMomentum={true}
        decelerationRate={0.8}
        snapToInterval={SCROLL}
        data={LIST_DATA}
        keyExtractor={(item) => item.id}
        onScroll={(event) => {
          scrollX.value = event.nativeEvent.contentOffset.x;
        //   console.log("x: ", scrollX.value);
        }}
        renderItem={({ item, index }) => {
          return (
            <Box
              backgroundColor={"white"}
              rounded={"xl"}
              shadow={9}
              style={{
                padding: (ITEM_SIZE - IMG_SIZE) / 2,
                marginLeft: index == 0 ? 0 : SPACING * 2,
              }}
            >
              <Box
                rounded={"xl"}
                overflow={"hidden"}
                style={{
                  width: IMG_SIZE,
                  height: IMG_SIZE,
                }}
              >
                <Image
                  source={require("../assets/images/temp.jpg")}
                  alt={"item_img"}
                  size={"full"}
                />
              </Box>
              <Text
                color={"gray.400"}
                fontSize={"lg"}
                fontWeight={"bold"}
                textAlign={"center"}
              >
                Item Name
              </Text>
              <Text fontSize={"md"} fontWeight={"bold"} textAlign={"center"}>
                $0.00
              </Text>
            </Box>
          );
        }}
      />

      <FlatList
        data={dotData}
        horizontal={true}
        style={{
          display: "flex",
          alignSelf: "center",
          marginTop: 10,
        }}
        keyExtractor={(item) => item.id}
        renderItem={({ item, index }) => {
          return <Dot index={index} scrollX={scrollX} />;
        }}
      />
    </Box>
  );
}
