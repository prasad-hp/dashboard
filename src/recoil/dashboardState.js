// state.js
import { atom } from 'recoil';

export const dashboardState = atom({
  key: 'dashboardState',
  default: {
    categories: [
      {
        name: 'CSPM Executive Dashboard',
        widgets: [
          { id: 1, name: 'Cloud Accounts', type: "pie" },
          { id: 2, name: 'Cloud Account Risk Assessment', type: "pie" },
        ],
      },
      {
        name: 'CWPP Dashboard',
        widgets: [
          { id: 3, name: "Top 5 Namespace Specific Alerts", text: "No graph Data available", type: "line" },
          { id: 4, name: "Workload Alerts", text: "No graph Data available", type: "line" }
        ],
      },
      {
        name: 'Registry Scan',
        widgets: [
          { id: 5, name: "Image Risk Assessment", type: "bar" },
          { id: 6, name: "Image Security Issues", type: "bar" }
        ],
      },
    ],
  },
});
