import React, { createContext, useContext, useState, useEffect } from "react"
import axios from "axios"

const AuthContext = createContext(null)

export const AuthProvider = ({ children }) => {
	const [user, setUser] = useState(null)
	const [loading, setLoading] = useState(true)

	useEffect(() => {
		const token = localStorage.getItem("token")
		if (token) {
			// Set default auth header
			axios.defaults.headers.common["Authorization"] = `Bearer ${token}`
			// Get user info
			fetchUserData()
		} else {
			setLoading(false)
		}
	}, [])

	const fetchUserData = async () => {
		try {
			const response = await axios.get("http://localhost:5000/api/v1/auth/me")
			setUser(response.data.data)
		} catch (error) {
			localStorage.removeItem("token")
			delete axios.defaults.headers.common["Authorization"]
		}
		setLoading(false)
	}

	const login = (token) => {
		localStorage.setItem("token", token)
		axios.defaults.headers.common["Authorization"] = `Bearer ${token}`
		fetchUserData()
	}

	const logout = () => {
		localStorage.removeItem("token")
		delete axios.defaults.headers.common["Authorization"]
		setUser(null)
	}

	return (
		<AuthContext.Provider value={{ user, loading, login, logout }}>
			{children}
		</AuthContext.Provider>
	)
}

export const useAuth = () => {
	const context = useContext(AuthContext)
	if (!context) {
		throw new Error("useAuth must be used within an AuthProvider")
	}
	return context
}
