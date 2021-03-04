import React from 'react';

const User = (props) => {
	const { user } = props;

	return (
		<tr>
			<td>
				<a href={user.edit_path}>{user.name1}</a>
				<br />
				<small>{user.email}</small>
			</td>
		</tr>
	);
};

export default User;
