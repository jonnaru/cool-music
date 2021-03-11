import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-filterbar',
  templateUrl: './filterbar.component.html',
  styleUrls: ['./filterbar.component.scss'],
})
export class FilterbarComponent implements OnInit {
  @Output() typeFilterEvent = new EventEmitter();
  @Output() sortEvent = new EventEmitter();
  // @Output() genreFilterEvent = new EventEmitter();
  @Input() genresArray: any;

  typeFilterArray: string[] = [];
  // genreFilterArray: number[] = [];

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

  // handleGenreChecked(type: any): void {
  //   if (type.checked) this.genreFilterArray.push(type.value);
  //   if (!type.checked)
  //     this.genreFilterArray = this.genreFilterArray.filter(
  //       (item) => item !== type.value
  //     );

  //   this.genreFilterEvent.emit(this.genreFilterArray);
  // }

  // setOpenClass(): void {
  //   const myClasses = {
  //     active: this.
  //   }
  // }

  handleOnSortClick(type: string): void {
    this.sortEvent.emit(type);
  }

  toggleShowMenu(): void {
    setTimeout(() => {
      this.showMenu = !this.showMenu;
    }, 0);
    console.log('this.showMenu', this.showMenu);
  }
}
