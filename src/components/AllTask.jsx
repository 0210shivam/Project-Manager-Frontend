import React, { useEffect, useState } from 'react';
import getAllTasks from '../apis/getAllTasks';

const AllTask = () => {
	const [tasks, setTasks] = useState([]);

	useEffect(() => {
		const fetchTasks = async () => {
			try {
				const res = await getAllTasks();

				if (res.status === 200) {
					setTasks(res.tasks);
					console.log("Tasks", res.tasks);
				}
			} catch (error) {
				console.log(error);
			}
		};

		fetchTasks();
	}, []);

	return (
		<div>
			<h2 style={{ marginTop: '10px' }}>All Tasks</h2>
			{
				tasks.map((task) => (
					<div key={task._id} style={{ padding: '10px' }}>
						<h4 style={{ padding: '2px' }}>{task?.title}</h4>
						<p style={{ padding: '2px', marginBottom: '5px' }}>
							{task?.description}
						</p>
						<hr />
					</div>
				))
			}
		</div>
	);
};

export default AllTask;
