import React, { useState, useRef, useEffect } from "react"
import styled from "styled-components"
import avatar from "../../img/avatar.png"
import { menuItems } from "../../utils/menuItems"
import { signout } from "../../utils/icons"
import { useGlobalContext } from "../../context/globalContext"
import { useAuth } from "../../context/authContext"
import HamburgerMenu from "./HamburgerMenu"
import Overlay from "./Overlay"

function Navigation({ active, setActive }) {
	const [isOpen, setIsOpen] = useState(false)
	const { totalBalance } = useGlobalContext()
	const { logout, user } = useAuth()

	const toggleMenu = () => {
		setIsOpen(!isOpen)
	}

	// close on Escape and manage focus / body scroll when menu is open
	const navRef = useRef(null)

	useEffect(() => {
		const handleKey = (e) => {
			if (e.key === "Escape" && isOpen) {
				setIsOpen(false)
			}
		}

		document.addEventListener("keydown", handleKey)

		if (isOpen) {
			// lock body scroll while mobile nav is open
			document.body.style.overflow = "hidden"
			// move focus to nav for keyboard users
			setTimeout(() => navRef.current && navRef.current.focus(), 50)
		} else {
			document.body.style.overflow = "auto"
		}

		return () => {
			document.removeEventListener("keydown", handleKey)
			document.body.style.overflow = "auto"
		}
	}, [isOpen])

	const handleLogout = () => {
		logout()
		window.location.href = "/login"
	}

	const handleKeyDown = (e, action) => {
		if (e.key === "Enter" || e.key === " ") {
			e.preventDefault()
			action()
		}
	}

	return (
		<>
			<HamburgerMenu isOpen={isOpen} toggleMenu={toggleMenu} />
			<Overlay isOpen={isOpen} toggleMenu={toggleMenu} />
			<NavStyled
				ref={navRef}
				tabIndex={-1}
				className={isOpen ? "open" : ""}
				aria-hidden={!isOpen && window.innerWidth <= 768}>
				<div className="user-container">
					<img
						src={avatar}
						alt={user?.name ? `${user.name} avatar` : "User avatar"}
					/>
					<div className="text">
						<h2>{user?.name || "Guest"}</h2>
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
								onKeyDown={(e) => {
									if (e.key === "Enter" || e.key === " ") {
										e.preventDefault()
										setActive(item.id)
										setIsOpen(false)
									}
								}}
								role="button"
								tabIndex={0}
								className={active === item.id ? "active" : ""}>
								{item.icon}
								<span>{item.title}</span>
							</li>
						)
					})}
				</ul>
				<div className="bottom-nav">
					<li
						onClick={handleLogout}
						onKeyDown={(e) => handleKeyDown(e, handleLogout)}
						role="button"
						tabIndex={0}>
						{signout} Sign Out
					</li>
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
	border: 3px solid #ffffff;
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
			background: #ffffff;
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

			&:focus {
				outline: none;
				box-shadow: 0 0 0 3px rgba(34, 34, 96, 0.12);
				border-radius: 8px;
			}

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

			&:focus {
				outline: none;
				box-shadow: 0 0 0 3px rgba(34, 34, 96, 0.12);
				border-radius: 8px;
			}

			&:hover {
				color: rgba(34, 34, 96, 1);
			}
		}
	}
`

export default Navigation
