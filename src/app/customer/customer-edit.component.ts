import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { AdminService } from '../dashboard/admin.service';
import { Customer } from '../dashboard/customer';

import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-customer-edit',
  templateUrl: './customer-edit.component.html',
  styleUrls: ['./customer-edit.component.css']
})
export class CustomerEditComponent implements OnInit {


  private customer: Customer;

  constructor(
    private adminService: AdminService,
    private location: Location,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.route.params
      .switchMap((params: Params) => this.adminService.getCustomer(+params['id']))
      .subscribe(customer => {
        this.customer = customer;
      });
  }

  save() {
    this.adminService.updateCustomer(this.customer)
      .then(() => this.goBack());
  }

  goBack() {
    this.location.back();
  }
  cancel() {
    this.goBack();
  }
}
