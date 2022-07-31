import React from 'react'
import Styled from 'styled-components'

const StyledBanner  = Styled.div`
    width: 100%;
    height: 60vh;
    
    img{
        width: 100%;
        height: 100%;
        object-fit: cover;

    }
   
    
`
function Banner() {
  return (
    <StyledBanner>
        <img src='https://images.unsplash.com/photo-1530520960548-0d70a1ad430d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80' alt='Homepage computer macbook'/>
    </StyledBanner>
  )
}

export default Banner