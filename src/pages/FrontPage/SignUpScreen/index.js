import React from 'react';
import { 
    View, 
    Text, 
    TouchableOpacity, 
    TextInput,
    Platform,
    StyleSheet ,
    StatusBar,
    Alert,
    ScrollView
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import axios from 'axios';
import { AuthContext } from '../../../components/AutContext/context';

const SignUpScreen = ({navigation}) => {

    const {signIn} = React.useContext(AuthContext)


    const [data, setData] = React.useState({
        username: '',
        password: '',
        check_emailChange: false,
        secureTextEntry: true,
        confirm_secureTextEntry: true,
        isValidUser: true,
        isValidPassword: true,
        confirm_password: '',
        check_UserNameChange: false
    });


    //text input email
    const textInputChange = (val) => {

        if(val.length != 0){
            setData({
                ...data, 
                email:val,
                check_emailChange:true
            })
        }
        else{
            setData({
                ...data, 
                email:val,
                check_emailChange:false
            })   
        }
    }

   // userName Change
    const handleUserNameChange = (val) => {

        if(val.length != 0){
            setData({
                ...data, 
                username:val,
                check_UserNameChange:true
            })
        }
        else{
            setData({
                ...data, 
                username:val,
                check_UserNameChange:false
            })   
        }
    }

    //text input password
    const handlePasswordChange = (val) => {
        setData({
            ...data, 
            password:val
        })
    }

    //text input confirm password
    const handleConfirmPasswordChange = (val) => {
        setData({
            ...data, 
            confirm_password:val
        })
    }

    //handle status visible password
    const updateSecureTextEntry = () => {
        setData({
            ...data,
            secureTextEntry: !data.secureTextEntry
        });
    }

    //handle status visible confirm password
    const updateConfirmSecureTextEntry = () => {
        setData({
            ...data,
            confirm_secureTextEntry: !data.confirm_secureTextEntry
        });
    }

    const SignUpHandle = (email, userName, password, confirm_password) =>{

        const apiURL  = 'http://10.0.2.2:3000/user';
            let data = {
                email: email,
                username: userName,
                password:password,
                userToken:`Token_${makeid()}`
            }
            if(password!== ''&& confirm_password!==''&& password===confirm_password && userName!== '' && email !== ''){
                axios.post(apiURL, data)
                .then(res=>{})
            }      
   


        axios.get(apiURL).then( 
                res =>{
                   let a = res.data.filter(item=>{    
                     if(item.username===data.username && item.password == data.password ){
                         return item;
                         }    
                     })     
                signIn(a);
                }
             )

    }

    
    const makeid = ()=>{    
            var length = 7;
            var result           = '';
            var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
            var charactersLength = characters.length;
            for ( var i = 0; i < length; i++ ) {
            result += characters.charAt(Math.floor(Math.random() * 
        charactersLength));
        }
            return result
        }


    return (
        <View style={styles.container}>
            <StatusBar backgroundColor= '#009387' barStyle="light-content"/>
            <View style={styles.header}>
                <Text style={styles.text_header}>Register Now</Text>
            </View>
            <Animatable.View style={styles.footer } animation ="fadeInUpBig">
                <ScrollView showsVerticalScrollIndicator={false}> 
                <>
                <Text style={styles.text_footer}>Email</Text>
                <View style ={styles.action}>
                    <FontAwesome
                        name ="user-o"
                        color ="#05375a"
                        size= {20}
                    />
                    <TextInput
                        placeholder ="your Email"
                        style={styles.textInput}
                        autoCapitalize="none"
                        onChangeText={(val)=>textInputChange(val)}
                    />
                    {data.check_emailChange?
                    <Animatable.View
                        animation="bounceIn"
                    >    
                        <Feather
                            name= "check-circle"
                            color ="green"
                            size={20}
                    />
                    </Animatable.View>
                    :null
                    }
                </View>
                </>
                <>
                <Text style={styles.text_footer}>User Name</Text>
                <View style ={styles.action}>
                    <FontAwesome
                        name ="user-o"
                        color ="#05375a"
                        size= {20}
                    />
                    <TextInput
                        placeholder ="your UserName"
                        style={styles.textInput}
                        autoCapitalize="none"
                        onChangeText={(val)=>handleUserNameChange(val)}
                    />
                    {data.check_UserNameChange?
                    <Animatable.View
                        animation="bounceIn"
                    >    
                        <Feather
                            name= "check-circle"
                            color ="green"
                            size={20}
                    />
                    </Animatable.View>
                    :null
                    }
                </View>
                </>
                <>
                <Text style={[styles.text_footer,{
                        marginTop: 35
                }]}>Password</Text>
                <View style ={styles.action}>
                    <FontAwesome
                        name ="lock"
                        color ="#05375a"
                        size= {20}
                    />
                    <TextInput
                        placeholder ="your Password"
                        style={styles.textInput}
                        autoCapitalize="none"
                        secureTextEntry={data.secureTextEntry?true:false}
                        onChangeText={(val)=>handlePasswordChange(val)}
                    />
                    <TouchableOpacity onPress={updateSecureTextEntry}>
                        {data.secureTextEntry?
                        <Feather
                            name= "eye-off"
                            color ="grey"
                            size={20}
                        />:
                        <Feather
                            name= "eye"
                            color ="grey"
                            size={20}
                        />
                        
                        }
                    </TouchableOpacity>
                </View>
                </>
                <>
                <Text style={[styles.text_footer,{
                        marginTop: 35
                }]}>Confirm Password</Text>
                <View style ={styles.action}>
                    <FontAwesome
                        name ="lock"
                        color ="#05375a"
                        size= {20}
                    />
                    <TextInput
                        placeholder ="Confirm Your Password"
                        style={styles.textInput}
                        autoCapitalize="none"
                        secureTextEntry={data.confirm_secureTextEntry?true:false}
                        onChangeText={(val)=>handleConfirmPasswordChange(val)}
                    />
                    <TouchableOpacity onPress={updateConfirmSecureTextEntry}>
                        {data.confirm_secureTextEntry?
                        <Feather
                            name= "eye-off"
                            color ="grey"
                            size={20}
                        />:
                        <Feather
                            name= "eye"
                            color ="grey"
                            size={20}
                        />
                        
                        }
                    </TouchableOpacity>
                </View>
                </>

                    <View style={styles.button}>
                    <TouchableOpacity
                        style={styles.signIn}
                        onPress={() => {SignUpHandle( data.email, data.username, data.password, data.confirm_password )}}
                        // onPress={() => {makeid()}}
                    >
                            <LinearGradient
                                colors={['#08d4c4', '#01ab9d']}
                                style={styles.signIn}
                            >
                                <Text style={[styles.textSign, {
                                    color:'#fff'
                                }]}>Sign Up</Text>
                            </LinearGradient>
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => navigation.goBack()}
                        style={[styles.signIn, {
                            borderColor: '#009387',
                            borderWidth: 1,
                            marginTop: 15
                        }]}
                    >
                        <Text style={[styles.textSign, {
                            color: '#009387'
                        }]}>Sign In</Text>
                    </TouchableOpacity>
                </View>
                </ScrollView>
            </Animatable.View>

            
        </View>
    )
}

export default SignUpScreen

const styles = StyleSheet.create({
    container: {
      flex: 1, 
      backgroundColor: '#009387'
    },
    header: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingHorizontal: 20,
        paddingBottom: 50
    },
    footer: {
        flex: 3,
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 20,
        paddingVertical: 30
    },
    text_header: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 30
    },
    text_footer: {
        color: '#05375a',
        fontSize: 18
    },
    action: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2',
        paddingBottom: 5
    },
    actionError: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#FF0000',
        paddingBottom: 5
    },
    textInput: {
        flex: 1,
        marginTop: Platform.OS === 'ios' ? 0 : -12,
        paddingLeft: 10,
        color: '#05375a',
    },
    errorMsg: {
        color: '#FF0000',
        fontSize: 14,
    },
    button: {
        alignItems: 'center',
        marginTop: 50
    },
    signIn: {
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
    },
    textSign: {
        fontSize: 18,
        fontWeight: 'bold'
    }
  });

