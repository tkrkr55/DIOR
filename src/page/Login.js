import React from 'react'
import  {Form, Button} from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

export default function Login({setAuthentifate}) {
  const navigate = useNavigate()
  const loginUser = (e)=>{
    e.preventDefault()
    console.log("login user")
    setAuthentifate(true)
    navigate('/')
  }
  return (
    <div className='login_page'>
       <Form onSubmit={(e)=>loginUser(e)}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      
      <Button variant="outline-secondary" type="submit">
        로그인
      </Button>
    </Form>
      
    </div>
  )
}
