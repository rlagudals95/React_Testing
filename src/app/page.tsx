'use client';
import React, { useCallback, useState } from 'react';

import { Sidebar } from '../components/Sidebar';

import { JsonUploader } from '@components/JsonUploader';
import { TreeNode } from '@components/Sidebar/model';
import { testTreeNode } from '@constants/config/testData';
import { createTreeFromJson, JsonDataType, Node } from '@utils/json.util';

const Home: React.FC = () => {
  const [data, setData] = useState<TreeNode[]>(testTreeNode);

  const onJsonUpload = useCallback((jsonData: JsonDataType) => {
    const treeData: Node[] = createTreeFromJson(jsonData);
    setData(treeData);
  }, []);

  return (
    <React.Fragment>
      <JsonUploader onJsonUpload={onJsonUpload} />
      <Sidebar data={data} />
    </React.Fragment>
  );
};

export default Home;
