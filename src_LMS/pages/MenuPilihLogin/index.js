import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';
import Gap from '../../components/atoms/Gap/index'

const Menu = ({navigation}) => {
    return (
        <View style={styles.container}>
            <View  styles={styles.header}>
                <Text style={styles.text}>Management Learning System</Text>
            </View>
            <View style={styles.wrapButton}>
            <TouchableOpacity onPress={()=>{navigation.navigate('LoginStudent')}}>
                <View style={styles.button}>
                            <Text style={styles.textButton}>Login as Student</Text>
                </View>
            </TouchableOpacity>
                <Gap height={37}/>
            <TouchableOpacity onPress={()=>{navigation.navigate('LecturePage')}}>
                <View style={styles.button}>
                 <Text style={styles.textButton}>Login as Lecture</Text>
                </View>
            </TouchableOpacity>
            </View>
        </View>

    )
}

export default Menu;

const styles = StyleSheet.create({
    container:{
      marginTop:40
    },
    button:{
        width: 312,
        height: 66,
        backgroundColor: '#FD7F20',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },
    wrapButton:{
        marginTop:160,
        alignItems:'center'
    },
    text:{
            textAlign:"center",
            fontSize: 37,
            fontWeight: 'bold',
            fontFamily: "Raleway-VariableFont_wght"

    },
    textButton:{
        fontSize: 30,
        color: "white",
        fontWeight: 'bold',
        fontFamily: "Raleway-VariableFont_wght"
    }
})