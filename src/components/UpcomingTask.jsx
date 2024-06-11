import React from 'react';
import { useTaskContext } from '../contexts/TaskContext';
import TaskView from '../utils/components/TaskView';

const UpcomingTask = () => {
   const { values } = useTaskContext();

   const upcomingTasks = values.tasks.filter((task) => task.status === 'Not Started');
   console.log("Upcoming Tasks", upcomingTasks);

   return (
      <div>
         {
            upcomingTasks?.length > 0 &&
            <>
               <h2 style={{ marginTop: '10px' }}>Upcoming Tasks</h2>
               {upcomingTasks.map((task) => (
                  <TaskView key={task._id} task={task} />
               ))}
            </>
         }
      </div>
   );
};

export default UpcomingTask;
