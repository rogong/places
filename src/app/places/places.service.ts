import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { take,  map, tap, delay } from 'rxjs/operators';

import { Place } from './place.model';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class PlacesService {
private _places = new BehaviorSubject<Place[]>([
  new Place(
    'p1',
    'Yankari National Park',
    'In the heart of Lagos City',
    '../../assets/pl.jpg',
    500.67,
    new Date('2019-01-01'),
    new Date('2019-12-31'),
    'abc'
    ),
    new Place(
      'p2',
      'Lekki Conservation Centre',
      'In the heart of Lagos City',
      '../../assets/pl.jpg',
      500.67,
      new Date('2019-01-01'),
    new Date('2019-12-31'),
    'abc'
      ),
      new Place(
        'p3',
        'Zuma Rock',
        'In the heart of Lagos City',
        '../../assets/pl2.jpg',
        500.67,
        new Date('2019-01-01'),
        new Date('2019-12-31'),
        'abc'
        ),
        new Place(
          'p4',
          'Olumo Rock',
          'In the heart of Lagos City',
          '../../assets/pl3.jpg',
          500.67,
          new Date('2019-01-01'),
          new Date('2019-12-31'),
          'abc'
          )
          ,
        new Place(
          'p4',
          'Osun-Osogbo',
          'In the heart of Lagos City',
          '../../assets/pl.jpg',
          500.67,
          new Date('2019-01-01'),
          new Date('2019-12-31'),
          'abc'
          )
]);

get places() {
  return this._places.asObservable();
}
  constructor(private authServices: AuthService) { }

  getPlace(id: string) {
    return this.places.pipe(
      take(1),
      map(places => {
      return {...places.find(p => p.id === id)};
    }));
  }

  addPlace(
    title: string,
    description: string,
    price: number,
    dateFrom: Date,
    dateTo: Date
    ) {
  const newPlace = new Place(
    Math.random().toString(),
    title,
    description,
    '../../assets/pl.jpg',
    price,
    dateFrom,
    dateTo,
    this.authServices.userId
    );
    return this._places.pipe(
     take(1),
     delay(1000),
     tap(places => {
        this._places.next(places.concat(newPlace));
    }));
  }

  updatePlace(placeId: string, title: string, description: string) {
    return this.places.pipe(
      take(1),
      delay(1000),
      tap(places => {
        const updatedPlaceIndex = places.findIndex(pl => pl.id === placeId);
        const updatedPlaces = [...places];
        const oldPlace = updatedPlaces[updatedPlaceIndex];
        updatedPlaces[updatedPlaceIndex] = new Place(
          oldPlace.id,
          title,
          description,
          oldPlace.imageUrl,
          oldPlace.price,
          oldPlace.availableFrom,
          oldPlace.availableTo,
          oldPlace.userId
        );
        this._places.next(updatedPlaces);
      })
    );
  }
}
