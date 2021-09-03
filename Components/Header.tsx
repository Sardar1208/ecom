import React, { useRef } from "react";
import { View, Dimensions, TextInput } from "react-native";
import * as VectorIcons from "@expo/vector-icons";
import { Box, Text, HStack, Pressable, Icon, Input } from "native-base";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
} from "react-native-reanimated";

// Constants
const window = Dimensions.get("window");
const SCR_WIDTH = window.width;
console.log("width: ", window.width);
const SPACING = 25;

export default function Header() {
  const width = useSharedValue(0); // width of the search bar
  const textOpacity = useSharedValue(1); // opacity of the grettings text
  const barOpacity = useSharedValue(0); // opacity of the search bar
  const ref_input = useRef(); // ref to the text input for focus and blur events

  /* animated styles for bar and greetings text */
  const barStyle = useAnimatedStyle(() => {
    return {
      width: withTiming(width.value),
      opacity: withTiming(barOpacity.value),
    };
  });
  const textStyle = useAnimatedStyle(() => {
    return {
      opacity: withTiming(textOpacity.value),
    };
  });

  return (
    // The parent box containing the greetings and the search bar
    <Box
      bg={"transparent"}
      paddingY={2}
      marginBottom={5}
      style={{ paddingHorizontal: SPACING }}
    >
      <View>
        <HStack justifyContent={"space-between"} alignItems={"center"}>
          {/* The greetings text  */}
          <Animated.View style={textStyle}>
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
          </Animated.View>

          {/* The dynamic search bar */}
          <Box
            backgroundColor={"green.400"}
            rounded={"full"}
            // shadow={4}
            position={"absolute"}
            right={0}
            height={50}
          >
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              {/* The seach bar and the back button that expands and contracts. */}
              <Animated.View
                style={[
                  {
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                  },
                  barStyle,
                ]}
              >
                {/* Back button */}
                <Pressable
                  onPress={() => {
                    width.value = 0;
                    textOpacity.value = 1;
                    barOpacity.value = 0;
                    //@ts-ignore
                    ref_input.current.blur();
                  }}
                >
                  <Icon
                    as={<VectorIcons.Ionicons name={"arrow-back"} />}
                    color={"black"}
                    style={{
                      width: 35,
                      paddingLeft: 10,
                    }}
                  />
                </Pressable>

                {/* Search bar */}
                <TextInput
                  placeholder="Artists, songs, or podcasts"
                  placeholderTextColor={"grey"}
                  style={{
                    fontWeight: "bold",
                    borderWidth: 0,
                    padding: 15,
                    width: "80%",
                  }}
                  //@ts-ignore
                  ref={ref_input}
                  onSubmitEditing={() => console.log("unfocused")}
                />
              </Animated.View>

              {/* The search button */}
              <Pressable
                justifyContent={"center"}
                alignItems={"center"}
                onPress={() => {
                  width.value = SCR_WIDTH - SPACING * 2 - 50;
                  //@ts-ignore
                  ref_input.current.focus();
                  textOpacity.value = 0;
                  barOpacity.value = 1;
                }}
                style={{
                  paddingHorizontal: 10,
                }}
              >
                <Icon
                  as={<VectorIcons.Ionicons name={"search"} />}
                  color={"white"}
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
