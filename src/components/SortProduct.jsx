import React from 'react'
import styled from 'styled-components'

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
`

const Option = styled.option`
    
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
                          Price (asc)
                      </Option>
                      <Option>
                          Price (dsc)
                      </Option>
                  </Select>
              </Filter>
          </FilterContainer>
    </Container>
  )
}

export default SortProduct