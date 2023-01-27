import styled from 'styled-components';

import Logo from 'components/atoms/Logo';
import NavMenu from './NavMenu';
import { NAV_MENU_LIST } from 'components/organism/Header/constant';

import { flex, theme } from 'styles';

export default function Nav() {
  return (
    <Container>
      <Wrapper>
        <Logo width={107} />
        <Navigation>
          {NAV_MENU_LIST.map(({ id, name, path, isNew }) => (
            <NavMenu key={id} isNew={isNew} path={path}>
              {name}
            </NavMenu>
          ))}
        </Navigation>
        <CartWrap>
          <CartIcon />

          <CartText>장바구니</CartText>
        </CartWrap>
      </Wrapper>
    </Container>
  );
}

const Container = styled.div`
  border-bottom: 1px solid ${theme.GREY_MEDIUM};
`;

const Wrapper = styled.div`
  ${flex('space-between', 'center')}
  width: 1140px;
  margin: 0 auto;
  padding: 22px 0;
`;

const Navigation = styled.ul`
  ${flex('space-between', 'center', 'row')};
  gap: 33px;
  padding: 0 25px 0 45px;
  height: 100%;
`;

const CartWrap = styled.button`
  ${flex('space-between', 'center')}
`;

const CartIcon = styled.span`
  width: 38px;
  height: 38px;
  border-radius: 50%;
  background: url('/images/ic-cart-blue-dark.svg');

  :hover {
    background: url('/images/ic-cart-blue-light.svg');
  }
`;

const CartText = styled.span`
  padding: 10px 0 10px 10px;
`;
