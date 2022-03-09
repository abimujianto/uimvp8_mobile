import React from 'react';
import {
  StyleSheet,
} from 'react-native';
import  Router  from './router'
import { NavigationContainer } from '@react-navigation/native';


const App = () => {
  return (
    <NavigationContainer> 
             <Router/>  
    </NavigationContainer>
  
  );
};
const styles = StyleSheet.create({
  container: {
   fontFamily: "Roboto",
    backgroundColor: '#fff',
    alignItems: 'center',
  },
});


export default App;
