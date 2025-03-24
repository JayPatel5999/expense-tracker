import styled from "styled-components"
import bg from "./img/bg.png"
import { MainLayout } from "./styles/Layouts"
import Orb from "./components/Orb/Orb"
import Navigation from "./components/Navigation/Navigation"
import { useMemo, useState } from "react"

function App() {
	const [active, setActive] = useState(1)

	const OrbMemo = useMemo(() => {
		return <Orb />
	}, [])

	return (
		<AppStyled bg={bg} className="App">
			{OrbMemo}
			<MainLayout>
				<h1 id="app-title">Expense Tracker </h1>
				<Navigation active={active} setActive={setActive} />
			</MainLayout>
		</AppStyled>
	)
}

const AppStyled = styled.div`
	height: 100vh;
	background-image: url(${(props) => props.bg});
	position: relative;
`
export default App
