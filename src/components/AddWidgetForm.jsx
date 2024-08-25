import React, { useState } from 'react';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { dashboardState, displayWidgetForm } from '../recoil/dashboardState';
import SelectWidgets from './SelectWidgets';

function AddWidgetForm() {
  const [dashboard, setDashboard] = useRecoilState(dashboardState);
  const [widgetName, setWidgetName] = useState('');
  const [widgetText, setWidgetText] = useState('');
  const [selectedCategory, setSelectedCategory] = useState(dashboard.categories[0]?.name || '');
  const [selectedWidgetType, setSelectedWidgetType] = useState('');
  const setDisplayForm = useSetRecoilState(displayWidgetForm);

  const widgetTypes = ['line', 'pie', 'bar'];

  const addWidget = () => {
    if (!widgetName || !selectedWidgetType) {
      alert('Please fill out all fields.');
      return;
    }

    const newWidget = {
      id: Math.random().toString(36).substr(2, 9),
      name: widgetName,
      text: widgetText,
      type: selectedWidgetType,
    };

    const updatedCategories = dashboard.categories.map((category) => {
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
    setSelectedWidgetType('');
    setDisplayForm({ display: false });
  };

  return (
    <div className="my-6 p-4 bg-gray-100 rounded shadow-md z-10 absolute right-0 top-20">
      <SelectWidgets />
      <h2 className="text-lg font-bold mb-4">Add a new Widget</h2>
      <div className="mb-4">
        <label className="block mb-2">Widget Name:</label>
        <input
          type="text"
          className="p-2 border rounded w-full"
          value={widgetName}
          onChange={(e) => setWidgetName(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <label className="block mb-2">Widget Text:</label>
        <input
          type="text"
          className="p-2 border rounded w-full"
          value={widgetText}
          onChange={(e) => setWidgetText(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <label className="block mb-2">Select Category:</label>
        <select
          className="p-2 border rounded w-full"
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          {dashboard.categories.map((category, index) => (
            <option key={index} value={category.name}>
              {category.name}
            </option>
          ))}
        </select>
      </div>
      <div className="mb-4">
        <label className="block mb-2">Select Chart Type:</label>
        <select
          className="p-2 border rounded w-full"
          value={selectedWidgetType}
          onChange={(e) => setSelectedWidgetType(e.target.value)}>
          <option value="" disabled>
            Select type
          </option>
          {widgetTypes.map((type, index) => (
            <option key={index} value={type}>
              {type}
            </option>
          ))}
        </select>
      </div>
      <button
        className="bg-blue-500 text-white py-2 px-4 rounded w-32"
        onClick={addWidget}>
        Add Widget
      </button>
      <button
        className="bg-red-500 text-white py-2 px-4 rounded ml-3 w-32"
        onClick={() => setDisplayForm({ display: false })}>
        Cancel
      </button>
    </div>
  );
}

export default AddWidgetForm;
