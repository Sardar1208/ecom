import React from "react";
import { Dimensions } from "react-native";
import { StatusBar } from "expo-status-bar";
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
} from "native-base";
import { SharedElement } from "react-navigation-shared-element";

export default function ItemPageCarousel() {
  return (
    <Box position={"absolute"}>
      <Box height={500} overflow={"hidden"}>
        <Image
          source={require("../assets/images/temp.jpg")}
          size={"full"}
          alt={"item_img"}
        />
      </Box>
    </Box>
  );
}
