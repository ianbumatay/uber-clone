import React from 'react';
import {StyleSheet, View, Text, SafeAreaView} from 'react-native';
import tw from 'tailwind-react-native-classnames';

const HomeScreen = () => {
    return(
        <SafeAreaView style={tw`bg-white h-full`}>
            <Text> Home Screen </Text>
        </SafeAreaView>
    );
}; 

export default HomeScreen 

const styles = StyleSheet.create({});
