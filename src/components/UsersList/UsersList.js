import React from 'react';

const UsersList = (props) => {
	const { children } = props;
	return <ul style={{ minHeight: '350px' }}>{children}</ul>;
};

export default UsersList;
