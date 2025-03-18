import { createSlice ,createAsyncThunk} from "@reduxjs/toolkit";

// with redux tookit , redux thunk is implemented by default we don't need to include it here.

const initialState = {
    data : []
}
const productSlice = createSlice({
    name : 'products',
    initialState : initialState,
   reducers : {

    fetchProducts(state , action){
         state.data = action.payload
    }

   }

  // TO handle async operations here is more good way to write that logic as compare to above reducers logic 

 

});

export const {fetchProducts} = productSlice.actions

export default productSlice.reducer;

export const getProducsts = createAsyncThunk('products/get',async()=>{
    const res = await fetch("https://fakestoreapi.com/products");
    const data = await res.json();

    dispatch(fetchProducts(data))
})

export function getProducts(){

    return async function getProducstsThunk(dispatch , getState){
        const res = await fetch("https://fakestoreapi.com/products");
        const data = await res.json();

        dispatch(fetchProducts(data))

    }


}