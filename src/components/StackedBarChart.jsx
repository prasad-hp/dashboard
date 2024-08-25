import React from 'react';
import HighchartsReact from 'highcharts-react-official';
import Highcharts from 'highcharts';

const StackedBarChart = ({ name, chartData }) => {
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
        text: 'Total Vulnerabilities',
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
    series: chartData.series,
  };

  return <HighchartsReact highcharts={Highcharts} options={options} />;
};

export default StackedBarChart;
