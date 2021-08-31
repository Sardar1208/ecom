import React, { useRef } from "react";
import { View, Dimensions, TextInput } from "react-native";
import * as VectorIcons from "@expo/vector-icons";
import {
  Box,
  Text,
  Image,
  HStack,
  Button,
  Pressable,
  Icon,
  Input,
} from "native-base";
import Animated, {
  useSharedValue,
  interpolate,
  useAnimatedStyle,
  Extrapolate,
  withTiming,
} from "react-native-reanimated";

const window = Dimensions.get("window");
const SCR_WIDTH = window.width;
console.log("width: ", window.width);
const SPACING = 25;

export default function Header() {
  const width = useSharedValue(0);
  const ref_input = useRef();
  const barStyle = useAnimatedStyle(() => {
    return {
      width: withTiming(width.value),
    };
  });

  return (
    <Box
      bg={"transparent"}
      paddingY={2}
      marginBottom={5}
      style={{ paddingHorizontal: SPACING }}
    >
      <View>
        <HStack justifyContent={"space-between"} alignItems={"center"}>
          <View>
            <Text
              fontSize={26}
              fontWeight={"bold"}
              color={"gray.400"}
              letterSpacing={2}
            >
              Hello,
            </Text>
            <Text
              fontSize={30}
              letterSpacing={2}
              fontWeight={"bold"}
              color={"black"}
            >
              Sarthak
            </Text>
          </View>

          <Box
            backgroundColor={"white"}
            rounded={"full"}
            shadow={9}
            position={"absolute"}
            right={0}
          >
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <Animated.View style={[{}, barStyle]}>
                <TextInput
                  placeholder="Artists, songs, or podcasts"
                  placeholderTextColor={"grey"}
                  style={{
                    fontWeight: "bold",
                    borderWidth: 0,
                    padding: 15
                  }}
                  //@ts-ignore
                  ref={ref_input}
                  onSubmitEditing={() => console.log("unfocused")}
                  
                />
              </Animated.View>
              <Pressable
                justifyContent={"center"}
                alignItems={"center"}
                onPress={() => {
                  width.value = SCR_WIDTH - SPACING * 2 - 50;
                  //@ts-ignore
                  ref_input.current.focus()
                }}
                style={{
                  paddingHorizontal: 10,
                }}
              >
                <Icon
                  as={<VectorIcons.Ionicons name={"search"} />}
                  color={"violet.400"}
                  style={{
                    width: 30,
                  }}
                />
              </Pressable>
            </View>
          </Box>
        </HStack>
      </View>
    </Box>
  );
}
