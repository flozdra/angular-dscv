import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-dscv';
  dropMenu: boolean = false;

  counter: number = 0

  contactDialog: boolean = false

}
