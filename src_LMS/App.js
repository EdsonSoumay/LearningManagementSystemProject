import { NavigationContainer } from '@react-navigation/native';
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';
import Router from './router/index';

const App = () => {
    return (
        <NavigationContainer>
           <Router/>
        </NavigationContainer>
    )
}

export default App;

const styles = StyleSheet.create({})
