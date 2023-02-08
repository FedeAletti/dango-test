import { useUIContext } from "context/UIOptionsContext/UIOptionContext"
import Image from "next/image"
import Link from "next/link"
import { useContext, useEffect, useState } from "react"
import { TitleOptions } from "."
import { Counter } from "./Counter"

export const Card = ({
	id,
	title,
	description,
	image,
	price,
	linkTo,
	stock,
}) => {
	const buttonClass =
		"bg-fuchsia-200 hover:bg-fuchsia-100 hover:shadow-lg focus:bg-fuchsia-400 focus:shadow-lg border-2 border-slate-800 text-dark font-bold px-7 py-3 rounded shadow-md focus:outline-none active:bg-fuchsia-500 transition duration-150 ease-in-out"

	const { setSelectedTitle, selectedTitle } = useUIContext()

	const [editTitle, setEditTitle] = useState(title)

	const changeTitle = () => {
		// change title using context
		setSelectedTitle(title)
	}

	useEffect(() => {
		setEditTitle(selectedTitle)
	}, [selectedTitle])

	return (
		<div className="max-w-sm rounded overflow-hidden shadow-lg border-2 border-slate-800 min-h-full bg-white py-3">
			<div className="rounded-lg">
				<Image className="" src={image} alt={title} width={500} height={500} />
			</div>
			<div className="px-4 py-4">
				<div className="flex flex-col mb-3">
					<TitleOptions title={title.content} size={title.fontSize} />
				</div>

				<div className="flex justify-start items-center gap-3 pb-3">
					<p className="text-gray-700 font-bold text-lg">${price}</p>
					<Counter id={id} quantity={1} stock={stock} />
				</div>
				<p className="text-gray-700 text-base">{description}</p>
				<div className="px-6 pt-4 pb-2 flex align-bottom justify-center">
					<button type="button" className={buttonClass}>
						Add to cart
					</button>
				</div>
				<div className="flex justify-center">
					<Link
						href={linkTo}
						target="_blank"
						className="inline-block underline font-medium">
						Learn More
					</Link>
				</div>
			</div>
		</div>
	)
}
