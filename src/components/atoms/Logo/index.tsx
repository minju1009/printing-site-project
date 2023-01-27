import { Link } from 'react-router-dom';
import styled from 'styled-components';

interface ILogoProps {
  path?: string;
  width?: number;
  imgSrc?: string;
}

export default function Logo({ width, path = '', imgSrc = '/images/ic-logo.svg' }: ILogoProps) {
  if (path) {
    return (
      <Link to={path}>
        <Wrapper width={width}>
          <img alt="logo" src={imgSrc} />
        </Wrapper>
      </Link>
    );
  }
  return (
    <Wrapper width={width}>
      <img alt="logo" src={imgSrc} />
    </Wrapper>
  );
}

interface IWrapperStyle {
  width?: number;
}

const Wrapper = styled.button<IWrapperStyle>`
  width: ${(props) => props.width}px;
  cursor: pointer;
`;
