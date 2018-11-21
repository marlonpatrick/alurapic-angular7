import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ListPhotosFromUserQuery, Photo } from 'alurapic-domain';

@Component({
  templateUrl: './photo-list.page.html',
  styleUrls: ['./photo-list.page.scss']
})
export class PhotoListPage implements OnInit {

  photos: Photo[] = [];

  filter: string = '';

  hasMore: boolean = false;

  currentPage: number = 1;

  userName: string;

  constructor(private activatedRoute: ActivatedRoute, private listPhotosFromUserQuery: ListPhotosFromUserQuery) {
  }

  ngOnInit(): void {
    this.userName = this.activatedRoute.snapshot.params.userName;

    this.photos = this.activatedRoute.snapshot.data.photos;

    this.hasMore = this.photos.length > 0;
  }

  loadMore() {
    this.filter = '';
    this.listPhotosFromUserQuery.execute(this.userName, ++this.currentPage)
      .subscribe(newPhotos => {
        this.photos = this.photos.concat(newPhotos);
        this.hasMore = newPhotos.length > 0;
      });
  }
}
