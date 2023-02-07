import { MainLayout } from "components/layouts"
import { Card, TitleOptions } from "components/ui"

const cardsData = [
	{
		id: 1,
		title: "Tourmaline & Eucaliptus Bar Soap",
		price: 12.0,
		image: "/images/soap.jpg",
		description:
			"Recharge your skin with the super energizing power of finely crushed tourmaline powder blended with natural complexion",
		linkTo: "www.google.com",
	},
	{
		id: 2,
		title: "Tourmaline & Argan Oil Bar Soap",
		price: 12.0,
		image: "/images/soap.jpg",
		description:
			"Recharge your skin with the super energizing power of finely crushed tourmaline powder blended with natural complexion",
		linkTo: "www.google.com",
	},
	{
		id: 3,
		title: "Tourmaline & Tea Tree Bar Soap",
		price: 12.0,
		image: "/images/soap.jpg",
		description:
			"Recharge your skin with the super energizing power of finely crushed tourmaline powder blended with natural complexion",
		linkTo: "www.google.com",
	},
	{
		id: 4,
		title: "Tourmaline & Unscented Bar Soap",
		price: 12.0,
		image: "/images/soap.jpg",
		description:
			"Recharge your skin with the super energizing power of finely crushed tourmaline powder blended with natural complexion",
		linkTo: "www.google.com",
	},
	{
		id: 5,
		title: "Tourmaline & Tea Tree Bar Soap",
		price: 12.0,
		image: "/images/soap.jpg",
		description:
			"Recharge your skin with the super energizing power of finely crushed tourmaline powder blended with natural complexion",
		linkTo: "www.google.com",
	},
	{
		id: 6,
		title: "Tourmaline & Unscented Bar Soap",
		price: 12.0,
		image: "/images/soap.jpg",
		description:
			"Recharge your skin with the super energizing power of finely crushed tourmaline powder blended with natural complexion",
		linkTo: "www.google.com",
	},
]

const totalAux = 12041

export default function Home() {
	return (
		<>
			<MainLayout
				pageTitle="Dango - Test"
				pageDescription="Recruitment Test Task">
				<div className="container ">
					<div className="flex justify-between items-center">
						<h1 className="text-3xl font-bold underline">Hello world!</h1>
						<h2>Total: ${totalAux}</h2>
					</div>
					<hr />
					<div className="grid grid-cols-12 gap-5">
						<div className="col-span-12 md:col-span-3">
							{/* Acá configuración de tamaño de titulos y texto */}
							<TitleOptions />
						</div>
						<div className="col-span-12 md:col-span-9 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 place-items-center py-4">
							{cardsData.map((card) => (
								<Card
									key={card.id}
									title={card.title}
									description={card.description}
									image={card.image}
									price={card.price}
									linkTo={card.linkTo}
								/>
							))}
						</div>
					</div>
				</div>
			</MainLayout>
		</>
	)
}
