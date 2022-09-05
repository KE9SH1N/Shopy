import React from 'react'
import styled from 'styled-components'
import { Link } from "react-router-dom"

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://images.pexels.com/photos/6984661/pexels-photo-6984661.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
      center;

    
    display: flex;
    align-items: center;
    justify-content: center;

`

const Wrapper = styled.div`
    width: 20%;
    padding: 50px;
    background-color: white;
`

const Title = styled.h1`
    font-size: 24px;
    font-weight: 300;
`

const Form = styled.form`
    display: flex;
    flex-direction: column;
    margin-bottom: 10px;

`

const Input = styled.input`
    flex: 1;
    min-width: 40%;
    margin: 20px 10px 0px 0px;
    padding: 10px;
`

const Linker = styled.a`
    display: flex;
    font-size: 14px;
    padding: 5px 0px;

    
`

const Button = styled.button`
    display: flex;
    border: none;
    padding: 15px 75px;
    margin: 20px 0px;
    margin-bottom: 10px;
    background-color: #0f5241;
    color: white;
    cursor: pointer;
    &:hover{
        background-color: teal;
        transition: all 0.5s ease-in-out;
    }
`



const Login = () => {
  return (
      <Container>
          <Wrapper>
              <Title>
                  Sign In
              </Title>
              <Form>
                  <Input placeholder="Username" />
                  <Input placeholder="Password" />
              </Form>
              <Button>Login</Button>
              
              <Linker><Link style={{ textDecoration: 'none' }} to="/Register">Forget Password</Link></Linker>
              <Linker><Link style={{ textDecoration: 'none' }} to="/Register">Create a new account</Link></Linker>
              
          </Wrapper>
      </Container>
  )
}

export default Login