import React from 'react';
import HighchartsReact from 'highcharts-react-official';
import Highcharts from 'highcharts';

const LineChart = ({ name, chartData }) => {
  const options = {
    chart: {
      type: 'line',
    },
    title: {
      text: name,
    },
    xAxis: chartData.xAxis,
    series: chartData.series,
  };
  return <HighchartsReact highcharts={Highcharts} options={options} />;
};

export default LineChart;
