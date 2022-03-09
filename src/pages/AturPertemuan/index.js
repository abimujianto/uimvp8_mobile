import React from 'react'
import {View,StatusBar, Text, StyleSheet,ScrollView, TextInput, TouchableOpacity} from 'react-native'
import RNPickerSelect from 'react-native-picker-select';
import {
  responsiveHeight,
  responsiveFontSize
} from "react-native-responsive-dimensions";

const AturPertemuan = ()=>{
 return(
   <>
  <StatusBar/>
  <ScrollView style={{backgroundColor:'white',}}>

  <View style={styles.container}>
    <View style={{paddingLeft: 5, paddingTop:10}}>
      <Text>Pilih Kantor Cabang</Text>
    </View>
  <RNPickerSelect 
            onValueChange={(value) => console.log(value)}
            items={[
              { label: 'Football', value: 'football' },
              { label: 'Baseball', value: 'baseball' },
              { label: 'Hockey', value: 'hockey' },
            ]}
            />

    <View style={{paddingLeft: 5, paddingTop:10}}>
      <Text>Tanggal</Text>
    </View>
     <RNPickerSelect 
            onValueChange={(value) => console.log(value)}
            items={[
              { label: 'Football', value: 'football' },
              { label: 'Baseball', value: 'baseball' },
              { label: 'Hockey', value: 'hockey' },
            ]}
            />
      <View style={{paddingLeft: 5, paddingTop:10}}>
      <Text>Jam</Text>
      <TextInput placeholder="Contoh(12.30 Wita)" style={styles.inputan}/>
    </View>

    <View style={{paddingLeft: 5, paddingTop:10}}>
      <Text>Catatan</Text>
      <TextInput placeholder="Tulis catatan" style={styles.inputan}/>
    </View>

    <TouchableOpacity style={styles.button} >                        
                            <View style={{flex: 1, justifyContent:"center"}}>
                                <Text style={{ color:'white', fontSize:responsiveFontSize(1.9) }}>
                                Masuk
                                </Text>
                            </View>
                        </TouchableOpacity>
    </View>
</ScrollView>
   </>
 ) 
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    padding:20,
  }, button: {
    marginTop:70,
    height: responsiveHeight(8), 
    //   height:55,
    borderRadius: 18,
    alignItems: "center",
    backgroundColor: "#1A3783",
    padding: 10, 
},
  inputan:{
    height: responsiveHeight(8), 
    borderColor: '#5c80f7', 
    borderWidth: 1,
    borderRadius: 18,
    paddingLeft: 20,
    marginTop:10,
},
})
export default AturPertemuan;