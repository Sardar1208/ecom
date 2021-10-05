import React from "react";
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
} from "native-base";
import { SharedElement } from "react-navigation-shared-element";

import * as VectorIcons from "@expo/vector-icons";

interface BrowseItemInterface {
  navigation: any;
}

let startAncestor;
let startNode;

export default function BrowseItem({ navigation }: BrowseItemInterface) {
  return (
    <Box padding={1} my={1} position={"relative"}>
      <Pressable
        onPress={() => {
          navigation.navigate("item");
        }}
      >
        <Box
          backgroundColor={"white"}
          position={"absolute"}
          zIndex={99}
          padding={2}
          rounded={"full"}
          right={2}
          top={2}
        >
          <Pressable>
            <Icon
              as={<VectorIcons.AntDesign name={"heart"} />}
              color={"gray.300"}
              size={4}
            />
          </Pressable>
        </Box>

        <SharedElement id={"abcd"}>
          <Box height={200} rounded={"xl"} overflow={"hidden"}>
            <Image
              source={require("../assets/images/temp.jpg")}
              size={"full"}
              alt={"item_img"}
            />
          </Box>
        </SharedElement>

        <Box ml={1} mt={2}>
          <Text fontSize={"xl"} fontWeight={"bold"} letterSpacing={1}>
            Item Name
          </Text>
          <Text fontSize={"sm"} color={"gray.400"}>
            Category
          </Text>
          <Text fontSize={"lg"} color={"green.400"} fontWeight={"bold"}>
            $0.00
          </Text>
        </Box>
      </Pressable>
    </Box>
  );
}
