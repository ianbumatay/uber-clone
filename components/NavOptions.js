import React from 'react';
import { StyleSheet, View, Text, FlatList, TouchableOpacity, Image } from 'react-native';

const data = [
    { id: '123', title: 'Get a ride', image: "https://links.papareact.com/3pn", screen: 'MapScreen', },
    { id: '456', title: 'Order food', image: "https://links.papareact.com/28w", screen: 'EatScreen', },
]

const NavOptions = () => {
    return (
        <View>
            <FlatList
                keyExtractor={(item) => item.id} // unique identifier for rendering component
                data={data}
                horizontal
                renderItem={({item})=> ( 
                    <TouchableOpacity>
                        <Text>{item.title}</Text>

                    </TouchableOpacity>

                )}
              
            />
        </View>
    );

};

export default NavOptions

const styles = StyleSheet.create({})

                                // style={{ width: 120, height: 120, resizeMode: 'containe' }}
                                // source={{ uri: item.image }}
