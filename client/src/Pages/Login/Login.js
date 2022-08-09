import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useRef } from 'react';
import { Context } from '../../Context/Context';
import { useContext } from 'react';
import axios from 'axios'
const Login = () => {

      const usernameRef =useRef()
      const passwordRef = useRef()
      const {dispatch} = useContext(Context) 
      const url = "/auth/login";
   const handlesubmit = async(e) =>{
    e.preventDefault();
     dispatch({type:"LOGIN_START"});
     try{
      
      const postLogin = await axios.post(url,{
        username:usernameRef.current.value,
        password:passwordRef.current.value
      });
      dispatch({type:"LOGIN_SUCCESS",payload:postLogin.data})
      postLogin && window.location.replace('/');
      console.log("userData",postLogin.data)

     }catch(error){
      dispatch({type:"LOGIN_FAILURE"})
      console.log("error",error)
     }
   }

  return (
    <>
       <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Username</Form.Label>
        <Form.Control type="text" placeholder="Enter username" ref={usernameRef} required/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label >Password</Form.Label>
        <Form.Control type="password" placeholder="Password" ref={passwordRef} required/>
      </Form.Group>
      <Button variant="primary" type="submit" onClick={handlesubmit}>
        Login
      </Button>
    </Form>
    </>
  )
}

export default Login