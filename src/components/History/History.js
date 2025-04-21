import React from "react"
import { useGlobalContext } from "../../context/globalContext"
import styled from "styled-components"
import { dollar } from "../../utils/icons"

function History() {
	const { transactionHistory } = useGlobalContext()
	const [...history] = transactionHistory()

	return (
		<HistoryStyled>
			<h2>Recent Transactions</h2>
			{history.map((item) => {
				const { _id, title, amount, type } = item
				return (
					<div key={_id} className="history-item">
						<p style={{ color: type === "expense" ? "red" : "green" }}>
							{title}
						</p>
						<p style={{ color: type === "expense" ? "red" : "green" }}>
							{type === "expense" ? `- ${amount}` : `+ ${amount}`}
							&nbsp;{dollar}
						</p>
					</div>
				)
			})}
		</HistoryStyled>
	)
}

const HistoryStyled = styled.div`
	display: flex;
	flex-direction: column;
	gap: 1rem;
	
	h2 {
		font-family: 'Nunito', sans-serif;
		color: var(--primary-color);
		font-size: 1.5rem;
		font-weight: 700;
		margin-bottom: 1.5rem;
	}

	.history-item {
		background: white;
		border: 2px solid #FFFFFF;
		box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
		padding: 1rem;
		border-radius: 20px;
		display: flex;
		justify-content: space-between;
		align-items: center;

		p {
			font-family: 'Nunito', sans-serif;
			font-size: 1.1rem;
			font-weight: 600;
		}
	}
`

export default History
