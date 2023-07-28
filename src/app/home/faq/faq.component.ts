import { Component, Input, OnInit } from '@angular/core';
import { Faq } from '../home.model';
import { HomeService } from '../home.service';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss'],
})
export class FaqComponent implements OnInit{
  @Input() faq!: Faq;

  constructor(private homeService: HomeService){}
  ngOnInit(): void {}

  onSelect() {
    const faqs = this.homeService.getFaqs();
    for (let i = 0; i < faqs.length; i++) {
      if (faqs[i] !== this.faq) {
        faqs[i].open = false;
      }
    }
    this.homeService.faqSelected.next(this.faq);

  }

}
