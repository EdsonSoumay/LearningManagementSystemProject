import { useDispatch} from 'react-redux' //untuk meproses data
//usedispatch untuk memanggil aksi yang kita buat di action.js
//useselector untuk menentukan store yang akan kita gunakan

import * as React from 'react';
import { useEffect } from 'react';
import { View, Text, TouchableOpacity, BackHandler,  Image} from 'react-native';
import {Gap} from '../../../../components'
import HamIcon from '../../assets/hamb_button.png'
import { olahId } from '../../../../config/redux_Active_Class';


const ActiveClass = (props)=> {
  const { namaDosen, id } = props.route.params;
  
  const dispatch = useDispatch();

  const reduxFunc = (id)=>{
    dispatch(olahId(id))
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
     <TouchableOpacity onPress={()=>{props.navigation.openDrawer()}}>
            <Image
              style={{ width: 23, height: 40, marginLeft: 15}}
              resizeMode={'contain'}
              source={HamIcon} />
       </TouchableOpacity>
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