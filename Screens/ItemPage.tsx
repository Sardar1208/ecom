import React from "react";
import { Dimensions } from "react-native";
import { StatusBar } from "expo-status-bar";
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

const window = Dimensions.get("window");
const SCR_WIDTH = window.width;

interface ItemPageInterface {
  navigation: any;
}

export default function ItemPage({ navigation }: ItemPageInterface) {
  return (
    <Box safeArea minHeight={"100%"}>
      <ScrollView>
        <SharedElement id={"abcd"}>
          <Box height={500} overflow={"hidden"}>
            <Image
              source={require("../assets/images/temp.jpg")}
              size={"full"}
              alt={"item_img"}
            />
          </Box>
        </SharedElement>

        <Box
          backgroundColor={"white"}
          px={4}
          borderTopRadius={26}
          marginTop={-8}
        >
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
              <Text
                fontSize={"md"}
                fontStyle={"italic"}
                fontWeight={"semibold"}
              >
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
            <HStack space={4} mt={2}>
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

          <Box
            mt={8}
            // pb={4}
            // borderBottomColor={"gray.200"}
            // borderBottomWidth={1}
          >
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

          <Box mt={8} mb={12}>
            <Text fontSize={"md"} fontWeight={"bold"} color={"gray.500"} mb={2}>
              Description
            </Text>
            <Text>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore
              minima est aspernatur rerum temporibus impedit quaerat, tenetur
              laboriosam cum. Neque earum temporibus ducimus repellendus
              maiores!
            </Text>
            <Text>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore
              minima est aspernatur rerum temporibus impedit quaerat, tenetur
              laboriosam cum. Neque earum temporibus ducimus repellendus
              maiores!
            </Text>
            <Text>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore
              minima est aspernatur rerum temporibus impedit quaerat, tenetur
              laboriosam cum. Neque earum temporibus ducimus repellendus
              maiores!
            </Text>
          </Box>

          <Box mt={4} mb={12}>
            <Text fontSize={"md"} fontWeight={"bold"} color={"gray.500"}>
              Product Details
            </Text>
          </Box>
          <Box mt={4} mb={12}>
            <Text fontSize={"md"} fontWeight={"bold"} color={"gray.500"}>
              Product Details
            </Text>
          </Box>
        </Box>
      </ScrollView>

      {/* <HStack space={4} mt={4} position={"absolute"} bottom={0} px={4} pb={2}>
        <Button flex={1} backgroundColor={"green.400"}>
        Add to cart
        </Button>
        <Button flex={1}>Buy now</Button>
      </HStack> */}
    </Box>
  );
}

// export default ItemPage;
