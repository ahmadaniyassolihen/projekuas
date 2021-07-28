import React,{useEffect} from 'react'
import { View, Text, StyleSheet,Image } from 'react-native'

const Splash = ({navigation}) => {
    useEffect(() => {
        setTimeout(() => {
            navigation.replace('Home');
        }, 3000);
    });
    return (
        <View style={Styles.Atas}>
        <View style={Styles.wrapper}>
            <Image source={require('../../assets/catatan.jpg')} style={{height:100,width:100,borderRadius:20}} />
            <Text style={{fontSize:12,color:'white'}}>BUKU</Text>
            <Text style={{fontSize:16,color:'white'}}>CATATANKU</Text>
            </View>
        </View>
    )
}

export default Splash

const Styles = StyleSheet.create({
    Atas: {
        backgroundColor:'#98D4E1'
    },
        wrapper: {
            marginVertical:350,
            alignItems: 'center',
            justifyContent: 'center',
        },
        
});