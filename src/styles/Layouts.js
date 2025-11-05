import styled from "styled-components"

export const MainLayout = styled.div`
	padding: clamp(1rem, 4vw, 2rem);
	/* allow the main layout to grow on small screens instead of forcing a fixed height */
	min-height: calc(100vh - 4rem);
	display: flex;
	gap: clamp(0.5rem, 2vw, 1.5rem);
	transition: all 0.3s ease;

	// Large desktop
	@media (min-width: 1200px) {
		padding: 2.5rem 4rem;
		gap: 2rem;
	}

	// Desktop
	@media (max-width: 1200px) and (min-width: 1025px) {
		padding: 2rem 2.5rem;
		gap: 1.5rem;
	}

	// Tablet landscape
	@media (max-width: 1024px) and (min-width: 769px) {
		padding: 1.5rem 1.5rem;
		gap: 1rem;
	}

	// Tablet portrait
	@media (max-width: 768px) and (min-width: 601px) {
		flex-direction: column;
		padding: 1rem 0.5rem;
		gap: 0.75rem;
		& > nav {
			margin-bottom: 1rem;
		}
	}

	// Large phones
	@media (max-width: 600px) and (min-width: 481px) {
		flex-direction: column;
		padding: 0.75rem 0.25rem;
		gap: 0.5rem;
	}

	// Small phones
	@media (max-width: 480px) {
		flex-direction: column;
		padding: 0.5rem 0.1rem;
		gap: 0.25rem;
	}
`

export const InnerLayout = styled.div`
	padding: 0 clamp(0.5rem, 2vw, 1.5rem);
	width: 100%;
	transition: padding 0.3s ease;

	@media (max-width: 1024px) {
		padding: 0 1rem;
	}
	@media (max-width: 768px) {
		padding: 0 0.5rem;
	}
	@media (max-width: 480px) {
		padding: 0 0.1rem;
	}
`
