import { TreeNode } from '@components/Sidebar/model';

export const testTreeNode: TreeNode[] = [
  {
    label: 'nav1',
    children: [
      {
        label: 'Bret',
        children: [],
      },
    ],
  },
  {
    label: 'nav2',
    children: [
      {
        label: 'Sincere@april.biz',
        children: [],
      },
    ],
  },
  {
    label: 'nav3',
    children: [
      {
        label: 'street',
        children: [
          {
            label: 'Kulas Light',
            children: [],
          },
        ],
      },
      {
        label: 'suite',
        children: [
          {
            label: 'Apt. 556',
            children: [],
          },
        ],
      },
      {
        label: 'city',
        children: [
          {
            label: 'Gwenborough',
            children: [],
          },
        ],
      },
      {
        label: 'zipcode',
        children: [
          {
            label: '92998-3874',
            children: [],
          },
        ],
      },
      {
        label: 'geo',
        children: [
          {
            label: 'lat',
            children: [
              {
                label: -37.3159,
                children: [],
              },
            ],
          },
          {
            label: 'lng',
            children: [
              {
                label: 81.1496,
                children: [],
              },
            ],
          },
        ],
      },
    ],
  },
];
