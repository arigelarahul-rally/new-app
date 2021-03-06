import React from 'react';
import { View,StyleSheet,Text } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { useLinkProps } from '@react-navigation/native';

const Profile = props =>{
    return(
        <View style={styles.headerContainer}>
           <AntDesign name="left" size={18} color="black" onPress={()=>props.navigation.goBack()}>cancel</AntDesign>
            <Text style={styles.textContainer}>New Contact</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    headerContainer: {
        flexDirection:'row',
        paddingTop:40,
        paddingLeft:5,
        height:80,
        paddingRight:15,
        backgroundColor:'#f0f8ff',
        elevation:10,
            },
    textContainer:{
        fontSize:20,
        color:'black',
        fontWeight:'bold',
        paddingLeft:50,
           }
});
export default Profile;