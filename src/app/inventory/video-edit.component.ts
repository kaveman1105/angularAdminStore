import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';
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

  public form: FormGroup;
  private video: Video;
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private adminService: AdminService,
    private route: ActivatedRoute
  ) {

  }

  ngOnInit() {
    this.route.params
      .switchMap((params: Params) => this.adminService.getVideo(+params['id']))
      .subscribe(video => {
        this.form = this.formBuilder.group({
          title: [video.title, Validators.required],
          description: [video.description],
          rating: [video.rating, Validators.required],
          price: [video.price, Validators.required]
        });
        this.video = video;
      });
  }

  OnSubmit(formValues) {
    //let video: Video = formValues as Video;
   // this.video.title = 'changed';
    if (this.form.valid) {
      this.adminService.updateVideo(this.video)
        .then(() => this.router.navigate(['dashboard']));

    }
  }
  cancel() {
    this.router.navigate(['dashboard']);
  }
}
