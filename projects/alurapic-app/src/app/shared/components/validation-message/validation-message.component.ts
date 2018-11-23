import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ap-val-msg',
  templateUrl: './validation-message.component.html',
  styleUrls: ['./validation-message.component.scss']
})
export class ValidationMessageComponent implements OnInit {

  @Input() text: string = '';

  constructor() { }

  ngOnInit() {
  }

}
