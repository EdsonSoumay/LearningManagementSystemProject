import React from 'react'
import {View,Text,Image,StyleSheet} from 'react-native'

// {key,name,username,email,address,phone}

const Card = (props) => {
  // console.log('props:',props)
  return (
    <View style={style.container}>
        <Text>id: {props.id}</Text> 
        <Text>Nama Dosen: {props.nama}</Text> 
        <Text>Mata kuliah: {props.MK}</Text> 
    </View>
  )
}

export default Card

const style = StyleSheet.create({
  container:{
    marginHorizontal:20,
    marginVertical:10,
    borderColor:"#777",
    borderWidth:1,
    paddingVertical:10,
    paddingHorizontal:20,
    borderRadius:20
  }
})