import React from 'react';
import DoughnutWidget from './DoughnutWidget';
import LineWidget from './LineWidget';


function Category({ category }){
  return (
    <div className="mb-6">
      <h2 className="text-xl font-bold mb-4">{category.name}</h2>
      <div className="grid grid-cols-3 gap-4">
        {category.widgets.map(widget => (
          <DoughnutWidget key={widget.id} widget={widget} category={category.name} />
        ))}
         {category.widgets.map(widget => (
          <LineWidget key={widget.id} widget={widget} category={category.name} />
        ))}
      </div>
    </div>
  );
};

export default Category;
