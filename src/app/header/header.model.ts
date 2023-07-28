export interface Menu {
  title?: string;
  subMenu: string[];
}

export interface DropDown {
  title: string;
  dropDowns: string[];
  link: string[];
}