import React from 'react';
import { Redirect } from 'react-router-dom';

const Dashboard = ({ isAuthenticated }) => {
  if (!isAuthenticated) {
    return <Redirect to="/signin" push={true} />
  }

  return (
    <div>
      <p>
        This <strong>dashboard</strong> is available
        to authenticated users only.
      </p>
    </div>
  );
};

export default Dashboard;
