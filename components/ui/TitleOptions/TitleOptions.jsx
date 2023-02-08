import { useUIContext } from "context/UIOptionsContext/UIOptionContext"
import { useEffect, useState } from "react"
import "./styles.module.css"

export const TitleOptions = ({ title, size }) => {
	const { changeProductTitle, setSelectedTitle } = useUIContext()

	const [titleEdit, setTitleEdit] = useState(title)
	const [sizeEdit, setSizeEdit] = useState(size)
	const [isEditting, setIsEditting] = useState(false)

	const handleSizeChange = (value) => {
		setSizeEdit(value)
	}

	const changeTitle = (e) => {
		e.preventDefault()
		changeProductTitle({ title: titleEdit, size: sizeEdit })
		setSelectedTitle(undefined)
		setIsEditting(false)
	}

	return (
		<>
			<div className="card-title">
				<h2
					className="font-bold text-xl mb-2"
					style={{ fontSize: `${sizeEdit}px` }}>
					{titleEdit}
				</h2>
				<button onClick={() => setIsEditting(!isEditting)}>
					<svg
						className="h-5"
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 512 512">
						<path d="M362.7 19.3L314.3 67.7 444.3 197.7l48.4-48.4c25-25 25-65.5 0-90.5L453.3 19.3c-25-25-65.5-25-90.5 0zm-71 71L58.6 323.5c-10.4 10.4-18 23.3-22.2 37.4L1 481.2C-1.5 489.7 .8 498.8 7 505s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L421.7 220.3 291.7 90.3z"></path>
					</svg>
				</button>
			</div>
			{isEditting && (
				<form className="my-3" onSubmit={changeTitle}>
					<label
						htmlFor="search"
						className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">
						Search
					</label>
					<div className="relative">
						<input
							type="text"
							autoComplete="off"
							className="block text-ellipsis w-full p-4 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
							placeholder="Search"
							value={titleEdit}
							onChange={(e) => setTitleEdit(e.target.value)}
							required
						/>
					</div>
					<hr className="my-3" />
					<div className="flex justify-around items-center">
						<fieldset className="flex flex-col content-center">
							<p className="text-lg font-bold py-3">Font size: {sizeEdit}</p>
							<input
								type="range"
								min={14}
								max={36}
								step={1}
								value={sizeEdit}
								// disabled={selectedTitle === undefined}
								onChange={(e) => handleSizeChange(e.target.value)}
							/>
						</fieldset>
						<button
							onClick={(e) => changeTitle(e)}
							className="h-10 text-white right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
							Edit
						</button>
					</div>

					<hr className="my-3" />
				</form>
			)}
		</>
	)
}
