import React, { useEffect, useState } from 'react';

import Page from '../Page/Page';

const Pagination = (props) => {
	const { currentPageNumber, totalNumberOfPages, onChange } = props;

	const [pagesButtons, setPagesButtons] = useState();

	useEffect(() => {
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
		setPagesButtons(pages);
	}, [currentPageNumber, totalNumberOfPages]);

	return <ul className="pagination">{pagesButtons}</ul>;
};

export default Pagination;
