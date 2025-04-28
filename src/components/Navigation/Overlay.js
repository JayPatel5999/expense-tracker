import React from "react"
import styled from "styled-components"

function Overlay({ isOpen, toggleMenu }) {
	return <OverlayStyled className={isOpen ? "open" : ""} onClick={toggleMenu} />
}

const OverlayStyled = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background: rgba(0, 0, 0, 0.5);
	display: none;
	z-index: 5;

	&.open {
		display: block;
	}

	@media (min-width: 769px) {
		display: none !important;
	}
`

export default Overlay
