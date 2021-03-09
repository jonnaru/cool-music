import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  artists: any;

  showModal: boolean = false;

  videoLink: string = '';

  artistName: string = '';

  constructor(private _http: HttpService) {}

  ngOnInit(): void {
    this._http.getMusic().subscribe((data) => {
      this.artists = data;
      console.log(this.artists);
    });
  }

  handleClickVideo(videoLink: string, artistName: string) {
    this.showModal = true;
    this.videoLink = videoLink;
    this.artistName = artistName;
  }

  closeModal() {
    this.showModal = false;
  }
}
