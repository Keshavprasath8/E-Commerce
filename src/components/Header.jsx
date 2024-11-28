import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../assets/imag.png'
import './Navbar.css'
const Header = () => {
  return (
    <div id='header' className='d-flex justify-content-between p-2 '>
        <a className=' p-2' href="/home"><img style={{width:"60px",height:"40px"}} src={Logo} alt="" /></a>
        <ul className='d-flex list-unstyled my-2'>
        <li className='mx-1 ' >
              <Link to="/home" className='text-decoration-none ' id="button1"  >Home</Link>
            </li>
            <li className='mx-1 ' >
              <Link to="/admin" className='text-decoration-none ' id="button1" >Admin</Link>
            </li>
            <li className='mx-1 ' >
              <Link to="/User" className='text-decoration-none ' id="button1"  >User</Link>
            </li>
            <li className='mx-1 '>
              <Link to="/Carts" className='text-decoration-none ' id="button1"  >Cart </Link>
            </li>
        </ul>
    </div>
  )
}

export default Header
