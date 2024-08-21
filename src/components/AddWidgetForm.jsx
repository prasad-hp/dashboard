import React, { useState } from 'react';
import { useRecoilState } from 'recoil';
import { dashboardState } from '../recoil/dashboardState';

function AddWidgetForm() {
  const [dashboard, setDashboard] = useRecoilState(dashboardState);
  const [widgetName, setWidgetName] = useState('');
  const [widgetText, setWidgetText] = useState('');
  const [selectedCategory, setSelectedCategory] = useState(dashboard.categories[0]?.name || '');

  const addWidget = () => {
    const newWidget = {
      id: Math.random().toString(36).substr(2, 9),
      name: widgetName,
      text: widgetText,
    };

    const updatedCategories = dashboard.categories.map(category => {
      if (category.name === selectedCategory) {
        return {
          ...category,
          widgets: [...category.widgets, newWidget],
        };
      }
      return category;
    });

    setDashboard({ categories: updatedCategories });
    setWidgetName('');
    setWidgetText('');
  };

  return (
    <div className="my-6 p-4 bg-gray-100 rounded shadow-md">
      <h2 className="text-lg font-bold mb-4">Add a new Widget</h2>
      <div className="mb-4">
        <label className="block mb-2">Widget Name:</label>
        <input
          type="text"
          className="p-2 border rounded w-full"
          value={widgetName}
          onChange={e => setWidgetName(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <label className="block mb-2">Widget Text:</label>
        <input
          type="text"
          className="p-2 border rounded w-full"
          value={widgetText}
          onChange={e => setWidgetText(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <label className="block mb-2">Select Category:</label>
        <select
          className="p-2 border rounded w-full"
          value={selectedCategory}
          onChange={e => setSelectedCategory(e.target.value)}
        >
          {dashboard.categories.map((category, index) => (
            <option key={index} value={category.name}>
              {category.name}
            </option>
          ))}
        </select>
      </div>
      <button
        className="bg-blue-500 text-white py-2 px-4 rounded"
        onClick={addWidget}
      >
        Add Widget
      </button>
    </div>
  );
};

export default AddWidgetForm;
