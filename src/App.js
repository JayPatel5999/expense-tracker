import styled from "styled-components"
import bg from "./img/bg.png"
import { MainLayout } from "./styles/Layouts"
import Orb from "./components/Orb/Orb"
import Navigation from "./components/Navigation/Navigation"
import { useMemo, useState } from "react"
import Dashboard from "./components/Dashboard/Dashboard"
import Incomes from "./components/Incomes/Incomes"
import Expenses from "./components/Expenses/Expenses"
import { useGlobalContext } from "./context/globalContext"
import { GlobalStyle } from "./styles/globalStyles"

function App() {
	const [active, setActive] = useState(1)

	const global = useGlobalContext()
	console.log(global)

	const displayData = () => {
		switch (active) {
			case 1:
				return <Dashboard />
			case 2:
				return <h1>Transactions</h1>
			case 3:
				return <Incomes />
			case 4:
				return <Expenses />
			default:
				return <Dashboard />
		}
	}

	const OrbMemo = useMemo(() => {
		return <Orb />
	}, [])

	return (
		<>
			<GlobalStyle />
			<AppStyled bg={bg} className="App">
				{OrbMemo}
				<h1 id="app-title">Expense Tracker </h1>
				<MainLayout>
					<Navigation active={active} setActive={setActive} />
					<main>{displayData()}</main>
				</MainLayout>
			</AppStyled>
		</>
	)
}

const AppStyled = styled.div`
	height: 100vh;
	background-image: url(${(props) => props.bg});
	position: relative;

	#app-title {
		position: relative;
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 2rem;
		margin-top: 2rem; /* Changed from -0.4rem to 2rem */
		padding-top: 1rem;
		color: var(--primary-color);
		z-index: 2;
	}

	main {
		flex: 1;
		background: rgba(252, 246, 249, 0.78);
		border: 3px solid #ffffff;
		backdrop-filter: blur(4.5px);
		border-radius: 32px;
		overflow: auto;
		overflow-x: hidden;
		padding: 2rem;
		margin-bottom: 1.5rem;
		height: calc(80vh - 2rem); /* Adjusted from 85vh to 80vh */
		&::-webkit-scrollbar {
			width: 0;
		}
	}
`
export default App

