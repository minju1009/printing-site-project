import { ReactNode } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled, { css } from 'styled-components';

import { fontSize, theme } from 'styles';

interface INavMenuProps {
  children: ReactNode;
  path: string;
  isNew?: boolean;
}

export default function NavMenu({ children, path, isNew }: INavMenuProps) {
  const { pathname } = useLocation();

  return (
    <Container>
      <Link to={path}>
        {isNew && (
          <NewIcon>
            <img alt="new icon" src="/images/ic-new.svg" />
          </NewIcon>
        )}
        <Text selected={pathname === path}>{children}</Text>
      </Link>
    </Container>
  );
}

interface ISelectedStyle {
  selected: boolean;
}

const Container = styled.li`
  position: relative;
`;

const NewIcon = styled.div`
  position: absolute;
  top: -25px;
  left: 50%;
  transform: translateX(-50%);
`;

const Text = styled.span<ISelectedStyle>`
  font-size: ${fontSize.medium};
  color: ${theme.BLACK};

  ${({ selected }) =>
    selected &&
    css`
      color: ${theme.BLUE_DARK};
    `}

  :hover {
    color: ${theme.BLUE_DARK};
  }
`;
