Uber build  

Install 

 > yarn add tailwind-react-native-classnames
 > yarn add @reduxjs/toolkit
 > yern add react-redux 

1.) expo start

2.) connect to gitbut 

3.) set up Reduxjs/toolkit
 > yarn add @reduxjs/toolkit
 > yern add react-redux 

 4.) import Provider from react-redux and wrap the main app with Provider component 

 5.) create store and pass store as a prop to Provider component 

 6.) create Home Screen and install  > yarn add tailwind-react-native-classnames
 > import tailwind obj. > import tw from 'tailwind-react-native-classnames'; 

 7.) create Navigation > creat data object for Mapscreen and Eatscreen and use Flatlist component to render 

 8.) add logo using react-native elements and <Icon>
 > yarn add react-native-elements
 > yarn add react-native-vector-icons 
 > yarn add react-native-safe-area-context 

 > import { SafeAreaProvider } from 'react-native-safe-area-context'; 

    function App() {
       return <SafeAreaProvider>...</SafeAreaProvider>;
    }

9.) Creating navigation 
> create MapScreen Componet 
> install yarn add @react-navigation/native from react native navigation 
> install expo install react-native-screens react-native-safe-area-context 
>import Navigation container 

>install yarn add @react-navigation/native-stack 
> import import { createNativeStackNavigator } from '@react-navigation/native-stack';

10.) install 
 > google places api 
 > googl places auto complete install yarn add  react-native-google-places-autocomplete
 > api and services > enable google api 
   > directions api 
   > places api 
   > distance matrix api 

 > get key > credentials paste  key in .env file  

 11.) install dotenv > yarn add react-native-dotenv 

 12.) Map component 
 > create map component 
 > render component to the screen 
 > install yarn add react-native-maps 
