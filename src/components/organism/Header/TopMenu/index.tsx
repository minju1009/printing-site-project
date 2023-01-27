import Logo from 'components/atoms/Logo';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { flex, font, theme } from 'styles';

const TOP_MENU = [
  { id: 1, name: '상품권', path: '/' },
  { id: 2, name: '주문/배송', path: '/' },
  { id: 3, name: '쿠폰/머니', path: '/' },
  { id: 4, name: '이벤트', path: '/' },
];

export default function TopMenu() {
  return (
    <BackgroundContainer>
      <Container>
        <LeftWrap>
          <OpmTab>
            <Logo imgSrc="/images/ic-string-logo.svg" path="/" />
          </OpmTab>
          <SnapsTab>
            <a
              href="https://www.snaps.com/?utm_source=ohprint.me&utm_medium=referral&utm_campaign=main"
              rel="noopener noreferrer"
              target="_blank"
            >
              <Logo imgSrc="/images/ic-snaps-logo.svg" />
            </a>
          </SnapsTab>
        </LeftWrap>
        <RightWrap>
          <Menu style={{ fontWeight: '700' }}>로그인</Menu>
          <Menu>회원가입</Menu>
          <Dot />
          {TOP_MENU.map(({ id, name, path }) => (
            <Link key={id} to={path}>
              <Menu>{name}</Menu>
            </Link>
          ))}
        </RightWrap>
      </Container>
    </BackgroundContainer>
  );
}

const BackgroundContainer = styled.div`
  background-color: ${theme.GREY_LIGHT};
  border-bottom: 1px solid ${theme.GREY_MEDIUM};
  width: 100vw;
`;

const Container = styled.div`
  ${flex('space-between', 'center')}
  width: 1140px;
  height: 35px;
  margin: 0 auto;
`;

const LeftWrap = styled.ul`
  ${flex('', 'center')}
  position: relative;
`;

const OpmTab = styled.div`
  height: 35px;
  line-height: 18px;
  padding: 7px 16px 0 16px;
  border-left: 1px solid ${theme.GREY_MEDIUM};
  background-color: white;
`;

const SnapsTab = styled(OpmTab)`
  background-color: ${theme.GREY_LIGHT};
`;

const RightWrap = styled(LeftWrap)``;

const Menu = styled.li`
  ${font(11, 400)}
  display: inline-block;
  margin: 0 5px;
  color: black;
`;

const Dot = styled(Menu)`
  width: 2px;
  height: 2px;
  background-color: ${theme.GREY_DARK};
`;
