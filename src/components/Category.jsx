import React from 'react';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import { dashboardState, displayWidgetForm } from '../recoil/dashboardState';
import DonutChart from './DonutChart';
import LineChart from './LineChart';
import StackedBarChart from './StackedBarChart';

function Charts() {
  const { categories } = useRecoilValue(dashboardState);
  const setDisplayForm = useSetRecoilState(displayWidgetForm)

  return (
    <div className="p-4">
      {categories.map((category) => (
        <div key={category.name} className="mb-8">
          <h2 className="text-2xl font-bold mb-4">{category.name}</h2>
          <div className="flex flex-wrap gap-4">
            {category.widgets.map((widget) => {
              const { id, type, name } = widget;
              return (
                <div  
                  key={id}
                  className="flex-1 min-w-[300px] max-w-[450px] min-h-[300px] max-h-[450px] border border-gray-300 p-2 rounded-lg overflow-x-auto"
                >
                  {type === 'pie' && <DonutChart name={name} />}
                  {type === 'line' && <LineChart name={name} />}
                  {type === 'bar' && <StackedBarChart name={name} />}
                  {type !== 'pie' && type !== 'line' && type !== 'bar' && <div>No chart available for this type</div>}
                </div>
              );
            })}
            <div
              className="flex items-center justify-center flex-1 min-w-[300px] max-w-[450px] min-h-[300px] max-h-[450px] border border-dashed border-gray-300 p-2 rounded-lg cursor-pointer"
              onClick={() => setDisplayForm({display:true})}>
              <button className="text-gray-500">+ Add Widget</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Charts;
