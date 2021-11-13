// import React,{useState} from 'react'
// import { View, Text, TouchableOpacity } from 'react-native'
// import { useDispatch, useSelector } from 'react-redux' //untuk proses penambahan dan pengurangan counter
// //usedispatch untuk memanggil aksi yang kita buat di action.js
// //useselector untuk menentukan store yang akan kita gunakan
// import {createStore} from 'redux'
// import { Provider } from 'react-redux'

// const App = () => {
//     return (  
//         <Provider store={storeState}>
//         <Counter/>
//        </Provider>
//     )
// }

// export default App;

// const Counter = () => {
//     const dispatch = useDispatch();
//     const counter = useSelector(data => data.counter);
//     console.log("isi counter:", counter)
//     // const [state, setstate] = useState(counter)
//     // setstate(counter)
//     return (
//         <View>
//             <TouchableOpacity style={{backgroundColor:'#DDDDDD',paddingBottom:5,paddingTop:5,paddingLeft:20,paddingRight:20}} onPress={()=>dispatch(kurangCounter(counter))}>
//                 <Text style={{fontSize:30}}>-</Text>
//             </TouchableOpacity>
//             <Text style={{fontSize:50,marginLeft:20,marginRight:20}}>{counter}</Text>
//             <TouchableOpacity style={{backgroundColor:'#DDDDDD',paddingBottom:5,paddingTop:5,paddingLeft:20,paddingRight:20}} onPress={()=>dispatch(tambahCounter(counter))}>
//                 <Text style={{fontSize:30}}>+</Text>
//             </TouchableOpacity>
//         </View>
//     )
// }

//  const tambahCounter = (counter) => ({
//     type:TAMBAH,
//     data:counter
// })

//  const kurangCounter = (counter) => ({
//     type:KURANG,
//     data:counter
// })


// const initData = {
//     counter:0
// }

// const reducerCounter = (state = initData, action) => {
//     switch(action.type){
//         case TAMBAH:
//             console.log('TAMBAH COUNTER');
//             return {...state,counter:action.data + 1}
//         case KURANG:
//             console.log('KURANG COUNTER');
//             return {...state, counter:action.data - 1}
//         default:return state;
//     }
// }


// const storeState = createStore(reducerCounter);

  
//  const TAMBAH = 'TAMBAH'
//  const KURANG = 'KURANG'




// import React,{useState} from 'react'
// import { View, Text, TouchableOpacity } from 'react-native'
// import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
// import { useDispatch, useSelector } from 'react-redux' //untuk proses penambahan dan pengurangan counter
// //usedispatch untuk memanggil aksi yang kita buat di action.js
// //useselector untuk menentukan store yang akan kita gunakan
// import {createStore} from 'redux'
// import { Provider } from 'react-redux'
// import { NavigationContainer } from '@react-navigation/native'



// const Tab = createMaterialBottomTabNavigator();

// const App = () => {
//     return (
//         <NavigationContainer>
//              <Tab.Navigator
//                 initialRouteName="Feed"
//                 activeColor="#fff"
//                 barStyle={{ backgroundColor: '#910144' }}
//             >
//                 <Tab.Screen
//                 name="Home"
//                 children={ (props)=> <Halaman1/>}
//                 options={{
//                     tabBarLabel: 'Home',
//                     tabBarColor: '#009387'                  
//                 }}
//                 />
//                 <Tab.Screen
//                 name="Berita"
//                 component={Halaman2}
//                 options={{
//                     tabBarColor: '#1f65ff',
//                     tabBarLabel: 'Berita',
                  
//                 }}
//                 />
//             </Tab.Navigator>
//         </NavigationContainer>
//     )
// }
// export default App;


// ////--- kawasan halaman 1
// const Halaman1 = () => {
//     return (  
//         <Provider store={storeStateSatu}>
//         <Counter1/>
//        </Provider>
//     )
// }


// const Counter1 = () => {
//     const dispatch = useDispatch();
//     const NilaiSatu = useSelector(data => data.counter);
//     return (
//         <View>
//             <TouchableOpacity style={{backgroundColor:'#DDDDDD',paddingBottom:5,paddingTop:5,paddingLeft:20,paddingRight:20}} onPress={()=>dispatch(kurangCounter(NilaiSatu))}>
//                 <Text style={{fontSize:30}}>-</Text>
//             </TouchableOpacity>
//             <Text style={{fontSize:50,marginLeft:20,marginRight:20}}>{NilaiSatu}</Text>
//         </View>
//     )
// }

// //----------------

// ////redux

//  const kurangCounter = (NilaiSatu) => ({
//     type:KURANG,
//     data:NilaiSatu
// })

// const tambahCounter = (counter) => ({
//     type:TAMBAH,
//     data:counter
// })


// const initData = {
//     counter:0
// }

// const reducerCounterKurang = (state = initData, action) => {
//     switch(action.type){
//          case KURANG:
//             console.log('KURANG COUNTER');
//             return {...state, counter:action.data - 1}
//         default:return state;
//     }
// }

// const reducerCounterTambah = (state = initData, action) => {
//     switch(action.type){
//         case TAMBAH:
//             console.log('TAMBAH COUNTER');
//             return {...state,counter:action.data + 1}
//         default:return state;
//     }
// }

// const storeStateSatu = createStore(reducerCounterKurang);
// const storeStateDua = createStore(reducerCounterTambah);

//  const TAMBAH = 'TAMBAH'
//  const KURANG = 'KURANG'

// ////---kawasan Halaman 2
// const Halaman2 = () => {
//     return (  
//         <Provider store={storeStateDua}>
//         <Counter2/>
//        </Provider>
//     )
// }

// const Counter2 = () => {
//     const dispatch = useDispatch();
//     const counter = useSelector(data => data.counter);
//     console.log("isi counter:", counter)
//     return (
//         <View>
//             <Text style={{fontSize:50,marginLeft:20,marginRight:20}}>{counter}</Text>
//             <TouchableOpacity style={{backgroundColor:'#DDDDDD',paddingBottom:5,paddingTop:5,paddingLeft:20,paddingRight:20}} onPress={()=>dispatch(tambahCounter(counter))}>
//                 <Text style={{fontSize:30}}>+</Text>
//             </TouchableOpacity>
//         </View>
//     )
// }

import React,{useState} from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
import { useDispatch, useSelector } from 'react-redux' //untuk proses penambahan dan pengurangan counter
//usedispatch untuk memanggil aksi yang kita buat di action.js
//useselector untuk menentukan store yang akan kita gunakan
import {createStore} from 'redux'
import { Provider } from 'react-redux'
import { NavigationContainer } from '@react-navigation/native'



const Tab = createMaterialBottomTabNavigator();

const App = () => {
    return (
        <NavigationContainer>
             <Tab.Navigator
                initialRouteName="Feed"
                activeColor="#fff"
                barStyle={{ backgroundColor: '#910144' }}
            >
                <Tab.Screen
                name="Home"
                children={ (props)=> <Halaman1/>}
                options={{
                    tabBarLabel: 'Home',
                    tabBarColor: '#009387'                  
                }}
                />
                {/* <Tab.Screen
                name="Berita"
                component={Halaman2}
                options={{
                    tabBarColor: '#1f65ff',
                    tabBarLabel: 'Berita',
                  
                }}
                /> */}
            </Tab.Navigator>
        </NavigationContainer>
    )
}
export default App;


////--- kawasan halaman 1
const Halaman1 = () => {
    return (  
        <Provider store={storeStateSatu}>
          <Counter1/>
          <Counter2/>
       </Provider>
    )
}


const Counter1 = () => {
    const dispatch = useDispatch();
    const NilaiSatu = useSelector(data => data.counter);
    return (
        <View>
            <TouchableOpacity style={{backgroundColor:'#DDDDDD',paddingBottom:5,paddingTop:5,paddingLeft:20,paddingRight:20}} onPress={()=>dispatch(kurangCounter(NilaiSatu))}>
                <Text style={{fontSize:30}}>-</Text>
            </TouchableOpacity>
            <Text style={{fontSize:50,marginLeft:20,marginRight:20}}>{NilaiSatu}</Text>
        </View>
    )
}

//----------------

////redux

 const kurangCounter = (NilaiSatu) => ({
    type:KURANG,
    data:NilaiSatu
})

const tambahCounter = (counter) => ({
    type:TAMBAH,
    data:counter
})


const initData = {
    counter:0
}

const reducerCounterKurang = (state = initData, action) => {
    switch(action.type){
         case KURANG:
            console.log('KURANG COUNTER');
            return {...state, counter:action.data - 1}
        case TAMBAH:
            return {...state, counter:action.data + 1}
            
        default:return state;
    }
}

const reducerCounterTambah = (state = initData, action) => {
    switch(action.type){
        case TAMBAH:
            console.log('TAMBAH COUNTER');
            return {...state,counter:action.data + 1}
        default:return state;
    }
}

const storeStateSatu = createStore(reducerCounterKurang);
const storeStateDua = createStore(reducerCounterTambah);

 const TAMBAH = 'TAMBAH'
 const KURANG = 'KURANG'

////---kawasan Halaman 2
const Halaman2 = () => {
    return (  
        <Provider store={storeStateDua}>
        <Counter2/>
       </Provider>
    )
}

const Counter2 = () => {
    const dispatch = useDispatch();
    const counter = useSelector(data => data.counter);
    console.log("isi counter:", counter)
    return (
        <View>
            <Text style={{fontSize:50,marginLeft:20,marginRight:20}}>{counter}</Text>
            <TouchableOpacity style={{backgroundColor:'#DDDDDD',paddingBottom:5,paddingTop:5,paddingLeft:20,paddingRight:20}} onPress={()=>dispatch(tambahCounter(counter))}>
                <Text style={{fontSize:30}}>+</Text>
            </TouchableOpacity>
        </View>
    )
}

