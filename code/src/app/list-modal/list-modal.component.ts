import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

const getId = (url: string) => {
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
  const match = url.match(regExp);

  return match && match[2].length === 11 ? match[2] : null;
};

@Component({
  selector: 'app-list-modal',
  templateUrl: './list-modal.component.html',
  styleUrls: ['./list-modal.component.scss'],
})
export class ListModalComponent implements OnInit {
  @Input() videoLink: any;
  @Input() artistName: any;

  @Output() closeModalEvent = new EventEmitter();

  url: string = '';

  safeURL: any;

  constructor(private _sanitizer: DomSanitizer) {}

  ngOnInit(): void {
    this.url = `https://www.youtube.com/embed/${getId(
      this.videoLink
    )}?controls=0`;
    this.safeURL = this._sanitizer.bypassSecurityTrustResourceUrl(this.url);
  }

  clickCloseModal() {
    this.closeModalEvent.emit();
  }
}
