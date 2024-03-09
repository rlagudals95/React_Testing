import styled from '@emotion/styled';

import { SIDE_BAR_WIDTH } from './model';

export const SidebarContainer = styled.div`
  width: ${SIDE_BAR_WIDTH}px;
  padding: 20px 0px;
  background-color: #f0f0f0;
  height: 100vh;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  position: fixed;
  border-right: 1px solid black;
`;

export const HorizontalWrapper = styled.div`
  display: flex;
`;

export const SidebarItem = styled.div<{ level: number; hasChildren: boolean }>`
  padding: 10px 10px 4px 20px;
  margin-bottom: 5px;
  display: flex;
  justify-content: space-between;
  gap: 0.5rem;
  align-items: center;
  cursor: ${({ hasChildren }) => (hasChildren ? 'pointer' : 'default')};
  color: ${({ hasChildren }) => (hasChildren ? '#000' : '#666')};
  width: 100%;

  p {
    width: 85%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  &:hover {
    background-color: ${({ hasChildren }) =>
      hasChildren ? '#e0e0e0' : 'transparent'};
  }
`;

export const ChildMenuWrapper = styled.div<{ left: number }>`
  position: fixed;
  top: 0;
  left: ${(props) => `${props.left}px`};
`;
