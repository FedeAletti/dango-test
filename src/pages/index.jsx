import { MainLayout } from "components/layouts"
import { Card, TitleOptions } from "components/ui"
import { useUIContext } from "context/UIOptionsContext/UIOptionContext"
import { useEffect } from "react"

export default function Home() {
	const { products, totalShop } = useUIContext()
	let totalAux = totalShop.toFixed(2)

	return (
		<>
			<MainLayout
				pageTitle="Dango - Test"
				pageDescription="Recruitment Test Task">
				<div className="container ">
					<div className="flex justify-around items-center my-5">
						<h1 className="text-3xl font-bold text-green-800 ">
							Total: ${totalAux}
						</h1>
						<h2 className="font-bold underline">
							Recruitment Test - Dango Digital
						</h2>
					</div>
					<hr />
					<div>
						<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 place-items-center py-4">
							{products.length > 0 ? (
								products.map((card) => (
									<Card
										key={card.id}
										id={card.id}
										title={card.title}
										description={card.description}
										image={card.image}
										price={card.price}
										linkTo={card.linkTo}
										stock={card.stock}
									/>
								))
							) : (
								<h1>No hay productos disponibles :(</h1>
							)}
						</div>
					</div>
				</div>
			</MainLayout>
		</>
	)
}
