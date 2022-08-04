import React from 'react'
import Styled from 'styled-components'

const StyledNavigation = Styled.nav`
  background: black;
  color: white;
  display: flex;
  justify-content: space-between;
  padding: 2rem 0;
  font-weight: bold;
  width: 100%;
  
  ul{
    list-style: none;
    padding: 0;
    margin: 0 10rem;
  }

  label{
  display: none;
  }

`

export default function Navigation() {
  return (
    <StyledNavigation>
      <div>Logo</div> 
       <div className='searchInput'>
        <label for='search'> Search </label>
        <input  id='search' type='text' placeholder='Search' />
      </div>
      <ul>
        <li>Home</li>
      </ul>
    </StyledNavigation>
  )
}
