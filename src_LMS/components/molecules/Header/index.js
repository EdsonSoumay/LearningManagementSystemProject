import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { Gap } from '../../atoms'

const Header = ({title, onBack}) => {
    return (
        <View style={styles.container}>                
                    <TouchableOpacity onPress ={onBack} activeOpacity={0.7}> 
                        <View style={styles.back}>
                        </View>
                    </TouchableOpacity>   
            <Gap width={26}/>
            <Text style={styles.text}>{title}</Text>
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    text:{
        fontSize: 23,
        color: 'white',
        fontFamily: 'Poppins-Medium'
    }
})
