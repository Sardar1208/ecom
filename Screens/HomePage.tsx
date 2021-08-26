import React from "react";
import Carousel from "../Components/Carousel";
import { StatusBar } from "expo-status-bar";
import { Box, Text } from "native-base";

export default function HomePage() {
  return (
    <Box safeArea>
        <StatusBar style={"dark"} backgroundColor={"white"} />
        <Box bg={"white"} paddingY={2} alignItems={"center"} marginBottom={5} shadow={9}>
            <Text fontSize={32} fontWeight={"bold"}>Custom Carousel</Text>
        </Box>
      <Carousel />
    </Box>
  );
}
