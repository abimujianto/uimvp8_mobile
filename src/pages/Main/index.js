import React from 'react'
import { StyleSheet, Text, View, SafeAreaView, StatusBar, Image, TouchableOpacity} from 'react-native';
import {
    responsiveHeight,
    responsiveWidth,
    responsiveFontSize
  } from "react-native-responsive-dimensions";
  
const MainMenu = ({navigation}) =>{
    const notifikasiChange = ()=>{
        navigation.navigate('Notif')
    }
    const onChangeCek = ()=>{
        navigation.navigate('CekPertemuan')
    }
    const onChangeBooking = ()=>{
        navigation.navigate('AturPertemuan')
    }
    return(
        <>
          <SafeAreaView style={styles.container}>    
          <StatusBar hidden={true} /> 
          <View style={{flex:1, justifyContent:"space-around", alignItems:'center'}}>
              <TouchableOpacity onPress={onChangeCek}>
                    <View style={styles.pertemuanCon}>
                        <View style={{flex: 1, flexDirection:'column', justifyContent:"space-between" }}>
                            <View style={{flexDirection:'row', height:responsiveHeight('10') }}>
                                <View style={{flex:1, paddingLeft:20, paddingTop:15}}>
                                    <Image source={require("../../../img/listIcon.png")}/>
                                </View>
                                <View style={{flex:1,  paddingLeft:60, paddingTop:20}}>
                                     <Image  source={require("../../../img/logobriItem.png")}/>
                                </View> 
                            </View>
                            <View style={{ paddingLeft:20, paddingBottom:5, height:responsiveHeight('7'),  }}>
                                <Image source={require("../../../img/cekPertemuan.png")}/>
                            </View>
                        </View>
                    </View>
                </TouchableOpacity>
                

                <TouchableOpacity onPress={notifikasiChange}>
                    <View style={styles.cekPemberitahuan}>       
                         <View style={{flex:1,justifyContent:'center', alignItems:'center'}}>
                            <Text >Cek Pemberitahuan</Text>
                         </View>
                    </View>
                </TouchableOpacity>



                <TouchableOpacity onPress={onChangeBooking}>
                    <View style={styles.aturPert}>
                        <View style={{flex: 1, flexDirection:'column', justifyContent:"space-between" }}>
                            <View style={{flexDirection:'row', height:responsiveHeight('10') }}>
                                <View style={{flex:1, paddingLeft:20, paddingTop:15}}>
                                    <Image source={require("../../../img/logopertemuan.png")}/>
                                </View>
                                <View style={{flex:1,  paddingLeft:60, paddingTop:20}}>
                                     <Image  source={require("../../../img/briputih.png")}/>
                                </View> 
                            </View>
                            <View style={{ paddingLeft:20, paddingBottom:30,}}>
                                <Image source={require("../../../img/atupertemuan.png")}/>
                            </View>
                        </View>
                    </View>
                </TouchableOpacity>
          </View>
          </SafeAreaView>
        </>
    )
}

const styles = StyleSheet.create({
    aturPert:{
        height:responsiveHeight('45'),
        width:responsiveWidth('83'),
        backgroundColor:'#1A3783',
        borderRadius:26
    },
    cekPemberitahuan:{
        height:responsiveHeight('10'),
        backgroundColor: '#DDEBFF',
        width:responsiveWidth('83'),
        borderRadius:20
    },
    pertemuanCon:{
        height:responsiveHeight('25'),
        backgroundColor: '#FFBE27',
        width:responsiveWidth('83'),
        borderRadius:26
    },
    container:{
        flex: 1,
        backgroundColor:'white'
    }
})
export default MainMenu