import React from "react";
import Carousel from "../Components/Carousel";
import Header from "../Components/Header";
import { StatusBar } from "expo-status-bar";
import { Box, Text, Image, HStack, Button, Pressable } from "native-base";

export default function HomePage() {
  return (
    <Box safeArea>
      <StatusBar style={"dark"} backgroundColor={"white"} />
      
      <Header />
      <Carousel />

      <Box
        backgroundColor={"white"}
        rounded={"xl"}
        marginTop={5}
        marginX={5}
        shadow={1}
      >
        <Box
          borderBottomColor={"black"}
          // borderBottomWidth={1}
          paddingY={3}
          marginBottom={2}
        >
          <Text fontSize={"xl"} fontWeight={"bold"} alignSelf={"center"}>
            What are you looking for?
          </Text>
        </Box>
        <HStack justifyContent={"center"} space={16}>
          <Box alignItems={"center"}>
            <Box width={100} height={100} rounded={"full"} overflow={"hidden"}>
              <Image
                source={require("../assets/images/temp.jpg")}
                alt={"category"}
                size={"full"}
              />
            </Box>
            <Text>Category</Text>
          </Box>
          <Box alignItems={"center"}>
            <Box width={100} height={100} rounded={"full"} overflow={"hidden"}>
              <Image
                source={require("../assets/images/temp.jpg")}
                alt={"category"}
                size={"full"}
              />
            </Box>
            <Text>Category</Text>
          </Box>
        </HStack>

        <HStack justifyContent={"center"} space={16} mt={4}>
          <Box alignItems={"center"}>
            <Box width={100} height={100} rounded={"full"} overflow={"hidden"}>
              <Image
                source={require("../assets/images/temp.jpg")}
                alt={"category"}
                size={"full"}
              />
            </Box>
            <Text>Category</Text>
          </Box>
          <Box alignItems={"center"}>
            <Box width={100} height={100} rounded={"full"} overflow={"hidden"}>
              <Image
                source={require("../assets/images/temp.jpg")}
                alt={"category"}
                size={"full"}
              />
            </Box>
            <Text>Category</Text>
          </Box>
        </HStack>

        <Pressable
          alignSelf={"center"}
          backgroundColor={"violet.400"}
          paddingX={4}
          paddingY={1}
          rounded={"xl"}
          my={4}
        >
          <Text color={"white"} fontWeight={"bold"}>
            View all
          </Text>
        </Pressable>
      </Box>
    </Box>
  );
}
