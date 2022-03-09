import React from 'react'
import {SafeAreaView, StyleSheet, Text, View, Image, TextInput, TouchableOpacity, ScrollView,   StatusBar } from 'react-native';
import {
    responsiveHeight,
    responsiveFontSize
  } from "react-native-responsive-dimensions";


const LoginComp = ({navigation})=>{

    const movingHandler = ()=>{
        navigation.navigate('Main')
    }

    
    return(
         <>
        <SafeAreaView style={styles.container}>    
        <StatusBar hidden={true} /> 
            <ScrollView>
                <View style={styles.imgContainer}>
                            <Image style={styles.img}  source={require("../../../img/card.png")}/> 
                            <View style={{ height:responsiveHeight(8), alignItems:'center', justifyContent:'center' }}>
                                <Text style={{fontSize:responsiveFontSize(1.9)}}>Masuk Sekarang</Text>
                            </View>
                        </View>
                <View style={styles.containerInput}>
                        <Text style={{ fontSize:responsiveFontSize(1.7),}}>Email</Text>
                        <TextInput placeholder="email" style={styles.inputan}/>
                        <Text  style={{marginTop:18,  fontSize:responsiveFontSize(1.7), }}>Password</Text>
                        <TextInput placeholder="password" secureTextEntry={true}  style={styles.inputan}/>
                </View>
                <View  style={styles.conBtn}>
                        <TouchableOpacity style={styles.button} onPress={movingHandler}>                        
                            <View style={{flex: 1, justifyContent:"center"}}>
                                <Text style={{ color:'white', fontSize:responsiveFontSize(1.9) }}>
                                Masuk
                                </Text>
                            </View>
                        </TouchableOpacity>
                </View>
                </ScrollView>
            </SafeAreaView>   
         </>
        )
}


const styles = StyleSheet.create({
    container: {
        fontFamily: "Roboto",
         backgroundColor: '#fff',
         alignItems: 'center',
     
       },
    imgContainer:{
        // backgroundColor:'red',
        flex:1
    },
    img: {
        flex: 1,
        resizeMode:'contain',
        justifyContent:"center",
        alignItems:'center'
    },
    inputan:{
        height: responsiveHeight(8), 
        borderColor: '#5c80f7', 
        borderWidth: 1,
        borderRadius: 18,
        paddingLeft: 20,
        marginTop:10,
    },
    button: {
        marginTop:70,
        height: responsiveHeight(8), 
        //   height:55,
        borderRadius: 18,
        alignItems: "center",
        backgroundColor: "#1A3783",
        padding: 10, 
    },
    containerInput:{
        // backgroundColor: 'yellow',
        flex:1,
        justifyContent: "center"
    },
    conBtn:{
        // backgroundColor: 'blue',
        flex:1,
        justifyContent: "center"
    }
  });
  
export default LoginComp;