import React from 'react';
import { StyleSheet, View, Text, SafeAreaView, Image } from 'react-native';
import tw from 'tailwind-react-native-classnames';
import NavOptions from '../components/NavOptions';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { GOOGLE_MAPS_APIKEY } from "@env";
import { useDispatch } from 'react-redux';


const HomeScreen = () => {  

  const dispatch = useDispatch();



  return (
    <SafeAreaView style={tw`bg-white h-full`}>
      <View style={tw`p-5`}>
        <Image
          style={{ width: 100, height: 100, resizeMode: 'contain' }}
          source={{
            uri: "https://links.papareact.com/gzs"
          }}
        />
        <GooglePlacesAutocomplete
          styles={{
            container: {
              flex: 0,
            }, 
            textInput: {
              fontSize: 18,
            }
          }} 
          onPress={(data, details = null)=> {
            console.log(data);
            console.log(details);
          }}
          returnKeyType={"search"}
          fetchDetails={true}
          enablePoweredByContainer={false}
          minLength={2}
          query={{
            key: GOOGLE_MAPS_APIKEY,
            language: 'en',
          }}
          placeholder="Where from?"
          nearbyPlacesAPI="GooglePlacesSearch"
          debounce={400}
        />
        <NavOptions />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen

const styles = StyleSheet.create({});
