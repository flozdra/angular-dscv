import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-p-btn',
  templateUrl: './p-btn.component.html',
  styleUrls: ['./p-btn.component.css']
})
export class PBtnComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

  @Input()
  text: string = ''
}
