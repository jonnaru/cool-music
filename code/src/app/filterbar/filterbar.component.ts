import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-filterbar',
  templateUrl: './filterbar.component.html',
  styleUrls: ['./filterbar.component.scss'],
})
export class FilterbarComponent implements OnInit {
  @Output() typeFilterEvent = new EventEmitter();

  filterArray: string[] = [];

  constructor() {}

  ngOnInit(): void {}

  handleTypeChecked(type: any): void {
    if (type.checked) this.filterArray.push(type.value);
    if (!type.checked)
      this.filterArray = this.filterArray.filter((item) => item !== type.value);

    this.typeFilterEvent.emit(this.filterArray);
  }
}
