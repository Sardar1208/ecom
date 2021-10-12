import React, { useState, useEffect } from "react";
import { Dimensions } from "react-native";
import { StatusBar } from "expo-status-bar";
import ItemPageCarousel from "../Components/ItemPageCarousel";
import ItemPageInfoA from "../Components/ItemPageInfoA";
import ItemPageInfoB from "../Components/ItemPageInfoB";
import ItemPageInfoC from "../Components/ItemPageInfoC";
import {
  Box,
  Text,
  Image,
  HStack,
  Button,
  Pressable,
  ScrollView,
  FlatList,
  Input,
  Icon,
  Center,
  Container,
} from "native-base";
import { SharedElement } from "react-navigation-shared-element";
import { backgroundColor } from "styled-system";

const window = Dimensions.get("window");
const SCR_WIDTH = window.width;
const SCR_HEIGHT = window.height;

const ITEM_DATA = [
  {
    id: 1,
    item: <ItemPageInfoA />,
  },
  {
    id: 2,
    item: <ItemPageInfoB />,
  },
  {
    id: 3,
    item: <ItemPageInfoC />,
  },
];

interface ItemPageInterface {
  navigation: any;
}

export default function ItemPage({ navigation }: ItemPageInterface) {
  const [scrollY, setScrollY] = useState(0);
  const [scrollX, setScrollX] = useState(0);
  const [initialHeight, setInitialHeight] = useState(0);
  const [BHeight, setBHeight] = useState(0);
  const [CHeight, setCHeight] = useState(0);

  useEffect(() => {
    console.log("width: ", SCR_WIDTH);
  }, []);

  return (
    <Box safeArea minHeight={"100%"}>
      <ItemPageCarousel />
      <ScrollView
        position={"absolute"}
        bottom={0}
        onScroll={(e) => {
          setScrollY(e.nativeEvent.contentOffset.y);
          // console.log(e.nativeEvent.contentOffset.y);
        }}
      >
        <Box
          backgroundColor={"white"}
          borderTopRadius={26}
          // style={{ height: }}
        >
          {/* <FlatList
            data={ITEM_DATA}
            horizontal={true}
            keyExtractor={(item) => item.id}
            renderItem={({ item, index }) => {
              // let InfoComp = item.item;
              return (
                <Box
                  style={{ width: SCR_WIDTH, paddingHorizontal: 20 }}
                  onLayout={(e) => {
                    console.log(index + " : " + e.nativeEvent.layout.height);
                    // if(index == 0){

                    // }
                  }}
                  display={"flex"}
                >
                  {item.item}
                </Box>
              );
            }}
          /> */}
          <ScrollView
            horizontal={true}
            snapToInterval={SCR_WIDTH}
            disableIntervalMomentum={true}
            showsHorizontalScrollIndicator={false}
            onScroll={(e) => {
              setScrollX(e.nativeEvent.contentOffset.x);
              if (e.nativeEvent.contentOffset.x >= SCR_WIDTH) {
              }
              // console.log(e.nativeEvent.contentOffset.x);
            }}
          >
            <Box
              style={{ width: SCR_WIDTH, paddingHorizontal: 20 }}
              onLayout={(e) => {
                setInitialHeight(e.nativeEvent.layout.height);
                console.log("layout: ", e.nativeEvent.layout);
              }}
            >
              <ItemPageInfoA />
            </Box>
            <Box
              style={{
                width: SCR_WIDTH,
                paddingHorizontal: 20,
                height: initialHeight,
              }}
            >
              <ItemPageInfoB />
            </Box>
            <Box
              style={{
                width: SCR_WIDTH,
                paddingHorizontal: 20,
                height: initialHeight,
              }}
            >
              <ItemPageInfoC />
            </Box>
            </ScrollView>
        </Box>
      </ScrollView>
    </Box>
  );
}
{
  /* 
// export default ItemPage; */
}
