import { Component, OnInit } from '@angular/core';
import { Place } from './place.model';
import { PlacesService } from './places.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-places',
  templateUrl: './places.page.html',
  styleUrls: ['./places.page.scss'],
})
export class PlacesPage implements OnInit {
   places: Place[];
   placesSub: Subscription;

  constructor(private placesServices: PlacesService) { }

  ngOnInit() {
    this.placesSub = this.placesServices.places
    .subscribe(places => {
      this.places = places;
    });
  }

}
