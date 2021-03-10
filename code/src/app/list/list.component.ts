import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  artists: any;
  filteredArtists: any[] = [];
  genres: string[] = [];

  showModal: boolean = false;
  videoLink: string = '';
  artistName: string = '';

  constructor(private _http: HttpService) {}

  ngOnInit(): void {
    this._http.getMusic().subscribe((data) => {
      this.artists = data;

      this.filteredArtists = this.artists;

      this.genres = this.artists.reduce((filtered: any, artist: any) => {
        const genres = artist.tags.filter(
          (tag: any) =>
            tag.group === 1 && !filtered.some((item: any) => item.id === tag.id)
        );
        filtered.push(...genres);
        return filtered;
      }, []);

      console.log(this.artists);
      console.log(this.genres);
    });
  }

  handleClickVideo(videoLink: string, artistName: string) {
    this.showModal = true;
    this.videoLink = videoLink;
    this.artistName = artistName;
  }

  filterList(filterArray: string[]) {
    if (filterArray.length > 0) {
      this.filteredArtists = this.artists.filter(
        (artist: { tags: { name: string }[] }) =>
          filterArray.includes(artist.tags[0].name)
      );
    } else {
      this.filteredArtists = this.artists;
    }
  }

  closeModal() {
    this.showModal = false;
  }
}
