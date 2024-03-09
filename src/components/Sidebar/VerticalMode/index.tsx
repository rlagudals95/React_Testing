import React, { useState } from 'react';

import { TreeNode } from '../model';
import { SidebarProps } from './model';
import { SidebarContainer, SidebarItem } from './styles';

import { ArrowRight } from '@assets/icon/arrow/ArrowRight';

export const VerticalMode: React.FC<SidebarProps> = ({ data }) => {
  const [openItems, setOpenItems] = useState<string[]>([]);

  const toggleItem = (label: string) => {
    if (openItems.includes(label)) {
      setOpenItems(openItems.filter((item) => item !== label));
    } else {
      setOpenItems([...openItems, label]);
    }
  };

  const isItemOpen = (label: string) => openItems.includes(label);

  const renderTree = (items: TreeNode[], level: number = 0) => {
    return items.map((item) => {
      const hasChildren = item.children.length > 0;
      const isOpen = isItemOpen(String(item.label));

      return (
        <div key={item.label}>
          <SidebarItem
            level={level}
            hasChildren={hasChildren}
            onClick={() => toggleItem(String(item.label))}
          >
            <p>{item.label}</p>
            {hasChildren && <ArrowRight rotate={isOpen ? 90 : 0} />}
          </SidebarItem>
          {isOpen && item.children && renderTree(item.children, level + 1)}
        </div>
      );
    });
  };

  return <SidebarContainer>{renderTree(data)}</SidebarContainer>;
};
