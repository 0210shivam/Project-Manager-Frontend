const getAllTasks = async () => {
   const backend_host = import.meta.env.VITE_API;

   try {
      const res = await fetch(`${backend_host}/task/get-all-tasks`, {
         method: 'GET',
         headers: {
            'Content-Type': 'application/json'
         }
      });

      const resData = await res.json();
      return resData;
   } catch (error) {
      console.log(error);
      return error;
   }
};

export default getAllTasks;
