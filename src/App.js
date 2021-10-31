import React, { useState, useEffect } from 'react'
import { 
  NavigationContainer, 
  DefaultTheme as NavigationDefaultTheme,
  DarkTheme as NavigationDarkTheme,


} from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { 
    StyleSheet, Text, View, Button, TouchableOpacity, Image 
} from 'react-native'


// import MainTabScreen from './pages/StudentPage/Home'
// import { MainTabScreen } from './pages/StudentPage'

import { StudentDrawerContent } from './CustomNav/StudentDrawerContent'


import RootStackScreen from './Router/RootStackScreen/index'
import { ActivityIndicator } from 'react-native-paper'
import { AuthContext } from './components/AutContext/context'
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  Provider as PaperProvider, 
  DarkTheme as PaperDarkTheme,
  DefaultTheme as PaperDefaultTheme
} from 'react-native-paper'
import TabScreen from './Router/StudentBotomTab'
import MainTabScreen from './Router/StudentBotomTab'


//==>redux
import { Provider } from 'react-redux'
import { storeState, storeStateDrawerId } from './config/redux_Active_Class'
//==>redux


const HomeStack = createStackNavigator();
const DetailsStack = createStackNavigator();
const Drawer = createDrawerNavigator();
 


const App =()=> {

  const [isDarkTheme, setisDarkTheme] = React.useState(false);
  const [ChangeTheme, setChangeTheme] = useState(false);



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
        placeHolderText: '#a1a1a1'
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
        placeHolderText: '#a1a1a1',
        placeHolderText:'#f7f7f7'
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
            console.log("found User:", foundUser)
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
        // toggleTheme: ()=>{
        //   setisDarkTheme(isDarkTheme => !isDarkTheme)
        // }
        toggleTheme:  ()=>{
          if(ChangeTheme==true){
            setChangeTheme(false);
            setvalue(false);
            console.log("true change theme:", ChangeTheme)
          }

          if(ChangeTheme==false){

            setChangeTheme(true);
            setvalue(true);
            console.log("false change theme:", ChangeTheme)
          }
          getData();
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
            dispatch({type:'RETRIEVE_TOKEN',  token: userToken})
            // dispatch({type:'REGISTER',  token: userToken})
        }, 1000 )

    }, [])


    ////=>DarkMode
    const setvalue = async (ChangeTheme)=>{
      try {
        const jsonValue = JSON.stringify(ChangeTheme)
        await AsyncStorage.setItem('SWICTH_THEME', jsonValue)
      } catch (e) {
        console.log("error:",e)
      }
  }

    useEffect(() => {
      getData()
    }, [])

    const getData = () => {
      try {
            AsyncStorage.getItem('SWICTH_THEME')
              .then(value => {
                    //  console.log("get value") 
                      let stringVar = value;
                      let boolVar = stringVar.toLowerCase();
                      if(stringVar=='true'){
                          boolVar=true
                      }
                      else if(stringVar=='false'){
                        boolVar=false
                      }
                      else{
                        boolVar=false
                      }
                      console.log("get value, value di getITem:", boolVar)//returns true
                      setisDarkTheme(boolVar)
                      setChangeTheme(boolVar)
                      })
            } catch (error) {
                console.log("error:",error);
            }
        }
    ////=>DarkMode



    if(loginState.isLoading){
        return(
            <View style ={{flex:1, justifyContent:'center', alignItems:'center'}}>
                <ActivityIndicator size = 'large' color="black"/>
            </View>
        )
    }

    return (
      <Provider store={storeState}>
      <PaperProvider theme={theme}>
        <AuthContext.Provider value ={authContext}>
        <NavigationContainer theme={theme}>
            {loginState.userToken !== null ?(
                 <Drawer.Navigator drawerContent={props => <StudentDrawerContent {...props}/>}>
                    <Drawer.Screen name="HomeDrawer" component={TabScreen}  options={{headerShown: false}}/>
                    {/* <Drawer.Screen name="SupportScreen" component={SupportScreen}  options={{headerShown: false}}/>
                    <Drawer.Screen name="SettingsScreen" component={SettingsScreen}  options={{headerShown: false}}/>
                    <Drawer.Screen name="BookmarkScreen" component={BookmarkScreen}  options={{headerShown: false}}/> */}
                </Drawer.Navigator>        
            )
            :
            <RootStackScreen/>
            }  
        </NavigationContainer>
       </AuthContext.Provider>
       </PaperProvider>
       </Provider>
    )
}

export default App;

const styles = StyleSheet.create({})



