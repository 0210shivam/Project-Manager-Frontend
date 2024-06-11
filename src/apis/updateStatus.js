const updateTask = async ({ task_id, status }) => {
   const backend_host = import.meta.env.VITE_API;

   try {
      const res = await fetch(`${backend_host}/task/status/update`, {
         method: 'POST',
         headers: {
            'Content-Type': 'application/json'
         },
         body: JSON.stringify({
            task_id,
            status
         }),
      });

      const resData = await res.json();
      return resData;
   } catch (error) {
      console.log(error);
      return error;
   }
};

export default updateTask;
