import React from 'react'
import Styled from 'styled-components'

const StyledHeading = Styled.h1`
font-variant: small-caps;
text-align: center;
`

function Heading() {
  return (
    <StyledHeading>MacBook Latest Laptops</StyledHeading>
  )
}

export default Heading