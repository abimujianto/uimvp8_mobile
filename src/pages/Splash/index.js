import React, {useEffect} from 'react'
import {View, ActivityIndicator, StyleSheet, Image, StatusBar} from 'react-native'

const Splash = ({navigation}) =>{

    useEffect(()=>{
        setTimeout(()=>{
            navigation.replace('Login')
        }, 2000)
    })
     return(
     <>
        <StatusBar hidden={true} /> 
        <View style={styles.container}>
              <Image style={styles.img}  source={require("../../../img/logo.png")}/>   
        </View>
        <View style={styles.containerLoad}>
             <ActivityIndicator  size="large" color="white"/>   
        </View>
       
     </>
        )

}

const styles = StyleSheet.create({
    containerLoad:{
        flex:1,
        backgroundColor: "#1A3783",
    },
    container:{
        flexDirection:"column",
        flex:1,
        justifyContent:'flex-end',
        alignItems:'center',
        backgroundColor: "#1A3783",
    }
})

export default Splash;