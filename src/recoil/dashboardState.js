import { atom } from 'recoil';

export const dashboardState = atom({
  key: 'dashboardState',
  default: {
    categories: [
      {
        name: 'CSPM Executive Dashboard',
        widgets: [
          {
            id: 1,
            name: 'Cloud Accounts',
            type: "doughnut"
          },
          {
            id: 2,
            name: 'Cloud Account Risk Assesment',
            type: "doughnut"
          },
        ],
      },
      {
        name: 'CWPP Dashboard',
        widgets: [
          {
            id:1,
            name: "Top 5 Namespace Specific Alerts",
            text:"No graph Data available",
            type:"line"
          },
          {
            id:2,
            name: "Workload Alerts",
            text:"No graph Data available",
            type:"line"
          }
        ],
      },
      {
        name: 'Registry Scan',
        widgets: [{
          id:1,
          name: "Image Risk Assesment"
        },
        {
          id:2,
          name: "Image Security Issues"
        }],
      },
    ],
  },
});
