import { useDispatch} from 'react-redux' //untuk meproses data
//usedispatch untuk memanggil aksi yang kita buat di action.js
//useselector untuk menentukan store yang akan kita gunakan

import * as React from 'react';
import { useEffect } from 'react';
import { View, Text, TouchableOpacity, BackHandler,  Image} from 'react-native';
// import {Gap} from '../../../components/';
import Gap from '../../../components/atoms'
// import { olahId } from '../../../config/redux/index';
import { HandleButtonOfDrawer } from '../../../config/redux';
import Ionicons from 'react-native-vector-icons/Ionicons';


import { AuthContext } from '../../../components/AutContext/context';

const ActiveClass = (props)=> {
  const { namaDosen, id } = props.route.params;
  
  const dispatch = useDispatch();

  const reduxFunc = (id)=>{
    dispatch(HandleButtonOfDrawer(id))
  }

  useEffect(() => {
    const backAction = () => {
      props.navigation.goBack();
      const id = 0
      reduxFunc(id);
      return true;
    };
    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      backAction
    );
     return () => backHandler.remove();
  
  }, []);

  return (
    <View style={{ flex: 1,}} >
     <Ionicons name="ios-menu" size ={25}
                        onPress={ ()=>props.navigation.openDrawer()
            }></Ionicons>
     <View style={{alignItems: 'center' }}>
      <Text>halaman matakuliah</Text>
      <Text>{id}</Text>
      <Text>{namaDosen}</Text>
     </View>
     <Gap height ={10}/>
     <View style={{backgroundColor: 'grey', flex: 1}}>
   </View>
  </View>
  );
}
export default ActiveClass;