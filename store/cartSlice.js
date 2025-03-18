import { createSlice } from "@reduxjs/toolkit";

const initialState = []
const cartSlice = createSlice({
    // Here we will create iur reducer , a function which takes up a state and action applies a action on that
    //state and return a new state
  name : 'cart',
  initialState : initialState,

  // Now here I will create my reducer 

  reducers : {
    // here I will create a function which will add item to the cart 
    add(state , action){
        //intially my state is an empty array = intialState

        state.push(action.payload);
    },

    remove(state , action){
      return  state.filter((x)=>x.id!=action.payload)
    }

   
  }

})

export default cartSlice.reducer;

// Now here I also export my reducer function because I will use that function only to update my UI,


export const {add , remove} = cartSlice.actions