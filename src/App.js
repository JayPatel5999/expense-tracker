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
import { AuthProvider, useAuth } from "./context/authContext"
import { GlobalProvider } from "./context/globalContext"
import {
	BrowserRouter as Router,
	Routes,
	Route,
	Navigate,
} from "react-router-dom"
import Login from "./components/Auth/Login"
import Register from "./components/Auth/Register"
import ForgotPassword from "./components/Auth/ForgotPassword"
import ResetPassword from "./components/Auth/ResetPassword"

function PrivateRoute({ children }) {
	const { user, loading } = useAuth()
	if (loading) return <div>Loading...</div>
	if (!user) return <Navigate to="/login" />
	return children
}

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
			<AuthProvider>
				<GlobalProvider>
					<Router>
						<Routes>
							<Route path="/login" element={<Login />} />
							<Route path="/register" element={<Register />} />
							<Route path="/forgot-password" element={<ForgotPassword />} />
							<Route
								path="/auth/resetpassword/:resettoken"
								element={<ResetPassword />}
							/>
							<Route
								path="/dashboard"
								element={
									<PrivateRoute>
										<Dashboard />
									</PrivateRoute>
								}
							/>
							<Route
								path="/"
								element={
									<PrivateRoute>
										<AppStyled bg={bg} className="App">
											{OrbMemo}
											<h1 id="app-title">Expense Tracker </h1>
											<MainLayout>
												<Navigation active={active} setActive={setActive} />
												<main>{displayData()}</main>
											</MainLayout>
										</AppStyled>
									</PrivateRoute>
								}
							/>
						</Routes>
					</Router>
				</GlobalProvider>
			</AuthProvider>
		</>
	)
}

const AppStyled = styled.div`
	height: 100vh;
	background-image: url(${(props) => props.bg});
	position: relative;
	overflow-x: hidden;
	overflow-y: auto;

	#app-title {
		position: relative;
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 2rem;
		margin-top: -2rem;
		padding-top: 4rem;
		color: var(--primary-color);
		font-size: clamp(1.5rem, 4vw, 2.5rem);
	}

	main {
		flex: 1;
		background: rgba(252, 246, 249, 0.78);
		border: 3px solid #ffffff;
		backdrop-filter: blur(4.5px);
		border-radius: 2rem;
		padding: clamp(1rem, 4vw, 2rem);
		margin: clamp(0.5rem, 2vw, 1.5rem);
		height: auto;
		min-height: 60vh;
		max-height: 80vh;
		overflow-y: auto;
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}

	@media (max-width: 1024px) {
		main {
			padding: 1rem;
			margin: 0.5rem;
			border-radius: 1.5rem;
		}
	}

	@media (max-width: 768px) {
		height: auto;
		#app-title {
			padding-top: 2rem;
			font-size: 2rem;
		}
		main {
			padding: 0.5rem;
			margin: 0.25rem;
			border-radius: 1rem;
		}
	}

	@media (max-width: 480px) {
		#app-title {
			font-size: 1.2rem;
			padding-top: 1rem;
		}
		main {
			padding: 0.25rem;
			margin: 0.1rem;
			border-radius: 0.5rem;
		}
	}
`
export default App
