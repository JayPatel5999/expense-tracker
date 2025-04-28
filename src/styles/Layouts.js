import styled from "styled-components"

export const MainLayout = styled.div`
	padding: 2rem;
	height: 100%;
	display: flex;
	gap: 1.5rem; // Reduced from 2rem
	
	@media (max-width: 768px) {
		padding: 1rem;
		flex-direction: column;
		gap: 1rem;

		& > nav {
			margin-bottom: 1rem;
		}
	}
`

export const InnerLayout = styled.div`
	padding: 0 1.5rem;
	width: 100%;
`
