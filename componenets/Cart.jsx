import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {Card , Button, Image} from "antd"
import { remove } from '../store/cartSlice'

const {Meta} = Card
function Cart() {
  const dispatch = useDispatch();
  const products = useSelector((state)=>state.cart)


  const removeToCart = (id)=>{
    //Dispatch a remove action
    dispatch(remove(id))
  }

  if(products.length==0) return <p>No items added to cart yet</p>
  const cards = products.map((product)=>{
    return (

      <div style={{gridColumn : "span 2"}}>
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
      <Button variant="dashed" type="primary" danger onClick={()=>removeToCart(product.id)} >Remove Item</Button>
    </Card>
  
    </div>
  
    )
    
   })
  
   return (
 
     <div>

 
   <div className='row' style={{display : "grid" ,   gridTemplateColumns: 'repeat(12, 1fr)', gap:"20px"  }}>
     {cards}
 
   </div>
     
   </div>

   )
}

export default Cart
