import React, {useState} from 'react';
import {Text, View, StyleSheet, ScrollView} from 'react-native';
import TextInput from './TextInput/index';
import Button from './Button/index'
import Gap from './Gap/index';

const LoginStudent = (props) => {

  const [Registration, setRegistration] = useState('Login')

  
  const [NoReg,setNoReg] = useState();
  const [Sandi,setSandi] = useState();
  

  const handleSubmit =()=>{
    const data ={
      NoReg:NoReg,
      sandi:Sandi
    }

    props.navigation.navigate('DrawerStudentPage'
    ,{
      NoReg:data.NoReg
    }
    )
  }

  console.log('render componen')
  return (
      <ScrollView>
            <View style={styles.container}>
            <Text style={styles.title}>{Registration}</Text>
            <TextInput label="Nomor Registrasi" placeholder="Masukan Nomor Registrasi Anda" value ={NoReg} onChangeText ={(e)=>setNoReg(e)}/>
            <Gap height={24} />
            <TextInput label="Sandi" placeholder="Masukan Sandi Anda" value ={Sandi} onChangeText ={(e)=>setSandi(e)} secureTextEntry/>
            <Gap height={24} />
            <Button  label="Login" onsubmit ={()=> handleSubmit()} />
            </View>
      </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 25,
    marginVertical: 25,
  },
  title: {
    fontSize: 36,
    fontWeight: '700',
  }
});

export default LoginStudent;