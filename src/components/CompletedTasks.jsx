import React from 'react';
import { useTaskContext } from '../contexts/TaskContext';
import TaskView from '../utils/components/TaskView';

const CompletedTasks = () => {
   const { values } = useTaskContext();

   const completedTasks = values.tasks.filter((task) => task.status === 'completed');
   console.log("completedTasks", completedTasks);

   return (
      <div>
         {
            completedTasks?.length > 0 &&
            <>
               <h2 style={{ marginTop: '10px' }}>Completed Tasks</h2>
               {completedTasks.map((task) => (
                  <TaskView key={task?._id} task={task} />
               ))}
            </>
         }
      </div>
   );
};

export default CompletedTasks;
