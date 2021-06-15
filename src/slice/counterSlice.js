import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    valor: 0
}

const counterSlice = createSlice({
    name: 'counterSlice',
    initialState,
    reducers:{
        increment:(state) => {
            state.valor += 1
        },
        decrement:(state) => {
            state.valor -= 1
        },
        incrementBy:(state, action) => {
            state.valor += action.payload
        }
    }
})

export const {increment,decrement,incrementBy} = counterSlice.actions

export default counterSlice.reducer 
