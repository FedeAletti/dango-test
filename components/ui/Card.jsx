import { useUIContext } from "context/UIOptionsContext/UIOptionContext"
import Image from "next/image"
import Link from "next/link"
import { useContext } from "react"
import { Counter } from "./Counter"

export const Card = ({ title, description, image, price, linkTo }) => {
	const buttonClass =
		"bg-fuchsia-200 hover:bg-fuchsia-100 hover:shadow-lg focus:bg-fuchsia-400 focus:shadow-lg border-2 border-slate-800 text-dark font-bold px-7 py-3 rounded shadow-md focus:outline-none active:bg-fuchsia-500 transition duration-150 ease-in-out"

	const { setSelectedTitle } = useUIContext()

	const changeTitle = () => {
		// change title using context
		setSelectedTitle(title)
	}

	return (
		<div className="max-w-sm rounded overflow-hidden shadow-lg border-2 border-slate-800 min-h-full bg-white py-3">
			<div className="rounded-lg">
				<Image className="" src={image} alt={title} width={500} height={500} />
			</div>
			<div className="px-4 py-4">
				<div className="flex">
					<h2 className="font-bold text-xl mb-2">{title}</h2>
					<div className="hover:cursor-pointer" onClick={changeTitle}>
						<svg
							className="h-10"
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 512 512">
							<path d="M362.7 19.3L314.3 67.7 444.3 197.7l48.4-48.4c25-25 25-65.5 0-90.5L453.3 19.3c-25-25-65.5-25-90.5 0zm-71 71L58.6 323.5c-10.4 10.4-18 23.3-22.2 37.4L1 481.2C-1.5 489.7 .8 498.8 7 505s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L421.7 220.3 291.7 90.3z" />
						</svg>
					</div>
				</div>

				<div className="flex justify-start items-center gap-3 pb-3">
					<p className="text-gray-700 font-bold text-lg">${price}</p>
					<Counter quantity={1} />
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
