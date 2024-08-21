import React from 'react';
import { useRecoilValue } from 'recoil';
import { dashboardState } from '../recoil/dashboardState';
import Category from '../components/Category';
import AddWidgetForm from '../components/AddWidgetForm';

const Dashboard = () => {
  const dashboard = useRecoilValue(dashboardState);

  return (
    <div className="container mx-auto p-4">
      {dashboard.categories.map((category, index) => (
        <Category key={index} category={category} />
      ))}
      <AddWidgetForm />
    </div>
  );
};

export default Dashboard;
