/* This code snippet is setting up a Redux store using the `@reduxjs/toolkit` library in a JavaScript
environment. */

import { configureStore } from "@reduxjs/toolkit";

import cartSlice from "./cartSlice";
import { fetchProducts } from "./productFetchSlice";
import productSlice from "./productFetchSlice";
const store = configureStore({

    reducer : {
        cart : cartSlice,
        products : productSlice
    }

})

export default store