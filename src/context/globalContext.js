import { useContext, createContext, useState } from "react"
import axios from "axios"

const BASE_URL = "http://localhost:5000/api/v1/"

const GlobalContext = createContext()

export const GlobalProvider = ({ children }) => {
	const [incomes, setIncomes] = useState([])
	const [expenses, setExpenses] = useState([])
	const [error, setError] = useState(null)

// Income Functions

	const addIncome = async (income) => {
		const response = await axios
			.post(`${BASE_URL}add-income`, income)
			.catch((err) => {
				setError(err.response.data.message)
			})
		getIncome()
		totalIncome()
	}

	const getIncome = async () => {
		const response = await axios.get(`${BASE_URL}get-incomes`)
		setIncomes(response.data)
		console.log(response.data)
	}

	const deleteIncome = async (id) => {
		const response = await axios
			.delete(`${BASE_URL}delete-income/${id}`)
			.catch((err) => {
				setError(err.response.data.message)
			})
		getIncome()
		totalIncome()
	}

	const totalIncome = () => {
		let totalIncome = 0
		incomes.forEach((income) => {
			totalIncome += income.amount
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
		totalExpense()
	}

	const getExpenses = async () => {
		const response = await axios.get(`${BASE_URL}get-expenses`)
		setExpenses(response.data)
		console.log(response.data)
	}

	const deleteExpense = async (id) => {
		const response = await axios
			.delete(`${BASE_URL}delete-expense/${id}`)
			.catch((err) => {
				setError(err.response.data.message)
			})
		getExpenses()
		totalExpense()
	}

	const totalExpense = () => {
		let totalExpense = 0
		expenses.forEach((expense) => {
			totalExpense += expense.amount
		})
		return totalExpense
	}
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
				expenses,
			}}>
			{children}
		</GlobalContext.Provider>
	)
}

export const useGlobalContext = () => {
	return useContext(GlobalContext)
}
