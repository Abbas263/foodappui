import React from 'react';
import { View, StyleSheet, Text,Image } from 'react-native';
import popularData from "../assets/data/popularData";
import { foodAppColors } from "../config/colors";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Feather from 'react-native-vector-icons/Feather';

const PopularsComponent = () => {
    return (
        <View style={styles.popularWraper}>
            <Text style={styles.popularTitle}>Popular</Text>
            {popularData.map((item) => (
                <View key={item.id}
                 style={[styles.popularCardWraper, { marginTop: item.id == 1 ? 10 : 20 }]}>
                    <View>
                        <View>
                            <View style={styles.popularTopWraper}>
                                <MaterialCommunityIcons name="crown" color={foodAppColors.primary} size={12} />
                                <Text style={styles.popularTopText}>Top of the Week</Text>
                            </View>
                            <View style={styles.popularItemTitlesWraper}>
                                <Text style={styles.popularItemTitlesTitle}>{item.title}</Text>
                                <Text style={styles.popularItemTitlesWeight}>Weight {item.weight}</Text>
                            </View>
                        </View>
                        <View style={styles.popularCardBottom}>
                            <View style={styles.addPizzaButton}>
                                <Feather name="plus" color={foodAppColors.textDark} size={10} />
                            </View>
                            <View style={styles.ratingWraper}>
                                <MaterialCommunityIcons name="star" color={foodAppColors.textDark} size={10} />
                                <Text style={styles.rating}>{item.rating}</Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.popularCardRight}>
                        <Image source={item.img} style={styles.popularCardImage}/>
                    </View>
                </View>
            ))}
        </View>
    );
};
const styles = StyleSheet.create({
    popularWraper: {
        paddingHorizontal: 20,
    },
    popularTitle: {
        fontFamily: 'Montserrat-Bold',
        fontSize: 16,
    },
    popularCardWraper: {
        borderRadius: 25,
        backgroundColor: '#fff',
        paddingTop: 20,
        paddingLeft: 20,
        flexDirection: 'row',
        overflow:'hidden',
        shadowColor:'#000',
        shadowOffset:{
            width:0,
            height:2
        },
        shadowOpacity:0.05,
        shadowRadius:10,
        elevation:2,
    },
    popularTopWraper: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    popularTopText: {
        marginLeft: 10,
        fontFamily: 'Montserrat-SemiBold',
        fontSize: 14,
    },
    popularItemTitlesWraper: {
        marginTop: 20,
    },
    popularItemTitlesTitle: {
        fontFamily: 'Montserrat-SemiBold',
        fontSize: 14,
        color: foodAppColors.textDark,
    },
    popularItemTitlesWeight: {
        fontFamily: 'Montserrat-Medium',
        fontSize: 12,
        color: foodAppColors.text,
        marginTop: 5,
    },
    popularCardBottom: {
        flexDirection:'row',
        alignItems:'center',
        marginTop:10,
        marginLeft:-20,
    },
    addPizzaButton: {
        backgroundColor:foodAppColors.primary,
        paddingHorizontal:40,
        paddingVertical:20,
        borderTopRightRadius:25,
        borderBottomLeftRadius:25,
    },
    ratingWraper:{
        flexDirection:'row',
        alignItems:'center',
        marginLeft:20,
    },
rating:{
    fontFamily:'Montserrat-SemiBold',
fontSize:12,
color:foodAppColors.textDark,
marginLeft:5,
},
popularCardRight:{

},
popularCardImage:{
    width:210,
    height:125,
    resizeMode:'contain',
    marginLeft:40,
},
});
export default PopularsComponent;