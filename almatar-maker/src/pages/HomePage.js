import React from 'react'
import { Col, Container, Image, Row } from 'react-bootstrap'
import LoginForm from '../components/LoginForm'
import '../pages/HomePage.css'


// import '../images/dubai.jpeg'
export default function HomePage() {
  return (
  
      <Col className='p-0 m-0'>
      <div className='HomePage '>

      <LoginForm />

      </div>
      </Col>
 
  )
}
