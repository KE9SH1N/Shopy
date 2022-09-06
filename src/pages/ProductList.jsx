import React from 'react'
import styled from 'styled-components'
import Navbar from "../components/Navbar"
import Announcement from "../components/Announcement"
import Products from '../components/Products'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'
import FilterProduct from '../components/FilterProduct'
import SortProduct from '../components/SortProduct'


import { mobile } from "../responsive"

const Container = styled.div`
    
`

const Title = styled.h1`
    margin: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
`
const Filter = styled.div`
    margin: 20px;
    display: flex;
    align-items: center;
    justify-content: flex-end;

    ${mobile({ display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center" })}
`

const FilterItem = styled.div`
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: flex-start;
    ${mobile({ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center" })}
`

const FilterText = styled.div`
    font-size: 24px;
    font-weight: 600;
    margin-right: 20px;
    ${mobile({ display: "none" })}
`

const ProductList = () => {
  return (
    <Container>
        <Navbar/>
        <Announcement/>
        <Title>Dresses</Title>
        <Filter>
            <FilterText>Filter</FilterText>
            <FilterItem>
                <FilterProduct />
                <SortProduct />
            </FilterItem>
            
        </Filter>
        <Products/>
        <Newsletter/>
        <Footer/>
    </Container>
  )
}

export default ProductList