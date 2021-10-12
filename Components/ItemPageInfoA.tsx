import React from "react";
import { Dimensions } from "react-native";
import { StatusBar } from "expo-status-bar";
//@ts-ignore
import CircularProgress from "react-native-circular-progress-indicator";
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

export default function ItemPageInfoA() {
  return (
    <Box>
      <Box mt={2}>
        <Text fontSize={"2xl"} fontWeight={"bold"} letterSpacing={2}>
          Item Name
        </Text>
      </Box>

      <Box
        d={"flex"}
        flexDirection={"row"}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <Box mt={2}>
          <Text fontSize={"xl"} fontWeight={"bold"} color={"green.400"}>
            0.00$
          </Text>
          <Text fontSize={"sm"} color={"gray.400"}>
            Category
          </Text>
        </Box>
        <Box>{/* <Text>B</Text> */}</Box>
      </Box>

      <Box
        mt={2}
        d={"flex"}
        flexDirection={"row"}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <Box>
          <Text fontSize={"xl"}>In Stock</Text>
          <Text fontSize={"md"} fontStyle={"italic"} fontWeight={"semibold"}>
            Delivery by x-x-x
          </Text>
        </Box>

        <Box>
          <Box>
            <CircularProgress
              value={3.5}
              radius={25}
              duration={1500}
              textColor={"black"}
              maxValue={5}
              inActiveStrokeOpacity={0.2}
            />
          </Box>
        </Box>
      </Box>

      <Box mt={8}>
        <Text fontSize={"md"} fontWeight={"bold"} color={"gray.500"} mb={2}>
          Quantity
        </Text>
        <HStack space={4} mt={2} mb={6}>
          <Pressable>
            <Box
              backgroundColor={"green.50"}
              rounded={"full"}
              size={8}
              display={"flex"}
              justifyContent={"center"}
              borderWidth={2}
              borderColor={"green.400"}
            >
              <Text
                textAlign={"center"}
                fontWeight={"bold"}
                color={"green.400"}
              >
                1
              </Text>
            </Box>
          </Pressable>

          <Pressable>
            <Box
              backgroundColor={"gray.100"}
              rounded={"full"}
              size={8}
              display={"flex"}
              justifyContent={"center"}
              borderWidth={2}
              borderColor={"gray.200"}
            >
              <Text textAlign={"center"}>2</Text>
            </Box>
          </Pressable>

          <Pressable>
            <Box
              backgroundColor={"gray.100"}
              rounded={"full"}
              size={8}
              display={"flex"}
              justifyContent={"center"}
              borderWidth={2}
              borderColor={"gray.200"}
            >
              <Text textAlign={"center"} color={"gray.200"}>
                3
              </Text>
            </Box>
          </Pressable>
        </HStack>
      </Box>
    </Box>
  );
}
