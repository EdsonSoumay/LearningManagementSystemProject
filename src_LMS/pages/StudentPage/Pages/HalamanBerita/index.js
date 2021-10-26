import * as React from 'react';
import { useState} from 'react';
import { useEffect } from 'react';
import { View, Text, Button, TouchableOpacity, TextComponent, BackHandler, StyleSheet, Image, SafeAreaView, ScrollView } from 'react-native';
import { TextInput } from 'react-native-paper';
import { createStackNavigator } from '@react-navigation/stack'
import {createDrawerNavigator} from '@react-navigation/drawer';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import {Gap, Header} from '../../components'


//redux
import { useDispatch, useSelector } from 'react-redux' //untuk proses penambahan dan pengurangan counter
import { drawerId, storeStateDrawerId } from '../../../../config/redux_Active_Class';
import { Provider } from 'react-redux'


//redux
const HalamanBerita2 = (props) => {

    const distPatchDrawer = useDispatch();
    
    const reduxFunc = ()=>{
        const id = 1;
       distPatchDrawer(drawerId(id))     
       props.navigation.openDrawer();
    }
    return (
    
        <View style={{flex: 1,  alignItems: "center", justifyContent: "center"}}>
            
                <TouchableOpacity onPress={()=>{reduxFunc()}}>
                    <Text>settings</Text> 
                </TouchableOpacity>
            
            <View style={{alignItems: 'center'}}><Text>halaman Berita</Text></View>
          </View>
    );
  };

  
  const HalamanBerita = (props) => {
    return (
      <Provider  store={storeStateDrawerId}>
          <HalamanBerita2 {...props}/>
       </Provider>
    )
  }
  
  export default HalamanBerita;
  
  const styles = StyleSheet.create({})
  