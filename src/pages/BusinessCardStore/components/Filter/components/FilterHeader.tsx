import { useCallback } from 'react';
import styled from 'styled-components';
import { useRecoilValue } from 'recoil';
import { filterListState } from 'recoil/businessCardStore';

import FilterLabel from 'components/atoms/Label/FilterLabel';
import ColorLabel from 'components/atoms/Label/ColorLabel';

import { IFilterInfo } from 'types';
import { flex, fontSize, theme } from 'styles';

interface IToggleFilterProps {
  showFilter: boolean;
  toggleFilter: () => void;
}

export default function FilterHeader({ showFilter, toggleFilter }: IToggleFilterProps) {
  const filterList = useRecoilValue(filterListState);
  const { jobCodes, themeCodes, usageCodes, colorCodes } = filterList;

  const formatLabel = useCallback(
    (list: IFilterInfo[]) => (list.length === 1 ? list[0].label : `${list[0].label} 외 ${list.length}종`),
    [],
  );

  return (
    <Container>
      <Wrapper>
        <FilterWrap>
          <Title>정사각사이즈 명함</Title>
          <LabelWrap>
            <FilterLabel>소프트</FilterLabel>
            <FilterLabel>직각모서리</FilterLabel>
            {jobCodes.length > 0 && <FilterLabel>{formatLabel(jobCodes)}</FilterLabel>}
            {themeCodes.length > 0 && <FilterLabel>{formatLabel(themeCodes)}</FilterLabel>}
            {usageCodes.length > 0 && <FilterLabel>{formatLabel(usageCodes)}</FilterLabel>}
            <ColorLabelWrap>
              {colorCodes.length > 0 &&
                colorCodes.map(({ label, value }) => <ColorLabel key={value}>{label}</ColorLabel>)}
            </ColorLabelWrap>
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
  border-bottom: 1px solid ${theme.GREY_MEDIUM};
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
  gap: 5px;
`;

const ColorLabelWrap = styled.ul`
  ${flex('flex-start', 'center')}
  gap: 10px;

  div {
    width: 20px;
  }
`;

const FilterSwitch = styled.button`
  ${flex('center', 'center')}
  padding: 14px 0;
  font-weight: bold;
  gap: 5px;
`;
