import styled from '@emotion/styled';

export const SidebarContainer = styled.div`
  width: fit-content;
  padding: 20px 0px;
  background-color: #f0f0f0;
  height: 100vh;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const SidebarItem = styled.div<{ level: number; hasChildren: boolean }>`
  padding-left: ${({ level }) => level * 20}px;
  padding-top: 10px;
  padding-bottom: 4px;
  margin-bottom: 5px;
  display: flex;
  gap: 0.5rem;
  align-items: center;
  cursor: ${({ hasChildren }) => (hasChildren ? 'pointer' : 'default')};
  color: ${({ hasChildren }) => (hasChildren ? '#000' : '#666')};

  &:hover {
    background-color: ${({ hasChildren }) =>
      hasChildren ? '#e0e0e0' : 'transparent'};
  }
`;

export const SidebarModeWrapper = styled.div`
  position: fixed;
  left: 20px;
  bottom: 85px;
  z-index: 2;
  display: flex;
  gap: 0.5rem;
  align-items: center;
  background: white;
  padding: 16px;
  border: 1px solid grey;

  button {
    background-color: #555;
    color: #fff;
    border: 1px solid #777;
    padding: 10px 20px;
    font-size: 16px;
    cursor: pointer;

    &:hover {
      background-color: #777;
    }
  }
`;
