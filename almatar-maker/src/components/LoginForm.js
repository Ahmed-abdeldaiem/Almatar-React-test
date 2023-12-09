import React, { useEffect, useState } from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';
import '../components/LoginForm.css'
import { getAllUser } from '../services/userAPI';

export default function LoginForm() {
    const [userName,setUserName]=useState('');
    const [password,setPassword]=useState('');
    const [usersData,setusers]=useState([]);
    const [loginUsersData,setLoginUser]=useState([]);

  //   useEffect(()=>{
  //     getAllUser();
  
  
      
  // },[])
  

      
  const  getAllUsers=async()=>{
    try{
      const res=await getAllUser();
    
      setusers(res.data);
      
    }catch(err){
      console.log('error',err);
    }
  
  }


  useEffect(()=>{
    getAllUsers();
    
        
    },[])


    const navigate =useNavigate();

    const CheckUser =(e)=>{
        e.preventDefault();
        // console.log('test user and pass',userName ,password);

        // console.log('users',usersData);
        checkLoginUser(userName,password);
        
    }

    function checkLoginUser(loginUser,loginPassword){
      const serverData=[];
      const mapUsers = usersData.map((SavedUser)=>{

      
        serverData.push(SavedUser.username);
        
        serverData.push(SavedUser.password);
        
     
      });
      setLoginUser([...serverData]);
        
        if(loginUsersData.includes(loginUser) &&loginUsersData.includes (loginPassword)){
          console.log('login is fine with user ',loginUser ,'and password',loginPassword);

          navigate('/customerData');

        }else{
          console.log('incorrect user name or password ');
        }
        
   


    }


  return (
  <Container className='p-5'>
    <Row className='text-center align-items-center justify-content-center p-5'>
    <Col md={6} sm={12} >
    <Form onSubmit={CheckUser}>
   <Form.Floating className="mb-3">
        <Form.Control
          id="floatingInputCustom"
          type='text'
          placeholder="User Name"
          required
          onChange={(e)=>{setUserName(e.target.value)}}
        />
        <label htmlFor="floatingInputCustom">User Name</label>
      </Form.Floating>
      <Form.Floating>
        <Form.Control
          id="floatingPasswordCustom"
          type="password"
          placeholder="Password"
          required
          onChange={(e)=>{setPassword(e.target.value)}}
        />
        <label htmlFor="floatingPasswordCustom">Password</label>

      </Form.Floating>

      <Button  type="submit" className='SubmitBTN mt-3 px-4 fw-semibold'>
      Login
    </Button>
    </Form>
    
      </Col>
      </Row>
  </Container>
  )
}
