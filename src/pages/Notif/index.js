import React from 'react'
import {View, Text, StyleSheet, Image, StatusBar} from 'react-native'
import { ListItem} from 'react-native-elements'
import {
    responsiveHeight,
    responsiveWidth,
    responsiveFontSize
  } from "react-native-responsive-dimensions";

const Notif = () =>{

    const list = [
      {
        name: 'Chris Jackson',
        subtitle: 'Revi telah menerima permintaan pertemuan anda'
      },
    ]
    return(
        <View>

                <View style={{paddingTop:3}}>
                        {
                            list.map((l, i) => (
                                <ListItem key={i} bottomDivider>
                                    <ListItem.Content>
                                        <ListItem.Subtitle>{l.subtitle}</ListItem.Subtitle>
                                        <ListItem.Subtitle>
                                            <View style={{flexDirection:'row', paddingTop:5}}>
                                                <View style={{ paddingRight:4, paddingTop:2}}>
                                                    <Image style={{paddingTop:10}} source={require('../../../img/time.png')}/>
                                                </View>
                                                <View >
                                                    <Text style={{fontSize:responsiveFontSize(1), color:'grey'}}>2 menit yang lalu</Text>
                                                </View>
                                            </View>
                                        </ListItem.Subtitle>
                                    </ListItem.Content>
                                    
                                 </ListItem>
                        ))
                        }
                </View>
        </View>
    )
    
   
        

}

const styles = StyleSheet.create({
    container:{
        flexDirection:"column",
        flex:1,
        backgroundColor: "#1A3783",
    }
})

export default Notif;