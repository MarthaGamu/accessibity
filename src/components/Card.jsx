import React from 'react'
import Styled from 'styled-components'
import {data} from '../components/mocks/CardMock'

const StyledCardContainer = Styled.div`
 width: 100%;
 display: flex;
 justify-content: space-evenly;
 flex-wrap: wrap;
 margin-top: 20px;


`
const StyledCard = Styled.div`
  margin-top: 10px;
  margin-bottom: 15px;
  background: black;
  color: white;
  text-align: center;
   img{
    width: 500px;
    height: 400px;
   }
`

function Card() {
  return (
    <StyledCardContainer>
        {data.map((item) => {
         return (
          <StyledCard>
            <img src={item.src} alt='laptop mac '/>
            <h1>{item.model}</h1>
          </StyledCard>)
        })}
        
    </StyledCardContainer>
  )
}

export default Card