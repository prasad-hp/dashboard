import React from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { dashboardState, displayWidgetForm } from '../recoil/dashboardState';
import Category from '../components/Category';
import AddWidgetForm from '../components/AddWidgetForm';
import Navbar from '../components/NavBar';

function Dashboard (){
  const dashboard = useRecoilValue(dashboardState);
  const [widgetForm, setWidgetForm] = useRecoilState(displayWidgetForm)

  return (
    <div className="container mx-auto p-4 bg-slate-200 flex w-full">
      <div className='w-full'>
        <Navbar />
        <Category category={dashboard.category} />
      </div>
      {widgetForm.display && <AddWidgetForm />}
    </div>
  );
};

export default Dashboard;
