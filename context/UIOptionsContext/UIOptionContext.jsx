import React, { createContext, useContext, useState, useEffect } from "react"

const UIContext = createContext()

export const useUIContext = () => useContext(UIContext)

const UIContextProvider = ({ children }) => {
	const [selectedTitle, setSelectedTitle] = useState()

	const [size, setSize] = useState(14)

	const [title, setTitle] = useState()

	useEffect(() => {
		console.log(selectedTitle)
	}, [selectedTitle])

	return (
		<UIContext.Provider
			value={{
				size,
				setSize,
				setSelectedTitle,
				selectedTitle,
				title,
				setTitle,
			}}>
			{children}
		</UIContext.Provider>
	)
}

export default UIContextProvider
