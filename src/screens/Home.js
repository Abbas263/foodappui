import React from 'react';
import { Text, SafeAreaView, View, StyleSheet, Image, StatusBar, FlatList } from 'react-native';
// icons imports
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
// app color import
import { foodAppColors } from '../config/colors';
// import  categoriesData from "../assets/data/CategoriesData";
// importing categories component imports form home screen
import Category from "../components/Category";
import PopularsComponent from "../components/PopularsComponent";
import { ScrollView } from 'react-native-gesture-handler';

const Home = () => {    
    return (
        <View sytle={styles.container}>            
            {/* <StatusBar barStyle='dark-content' backgroundColor='#f3f3f3' /> */}
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
            <Category />
            <PopularsComponent />
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
    
});
export default Home