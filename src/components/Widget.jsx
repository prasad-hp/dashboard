import React, { useEffect, useRef } from 'react';
import { useRecoilState } from 'recoil';
import { dashboardState } from '../recoil/dashboardState';
import { Chart } from 'chart.js/auto'; // Import Chart.js properly

const Widget = ({ widget, category }) => {
  const [dashboard, setDashboard] = useRecoilState(dashboardState);
  const canvasRef = useRef(null); // Create a ref for the canvas element
  const chartRef = useRef(null); // Create a ref for the Chart.js instance

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

  useEffect(() => {
    const ctx = canvasRef.current.getContext('2d'); // Get the 2D context of the canvas
    // Destroy the existing chart if it exists
    if (chartRef.current) {
      chartRef.current.destroy();
    }

    // Create a new chart instance and store it in chartRef
    chartRef.current = new Chart(ctx, {
      type: 'doughnut',
      data: {
        labels: ['Red', 'Blue', 'Yellow'],
        datasets: [{
          label: 'My First Dataset',
          data: [300, 50, 100],
          backgroundColor: [
            'rgb(255, 99, 132)',
            'rgb(54, 162, 235)',
            'rgb(255, 205, 86)'
          ],
          hoverOffset: 4
        }]
      }
    });

    // Cleanup chart instance on component unmount
    return () => {
      if (chartRef.current) {
        chartRef.current.destroy();
      }
    };
  }, []); // Empty dependency array to run once on mount

  return (
    <div className="bg-white p-4 rounded shadow-md relative">
      <h3 className="text-lg font-semibold">{widget.name}</h3>
      <canvas ref={canvasRef}>fsdfsdf</canvas> {/* Add canvas element */}
      <button
        className="absolute top-0 right-0 p-2 text-red-500"
        onClick={removeWidget}>
        ×
      </button>
    </div>
  );
};

export default Widget;
