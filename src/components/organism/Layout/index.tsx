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
  width: 100%;
  margin: 0 auto;
`;

const Body = styled.main`
  width: 100%;
`;
