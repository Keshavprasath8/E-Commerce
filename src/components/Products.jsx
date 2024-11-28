import React from 'react'
import './Products.css'
import { Link } from 'react-router-dom'

const Products = ({item}) => {
  return (
    
    <> 
    <div id='containers'> 
      <div className='contain'>
      <div className='card'id='card'>
      <div >
      <Link id='imge' to={`/products/${item.id}`}><img className='imge' src={item.image} alt="ime" /></Link>
      <Link  className='text-decoration-none ' to={`/products/${item.id}`}><h2 className='title 'id='cnt' style={{ width:"fit-content"}}> {item.title.length > 30 ? item.title.substring(0, 15) + "..." : item.title} </h2></Link>
      </div>
      <div id='cnt'>
      <h3 className='fs-6'>Price $ : {item.price}</h3>
      <button id='btn' className='btn my-1'>Add to Cart</button>
      </div> 
      </div>
      </div>
    </div>
    </>
  )
}

export default Products