import React from 'react'
import Styled from 'styled-components'
import {data} from '../components/mocks/CardMock'
import { Link } from 'react-router-dom';

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

  a{
    color: white;
    padding-bottom: 10px;
  }
   
`

function Card() {
  return (
    <StyledCardContainer>
        {data.map((item) => {
         return (
          <StyledCard>
            <img src={item.src} alt={item.alt}/>
            <h2>{item.model}</h2>
            <Link to="Model" aria-label='Information about the macbook pro'>More info about mac</Link>
          </StyledCard>)
        })}
        
    </StyledCardContainer>
  )
}

export default Card