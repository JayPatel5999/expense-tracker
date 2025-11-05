import React, { useState } from "react"
import styled from "styled-components"
import { useFormik } from "formik"
import * as Yup from "yup"
import axios from "axios"
import { useNavigate } from "react-router-dom"
import { useAuth } from "../../context/authContext"

function Register() {
	const [error, setError] = useState("")
	const navigate = useNavigate()
	const { login } = useAuth()

	const formik = useFormik({
		initialValues: {
			name: "",
			email: "",
			password: "",
			confirmPassword: "",
		},
		validationSchema: Yup.object({
			name: Yup.string()
				.required("Required")
				.max(50, "Must be 50 characters or less"),
			email: Yup.string().email("Invalid email address").required("Required"),
			password: Yup.string()
				.min(6, "Must be at least 6 characters")
				.required("Required"),
			confirmPassword: Yup.string()
				.oneOf([Yup.ref("password"), null], "Passwords must match")
				.required("Required"),
		}),
		onSubmit: async (values) => {
			try {
				const response = await axios.post(
					"http://localhost:5000/api/v1/auth/register",
					{
						name: values.name,
						email: values.email,
						password: values.password,
					}
				)
				if (response.data.token) {
					login(response.data.token)
					navigate("/dashboard")
				}
			} catch (err) {
				setError(err.response?.data?.message || "Registration failed")
			}
		},
	})

	return (
		<RegisterStyled>
			<div className="register-content">
				<h2>Create Account</h2>
				{error && <div className="error">{error}</div>}
				<form onSubmit={formik.handleSubmit}>
					<div className="form-group">
						<input
							type="text"
							name="name"
							placeholder="Full Name"
							onChange={formik.handleChange}
							onBlur={formik.handleBlur}
							value={formik.values.name}
						/>
						{formik.touched.name && formik.errors.name && (
							<div className="error">{formik.errors.name}</div>
						)}
					</div>
					<div className="form-group">
						<input
							type="email"
							name="email"
							placeholder="Email"
							onChange={formik.handleChange}
							onBlur={formik.handleBlur}
							value={formik.values.email}
						/>
						{formik.touched.email && formik.errors.email && (
							<div className="error">{formik.errors.email}</div>
						)}
					</div>
					<div className="form-group">
						<input
							type="password"
							name="password"
							placeholder="Password"
							onChange={formik.handleChange}
							onBlur={formik.handleBlur}
							value={formik.values.password}
						/>
						{formik.touched.password && formik.errors.password && (
							<div className="error">{formik.errors.password}</div>
						)}
					</div>
					<div className="form-group">
						<input
							type="password"
							name="confirmPassword"
							placeholder="Confirm Password"
							onChange={formik.handleChange}
							onBlur={formik.handleBlur}
							value={formik.values.confirmPassword}
						/>
						{formik.touched.confirmPassword &&
							formik.errors.confirmPassword && (
								<div className="error">{formik.errors.confirmPassword}</div>
							)}
					</div>
					<div className="form-group">
						<button type="submit" disabled={formik.isSubmitting}>
							Register
						</button>
					</div>
					<div className="form-links">
						<a href="/login">Already have an account? Login</a>
					</div>
				</form>
			</div>
		</RegisterStyled>
	)
}

const RegisterStyled = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	height: 100vh;
	background: #fcf6f9;

	.register-content {
		background: white;
		border-radius: 20px;
		padding: 2rem;
		width: 100%;
		max-width: 400px;
		box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);

		h2 {
			text-align: center;
			margin-bottom: 2rem;
			color: var(--primary-color);
		}

		.form-group {
			margin-bottom: 1.5rem;

			input {
				width: 100%;
				padding: 0.8rem;
				border: 2px solid #f2f2f2;
				border-radius: 10px;
				outline: none;
				font-size: 1rem;

				&:focus {
					border-color: var(--primary-color);
				}
			}

			button {
				width: 100%;
				padding: 0.8rem;
				background: var(--primary-color);
				border: none;
				border-radius: 10px;
				color: white;
				font-size: 1.1rem;
				cursor: pointer;
				transition: all 0.3s ease;

				&:hover {
					background: var(--primary-color2);
				}

				&:disabled {
					opacity: 0.7;
					cursor: not-allowed;
				}
			}
		}

		.error {
			color: red;
			font-size: 0.9rem;
			margin-top: 0.3rem;
		}

		.form-links {
			text-align: center;
			margin-top: 1rem;

			a {
				color: var(--primary-color);
				text-decoration: none;
				font-size: 0.9rem;

				&:hover {
					text-decoration: underline;
				}
			}
		}
	}
`

export default Register
