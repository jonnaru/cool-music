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
  genresArray: any[] = [];

  showModal: boolean = false;
  videoLink: string = '';
  artistName: string = '';

  constructor(private _http: HttpService) {}

  ngOnInit(): void {
    this._http.getMusic().subscribe((data) => {
      this.artists = data;

      this.filteredArtists = this.artists;

      const genresSet = new Set();
      // getting genres from artists array
      this.artists.forEach((artist: any) => {
        artist.tags.forEach((tag: any) => {
          if (tag.group === 1) {
            genresSet.add(tag.name);
          }
        });
      });
      this.genresArray = [...genresSet];

      console.log(this.artists);
    });
  }

  formatPrice(price: number) {
    return price.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1 ');
  }

  handleClickVideo(videoLink: string, artistName: string) {
    this.showModal = true;
    this.videoLink = videoLink;
    this.artistName = artistName;
  }

  filterList(filterArray: string[]) {
    console.log('filterArray', filterArray);
    if (filterArray.length > 0) {
      this.filteredArtists = this.artists.filter(
        (artist: { tags: { name: string }[] }) =>
          filterArray.includes(artist.tags[0].name)
      );
    } else {
      this.filteredArtists = this.artists;
    }
  }

  sortArtists(type: string) {
    if (type === 'lowPrice') {
      this.filteredArtists = this.filteredArtists.sort((a: any, b: any) => {
        return a.price - b.price;
      });
    } else if (type === 'highPrice') {
      this.filteredArtists = this.filteredArtists.sort((a: any, b: any) => {
        return b.price - a.price;
      });
    } else if (type === 'name') {
      this.filteredArtists = this.filteredArtists.sort((a: any, b: any) => {
        var nameA = a.name.toUpperCase();
        var nameB = b.name.toUpperCase();
        if (nameA < nameB) return -1;
        if (nameA > nameB) return 1;
        return 0;
      });
    }
  }

  // filterGenreList(filterArray: string[]) {
  //   console.log('filterArray', filterArray);
  //   if (filterArray.length > 0) {
  //     this.filteredArtists = this.artists.filter(
  //       (artist: { tags: { name: string }[] }) =>
  //         artist.tags.some((tag) => filterArray.includes(tag.name))
  //     );
  //   } else {
  //     this.filteredArtists = this.artists;
  //   }
  // }

  closeModal() {
    this.showModal = false;
  }
}
