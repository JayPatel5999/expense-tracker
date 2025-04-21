import React from "react"
import styled from "styled-components"
import { InnerLayout } from "../../styles/Layouts"
import Chart from "../Chart/Chart"
import { dollar } from "../../utils/icons"
import { useGlobalContext } from "../../context/globalContext"
import History from "../History/History"

function Dashboard() {
	const { totalIncome, totalExpense, totalBalance } = useGlobalContext()
	return (
		<DashboardStyled>
			<InnerLayout>
				<h1>All Transactions</h1>
				<div className="stats-container">
					<div className="top-section">
						<div className="chart-and-income">
							<div className="chart-container">
								<Chart />
							</div>
							<div className="amount-container">
								<div className="income">
									<h2>Total Income</h2>
									<p>
										{dollar} {totalIncome()}
									</p>
								</div>
								<div className="expense">
									<h2>Total Expense</h2>
									<p>
										{dollar} {totalExpense()}
									</p>
								</div>
								<div className="balance">
									<h2>Total Balance</h2>
									<p>
										{dollar} {totalBalance()}
									</p>
								</div>
							</div>
						</div>
						<div className="history-container">
							<History />
						</div>
					</div>
				</div>
			</InnerLayout>
		</DashboardStyled>
	)
}

const DashboardStyled = styled.div`
	height: 100%;
	overflow-y: auto;

	/* Hide scrollbar for Chrome, Safari and Opera */
	&::-webkit-scrollbar {
		display: none;
	}

	/* Hide scrollbar for IE, Edge and Firefox */
	-ms-overflow-style: none; /* IE and Edge */
	scrollbar-width: none; /* Firefox */

	.stats-container {
		display: flex;
		flex-direction: column;
		gap: 2rem;
		margin-top: 2rem;
		padding-bottom: 2rem;
	}

	.top-section {
		display: flex;
		gap: 2rem;

		.chart-and-income {
			flex: 2;
			display: flex;
			flex-direction: column;
			gap: 2rem;
		}

		.history-container {
			flex: 1;
			min-width: 300px;
			background: #fcf6f9;
			border: 2px solid #ffffff;
			box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
			border-radius: 20px;
			padding: 1rem;
		}
	}

	.chart-container {
		padding: 1rem;
		border-radius: 20px;
		height: 300px;
		width: 95%;
	}

	.amount-container {
		display: flex;
		gap: 2rem;
		margin-top: 8rem;

		.income,
		.expense,
		.balance {
			flex: 1;
			background: #fcf6f9;
			border: 2px solid #ffffff;
			box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
			border-radius: 20px;
			padding: 1rem;
			text-align: center;

			h2 {
				font-family: "Nunito", sans-serif;
				font-size: 1.3rem;
				font-weight: 700;
				color: var(--primary-color);
				margin-bottom: 0.5rem;
			}

			p {
				font-family: "Nunito", sans-serif;
				font-size: 2rem;
				font-weight: 700;
				color: var(--color-green);
			}
		}

		.expense p {
			color: var(--color-delete);
		}

		.balance p {
			color: var(--primary-color);
		}
	}

	h1 {
		font-family: "Nunito", sans-serif;
		font-size: 2rem;
		font-weight: 700;
		color: var(--primary-color);
		margin-bottom: 1rem;
		padding-top: 1rem;
	}
`

export default Dashboard
