import React from 'react'
import {View, Text, StyleSheet, Image, StatusBar, TouchableOpacity} from 'react-native'
import { responsiveWidth, responsiveFontSize, responsiveHeight } from 'react-native-responsive-dimensions'

const CekPertemuan = ({navigation}) =>{

    const pindahHalaman = () =>{
        navigation.navigate('UmpanBalik')
    }

     return(
     <>
        <StatusBar hidden={true} /> 
        <View style={styles.container}>
            <View style={styles.wraping}>
                <View style={styles.pesan}>
                                <Text>
                                    Kc Cut Mutiah
                                </Text>
                                <Text>
                                    Jl. Cut Mutiah No. 12, Jakarta
                                </Text>
                                <Text>
                                    Mrs. Santi Sri Rezeki
                                </Text>
                                <Text>
                                12 November 2020
                                </Text>
                                <Text>
                                12.30 WIB
                                </Text>
                                <Text>
                                Membahas Keuangan Perusahaan PT. Sejahtera
                                </Text>
                </View>
            </View>
           <View  style={styles.conBtn}>
                        <TouchableOpacity onPress={pindahHalaman} style={styles.button}>                        
                            <View style={{flex: 1, justifyContent:"center"}}>
                                <Text style={{ color:'white', fontSize:responsiveFontSize(1.9) }}>
                                Umpan Balik
                                </Text>
                            </View>
                        </TouchableOpacity>
                </View>
        </View>
       
     </>
        )

}

const styles = StyleSheet.create({
    wraping:{
        flex:1,
        backgroundColor:'#DDEBFF',
        alignItems:'center',
        width: responsiveWidth(100), 
    },
    
    conBtn:{
        // backgroundColor: 'blue',
        flex:1,
        justifyContent: "flex-start"
    },
    button: {
        marginTop:70,
        height: responsiveHeight(8), 
        width: responsiveWidth(80), 
        borderRadius: 18,
        alignItems: "center",
        backgroundColor: "#1A3783",
    },
    pesan:{
        flex:1,
        width:responsiveWidth(80),
        justifyContent:'center',
    },  
    container:{
        flexDirection:"column",
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor: "white",
    }
})

export default CekPertemuan;