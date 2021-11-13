// import React from 'react'
// import { createStackNavigator } from "@react-navigation/stack";
// import { View, Text, TouchableOpacity, Image } from 'react-native'
// import HomeScreen from '../../HomeScreen';
// import DetailsScreen from '../../DetailsScreen'
// import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
// import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
// import Ionicons from 'react-native-vector-icons/Ionicons';
// import ExploreScreen from '../../ExploreScreen';
// import ProfilleScreen from '../../ProfilleScreen';
// import { HomeStackScreen, DetailsStackScreen } from '../../pages/StudentPage/Home/index';

// const HomeStack = createStackNavigator();
// const DetailsStack = createStackNavigator();
// const Tab = createMaterialBottomTabNavigator();


// const MainTabScreen = () => {
//     return (
//         <Tab.Navigator
//         initialRouteName="Feed"
//         activeColor="#fff"
//         // barStyle={{ backgroundColor: 'tomato' }}
//       >
//         <Tab.Screen
//           name="Home"
//           component={HomeStackScreen}
//           options={{
//             tabBarLabel: 'Home',
//             tabBarColor: '#009387',
//             tabBarIcon: ({ color }) => (
//               <MaterialCommunityIcons name="home" color={color} size={26} />
//             ),
//           }}
//         />
//         <Tab.Screen
//           name="Details"
//           component={DetailsStackScreen}
//           options={{
//             tabBarColor: '#1f65ff',
//             tabBarLabel: 'Details',
//             tabBarIcon: ({ color }) => (
//               <MaterialCommunityIcons name="bell" color={color} size={26} />
//             ),
//           }}
//         />
//         <Tab.Screen
//           name="Profille"
//           component={ProfilleScreen}
//           options={{
//             tabBarColor: '#694fad',
//             tabBarLabel: 'Profile',
//             tabBarIcon: ({ color }) => (
//               <MaterialCommunityIcons name="account" color={color} size={26} />
//             ),
//           }}
//         />
//         <Tab.Screen
//           name="Explore"
//           component={ExploreScreen}
//           options={{
//             tabBarColor: '#d02860',
//             tabBarLabel: 'Explore',
//             tabBarIcon: ({ color }) => (
//               <MaterialCommunityIcons name="account" color={color} size={26} />
//             ),
//           }}
//         />
//       </Tab.Navigator>
//     )
// }

// export default MainTabScreen;

// const ExploreScree = ()=>{
//   return <Text>tes</Text>
// }


// import React from 'react'
// import { createStackNavigator } from "@react-navigation/stack";
// import { View, Text, TouchableOpacity, Image } from 'react-native'
// import HomeScreen from '../../HomeScreen';
// import DetailsScreen from '../../DetailsScreen'
// import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
// import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
// import Ionicons from 'react-native-vector-icons/Ionicons';
// import ExploreScreen from '../../ExploreScreen';
// import ProfilleScreen from '../../ProfilleScreen';
// import { HomeStackScreen, DetailsStackScreen } from '../../pages/StudentPage/Home/index';
// import AllClass from '../../pages/StudentPage/AllClass';

// const HomeStack = createStackNavigator();
// const DetailsStack = createStackNavigator();
// const Tab = createMaterialBottomTabNavigator();


// const TabScreen = () => {
//     return (
//         <Tab.Navigator
//         initialRouteName="Feed"
//         activeColor="#fff"
//         // barStyle={{ backgroundColor: 'tomato' }}
//       >
//          {/* <Tab.Screen
//           name="Home"
//           component={AllClass}
//           options={{
//             tabBarLabel: 'Home',
//             tabBarColor: '#009387',
//             tabBarIcon: ({ color }) => (
//               <MaterialCommunityIcons name="home" color={color} size={26} />
//             ),
//           }}
//         /> */}
//         {/*<Tab.Screen
//           name="Details"
//           component={DetailsStackScreen}
//           options={{
//             tabBarColor: '#1f65ff',
//             tabBarLabel: 'Details',
//             tabBarIcon: ({ color }) => (
//               <MaterialCommunityIcons name="bell" color={color} size={26} />
//             ),
//           }}
//         />
//         <Tab.Screen
//           name="Profille"
//           component={ProfilleScreen}
//           options={{
//             tabBarColor: '#694fad',
//             tabBarLabel: 'Profile',
//             tabBarIcon: ({ color }) => (
//               <MaterialCommunityIcons name="account" color={color} size={26} />
//             ),
//           }}
//         /> */}
//         <Tab.Screen
//           name="Explore"
//           component={ExploreScreen}
//           options={{
//             tabBarColor: '#d02860',
//             tabBarLabel: 'Explore',
//             tabBarIcon: ({ color }) => (
//               <MaterialCommunityIcons name="account" color={color} size={26} />
//             ),
//           }}
//         />
//         <Tab.Screen
//           name="Explores"
//           component={ExploreScree}
//           options={{
//             tabBarColor: '#d02860',
//             tabBarLabel: 'Explore',
//             tabBarIcon: ({ color }) => (
//               <MaterialCommunityIcons name="account" color={color} size={26} />
//             ),
//           }}
//         />
//       </Tab.Navigator>
//     )
// }

// export default TabScreen;

// const ExploreScree = ()=>{
//   return <Text>tes</Text>
// }



import React, {useState,useEffect} from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { createDrawerNavigator } from '@react-navigation/drawer'
import {View, TouchableOpacity, Image, Text, BackHandler} from 'react-native'
import {Drawer as DrawerCustom} from 'react-native-paper'
import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import axios from 'axios'
import HalamanBerita from '../../pages/StudentPage/HalamanBerita/index'
import AllClass from '../../pages/StudentPage/AllClass/index'
import ActiveClass from '../../pages/StudentPage/ActiveClass/index';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

////redux
// import { useDispatch, useSelector } from 'react-redux' //untuk proses penambahan dan pengurangan counter
//usedispatch untuk memanggil aksi yang kita buat di action.js
//useselector untuk menentukan store yang akan kita gunakan
// import { Provider } from 'react-redux'
// import { storeState, storeStateDrawerId } from '../../config/redux_Active_Class'
// import { storeStateOlahDrawerActive } from '../../config/redux_Active_Class'
// import { olahId } from '../../config/redux_Active_Class'
// ////redux




const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();
const Tab = createMaterialBottomTabNavigator();


const TabScreen = ({dataUser, data, navigation, TrigerOpenClass})=>{

  // console.log("triger open class di student tab:", TrigerOpenClass)
  
  // console.log("data di TabScreen:", data)
  // console.log("navigation:", navigation)

  // console.log("data user di tabscreen:",dataUser)

  // useEffect(() => {
  //   const backAction = () => {
  //     // navigation.navigate('Berita');
  //     // navigation.reset()
  //     return true;
  //   };
  //   const backHandler = BackHandler.addEventListener(
  //     "hardwareBackPress",
  //     backAction
      
  //   );
  //    return () => backHandler.remove();
  
  // }, []);
  
  return (
    <Tab.Navigator
    initialRouteName="Feed"
    activeColor="#fff"
    barStyle={{ backgroundColor: '#910144' }}
  >
    <Tab.Screen
      name="Home"
      children={ (props)=> <HomeStackScreen  dataUser={dataUser} TrigerOpenClass={TrigerOpenClass}/>}
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
export default TabScreen;


const Forum =()=>{
 return (
  <View>
       <Text>Forum</Text>
  </View>
  )
}


const tes = ()=>{
  return <Text>tes</Text>
}

const HomeStackScreen = ({navigation, dataUser, TrigerOpenClass})=>{
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
              <Stack.Screen name="HomeStack" 
              children={(props)=><AllClass dataUser={dataUser} TrigerOpenClass={TrigerOpenClass}{...props} />}
              options ={{headerShown:false}}/>

              <Stack.Screen name="ActiveClass" component={ActiveClass} options ={{headerShown: false}} />
              {/* <Stack.Screen name="Settings" component={Settings} options ={{headerShown: false}} /> */}
          </Stack.Navigator>    
)}

const Settings = ()=>{
  return(
    <Text>Settings</Text>
  )
}