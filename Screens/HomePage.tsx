import React from "react";
import Carousel from "../Components/Carousel";
import Header from "../Components/Header";
import CategorySelect from "../Components/CategorySelect";
import ItemSlider from "../Components/ItemSlider";
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
} from "native-base";

export default function HomePage() {
  return (
    <Box safeArea>
      <ScrollView showsVerticalScrollIndicator={false}>
        <StatusBar style={"dark"} backgroundColor={"white"} />

        <Header />
        <Carousel />
        <CategorySelect />
        <ItemSlider title={"Today's Deals"}/>
        
      </ScrollView>
    </Box>
  );
}
