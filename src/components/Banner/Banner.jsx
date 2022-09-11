import React from 'react';
import * as Styled from './styles/Banner.style';

function Banner() {
	return (
		<Styled.StyledBanner>
			<img
				src='https://images.unsplash.com/photo-1530520960548-0d70a1ad430d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
				alt='Homepage computer macbook'
			/>
		</Styled.StyledBanner>
	);
}

export default Banner;
