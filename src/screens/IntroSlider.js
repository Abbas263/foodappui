import { IntroColors } from "../config/colors";
import React,{useState} from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image,
    Dimensions,
} from 'react-native';
// intro slider
import AppIntroSlider from 'react-native-app-intro-slider';
import App from "../../App";

const slides = [
    {
        key: 'one',
        title: 'Fresh Food',
        text: 'lorem ipsum dollar isit pakistan foodi app to solution of starving. You will desire for more.',
        image: require('../assets/images/1.png')
    },
    {
        key: 'two',
        title: 'Fast Delivery',
        text: 'lorem ipsum dollar isit pakistan foodi app to solution of starving',
        image: require('../assets/images/2.png')
    },
    {
        key: 'three',
        title: 'Easy Payment',
        text: 'lorem ipsum dollar isit pakistan foodi app to solution of starving',
        image: require('../assets/images/3.png')
    }
];
const IntroSlider = () => {
    // state = {
    //     showRealApp: false
    // }
    const [showRealApp, setshowRealApp] = useState('false');

    renderItem = ({ item }) => {
        return (
            <View style={{ flex: 1, }}>
                <Image source={item.image} style={{
                    resizeMode: 'contain',
                    width: Dimensions.get('window').width,
                    height: Dimensions.get('window').width,
                }} />
                <Text style={{
                    alignSelf:'center',fontSize:40,
                    fontWeight:'bold',paddingTop:30,
                    fontFamily:'Verdana',color:'#D48524'
                }}>{item.title}</Text>
                <Text style={{
                    marginHorizontal:30,fontSize:20,
                    textAlign:'center',paddingTop:5,
                    fontFamily:'verdana',opacity:0.5,
                    color:'#283542'
                }}>{item.text}</Text>
            </View>
        );
    }
    onDone = () => {
        // User finished the introduction. Show real app through
        // navigation or simply by controlling state
        setshowRealApp('true');
      }
return(
<View style={{flex:1}}>
{showRealApp=='true'? <App />:<AppIntroSlider renderItem={renderItem} data={slides} onDone={onDone}/>}
</View>
);

}
export default IntroSlider;