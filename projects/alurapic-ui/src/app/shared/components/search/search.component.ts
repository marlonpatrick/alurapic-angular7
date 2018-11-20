import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'ap-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {


  @Output() typing: EventEmitter<string> = new EventEmitter();

  @Input() value: string = '';

  debounce: Subject<string> = new Subject<string>();

  constructor() { }

  ngOnInit() {
    this.debounce.pipe(debounceTime(300))
    .subscribe(filterQuery => this.typing.emit(filterQuery));
  }
}
