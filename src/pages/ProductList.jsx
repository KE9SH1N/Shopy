import React from 'react'
import styled from 'styled-components'
import Navbar from "../components/Navbar"
import Announcement from "../components/Announcement"
import Products from '../components/Products'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'
import FilterProduct from '../components/FilterProduct'
import SortProduct from '../components/SortProduct'


const Container = styled.div`
    
`

const Title = styled.h1`
    margin: 20px;
`
const Filter = styled.div`
    margin: 20px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
`

const FilterText = styled.div`
    font-size: 24px;
    font-weight: 600;
    margin-right: 20px;
`

const ProductList = () => {
  return (
    <Container>
        <Navbar/>
        <Announcement/>
        <Title>Dresses</Title>
        <Filter>
            <FilterText>Filter</FilterText>
            <FilterProduct />
            <SortProduct/>
        </Filter>
        <Products/>
        <Newsletter/>
        <Footer/>
    </Container>
  )
}

export default ProductList