import { CssBaseline } from "@material-ui/core";
import { useEffect } from "react";
import "../styles/globals.css";
import DefaultThemeProvider from "../themes/DefaultThemeProvider";

function MyApp({ Component, pageProps }) {
	useEffect(() => {
		const jssStyles = document.querySelector("#jss-server-side");
		if (jssStyles) {
			jssStyles.parentElement.removeChild(jssStyles);
		}
	}, []);

	return (
		<DefaultThemeProvider>
			<CssBaseline />
			<Component {...pageProps} />
		</DefaultThemeProvider>
	);
}

export default MyApp;
