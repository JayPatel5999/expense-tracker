import React, { useEffect } from "react"
import styled from "styled-components"
import { InnerLayout } from "../../styles/Layouts"
import { useGlobalContext } from "../../context/globalContext"
import Form from "../Form/Form"
import IncomeItem from "../IncomeItem/IncomeItem"

function Incomes() {
	const { addIncome, incomes, getIncome, deleteIncome, totalIncome } =
		useGlobalContext()

	useEffect(() => {
		getIncome()
	}, [])
	return (
		<IncomesStyled>
			<InnerLayout>
				<h1>Incomes</h1>
				<h2 className="total-income">
					Total Income: <span>${totalIncome()}</span>
				</h2>
				<div className="income-content">
					<div className="form-container">
						<Form />
					</div>
					<div className="incomes">
						{incomes.map((income) => {
							const { _id, title, amount, date, category, description } = income
							return (
								<IncomeItem
									key={_id}
									id={_id}
									title={title}
									description={description}
									amount={amount}
									date={date}
									category={category}
									indicatorColor={"#42AD00"}
									deleteItem={deleteIncome}
								/>
							)
						})}
					</div>
				</div>
			</InnerLayout>
		</IncomesStyled>
	)
}

const IncomesStyled = styled.div`
	display: flex;
	overflow: auto;
	.total-income {
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
	.income-content {
		display: flex;
		gap: 2rem;
		width: 100%;
		.incomes {
			flex: 1;
		}
	}

	@media (max-width: 768px) {
		.income-content {
			flex-direction: column;
			gap: 1rem;
		}
		.form-container {
			width: 100%;
		}
	}
`

export default Incomes
