import React from 'react';
import HomePage from './Screens/HomePage';
import { NativeBaseProvider, Box } from 'native-base';

export default function App() {
  return (
    <NativeBaseProvider>
      <Box>
        <HomePage />
      </Box>
    </NativeBaseProvider>
  );
}