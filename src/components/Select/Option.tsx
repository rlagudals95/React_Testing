import styled from "@emotion/styled";
import { SelectContext } from "./Select";
import { useContext } from "react";

export interface OptionProps {
    value: string;
    children: React.ReactNode
}

const OptionContainer = styled.div<{ selected: boolean }>`
  padding: 8px;
  cursor: pointer;
  background-color: ${(props) => (props.selected ? '#e0e0e0' : 'transparent')};

  &:hover {
    background-color: #f0f0f0;
  }
`;

export const Option: React.FC<OptionProps> = ({ value, children }) => {
    const context = useContext(SelectContext);

    if (!context) {
        throw new Error('Option 컴포넌트는 Select 컴포넌트 안에서 사용되어야 합니다.');
    }

    const { selectedValue, onSelect } = context;

    return (
        <OptionContainer
            selected={value === selectedValue}
            onClick={() => onSelect(value)}
        >
            {children}
        </OptionContainer>
    );
};


