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
import * as VectorIcons from "@expo/vector-icons";

export default function BrowseItem() {
  return (
    <Box padding={1} my={1} position={"relative"}>
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

      <Box height={200} rounded={"xl"} overflow={"hidden"}>
        <Image
          source={require("../assets/images/temp.jpg")}
          size={"full"}
          alt={"item_img"}
        />
      </Box>
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
    </Box>
  );
}
