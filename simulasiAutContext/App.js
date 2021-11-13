// import React,{useState, useEffect} from 'react'
// import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
// import { NavigationContainer } from '@react-navigation/native'
// import { createDrawerNavigator } from '@react-navigation/drawer'
// import { 
//     DrawerItem
// } from '@react-navigation/drawer'


// const Drawer = createDrawerNavigator()

// const AuthContext = React.createContext();

// const arrayData = [
//     {
//     id:1,
//     nomor: "satu"
//     },
//     {
//     id:2,
//     nomor: "dua"

//     },
//     {
//     id:3,
//     nomor:"tiga"
//     },
//     {
//     nomor:"empat",
//     id:4
//     },
// ]



// const  App= () => {

//     const [FoundUser, setFoundUser] = useState()
//     const authContext = React.useMemo(()=>({
//         signIn: (foundUser)=>{
//             setFoundUser(foundUser)
//         }
//     }))


//     return (
//         <AuthContext.Provider value ={authContext}>
//           <NavigationContainer >
//                    <Drawer.Navigator drawerContent={props => <StudentDrawerContent data={FoundUser}  {...props}/>}>
//                       <Drawer.Screen name="Home" children={(props)=><Home {...props}/>} />
//                   </Drawer.Navigator>        
//             </NavigationContainer>
//          </AuthContext.Provider >

      
//     )
// }

// export default App

// const styles = StyleSheet.create({})

// const Card = ({id, nomor}) => {

//     return (
//       <View style={style.container}>
//           <Text>id: {id}</Text> 
//           <Text>nomor: {nomor}</Text> 
//       </View>
//     )
//   }
  
  
//   const style = StyleSheet.create({
//     container:{
//       marginHorizontal:20,
//       marginVertical:10,
//       borderColor:"#777",
//       borderWidth:1,
//       paddingVertical:10,
//       paddingHorizontal:20,
//       borderRadius:20
//     }
//   })

//   function StudentDrawerContent(props){

   
 
 
//      const [Active, setActive] = useState({})
 
 
//      useEffect(() => {
//          setActive({id:props.data})
        
//      }, [props.data])
 
     
//      function olahActiveButton(id){
//             setActive({id:id})
//      }
//      return(
//         //  <AuthContext.Provider value ={authContext}>
//          <View>
//             <DrawerItem
                   
//                      label = "Home"
//                      // style={{ backgroundColor: Active.id == 'Home' ? 'green': 'transparent' ,margin: 20}}
//                      onPress={
//                        ()=> {
//                          props.navigation.navigate('Home')
//                        }
//                      }
//              />
             
//              {
//                  arrayData.map((item)=>{
//                      return(
//                      <View key ={item.id}>
//                           <TouchableOpacity 
//                          style={{ backgroundColor: Active.id == item.id ? 'green': 'transparent' ,margin: 20, borderRadius: 20}}
 
//                              onPress ={
//                              ()=>{ 
//                                  olahActiveButton(item.id)
//                              }
//                              }>
//                               <Card
//                                  id={item.id}
//                                  nomor={item.nomor}
//                              />
//                              </TouchableOpacity>
                        
//                      </View>
//                      )
//                  })
//              } 
//          </View>
//         //  </AuthContext.Provider>
 
        
//      )
//  }
 


// const Home = () =>{

//     const [Active, setActive] = useState({})
//     const {signIn} = React.useContext(AuthContext)

    
//     function olahActiveButton(id){
//            setActive({id:id})
//     }


//     return(
//         <View>
//               {
//                 arrayData.map((item)=>{
//                     return(
//                     <View key ={item.id}>
//                          <TouchableOpacity 
//                         style={{ backgroundColor: Active.id == item.id ? 'green': 'transparent' ,margin: 20, borderRadius:20}}

//                             onPress ={
//                             ()=>{ 
//                                 olahActiveButton(item.id)
//                                 signIn(item.id)
//                             }
//                             }>
//                              <Card
//                                 id={item.id}
//                                 nomor={item.nomor}
//                             />
//                             </TouchableOpacity>
                       
//                     </View>
//                     )
//                 })
//             }
//         </View>
//     )
// }

import React,{useState, useEffect} from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { 
    DrawerItem
} from '@react-navigation/drawer'
import Icon from 'react-native-vector-icons/FontAwesome5';

const Drawer = createDrawerNavigator()

const AuthContext = React.createContext();

const arrayData = [{  id:1, nomor: "satu"},{id:2,nomor: "dua"},{id:3,nomor:"tiga"},{nomor:"empat",id:4}]

const  App= () => {
    const [FoundUser, setFoundUser] = useState()
    const [ActiveDrawer, setActiveDrawer] = useState()

    const authContext = React.useMemo(()=>({
        signIn: (foundUser)=>{
            setFoundUser(foundUser)
        },
        signIn2: (foundUser)=>{
            setFoundUser(foundUser)
        },
        activeDrawer: (foundUser)=>{
            setActiveDrawer(foundUser)
        }
    }))
    return (
        <AuthContext.Provider value ={authContext}>
          <NavigationContainer >
                   <Drawer.Navigator drawerContent={props => <StudentDrawerContent data={FoundUser} activeDrawer={ActiveDrawer}  {...props}/> } drawerPosition="right">
                      <Drawer.Screen name="Home" children={(props)=><Home data={FoundUser}  {...props}/> }  drawerPosition="right" options={{headerShown: false}}/>
                  </Drawer.Navigator>        
            </NavigationContainer>
         </AuthContext.Provider >     
    )
}
export default App

  function StudentDrawerContent(props){
    const {signIn} = React.useContext(AuthContext) 
    const [Active, setActive] = useState({})

     useEffect(() => {
         setActive({id:props.data})        
     }, [props.data])
      
     function olahActiveButton(id){
            setActive({id:id})
     }
     return(
         <View>
            
            <DrawerItem label = "Home" onPress={()=> {props.navigation.navigate('Home')}}/>
             {
                 props.activeDrawer == 1?
                 arrayData.map((item)=>{
                     return(
                     <View key ={item.id}>
                          <TouchableOpacity 
                         style={{ backgroundColor: Active.id == item.id ? 'green': 'transparent' ,margin: 20, borderRadius: 20}}
                             onPress ={ ()=>{ 
                                 olahActiveButton(item.id)
                                 signIn(item.id)}}>
                              <Card id={item.id} nomor={item.nomor} />
                             </TouchableOpacity>   
                     </View>
                    )})
                :
                <Text>kontol</Text>
            } 
         </View>
     )
 }
 
const Home = (props) =>{
    const [Active, setActive] = useState({})
    const {signIn2} = React.useContext(AuthContext)
    const {activeDrawer} = React.useContext(AuthContext)
    
    useEffect(() => {
        setActive({id:props.data})    
    }, [props.data])

    const olahActiveButton = (id) =>{
        setActive({id:id})
    }

function olahDrawer1(){
    let id = 1;
    activeDrawer(id)
    props.navigation.openDrawer()
}
function olahDrawer2(){
    let id = 2;
    activeDrawer(id)
    props.navigation.openDrawer()
}

    return(
        <View>
            <Icon
            // style={{paddingLeft:350}}
            name="bars"
            backgroundColor="#3b5998"
            size={30}
            onPress ={olahDrawer1} 
             />

            <Icon
            style={{paddingLeft:350}}
            name="bars"
            backgroundColor="#3b5998"
            size={30}
            onPress ={olahDrawer2}
            
             />

              {
                arrayData.map((item)=>{
                    return(
                    <View key ={item.id}>
                         <TouchableOpacity 
                        style={{ backgroundColor: Active.id == item.id ? 'green': 'transparent' ,margin: 20, borderRadius:20}}
                            onPress ={
                            ()=>{ 
                                olahActiveButton(item.id)
                                signIn2(item.id)
                            }}>
                             <Card id={item.id} nomor={item.nomor}/>
                            </TouchableOpacity>
                    </View>
                    )})}
        </View>
    )
}






const Card = ({id, nomor}) => {
    return (
      <View style={style.container}>
          <Text>id: {id}</Text> 
          <Text>nomor: {nomor}</Text> 
      </View>
    )
  }





const style = StyleSheet.create({
    container:{
      marginHorizontal:20,
      marginVertical:10,
      borderColor:"#777",
      borderWidth:1,
      paddingVertical:10,
      paddingHorizontal:20,
      borderRadius:20
    }
  })






















/////---------------------------------------------------------------------

// import React,{useState, useEffect} from 'react'
// import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
// import { NavigationContainer } from '@react-navigation/native'
// import { createDrawerNavigator } from '@react-navigation/drawer'
// import { 
//     DrawerItem
// } from '@react-navigation/drawer'


// const Drawer = createDrawerNavigator()
// const AuthContext = React.createContext();

// const  App= () => {   
//     const [Data, setData] = useState()
    
//     // const authContext ={signIn: (data)=>{setData(data)}} 
//     // console.log("autcontext di App :", authContext)
    
           

//     return (
//         // <AuthContext.Provider value ={authContext}>
//           <NavigationContainer >
//                    <Drawer.Navigator drawerContent={props => <StudentDrawerContent data={Data}  {...props}/>}>
//                       <Drawer.Screen name="Home" children={(props)=><Home  {...props}/>} />
//                   </Drawer.Navigator>        
//             </NavigationContainer>
//           /* </AuthContext.Provider> */
//     )
// }
// export default App;

//   function StudentDrawerContent(props){
//     const authContext ={signIn: (data)=>{setData(data)}} 

//     const [Data, setData] = useState(authContext)

//     console.log("autcontext di data :", Data)


//      return(
//         <AuthContext.Provider value ={authContext}>

//          <View>
//              <Text>{props.data}</Text>
//             <DrawerItem label = "Home" onPress={()=> {props.navigation.navigate('Home')}}/>
//         </View>
//            </AuthContext.Provider> 

//      )
//  }
 
// const Home = (props) =>{
//     let Data = "Helo"
//     const {signIn} = React.useContext(AuthContext)
//     signIn(Data)

//     return(
//         <View><Text>Home</Text></View>
//     )
// }









