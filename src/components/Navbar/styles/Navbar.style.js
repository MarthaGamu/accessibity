import styled from 'styled-components';

export const Header = styled.header`
	background: black;
	color: white;
	display: flex;
	justify-content: space-between;
	padding: 2rem 0;
	font-weight: bold;
	width: 100%;
	position: relative;
	z-index: 0;

	.logo {
		font-family: 'Sofia', sans-serif;
		margin-left: 2rem;
		font-size: 20px;

		a {
			color: white;
		}
	}

	ul {
		list-style: none;
		padding: 0;
		margin: 0 10rem;
		display: flex;
	}
	li {
		color: white;
	}
`;

export const Mobile = styled.div`
	font-size: 1.5rem;
	margin-right: 10px;

	ul {
		padding: 0;
		margin: 0;
		display: flex;
		flex-direction: column;
		text-align: center;
		position: absolute;
		background: black;
		top: 6rem;
		left: 0;
		color: white;
		width: 100%;
		height: 4rem;
		z-index: 1;
		border-top: 1px solid white;
	}

	li {
		font-size: 15px;
		padding-top: 10px;
	}

	@media screen and (min-width: 800px) {
		display: none;
	}
`;

export const Desktop = styled.div`
	color: red;

	@media screen and (max-width: 800px) {
		display: none;
	}
`;

export const Navigation = styled.nav`
	a {
		text-decoration: none;
		color: white;

		&: hover {
			text-decoration: underline;
			color: white;
		}
	}
`;
