import React from "react";
import { Box, Text, Image, HStack, ScrollView } from "native-base";

export default function Carousel() {
  return (
    <Box>
      <ScrollView horizontal={true}>
        <HStack space={5}>
          <Box height={"56"} width={"72"} overflow={"hidden"}>
            <Image
              source={require("../assets/images/temp.jpg")}
              alt={"product banner"}
              size={"full"}
              rounded={16}
            />
          </Box>
          <Box height={"56"} width={"72"} overflow={"hidden"}>
            <Image
              source={require("../assets/images/temp.jpg")}
              alt={"product banner"}
              size={"full"}
              rounded={16}
            />
          </Box>
          <Box height={"56"} width={"72"} overflow={"hidden"}>
            <Image
              source={require("../assets/images/temp.jpg")}
              alt={"product banner"}
              size={"full"}
              rounded={16}
            />
          </Box>
        </HStack>
      </ScrollView>
    </Box>
  );
}
