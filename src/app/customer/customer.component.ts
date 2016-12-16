import { Component, OnInit } from '@angular/core';
import { Customer } from '../dashboard/customer';
import { AdminService } from '../dashboard/admin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  private customers: Customer[] = [];
  constructor(
    private adminService: AdminService,
    private router: Router
  ) { }

  ngOnInit() {
    this.adminService.getCustomers()
      .subscribe(
      customers => this.customers = customers,
      error => console.log(error));
  }

  editCustomer(customer: Customer) {
    this.router.navigate(['dashboard/customer', customer.id]);
  }
}
