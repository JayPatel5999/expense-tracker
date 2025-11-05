import React, { useState } from "react"
import styled from "styled-components"
import { useFormik } from "formik"
import * as Yup from "yup"
import axios from "axios"

function ForgotPassword() {
	const [status, setStatus] = useState({ type: "", message: "" })

	const formik = useFormik({
		initialValues: {
			email: "",
		},
		validationSchema: Yup.object({
			email: Yup.string().email("Invalid email address").required("Required"),
		}),
		onSubmit: async (values) => {
			try {
				const response = await axios.post(
					"http://localhost:5000/api/v1/auth/forgotpassword",
					values
				)
				setStatus({
					type: "success",
					message: "Password reset link sent to your email",
				})
			} catch (err) {
				setStatus({
					type: "error",
					message: err.response?.data?.message || "Failed to send reset link",
				})
			}
		},
	})

	return (
		<ForgotPasswordStyled>
			<div className="forgot-password-content">
				<h2>Forgot Password</h2>
				{status.message && (
					<div className={`status ${status.type}`}>{status.message}</div>
				)}
				<form onSubmit={formik.handleSubmit}>
					<div className="form-group">
						<input
							type="email"
							name="email"
							placeholder="Enter your email"
							onChange={formik.handleChange}
							onBlur={formik.handleBlur}
							value={formik.values.email}
						/>
						{formik.touched.email && formik.errors.email && (
							<div className="error">{formik.errors.email}</div>
						)}
					</div>
					<div className="form-group">
						<button type="submit" disabled={formik.isSubmitting}>
							Send Reset Link
						</button>
					</div>
					<div className="form-links">
						<a href="/login">Back to Login</a>
					</div>
				</form>
			</div>
		</ForgotPasswordStyled>
	)
}

const ForgotPasswordStyled = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	height: 100vh;
	background: #fcf6f9;

	.forgot-password-content {
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

		.status {
			padding: 1rem;
			border-radius: 10px;
			margin-bottom: 1rem;
			text-align: center;

			&.success {
				background: #d4edda;
				color: #155724;
			}

			&.error {
				background: #f8d7da;
				color: #721c24;
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

export default ForgotPassword
