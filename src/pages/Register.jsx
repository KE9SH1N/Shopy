import React from 'react'
import styled from 'styled-components'


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
    width: 40%;
    padding: 50px;
    background-color: white;
`

const Title = styled.h1`
    font-size: 24px;
    font-weight: 300;
`

const Form = styled.form`
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 10px;

`

const Input = styled.input`
    flex: 1;
    min-width: 40%;
    margin: 20px 10px 0px 0px;
    padding: 10px;
`

const Agreement = styled.span`
    font-size: 12px;
    
`

const Button = styled.button`
    display: flex;
    border: none;
    padding: 15px 75px;
    margin-top: 10px;
    background-color: #0f5241;
    color: white;
    cursor: pointer;
    &:hover{
        background-color: teal;
        transition: all 0.5s ease;
    }
`


const Register = () => {
  return (
      <Container>
        <Wrapper>
            <Title>
                Create An Account
            </Title>
            <Form>
                <Input placeholder= "First Name" />
                <Input placeholder="Last name" />
                <Input placeholder="Username" />
                <Input placeholder="Your Email" />
                <Input placeholder="Password" />
                <Input placeholder="Confirm Password" />
            </Form>

            <Agreement>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi ea porro laborum eius molestias quo <b>PRIVECY POLICY</b>.
            </Agreement>
            <Button>Create</Button>
        </Wrapper>
      </Container>
  )
}

export default Register