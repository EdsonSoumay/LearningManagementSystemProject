import React from 'react'
import { createStackNavigator } from "@react-navigation/stack";
import { View, Text, TouchableOpacity, Image } from 'react-native'
import HomeScreen from './HomeScreen'
import DetailsScreen from './DetailsScreen'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import ExploreScreen from './ExploreScreen';
import ProfilleScreen from './ProfilleScreen';
import hamIcon from './assets/hamb_button.png'

const HomeStack = createStackNavigator();
const DetailsStack = createStackNavigator();
const Tab = createMaterialBottomTabNavigator();


const MainTabScreen = () => {
    return (
        <Tab.Navigator
        initialRouteName="Feed"
        activeColor="#fff"
        barStyle={{ backgroundColor: 'tomato' }}
      >
        <Tab.Screen
          name="Home"
          component={HomeStackScreen}
          options={{
            tabBarLabel: 'Home',
            tabBarColor: '#009387',
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="home" color={color} size={26} />
            ),
          }}
        />
        <Tab.Screen
          name="Details"
          component={DetailsStackScreen}
          options={{
            tabBarColor: '#1f65ff',
            tabBarLabel: 'Details',
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="bell" color={color} size={26} />
            ),
          }}
        />
        <Tab.Screen
          name="Profille"
          component={ProfilleScreen}
          options={{
            tabBarColor: '#694fad',
            tabBarLabel: 'Profile',
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="account" color={color} size={26} />
            ),
          }}
        />
        <Tab.Screen
          name="Explore"
          component={ExploreScreen}
          options={{
            tabBarColor: '#d02860',
            tabBarLabel: 'Explore',
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="account" color={color} size={26} />
            ),
          }}
        />
      </Tab.Navigator>
    )
}

export default MainTabScreen;


const HomeStackScreen = ({navigation})=>(
    <HomeStack.Navigator
          screenOptions={{
              headerStyle:{
                  backgroundColor: '#009387'
              },
              headerTintColor: '#fff',
              headerTitleStyle:{
                  fontWeight: 'bold'
              }
          }}>
              <HomeStack.Screen name="Home" component={HomeScreen} 
                  options ={{
                     title : 'Overview',
                     headerLeft: ()=>(
                         <Ionicons.Button name="ios-menu" size ={25}
                          backgroundColor= "#009387" onPress={ ()=>navigation.openDrawer()
                          }></Ionicons.Button>
                     )
                  }}
              />
          </HomeStack.Navigator>    
);

const DetailsStackScreen = ({navigation})=>(
  <DetailsStack.Navigator
        screenOptions={{
            headerStyle:{
                backgroundColor: '#1f05ff'
            },
            headerTintColor: '#fff',
            headerTitleStyle:{
                fontWeight: 'bold'
            }
        }}>
            <DetailsStack.Screen name="Details" component={DetailsScreen} 
                options ={{
                  title : 'Details',
                  headerLeft: ()=>(
                         <Ionicons.Button name="ios-menu" size ={25}
                          backgroundColor= "#1f05ff" onPress={ ()=>navigation.openDrawer()
                          }></Ionicons.Button>
                     )
                }}
            />
        </DetailsStack.Navigator>    

);


