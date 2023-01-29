import styled from 'styled-components';

import CheckboxFilter from 'components/molecules/CheckboxFilter';
import ColorCheckbox from 'components/atoms/Checkbox/ColorCheckbox';

import { FILTER_INFO_LIST } from '../constant';
import { flex } from 'styles';
import { IFilterList } from 'types';
import { useCallback } from 'react';

interface IFilterBodyProps {
  toggleTempFilterList: (keyName: string, label: string, value: string) => void;
  tempFilterList: IFilterList;
}

export default function FilterBody({ toggleTempFilterList, tempFilterList }: IFilterBodyProps) {
  const handleCheckboxClick = (keyName: string, label: string, value: string) => {
    toggleTempFilterList(keyName, label, value);
  };

  const isIncludedInFilterList = useCallback(
    (keyName: string, value: string) => tempFilterList[keyName].some((item) => item.value === value),
    [tempFilterList],
  );

  return (
    <Container>
      {FILTER_INFO_LIST.filter(({ keyName }) => keyName !== 'colorCodes').map(({ title, keyName, child }) => (
        <CheckboxFilter key={`filter-${keyName}`}>
          <CheckboxFilter.Title>{title}</CheckboxFilter.Title>
          <CheckboxFilter.List>
            {child.map(({ label, value }) => (
              <CheckboxFilter.Checkbox
                key={`filter-checkbox-${value}`}
                isChecked={isIncludedInFilterList(keyName, value)}
                label={label}
                onChange={() => handleCheckboxClick(keyName, label, value)}
              />
            ))}
          </CheckboxFilter.List>
        </CheckboxFilter>
      ))}
      {FILTER_INFO_LIST.filter(({ keyName }) => keyName === 'colorCodes').map(({ title, keyName, child }) => (
        <CheckboxFilter key={`filter-${keyName}`}>
          <CheckboxFilter.Title>{title}</CheckboxFilter.Title>
          <ColorCheckboxWrap>
            {child.map(({ label, value }) => (
              <ColorCheckbox
                key={`filter-color-${value}`}
                isChecked={isIncludedInFilterList(keyName, value)}
                label={label}
                onClick={() => handleCheckboxClick(keyName, label, value)}
              />
            ))}
          </ColorCheckboxWrap>
        </CheckboxFilter>
      ))}
    </Container>
  );
}

const Container = styled.div`
  ${flex('space-between', 'center', 'row')}
  width: 1140px;
  margin: 0 auto;
  padding: 30px 0 16px 0;
`;

const ColorCheckboxWrap = styled(CheckboxFilter.List)`
  ${flex('flex-start', 'center')}
  flex-wrap: wrap;
  gap: 20px;
  padding: 0 50px 0 10px;
`;
