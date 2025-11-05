import React, { useEffect } from "react"
import styled from "styled-components"
import { InnerLayout } from "../../styles/Layouts"
import { useGlobalContext } from "../../context/globalContext"
import ExpenseForm from "../Form/ExpenseForm"
import ExpenseItem from "../ExpenseItem/ExpenseItem"

function Expenses() {
	const { addExpense, expenses, getExpenses, deleteExpense, totalExpense } =
		useGlobalContext()

	useEffect(() => {
		getExpenses()
	}, [])
	return (
		<ExpensesStyled>
			<InnerLayout>
				<h1>Expenses</h1>
				<h2 className="total-expense">
					Total Expenses: <span>${totalExpense()}</span>
				</h2>
				<div className="expense-content">
					<div className="form-container">
						<ExpenseForm />
					</div>
					<div className="expenses">
						{expenses.map((expense) => {
							const { _id, title, amount, date, category, description } =
								expense
							return (
								<ExpenseItem
									key={_id}
									id={_id}
									title={title}
									description={description}
									amount={amount}
									date={date}
									category={category}
									indicatorColor={"#42AD00"}
									deleteItem={deleteExpense}
									type="expense"
								/>
							)
						})}
					</div>
				</div>
			</InnerLayout>
		</ExpensesStyled>
	)
}

const ExpensesStyled = styled.div`
	display: flex;
	overflow: auto;
	.total-expense {
		display: flex;
		justify-content: center;
		align-items: center;
		background: #fcf6f9;
		border: solid 2px #ffffff;
		box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
		border-radius: 20px;
		padding: 1rem;
		margin: 1rem 0;
		font-size: 2rem;
		gap: 0.5rem;
		font-family: "Nunito", sans-serif !important;

		h2 {
			font-family: "Nunito", sans-serif !important;
		}

		span {
			font-size: 2.5rem;
			font-weight: 800;
			color: var(--color-green);
			font-family: "Nunito", sans-serif !important;
		}
	}
	.expense-content {
		display: flex;
		gap: 2rem;
		width: 100%;
		.expenses {
			flex: 1;
		}
	}

	@media (max-width: 768px) {
		.expense-content {
			flex-direction: column;
			gap: 1rem;
		}
		.form-container {
			width: 100%;
		}
	}
`

export default Expenses
