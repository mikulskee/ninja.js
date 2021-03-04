import React, { useEffect, useState } from 'react';

import Pagination from '../Pagination/Pagination';
import SearchBar from '../SearchBar/SearchBar';
import User from '../User/User';
import UsersList from '../UsersList/UsersList';

export const DataTable = (props) => {
	const { usersData, usersPerPage } = props;

	const [usersList, setUsersList] = useState(usersData);
	const [startIndex, setStartIndex] = useState();
	const [currentPageIndex, setCurrentPageIndex] = useState(0);
	const [totalNumberOfPages, setTotalNumberOfPages] = useState();
	const [usersToRender, setUsersToRender] = useState();

	const changePageIndex = (index) => {
		setCurrentPageIndex(index);
	};

	useEffect(() => {
		if (usersPerPage === 0) {
			setTotalNumberOfPages(0);
		} else {
			setTotalNumberOfPages(Math.ceil(usersList.length / usersPerPage));
		}
	}, [usersPerPage, setTotalNumberOfPages, usersList]);

	useEffect(() => {
		setStartIndex(currentPageIndex * usersPerPage);
	}, [currentPageIndex, usersPerPage]);

	useEffect(() => {
		setUsersToRender(
			usersList
				.map((user) => <User key={user.per_id} user={user} />)
				.slice(startIndex, startIndex + usersPerPage)
		);
	}, [startIndex, usersPerPage, usersList, setUsersToRender]);

	return (
		<div>
			<SearchBar usersData={usersData} setUsersList={setUsersList} />
			<UsersList>{usersToRender}</UsersList>
			<Pagination
				currentPageNumber={currentPageIndex}
				totalNumberOfPages={totalNumberOfPages}
				onChange={changePageIndex}
			/>
		</div>
	);
};

export default DataTable;
