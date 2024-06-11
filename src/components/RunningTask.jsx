import React from 'react';
import { useTaskContext } from '../contexts/TaskContext';
import TaskView from '../utils/components/TaskView';

const RunningTask = () => {
   const { values } = useTaskContext();

   const runningTasks = values.tasks.filter(task => task.status === 'running');
   console.log("Running Tasks", runningTasks);

   return (
      <div>
         {
            runningTasks?.length > 0 &&
            <>
               <h2 style={{ marginTop: '10px' }}>Running Tasks</h2>
               {runningTasks.map((task) => (
                  <TaskView key={task?._id} task={task} />
               ))}
            </>
         }
      </div>
   );
};

export default RunningTask;
