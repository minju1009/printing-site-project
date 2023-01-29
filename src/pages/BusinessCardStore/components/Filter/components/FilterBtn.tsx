import { useMemo } from 'react';
import styled from 'styled-components';

import { useRecoilValue } from 'recoil';

import { filterListState } from 'recoil/businessCardStore';
import { flex, theme } from 'styles';

interface IFilterBtnProps {
  addFilterList: () => void;
  resetFilter: () => void;
}

export default function FilterBtn({ addFilterList, resetFilter }: IFilterBtnProps) {
  const filterList = useRecoilValue(filterListState);

  const handleApplyBtnClick = () => {
    addFilterList();
  };

  const isAllArraysEmpty = useMemo(() => Object.values(filterList).every((item) => item.length === 0), [filterList]);

  return (
    <Container>
      <DeSelectBtn disabled={isAllArraysEmpty} onClick={resetFilter}>
        <img alt="deselect icon" src={`/images/ic-deselect-${isAllArraysEmpty ? 'darkgray' : 'black'}.svg`} />
        <p>선택해제</p>
      </DeSelectBtn>
      <ApplyBtn onClick={handleApplyBtnClick}>적용</ApplyBtn>
    </Container>
  );
}

const Container = styled.div`
  ${flex('flex-end', 'center')}
  width: 1140px;
  margin: 0 auto;
  border-bottom: 1px solid ${theme.GREY_MEDIUM};
`;

const DeSelectBtn = styled.button`
  ${flex('center', 'flex-end')}
  padding: 10px 20px;
  gap: 5px;

  :disabled {
    color: ${theme.GREY_DARK};
  }
`;

const ApplyBtn = styled.button`
  padding: 0 30px;
  line-height: 42px;
  background-color: ${theme.BLUE_DARK};
  color: white;
`;
