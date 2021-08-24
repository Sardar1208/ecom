import React from 'react';
import Carousel from '../Components/Carousel';
import { Box, Text } from 'native-base';


export default function HomePage(){
    return(
        <Box safeArea>
            <Text>hello customers!</Text>
            <Carousel />
        </Box>
    )
}