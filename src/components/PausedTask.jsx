import React from 'react';
import { useTaskContext } from '../contexts/TaskContext';
import TaskView from '../utils/components/TaskView';

const PausedTask = () => {
   const { values } = useTaskContext();

   const pausedTasks = values.tasks.filter((task) => task.status === 'paused');
   console.log("pausedTasks", pausedTasks);

   return (
      <div>
         {pausedTasks.length > 0 && (
            <>
               <h2 style={{ marginTop: '10px' }}>Paused Tasks</h2>
               {pausedTasks.map((task) => (
                  <TaskView key={task?._id} task={task} />
               ))}
            </>
         )}
      </div>

   );
};

export default PausedTask;
