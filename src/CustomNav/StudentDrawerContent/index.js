import React, {useState, useEffect} from 'react'
import { Alert, StyleSheet, View } from 'react-native';
import axios from 'axios';

import {
    Avatar,
    useTheme,
    Title,
    Caption,
    Paragraph,
    Drawer,
    Text,
    TouchableRipple,
    Switch,
    ToggleButton
} from 'react-native-paper'

import { 
    DrawerContentScrollView, 
    DrawerItem
} from '@react-navigation/drawer'

import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { AuthContext } from '../../components/AutContext/context';


////->Redux
import { useDispatch, useSelector } from 'react-redux' //untuk proses penambahan dan pengurangan counter
//usedispatch untuk memanggil aksi yang kita buat di action.js
//useselector untuk menentukan store yang akan kita gunakan
import { Provider } from 'react-redux'
// import { storeState, storeStateDrawerId } from '../../config/redux_Active_Class'
import { storeState } from '../../config/redux/HandleActiveDrawer';
// import { storeStateOlahDrawerActive } from '../../config/redux_Active_Class'
// import { olahId } from '../../config/redux_Active_Class'
import { HandleButtonOfDrawer } from '../../config/redux/HandleActiveDrawer';
////->Redux





export function StudentDrawerContent(props){

  const {signOut, toggleTheme, activeButton, trigerOpenClass} = React.useContext(AuthContext);

  console.log("active Button from All class:", props.activeButtonClass)

  const [data, setData] = useState()
  const [Active, setActive] = useState({id:'Home'})

  useEffect(() => {
    setData(props.activeButtonClass)
   }, [props.activeButtonClass])



  useEffect(() => {
   if(data){
      setActive({id:data})
    }
  }, [data])

 


  ////==> Aktif Sesion User
    const [user, setUser]= useState()  


    // useEffect(() => {
    //   // setUser(props.dataUser)
    //   const api = 'http://10.0.2.2:3000/user';

    //   axios.get(api)
    //   .then((response) => {
        
    //   response.data.filter(item=>{   
    //       if(props.dataUser==item.userToken){            
    //             // console.log("filter:",item.Class)
    //       setDbDosen(item.Class)
    //       setUser(item.username)
    //   // setUser(item.username)
    //           }    
    //       })
      
    //   }). catch((error) =>{
    //     console.error(error);
    //   })
    // }, [props.dataUser])



  ////==> Aktif Sesion User

  //dari drawer lama

    const [dbDosen, setDbDosen]= useState([])  

  //   useEffect(() => {
  //   AxiosGet();
  //   return () => {    
  //   }
  // }, [])
  
  // const AxiosGet =()=>{
  //   const apiURL = 'http://10.0.2.2:3000/data/';
  //   axios.get(apiURL)
  //   .then((response) => {
  //     console.log("\nrespon:",response.data)
  //     setDbDosen(response.data)
  //   }). catch((error) =>{
  //     console.error(error);
  //   })
  // }

  // const dispatch = useDispatch();
  // const counter = useSelector(data => data.counter);

  // const[Active,setActive] = useState({id:'Home'});
  
  // const classNav = (id, nama)=>{
  //     props.navigation.navigate('ActiveClass',{
  //       id: id,
  //       namaDosen:nama
  //     })
  // }

  // useEffect(() => {
  //   setActive({id:counter})
  //   return () => {
  //   }
  // }, [counter])

  const AllClassNav = ()=>{
    const id  = 'Home';
    setData(id)
    props.navigation.navigate('HomeStack')
  }

// //   const reduxFunc = (id)=>{
// //    dispatch(HandleButtonOfDrawer(id))
// // }


  const paperTheme = useTheme();

  const [isDarkTheme, setisDarkTheme] = React.useState(false);


  const signOutID = ()=>{
    const id  = 'SignOut';
    setData(id)
   
    Alert.alert(
      'Peringatan',      
       "Anda Yakin ingin Keluar?",
           [
             {
               text: 'Tidak',
               onPress: () =>  setData('Home')
             },
             {
               text: 'Ya',
               onPress:()=>{
                 signOut()
                setTimeout(() => {
                  setData('Home')
                }, 1000); 
              }
             }
           ]
    )
  }

  // useEffect(() => {
  //   setActive({id:props.activeButtonClass})
  // }, [props.activeButtonClass])




  ////=> abstaraksi
  
    useEffect(() => {
      // console.log("list class useefeect:", props.ListClass)
      setDbDosen(props.ListClass)
    }, [props.ListClass])


    
  ////=> abstaraksi



    return(
      <Provider store={storeState}>
        <View style ={{flex: 2}} >
              <View style ={styles.userInfoSection}>
                  <View style = {{flexDirection: 'row', marginTop: 15}}>
                    <Avatar.Image
                    source={{
                        uri: 'https://via.placeholder.com/600/449b46'
                    }}
                    size ={50}
                    />

                    <View style={{marginLeft: 15, 
                      flexDirection: 'column'}}>
                      <Title style ={styles.title}>{user}</Title>
                      <Caption style={styles.caption}>{user}</Caption>
                    </View>
                  </View>
                  <View style ={styles.row}>
                          <View style={styles.section}>
                            <Paragraph style={[styles.paragraph, styles.caption]}>80</Paragraph>
                            <Caption>following</Caption>
                          </View>
                          <View style={styles.section}>
                            <Paragraph style={[styles.paragraph, styles.caption]}>100</Paragraph>
                            <Caption>followers</Caption>
                          </View>
                      </View>
                </View>
                <DrawerItem
                    icon = {({color, size})=>{
                     return (
                      <Icon
                        name = "home-outline"
                        color ={color}
                        size ={size}
                      />
                      )
                    }} 
                    
                    label = "Home"
                    style={{ backgroundColor: Active.id == 'Home' ? 'green': 'transparent' ,margin: 20}}
                    onPress={
                      ()=> {
                        // props.navigation.navigate('Home')
                        AllClassNav();
                      }
                    }
                  />   
                  <Text> Your Class</Text>
          <DrawerContentScrollView {...props}>
             <View style ={styles.drawerContent}>
                <Drawer.Section style ={styles.drawerSection}>           
                      { dbDosen?
                        dbDosen.map( (res)=>{
                          return(    
                            <DrawerItem
                            style={{ backgroundColor: Active.id==res.id ? 'green': 'transparent' ,marginLeft: 30}}
                                key={res.id}
                                label={res.nama}
                                onPress ={
                                  ()=>{
                                    // classNav(res.id, res.nama);
                                      // reduxFunc(res.id)
                                      setData(res.id)
                                      trigerOpenClass([res.id, res.nama])
                                      

                                  } 
                                }
                              />
                            )
                          }
                        )
                        :
                        null
                      }    
                </Drawer.Section>
             </View>
          </DrawerContentScrollView>
          <Drawer.Section title = "Preferences">
                  <TouchableRipple onPress ={()=> {toggleTheme()}}>
                    <View style={styles.preference}> 
                      <Text>Dark Theme</Text>
                      <View pointerEvents = "none">
                         <Switch value={paperTheme.dark}/>
                      </View>
                    </View>
                  </TouchableRipple>
                </Drawer.Section>
          <Drawer.Section style = {styles.bottomDrawerSection}>
            <DrawerItem
              icon = {({color, size})=>{
                <Icon
                  name = "exit-to-app"
                  color ={color}
                  size ={size}
                />
              }} 
              label = "Sign Out"
              style={{ backgroundColor: Active.id == 'SignOut' ? 'green': 'transparent' ,margin: 20}}
              onPress={
                ()=> {
                  signOutID()
                    // signOut()
                }
              }
            />          
          </Drawer.Section>
        </View>
        </Provider>
    )
}

const styles = StyleSheet.create({

    drawerContent: {
        flex: 1,
      },
      userInfoSection: {
        paddingLeft: 20,
      },
      title: {
        fontSize: 16,
        marginTop: 3,
        fontWeight: 'bold',
      },
      caption: {
        fontSize: 14,
        lineHeight: 14,
      },
      row: {
        marginTop: 20,
        flexDirection: 'row',
        alignItems: 'center',
      },
      section: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 15,
      },
      paragraph: {
        fontWeight: 'bold',
        marginRight: 3,
      },
      drawerSection: {
        marginTop: -10,
      },
      bottomDrawerSection: {
          marginBottom: 15,
          borderTopColor: '#f4f4f4',
          borderTopWidth: 1
      },
      preference: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 12,
        paddingHorizontal: 16,
      },
})
