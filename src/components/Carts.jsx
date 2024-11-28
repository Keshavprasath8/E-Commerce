// import React from 'react'
// import './card.css'
// function Cart() {
//   return (
//     <div className='cart-container'>
//       <div className='cart-product'>
//         <div className='img'>
//             <img src="" alt="image" />
//         </div>
//         <div className='details'>
//             <h2>Product Name</h2>
//             <h3>Product Price</h3>
//         </div> 
//       </div>
//       <div className='cart-product'>
//         <div className='img'>
//             <img src="" alt="image" />
//         </div>
//         <div className='details'>
//             <h2>Product Name</h2>
//             <h3>Product Price</h3>
//         </div> 
//       </div>
//       <div className='cart-product'>
//         <div className='img'>
//             <img src="" alt="image" />
//         </div>
//         <div className='details'>
//             <h2>Product Name</h2>
//             <h3>Product Price</h3>
//         </div> 
//       </div>
//       <h2>Total Price $: </h2>
//     </div>
//   )
// } 

// export default Cart



import React from 'react';

import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

const Cart = () => {


  return (
    <div className="mt-3  row justify-content-center w-100">
      <h2 className="text-center">Cart</h2>
        <p className="text-center">Your cart is empty! <Link to="/">Go Back to Home</Link></p>
               
      <Button variant="primary " className="mt-3 w-25">
        Proceed to Checkout
      </Button>
    </div>
  );
};

export default Cart;
