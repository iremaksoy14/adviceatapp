
//son kez değiştirildi
import * as React from 'react';

import ReactDOM from 'react-dom';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import store from './components/store.js';
import { Provider } from "react-redux";



import LoginScreen from './components/Login.js';
import Anasayfa from './components/Anasayfa.js';
import Malzemeler  from './Malzemeler/Malzemeler.js';

import Kategoriler from  './components/Kategoriler.js';


import Yemekler from './components/Yemekler.js';


const Tab = createMaterialBottomTabNavigator();
const Top= createMaterialTopTabNavigator();
const Stack = createStackNavigator();

 

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen name="Kategoriler1" component={Kategoriler1} options={{title:"ADVICEAT"}}/>
        
        <Stack.Screen name="Yemekler" component={Yemekler} />
     <Stack.Screen name="Malzemeler" component={Malzemeler} />
      
      
    </Stack.Navigator>
  );
}

function Kategoriler1() {
  return (
    <Top.Navigator>
      <Top.Screen name="Anasayfa" component={Anasayfa} />
      <Top.Screen name="Kategoriler"  component={Kategoriler}/>
</Top.Navigator>
  );
}



export default function App() {

return (
  <Provider store={store}>
    <NavigationContainer>
    <MyStack/>
    </NavigationContainer>
    </Provider>
  );
}


