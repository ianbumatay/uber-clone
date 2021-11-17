import React from 'react'; 
import {StyleSheet, View, Text} from 'react-native'; 
import tw from 'tailwind-react-native-classnames';
import Map from '../components/Map'
import MapView from 'react-native-maps';

const MapSreen = () => {
    return(
        <View>
            <Text>Map Screen</Text> 
            <View style={tw`h-1/2`}>
                <Map/>
            </View>
            <View style={tw`h-1/2`}></View>
        </View>
    );
}; 

export default MapSreen 

const styles = StyleSheet.create({})