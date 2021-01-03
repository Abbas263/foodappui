import React from 'react';
import { View, Text, Image, StyleSheet, FlatList } from 'react-native';
import { foodAppColors } from "../config/colors";
import categoriesData from "../assets/data/CategoriesData";
import Feather from 'react-native-vector-icons/Feather';

const Category = () => {
    const renderCategoryItems = ({ item }) => {
        return (
            <View style={[styles.categoryItemWraper,{
                backgroundColor:item.selected?foodAppColors.primary:'white',
                marginLeft:item.id==1? 20 : 0,
            }]}>
                <Image source={item.img} style={styles.categoryItemImage} />
                <Text style={styles.categoryItemTitle}>{item.title}</Text>
                <View style={[styles.categorySelectWraper,{backgroundColor:item.selected?'white':foodAppColors.secondary}]}>
                    <Feather style={[styles.categorySelectIcon,{color:item.selected?'#000':'white'}]} name={'chevron-right'} size={10} />
                </View>
            </View>);
    }
    return (
        <View style={styles.categoriesWraper}>
            <Text style={styles.categoriesTitle}>Categories</Text>
            <View style={styles.categoriesListWraper}>
                <FlatList data={categoriesData} renderItem={renderCategoryItems} keyExtractor={item => item.id} horizontal={true} />
            </View>
        </View>
    );
};
const styles = StyleSheet.create({
    categoriesWraper: {
        marginTop: 30,
    },
    categoriesTitle: {
        fontFamily: 'Montserrat-Bold',
        fontSize: 16,
        paddingHorizontal: 20,
    },
    categoriesListWraper: {
        paddingTop:15,
        paddingBottom:20,        
    },
    categoryItemWraper: {
        backgroundColor:'#F5CA48',
        marginRight:20,  
        borderRadius:20,
        alignItems:'center',
        justifyContent:'center',
        shadowColor:'#000',
        shadowOffset:{
            width:0,
            height:2
        },
        shadowOpacity:0.05,
        shadowRadius:10,
        elevation:2,      
    },
    categoryItemImage: {
        marginTop:25,
        width:60,
        height:60,
        alignItems:'center',
        marginHorizontal:20
    },
    categoryItemTitle: {
        textAlign:'center',
        fontFamily:'Montserrat-Medium',
        fontSize:14,
        // paddingTop:10,
        marginTop:10
    },
    categorySelectWraper: {
        alignItems:'center',
        justifyContent:'center',        
        width:26,
        height:26,
        borderRadius:26,
        marginVertical:20                     
    },
    categorySelectIcon: {
        alignSelf:'center'
    },
});
export default Category;
