import React from 'react'; 
import { StyleSheet, View, Text } from 'react-native';  

const data = [
    {id: '123', title: 'Get a ride', image:"https://links.papareact.com/3pn", screen: 'MapScreen',},
    {id: '456', title: 'Order food', image:"https://links.papareact.com/28w", screen: 'EatScreen',},
]

const NavOptions = () => {
    return(
        <View>
            <Text>Navigation</Text>
        </View>
    );

}; 

export default NavOptions 

const styles = StyleSheet.create({})