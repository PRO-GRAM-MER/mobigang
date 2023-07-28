import { Component, OnInit, Inject, Renderer2 } from '@angular/core';
import { DOCUMENT } from '@angular/common';

import { DropDown, Menu } from './header.model';
import { HeaderService } from './header.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  menu!: Menu[];
  dropDowns!: DropDown[];
  isOpen: boolean = false;

  constructor(
    private headerService: HeaderService,
    @Inject(DOCUMENT) private document: Document,
    private renderer: Renderer2
  ) {}

  ngOnInit(): void {
    this.menu = this.headerService.getMenuContent();
    this.dropDowns = this.headerService.getDropDown();
  }

  open() {
    this.isOpen = !this.isOpen;
    if (this.isOpen) {
      this.renderer.addClass(this.document.body, 'page-fixed');
      console.log(this.document.body.className);
    } else {
      this.renderer.removeClass(this.document.body, 'page-fixed');
    }
  }

  closeMenu() {
    if(this.isOpen) {
      this.isOpen = false;
      this.renderer.removeClass(this.document.body, 'page-fixed');
    }

  }

}
