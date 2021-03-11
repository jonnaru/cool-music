import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-filterbar',
  templateUrl: './filterbar.component.html',
  styleUrls: ['./filterbar.component.scss'],
})
export class FilterbarComponent implements OnInit {
  @Output() typeFilterEvent = new EventEmitter();

  filterArray: string[] = [];

  showMenu: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  handleTypeChecked(type: any): void {
    if (type.checked) this.filterArray.push(type.value);
    if (!type.checked)
      this.filterArray = this.filterArray.filter((item) => item !== type.value);

    this.typeFilterEvent.emit(this.filterArray);
  }

  // setOpenClass(): void {
  //   const myClasses = {
  //     active: this.
  //   }
  // }

  toggleShowMenu(): void {
    setTimeout(() => {
      this.showMenu = !this.showMenu;
    }, 0);
    console.log('this.showMenu', this.showMenu);
  }
}
