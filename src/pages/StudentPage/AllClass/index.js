import * as React from 'react';
import { useState} from 'react';
import { useEffect } from 'react';
import { View, TouchableOpacity, BackHandler, StyleSheet, Image, SafeAreaView, ScrollView, Text } from 'react-native';
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
import { HandleButtonOfDrawer, storeState } from '../../../config/redux/HandleActiveDrawer';
// import { HandleUserActive, storeState } from '../../../config/redux/HandleUserActive';
import { Provider } from 'react-redux';
//redux



const AllClass = (props)=> {

 /////-->Active Button
 const {activeButton, listClass} = React.useContext(AuthContext);


 /////-->


////==> Aktif Sesion User
const [user, setUser]= useState()  
useEffect(() => {
  // setUser(props.dataUser)
  const api = 'http://10.0.2.2:3000/user';

  axios.get(api)
  .then((response) => {
    
  response.data.filter(item=>{   
      if(props.dataUser==item.userToken){            
            // console.log("filter:",item.Class)
            listClass(item.Class)
      setDbDosen(item.Class)
      setUser(item.username)
  // setUser(item.username)
          }    
      })
  
  }). catch((error) =>{
    console.error(error);
  })
}, [props.dataUser])
////==> Aktif Sesion User
 
  
  


  
  const [dbDosen, setDbDosen]= useState([])  
  const[Active,setActive] = useState();
  const dispatch = useDispatch();

  // console.log("db dosen:", dbDosen)
 
  // console.log("all class:", props)
  // console.log("Aut COntext:", AuthContext)


  // useEffect(() => {
  //   AxiosPosts();
  //   return () => {    
  //   }
  // }, [])


  // const AxiosPosts =()=>{
  //   const apiURL = 'http://10.0.2.2:3000/data';
  //   axios.get(apiURL)
  //   .then((response) => {
  //     setDbDosen(response.data)
  //   }). catch((error) =>{
  //     console.error(error);
  //   })
  // }
    
    const classNavActive = (id, nama)=>{
      console.log("id dari drawer:", id)
      console.log("nama Dari drawer:", nama)
      
      props.navigation.navigate('ActiveClass',{
        id: id,
        namaDosen:nama
      })
      if(id){
        setActive( {id : id})
      }
    }

    // const reduxFunc = (id)=>{
    //     dispatch(HandleButtonOfDrawer(id))
    // }

    // console.log("dbDosen:",dbDosen[0].id)




    ////triger open classs

    const [TrigerOpenClassfromDrawer, setTrigerOpenClassFromDrawer] = useState({})

    // console.log("triger open class di all class:", props.TrigerOpenClass)



    useEffect(() => {
      if(props.TrigerOpenClass){
        classNavActive(props.TrigerOpenClass[0], props.TrigerOpenClass[1])
      }
    }, [props.TrigerOpenClass])

    

  return (
    <>
     <View style ={styles.header}>
         <Ionicons style ={{paddingLeft:20}}name="ios-menu" size ={25} onPress={ ()=>props.navigation.openDrawer()}></Ionicons>
        <Gap width={40}/>
        {/* <Header title = {user}  /> */}
        <Text> Welcome {user} </Text>
    </View>
    <Gap height={20}/>
    <SafeAreaView style={{flex:1}}>
      <ScrollView >
          {
            dbDosen?
            dbDosen.map(items=>{
            return(
             <View key ={items.id}>
                <TouchableOpacity 
                  onPress ={
                    ()=>{ 
                      classNavActive(items.id, items.nama);
                      // reduxFunc(items.id);
                      activeButton(items.id)
                  }
                }>
                  <Card
                    nama = {items.nama}
                    MK ={items.MK}
                  />
                  </TouchableOpacity>
              </View>
              )
           }  
            )    
            :
            null       
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

// const AllClass = (props) => {
//   return (
//     <Provider store={storeState}>
//       <AllClass2 {...props}/>
//       </Provider>
//   )
// }

export default AllClass;