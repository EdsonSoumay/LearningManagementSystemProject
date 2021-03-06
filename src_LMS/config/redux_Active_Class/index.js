import { useDispatch, useSelector } from 'react-redux' //untuk proses penambahan dan pengurangan counter
//usedispatch untuk memanggil aksi yang kita buat di action.js
//useselector untuk menentukan store yang akan kita gunakan
import {createStore} from 'redux'
import { Provider } from 'react-redux'

export const olahId = (id) => ({
    type:TETAP,
    data:id
})

const initData = {
    counter:0
}

const reducerCounterDrawer = (state = initData, action) => {
    console.log("id class:", action.data)

    switch(action.type){
        case TETAP:
            return {...state, counter:action.data}
        default:return state;
    }
}
export const storeState = createStore(reducerCounterDrawer);
const TETAP = 'TETAP'



////olah drawer aktif
export const drawerId = (idDrawer) => ({
    type:TETAPDrawerId,
    data:idDrawer
})

const initDataDrawerId = {
    counter:0
}

const reducerDrawerId = (state = initDataDrawerId, action) => {
    console.log("id drawer:", action.data)

    switch(action.type){
        case TETAPDrawerId:
            return {...state, counter:action.data}
        default:return state;
    }
}
export const storeStateDrawerId = createStore(reducerDrawerId);
const TETAPDrawerId = 'TETAP'

