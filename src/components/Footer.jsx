import React from 'react'
import styled from 'styled-components'

import { Facebook } from '@mui/icons-material'
import { Instagram } from '@mui/icons-material'
import { Twitter } from '@mui/icons-material'
import { Pinterest } from '@mui/icons-material'
import { Room } from '@mui/icons-material'
import { Phone } from '@mui/icons-material'
import { Mail } from '@mui/icons-material'

const Container =styled.div`
    display: flex;
    
`
const Left = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 20px;
`
const Logo = styled.h1`
    margin-bottom: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
`
const Description = styled.p`
    margin: 20px 0px;
    text-align: justify;
`
const SocialContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`
const SocialIcon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: white;
    background-color: #${props=>props.color};
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    margin-right: 20px;
`

const Center = styled.div`
    flex: 1;
    padding: 20px;
`

const Title = styled.h1`
    margin-bottom: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
`
const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;

`

const ListItem = styled.li`
    width: 50%;
    margin-bottom: 10px;
    display: flex;  
    align-items: center;
    justify-content: center;
    cursor: pointer;

`


const Right = styled.div`
    flex: 1;
    padding: 20px;
`
const Contact = styled.div`
    display: flex;
    margin-bottom: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
`


const Image = styled.img`
    width: -50%;
`


const ContactItem = styled.div`
    margin-left: 10px;
    
`


const Footer = () => {
  return (
    <Container>
        <Left>
            <Logo>Shopy!</Logo>
            <Description>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere mollitia delectus a fuga perferendis rem.
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere mollitia delectus a fuga perferendis rem.
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere mollitia delectus a fuga perferendis rem.
                  Lorem ipsum dolor, sit amet consectetur 
                  
            </Description>
            <SocialContainer>
                <SocialIcon color="3B5999">
                    <Facebook/>
                </SocialIcon>
                  <SocialIcon color="E4405F">
                      <Instagram />
                  </SocialIcon>
                  <SocialIcon color="55ACEE">
                      <Twitter />
                  </SocialIcon>
                  <SocialIcon color="E60023">
                      <Pinterest />
                  </SocialIcon>
            </SocialContainer>
        </Left>
        <Center>
            <Title>Useful Links</Title>
            <List>
                <ListItem>Home</ListItem>
                  <ListItem>Cart</ListItem>
                  <ListItem>Man Fashion</ListItem>
                  <ListItem>Women Fashion</ListItem>
                  <ListItem>Accessories</ListItem>
                  <ListItem>My Account</ListItem>
                  <ListItem>Order Tracking</ListItem>
                  <ListItem>Wishlist</ListItem>
                  <ListItem>Terms and Conditions</ListItem>
            </List>
        </Center>
        <Right>
            <Title>Contact</Title>
              <Contact> <Room /><ContactItem>New york city, New york</ContactItem></Contact>
              <Contact> <Phone /><ContactItem>+1 234 56 78</ContactItem></Contact>
              <Contact> <Mail /><ContactItem>contact@shopy.dev</ContactItem></Contact>
              <Contact><Image src="https://i.ibb.co/Qfvn4z6/payment.png" /></Contact>
                
        </Right>
    </Container>
  )
}

export default Footer