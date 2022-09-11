import React from 'react';
import { useParams } from 'react-router-dom';
import { data } from '../mocks/CardMock';
import * as Styled from './styles/ProductDetails.style';

function ProductDetails() {
	const { id } = useParams();
	const result = data.find((item) => item.id === id);
	console.log('result', result);

	return (
		<Styled.Container>
			<Styled.Image>
				<picture>
					<source srcSet={result.lg} media='(min-width: 990px)' />
					<source srcSet={result.md} media='(min-width: 750px)' />
					<img srcSet={result.sm} alt='MacbookPro laptop' />
				</picture>
				<div className='textWrapper'>
					<h2>{result.model}</h2>
					<p>
						Lorem Ipsum is simply dummy text of the printing and typesetting
						industry. Lorem Ipsum has been the industry's standard dummy text
						ever since the 1500s, when an unknown printer took a galley of type
						and scrambled it to make a type specimen book. It has survived not
						only five centuries, but also the leap into electronic typesetting,
						remaining essentially unchanged. It was popularised in the 1960s
						with the release of Letraset sheets containing Lorem Ipsum passages,
						and more recently with desktop publishing software like Aldus
						PageMaker including versions of Lorem Ipsum.
					</p>
				</div>
			</Styled.Image>
		</Styled.Container>
	);
}

export default ProductDetails;
