import React from 'react'
import {View, Text, StyleSheet, Image, StatusBar, TouchableOpacity, SafeAreaView, TextInput} from 'react-native'
import { responsiveWidth, responsiveFontSize, responsiveHeight } from 'react-native-responsive-dimensions'


const UmpanBalik = ({navigation}) =>{
    const pindahHalaman = ()=>{
       navigation.replace('ResponFeedback')
    }

     return(
     <>
     <SafeAreaView style={{flex:1, alignItems:'center', backgroundColor:'white'}}>
        <StatusBar hidden={true} /> 
            <View style={styles.container}>
                            <Text style={{ fontSize:responsiveFontSize(1.7),}}>Nilai</Text>
                            <TextInput placeholder="berikan nilai pertemuan dari 1 - 5" style={styles.inputanNilai}/>
                            <Text  style={{marginTop:18,  fontSize:responsiveFontSize(1.7), }}>Review</Text>
                            <TextInput placeholder="review pertemuan anda"  style={styles.inputan}/>
                            <Text  style={{marginTop:18,  fontSize:responsiveFontSize(1.7), }}>Evaluasi</Text>
                            <TextInput placeholder="evaluasi pertemuan hari ini" style={styles.inputan}/>
                <View  style={styles.conBtn}>
                        <TouchableOpacity style={styles.button} onPress={pindahHalaman} >                        
                            <View style={{flex: 1, justifyContent:"center"}}>
                                <Text style={{ color:'white', fontSize:responsiveFontSize(1.9) }}>
                                Kirim
                                </Text>
                            </View>
                        </TouchableOpacity>
                </View>
            </View>
     </SafeAreaView>
       
     </>
        )

}

const styles = StyleSheet.create({
 
    container:{
        flexDirection:"column",
        width:responsiveWidth(85),
        flex:1,
        backgroundColor:'white', 
    },
    inputanNilai:{
        height: responsiveHeight(8), 
        borderColor: '#5c80f7', 
        borderWidth: 1,
        borderRadius: 18,
        paddingLeft: 20,
        marginTop:10,
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
        backgroundColor: 'yellow',
        flex:1,
        justifyContent: "center"
    },
})

export default UmpanBalik;