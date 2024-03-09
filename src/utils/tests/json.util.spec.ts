import { createTreeFromJson } from '../json.util';

import { TreeNode } from '@components/Sidebar/model';

describe('createTreeFromJson function', () => {
  it('should create a tree from JSON input', () => {
    const inputData = {
      name: 'Leanne Graham',
      'address.city': 'Gwenborough',
      'address.zipcode': '92998-3874',
      'address.geo.lat': -37.3159,
    };

    const expectedOutput: TreeNode[] = [
      {
        label: 'name',
        children: [
          {
            label: 'Leanne Graham',
            children: [],
          },
        ],
      },
      {
        label: 'address',
        children: [
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
            ],
          },
        ],
      },
    ];

    const result = createTreeFromJson(inputData);

    expect(result).toEqual(expectedOutput);
  });
});
