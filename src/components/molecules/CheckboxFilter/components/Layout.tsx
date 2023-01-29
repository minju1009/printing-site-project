import { HTMLAttributes, ReactNode } from 'react';
import styled from 'styled-components';

interface ILayoutProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

function Layout(props: ILayoutProps) {
  const { children, ...restProps } = props;
  return <Container {...restProps}>{children}</Container>;
}

export default Layout;

const Container = styled.div`
  display: table;
  width: 25%;
`;
