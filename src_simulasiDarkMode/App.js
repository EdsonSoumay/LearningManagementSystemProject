import React, {useState, useEffect} from 'react'
import {NavigationContainer, DefaultTheme as NavigationDefaultTheme, DarkTheme as NavigationDarkTheme,} from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { Provider as PaperProvider, DarkTheme as PaperDarkTheme,DefaultTheme as PaperDefaultTheme} from 'react-native-paper'
import { Text, View,StatusBar } from 'react-native'
import { useTheme } from '@react-navigation/native'
import { useTheme as useThemePaper, TouchableRipple, Switch} from 'react-native-paper'
import AsyncStorage from '@react-native-async-storage/async-storage';

const AuthContext = React.createContext();
const Stack = createStackNavigator();
const App =()=> {
  const [isDarkTheme, setisDarkTheme] = useState(false);
  const [ChangeTheme, setChangeTheme] = useState(false);

    const CustomDefaultTheme ={
      ...NavigationDefaultTheme,  ...PaperDefaultTheme,
      colors:{...NavigationDefaultTheme.colors, ...PaperDefaultTheme.colors, background: '#ffffff',  text: '#333333', }
    }


    const CustomeDarkTheme ={...NavigationDarkTheme, ...PaperDarkTheme,
      colors:{ ...NavigationDarkTheme.colors, ...PaperDarkTheme.colors, background: '#333333',text: '#ffffff', }
    }

    const theme = isDarkTheme? CustomeDarkTheme: CustomDefaultTheme;

    const authContext = React.useMemo(()=>({
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

    return (
      <PaperProvider theme={theme}>
        <AuthContext.Provider value ={authContext}>
        <NavigationContainer theme={theme}>
                <Stack.Navigator>
                      <Stack.Screen name="HomeDrawer" component={HomeScreen} options={{headerShown:false}}/>   
                </Stack.Navigator>
        </NavigationContainer>
       </AuthContext.Provider>
       </PaperProvider>
    )
}
export default App;

const HomeScreen = ({navigation, themeData}) => {
  const paperTheme = useThemePaper();
  const {toggleTheme} = React.useContext(AuthContext);
  const {colors}= useTheme();

    return (
      <>      
        <TouchableRipple onPress ={()=> {toggleTheme()}}>
                  <View><Text style={{color: colors.text, textAlign:'right'}}>Dark Theme</Text>
                  <View pointerEvents = "none"><Switch value={paperTheme.dark}/></View>
                  </View>
        </TouchableRipple>
                <View style ={{flex: 1, alignItems: 'center', justifyContent:'center'}}>
            <StatusBar barStyle={colors?"light-content": 'dark-content'}/>
            <Text style={{color: colors.text}}>Home Screen</Text>
        </View>
      </>
    )}