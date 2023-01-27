import styled from 'styled-components';
import TopMenu from './TopMenu';
import Nav from './Nav';

export default function Header() {
  return (
    <Container>
      <TopMenu />
      <Nav />
    </Container>
  );
}

const Container = styled.header``;
