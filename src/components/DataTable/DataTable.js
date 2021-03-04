import React, { useEffect, useState } from 'react';

import Pagination from '../Pagination/Pagination';
import SearchBar from '../SearchBar/SearchBar';
import User from '../User/User';

export const DataTable = (props) => {
	const { usersData, locale, rowsPerPage } = props;

	const [usersList, setUsersList] = useState(usersData);
	const [currentPageIndex, setCurrentPageIndex] = useState(0);
	const [totalNumberOfPages, setTotalNumberOfPages] = useState();

	const rowsInPageNumber = (pageNumber) => {
		const startIndex = pageNumber * rowsPerPage;
		return [startIndex, startIndex + rowsPerPage];
	};

	const calculateTotalNumberOfPages = () => {
		if (rowsPerPage == 0) {
			setTotalNumberOfPages(0);
		} else {
			setTotalNumberOfPages(Math.ceil(usersList.length / rowsPerPage));
		}
	};

	const changePageIndex = (index) => {
		setCurrentPageIndex(index);
	};

	const rowsToRender = usersList
		.map((user) => <User key={user.per_id} user={user} />)
		.slice(rowsInPageNumber(currentPageIndex));

	useEffect(() => {
		calculateTotalNumberOfPages();
	}, [rowsPerPage, calculateTotalNumberOfPages]);

	return (
		<div>
			<SearchBar usersList={usersList} setUsersList={setUsersList} />
			<div>
				<tbody>{rowsToRender}</tbody>
			</div>
			<Pagination
				currentPageNumber={currentPageIndex}
				totalNumberOfPages={totalNumberOfPages}
				onChange={changePageIndex}
			/>
		</div>
	);
};

export default DataTable;
