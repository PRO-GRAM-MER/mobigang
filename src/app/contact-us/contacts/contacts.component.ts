import { Component, Input } from '@angular/core';
import { Contact } from '../contactUs.model';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss'],
})
export class ContactsComponent {
  @Input() contacts!: Contact[];
}
