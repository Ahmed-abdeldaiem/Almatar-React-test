import React from 'react'
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { as } from './../../node_modules/axios/index';
import Nav from 'react-bootstrap/Nav';
import '../components/NavBar.css'



export default function NavBar() {
  return (
   <>
   <Nav defaultActiveKey="/home" >
    <div className='MainNav w-100 d-flex justify-content-around p-1'>

    <Nav.Item >
        {/* https://almatar.com/assets/img/almatar_en.png
        https://almatar.com/assets/img/almatar_ar.png
        */}
        {/* <img src='https://almatar.com/assets/img/almatar_en.png' className='Logo'></img> */}
        <div className='Logo'></div>
      </Nav.Item>
      <Nav.Item >
        <Nav.Link href='https://almatar.com/en' target={'_blank'} eventKey="link-1" className='Visit text-capitalize'>Visit Website</Nav.Link>
        <Nav.Link eventKey="link-1" className='Visit text-capitalize'>arabic</Nav.Link>
      </Nav.Item>
     
    </div>
    
    </Nav>
{/* 
    <Button variant="primary" as={Link} to={'/'}>Primary</Button>
    
    <Button variant="success" as={Link} to={'/customerData'}>Primary</Button> */}
   </>
  )
}
