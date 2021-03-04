import React, { useEffect, useState } from 'react';

import Pagination from '../Pagination/Pagination';
import SearchBar from '../SearchBar/SearchBar';
import User from '../User/User';
import UsersList from '../UsersList/UsersList';
import { usersData } from '../../data/usersData';

export const DataTable = (props) => {
	const { usersPerPage } = props;

	const [usersList, setUsersList] = useState(usersData);
	const [startIndex, setStartIndex] = useState();
	const [currentPageIndex, setCurrentPageIndex] = useState(0);
	const [totalNumberOfPages, setTotalNumberOfPages] = useState();
	const [usersToRender, setUsersToRender] = useState([]);
	const [searchBarValue, setSearchBarValue] = useState('');

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
			<SearchBar
				usersData={usersData}
				setUsersList={setUsersList}
				setSearchBarValue={setSearchBarValue}
			/>
			{searchBarValue && !usersToRender.length ? (
				<p>User "{searchBarValue}" does not exist</p>
			) : (
				<UsersList>{usersToRender}</UsersList>
			)}
			<Pagination
				currentPageNumber={currentPageIndex}
				totalNumberOfPages={totalNumberOfPages}
				onChange={changePageIndex}
			/>
		</div>
	);
};

export default DataTable;
