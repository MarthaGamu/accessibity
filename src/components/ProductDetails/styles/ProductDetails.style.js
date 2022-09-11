import styled from 'styled-components';

export const Container = styled.div`
	width: 100%;
	height: auto;

	@media screen and (min-width: 800px) {
		height: 80vh;
	}
`;
export const Image = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	margin: 1rem;

	.textWrapper {
		padding: 0 2rem;
	}

	img {
		width: 100%;
	}
	@media screen and (min-width: 800px) {
		display: flex;
		flex-direction: row;
	}
`;
