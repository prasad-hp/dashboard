// Dashboard.js
import React from 'react';
import { useRecoilValue } from 'recoil';
import { dashboardState } from '../recoil/dashboardState'; // Adjust the import path as needed
import DonutChart from './DonutChart';
import LineChart from './LineChart';
import StackedBarChart from './StackedBarChart';

function Charts() {
  const { categories } = useRecoilValue(dashboardState);

  return (
    <div className="p-4">
      {categories.map((category) => (
        <div key={category.name} className="mb-8">
          <h2 className="text-2xl font-bold mb-4">{category.name}</h2>
          <div className="flex flex-wrap gap-4">
            {category.widgets.map((widget) => {
              const { id, type, name } = widget;

              return (
                <div key={id} className="flex-1 min-w-[300px]">
                  {type === 'pie' && <DonutChart name={name} />}
                  {type === 'line' && <LineChart name={name} />}
                  {type === 'bar' && <StackedBarChart name={name} />}
                  {type !== 'pie' && type !== 'line' && type !== 'bar' && <div>No chart available for this type</div>}
                </div>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Charts;
