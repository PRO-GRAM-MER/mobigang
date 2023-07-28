import { Injectable } from '@angular/core';
import { DropDown, Menu } from './header.model';

@Injectable({
  providedIn: 'root',
})
export class HeaderService {
  private menu: Menu[] = [
    {
      title: 'Products',
      subMenu: ['Second Hand phones', 'Spare parts'],
    },
    {
      title: 'Solutions',
      subMenu: [
        'Diagnostic tool',
        'Decision making engine',
        'Refurbishment optimization',
      ],
    },
    {
      title: '',
      subMenu: [
        'About us',
        'Contact us',
        'Our blogs',
        'Policies',
      ],
    },
  ];

  private dropDown: DropDown[] = [
    {
      title: 'Products',
      dropDowns: ['Second hand smartphones', 'Spare parts'],
      link: ['products'],
    },
    {
      title: 'Solutions',
      dropDowns: ['Diagnostic Tool', 'Decision making engine', 'Refurbishment optimization'],
      link: ['solutions'],
    },
    {
      title: 'Company',
      dropDowns: ['About us', 'Contact us', 'Our blogs', 'Policies'],
      link: ['aboutUs', 'contactUs'],
    },
  ];

  constructor() {}
  getMenuContent() {
    return this.menu.slice();
  }
  getDropDown() {
    return this.dropDown.slice();
  }
}
