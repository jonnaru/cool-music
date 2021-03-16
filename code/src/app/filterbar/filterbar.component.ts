import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-filterbar',
  templateUrl: './filterbar.component.html',
  styleUrls: ['./filterbar.component.scss'],
})
export class FilterbarComponent implements OnInit {
  @Output() typeFilterEvent = new EventEmitter();
  @Output() sortEvent = new EventEmitter();

  @Input() genresArray: any;

  typeFilterArray: string[] = [];

  showMenu: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  handleTypeChecked(type: any): void {
    if (type.checked) this.typeFilterArray.push(type.value);
    if (!type.checked)
      this.typeFilterArray = this.typeFilterArray.filter(
        (item) => item !== type.value
      );

    this.typeFilterEvent.emit(this.typeFilterArray);
  }

  handleOnSortClick(type: string): void {
    this.sortEvent.emit(type);
  }

  toggleShowMenu(): void {
    this.showMenu = !this.showMenu;
  }
}
