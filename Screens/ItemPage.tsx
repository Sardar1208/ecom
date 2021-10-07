import React from "react";
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
  },
  {
    id: 2,
  },
  {
    id: 3,
  },
];

interface ItemPageInterface {
  navigation: any;
}

export default function ItemPage({ navigation }: ItemPageInterface) {
  return (
    <Box safeArea minHeight={"100%"}>
      <ItemPageCarousel />
      <ScrollView>
        <Container
          style={{ height: SCR_HEIGHT * 0.6, backgroundColor: "transparent" }}
        />
        <Box backgroundColor={"white"} borderTopRadius={26}>
          {/* <FlatList
            horizontal={true}
            data={ITEM_DATA}
            keyExtractor={(item) => item.id}
            renderItem={({item,index}) =>{

            }}
          /> */}
          <ScrollView horizontal={true}>
            <Box style={{ width: SCR_WIDTH, paddingHorizontal: 20 }}>
              <ItemPageInfoA />
            </Box>
            <Box style={{ width: SCR_WIDTH, paddingHorizontal: 20 }}>
              <ItemPageInfoB />
            </Box>
            <Box style={{ width: SCR_WIDTH, paddingHorizontal: 20 }}>
              <ItemPageInfoC />
            </Box>
          </ScrollView>
        </Box>
      </ScrollView>
    </Box>
  );
}

// export default ItemPage;
