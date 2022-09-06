import { Add, Remove } from '@mui/icons-material'
import React from 'react'
import styled from 'styled-components'
import Announcement from '../components/Announcement'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

import { mobile } from "../responsive"

const Container = styled.div`
    
`

const Wrapper = styled.div`
    padding: 20px;
    ${mobile({ padding: "10px" })}
`


const Title = styled.h1`
    font-weight: 300;
    text-align: center;
`
const TopButton = styled.button`
    padding: 10px;
    font-weight: 600;
    cursor: pointer;
`


const Top = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px;
`

const TopTexts = styled.div`
    ${mobile({ display: "none" })}
`

const TopText = styled.span`
    text-decoration: underline;
    margin: 0px 10px;
    cursor: pointer;
    
`

const Bottom = styled.div`
    display: flex;
    justify-content: space-between;
    ${mobile({ flexDirection: "column" })}
`

const Info = styled.div`
    flex: 3;
`

const Hr = styled.hr`
    background-color: #eee;
    border: none;
    height: 1px;
`


const Summary = styled.div`
    flex: 1;
    border: 0.5px solid lightgray;
    border-radius: 10px;
    padding: 20px;
    height: 50vh;
`

const SummaryTitle = styled.h1`
    font-weight: 200;
`


const SummaryItem = styled.div`
    margin: 30px 0px;
    display: flex;
    justify-content: space-between;
    font-weight: ${props =>props.type === "total" && "500"};
    font-size: ${props => props.type === "total" && "24px"};
`


const SummaryItemText = styled.span`
    
`

const SummaryItemPrice = styled.span`
    
`


const Product = styled.div`
    display: flex;
    justify-content: space-between;
    ${mobile({ flexDirection: "column" })}
`

const ProductDetails = styled.div`
    flex: 2;
    display: flex;
    ${mobile({ flexDirection: "column" })}
`


const Image = styled.img`
    width: 200px;
    ${mobile({ width: "100%" })}
`


const Details = styled.div`
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`

const ProductName = styled.span`
    
`


const ProductId = styled.span`
    
`

const ProductColor = styled.div`
    display: flex;
`

const Color = styled.div`
    width: 20px;
    height: 20px;
    margin-left: 10px;
    border-radius: 50%;
    background-color: ${props => props.color};
`

const ProductSize = styled.span`
    
`

const PriceDetails = styled.div`
    flex: 2;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`
const ProductAmountContainer = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 20px;
`

const ProductAmount = styled.div`
    font-size: 24px;
    margin: 5px;
    ${mobile({ margin: "5px 15px" })}
`

const Price = styled.div`
    font-size: 30px;
    font-weight: 400;
    ${mobile({ marginBottom: "20px" })}
`

const BottomButton = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
`





const Cart = () => {
  return (
    <Container>
        <Navbar/>
        <Announcement/>
        <Wrapper>
            <Title>Your Cart</Title>
            <Top>
                <TopTexts>
                    <TopText>Shopping Bag(2)</TopText>
                    <TopText>Your Wishlist(0)</TopText>
                </TopTexts>
            </Top>
            <Bottom>
                <Info>
                    <Product>
                        <ProductDetails>
                              <Image src="https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1614188818-TD1MTHU_SHOE_ANGLE_GLOBAL_MENS_TREE_DASHERS_THUNDER_b01b1013-cd8d-48e7-bed9-52db26515dc4.png?crop=1xw:1.00xh;center,top&resize=480%3A%2A" />
                            <Details>
                                <ProductName><b>Product: </b>Jessie Thunder Shoes</ProductName>
                                <ProductId><b>ID: </b>938132445157</ProductId>
                                <ProductColor>
                                    <b>Color:</b>
                                    <Color color = "black"/>
                                </ProductColor>
                                  <ProductSize><b>Size: </b>XL</ProductSize>
                            </Details>
                        </ProductDetails>
                        <PriceDetails>
                            <ProductAmountContainer>
                                <Add/>
                                <ProductAmount>
                                    2
                                </ProductAmount>
                                <Remove/>
                            </ProductAmountContainer>
                            <Price>$ 30</Price>
                        </PriceDetails>
                    </Product>
                    <Hr/>
                      <Product>
                          <ProductDetails>
                              <Image src="https://i.pinimg.com/originals/2d/af/f8/2daff8e0823e51dd752704a47d5b795c.png" />
                              <Details>
                                  <ProductName><b>Product: </b>Hakura T Shirt</ProductName>
                                  <ProductId><b>ID: </b>938132445157</ProductId>
                                  <ProductColor>
                                      <b>Color:</b>
                                      <Color color="gray" />
                                  </ProductColor>
                                  <ProductSize><b>Size: </b>L</ProductSize>
                              </Details>
                          </ProductDetails>
                          <PriceDetails>
                              <ProductAmountContainer>
                                  <Add />
                                  <ProductAmount>
                                      2
                                  </ProductAmount>
                                  <Remove />
                              </ProductAmountContainer>
                              <Price>$ 50</Price>
                          </PriceDetails>
                      </Product>
                </Info>
                
                <Summary>
                    <SummaryTitle>Order Summary</SummaryTitle>
                    <SummaryItem>
                        <SummaryItemText>
                            Subtotal
                        </SummaryItemText>
                        <SummaryItemPrice>
                            $ 80
                        </SummaryItemPrice>
                    </SummaryItem>

                      <SummaryItem>
                          <SummaryItemText>
                              Estimated Shipping
                          </SummaryItemText>
                          <SummaryItemPrice>
                              $ 5.99
                          </SummaryItemPrice>
                      </SummaryItem>


                      <SummaryItem>
                          <SummaryItemText>
                              Shipping Discount
                          </SummaryItemText>
                          <SummaryItemPrice>
                              $ -5.99
                          </SummaryItemPrice>
                      </SummaryItem>

                        <Hr/>
                      <SummaryItem type="total">
                          <SummaryItemText>
                              Total
                          </SummaryItemText>
                          <SummaryItemPrice>
                              $ 80
                          </SummaryItemPrice>
                      </SummaryItem>
                </Summary>
                
                
            </Bottom>
              <BottomButton>
                  <TopButton>Continue Shopping</TopButton>
                  
                  <TopButton>Checkout Now</TopButton>
              </BottomButton>
        </Wrapper>
        <Hr/>
        <Footer/>
    </Container>
  )
}

export default Cart