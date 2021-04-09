import React from "react";

const SearchInputChoice = ({ children, name, id, symbol = true }) => {
	return (
		<>
			<li className="search-input-choice">
				<input type="checkbox" className="hidden-input" name={name} id={id} />
				<label htmlFor={id} className="checkbox-label">
					{children}
				</label>
				{symbol && (
					<img src="/images/add.png" alt="add" className="add-symbol" />
				)}
			</li>

			<style jsx>
				{`
					.search-input-choice {
						display: flex;
						align-items: center;
						justify-content: center;
						height: 3.6rem;
						margin-right: 0.5rem;
						margin-bottom: 0.5rem;
						padding: 0 8px;
						user-select: none;
						color: #b9b8b8f5;
						background-color: rgba(0, 0, 0, 0.5);
						border: 1px solid #000;
						border-radius: 2px;
						cursor: pointer;
					}

					.hidden-input {
						display: none;
					}

					.checkbox-label {
						cursor: pointer;
						font-size: 1.5rem;
					}

					.add-symbol {
						position: relative;
						display: inline-block;
						width: 16px;
						height: 16px;
						margin-left: 5px;
					}
				`}
			</style>
		</>
	);
};

export default SearchInputChoice;
