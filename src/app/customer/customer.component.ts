import { Component, OnInit } from '@angular/core';
import { Customer } from '../dashboard/customer';
import { AdminService } from '../dashboard/admin.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  private customers: Customer[] = [];
  constructor(
    private adminService: AdminService
  ) { }

  ngOnInit() {
    this.adminService.getCustomers()
      .subscribe(
      customers => this.customers = customers,
      error => console.log(error));
  }

}
