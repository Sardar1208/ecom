import React from 'react';
import HomePage from './Screens/HomePage';
import { NativeBaseProvider, Box } from 'native-base';

export default function App() {
  return (
    <NativeBaseProvider>
      <Box bg={"gray.100"} height={"100%"}>
        <HomePage />
      </Box>
    </NativeBaseProvider>
  );
}