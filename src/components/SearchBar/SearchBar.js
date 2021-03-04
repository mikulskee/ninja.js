import React from 'react';

const SearchBar = (props) => {
	const { usersData, setUsersList } = props;

	const handleSearch = (e) => {
		const text = e.target.value;

		if (text) {
			const usersFound = usersData.filter((user) => {
				return (
					user.name1.toLowerCase().search(text.toLowerCase()) > -1 ||
					(user.email && user.email.toLowerCase().search(text.toLowerCase()) > -1)
				);
			});
			setUsersList(usersFound);
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
