import React from 'react'
import { useEffect, useState } from "react"
import Product from './Product';
import {  useDispatch, useSelector } from 'react-redux';
import { add } from '../store/cartSlice';
import {Card , Button, Image} from "antd"
import { getProducts } from "../store/productFetchSlice";
const {Meta} = Card
function Dashboard() {
  const dispatch = useDispatch()
 
//dispatch an action for fetch products
const {data} = useSelector(state=>state.products)
const products = data
  

useEffect(()=>{
    dispatch(getProducts())
   
 },[])






  // console.log(products)

  const addtoCart = (product)=>{
    //dispatch an action ( add action)
   dispatch(add(product))


  }

  const cards = products.map((product)=>{
   return (
 
     <div key={product.id}   style={{gridColumn : "span 3"}}>
       <Card
     hoverable
     style={{
       width: 240,
       
     }}
     // cover={<Image width={200} src ={product.image}/>}
   >
     {<Image width={200} height={200} src ={product.image}/>}
     <Meta title={product.title} description={`${product.price}$`} />
     <br></br>
     <Button variant="solid" type="primary" onClick={()=>addtoCart(product)}>Add to Cart</Button>
   </Card>
 
   </div>
 
   )
   
  })
 
  return (

    <div>
    <Product/>

  <div className='row' style={{display : "grid" ,   gridTemplateColumns: 'repeat(12, 1fr)', gap:"20px" ,marginLeft : "100px", marginTop : "50px" }}>
    {cards}

  </div>
    
  </div>
    
  )
}

export default Dashboard
