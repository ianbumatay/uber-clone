import React from 'react'; 
import {StyleSheet, View, Text} from 'react-native'; 
import tw from 'tailwind-react-native-classnames';

const MapSreen = () => {
    return(
        <View>
            <Text>
                Map Screen
            </Text> 
            <View style={tw`h-1/2`}></View>
            <View style={tw`h-1/2`}></View>
        </View>
    );
}; 

export default MapSreen 

const styles = StyleSheet.create({})