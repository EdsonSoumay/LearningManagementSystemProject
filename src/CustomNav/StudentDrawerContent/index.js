import React, {useState, useEffect} from 'react'
import { StyleSheet, View } from 'react-native';
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
import { storeState, storeStateDrawerId } from '../../config/redux_Active_Class'
import { storeStateOlahDrawerActive } from '../../config/redux_Active_Class'
// import { olahId } from '../../config/redux_Active_Class'
import { HandleButtonOfDrawer } from '../../config/redux';
////->Redux


export function StudentDrawerContent(props){

  //dari drawer lama

    const [dbDosen, setDbDosen]= useState([])  
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

  const dispatch = useDispatch();
  const counter = useSelector(data => data.counter);

  const[Active,setActive] = useState({id:0});
  

  const classNav = (id, nama)=>{
      props.navigation.navigate('ActiveClass',{
        id: id,
        namaDosen:nama
      })
  }

  useEffect(() => {
    setActive({id:counter})
    return () => {
    }
  }, [counter])

  const AllClassNav = ()=>{
    const id  = 0;
    reduxFunc(id)
    props.navigation.navigate('HomeStack')
  }

  const reduxFunc = (id)=>{
   dispatch(HandleButtonOfDrawer(id))
}


  const paperTheme = useTheme();

  const [isDarkTheme, setisDarkTheme] = React.useState(false);

  const {signOut, toggleTheme} = React.useContext(AuthContext);



    return(
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
                      <Title style ={styles.title}> Edson Soumay</Title>
                      <Caption style={styles.caption}>@edsonS</Caption>
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
                    style={{ backgroundColor: Active.id == 0 ? 'green': 'transparent' ,margin: 20}}
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
                      {  
                        dbDosen.map( (res)=>    
                            <DrawerItem
                            style={{ backgroundColor: Active.id==res.id ? 'green': 'transparent' ,marginLeft: 30}}
                                key={res.id}
                                label={res.nama}
                                onPress ={
                                  ()=>{
                                    classNav(res.id, res.nama);
                                      reduxFunc(res.id)
                                  } 
                                }
                              />
                            )
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
              onPress={
                ()=> {
                    signOut()
                }
              }
            />          
          </Drawer.Section>
        </View>
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
