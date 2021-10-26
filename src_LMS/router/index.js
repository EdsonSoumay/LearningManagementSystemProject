import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import SplashScreen from '../pages/Splashscreen/index.js'
import MenuPilihLogin from '../pages/MenuPilihLogin/index'
import LoginStudent from '../pages/LoginStudent/index.js'
import { DrawerStudentPage } from '../pages/index.js'
import { TabStudentPage } from '../pages/index.js'

const Stack = createStackNavigator();

const Router = () => {
    return (
       <Stack.Navigator>
            <Stack.Screen name="SplashScreen" component={SplashScreen}options={{headerShown: false}}/>
            <Stack.Screen name="MenuPilihLogin" component={MenuPilihLogin}options={{headerShown: false}}/>
            <Stack.Screen name="LoginStudent" component={LoginStudent}options={{headerShown: false}}/>
            {/* <Stack.Screen name="TabStudentPage" component={TabStudentPage}options={{headerShown: false}}/> */}
            <Stack.Screen name="DrawerStudentPage" component={DrawerStudentPage}options={{headerShown: false}}/>
       </Stack.Navigator>
    )
}

export default Router;

const styles = StyleSheet.create({})
