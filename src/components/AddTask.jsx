import React, { useState } from 'react';
import addTask from '../apis/addTask';

const AddTask = () => {
	const [title, setTitle] = useState('');
	const [description, setDescription] = useState('');

	const handleSubmit = async (event) => {
		event.preventDefault();
		try {
			const res = await addTask({ title, description });

			if (res.status === 200) {
				console.log(res);
				setDescription("");
				setTitle("");
				window.location.reload();
			}

		} catch (error) {
			console.log(error);
		}
	};

	return (
		<div>
			<h2>Add Tasks</h2>
			<br />
			<form onSubmit={handleSubmit}>
				<div style={{ marginBottom: '10px' }}>
					<label htmlFor="title">Title</label>
					<input value={title} onChange={(e) => setTitle(e.target.value)} id='title' style={{ marginLeft: '10px', marginRight: '10px', padding: '2px' }} type="text" />
				</div>

				<div style={{ marginBottom: '10px' }}>
					<label htmlFor="desc">Description</label>
					<textarea value={description} onChange={(e) => setDescription(e.target.value)} id='desc' style={{ marginLeft: '10px', marginRight: '10px', padding: '2px' }} type="text" />
				</div>
				<div style={{ marginBottom: '10px', display: 'flex', justifyContent: 'end' }}>
					<button style={{ padding: '2px', width: '120px' }} type="submit"> Add Task </button>
				</div>
			</form>
		</div>
	);
};

export default AddTask;
