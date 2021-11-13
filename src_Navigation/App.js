import React, { useState, useEffect } from 'react'
import { 
  NavigationContainer, 
  DefaultTheme as NavigationDefaultTheme,
  DarkTheme as NavigationDarkTheme,


} from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createDrawerNavigator } from '@react-navigation/drawer'
// import Icon from 'react-native-vector-icons/Ionicons';
import hamIcon from './assets/hamb_button.png'
import { 
    StyleSheet, Text, View, Button, TouchableOpacity, Image 
} from 'react-native'

import HomeScreen from './HomeScreen'
import DetailsScreen from './DetailsScreen'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MainTabScreen from './MainTabScreen'
import {DrawerContent} from './DrawerContent'
import SupportScreen from './SupportScreen'
import SettingsScreen from './SettingsScreen'
import BookmarkScreen from './BookmarkScreen'
import ProfilleScreen from './ProfilleScreen'

import RootStackScreen from './RootStackScreen'
import { ActivityIndicator } from 'react-native-paper'
import { AuthContext } from './components/context'

// import AsyncStorage from '@react-native-community/async-storage'
import AsyncStorage from '@react-native-async-storage/async-storage'


import {
  Provider as PaperProvider, 
  DarkTheme as PaperDarkTheme,
  DefaultTheme as PaperDefaultTheme
} from 'react-native-paper'

const HomeStack = createStackNavigator();
const DetailsStack = createStackNavigator();
const Drawer = createDrawerNavigator();



const App =()=> {
    // const [isLoading, setIsLoading] = React.useState(true)
    // const [userToken, setuserToken] = React.useState(null)

  const [isDarkTheme, setisDarkTheme] = React.useState(false);


    const initialLoginState ={
        isLoading:true,
        userName: null,
        userToken: null
    }

    const CustomDefaultTheme ={
      ...NavigationDefaultTheme,
      ...PaperDefaultTheme,
      colors:{
        ...NavigationDefaultTheme.colors,
        ...PaperDefaultTheme.colors,
        background: '#ffffff',
        text: '#333333',
      }
    }

    const CustomeDarkTheme ={
      ...NavigationDarkTheme,
      ...PaperDarkTheme,
      colors:{
        ...NavigationDarkTheme.colors,
        ...PaperDarkTheme.colors,
        background: '#333333',
        text: '#ffffff',
      }
    }

    const theme = isDarkTheme? CustomeDarkTheme: CustomDefaultTheme;

    const loginReducer = (prevState, action) => {
        switch( action.type ) {
          case 'RETRIEVE_TOKEN': 
            return {
              ...prevState,
              userToken: action.token,
              isLoading: false,
            };
          case 'LOGIN': 
            return {
              ...prevState,
              userName: action.id,
              userToken: action.token,
              isLoading: false,
            };
          case 'LOGOUT': 
            return {
              ...prevState,
              userName: null,
              userToken: null,
              isLoading: false,
            };
          case 'REGISTER': 
            return {
              ...prevState,
              userName: action.id,
              userToken: action.token,
              isLoading: false,
            };
        }
      };

      const [loginState, dispatch] = React.useReducer(loginReducer, initialLoginState)

    const authContext = React.useMemo(()=>({
        signIn: async (foundUser)=>{
            // setuserToken('fgkj');
            // setIsLoading(false);
            const userToken = String(foundUser[0].userToken);
            const userName = foundUser[0].username;
              try{
                await AsyncStorage.setItem('userToken',userToken)
              }catch(e){
                console.log(e)
              }
              // userToken = 'dfgdfg';
           
            // console.log("user token:", userToken)
            dispatch({type:'LOGIN', id:userName, token: userToken})
        },
        signOut: async ()=>{
            // setuserToken(null);
            // setIsLoading(false);
            try{
              await AsyncStorage.removeItem('userToken')
            }catch(e){
              console.log(e)
            }
            dispatch({type:'LOGOUT'})
        },

        signUp: ()=>{
            setuserToken('fgkj');
            setIsLoading(false);
        },
        toggleTheme: ()=>{
          setisDarkTheme(isDarkTheme => !isDarkTheme)
        }
    }))

    useEffect(() => {
     
        setTimeout( async()=>{
          let userToken;
          userToken = null;
          try{
            userToken = await AsyncStorage.getItem('userToken')
          }catch(e){
            console.log(e)
          }
            // setIsLoading(false)
            console.log("user Token dari uf:", userToken)

            dispatch({type:'RETRIEVE_TOKEN',  token: userToken})
            // dispatch({type:'REGISTER',  token: userToken})
        }, 1000 )

    }, [])

    if(loginState.isLoading){
        return(
            <View style ={{flex:1, justifyContent:'center', alignItems:'center'}}>
                <ActivityIndicator size = 'large' color="black"/>
            </View>
        )
    }

    return (
      <PaperProvider theme={theme}>
        <AuthContext.Provider value ={authContext}>
        <NavigationContainer theme={theme}>
            {loginState.userToken !== null ?(
                 <Drawer.Navigator drawerContent={props => <DrawerContent{...props}/>}>
                    <Drawer.Screen name="HomeDrawer" component={MainTabScreen}  options={{headerShown: false}}/>
                    <Drawer.Screen name="SupportScreen" component={SupportScreen}  options={{headerShown: false}}/>
                    <Drawer.Screen name="SettingsScreen" component={SettingsScreen}  options={{headerShown: false}}/>
                    <Drawer.Screen name="BookmarkScreen" component={BookmarkScreen}  options={{headerShown: false}}/>
                </Drawer.Navigator>        
            )
            :
            <RootStackScreen/>
            }  
        </NavigationContainer>
       </AuthContext.Provider>
       </PaperProvider>
    )
}

export default App;

const styles = StyleSheet.create({})



