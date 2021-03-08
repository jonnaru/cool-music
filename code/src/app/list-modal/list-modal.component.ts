import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-list-modal',
  templateUrl: './list-modal.component.html',
  styleUrls: ['./list-modal.component.scss']
})
export class ListModalComponent implements OnInit {

  @Input() videoLink: any;
  
  @Output() closeModalEvent = new EventEmitter();



  constructor() { }

  ngOnInit(): void {
  }

  clickCloseModal() {
    this.closeModalEvent.emit();
  }
}
