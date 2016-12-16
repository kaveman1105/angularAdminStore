import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Video } from './video';
import { Customer } from './customer';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/toPromise';


@Injectable()
export class AdminService {

    private inventoryUrl = 'application/videos';
    private customerUrl = 'application/customers';

    private headers = new Headers({ 'Content-Type': 'application/json' });

    constructor(
        private http: Http
    ) { }

    getInventory(): Observable<Video[]> {
        return this.http.get(this.inventoryUrl)
            .map((res: Response) => res.json().data as Video[])
            .catch((error: any) => Observable.throw(error));
    }

    getCustomers(): Observable<Customer[]> {
        return this.http.get(this.customerUrl)
            .map((res: Response) => res.json().data as Customer[])
            .catch((error: any) => Observable.throw(error));
    }

    getVideo(id: number): Promise<Video> {
        return this.http.get(this.inventoryUrl)
            .toPromise()
            .then(response => response.json().data as Video[])
            .then(videos => videos.find(video => video.id === id));
    }

    getCustomer(id: number): Promise<Customer> {
        return this.http.get(this.customerUrl)
            .toPromise()
            .then(response => response.json().data as Customer[])
            .then(customers => customers.find(customer => customer.id === id));

    }
    updateVideo(video: Video): Promise<Video> {
        const url = `${this.inventoryUrl}/${video.id}`;
        return this.http
            .put(url, JSON.stringify(video), { headers: this.headers })
            .toPromise()
            .then(() => video)
            .catch(error => console.log(error));
    }
    updateCustomer(customer: Customer): Promise<Customer> {
        const url = `${this.customerUrl}/${customer.id}`;
        return this.http
            .put(url, JSON.stringify(customer), { headers: this.headers })
            .toPromise()
            .then(() => customer)
            .catch(error => console.log(error));
    }
}
