import { ReactNode, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled, { css } from 'styled-components';

import { fontSize, theme } from 'styles';

import DropdownMenu from './DropdownMenu';

interface INavMenuProps {
  children: ReactNode;
  path: string;
  isNew?: boolean;
  menuId: number;
}

export default function NavMenu({ children, path, isNew, menuId }: INavMenuProps) {
  const { pathname } = useLocation();
  const [dropdownMenuId, setDropdownMenuId] = useState(0);

  const handleMouseEnter = () => {
    setDropdownMenuId(menuId);
  };

  const handleMouseLeave = () => {
    setDropdownMenuId(0);
  };

  return (
    <Container onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <Link to={path}>
        {isNew && (
          <NewIcon>
            <img alt="new icon" src="/images/ic-new.svg" />
          </NewIcon>
        )}
        <Text hover={dropdownMenuId === menuId} selected={pathname === path}>
          {children}
        </Text>
      </Link>
      {dropdownMenuId === menuId && <DropdownMenu dropdownMenuId={dropdownMenuId} />}
    </Container>
  );
}

interface ISelectedStyle {
  selected: boolean;
  hover: boolean;
}

const Container = styled.li`
  position: relative;
  padding: 40px 0;
`;

const NewIcon = styled.div`
  position: absolute;
  top: 16px;
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

  ${({ hover }) =>
    hover &&
    css`
      color: ${theme.BLUE_DARK};
    `}
`;
