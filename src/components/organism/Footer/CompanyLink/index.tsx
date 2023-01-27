import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { flex, theme } from 'styles';
import { COMPANY_LINK_LIST, COMPANY_SNS_LIST } from '../constant';

export default function CompanyLink() {
  const navigate = useNavigate();

  const handleLinkClick = (url: string): void => {
    if (url.includes('https')) {
      window.open(url, '_blank', 'noopener, noreferrer');
      return;
    }

    navigate(url);
  };

  return (
    <Container>
      <CompanyLinks>
        {COMPANY_LINK_LIST.map(({ name, url }, idx) => (
          <LinkBtnWrap key={`companyLink-${idx}`}>
            <LinkBtn onClick={() => handleLinkClick(url)}>{name}</LinkBtn>
          </LinkBtnWrap>
        ))}
      </CompanyLinks>
      <SNSLinks>
        {COMPANY_SNS_LIST.map(({ name, url, imgSrc }, idx) => (
          <SNSLink key={`SNSLink-${idx}`} onClick={() => handleLinkClick(url)}>
            <img alt={name} src={imgSrc} />
          </SNSLink>
        ))}
      </SNSLinks>
    </Container>
  );
}

const Container = styled.div`
  ${flex('space-between', 'center')}
  padding: 0 0 12px;
`;

const CompanyLinks = styled.div`
  span {
    padding: 0 12px;
    border-right: 2px solid ${theme.GREY_MEDIUM};

    &:first-child {
      padding: 0 12px 0 0;
    }

    &:last-child {
      border-right: none;
    }
  }
`;

const LinkBtnWrap = styled.span``;

const LinkBtn = styled.button``;

const SNSLinks = styled.div`
  ${flex('space-between', 'center')}
  gap: 20px;
`;

const SNSLink = styled.button`
  width: 18px;
  height: 18px;
`;
