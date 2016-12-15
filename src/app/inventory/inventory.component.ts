import { Component, OnInit } from '@angular/core';
import { AdminService } from '../dashboard/admin.service';
import { Video } from '../dashboard/video';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})
export class InventoryComponent implements OnInit {

  private videos: Video[] = [];
  constructor(
    private adminService: AdminService
  ) { }

  ngOnInit() {

    this.adminService.getInventory()
      .subscribe(
      videos => this.videos = videos,
      error => console.log(error));
  }


}
