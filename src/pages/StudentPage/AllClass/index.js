import * as React from 'react';
import { useState} from 'react';
import { useEffect } from 'react';
import { View, TouchableOpacity, BackHandler, StyleSheet, Image, SafeAreaView, ScrollView } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

// import {Gap, Header} from '../../../../components'
import Gap from '../../../components/atoms';
// import Header from '../../../components/molecules/Header';
// import {Gap} from '../../../components/index'
import Card from '../../../card/CardActiveClass/index'
import axios from 'axios';
import { AuthContext } from '../../../components/AutContext/context';

///redux
import { useDispatch, useSelector } from 'react-redux' //untuk proses penambahan dan pengurangan counter
// import { olahId } from '../../../config/redux';
import { HandleButtonOfDrawer } from '../../../config/redux';
//redux



const AllClass = (props)=> {
  const [user, setUser]= useState("welcome " + props.data )  
  const [dbDosen, setDbDosen]= useState([])  
  const[Active,setActive] = useState();
  const dispatch = useDispatch();
 
  console.log("Aut COntext:", AuthContext)


  useEffect(() => {
    AxiosPosts();
    return () => {    
    }
  }, [])


  const AxiosPosts =()=>{
    const apiURL = 'http://10.0.2.2:3000/data';
    axios.get(apiURL)
    .then((response) => {
      setDbDosen(response.data)
    }). catch((error) =>{
      console.error(error);
    })
  }
    
    const classNavActive = (id, nama)=>{
      props.navigation.navigate('ActiveClass',{
        id: id,
        namaDosen:nama
      })
      if(id){
        setActive( {id : id})
      }
    }

    const reduxFunc = (id)=>{
        dispatch(HandleButtonOfDrawer(id))
    }
  return (
    <>
     <View style ={styles.header}>
         <Ionicons style ={{paddingLeft:20}}name="ios-menu" size ={25} onPress={ ()=>props.navigation.openDrawer()}></Ionicons>
        <Gap width={40}/>
        {/* <Header title = {user}  /> */}
    </View>
    <Gap height={20}/>
    <SafeAreaView style={{flex:1}}>
      <ScrollView >
          {
            dbDosen.map(items=>(
             
             <TouchableOpacity 
              onPress ={
              ()=>{ 
                classNavActive(items.id, items.nama);
                reduxFunc(items.id);
            }
            }>
              <Card
                id={items.id}
                nama = {items.nama}
                MK ={items.MK}
              />
              </TouchableOpacity>
              ))           
          }
         
      </ScrollView>
   </SafeAreaView>
    </>
  )
}

const styles = StyleSheet.create({
  buttonBack:{
    padding: 10,
    marginLeft:10,
  },
  header:{
    flex: 1,
    maxHeight: 80, 
    backgroundColor: "#ffaa66",
    fontWeight: '700',
    fontFamily: "RalewayDots-Regular",
    flexDirection: 'row',
    alignItems: 'center',
  },
  card:{
    borderWidth: 3,
    borderColor: "black",
    borderRadius: 2,
    marginVertical: 5,
    marginHorizontal: 7,
    padding: 3
  },
  cardComp1:{
    flexDirection: 'row'
  }
})

export default AllClass;