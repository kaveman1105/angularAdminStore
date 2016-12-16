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
    this.adminService.updateVideo(this.video)
      .then(() => this.goBack());
  }

  goBack() {
    this.location.back();
  }
  cancel() {
    this.goBack();
  }
}
