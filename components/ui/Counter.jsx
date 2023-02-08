import { useUIContext } from "context/UIOptionsContext/UIOptionContext"
import React from "react"

export const Counter = ({ id, quantity, stock }) => {
	const { newTotal } = useUIContext()

	const updateTotal = (e) => {
		newTotal(id, parseInt(e))
	}

	return (
		<>
			{/* Make a counter for a shop */}
			<div>
				<select
					className="bg-white border-solid border-2 border-black px-2 rounded"
					name=""
					onChange={(e) => {
						updateTotal(e.target.value, e.target.key)
					}}
					id="">
					{stock !== 0 ? (
						Array.from({ length: stock }, (_, i) => (
							<option key={i + 1} value={i + 1}>
								{i + 1}
							</option>
						))
					) : (
						<option value="0">0</option>
					)}
				</select>
			</div>
		</>
	)
}
