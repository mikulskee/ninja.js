import React from 'react';

const Page = (props) => {
	const { pageNumber, currentPageNumber, onChange } = props;

	const isActivePage = () => {
		if (currentPageNumber === pageNumber) {
			return 'page-link button-outline';
		} else {
			return 'page-link';
		}
	};

	const renderedPageNumber = () => {
		return pageNumber + 1;
	};

	const handleClick = (event) => {
		event.preventDefault();
		onChange(pageNumber);
	};

	return (
		<li className="page-item mr-1">
			<button className={isActivePage()} onClick={handleClick}>
				{renderedPageNumber()}
			</button>
		</li>
	);
};

export default Page;
