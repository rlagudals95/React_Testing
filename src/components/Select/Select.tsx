// Select.tsx
import React, { useState, createContext, ReactNode } from 'react';

import styled from '@emotion/styled';
import { Option, OptionProps } from './Option';

interface IComposition {
    Option: React.FC<OptionProps>
}

// Context 생성
interface SelectContextProps {
    selectedValue: string;
    onSelect: (value: string) => void;
}

export const SelectContext = createContext<SelectContextProps | undefined>(undefined);

// Select 컴포넌트
interface SelectProps {
    children: ReactNode;
    defaultValue?: string;
}

const SelectContainer = styled.div`
  position: relative;
  display: inline-block;
`;

const Select: React.FC<SelectProps> & IComposition = ({ children, defaultValue = '' }) => {
    const [selectedValue, setSelectedValue] = useState<string>(defaultValue);

    const onSelect = (value: string) => {
        setSelectedValue(value);
    };

    return (
        <SelectContext.Provider value={{ selectedValue, onSelect }}>
            <SelectContainer className="select-container">{children}</SelectContainer>
        </SelectContext.Provider>
    );
};

Select.Option = Option

export default Select;

// 사용 예시
// <Select defaultValue="option1">
//   <Option value="option1">Option 1</Option>
//   <Option value="option2">Option 2</Option>
//   <Option value="option3">Option 3</Option>
// </Select>