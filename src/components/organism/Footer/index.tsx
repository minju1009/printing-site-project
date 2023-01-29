import styled from 'styled-components';

import CompanyInfo from './CompanyInfo';
import CompanyLink from './CompanyLink';

import { theme } from 'styles';
import ScrollUpBtn from './ScrollUpBtn';

export default function Footer() {
  return (
    <Container>
      <Wrapper>
        <CompanyLink />
        <CompanyInfo />
      </Wrapper>
      <ScrollUpBtn />
    </Container>
  );
}

const Container = styled.div`
  background-color: ${theme.GREY_LIGHT};
  border-bottom: 1px solid ${theme.GREY_MEDIUM};
  width: 100%;
  padding: 40px 0;
`;

const Wrapper = styled.div`
  width: 1140px;
  margin: 0 auto;
`;
