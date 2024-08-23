import React, { useRef, useEffect } from 'react';
import { Chart, BarController, BarElement, CategoryScale, LinearScale, Title, Tooltip, Legend } from 'chart.js';

Chart.register(BarController, BarElement, CategoryScale, LinearScale, Title, Tooltip, Legend);

const StackedBarChart = () => {
  const chartRef = useRef(null);
  const chartInstanceRef = useRef(null);

  useEffect(() => {
    if (chartRef.current) {
      const ctx = chartRef.current.getContext('2d');

      // Destroy any existing chart instance before creating a new one
      if (chartInstanceRef.current) {
        chartInstanceRef.current.destroy();
      }

      if (ctx) {
        const config = {
          type: 'bar',
          data: {
            labels: ['January', 'February', 'March', 'April', 'May'],
            datasets: [
              {
                label: 'Dataset 1',
                data: [65, 59, 80, 81, 56],
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
              },
              {
                label: 'Dataset 2',
                data: [35, 40, 60, 47, 88],
                backgroundColor: 'rgba(54, 162, 235, 0.5)',
              },
              {
                label: 'Dataset 3',
                data: [28, 48, 40, 19, 86],
                backgroundColor: 'rgba(75, 192, 192, 0.5)',
              },
            ],
          },
          options: {
            responsive: true,
            plugins: {
              title: {
                display: true,
                text: 'Stacked Bar Chart',
              },
              tooltip: {
                mode: 'index',
                intersect: false,
              },
              legend: {
                position: 'top',
              },
            },
            scales: {
              x: {
                stacked: true,
              },
              y: {
                stacked: true,
              },
            },
          },
        };

        // Create a new chart instance and store it in the chartInstanceRef
        chartInstanceRef.current = new Chart(ctx, config);
      }
    }

    // Cleanup function to destroy the chart instance when the component unmounts
    return () => {
      if (chartInstanceRef.current) {
        chartInstanceRef.current.destroy();
      }
    };
  }, []);

  return <canvas ref={chartRef} />;
};

export default StackedBarChart;
