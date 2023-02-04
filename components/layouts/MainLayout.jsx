import Head from "next/head"

export const MainLayout = ({ children, pageTitle, pageDescription }) => {
	return (
		<>
			<Head>
				<title>{pageTitle}</title>
				<meta name="description" content={pageDescription} />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<main className="">{children}</main>
		</>
	)
}
