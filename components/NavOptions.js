import React from 'react';
import { StyleSheet, View, Text, FlatList, TouchableOpacity, Image } from 'react-native';
import tw from 'tailwind-react-native-classnames';
import { Icon } from 'react-native-elements'
import { useNavigation } from '@react-navigation/core';

const data = [
    { id: '123', title: 'Get a ride', image: "https://links.papareact.com/3pn", screen: 'MapScreen', },
    { id: '456', title: 'Order food', image: "https://links.papareact.com/28w", screen: 'EatScreen', },
]

const NavOptions = () => { 

    const navigation = useNavigation();
    

    return (
        <View>
            <FlatList
                keyExtractor={(item) => item.id} // unique identifier for rendering component
                data={data}
                horizontal
                renderItem={({ item }) => (
                    <TouchableOpacity 
                    style={tw`p-2 pl-6 pt-4 pb-8 bg-gray-200 m-2 w-40`}  
                    onPress={()=> navigation.navigate(item.screen)}
                    > 

                        <View>
                            <Image
                                style={{ width: 120, height: 120, resizeMode: 'contain' }}
                                source={{ uri: item.image }}
                            />
                            <Text
                                style={tw`text-lg mt-2 font-semibold`}>
                                {item.title}
                            </Text>
                            <Icon style={tw`p-2 bg-black rounded-full w-10 mt-4`}
                                name="arrowright"
                                color="white"
                                type="antdesign" />
                        </View>
                    </TouchableOpacity>
                )}
            />
        </View>
    );

};

export default NavOptions

const styles = StyleSheet.create({})

