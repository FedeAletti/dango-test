import { useUIContext } from "context/UIOptionsContext/UIOptionContext"
import { useEffect, useState } from "react"
import "./styles.module.css"

export const TitleOptions = () => {
	const { selectedTitle, size, setSize, setTitle } = useUIContext()

	const [data, setData] = useState()

	useEffect(() => {
		setData(selectedTitle)
	}, [selectedTitle])

	const handleChange = (value) => {
		setSize(value)
	}

	// const handleChangeComplete = () => {
	// 	console.log("Change event completed")
	// }

	const handleTitleChange = (value) => {
		console.log(data)
		setData(value)
	}

	return (
		<div className="grid place-content-center">
			<div className="flex flex-col items-start">
				<p className="text-lg font-bold py-3">Font size: {size || 14}</p>
				<input
					type="range"
					min={14}
					max={48}
					step={1}
					value={size || 14}
					onChange={(e) => handleChange(e.target.value)}
				/>
			</div>
			<hr className="my-3" />

			<div>
				<input
					type="text"
					placeholder="Edit your product title"
					className="p-2"
					onChange={(e) => handleTitleChange(e.target.value)}
					value={selectedTitle}
				/>
			</div>
		</div>
	)
}
