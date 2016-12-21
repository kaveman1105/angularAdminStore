import { Injectable, NgZone } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { GoogleMapsAPIWrapper, MapsAPILoader } from 'angular2-google-maps/core';

declare var google: any;
@Injectable()
export class GoogleMapsService extends GoogleMapsAPIWrapper {

    constructor(private __loader: MapsAPILoader, private __zone: NgZone) {
        super(__loader, __zone);
    }

    geocode() {
        let geoCoder = new google.maps.Geocoder();
        console.log(geoCoder);
    }

    getLatLan(address: string) {
       // console.log('Getting Address - ', address);
        let geocoder = new google.maps.Geocoder();
        return Observable.create(observer => {
            geocoder.geocode({ 'address': address }, function (results, status) {
                if (status === google.maps.GeocoderStatus.OK) {
                    observer.next(results[0].geometry.location);
                    observer.complete();
                } else {
                    console.log('Error - ', results, ' & Status - ', status);
                    observer.next({});
                    observer.complete();
                }
            });
        });
    }
}
