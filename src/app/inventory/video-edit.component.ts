import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { AdminService } from '../dashboard/admin.service';
import { Video } from '../dashboard/video';

import 'rxjs/add/operator/do';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-video-edit',
  templateUrl: './video-edit.component.html',
  styleUrls: ['./video-edit.component.css']
})
export class VideoEditComponent implements OnInit {

  private video: Video;
  private error: string;
  constructor(
    private adminService: AdminService,
    private route: ActivatedRoute,
    private location: Location
  ) {

  }

  ngOnInit() {
    this.route.params
      .switchMap((params: Params) => this.adminService.getVideo(+params['id']))
      .subscribe(video => {
        this.video = video;
      });
  }

  save() {
    if (this.checkValid()) {
      this.adminService.updateVideo(this.video)
        .then(() => this.goBack());
    } else {
      this.error = 'Enter required values';
    }
  }

  goBack() {
    this.location.back();
  }
  cancel() {
    this.goBack();
  }

  checkValid(): boolean {
    return this.video.title && (this.video.rating >= 0 && this.video.rating <= 5) && this.video.price > 0;
  }
  clearError() {
    this.error = '';
  }
}
