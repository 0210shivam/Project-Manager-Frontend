import React from 'react';
import { useTaskContext } from '../contexts/TaskContext';
import { useLocation, useNavigate } from 'react-router-dom';
import updateTask from '../apis/updateStatus';
import convertDate from '../utils/functions/convertDate';

const ViewTask = () => {
   const { values, setValues } = useTaskContext();
   const navigate = useNavigate();

   const location = useLocation();
   const queryParams = new URLSearchParams(location.search);
   const taskId = queryParams.get('id');

   const extractedTask = values.tasks.find(task => task._id === taskId);

   const formattedAddDate = convertDate(extractedTask?.added_on);
   const formattedDueDate = convertDate(extractedTask?.due_date);
   const formattedCompleteDate = convertDate(extractedTask?.completed_on);

   const handleStatusChange = async (e) => {
      e.preventDefault();
      try {
         const res = await updateTask({ task_id: taskId, status: values.status });

         if (res.status === 200) {
            console.log("Status Changed", values);
            setValues({ ...values, status: "" });
            window.location.reload();
         }
      } catch (error) {
         console.log(error);
      }
   };

   return (
      <div style={{ margin: '20px' }}>
         <h2>{extractedTask?.title}</h2>

         <div style={{ marginTop: '10px' }}>
            <span style={{ fontWeight: 'bold' }}>Added On:</span> {formattedAddDate.dateFormatted}, {formattedAddDate.timeFormatted}
         </div>

         <div style={{ marginTop: '10px' }}>
            <span style={{ fontWeight: 'bold' }}>Due Date:</span> {formattedDueDate.dateFormatted !== "NaN-NaN-NaN" ? formattedDueDate.dateFormatted : "No Date"}, {formattedDueDate.timeFormatted !== "NaN:NaN:NaN" ? formattedDueDate.timeFormatted : "No Time"}
         </div>

         {
            extractedTask?.status === "completed" ?
               <div style={{ marginTop: '10px', marginBottom: '10px' }}>
                  <span style={{ fontWeight: 'bold' }}>Completed On:</span> {formattedCompleteDate.dateFormatted !== "NaN-NaN-NaN" ? formattedCompleteDate.dateFormatted : "No Date"}, {formattedCompleteDate.timeFormatted !== "NaN:NaN:NaN" ? formattedCompleteDate.timeFormatted : "No Time"}
               </div> :
               <div style={{ marginTop: '10px', marginBottom: '10px' }}>
                  <span style={{ fontWeight: 'bold' }}>Status: </span>
                  {
                     extractedTask?.status === "running" && "Running" ||
                     extractedTask?.status === "completed" && "Completed" ||
                     extractedTask?.status === "pasued" && "Paused"
                  }
               </div>
         }

         <hr />

         <div style={{ marginTop: '10px', marginBottom: '15px' }}>
            <span style={{ fontWeight: 'bold', display: 'block', marginBottom: '5px' }}>Description:</span>
            <span>{extractedTask?.description}</span>
         </div>

         <hr />

         <div style={{ marginTop: '10px' }}>
            <div style={{ fontWeight: 'bold', marginBottom: '10px' }}>Change Status</div>
            <form onSubmit={handleStatusChange}>
               <div style={{ marginTop: '5px' }}>
                  <input value="running" onChange={(e) => setValues({ ...values, status: e.target.value })} style={{ marginRight: '5px' }} type="radio" name="status_radio" id="status-running" />
                  <label htmlFor="status-running">Running</label>
               </div>

               <div style={{ marginTop: '5px' }}>
                  <input value="paused" onChange={(e) => setValues({ ...values, status: e.target.value })} style={{ marginRight: '5px' }} type="radio" name="status_radio" id="status-pause" />
                  <label htmlFor="status-pause">Pause</label>
               </div>

               <div style={{ marginTop: '5px' }}>
                  <input value="completed" onChange={(e) => setValues({ ...values, status: e.target.value })} style={{ marginRight: '5px' }} type="radio" name="status_radio" id="status-completed" />
                  <label htmlFor="status-completed">Completed</label>
               </div>

               <div style={{ marginTop: '5px', display: 'flex', justifyContent: 'center' }}>
                  <button type='submit' style={{ padding: '3px' }}>
                     Submit
                  </button>
               </div>
            </form>

            <div style={{ marginTop: '10px', display: 'flex', justifyContent: 'center' }}>
               <button style={{ paddingRight: '5px', paddingLeft: '5px' }} onClick={() => navigate(-1)}>Go Back</button>
            </div>
         </div>

      </div>
   );
};

export default ViewTask;
