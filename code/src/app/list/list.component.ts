import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service'

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  artists: any;

  constructor(private _http: HttpService) { }

  ngOnInit(): void {
    this._http.getMusic().subscribe(data => {
      this.artists = data;
      console.log(this.artists)
    });
  }

}
