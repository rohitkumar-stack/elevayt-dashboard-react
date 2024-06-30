import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layoutes from "../layout/Layoutes";
import Jobs from "../jobs/Jobs";
import Dashboard from "../dashboard/Dashboard";
import Candidates from "../candidate/Candidates";

const Routers = () => {
  return (
    <Router>
      <Layoutes>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/candidate" element={<Candidates />} />
          <Route path="/jobs" element={<Jobs />} />
        </Routes>
      </Layoutes>
    </Router>
  );
};

export default Routers;
