import React, { createContext, useContext, useState, useEffect } from "react"
import prods from "../../utils/mockData.json"

const UIContext = createContext()

export const useUIContext = () => useContext(UIContext)

const UIContextProvider = ({ children }) => {
	const [products, setProducts] = useState([])

	const [selectedTitle, setSelectedTitle] = useState()

	const [totalShop, setTotalShop] = useState(0)

	// seteo inicial de los productos y total con los precios y cantidad original
	useEffect(() => {
		setProducts(prods)
		calculateTotal(prods)
	}, [])

	const changeProductTitle = (objTitle) => {
		const newProducts = products.map((product) => {
			if (product.title === selectedTitle) {
				return { ...product, title: { ...objTitle } }
			}
			return product
		})
		setProducts(newProducts)
	}

	const newTotal = (id, quantity) => {
		const newProducts = products.map((product) => {
			if (product.id === id) {
				return { ...product, quantity }
			}
			return product
		})

		setProducts(newProducts)
		calculateTotal(newProducts)
	}

	// calculate the total price of all products
	const calculateTotal = (products) => {
		let total = 0
		products.forEach((product) => {
			if (product.quantity > 0) {
				total += product.price * product.quantity
			} else {
				total += product.price
			}
		})
		setTotalShop(total)
	}

	return (
		<UIContext.Provider
			value={{
				products,
				setSelectedTitle,
				changeProductTitle,
				calculateTotal,
				newTotal,
				totalShop,
			}}>
			{children}
		</UIContext.Provider>
	)
}

export default UIContextProvider
