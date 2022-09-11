import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { GiHamburgerMenu } from 'react-icons/gi';
import { CgCloseR } from 'react-icons/cg';
import * as Styled from './styles/Navbar.style';

export default function Navbar() {
	const [openMenu, setMenu] = useState(false);

	const handleClick = () => {
		setMenu(!openMenu);
	};
	return (
		<>
			<Styled.Header>
				<div className='logo'>
					<NavLink to='/'>MacStar</NavLink>
				</div>
				<Styled.Navigation aria-label='links to navigate pages'>
					<Styled.Mobile>
						{openMenu ? (
							<CgCloseR onClick={handleClick} />
						) : (
							<GiHamburgerMenu onClick={handleClick} />
						)}
						{openMenu && (
							<ul>
								<NavLink to='/' aria-current='page'>
									Home
								</NavLink>
							</ul>
						)}
					</Styled.Mobile>
					<Styled.Desktop>
						<ul>
							<NavLink to='/' exact aria-current='page'>
								Home
							</NavLink>
						</ul>
					</Styled.Desktop>
				</Styled.Navigation>
			</Styled.Header>
		</>
	);
}
