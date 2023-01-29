export interface INavMenuGroup {
  menuId: number;
  name: string;
  value: string;
  attr: string;
  isNew: boolean;
  category: string;
}

export interface IFilterInfo {
  label: string;
  value: string;
}

export interface IFilterList {
  jobCodes: IFilterInfo[];
  themeCodes: IFilterInfo[];
  usageCodes: IFilterInfo[];
  colorCodes: IFilterInfo[];
  [key: string]: IFilterInfo[];
}
