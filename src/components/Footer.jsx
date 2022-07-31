import React from 'react'
import Styled from 'styled-components'

const StyledFooter = Styled.div`
    width: 100%;
    height: 10vh;
    background: black;
    color: white;
    display: grid;
    place-items: center;
`

export default function Footer() {
  return (
    <StyledFooter>
      Designed By Martha 
    </StyledFooter>
  )
}
