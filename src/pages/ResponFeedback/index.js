import React from 'react'
import {View, Text, StyleSheet, StatusBar, TouchableOpacity} from 'react-native'
import { responsiveWidth, responsiveFontSize, responsiveHeight } from 'react-native-responsive-dimensions'

const ResponFeedback = ({navigation}) =>{

    const pindahHalaman = () =>{
        navigation.replace('Main')
    }

     return(
     <>
        <StatusBar hidden={true} /> 
        <View style={styles.container}>
            <View  style={{  height:responsiveHeight(30), alignItems:"center"}}>

                                <Text style={{ fontSize:responsiveFontSize(2.5) }}>
                                Terima kasih atas respon anda
                                </Text>
           <View  style={styles.conBtn}>
                        <TouchableOpacity onPress={pindahHalaman} style={styles.button}>                        
                            <View style={{flex: 1, justifyContent:"center"}}>
                                <Text style={{ color:'white', fontSize:responsiveFontSize(1.9) }}>
                                Kembali ke Dashboard
                                </Text>
                            </View>
                        </TouchableOpacity>
                </View>
            </View>
        </View>
       
     </>
        )

}

const styles = StyleSheet.create({

    container:{
        flexDirection:"column",
        flex:1,
        alignItems:'center',  
        justifyContent:'center',
    },
    conBtn:{
        // backgroundColor: 'blue',
        flex:1,
        justifyContent: "flex-start"
    },
    button: {
        marginTop:50,
        height: responsiveHeight(8), 
        width: responsiveWidth(80), 
        borderRadius: 18,
        alignItems: "center",
        backgroundColor: "#1A3783",
    },
})

export default ResponFeedback;