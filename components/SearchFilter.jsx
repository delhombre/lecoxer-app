import {
	Button,
	Grid,
	InputAdornment,
	makeStyles,
	TextField,
	Typography,
} from "@material-ui/core";
import SearchRoundedIcon from "@material-ui/icons/SearchRounded";
import React from "react";
import SearchInputChoice from "./SearchInputChoice";

const useStyles = makeStyles((theme) => ({
	title: {
		color: "#fff",
		textShadow: "5px 1px 5px #000",
		fontWeight: 800,
		marginTop: "10rem",
		[theme.breakpoints.down("sm")]: {
			marginTop: "3rem",
			fontSize: "3.875rem",
		},
	},

	subtitle: {
		textShadow: "2px 2px 2px #000",
		color: "#fff",
		marginBottom: "2rem",
		[theme.breakpoints.down("sm")]: {
			fontSize: "1.5rem",
			fontWeight: "100",
		},
	},
	isUpper: {
		textTransform: "uppercase",
	},
	searchButton: {
		display: "flex",
		margin: "0 auto",
	},
}));

const listPropertyType = [
	"Appartement",
	"Maison",
	"Atelier",
	"Villa",
	"Terrain",
	"Bureau",
	"Immeuble",
	"Hôtel",
	"Autre",
];

const listNumberOfPieces = ["1", "2", "3", "4", "5+"];

const listNumberOfRooms = ["1", "2", "3", "4", "5+"];

const commodities = [
	"Garage",
	"Parking",
	"Balcon",
	"Terasse",
	"Jardin",
	"Piscine",
	"Air conditionné",
	"Ascenseur",
	"Gardien",
];

const SearchFilter = () => {
	const classes = useStyles();

	return (
		<>
			<div className="search-filter-hero">
				<Typography variant="h1" className={classes.title} align="center">
					LECOXER.COM
				</Typography>
				<Typography
					variant="h3"
					component="h2"
					className={classes.subtitle}
					align="center"
				>
					{"Premier site gratuit d'annonces immobilières"}
				</Typography>
				<div className="search-filter-container">
					<Typography variant="h4" paragraph>
						Où habiterez-vous ?
					</Typography>
					<Grid container spacing={1}>
						<Grid item xs={12}>
							<Typography
								variant="subtitle1"
								color="primary"
								className={classes.isUpper}
							>
								Localités
							</Typography>
							<TextField
								id="location"
								label="Quartier, ville, région..."
								variant="outlined"
								fullWidth
							/>
						</Grid>
						<Grid item xs={12}>
							<Typography
								variant="subtitle1"
								color="primary"
								className={classes.isUpper}
							>
								Type de biens
							</Typography>
							<ul className="property-type-list">
								{listPropertyType.map((element, index) => (
									<SearchInputChoice
										key={index}
										name={element}
										id={element + "-" + index}
									>
										{element}
									</SearchInputChoice>
								))}
							</ul>
						</Grid>
						<Grid item xs={6}>
							<Typography
								variant="subtitle1"
								color="primary"
								className={classes.isUpper}
							>
								Surface
							</Typography>
							<TextField
								id="min-surface"
								label="Min"
								variant="outlined"
								fullWidth
								InputProps={{
									endAdornment: (
										<InputAdornment position="end">m²</InputAdornment>
									),
								}}
							/>
						</Grid>
						<Grid item xs={6}>
							<Typography
								variant="subtitle1"
								color="primary"
								className={classes.isUpper}
							>
								&nbsp;
							</Typography>
							<TextField
								id="max-surface"
								label="Max"
								variant="outlined"
								fullWidth
								InputProps={{
									endAdornment: (
										<InputAdornment position="end">m²</InputAdornment>
									),
								}}
							/>
						</Grid>
						<Grid item xs={12}>
							<Typography
								variant="subtitle1"
								color="primary"
								className={classes.isUpper}
							>
								Nombre de chambres
							</Typography>
							<ul className="property-type-list">
								{listNumberOfRooms.map((element, index) => (
									<SearchInputChoice
										key={index}
										name={element}
										id={element + "-" + index}
										symbol={false}
									>
										{element}
									</SearchInputChoice>
								))}
							</ul>
						</Grid>
						<Grid item xs={12}>
							<Typography
								variant="subtitle1"
								color="primary"
								className={classes.isUpper}
							>
								Nombre de pièces
							</Typography>
							<ul className="property-type-list">
								{listNumberOfPieces.map((element, index) => (
									<SearchInputChoice
										key={index}
										name={element}
										id={element + "-" + index}
										symbol={false}
									>
										{element}
									</SearchInputChoice>
								))}
							</ul>
						</Grid>
						<Grid item xs={6}>
							<Typography
								variant="subtitle1"
								color="primary"
								className={classes.isUpper}
							>
								Budget
							</Typography>
							<TextField
								id="min-budget"
								label="Min"
								variant="outlined"
								fullWidth
								InputProps={{
									endAdornment: (
										<InputAdornment position="end">FCFA</InputAdornment>
									),
								}}
							/>
						</Grid>
						<Grid item xs={6}>
							<Typography
								variant="subtitle1"
								color="primary"
								className={classes.isUpper}
							>
								&nbsp;
							</Typography>
							<TextField
								id="max-budget"
								label="Max"
								variant="outlined"
								fullWidth
								InputProps={{
									endAdornment: (
										<InputAdornment position="end">FCFA</InputAdornment>
									),
								}}
							/>
						</Grid>
						<Grid item xs={12}>
							<Typography
								variant="subtitle1"
								color="primary"
								className={classes.isUpper}
							>
								Commodités
							</Typography>
							<ul className="property-type-list">
								{commodities.map((element, index) => (
									<SearchInputChoice
										key={index}
										name={element}
										id={element + "-" + index}
									>
										{element}
									</SearchInputChoice>
								))}
							</ul>
						</Grid>
						<Grid item xs={12}>
							<Button
								variant="contained"
								color="primary"
								startIcon={<SearchRoundedIcon />}
								className={classes.searchButton}
							>
								Rechercher
							</Button>
						</Grid>
					</Grid>
				</div>
			</div>
			<style jsx>
				{`
					.search-filter-hero {
						height: 100%;
						background-image: url("/images/bg-6.jpg");
						width: 100%;
						background-size: cover;
						background-position: center;
						display: flex;
						flex-direction: column;
						justify-content: center;
						align-items: center;
					}

					.search-filter-container {
						min-height: 25%;
						min-width: 40%;
						max-width: 50%;
						background: rgba(255, 255, 255, 0.4);
						backdrop-filter: blur(20px);
						border-radius: 2rem;
						padding: 1rem;
						margin-bottom: 5rem;
					}

					.property-type-list {
						display: flex;
						flex-wrap: wrap;
						list-style: none;
					}

					@media screen and (max-width: 599px) {
						.search-filter-hero {
							margin-top: 4.8rem;
						}

						.search-filter-container {
							min-width: 80%;
							max-width: 95%;
						}
					}
				`}
			</style>
		</>
	);
};

export default SearchFilter;
