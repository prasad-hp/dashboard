// StackedBarChart.js
import React from 'react';
import HighchartsReact from 'highcharts-react-official';
import Highcharts from 'highcharts';

const StackedBarChart = ({name}) => {
  const options = {
    chart: {
      type: 'bar',
    },
    title: {
      text: name,
    },
    xAxis: {
      categories: ['Vulnerabilities'],
    },
    yAxis: {
      min: 0,
      title: {
        text: '1740 Total Vulnerabilities',
      },
    },
    legend: {
      reversed: true,
    },
    plotOptions: {
      series: {
        stacking: 'normal',
      },
    },
    series: [
      {
        name: 'Critical',
        data: [9],
      },
      {
        name: 'High',
        data: [150],
      },
      {
        name: 'Medium',
        data: [840],
      },
      {
        name: 'Low',
        data: [400],
      },
      {
        name: 'Negligible',
        data: [34],
      },
    ],
  };

  return <HighchartsReact highcharts={Highcharts} options={options} />;
};

export default StackedBarChart;
