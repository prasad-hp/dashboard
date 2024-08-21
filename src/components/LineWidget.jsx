import React, { useEffect, useRef } from 'react'
import { useRecoilState } from 'recoil'
import { dashboardState } from '../recoil/dashboardState'
import { Chart, registerables } from 'chart.js'; // Import Chart.js components

// Register the necessary components
Chart.register(...registerables);

function LineWidget({ widget, category }) {
    const [dashboard, setDashboard] = useRecoilState(dashboardState);
    const canvasRef = useRef(null);
    const chartRef = useRef(null);

    const removeWidget = () => {
        const updatedCategories = dashboard.categories.map(cat => {
            if (cat.name === category) {
                return {
                    ...cat,
                    widgets: cat.widgets.filter(w => w.id !== widget.id)
                }
            }
            return cat;
        });

        setDashboard({
            ...dashboard,
            categories: updatedCategories
        });
    }

    useEffect(() => {
        const ctx = canvasRef.current.getContext("2d");

        if (chartRef.current) {
            chartRef.current.destroy();
        }

        const DATA_COUNT = 7;
        const NUMBER_CFG = { count: DATA_COUNT, min: -100, max: 100 };
        const labels = Array.from({ length: DATA_COUNT }, (_, i) => `Month ${i + 1}`);

        chartRef.current = new Chart(ctx, {
            type: "line",
            data: {
                labels: labels,
                datasets: [
                    {
                        label: 'Dataset 1',
                        data: Array.from({ length: DATA_COUNT }, () => Math.floor(Math.random() * 200) - 100),
                        borderColor: 'rgba(255, 99, 132, 1)',
                        backgroundColor: 'rgba(255, 99, 132, 0.2)',
                    },
                    {
                        label: 'Dataset 2',
                        data: Array.from({ length: DATA_COUNT }, () => Math.floor(Math.random() * 200) - 100),
                        borderColor: 'rgba(54, 162, 235, 1)',
                        backgroundColor: 'rgba(54, 162, 235, 0.2)',
                    }
                ]
            },
            options: {
                responsive: true,
                plugins: {
                    legend: {
                        position: 'top',
                    },
                    title: {
                        display: true,
                        text: 'Chart.js Line Chart'
                    }
                }
            }
        });

        // Cleanup chart on component unmount
        return () => {
            if (chartRef.current) {
                chartRef.current.destroy();
            }
        };
    }, [widget, category]);

    return (
        <div className="bg-white p-4 rounded shadow-md relative">
            <h3 className="text-lg font-semibold">{widget.name}</h3>
            <canvas ref={canvasRef}></canvas> {/* Add canvas element */}
            <button
                className="absolute top-0 right-0 p-2 text-red-500"
                onClick={removeWidget}>
                ×
            </button>
        </div>
    )
}

export default LineWidget;
