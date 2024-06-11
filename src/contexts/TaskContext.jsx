import { createContext, useContext, useEffect, useMemo, useState } from "react";
import PropTypes from "prop-types";
import getAllTasks from "../apis/getAllTasks";

export const TaskContext = createContext();

export const TaskContextProvider = ({ children }) => {
   const [values, setValues] = useState({
      title: "",
      description: "",
      due_date: "",
      assigned_on: "",
      completed_on: "",
      status: "",
      tasks: [],
   });

   // *API Call to fetch all tasks --
   useEffect(() => {
      const fetchTasks = async () => {
         try {
            const res = await getAllTasks();

            if (res.status === 200) {
               setValues({ ...values, tasks: res.tasks });
               console.log("Tasks", res.tasks);
            }
         } catch (error) {
            console.log(error);
         }
      };

      fetchTasks();
   }, []);

   const contextValues = useMemo(() => ({ values, setValues }), [values]);

   return (
      <TaskContext.Provider value={contextValues}>
         {children}
      </TaskContext.Provider>
   );
};

TaskContextProvider.propTypes = {
   children: PropTypes.node.isRequired,
};

export const useTaskContext = () => useContext(TaskContext);
