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
            name: 'Widget 1',
            text: 'Random text for widget 1',
          },
          {
            id: 2,
            name: 'Widget 2',
            text: 'Random text for widget 2',
          },
        ],
      },
      {
        name: 'Another Category',
        widgets: [],
      },
    ],
  },
});
