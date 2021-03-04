import React from 'react';

const SearchBar = (props) => {
	const { usersList, setUsersList } = props;

	const handleSearch = (e) => {
		const text = e.target.value;

		if (text) {
			const rowsFound = usersList.filter((user) => {
				return (
					user.name1.toLowerCase().search(text.toLowerCase()) > -1 ||
					(user.email && user.email.toLowerCase().search(text.toLowerCase()) > -1)
				);
			});
			setUsersList(rowsFound);
		}
	};

	return (
		<div className="p-b-1">
			<input
				type="search"
				className="form-control"
				placeholder="Søg brugere"
				onChange={handleSearch}
			/>
		</div>
	);
};

export default SearchBar;
