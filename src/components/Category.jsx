// Dashboard.js
import React from 'react';
import { dashboardState } from '../recoil/dashboardState';
import DonutChart from './DonutChart';
import LineChart from './LineChart';
import StackedBarChart from './StackedBarChart';
import { useRecoilValue } from 'recoil';

function Charts() {
  const { categories } = useRecoilValue(dashboardState);

  return (
    <div>
      {categories.map((category) => (
        <div key={category.name}>
          <h2>{category.name}</h2>
          {category.widgets.map((widget) => {
            const { id, type } = widget;

            if (type === 'pie') {
              return <DonutChart key={id} />;
            } else if (type === 'line') {
              return <LineChart key={id} />;
            } else if (type === 'bar') {
              return <StackedBarChart key={id} />;
            } else {
              return <div key={id}>No chart available for this type</div>;
            }
          })}
        </div>
      ))}
    </div>
  );
}

export default Charts;
