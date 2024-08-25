// DonutChart.js
import React from 'react';
import HighchartsReact from 'highcharts-react-official';
import Highcharts from 'highcharts';

const DonutChart = ({name, data}) => {
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
        data: data,
      },
    ],
  };
  return <HighchartsReact highcharts={Highcharts} options={options} />;
};

export default DonutChart;
