import { atom } from 'recoil';
import { IFilterList, ITemplateInfo } from 'types';

export const filterListState = atom<IFilterList>({
  key: 'filterListState',
  default: {
    jobCodes: [],
    themeCodes: [],
    usageCodes: [],
    colorCodes: [],
  },
});

export const currentTemplateInfoState = atom<ITemplateInfo>({
  key: 'currentTemplateInfoState',
  default: {
    templateCode: '',
    templateName: '',
    templateDescription: '',
    templateProduct: '',
    templateOption: '',
    price: 0,
    designList: [],
  },
});
