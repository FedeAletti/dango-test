import Head from "next/head"
import Image from "next/image"
import { Inter } from "@next/font/google"
import { MainLayout } from "components/layouts"
import { Card } from "components/ui"

const cardsData = [
	{
		id: 1,
		title: "Tourmaline & Eucaliptus Bar Soap",
		price: "$ 12.00",
		image: "/images/soap.jpg",
		description:
			"Recharge your skin with the super energizing power of finely crushed tourmaline powder blended with natural complexion",
	},
	{
		id: 2,
		title: "Tourmaline & Argan Oil Bar Soap",
		price: "$ 12.00",
		image: "/images/soap.jpg",
		description:
			"Recharge your skin with the super energizing power of finely crushed tourmaline powder blended with natural complexion",
	},
	{
		id: 3,
		title: "Tourmaline & Tea Tree Bar Soap",
		price: "$ 12.00",
		image: "/images/soap.jpg",
		description:
			"Recharge your skin with the super energizing power of finely crushed tourmaline powder blended with natural complexion",
	},
	{
		id: 4,
		title: "Tourmaline & Unscented Bar Soap",
		price: "$ 12.00",
		image: "/images/soap.jpg",
		description:
			"Recharge your skin with the super energizing power of finely crushed tourmaline powder blended with natural complexion",
	},
	{
		id: 5,
		title: "Tourmaline & Tea Tree Bar Soap",
		price: "$ 12.00",
		image: "/images/soap.jpg",
		description:
			"Recharge your skin with the super energizing power of finely crushed tourmaline powder blended with natural complexion",
	},
	{
		id: 6,
		title: "Tourmaline & Unscented Bar Soap",
		price: "$ 12.00",
		image: "/images/soap.jpg",
		description:
			"Recharge your skin with the super energizing power of finely crushed tourmaline powder blended with natural complexion",
	},
]

export default function Home() {
	return (
		<>
			<MainLayout
				pageTitle="Dango - Test"
				pageDescription="Recruitment Test Task">
				<div className="container ">
					<h1 className="text-3xl font-bold underline">Hello world!</h1>
					<hr />
					{cardsData.map((card) => (
						<Card
							key={card.id}
							title={card.title}
							description={card.description}
							image={card.image}
							price={card.price}
						/>
					))}
				</div>
			</MainLayout>
		</>
	)
}
