import { ReactNode } from 'react';
import styled from 'styled-components';
import { flex, font } from 'styles';

interface ITitleProps {
  children: ReactNode;
}

function Title(props: ITitleProps) {
  const { children, ...restProps } = props;
  return <Container {...restProps}>{children}</Container>;
}

export default Title;

const Container = styled.div`
  ${flex('', '', 'row')}
  ${font(13, 700)}
  margin-bottom: 25px;
  height: 17px;
  display: table-caption;
  padding-left: 4px;
`;
