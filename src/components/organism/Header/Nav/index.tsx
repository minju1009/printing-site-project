import styled from 'styled-components';

import Logo from 'components/atoms/Logo';
import NavMenu from './NavMenu';

import { flex, theme } from 'styles';

const NAV_MENU = [
  { id: 1, name: '명함', path: '/', isNew: true },
  { id: 2, name: '스티커', path: '/sticker', isNew: false },
  { id: 3, name: '어패럴', path: '/apparel', isNew: true },
  { id: 4, name: '배너/현수막', path: '/banner', isNew: false },
  { id: 5, name: '사인/포스터', path: '/poster', isNew: false },
  { id: 6, name: '홍보물', path: '/promotions', isNew: false },
  { id: 7, name: '봉투/쇼핑백', path: '/bag', isNew: false },
  { id: 8, name: 'MD', path: '/md', isNew: true },
  { id: 9, name: '카드', path: '/card', isNew: false },
  { id: 10, name: '캘린더', path: '/calendar', isNew: false },
  { id: 11, name: '액세서리', path: '/accessory', isNew: false },
];

export default function Nav() {
  return (
    <Container>
      <Wrapper>
        <Logo width={107} />
        <Navigation>
          {NAV_MENU.map(({ id, name, path, isNew }) => (
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
