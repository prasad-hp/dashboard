// LineChart.js
import React from 'react';
import HighchartsReact from 'highcharts-react-official';
import Highcharts from 'highcharts';

const LineChart = ({name}) => {
  const options = {
    chart: {
        type: 'line',
      },
    title: {
      text: name,
    },
    xAxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
    },
    series: [
      {
        name: 'Sales',
        data: [150, 200, 180, 220, 240, 260, 300],
      },
    ],
  };

  return <HighchartsReact highcharts={Highcharts} options={options} />;
};

export default LineChart;
