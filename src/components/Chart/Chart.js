import React from "react"
import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend,
	ArcElement,
} from "chart.js"
import { Line } from "react-chartjs-2"
import styled from "styled-components"
import { useGlobalContext } from "../../context/globalContext"
import { dateFormat } from "../../utils/dateFormat"

ChartJS.register(
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend,
	ArcElement
)

function Chart() {
	const { incomes, expenses } = useGlobalContext()

	const data = {
		labels: incomes.map((inc) => {
			const { date } = inc
			return dateFormat(date)
		}),
		datasets: [
			{
				label: "Income",
				data: [...incomes.map((income) => income.amount)],
				backgroundColor: "green",
				tension: 0.2,
			},
			{
				label: "Expense",
				data: [...expenses.map((expense) => expense.amount)],
				backgroundColor: "red",
				tension: 0.2,
			}
		],
	}

	return (
		<ChartStyled>
			<Line 
				data={data} 
				options={{
					maintainAspectRatio: false,
					responsive: true,
					plugins: {
						legend: {
							position: 'top',
							labels: {
								font: {
									family: 'Nunito',
									size: 14,
									weight: 600
								}
							}
						},
						title: {
							display: true,
							text: 'Income vs Expenses',
							font: {
								family: 'Nunito',
								size: 20,
								weight: 700
							}
						}
					},
					scales: {
						x: {
							ticks: {
								font: {
									family: 'Nunito'
								}
							}
						},
						y: {
							ticks: {
								font: {
									family: 'Nunito'
								}
							}
						}
					}
				}}
			/>
		</ChartStyled>
	)
}

const ChartStyled = styled.div`
	background: #FCF6F9;
	border: 2px solid #FFFFFF;
	box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
	padding: 1rem;
	border-radius: 20px;
	height: 400px;
	width: 100%;

	canvas {
		width: 100% !important;
		height: 100% !important;
	}
`

export default Chart
