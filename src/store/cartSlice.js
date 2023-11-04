import { createSlice } from '@reduxjs/toolkit'

const initialState = []

const cardSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        add(state, action) { //when ever we pass some data from UI, we can read that data from action payload to update the state so behind the scene, immer.js will immutably update the state so we dont need to update the state mutably in redux 

            state.push(action.payload)
        },
        remove(state, action) {
            //whatever items we have in state of Cart.js match them with the item sent from UI remove button from Cart.js ,the items that dont match then return only those items and the matching item will not be returned that means matching item is removed 
            return state.filter(item => item.id !== action.payload)
        }
       
    }
})

//So the slice will return two things  

//1 action that will have the functions(such as add,remove)
//2 reducer that will give us the state 

export const { add, remove } = cardSlice.actions
export default cardSlice.reducer;
