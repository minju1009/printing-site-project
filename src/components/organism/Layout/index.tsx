import { ReactNode } from 'react';
import styled from 'styled-components';

import Header from 'components/organism/Header';
import Footer from 'components/organism/Footer';
import { flex } from 'styles';

interface ILayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: ILayoutProps) {
  return (
    <Container>
      <Header />
      <Body>{children}</Body>
      <Footer />
    </Container>
  );
}

const Container = styled.div`
  ${flex('', 'center', 'column')}
`;

const Body = styled.main`
  width: 1140px;
  height: 960px;
  background-color: #5e5e43;
`;
