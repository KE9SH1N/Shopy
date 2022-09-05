import React from 'react'
import styled from 'styled-components'
import Announcement from '../components/Announcement'
import FilterProduct from '../components/FilterProduct'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Newsletter from '../components/Newsletter'



import { Remove } from '@mui/icons-material'
import { Add } from '@mui/icons-material'



const Container = styled.div`
    
`

const Wrapper = styled.div`
    padding: 50px;
    display: flex;
`

const ImageContainer = styled.div`
    flex: 1;
`

const Image = styled.img`
    width: 100%;
    height: 70vh;
    object-fit: cover;
`

const InfoContainer = styled.div`
    flex: 1;
    padding: 0px 50px;
`

const Title = styled.h1`
    font-weight: 200;

`

const Description = styled.p`
    margin: 20px 0px;
`

const Price = styled.span`
    font-weight: 100;
    font-size: 40px;
`

const Filter = styled.div`
    
`

const AddContainer = styled.div`
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
`

const AmountContainer = styled.div`
    display: flex;
    align-items: center;
    font-weight: 700;
    
`

const Amount = styled.span`
    width: 30px;
    height: 30px;
    border-radius: 10px;
    border: 1px solid teal;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0px 5px;
    cursor: default;
`


const Button= styled.button`
    padding: 10px 15px;
    border: 1px solid teal;
    color: white;
    background-color: #0f5241;
    cursor: pointer;
    margin-left: 50px;
    font-size: 14px;
    font-weight: 500;

    &:hover{
        background-color: teal;
        transition: all 0.5s ease;
    }
`
const RemoveItem = styled.div`
    cursor: pointer;
    width: 30px;
    height: 30px;
    border-radius: 10px;
    border: 1px solid teal;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0px 5px;
    background-color: teal;
    color: white;
`

const Product = () => {
  return (
    <Container>
        <Navbar/>
        <Announcement/>
        <Wrapper>
            <ImageContainer>
                <Image src = "https://i.ibb.co/S6qMxwr/jean.jpg"/>
            </ImageContainer>

            <InfoContainer>
                <Title>
                    Denim Jumpsuit
                </Title>
                <Description>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id consectetur, ducimus ea, saepe enim facilis cupiditate molestias qui, 
                    asperiores ex natus debitis deserunt necessitatibus eaque incidunt atque praesentium vero similique!
                </Description>
                <Price>
                    $50
                </Price>
                <Filter>
                    <FilterProduct />
                </Filter>


                <AddContainer>
                    <AmountContainer>
                        <RemoveItem><Remove /></RemoveItem>
                        <Amount>1</Amount>
                        <RemoveItem><Add /></RemoveItem>
                    </AmountContainer>
                    <Button>Add To Cart</Button>
                </AddContainer>
                
            </InfoContainer>
        </Wrapper>
        <Newsletter/>
        <Footer/>
    </Container>
  )
}

export default Product