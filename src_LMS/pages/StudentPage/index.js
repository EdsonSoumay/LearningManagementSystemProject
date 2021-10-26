import React, {useState,useEffect} from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { createDrawerNavigator } from '@react-navigation/drawer'
import {View, TouchableOpacity, Image, Text, BackHandler} from 'react-native'
import {Drawer as DrawerCustom} from 'react-native-paper'
import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import axios from 'axios'
import HalamanBerita from './Pages/HalamanBerita'
import AllClass from './Pages/AllClass';
import ActiveClass from './Pages/ActiveClass';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

////redux
import { useDispatch, useSelector } from 'react-redux' //untuk proses penambahan dan pengurangan counter
//usedispatch untuk memanggil aksi yang kita buat di action.js
//useselector untuk menentukan store yang akan kita gunakan
import { Provider } from 'react-redux'
import { storeState, storeStateDrawerId } from '../../config/redux_Active_Class'
import { storeStateOlahDrawerActive } from '../../config/redux_Active_Class'
import { olahId } from '../../config/redux_Active_Class'
////redux




const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();
const Tab = createMaterialBottomTabNavigator();

const DrawerStudentPage =({data, route})=> {
  const { NoReg } = route.params;

    return (
      <Provider store={storeState}>
            <Drawer.Navigator drawerContent={props => <DrawerContent {...props}/>}            >
                <Drawer.Screen name= 'HomeStackScreen' children={ (props)=> <TabScreen data={NoReg} {...props}/>}  options={{headerShown: false, swipeEnabled:false}}/> 
            </Drawer.Navigator>
       </Provider>            
    )
}

export default DrawerStudentPage;

const No2 = ()=>{
  return(
    <Text>no 2</Text>
  )
}

////------------------------Drawer Content-------------------
const DrawerContent=(props)=>{
  const [dbDosen, setDbDosen]= useState([])  
  useEffect(() => {
    AxiosPosts();
    return () => {    
    }
  }, [])
  
  const AxiosPosts =()=>{
    const apiURL = 'http://10.0.2.2:3000/data';
    axios.get(apiURL)
    .then((response) => {
      setDbDosen(response.data)
    }). catch((error) =>{
      console.error(error);
    })
  }

  const dispatch = useDispatch();
  const counter = useSelector(data => data.counter);

  const[Active,setActive] = useState({id:0});
  

  const classNav = (id, nama)=>{
      props.navigation.navigate('ActiveClass',{
        id: id,
        namaDosen:nama
      })
  }

  useEffect(() => {
    setActive({id:counter})
    return () => {
    }
  }, [counter])

  const AllClassNav = ()=>{
    const id  = 0;
    reduxFunc(id)
    props.navigation.navigate('HomeStack')
  }

  const reduxFunc = (id)=>{
    dispatch(olahId(id))
}

  const SettingsNav = ()=>{
    props.navigation.navigate('Settings')

  }
  const nilai = 1;

    return(
      <>
      {/* <Provider store={storeStateOlahDrawerActive}> */}

     
     {  (nilai==1)?
        <View style ={{flex: 2}} >
          <DrawerContentScrollView {...props}>
             <View >
                <View>
                </View>
                <DrawerCustom.Section >
                <DrawerItem      
                    icon = {({color, size})=>{
                      <Icon
                        name = "home-outline"
                        color ={color}
                        size ={size}
                      />
                    }} 
                    label = "All Class"
                    style={{ backgroundColor: Active.id == 0 ? 'green': 'transparent' ,margin: 20}}
                    onPress={
                      ()=> {
                       AllClassNav();
                      }
                    }
                  />   
                 {  
                  dbDosen.map( (res)=>    
                      <DrawerItem
                      style={{ backgroundColor: Active.id==res.id ? 'green': 'transparent' ,margin: 20}}
                          key={res.id}
                          label={res.nama}
                          onPress ={
                            ()=>{
                              classNav(res.id, res.nama);
                                reduxFunc(res.id)
                            } 
                          }
                        />
                      )
                  }           
                </DrawerCustom.Section>
             </View>
          </DrawerContentScrollView>
          </View>

          :

        <View style ={{flex: 2}} >
          <DrawerContentScrollView {...props}>
             <View >
                <View>
                </View>
                <DrawerCustom.Section >
                <DrawerItem      
                    icon = {({color, size})=>{
                      <Icon
                        name = "home-outline"
                        color ={color}
                        size ={size}
                      />
                    }} 
                    label = "Settings"
                    style={{ backgroundColor: Active.id == 0 ? 'green': 'transparent' ,margin: 20}}
                    onPress={
                      ()=> {
                       SettingsNav();
                      }
                    }
                  />      
                </DrawerCustom.Section>
             </View>
          </DrawerContentScrollView>
          </View>
     }
      {/* </Provider> */}
    </>

    )
}
////------------------------Drawer Content-------------------

const TabScreen = ({data, navigation})=>{
  console.log("data di TabScreen:", data)

  useEffect(() => {
    const backAction = () => {
      navigation.navigate('LoginStudent');
      return true;
    };
    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      backAction
      
    );
     return () => backHandler.remove();
  
  }, []);
  return (
    <Tab.Navigator
    initialRouteName="Feed"
    activeColor="#fff"
    barStyle={{ backgroundColor: '#910144' }}
  >
    <Tab.Screen
      name="Home"
      children={ (props)=> <HomeStackScreen data={data} />}
      options={{
        tabBarLabel: 'Home',
        tabBarColor: '#009387',
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="home" color={color} size={26} />
        ),
      }}
    />
    <Tab.Screen
      name="Berita"
     children={(props)=> <HalamanBerita {...props}/>}
      options={{
        tabBarColor: '#1f65ff',
        tabBarLabel: 'Berita',
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="bell" color={color} size={26} />
        ),
      }}
    />
    <Tab.Screen
      name="Forum"
      component={Forum}
      options={{
        tabBarColor: '#1f65ff',
        tabBarLabel: 'Forum',
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="bell" color={color} size={26} />
        ),
      }}
    />
  </Tab.Navigator>
)
}

////recoil
import { charCountState } from '../../config/recoil_activeDrawer'
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from 'recoil';
const Forum2 =()=>{
  const count = useRecoilValue(charCountState);

 return (
     
       <View>
          <Text>Forum</Text>
            <Text>Character Count: {count}</Text>
      </View>
  )
}

const Forum =()=>{
 return (
     <RecoilRoot>
        <Forum2/>
    </RecoilRoot>
  )
}

////recoil



const HomeStackScreen = ({navigation, data})=>{
 return (
    <Stack.Navigator
          screenOptions={{
              headerStyle:{
                  backgroundColor: '#009387'
              },
              headerTintColor: '#fff',
              headerTitleStyle:{
                  fontWeight: 'bold'
              }
          }}>
              <Stack.Screen name="HomeStack" children={(props)=><AllClass data={data} {...props}/>}
                  options ={{
                     headerShown: false,
                     headerLeft: ()=>(

                      <TouchableOpacity onPress={()=>{navigation.openDrawer()}}>
                              <Image
                                  style={{ width: 23, height: 40, marginLeft: 15}}
                                  resizeMode={'contain'}
                                  source={hamIcon} />
                  </TouchableOpacity>
                     )
                  }}
              />
              <Stack.Screen name="ActiveClass" component={ActiveClass} options ={{headerShown: false}} />
              <Stack.Screen name="Settings" component={Settings} options ={{headerShown: false}} />
          </Stack.Navigator>    
)}

const Settings = ()=>{
  return(
    <Text>Settings</Text>
  )
}