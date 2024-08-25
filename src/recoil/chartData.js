export const donutCharts = [{
    data: [
      { name: 'Vulnerability Scanning', y: 40 },
      { name: 'Compliance Monitoring', y: 35 },
      { name: 'Threat Detection', y: 25 },
    ]
  },
  {
    data: [
      { name: 'Runtime Security', y: 30 },
      { name: 'Network Security', y: 45 },
      { name: 'Identity & Access Management', y: 25 },
    ]
  },
  {
    data: [
      { name: 'Data Protection', y: 50 },
      { name: 'Incident Response', y: 30 },
      { name: 'Audit Logging', y: 20 },
    ]
  },
  {
    data: [
      { name: 'Container Security', y: 45 },
      { name: 'API Security', y: 30 },
      { name: 'Workload Protection', y: 25 },
    ]
  }
];

export const lineCharts = [{
    data: {xAxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
    },
    series: [
      {
        name: 'Security Incidents',
        data: [120, 150, 130, 180, 160, 190, 210],
      },
    ]}
  },
  {
    data:{xAxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
    },
    series: [
      {
        name: 'Vulnerabilities Detected',
        data: [200, 250, 230, 270, 290, 310, 330],
      },
    ]}
  },
  {
    data: {xAxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
    },
    series: [
      {
        name: 'Compliance Checks Failed',
        data: [80, 90, 85, 100, 110, 95, 105],
      },
    ]}
  },
  {
    data: {xAxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
    },
    series: [
      {
        name: 'Containers Scanned',
        data: [150, 180, 170, 200, 210, 230, 250],
      },
    ]}
  }
];

export const barCharts = [{
    data: {xAxis: {
      categories: ['Vulnerabilities'],
    },
    series: [
      { name: 'Critical', data: [18] },
      { name: 'High', data: [140] },
      { name: 'Medium', data: [780] },
      { name: 'Low', data: [450] },
      { name: 'Negligible', data: [50] },
    ]}
  },
  {
    data: {xAxis: {
      categories: ['Vulnerabilities'],
    },
    series: [
      { name: 'Critical', data: [22] },
      { name: 'High', data: [160] },
      { name: 'Medium', data: [810] },
      { name: 'Low', data: [420] },
      { name: 'Negligible', data: [45] },
    ]}
  },
  {
    data: {xAxis: {
      categories: ['Vulnerabilities'],
    },
    series: [
      { name: 'Critical', data: [14] },
      { name: 'High', data: [150] },
      { name: 'Medium', data: [790] },
      { name: 'Low', data: [460] },
      { name: 'Negligible', data: [48] },
    ]}
  },
  {
    data:{xAxis: {
      categories: ['Vulnerabilities'],
    },
    series: [
      { name: 'Critical', data: [20] },
      { name: 'High', data: [170] },
      { name: 'Medium', data: [820] },
      { name: 'Low', data: [410] },
      { name: 'Negligible', data: [40] },
    ]}
  }
];
