// Importing Files --
import React from 'react';
import AddTask from '../components/AddTask';
import RunningTask from '../components/RunningTask';
import UpcomingTask from '../components/UpcomingTask';
import PausedTask from '../components/PausedTask';
import AllTask from '../components/AllTask';
import CompletedTasks from '../components/CompletedTasks';

const Home = () => {
   return (
      <div style={{ padding: '20px' }}>
         <h1>Project Manager</h1>
         <br />
         <AddTask />

         <RunningTask />

         <UpcomingTask />

         <PausedTask />

         <CompletedTasks />

         <AllTask />
      </div>
   );
};

export default Home;
