import { atom } from 'recoil';
import { IFilterList } from 'types';

export const filterListState = atom<IFilterList>({
  key: 'filterListState',
  default: {
    jobCodes: [],
    themeCodes: [],
    usageCodes: [],
    colorCodes: [],
  },
});
