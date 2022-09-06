import { Search, ShoppingCartOutlined } from '@mui/icons-material'
import { Badge } from '@mui/material'
import React from 'react'
import styled from 'styled-components'

import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";

import {mobile} from "../responsive"

const Container = styled.div`
    height: 60px;
    ${mobile({ height: "50px" })}
`

const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    ${mobile({ padding: "10px 0px" })}
`

const Left = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
`
const Language = styled.span`
    font-size: 14px;
    cursor: pointer;
    ${mobile({ display: "none" })}

`
const SearchContainer = styled.div`
    border: 0.5px solid lightgray;
    display: flex;
    align-items: center;
    margin-left: 25px;
    padding: 5px;
`

const Input = styled.input`
    border: none;
    ${mobile({ width: "50px" })}
`

const Center = styled.div`
    flex: 1;
    text-align: center;
`

const Logo = styled.h1`
    font-weight: bold;
    cursor: pointer;

    ${mobile({ fontSize: "24px" , marginLeft: "30px" })}

`
const Right = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    ${mobile({ flex: 2, justifyContent: "center" })}
`

const MenuItem = styled.div`
    font-size: 16px;
    cursor: pointer;
    margin-left: 25px;
    text-decoration: none;
    ${mobile({ fontSize: "12px", marginLeft: "10px" })}
`


const Navbar = () => {
  return (
    <Container>
          <Wrapper>
              <Left>
                <Language>EN</Language>
                <SearchContainer>
                    <Input placeholder='Search'/> 
                    <Search style={{color:'gray', fontSize:16}}/>
                </SearchContainer>
                </Left>
              <Center><Logo><NavLink to ="/">Shopy!</NavLink></Logo></Center>
            <Right>
                <MenuItem><Link style={{ textDecoration: 'none' }} to ="/Register">REGISTER</Link></MenuItem>
                
                <MenuItem><Link style={{ textDecoration: 'none' }} to="/Login">SIGN IN</Link></MenuItem>
                
                <MenuItem>
                      <Badge badgeContent={4} color="primary">
                        <Link to = "/Cart">
                            <ShoppingCartOutlined color="action" />
                        </Link>                        
                      </Badge>
                </MenuItem>
            </Right>
          </Wrapper>
    </Container>
  )
}

export default Navbar