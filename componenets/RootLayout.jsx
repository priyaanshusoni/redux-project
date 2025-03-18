import React from 'react'
import { Outlet } from 'react-router'
import Navbar from './Navbar'
/* The line `import { Provider } from 'react-redux'` is importing the `Provider` component from the
'react-redux' library. The `Provider` component is a higher-order component provided by the React
Redux library that allows the Redux store to be accessed by any component within the component tree.
It is typically used at the root of your application to wrap the entire component tree and provide
access to the Redux store and its state to all components that need it. */

//redux toolkit ko react app se jo communicate krwata hai wo hai provider 
import { Provider } from 'react-redux'

import store from '../store/store'
function RootLayout() {
  return (
    <>

    <Provider store={store}>

    <Navbar/>

     <main>
      <Outlet/>
      </main>

    </Provider>
 

    </>
  )
}

export default RootLayout
