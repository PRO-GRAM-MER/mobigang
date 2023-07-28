import { Component, Input } from '@angular/core';
import { Diagnostic } from '../solutions.model';

@Component({
  selector: 'app-diagnostic',
  templateUrl: './diagnostic.component.html',
  styleUrls: ['./diagnostic.component.scss']
})
export class DiagnosticComponent {
  @Input() diagnostics!: Diagnostic[];

}
