import styled from '@emotion/styled';

export const Wrapper = styled.div`
  position: fixed;
  left: 20px;
  bottom: 20px;
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
