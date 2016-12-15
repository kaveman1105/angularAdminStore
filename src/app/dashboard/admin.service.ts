import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Video } from './video';
import { Customer } from './customer';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class AdminService {

    private inventoryUrl = 'application/videos';
    private customerUrl = 'application/customers';

    constructor(
        private http: Http
    ) { }

    getInventory(): Observable<Video[]> {
        return this.http.get(this.inventoryUrl)
            .map((res: Response) => res.json().data as Video[])
            .catch((error: any) => Observable.throw(error));
    }

    getCustomers(): Observable<Customer[]>{
        return this.http.get(this.customerUrl)
            .map((res: Response) => res.json().data as Customer[])
            .catch((error: any) => Observable.throw(error));
    }
}
