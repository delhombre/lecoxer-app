import React from "react";

const Topbar = () => {
	return (
		<>
			<section className="top-bar">
				<div className="container">
					<ul>
						<li>
							<a href="#">
								<img src="/logo.jpg" alt="lecoxer" />
							</a>
						</li>
						<li className="grow"></li>
						<li>
							<a href="#" className="sign-up">
								Inscription
							</a>
						</li>
						<li>
							<a href="#" className="sign-in">
								Connexion
							</a>
						</li>
					</ul>
				</div>
			</section>
			<style jsx>
				{`
					.top-bar {
						display: none;
					}

					@media screen and (min-width: 600px) {
						.top-bar {
							display: block;
							background-color: #000;
							height: 7rem;
							width: 100vw;
						}

						.top-bar .container {
							max-width: 160rem;
							margin: 0 auto;
							padding: 0 3rem;
							width: 100%;
							height: 100%;
						}

						.top-bar ul {
							list-style-type: none;
							display: flex;
							align-items: center;
							height: 100%;
						}

						.top-bar ul li {
							max-height: 100%;
						}

						.top-bar a {
							text-decoration: none;
							color: #fff;
							max-height: 100%;
						}

						.top-bar img {
							max-height: 7rem;
						}

						.top-bar .grow {
							flex-grow: 1;
						}

						.top-bar .sign-up {
							border: 2px solid #fff;
							padding: 1rem;
							margin: 0 1rem;
							border-radius: 1rem;
							background-color: #fff;
							color: #000;
							transition: color 0.5s ease-out, background-color 0.8s ease-in-out;
						}

						.top-bar .sign-up:hover {
							background-color: #000;
							color: #fff;
						}

						.top-bar .sign-in {
							border: 2px solid #ffffff4d;
							padding: 1rem;
							margin: 0 1rem;
							border-radius: 1rem;
							color: #ffffff4d;
							transition: border 0.5s ease-out, color 0.8s ease-in-out;
						}

						.top-bar .sign-in:hover {
							color: #fff;
							border: 2px solid #fff;
						}
					}
				`}
			</style>
		</>
	);
};

export default Topbar;
