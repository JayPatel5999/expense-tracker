import React, { useState } from "react"
import styled from "styled-components"
import avatar from "../../img/avatar.png"
import { menuItems } from "../../utils/menuItems"
import { signout } from "../../utils/icons"
import { useGlobalContext } from "../../context/globalContext"
import HamburgerMenu from "./HamburgerMenu"
import Overlay from "./Overlay"

function Navigation({ active, setActive }) {
	const [isOpen, setIsOpen] = useState(false)
	const { totalBalance } = useGlobalContext()

	const toggleMenu = () => {
		setIsOpen(!isOpen)
	}

	return (
		<>
			<HamburgerMenu isOpen={isOpen} toggleMenu={toggleMenu} />
			<Overlay isOpen={isOpen} toggleMenu={toggleMenu} />
			<NavStyled className={isOpen ? "open" : ""}>
				<div className="user-container">
					<img src={avatar} alt="" />
					<div className="text">
						<h2>John Doe</h2>
						<p>
							<b>${totalBalance()}</b>
						</p>
					</div>
				</div>
				<ul className="menu-items">
					{menuItems.map((item) => {
						return (
							<li
								key={item.id}
								onClick={() => {
									setActive(item.id)
									setIsOpen(false)
								}}
								className={active === item.id ? "active" : ""}>
								{item.icon}
								<span>{item.title}</span>
							</li>
						)
					})}
				</ul>
				<div className="bottom-nav">
					<li>{signout} Sign Out</li>
				</div>
			</NavStyled>
		</>
	)
}

const NavStyled = styled.nav`
	padding: 2rem 1.5rem;
	width: 250px; // Reduced from 300px
	height: 80%;
	background: rgba(252, 246, 249, 0.78);
	border: 3px solid #FFFFFF;
	backdrop-filter: blur(4.5px);
	border-radius: 32px;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	gap: 2rem;
	transition: transform 0.3s ease-in-out;

	@media (max-width: 768px) {
		position: fixed;
		left: 0;
		top: 0;
		height: 100vh;
		z-index: 10;
		transform: translateX(-100%);
		border-radius: 0;
		width: 70%; // Reduced from 80%
		max-width: 250px; // Reduced from 300px
		padding-top: 5rem;

		&.open {
			transform: translateX(0);
		}
	}

	.user-container {
		height: 90px; // Slightly reduced from 100px
		display: flex;
		align-items: center;
		gap: 1rem;

		img {
			width: 70px; // Reduced from 80px
			height: 70px; // Reduced from 80px
			border-radius: 50%;
			object-fit: cover;
			background: #FFFFFF;
			border: 2px solid #000000;
			padding: 0.2rem;
			box-shadow: 0px 1px 17px rgba(0, 0, 0, 0.06);
		}

		h2 {
			color: rgba(34, 34, 96, 1);
		}

		p {
			color: rgba(34, 34, 96, 0.6);
		}
	}
	.menu-items {
		flex: 1;
		display: flex;
		flex-direction: column;

		li {
			display: grid;
			grid-template-columns: 40px auto;
			align-items: center;
			margin: 0.6rem 0;
			font-weight: 500;
			cursor: pointer;
			transition: all 0.4s ease-in-out;
			color: rgba(34, 34, 96, 0.6);
			padding-left: 1rem;
			position: relative;

			i {
				color: rgba(34, 34, 96, 0.6);
				font-size: 1.4rem;
				transition: all 0.4s ease-in-out;
			}
		}
	}
	.bottom-nav {
		li {
			display: flex;
			align-items: center;
			gap: 1rem;
			cursor: pointer;
			color: rgba(34, 34, 96, 0.6);
			transition: all 0.4s ease-in-out;
			padding: 0.8rem 1rem;

			&:hover {
				color: rgba(34, 34, 96, 1);
			}
		}
	}
`

export default Navigation
