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
			<div className="history-list">
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
			</div>
		</HistoryStyled>
	)
}

const HistoryStyled = styled.div`
	display: flex;
	flex-direction: column;
	gap: 1rem;
	
	h2 {
		margin: 1rem 0;
		display: flex;
		align-items: center;
		justify-content: center;
		background: #FCF6F9;
		border: 2px solid #FFFFFF;
		box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
		border-radius: 20px;
		padding: 1rem;
		font-size: 1.5rem;
	}

	.history-list {
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}

	.history-item {
		background: #FCF6F9;
		border: 2px solid #FFFFFF;
		box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
		padding: 1rem;
		border-radius: 20px;
		display: flex;
		justify-content: space-between;
		align-items: center;

		p {
			font-size: 1.2rem;
			font-weight: 600;
		}
	}

	@media (max-width: 1024px) {
		width: 100%;
		
		.history-item {
			flex-direction: column;
			gap: 0.5rem;
			text-align: center;
		}
	}
`

export default History
