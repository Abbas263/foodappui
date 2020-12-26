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
import {IntroColors} from './src/config/colors';

const App = () => {
  return (
    <>
      <StatusBar barStyle='dark-content' backgroundColor='#fff' />
      <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
        <Text style={{fontSize:34,color:IntroColors.textColor,fontFamily:'Langar-Regular'}}>Abbas Ali</Text>
      </View>
    </>
  );
};
const styles = StyleSheet.create({
 
});
export default App;