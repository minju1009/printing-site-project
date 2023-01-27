import { useState } from 'react';
import styled from 'styled-components';

import FilterHeader from './FilterHeader';
import FilterBody from './FilterBody';

import { theme } from 'styles';

export default function Filter() {
  const [showFilter, setShowFilter] = useState(false);
  const [filterList, setFilterList] = useState({
    occupationList: ['농림'],
    styleList: ['테마스타일'],
    usageList: ['사용법', '사용하는방법'],
  });

  const addToFilterList = (category: string, newItem: string) => {
    setFilterList((prev) => ({ ...prev, [category]: newItem }));
  };

  console.log(addToFilterList, filterList);

  const toggleFilter = () => {
    setShowFilter((prev) => !prev);
  };

  return (
    <Container>
      <FilterHeader filterList={filterList} showFilter={showFilter} toggleFilter={toggleFilter} />
      {showFilter && <FilterBody />}
    </Container>
  );
}

const Container = styled.div`
  width: 100vw;
  border: 1px solid ${theme.GREY_MEDIUM};
`;
