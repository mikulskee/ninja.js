import React from 'react';

import Page from '../Page/Page';

const Pagination = ({ currentPageNumber, totalNumberOfPages, onChange }) => {
	const pages = Array.from(Array(totalNumberOfPages).keys()).map((pageNumber) => {
		return (
			<Page
				key={pageNumber}
				currentPageNumber={currentPageNumber}
				pageNumber={pageNumber}
				onChange={onChange}
			/>
		);
	});

	return <ul className="pagination">{Boolean(pages.length) && pages}</ul>;
};

export default Pagination;
