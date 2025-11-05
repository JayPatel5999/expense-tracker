import React from "react"
import styled from "styled-components"

function HamburgerMenu({ isOpen, toggleMenu }) {
	const handleKeyDown = (e) => {
		if (e.key === "Enter" || e.key === " ") {
			e.preventDefault()
			toggleMenu()
		}
	}

	return (
		<HamburgerStyled
			isOpen={isOpen}
			onClick={toggleMenu}
			className={isOpen ? "open" : ""}
			role="button"
			aria-label={isOpen ? "Close menu" : "Open menu"}
			aria-expanded={isOpen}
			tabIndex={0}
			onKeyDown={handleKeyDown}>
			<span></span>
			<span></span>
			<span></span>
		</HamburgerStyled>
	)
}

const HamburgerStyled = styled.div`
	display: none;
	flex-direction: column;
	justify-content: space-around;
	width: 2rem;
	height: 2rem;
	position: fixed;
	top: 1rem;
	right: 1rem;
	z-index: 20;
	cursor: pointer;

	@media (max-width: 768px) {
		display: flex;
	}

	span {
		width: 2rem;
		height: 0.25rem;
		background: rgba(34, 34, 96, 0.8);
		border-radius: 10px;
		transition: all 0.3s linear;
		position: relative;
		transform-origin: 1px;

		&:first-child {
			transform: ${({ isOpen }) => (isOpen ? "rotate(45deg)" : "rotate(0)")};
		}

		&:nth-child(2) {
			opacity: ${({ isOpen }) => (isOpen ? "0" : "1")};
			transform: ${({ isOpen }) =>
				isOpen ? "translateX(20px)" : "translateX(0)"};
		}

		&:nth-child(3) {
			transform: ${({ isOpen }) => (isOpen ? "rotate(-45deg)" : "rotate(0)")};
		}
	}
`

export default HamburgerMenu
