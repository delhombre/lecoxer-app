import React, { useRef } from "react";

const Navbar = () => {
	const headerRef = useRef(null);

	const handleToggleMenu = () => {
		headerRef.current.classList.toggle("active");
	};

	return (
		<>
			<header ref={headerRef}>
				<div className="container">
					<nav className="nav">
						<ul className="nav-list nav-list-mobile">
							<li className="nav-item">
								<div className="mobile-menu" onClick={handleToggleMenu}>
									<span className="line line-top"></span>
									<span className="line line-bottom"></span>
								</div>
							</li>
							<li className="nav-item">
								<a href="#" className="nav-link nav-link-logo">
									<img src="/logo.jpg" alt="lecoxer logo" />
								</a>
							</li>
							<li className="nav-item">
								<a href="#" className="nav-link nav-link-account"></a>
							</li>
						</ul>

						<ul className="nav-list nav-list-larger">
							<li className="nav-item">
								<a href="#" className="nav-link">
									Acheter
								</a>
							</li>
							<li className="nav-item">
								<a href="#" className="nav-link">
									Louer
								</a>
							</li>
							<li className="nav-item">
								<a href="#" className="nav-link">
									Vendre
								</a>
							</li>
							<li className="nav-item">
								<a href="#" className="nav-link">
									Blog
								</a>
							</li>
							<li className="nav-item">
								<a href="#" className="nav-link">
									Contact
								</a>
							</li>
						</ul>
					</nav>
				</div>
			</header>
			<style jsx>
				{`
					*,
					*::before,
					*::after {
						margin: 0;
						padding: 0;
						box-sizing: border-box;
					}

					header {
						positon: sticky;
						z-index: 1400;
						height: 9rem;
						background-color: rgba(255, 255, 255, 0.4);
						backdrop-filter: saturate(180%) blur(2rem);
						-webkit-backdrop-filter: saturate(180%) blur(2rem);
						width: 100%;
					}

					header a {
						display: block;
						text-decoration: none;
					}

					header .container {
						max-width: 98rem;
						margin: 0 auto;
						padding: 0 2.2rem;
					}

					.nav-list {
						list-style-type: none;
						display: flex;
						align-items: center;
						justify-content: space-between;
						margin: 0 -1rem;
					}

					.nav-list-mobile {
						display: none;
					}

					.nav-list-larger {
						height: 9rem;
					}

					.nav-link {
						font-size: 2rem;
						color: #000;
						padding: 0 1rem;
						transition: opacity 0.5s;
						letter-spacing: -0.01em;
					}

					.nav-link:hover {
						opacity: 0.7;
					}

					.nav-link-logo > img {
						height: 9rem;
					}

					@media screen and (max-width: 599px) {
						header {
							position: fixed;
							top: 0;
							height: 4.8rem;
							transition: background 0.36s cubic-bezier(0.32, 0.08, 0.24, 1),
								height 0.56s cubic-bezier(0.32, 0.08, 0.24, 1);
							box-shadow: none;
							background-color: rgba(0, 0, 0, 0.8);
						}

						header .container {
							padding: 0;
						}

						.nav-list {
							margin: 0;
						}

						.nav-list-mobile {
							display: flex;
						}

						.nav-item {
							height: 4.8rem;
							width: 4.8rem;
							display: flex;
							justify-content: center;
						}

						.mobile-menu {
							position: relative;
							z-index: 1500;
							width: 100%;
							height: 100%;
							display: flex;
							flex-direction: column;
							align-items: center;
							justify-content: center;
							cursor: pointer;
						}

						.line {
							position: absolute;
							width: 1.7rem;
							height: 1px;
							background-color: #fff;
							transition: margin-top 0.3192s
								cubic-bezier(0.04, 0.04, 0.12, 0.96);
						}

						.line-top {
							margin-top: 0.7rem;
						}

						.line-bottom {
							margin-top: -0.7rem;
						}

						.active .line-top {
							margin-top: 0;
							transform: rotate(45deg);
							transition: transform 0.3192s 0.1s
								cubic-bezier(0.04, 0.04, 0.12, 0.96);
						}

						.active .line-bottom {
							margin-top: 0;
							transform: rotate(-45deg);
							transition: transform 0.3192s 0.1s
								cubic-bezier(0.04, 0.04, 0.12, 0.96);
						}

						header.active {
							height: 100%;
							background-color: #000;
						}

						.nav-link-logo {
							height: 4.8rem;
							position: relative;
							z-index: 1500;
						}

						.nav-link-logo > img {
							height: 4.8rem;
						}

						.nav-link-account {
							width: 1.6rem;
							height: 4.8rem;
							background: url("/icons/user.svg") center no-repeat;
							transition: opacity 3s;
						}

						.nav {
							position: relative;
						}

						.nav-link {
							font-size: 2rem;
							padding: 0;
							margin: auto 0;
							color: #fff;
						}

						.nav-list-larger {
							position: fixed;
							top: 0;
							left: 0;
							width: 0;
							height: 0;
							display: block;
							padding: 10.5rem 5rem;
							z-index: 1000;
							box-sizing: border-box;
							transition: opacity 0.3s;
							opacity: 0;
							visibility: hidden;
						}

						.active .nav-list-larger {
							width: 100%;
							height: 100vh;
							opacity: 1;
							visibility: visible;
						}

						.active .nav-link-account {
							opacity: 0;
							transition: opacity 0.3s;
						}

						.nav-list-larger .nav-item {
							width: 100%;
							justify-content: flex-start;
							border-bottom: 2px solid rgba(255, 255, 255, 0.1);
						}

						.nav-list-larger .nav-item:last-child {
							border-bottom: none;
						}

						.active .nav-list-larger .nav-item {
							animation: fadeIn 1s ease-in;
						}

						.nav-item-search,
						.nav-item-bag {
							display: none;
						}

						@keyframes fadeIn {
							from {
								opacity: 0;
							}

							to {
								opacity: 1;
							}
						}
					}
				`}
			</style>
		</>
	);
};

export default Navbar;
