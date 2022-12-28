import React, { useState } from 'react'
import  {Form, Button} from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { authenticateAction } from '../redux/actions/authenticateAction'

export default function Login({setAuthentifate}) {
  const[id,setId]=useState('')
  const[password,setPassword]=useState('')
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const loginUser = (e)=>{
    e.preventDefault()
    console.log("login user")
    dispatch(authenticateAction.login(id,password))
    navigate('/')
  }
  return (
    <div className='login_page'>
       <Form onSubmit={(e)=>loginUser(e)}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" onChange={(e)=>setId(e.target.value)}/>
        
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" onChange={(e)=>setPassword(e.target.value)}/>
      </Form.Group>
      
      <Button variant="outline-secondary" type="submit">
        로그인
      </Button>
    </Form>
      
    </div>
  )
}
