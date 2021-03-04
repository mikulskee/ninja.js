import React, { useEffect, useState } from 'react';

import PageButton from '../PageButton/PageButton';

const Pagination = (props) => {
	const { currentPageNumber, totalNumberOfPages, onChange } = props;

	const [pagesButtons, setPagesButtons] = useState([]);

	useEffect(() => {
		const pages = Array.from(Array(totalNumberOfPages).keys()).map((pageNumber) => {
			return (
				<PageButton
					key={pageNumber}
					currentPageNumber={currentPageNumber}
					pageNumber={pageNumber}
					onChange={onChange}
				/>
			);
		});
		setPagesButtons(pages);
	}, [currentPageNumber, totalNumberOfPages, onChange]);

	return <ul className="pagination">{pagesButtons.length ? pagesButtons : null}</ul>;
};

export default Pagination;
