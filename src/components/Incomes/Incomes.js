import React, { useEffect } from "react"
import styled from "styled-components"
import { InnerLayout } from "../../styles/Layouts"
import { useGlobalContext } from "../../context/globalContext"
import Form from "../Form/Form"
import IncomeItem from "../IncomeItem/IncomeItem"

function Incomes() {
	const { addIncome, incomes, getIncome } = useGlobalContext()

	useEffect(() => {
		getIncome()
	}, [incomes])
	return (
		<IncomesStyled>
			<InnerLayout>
				<h1>Incomes</h1>
				<div className="income-content">
					<div className="form-container">
						<Form />
					</div>
					<div className="incomes">
						{incomes.map((income) => {
							const { _id, title, amount, date, category, description } = income
							return <IncomeItem />
						})}
					</div>
				</div>
			</InnerLayout>
		</IncomesStyled>
	)
}

const IncomesStyled = styled.div``

export default Incomes
