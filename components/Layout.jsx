import React from "react";
import Navbar from "./Navbar";
import SearchFilter from "./SearchFilter";
import Topbar from "./Topbar";

const Layout = () => {
	return (
		<>
			<div className="page">
				<Topbar />
				<Navbar />
				<SearchFilter />
			</div>
			<style jsx>
				{`
					.page {
						min-height: 100vh;
						overflow: hidden;
					}
				`}
			</style>
		</>
	);
};

export default Layout;
