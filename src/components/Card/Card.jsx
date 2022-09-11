import React from 'react';

import * as Styled from './styles/Card.style';

import { data } from '../mocks/CardMock';
import { Link } from 'react-router-dom';

function Card() {
	const handleClick = () => {
		console.log('Hello Welcome to our site');
	};

	return (
		<Styled.FlexBox>
			<Styled.StyledCardContainer>
				{data.map((item) => {
					return (
						<Styled.StyledCard onClick={handleClick} key={item.id}>
							<picture>
								<source srcSet={item.lg} media='(min-width: 990px)' />
								<source srcSet={item.md} media='(min-width: 750px)' />
								<img srcSet={item.sm} alt='MacbookPro laptop' />
							</picture>
							<h2>{item.model}</h2>
							<Link to={`/productdetails/${item.id}`}>{item.link}</Link>
						</Styled.StyledCard>
					);
				})}
			</Styled.StyledCardContainer>
		</Styled.FlexBox>
	);
}

export default Card;
