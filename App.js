/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Dimensions
} from 'react-native';
// https://www.dropbox.com/s/1fup5vqbbzj0dis/TruvyFit.sketch?dl=0
import {IntroColors} from './src/config/colors';
import Icon from 'react-native-vector-icons/Ionicons';
// navigaion 5
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
// screens
import Home from './src/screens/Home';
import Details from './src/screens/Details';

Icon.loadFont();
const Stack = createStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} options={{headerShown:false}}/>
        <Stack.Screen name="Details" component={Details} options={{headerShown:false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};
const styles = StyleSheet.create({
 
});
export default App;