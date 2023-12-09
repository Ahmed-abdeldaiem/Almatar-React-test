import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Outlet } from 'react-router-dom'
import NavBar from '../components/NavBar'
import '../layoutes/HomeLayout.css'
export default function HomeLayout() {
  return (

    <>
    <NavBar />
    <Container fluid className='w-100'>

 
    <Row className='HomeLayOut text-center p-3'>
      <Col>
        <p className='HeaderParagraph fs-3 text-capitalize '>almatar call center ticket maker</p>
      </Col>
    </Row>
    </Container>
    <Outlet />
    </>


  )
}
