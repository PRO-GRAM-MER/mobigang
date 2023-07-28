import { Injectable } from '@angular/core';
import { Decision, Diagnostic, Liquid, Optimize, Title } from './solutions.model';

@Injectable({
  providedIn: 'root',
})
export class SolutionsService {
  private titles: Title[] = [
    {
      title: 'Our Solutions',
      desc: 'Our powerful solutions make scaling your business a breeze. Say goodbye to scaling challenges and call us today to learn more.',
    },
  ];
  private diagnostics: Diagnostic[] = [
    {
      title: 'Diagnostic Tool',
      desc: 'Say goodbye to manual testing with our automatic phone evaluation process',
      imgMob: '../../assets/solutions/mob/diagnostic.png',
      imgTab: '../../assets/solutions/tab/diagnostic.png',
      imgDesk: '../../assets/solutions/desk/diagnostic.png',
    },
  ];
  private decisions: Decision[] = [
    {
      title: 'Decision Making Tool',
      desc: 'Empowering quick decisions for your device with our robust analytics engine',
      imgMob: '../../assets/solutions/mob/decision.png',
      imgTab: '../../assets/solutions/tab/decision.png',
      imgDesk: '../../assets/solutions/desk/decision.png',
    },
  ];
  private optimizations: Optimize[] = [
    {
      title: 'Refurbishment Optimization',
      desc: "Transform your phone with Mobigarage's spare solution",
      imgMob: '../../assets/solutions/mob/optimize.png',
      imgTab: '../../assets/solutions/tab/optimize.png',
      imgDesk: '../../assets/solutions/desk/optimize.png',
    },
  ];
  private liquids: Liquid[] = [
    {
      title: 'Liquidate your inventory',
      desc: "Don’t know what to do with your outdated models? Sell them to us",
      imgMob: '../../assets/solutions/mob/liquidate.png',
      imgTab: '../../assets/solutions/tab/liquidate.png',
      imgDesk: '../../assets/solutions/desk/liquidate.png',
    },
  ];

  constructor() {}
  getTitles() {
    return this.titles.slice();
  }
  getDiagnostics() {
    return this.diagnostics.slice();
  }
  getDecisions() {
    return this.decisions.slice();
  }
  getOptimizations() {
    return this.optimizations.slice();
  }
  getLiquids() {
    return this.liquids.slice();
  }
}
