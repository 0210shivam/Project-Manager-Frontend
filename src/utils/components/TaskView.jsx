import React from 'react';
import { useNavigate } from 'react-router-dom';

const TaskView = ({ i, task }) => {
   const navigate = useNavigate();

   const handleRoute = (id) => {
      navigate({
         pathname: '/task',
         search: `?id=${id}`,
      });
   };

   return (
      <div onClick={() => handleRoute(task._id)} key={i} style={{ padding: '10px', cursor: 'pointer' }}>
         <h4 style={{ padding: '2px' }}>{task?.title}</h4>
         <p style={{ padding: '2px', marginBottom: '5px' }}>
            {task?.description}
         </p>
         <hr />
      </div>
   );
};

export default TaskView;
