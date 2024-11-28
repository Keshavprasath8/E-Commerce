import axios from 'axios'
import React from 'react'

import { useEffect, useState } from 'react'
import Products from './Products';
const Home = ( {cart, setCart}) => {
  const[fetch, setFetch] = useState([])
  useEffect(() => {
    axios("https://fakestoreapi.in/api/products")
    .then((resp)=>{
      console.log(resp);
      setFetch(resp.data.products);
    })
      .catch((err) => console.log(err));
  },[]) 
  console.log(fetch)


  
  return(
    //   <div className='mt-5 row justify-content-evenly row-gap-3 column-gap-1 '> 
    //   {fetch.map((item)=>(
    //   <Card className='col-3 mx-auto' key={item.id}>
    //     <Card.Img variant="top" src={item.images[0]} style={{height:"180px", width:"200px", objectFit:"contain",padding:"10px", margin:"0 auto"}}/>
    //     <Card.Body>
    //     <div style={{ width: "20rem" }}> 
    //       <Card.Title className='text-break' style={{ width:"fit-content"}}>{item.title.length > 15 ? item.title.substring(0, 15) + "..." : item.title}</Card.Title> 
    //    </div>
    //       <Card.Text style={{width:"fit-content"}}>Price :{item.price}$
    //       </Card.Text>
    //       {cart.includes (item) ? <Button className='btn-danger' onClick={removeCart} variant="primary">Remove From Cart</Button> :
    //       <Button onClick={addCart} className='btn-primary '>Add to Cart</Button>}
    //       {/* <Button variant="danger"  className='mx-5'>Delete</Button> */}
    //     </Card.Body>  
    //   </Card>))}
    // </div>
    <div className='d-flex flex-wrap w-auto '>
      {fetch.map((item)=>(
        <Products key={item.id} item={item} cart={cart} setCart={setCart}/>
      ))}

    </div>
    
  )
}

export default Home