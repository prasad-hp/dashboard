import React from 'react';
import DoughnutWidget from './DoughnutWidget';
import LineWidget from './LineWidget';
import StackedBarWidget from './StackedBarWidget';

function Category({ category }) {
  return (
    <div className="mb-6">
      <h2 className="text-xl font-bold mb-4">{category.name}</h2>
      <div className="grid grid-cols-3 gap-4">
        {category.name === "CSPM Executive Dashboard" &&
          category.widgets.map(widget => (
            <DoughnutWidget key={widget.id} widget={widget} category={category.name} />
          ))
        }
        {category.name === "CWPP Dashboard" &&
          category.widgets.map(widget => (
            <LineWidget key={widget.id} widget={widget} category={category.name} />
          ))}
          <StackedBarWidget />
      </div>
    </div>
  );
};

export default Category;
