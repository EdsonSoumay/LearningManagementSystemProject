import React,{useState} from 'react'
import { useDispatch, useSelector } from 'react-redux' //untuk proses penambahan dan pengurangan counter
//usedispatch untuk memanggil aksi yang kita buat di action.js
//useselector untuk menentukan store yang akan kita gunakan
import {createStore} from 'redux'




export const HandleUserActive = (foundUser) => ({
    type:TETAP,
    data:foundUser
})

const initData = {
    counter:0
}

const reducerHhandleUserACtive = (state = initData, action) => {
    console.log("data di handle user active:", action.data)

    switch(action.type){
        case TETAP:
            return {...state, counter:action.data}
        default:return state;
    }
}
export const storeState = createStore(reducerHhandleUserACtive);
const TETAP = 'TETAP'



