import React from "react";

const SearchFilter = () => {
	return (
		<>
			<div className="search-filter-container">
				<div className="toto"></div>
			</div>
			<style jsx>
				{`
					.search-filter-container {
						height: calc(100vh - 16rem);
						background-image: url("/images/bg-1.jpg");
						width: 100%;
						background-size: cover;
						background-position: center;
						filter: blur(0.5px);
						display: flex;
						justify-content: center;
						align-items: center;
					}

					.toto {
						min-height: 25%;
						width: 70%;
						background: rgba(255, 255, 255, 0.4);
						backdrop-filter: blur(20px);
						border-radius: 2rem;
					}

					@media screen and (max-width: 599px) {
						.search-filter-container {
							margin-top: 4.8rem;
							height: calc(100vh - 4.8rem);
						}
					}
				`}
			</style>
		</>
	);
};

export default SearchFilter;
