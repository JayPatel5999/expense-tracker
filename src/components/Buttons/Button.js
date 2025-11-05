import React from "react"
import styled from "styled-components"

function Button({ name, icon, onClick, bg, bPad, color, bRadius }) {
	return (
		<ButtonStyled
			style={{
				background: bg,
				padding: bPad,
				color: color,
				borderRadius: bRadius,
			}}
			onClick={onClick}>
			{icon}
			{name}
		</ButtonStyled>
	)
}

const ButtonStyled = styled.button`
	outline: none;
	border: none;
	font-family: inherit;
	font-size: inherit;
	display: flex;
	align-items: center;
	gap: 0.5rem;
	cursor: pointer;
	transition: all 0.4s ease-in-out;

	&:hover {
		background: #42ad00 !important;
		color: #fff !important;
	}

	/* Make buttons easier to tap on small screens */
	@media (max-width: 480px) {
		width: 100%;
		justify-content: center;
		padding: 0.9rem 1rem !important;
	}
`

export default Button
