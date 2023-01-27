import styled from 'styled-components';
import { flex, theme } from 'styles';
import { COMPANY_INFO_LIST } from '../constant';

export default function CompanyInfo() {
  const { generalInfo, privacyManager, phoneNumber, hostingInfo } = COMPANY_INFO_LIST;

  return (
    <Container>
      <Text>{generalInfo}</Text>
      <TextWrap>
        <Text>{privacyManager}</Text>
        <Text>{phoneNumber}</Text>
        <FaqBtn>1:1 문의</FaqBtn>
      </TextWrap>
      <Text>{hostingInfo}</Text>
    </Container>
  );
}

const Container = styled.div``;

const TextWrap = styled.div`
  ${flex('flex-start', 'center')}

  div {
    padding: 0 8px;

    &:first-child {
      padding-left: 0;
      border-right: 1px solid ${theme.BLACK};
    }
  }
`;

const Text = styled.div`
  padding: 8px 0;
`;

const FaqBtn = styled.button`
  padding: 0 5px;
  border: 1px solid #ccc;
  color: #666;
  line-height: 1.82;
`;
