import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import {Splash, Login, Main, Notif, CekPertemuan, UmpanBalik, AturPertemuan, ResponFeedback} from '../pages'


const Stack = createStackNavigator();

const Router = ()=>{
    return(
        <Stack.Navigator>
            <Stack.Screen options={{headerShown:false}} name="Splash" component={Splash}/>
            <Stack.Screen 
                    name="Main" 
                    component={Main}
                    options={{
                    title: 'Pesan Layanan',
                    headerStyle: {
                        elevation: 0,
                        shadowOpacity: 0
                    }, 
                    // headerShown:false
                }} 
                />
                
            <Stack.Screen options={{headerShown:false}} name="Login" component={Login} />
            <Stack.Screen  
                        name="AturPertemuan" 
                        component={AturPertemuan}
                        options={{
                            title: 'Atur Pertemuan',
                            headerStyle: {
                                elevation: 0,
                                shadowOpacity: 0
                            },
                        }} 
            />
            <Stack.Screen 
                        name="Notif" 
                        component={Notif}
                        options={{
                            title: 'Pemberitahuan',
                            headerStyle: {
                                elevation: 0,
                                shadowOpacity: 0
                            }, 
                        }} 
                        />
            <Stack.Screen 
                    name="CekPertemuan" 
                    component={CekPertemuan}
                    options={{
                        title: 'Pertemuan Anda',
                        headerStyle: {
                            elevation: 0,
                            shadowOpacity: 0
                        }, 
                    }}
            />
              <Stack.Screen 
                    name="UmpanBalik" 
                    component={UmpanBalik}
                    options={{
                        title: 'Umpan Balik',
                        headerStyle: {
                            elevation: 0,
                            shadowOpacity: 0
                        },  
                    }}
            />
            <Stack.Screen 
                name="ResponFeedback" 
                component={ResponFeedback}
                options={{
                    headerShown:false
                }}
            />
          
        </Stack.Navigator>
    )
}

export default Router;