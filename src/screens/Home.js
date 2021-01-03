import React from 'react';
import { Text, SafeAreaView, View, StyleSheet, Image, StatusBar, FlatList } from 'react-native';
// icons imports
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
// app color import
import { foodAppColors } from '../config/colors';
import  categoriesData from "../assets/data/CategoriesData";
import popularData from "../assets/data/popularData";
// importing categories component imports form home screen
import Category from "../components/Category";
import PopularsComponent from "../components/PopularsComponent";
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';

const Home = ({navigation}) => {   
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
        <View sytle={styles.container}>            
            <StatusBar barStyle='dark-content' backgroundColor='#f3f3f3' />
            <ScrollView contentInsetAdjustmentBehavior="automatic" showsVerticalScrollIndicator={false}>
            <SafeAreaView>
                <View style={styles.headerWraper}>
                    <Image style={styles.profileImage}
                        source={require('../assets/images/profile.png')} />
                    <Feather name="menu" size={24} color={foodAppColors.textDark} />
                </View>
            </SafeAreaView>
            {/* titles start here*/}
            <View style={styles.titlesWraper}>
                <Text style={styles.titlesSubtitle}>Food</Text>
                <Text style={styles.titlestitle}>Delivery</Text>
            </View>
            {/* search Component here */}
            <View style={styles.searchWraper}>
                <Feather name="search" size={16} color={foodAppColors.text} />
                <View style={styles.search}>
                    <Text style={styles.searchText}>Search</Text>
                </View>
            </View>
            {/* category */}
            <View style={styles.categoriesWraper}>
            <Text style={styles.categoriesTitle}>Categories</Text>
            <View style={styles.categoriesListWraper}>
                <FlatList data={categoriesData} renderItem={renderCategoryItems} keyExtractor={item => item.id} horizontal={true} />
            </View>
        </View>
            {/* categories end */}
            {/* popular */}
            <View style={styles.popularWraper}>
            <Text style={styles.popularTitle}>Popular</Text>
            {popularData.map((item) => (
                <TouchableOpacity key={item.id} onPress={()=>navigation.navigate('Details',{
                    item:item
                })    
                }>
                <View 
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
                </TouchableOpacity>
            ))}
        </View>
            {/* popular end */}
            </ScrollView>
        </View>
    );
}
const styles = StyleSheet.create({
    container: { flex: 1 },
    headerWraper: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        paddingTop: 20,
        alignItems: 'center'
    },
    profileImage: {
        width: 40,
        height: 40,
        borderRadius: 40,
    },
    titlesWraper: {
        marginTop: 30,
        paddingHorizontal: 20
    },
    titlesSubtitle: {
        fontFamily: 'Montserrat-Regular',
        fontSize: 16,
        color: foodAppColors.textDark,
    },
    titlestitle: {
        marginTop: 5,
        fontWeight: 'bold',
        fontSize: 30
    },
    searchWraper: {
        paddingHorizontal: 20,
        marginTop: 30,
        flexDirection: 'row',
        alignItems: 'center',
    },
    search: {
        marginLeft: 10,
        flex: 1,
        borderBottomColor: foodAppColors.text,
        borderBottomWidth: 2,
    },
    searchText: {
        fontFamily: 'Montserrat-SemiBold',
        fontSize: 14,
        color: foodAppColors.text,
        marginBottom: 5,
    },
    // categoryies styling
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
    // popular styling
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
export default Home