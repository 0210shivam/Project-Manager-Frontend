import React from 'react';
import { useTaskContext } from '../contexts/TaskContext';
import TaskView from '../utils/components/TaskView';

const AllTask = () => {
	const { values } = useTaskContext();
	const tasks = values.tasks;

	return (
		<div>
			<h2 style={{ marginTop: '10px' }}>All Tasks</h2>
			{
				tasks.map((task) => (
					<TaskView key={task._id} task={task} />
				))
			}
		</div>
	);
};

export default AllTask;
