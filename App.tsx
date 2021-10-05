import React from "react";
import HomePage from "./Screens/HomePage";
import BrowsePage from "./Screens/BrowsePage";
import ItemPage from "./Screens/ItemPage";
import { NavigationContainer } from "@react-navigation/native";
import { NativeBaseProvider, Box } from "native-base";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createSharedElementStackNavigator } from "react-navigation-shared-element";
import { createStackNavigator } from "@react-navigation/stack";

const Tab = createBottomTabNavigator();
const homeStack = createStackNavigator();
const BrowseStack = createStackNavigator();

function HomeStackScreen() {
  return (
    <homeStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <homeStack.Screen name="home" component={HomePage} />
    </homeStack.Navigator>
  );
}

function BrowseStackScreen() {
  return (
    <BrowseStack.Navigator
      initialRouteName={"browse"}
      screenOptions={{
        headerShown: false,
      }}
    >
      <BrowseStack.Screen name="browse" component={BrowsePage} />
      <BrowseStack.Screen
        name="item"
        component={ItemPage}
        // sharedElements={() => {
        //   return ["abcd"];
        // }}
      />
    </BrowseStack.Navigator>
  );
}

export default function App() {
  return (
    <NativeBaseProvider>
      <Box bg={"gray.100"} height={"100%"}>
        <NavigationContainer>
          <Tab.Navigator>
            <Tab.Screen
              name="Home"
              component={HomeStackScreen}
              options={{
                headerShown: false,
              }}
            />
            <Tab.Screen
              name="Options"
              component={BrowseStackScreen}
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
