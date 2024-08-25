import React, { useState } from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { useRecoilState } from 'recoil';
import { dashboardState } from '../recoil/dashboardState';

function SelectWidgets() {
  const [widgetData, setWidgetData] = useRecoilState(dashboardState); 
  const [alignment, setAlignment] = useState('CSPM Executive Dashboard'); 
  const [selectedWidgets, setSelectedWidgets] = useState(
    widgetData.categories
      .find(category => category.name === 'CSPM Executive Dashboard')
      .widgets.map(widget => widget.name)
  );

  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
    const selectedCategory = widgetData.categories.find(
      (category) => category.name === newAlignment
    );
    setSelectedWidgets(selectedCategory.widgets.map(widget => widget.name));
  };

  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    setSelectedWidgets((prev) =>
      checked ? [...prev, name] : prev.filter((widget) => widget !== name)
    );

    // Update the dashboardState to remove/add widget based on the checkbox state
    setWidgetData((prevState) => ({
      ...prevState,
      categories: prevState.categories.map((category) => {
        if (category.name === alignment) {
          return {
            ...category,
            widgets: checked
              ? [...category.widgets, { id: category.widgets.length + 1, name, type: "custom" }] // Add widget if checked
              : category.widgets.filter((widget) => widget.name !== name), // Remove widget if unchecked
          };
        }
        return category;
      }),
    }));
  };

  const selectedCategory = widgetData.categories.find(
    (category) => category.name === alignment
  );

  return (
    <div>
      <ToggleButtonGroup
        color="primary"
        value={alignment}
        exclusive
        onChange={handleChange}
        aria-label="Platform"
      >
        <ToggleButton value="CSPM Executive Dashboard">CSPM Executive Dashboard</ToggleButton>
        <ToggleButton value="CWPP Dashboard">CWPP Dashboard</ToggleButton>
        <ToggleButton value="Registry Scan">Registry Scan</ToggleButton>
      </ToggleButtonGroup>

      <FormGroup>
        {selectedCategory &&
          selectedCategory.widgets.map((widget) => (
            <FormControlLabel
              key={widget.id}
              control={
                <Checkbox
                  name={widget.name}
                  checked={selectedWidgets.includes(widget.name)}
                  onChange={handleCheckboxChange}
                />
              }
              label={widget.name}
            />
          ))}
      </FormGroup>
    </div>
  );
}

export default SelectWidgets;
