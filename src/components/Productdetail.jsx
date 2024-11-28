import React from 'react'
import axios from "axios";
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';

export const Productdetail = () => {
    const { id } = useParams();
    console.log(id);
    const [product, setProducts] = useState([]);

    useEffect(() => {
        axios(`https://fakestoreapi.in/api/products/${id}`)
          .then((response) => {
            console.log(response);
            setProducts(response.data.product);
          })
          .catch((err) => console.log(err));
        })

  return (
    <div>

      <h1>Product Detail</h1>
      
      {product && (
        
        <div key={product.id} className='d-flex'>
          <img className='img w-25 h-25 my-5' src={product.image} alt={product.title} />
          <div className='my-5 mx-3'>
          <h2>{product.title}</h2>
          <p className=' my-2'>{product.brand}</p>
          <div className='d-flex my-2'>
          <button className='btn btn-primary rounded-pill   my-2'>Category: {product.category}</button>
          
          </div>
          <h4 className='my-2'>Price: {product.price} $</h4>
          <p>{ product.description}</p>
          <div className='d-flex'>
          <button className='btn btn-primary'>Add to Cart</button>
          <Link className='btn btn-primary mx-2' to={"/user"}>Back to HomePage</Link>
          </div>
          
          </div>
          
          </div>
      )}
      
    </div>
  )
}
