import { Component, OnInit, HostListener, ViewChildren, QueryList } from '@angular/core';
import {
  Decision,
  Diagnostic,
  Liquid,
  Optimize,
  Title,
} from './solutions.model';
import { SolutionsService } from './solutions.service';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-solutions',
  templateUrl: './solutions.component.html',
  styleUrls: ['./solutions.component.scss'],
})
export class SolutionsComponent implements OnInit {
  titles!: Title[];
  diagnostics!: Diagnostic[];
  decisions!: Decision[];
  optimizations!: Optimize[];
  liquids!: Liquid[];
  @ViewChildren('section')
  sections!: QueryList<any>;

  constructor(private router: Router, private route: ActivatedRoute, private solutionsService: SolutionsService) {}

  ngOnInit(): void {
    this.titles = this.solutionsService.getTitles();
    this.diagnostics = this.solutionsService.getDiagnostics();
    this.decisions = this.solutionsService.getDecisions();
    this.optimizations = this.solutionsService.getOptimizations();
    this.liquids = this.solutionsService.getLiquids();
    this.setImageUrls(window.innerWidth);
  }
  ngAfterViewInit() {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        const fragment = this.route.snapshot.fragment;
        if (fragment) {
          const section = this.sections.find(s => s.nativeElement.id === fragment);
          if (section) {
            section.nativeElement.scrollIntoView({ behavior: 'smooth' });
          }
        }
      }
    });
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: { target: { innerWidth: any } }) {
    this.setImageUrls(event.target.innerWidth);
  }
  setImageUrls(width: number) {
    this.diagnostics.forEach((diagnostic) => {
      diagnostic.imgUrl = this.getImageUrl(
        width,
        diagnostic.imgMob,
        diagnostic.imgTab,
        diagnostic.imgDesk
      );
    });
    this.decisions.forEach((decision) => {
      decision.imgUrl = this.getImageUrl(
        width,
        decision.imgMob,
        decision.imgTab,
        decision.imgDesk
      );
    });
    this.optimizations.forEach((optimization) => {
      optimization.imgUrl = this.getImageUrl(
        width,
        optimization.imgMob,
        optimization.imgTab,
        optimization.imgDesk
      );
    });
    this.liquids.forEach((liquid) => {
      liquid.imgUrl = this.getImageUrl(
        width,
        liquid.imgMob,
        liquid.imgTab,
        liquid.imgDesk
      );
    });
  }
  getImageUrl(width: number, mobUrl: string, tabUrl: string, deskUrl: string) {
    if (width < 764) {
      return mobUrl;
    } else if (width < 992) {
      return tabUrl;
    } else {
      return deskUrl;
    }
  }
}
