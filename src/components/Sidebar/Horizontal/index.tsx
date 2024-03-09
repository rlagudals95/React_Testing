import React, { useState } from 'react';

import { TreeNode } from '../model';
import { SIDE_BAR_WIDTH, SidebarProps } from './model';
import {
  ChildMenuWrapper,
  HorizontalWrapper,
  SidebarContainer,
  SidebarItem,
} from './styles';

import { ArrowRight } from '@assets/icon/arrow/ArrowRight';

export const HorizontalMode: React.FC<SidebarProps> = ({ data, depth = 1 }) => {
  const [openItem, setOpenItem] = useState<string | null>(null);

  const toggleItem = (item: TreeNode) => {
    const { label, children } = item;

    if (openItem === label) {
      setOpenItem(null);
    } else {
      setOpenItem(String(label));
    }
  };

  const isItemOpen = (label: string | number) => openItem === label;

  return (
    <SidebarContainer>
      {data.map((item, index) => {
        const hasChildren = item.children.length > 0;
        const isOpen = isItemOpen(item.label);
        const childLeftGap = depth * SIDE_BAR_WIDTH;

        return (
          <HorizontalWrapper key={String(item.label) + index}>
            <SidebarItem
              level={depth}
              hasChildren={hasChildren}
              onClick={() => toggleItem(item)}
            >
              <p>{item.label}</p>

              {hasChildren && <ArrowRight rotate={isOpen ? 90 : 0} />}
            </SidebarItem>

            {isOpen && hasChildren && (
              <ChildMenuWrapper left={childLeftGap}>
                <HorizontalMode data={item.children} depth={depth + 1} />
              </ChildMenuWrapper>
            )}
          </HorizontalWrapper>
        );
      })}
    </SidebarContainer>
  );
};
