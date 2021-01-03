import React from "react";
import { Text,FlatList, SafeAreaView, View, StyleSheet, Image, StatusBar, TouchableOpacity } from 'react-native';

// icons imports
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { foodAppColors } from '../config/colors';

const Details = ({ route, navigation }) => {
    const { item } = route.params;
    const renderIngredientsItem=({item})=>{
        return(
            <View style={[styles.ingredientsItemWraper,{
                marginLeft:item.id==1 ? 20:0
            }]}>
                <Image source={item.image} style={styles.ingredientImage} />
            </View>
        );
    }
    return (
        <View style={styles.container}>
            <SafeAreaView>
                <View style={styles.headerWraper}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <View style={styles.headerLeft}>
                            <Feather name="chevron-left" size={12} color={foodAppColors.textDark} />
                        </View>
                    </TouchableOpacity>
                    <View style={styles.headerRight}>
                        <MaterialCommunityIcons name="star" size={12} color='#fff' />
                    </View>
                </View>
            </SafeAreaView>
            {/* titles Wrapper */}
            <View style={styles.titlesWraper}>
                <Text style={styles.title}>{item.title}</Text>
            </View>
            {/* price wrapper */}
            <View style={styles.priceWraper}>
                <Text style={styles.priceText}>${item.price}</Text>
            </View>
            <View style={styles.infoWraper}>
                <View style={styles.infoLeftWraper}>
                    <View style={styles.infoItemWraper}>
                        <Text style={styles.infoItemTitle}>Size</Text>
                        <Text style={styles.infoItemText}>{item.sizeName} {item.sizeNumber}"</Text>
                    </View>
                    <View style={styles.infoItemWraper}>
                        <Text style={styles.infoItemTitle}>Crust</Text>
                        <Text style={styles.infoItemText}>{item.crust}</Text>
                    </View>
                    <View style={styles.infoItemWraper}>
                        <Text style={styles.infoItemTitle}>Delivery In</Text>
                        <Text style={styles.infoItemText}>{item.deliveryTime}</Text>
                    </View>
                </View>
                <View>
                    <Image source={item.img} style={styles.itemImage} />
                </View>
            </View>
            {/* Ingredient */}
            <View styles={styles.ingredientsWrapper}>
                <Text style={styles.ingredientsTitle}>Ingradients</Text>
                <View style={styles.ingredientsListWraper}>
                <FlatList 
                  data={item.ingradients}
                  renderItem={renderIngredientsItem}
                  keyExtractor={item => item.id}
                  horizontal={true}
                  showsHorizontalScrollIndicator={false}
                  />
                </View>
            </View>
            {/* place an order */}
            <TouchableOpacity onPress={()=>alert("Your Order has been Placed.")}>
                <View style={styles.orderWraper}>
                    <Text style={styles.orderText}>Place an Order</Text>
                    <Feather name="chevron-right" size={18} color='#000' />
                </View>
            </TouchableOpacity>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    headerWraper: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingTop: 20,
    },
    headerLeft: {
        borderColor: foodAppColors.text,
        borderWidth: 2,
        padding: 12,
        borderRadius: 10
    },
    headerRight: {
        backgroundColor: foodAppColors.primary,
        padding: 12,
        borderRadius: 10,
        borderColor: foodAppColors.primary,
        borderWidth: 2,
    },
    titlesWraper: {
        paddingHorizontal: 20,
        marginTop: 30,
    },
    title: {
        fontFamily: 'Montserrat-Bold',
        fontSize: 32,
        color: foodAppColors.textDark,
        width: '50%'
    },
    priceWraper: {
        paddingHorizontal: 20,
        marginTop: 20,
    },
    priceText: {
        color: foodAppColors.price,
        fontFamily: 'Montserrat-Bold',
        fontSize: 32,
    },
    infoWraper:{
        marginTop:60,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
    },
infoLeftWraper:{
paddingLeft:20,
},
infoItemWraper:{
marginBottom:20
},
infoItemTitle:{
fontFamily:'Montserrat-Medium',
color:foodAppColors.text,
fontSize:16,
},
infoItemText:{
    fontFamily:'Montserrat-SemiBold',
    color:foodAppColors.textDark,
    fontSize:18,//check if 16 is good or 18
},
itemImage:{
resizeMode:'contain',
marginLeft:50,
},
ingredientsWrapper:{
    marginTop:40,
},
ingredientsTitle:{
paddingHorizontal:20,
fontFamily:'Montserrat-Bold',
color:foodAppColors.textDark,
fontSize:16,
},
ingredientsListWraper:{
paddingVertical:20,
},
ingredientsItemWraper:{
    backgroundColor:'#fff',
    alignItems:'center',
    justifyContent:'center',
    paddingHorizontal:10,
    marginRight:15,
    borderRadius:15,
    shadowColor:'#000',
    shadowOffset:{
        width:0,
        height:2,
    },
    shadowOpacity:0.05,
    shadowRadius:10,
    elevation:2,
},
ingredientImage:{
 resizeMode:'contain',
},
orderWraper:{
    marginTop:50,
    marginHorizontal:20,
    backgroundColor:foodAppColors.primary,
    borderRadius:50,
    paddingVertical:25,
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center'
},
orderText:{
    fontFamily:'Montserrat-Bold',
    fontSize:14,
    marginRight:10
},
});

export default Details;