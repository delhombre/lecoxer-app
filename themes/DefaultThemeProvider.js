import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";
import React from "react";

const theme = createMuiTheme({
	palette: {
		primary: {
			main: "#000",
		},
	},
	typography: {
		fontFamily: ['"lecoxer"', "sans-serif"].join(","),
	},
	overrides: {
		MuiCssBaseline: {
			"@global": {
				html: {
					fontSize: "10px",
				},
				body: {
					backgroundColor: "#fff",
					color: "#000",
					fontSize: "2rem",
				},
			},
		},
	},
});

const DefaultThemeProvider = ({ children }) => {
	return <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>;
};

export default DefaultThemeProvider;
