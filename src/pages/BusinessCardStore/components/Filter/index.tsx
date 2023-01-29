import { useState } from 'react';
import styled from 'styled-components';

import FilterHeader from './components/FilterHeader';
import FilterBody from './components/FilterBody';
import FilterBtn from './components/FilterBtn';
import FilterFooter from './components/FilterFooter';

import { IFilterList } from 'types';
import { useResetRecoilState, useSetRecoilState } from 'recoil';
import { filterListState } from 'recoil/businessCardStore';

const initialFilterValue: IFilterList = {
  jobCodes: [],
  themeCodes: [],
  usageCodes: [],
  colorCodes: [],
};

export default function Filter() {
  const [showFilter, setShowFilter] = useState(true);
  const [tempFilterList, setTempFilterList] = useState(initialFilterValue);
  const setFilterListState = useSetRecoilState(filterListState);
  const resetFilterListState = useResetRecoilState(filterListState);

  const toggleTempFilterList = (keyName: keyof IFilterList, label: string, value: string) => {
    setTempFilterList((prev) => {
      const currentList = prev[keyName] || [];
      const newList = currentList.filter((item) => item.value !== value);
      if (newList.length === currentList.length) {
        newList.push({ label, value });
      }
      return { ...prev, [keyName]: newList };
    });
  };

  const addFilterList = () => {
    setFilterListState(tempFilterList);
  };

  const toggleFilter = () => {
    setShowFilter((prev) => !prev);
  };

  const resetFilter = () => {
    setTempFilterList(initialFilterValue);
    resetFilterListState();
  };

  return (
    <Container>
      <FilterHeader showFilter={showFilter} toggleFilter={toggleFilter} />
      {showFilter && (
        <>
          <FilterBody tempFilterList={tempFilterList} toggleTempFilterList={toggleTempFilterList} />
          <FilterBtn addFilterList={addFilterList} resetFilter={resetFilter} />
        </>
      )}
      <FilterFooter />
    </Container>
  );
}

const Container = styled.div`
  width: 100vw;
`;
