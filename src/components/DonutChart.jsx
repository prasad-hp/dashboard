// DonutChart.js
import React from 'react';
import HighchartsReact from 'highcharts-react-official';
import Highcharts from 'highcharts';

const DonutChart = ({name}) => {
  const options = {
    chart: {
      type: 'pie',
    },
    title: {
      text: name,
    },
    plotOptions: {
      pie: {
        innerSize: '50%',
        depth: 45,
        dataLabels: {
          enabled: true,
          format: '{point.name}: {point.y}%',
        },
      },
    },
    series: [
      {
        name: 'Share',
        data: [
          { name: 'Category A', y: 30 },
          { name: 'Category B', y: 20 },
          { name: 'Category C', y: 50 },
        ],
      },
    ],
  };
  return <HighchartsReact highcharts={Highcharts} options={options} />;
};

export default DonutChart;
