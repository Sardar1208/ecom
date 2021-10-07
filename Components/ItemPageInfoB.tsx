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

export default function ItemPageInfoB() {
  return (
    <Box>
      <Box mt={8}>
        <Text fontSize={"md"} fontWeight={"bold"} color={"gray.500"} mb={2}>
          Product Details
        </Text>

        <Box display={"flex"} flexDirection={"row"} my={1}>
          <Box width={"40%"}>
            <Text fontWeight={"bold"}>RAM | ROM</Text>
          </Box>
          <Box width={"60%"}>
            <Text>6 GB RAM | 128GB ROM</Text>
          </Box>
        </Box>

        <Box display={"flex"} flexDirection={"row"} my={1}>
          <Box width={"40%"}>
            <Text fontWeight={"bold"}>Processor</Text>
          </Box>
          <Box width={"60%"}>
            <Text>Mediatek Dimensity 810 5G</Text>
          </Box>
        </Box>

        <Box display={"flex"} flexDirection={"row"} my={1}>
          <Box width={"40%"}>
            <Text fontWeight={"bold"}>Rear Camera</Text>
          </Box>
          <Box width={"60%"}>
            <Text>64MP + 2MP + 2MP</Text>
          </Box>
        </Box>

        <Box display={"flex"} flexDirection={"row"} my={1}>
          <Box width={"40%"}>
            <Text fontWeight={"bold"}>Front Camera</Text>
          </Box>
          <Box width={"60%"}>
            <Text>16MP</Text>
          </Box>
        </Box>

        <Box display={"flex"} flexDirection={"row"} my={1}>
          <Box width={"40%"}>
            <Text fontWeight={"bold"}>Display</Text>
          </Box>
          <Box width={"60%"}>
            <Text>6.5 inch Full HD+ LCD In-cell Display</Text>
          </Box>
        </Box>

        <Box display={"flex"} flexDirection={"row"} my={1}>
          <Box width={"40%"}>
            <Text fontWeight={"bold"}>Battery</Text>
          </Box>
          <Box width={"60%"}>
            <Text>5000mAh</Text>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
