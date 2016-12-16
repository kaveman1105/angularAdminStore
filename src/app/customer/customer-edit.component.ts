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
  private error; string;

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
    if (this.checkValid()) {
      this.adminService.updateCustomer(this.customer)
        .then(() => this.goBack());
    } else {
      this.error = 'Enter required Fields';
    }
  }

  goBack() {
    this.location.back();
  }
  cancel() {
    this.goBack();
  }
  checkValid(): boolean {
    return this.customer.name && this.customer.address && this.customer.payment && true;
  }

  clearError() {
    this.error = '';
  }
}
