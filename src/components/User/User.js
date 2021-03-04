import React from 'react';

const User = (props) => {
	const { user } = props;

	return (
		<li className="pagination">
			<div>
				<a href={user.edit_path}>{user.name1}</a>
				<br />
				<p>
					<small>{user.email}</small>
				</p>
			</div>
		</li>
	);
};

export default User;
