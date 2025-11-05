import { useContext, createContext, useState, useEffect } from "react"
import { useAuth } from "./authContext"
import axios from "axios"

const BASE_URL = "http://localhost:5000/api/v1/"

const GlobalContext = createContext()

export const GlobalProvider = ({ children }) => {
	const [incomes, setIncomes] = useState([])
	const [expenses, setExpenses] = useState([])
	const [error, setError] = useState(null)
	const { user } = useAuth()

	useEffect(() => {
		// Set up axios auth header when user changes
		const token = localStorage.getItem("token")
		if (token) {
			axios.defaults.headers.common["Authorization"] = `Bearer ${token}`
		} else {
			delete axios.defaults.headers.common["Authorization"]
		}
	}, [user])

	// Income Functions
	const addIncome = async (income) => {
		const response = await axios
			.post(`${BASE_URL}add-income`, income)
			.catch((err) => {
				setError(err.response.data.message)
			})
		getIncome()
	}

	const getIncome = async () => {
		const response = await axios.get(`${BASE_URL}get-incomes`)
		setIncomes(response.data)
	}

	const deleteIncome = async (id) => {
		const response = await axios
			.delete(`${BASE_URL}delete-income/${id}`)
			.catch((err) => {
				setError(err.response.data.message)
			})
		getIncome()
	}

	const totalIncome = () => {
		let totalIncome = 0
		incomes.forEach((income) => {
			totalIncome = totalIncome + income.amount
		})
		return totalIncome
	}

	// Expense Functions
	const addExpense = async (expense) => {
		const response = await axios
			.post(`${BASE_URL}add-expense`, expense)
			.catch((err) => {
				setError(err.response.data.message)
			})
		getExpenses()
	}

	const getExpenses = async () => {
		const response = await axios.get(`${BASE_URL}get-expenses`)
		setExpenses(response.data)
	}

	const deleteExpense = async (id) => {
		const response = await axios
			.delete(`${BASE_URL}delete-expense/${id}`)
			.catch((err) => {
				setError(err.response.data.message)
			})
		getExpenses()
	}

	const totalExpense = () => {
		let totalExpense = 0
		expenses.forEach((expense) => {
			totalExpense = totalExpense + expense.amount
		})
		return totalExpense
	}

	//Total Final Amount
	const totalBalance = () => {
		return totalIncome() - totalExpense()
	}

	//Transaction Functions
	const transactionHistory = () => {
		const history = [...incomes, ...expenses]
		history.sort((a, b) => {
			return new Date(b.createdAt) - new Date(a.createdAt)
		})

		return history.slice(0, 3)
	}

	// Load data when component mounts
	useEffect(() => {
		if (typeof user !== "undefined" && user !== null) {
			getIncome()
			getExpenses()
		} else {
			setIncomes([])
			setExpenses([])
		}
	}, [user])

	return (
		<GlobalContext.Provider
			value={{
				addIncome,
				getIncome,
				deleteIncome,
				totalIncome,
				incomes,
				addExpense,
				getExpenses,
				deleteExpense,
				totalExpense,
				totalBalance,
				expenses,
				transactionHistory,
				error,
			}}>
			{children}
		</GlobalContext.Provider>
	)
}

export const useGlobalContext = () => {
	return useContext(GlobalContext)
}
