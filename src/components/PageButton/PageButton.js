import React, { useState, useEffect } from 'react';

const PageButton = (props) => {
	const { pageNumber, currentPageNumber, onChange } = props;
	const [renderedPageNumber, setRenderedPageNumber] = useState();
	const [buttonClassName, setButtonClassName] = useState();

	const handleClick = (event) => {
		event.preventDefault();
		onChange(pageNumber);
	};
	useEffect(() => {
		setRenderedPageNumber(pageNumber + 1);
	}, [setRenderedPageNumber, pageNumber]);
	useEffect(() => {
		if (currentPageNumber === pageNumber) {
			setButtonClassName('page-link button-outline');
		} else {
			setButtonClassName('page-link');
		}
	}, [currentPageNumber, pageNumber]);

	return (
		<li className="page-item mr-1">
			{buttonClassName && (
				<button className={buttonClassName} onClick={handleClick}>
					{renderedPageNumber}
				</button>
			)}
		</li>
	);
};

export default PageButton;
