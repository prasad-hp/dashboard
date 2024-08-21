import React from 'react';
import { useRecoilState } from 'recoil';
import { dashboardState } from '../recoil/dashboardState';

const Widget = ({ widget, category }) => {
  const [dashboard, setDashboard] = useRecoilState(dashboardState);

  const removeWidget = () => {
    const updatedCategories = dashboard.categories.map(cat => {
      if (cat.name === category) {
        return {
          ...cat,
          widgets: cat.widgets.filter(w => w.id !== widget.id),
        };
      }
      return cat;
    });
    setDashboard({ categories: updatedCategories });
  };

  return (
    <div className="bg-white p-4 rounded shadow-md relative">
      <h3 className="text-lg font-semibold">{widget.name}</h3>
      <p>{widget.text}</p>
      <button
        className="absolute top-0 right-0 p-2 text-red-500"
        onClick={removeWidget}
      >
        ×
      </button>
    </div>
  );
};

export default Widget;
