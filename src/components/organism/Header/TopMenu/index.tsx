import Logo from 'components/atoms/Logo';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { TOP_MENU_LIST } from 'components/organism/Header/constant';
import { flex, font, theme } from 'styles';

export default function TopMenu() {
  return (
    <Container>
      <Wrapper>
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
          {TOP_MENU_LIST.map(({ id, name, path }) => (
            <Link key={id} to={path}>
              <Menu>{name}</Menu>
            </Link>
          ))}
        </RightWrap>
      </Wrapper>
    </Container>
  );
}

const Container = styled.div`
  background-color: ${theme.GREY_LIGHT};
  border-bottom: 1px solid ${theme.GREY_MEDIUM};
  width: 100vw;
`;

const Wrapper = styled.div`
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
  cursor: pointer;
`;

const Dot = styled(Menu)`
  width: 2px;
  height: 2px;
  background-color: ${theme.GREY_DARK};
`;
