import React from 'react';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import { dashboardState, displayWidgetForm } from '../recoil/dashboardState';
import Charts from '../components/Charts';
import AddWidgetForm from '../components/AddWidgetForm';
import SearchAppBar from '../components/SearchAppbar';
import TopBar from '../components/TopBar';

function Dashboard() {
  const dashboard = useRecoilValue(dashboardState);
  const [widgetForm, setWidgetForm] = useRecoilState(displayWidgetForm);

  return (
    <div className="container mx-auto bg-slate-200 flex w-full">
      <div className="w-full">
        <SearchAppBar />
        <TopBar />
        <Charts category={dashboard.category} />
      </div>
      {widgetForm.display && <AddWidgetForm />}
    </div>
  );
}

export default Dashboard;
