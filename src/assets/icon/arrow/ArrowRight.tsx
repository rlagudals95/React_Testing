import styled from '@emotion/styled';

interface IProps {
  fill?: string;
  rotate?: number;
}

export const ArrowRight: React.FC<IProps> = ({
  fill = 'black',
  rotate = 0,
}) => {
  return (
    <Wrapper rotate={rotate}>
      <svg
        width="24"
        height="25"
        viewBox="0 0 24 25"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M9.46967 7.96967C9.76256 7.67678 10.2374 7.67678 10.5303 7.96967L14.5303 11.9697C14.8232 12.2626 14.8232 12.7374 14.5303 13.0303L10.5303 17.0303C10.2374 17.3232 9.76256 17.3232 9.46967 17.0303C9.17678 16.7374 9.17678 16.2626 9.46967 15.9697L12.9393 12.5L9.46967 9.03033C9.17678 8.73744 9.17678 8.26256 9.46967 7.96967Z"
          fill={fill}
        />
      </svg>
    </Wrapper>
  );
};

const Wrapper = styled.div<{ rotate: number }>`
  transform: rotate(${(props) => props.rotate}deg);
`;
