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

export interface ITemplateInfo {
  templateCode: string;
  templateName: string;
  templateDescription: string;
  templateProduct: string;
  templateOption: string;
  price: number;
  designList: IDesignList[];
  [key: string]: string | number | IDesignList[];
}

export interface IDesignList {
  itemType: string;
  templateCode: string;
  imgURL: string;
  designCode: string;
}
