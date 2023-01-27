import styled from 'styled-components';

import FilterLabel from 'components/atoms/Label/FilterLabel';
import { flex, fontSize, theme } from 'styles';
import { IFilterList } from 'types';
import { useCallback } from 'react';

interface IToggleFilterProps {
  showFilter: boolean;
  toggleFilter: () => void;
  filterList: IFilterList;
}

export default function FilterHeader({ showFilter, toggleFilter, filterList }: IToggleFilterProps) {
  const { occupationList, styleList, usageList } = filterList;

  const formatLabel = useCallback((list: string[]) => {
    if (list.length === 1) {
      return list[0];
    }
    return `${list[0]} 외 ${list.length}종`;
  }, []);

  return (
    <Container>
      <Wrapper>
        <FilterWrap>
          <Title>정사각사이즈 명함</Title>
          <LabelWrap>
            <FilterLabel>소프트</FilterLabel>
            <FilterLabel>직각모서리</FilterLabel>
            {occupationList.length > 0 && <FilterLabel>{formatLabel(occupationList)}</FilterLabel>}
            {styleList.length > 0 && <FilterLabel>{formatLabel(styleList)}</FilterLabel>}
            {usageList.length > 0 && <FilterLabel>{formatLabel(usageList)}</FilterLabel>}
          </LabelWrap>
        </FilterWrap>
        <FilterSwitch onClick={toggleFilter}>
          {showFilter ? (
            <>
              <img alt="close icon" src="/images/ic-close-filter.svg" />
              <p>필터닫기</p>
            </>
          ) : (
            <>
              <img alt="open icon" src="/images/ic-open-filter.svg" />
              <p>필터열기</p>
            </>
          )}
        </FilterSwitch>
      </Wrapper>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;

  border: 1px solid ${theme.GREY_MEDIUM};
`;

const Wrapper = styled.div`
  ${flex('space-between', 'center')}
  width: 1140px;
  margin: 0 auto;
`;

const FilterWrap = styled.div`
  ${flex('space-between', 'center')}
`;

const Title = styled.h1`
  font-size: ${fontSize.large};
  font-weight: bold;
`;

const LabelWrap = styled.div`
  margin-left: 15px;
  ${flex('', 'center')}
  gap: 10px;
`;

const FilterSwitch = styled.button`
  ${flex('center', 'center')}
  padding: 14px 0;
  font-weight: bold;
  gap: 5px;
`;
