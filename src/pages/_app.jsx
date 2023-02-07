import "@/styles/globals.css"
import UIContextProvider from "context/UIOptionsContext/UIOptionContext"

export default function App({ Component, pageProps }) {
	return (
		<>
			<UIContextProvider>
				<Component {...pageProps} />
			</UIContextProvider>
		</>
	)
}
