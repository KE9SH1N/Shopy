import { Send } from '@mui/icons-material'
import React from 'react'
import styled from 'styled-components'
import { mobile } from "../responsive"

const Container = styled.div`
    height: 60vh;
    background-color: #fcf5f5;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    ${mobile({ height: "50vh" })}
`
const Title = styled.h1`
    font-size: 70px;
    margin-bottom: 20px;
    ${mobile({ fontSize: "50px" })}
`
const Description = styled.div`
    font-size: 24px;
    font-weight: 300;
    margin-bottom: 20px;
    ${mobile({ fontSize: "16px" })}
`
const InputContainer = styled.div`
    width: 40%;
    height: 8%;
    background-color: white;
    display: flex;
    justify-content: space-between;
    
    ${mobile({justifyContent: "center" })}

`
const Input = styled.input`
    border: none;
    flex: 8;
    padding-left: 20px;
    ${mobile({ border: "1px solid lightgray" })}

`

const Button = styled.button`
    flex: 1;
    border: none;
    background-color: teal;
    color: white;
    cursor: pointer;
`

const Newsletter = () => {
  return (
    <Container>
        <Title>Newsletter</Title>
        <Description>Get timely updates your favorite products</Description>
        <InputContainer>
            <Input placeholder='Your Email'/>
            <Button>
                <Send/>
            </Button>
        </InputContainer>
    </Container>
  )
}

export default Newsletter