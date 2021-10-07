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

export default function ItemPageInfoC() {
  return (
    <Box>
      <Box mt={8} mb={12}>
        <Text fontSize={"md"} fontWeight={"bold"} color={"gray.500"} mb={2}>
          Description
        </Text>
        <Text>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore
          minima est aspernatur rerum temporibus impedit quaerat, tenetur
          laboriosam cum. Neque earum temporibus ducimus repellendus maiores!
        </Text>
        <Text>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore
          minima est aspernatur rerum temporibus impedit quaerat, tenetur
          laboriosam cum. Neque earum temporibus ducimus repellendus maiores!
        </Text>
        <Text>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore
          minima est aspernatur rerum temporibus impedit quaerat, tenetur
          laboriosam cum. Neque earum temporibus ducimus repellendus maiores!
        </Text>
      </Box>
    </Box>
  );
}
