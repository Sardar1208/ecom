import React from "react";
import HomePage from "./Screens/HomePage";
import BrowsePage from "./Screens/BrowsePage";
import { NavigationContainer } from "@react-navigation/native";
import { NativeBaseProvider, Box } from "native-base";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NativeBaseProvider>
      <Box bg={"gray.100"} height={"100%"}>
        <NavigationContainer>
          <Tab.Navigator>
            <Tab.Screen
              name="Home"
              component={HomePage}
              options={{
                headerShown: false,
              }}
            />
            <Tab.Screen
              name="Options"
              component={BrowsePage}
              options={{
                headerShown: false,
              }}
            />
          </Tab.Navigator>
        </NavigationContainer>
      </Box>
    </NativeBaseProvider>
  );
}
