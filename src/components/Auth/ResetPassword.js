import React, { useState } from "react"
import styled from "styled-components"
import { useFormik } from "formik"
import * as Yup from "yup"
import axios from "axios"
import { useParams, useNavigate } from "react-router-dom"

function ResetPassword() {
	const { resettoken } = useParams()
	const [status, setStatus] = useState({ type: "", message: "" })
	const navigate = useNavigate()

	const formik = useFormik({
		initialValues: {
			password: "",
			confirmPassword: "",
		},
		validationSchema: Yup.object({
			password: Yup.string()
				.min(6, "Must be at least 6 characters")
				.required("Required"),
			confirmPassword: Yup.string()
				.oneOf([Yup.ref("password"), null], "Passwords must match")
				.required("Required"),
		}),
		onSubmit: async (values) => {
			try {
				await axios.put(
					`http://localhost:5000/api/v1/auth/resetpassword/${resettoken}`,
					{
						password: values.password,
					}
				)
				setStatus({
					type: "success",
					message: "Password reset successful! You can now login.",
				})
				setTimeout(() => navigate("/login"), 2000)
			} catch (err) {
				setStatus({
					type: "error",
					message: err.response?.data?.message || "Failed to reset password",
				})
			}
		},
	})

	return (
		<ResetPasswordStyled>
			<div className="reset-password-content">
				<h2>Reset Password</h2>
				{status.message && (
					<div className={`status ${status.type}`}>{status.message}</div>
				)}
				<form onSubmit={formik.handleSubmit}>
					<div className="form-group">
						<input
							type="password"
							name="password"
							placeholder="New Password"
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
							placeholder="Confirm New Password"
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
							Reset Password
						</button>
					</div>
				</form>
			</div>
		</ResetPasswordStyled>
	)
}

const ResetPasswordStyled = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	height: 100vh;
	background: #fcf6f9;

	.reset-password-content {
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
	}
`

export default ResetPassword
