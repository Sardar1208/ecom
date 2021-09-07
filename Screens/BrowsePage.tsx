import React from "react";
import * as VectorIcons from "@expo/vector-icons";
import { Dimensions } from "react-native";
import BrowseItem from "../Components/BrowseCategory";
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

const window = Dimensions.get("window");
const SCR_WIDTH = window.width;

export default function BrowsePage() {
  return (
    <Box safeArea backgroundColor={"white"}>
      <Box
        display={"flex"}
        flexDirection={"row"}
        justifyContent={"space-between"}
        mx={4}
        mt={4}
      >
        <Box flex={1}>
          <Input
            rounded={"xl"}
            placeholder={"Search across all products..."}
            backgroundColor={"gray.200"}
            borderWidth={0}
            InputLeftElement={
              <Icon
                as={<VectorIcons.Ionicons name={"search"} />}
                color={"gray.500"}
                size={7}
                ml={2}
              />
            }
          />
        </Box>
        <Pressable alignSelf={"center"} px={2}>
          <Icon
            as={<VectorIcons.AntDesign name={"shoppingcart"} />}
            color={"green.400"}
            size={8}
          />
        </Pressable>
      </Box>

      <ScrollView
        mx={8}
        mt={4}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      >
        <HStack space={4}>
          <Pressable>
            <Text fontWeight={"bold"} color={"green.400"}>
              ALL
            </Text>
          </Pressable>
          <Pressable>
            <Text fontWeight={"bold"} color={"gray.400"}>
              ELECTRONICS
            </Text>
          </Pressable>
          <Pressable>
            <Text fontWeight={"bold"} color={"gray.400"}>
              FASHION
            </Text>
          </Pressable>
          <Pressable>
            <Text fontWeight={"bold"} color={"gray.400"}>
              ACCESSORIES
            </Text>
          </Pressable>
          <Pressable>
            <Text fontWeight={"bold"} color={"gray.400"}>
              BOOKS
            </Text>
          </Pressable>
          <Pressable>
            <Text fontWeight={"bold"} color={"gray.400"}>
              HARDWARE
            </Text>
          </Pressable>
          <Pressable>
            <Text fontWeight={"bold"} color={"gray.400"}>
              GAMING
            </Text>
          </Pressable>
        </HStack>
      </ScrollView>

      <Box mt={4} mx={4} display={"flex"} flexDirection={"row"}>
        <Box flex={1} mr={1}>
          <BrowseItem />
          <BrowseItem />
          <BrowseItem />
        </Box>
        <Box flex={1} ml={1} mt={8}>
          <BrowseItem />
          <BrowseItem />
          <BrowseItem />
        </Box>
      </Box>

      {/* <Box
        backgroundColor={"green.400"}
        position={"absolute"}
        zIndex={99}
        padding={2}
        rounded={"full"}
        right={2}
        top={2}
      >
        <Pressable>
          <Icon
            as={<VectorIcons.MaterialIcons name={"filter-list"} />}
            color={"white"}
            size={8}
          />
        </Pressable>
      </Box> */}
    </Box>
  );
}
