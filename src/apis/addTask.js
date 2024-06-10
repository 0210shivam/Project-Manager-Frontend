const addTask = async ({ title, description }) => {
   const backend_host = "https://project-manager-backend-ten.vercel.app";

   try {
      const res = await fetch(`${backend_host}/task/add`, {
         method: 'POST',
         headers: {
            'Content-Type': 'application/json'
         },
         body: JSON.stringify({
            title,
            description
         }),
      });

      const resData = await res.json();
      return resData;
   } catch (error) {
      console.log(error);
      return error;
   }
};

export default addTask;
