import React, { Component } from 'react';
import DataTable from './components/DataTable/DataTable';
import './App.css';

class App extends Component {
	render() {
		return (
			<main className="container mt-3">
				<DataTable locale="da" usersPerPage={5} />
			</main>
		);
	}
}

export default App;
