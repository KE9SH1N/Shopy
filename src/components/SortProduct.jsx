import React from 'react'
import styled from 'styled-components'
import { mobile } from "../responsive"


const Container = styled.div`
    
`

const FilterContainer = styled.div`
    display: flex;
    justify-content: space-between;
`
const Filter = styled.div`
    
`

const Select = styled.select`
    padding: 10px;
    margin-right:20px;
    ${mobile({ marginRight: "-10px" })}
    
    
`

const Option = styled.option`
    ${mobile({ fontSize: "10px" })}
`


const SortProduct = () => {
  return (
    <Container>
          <FilterContainer>
              <Filter>
                  <Select>
                      <Option selected>
                          Newest
                      </Option>
                      <Option>
                          Price (High to Low)
                      </Option>
                      <Option>
                          Price (Low to High)
                      </Option>
                  </Select>
              </Filter>
          </FilterContainer>
    </Container>
  )
}

export default SortProduct