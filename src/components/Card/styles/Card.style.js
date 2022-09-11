import styled from 'styled-components';

export const StyledCardContainer = styled.div`
	margin: 20px 4px;
	display: grid;
	grid-template-columns: repeat(1, 1fr);
	gap: 10px;
	grid-auto-rows: minmax(100px, auto);

	@media screen and (min-width: 800px) {
		grid-template-columns: repeat(2, 1fr);
		margin: 20px 50px;
	}
`;

export const StyledCard = styled.div`
	margin: 30px 0px 50px;
	background: black;
	color: white;
	text-align: center;
	border: 1px solid #bebebe;
	padding: 1rem;
	box-sizing: border-box;
	width: 100%;

	img {
		width: 100%;
		height: 500px;
		object-fit: cover;
	}

	a {
		color: white;
		padding-bottom: 10px;
	}
`;

export const FlexBox = styled.div`
	display: flex;
`;
