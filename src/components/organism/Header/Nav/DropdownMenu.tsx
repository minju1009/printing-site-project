import { useCallback, useMemo } from 'react';
import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';
import { theme } from 'styles';
import { INavMenuGroup } from 'types';
import { NAV_MENU_GROUP } from '../constant';

interface IDropdownMenuProps {
  dropdownMenuId: number;
}

export default function DropdownMenu({ dropdownMenuId }: IDropdownMenuProps) {
  const currentMenuData = useMemo(
    () => NAV_MENU_GROUP.filter((data) => data.menuId === dropdownMenuId),
    [dropdownMenuId],
  );

  const categoryList = useMemo(
    () =>
      currentMenuData.reduce((acc: string[], item) => {
        if (!acc.includes(item.category)) {
          acc.push(item.category);
        }
        return acc;
      }, []),
    [currentMenuData],
  );

  const filteredData = useCallback(
    (category: string): INavMenuGroup[] => currentMenuData.filter((item) => item.category === category),
    [categoryList],
  );

  return (
    <DropdownContainer>
      <DropdownWrap>
        {categoryList.map((category, idx) => (
          <div key={`dropdown-label-${idx}`}>
            <Label category={category}>{category}</Label>
            {filteredData(category).map(({ name, isNew, attr }, index) => (
              <Item key={`dropdown-item-${index}`} isNew={isNew}>
                <StyledLink to={attr.toLowerCase().replaceAll('_', '-')}>{name}</StyledLink>
              </Item>
            ))}
          </div>
        ))}
      </DropdownWrap>
    </DropdownContainer>
  );
}

const DropdownContainer = styled.div`
  z-index: 2;
  position: absolute;
  top: 80px;
  left: 50%;
  transform: translateX(-50%);
  border: 1px solid ${theme.GREY_MEDIUM_X2};
  border-bottom: 3px solid ${theme.BLUE_DARK};
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);
  background-color: white;
  width: max-content;
  min-width: 120px;

  &:before {
    z-index: 3;
    content: '';
    position: absolute;
    width: 12px;
    height: 12px;
    top: -7px;
    left: 50%;
    transform: translateX(-50%) rotate(45deg);
    border-left: 1px solid ${theme.GREY_MEDIUM_X2};
    border-top: 1px solid ${theme.GREY_MEDIUM_X2};
    background-color: white;
  }
`;

const DropdownWrap = styled.dl`
  padding: 6px 15px;
`;

const Label = styled.dt<{ category: string }>`
  padding: 8px 0;
  font-weight: bold;

  ${({ category }) =>
    category === '' &&
    css`
      display: none;
    `}
`;

const Item = styled.dd<{ isNew: boolean }>`
  position: relative;
  padding: 8px 0;

  &:before {
    display: inline-block;
    width: 3px;
    height: 3px;
    margin: -2px 6px 0 0;
    content: '';
    border-radius: 3px;
    background-color: ${theme.GREY_MEDIUM_X2};
    vertical-align: middle;
  }

  ${({ isNew }) =>
    isNew &&
    css`
      &:after {
        content: url(/images/ic-new-small-square.svg);
        margin-left: 3px;
        position: absolute;
      }
    `}
`;

const StyledLink = styled(Link)`
  color: ${theme.BLACK};

  &:hover {
    color: ${theme.BLUE_DARK};
  }
`;
