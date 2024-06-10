import React from 'react';
import AddTask from './components/AddTask';
import AllTask from './components/AllTask';

function App() {

	return (
		<div style={{ padding: '20px' }}>
			<h1>Project Manager</h1>
			<br />
			<AddTask />
			<hr />

			<AllTask />
		</div>
	);
}

export default App;
