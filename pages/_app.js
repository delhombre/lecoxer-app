import { CssBaseline } from "@material-ui/core";
import "../styles/globals.css";
import DefaultThemeProvider from "../themes/DefaultThemeProvider";

function MyApp({ Component, pageProps }) {
	return (
		<DefaultThemeProvider>
			<CssBaseline />
			<Component {...pageProps} />
		</DefaultThemeProvider>
	);
}

export default MyApp;
