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
    margin-top: 20px;
    margin-bottom: 20px;
`

const Select = styled.select`
    padding: 10px;
    margin-right:20px;
`

const Option = styled.option`
    
`


const FilterProduct = () => {
  return (
    <Container>
          <FilterContainer>
              <Filter>
                  <Select>
                      <Option disabled selected>
                          Color
                      </Option>
                      <Option>
                          White
                      </Option>
                      <Option>
                          Black
                      </Option>
                      <Option>
                          Red
                      </Option>
                      <Option>
                          Green
                      </Option>
                      <Option>
                          Blue
                      </Option>
                  </Select>


                  <Select>
                      <Option disabled selected>
                          Size
                      </Option>
                      <Option>
                          XS
                      </Option>
                      <Option>
                          S
                      </Option>
                      <Option>
                          M
                      </Option>
                      <Option>
                          L
                      </Option>
                      <Option>
                          XL
                      </Option>
                  </Select>
              </Filter>
          </FilterContainer>
    </Container>
  )
}

export default FilterProduct