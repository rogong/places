import { Component, OnInit, OnDestroy } from '@angular/core';
import { BookingService } from './booking.service';
import { Booking } from './booking-model';
import { IonItemSliding } from '@ionic/angular';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.page.html',
  styleUrls: ['./bookings.page.scss'],
})
export class BookingsPage implements OnInit, OnDestroy {
loadedBookings: Booking[];
bookingsSub: Subscription;
  constructor(private bookingService: BookingService) { }

  ngOnInit() {
   this.bookingsSub = this.bookingService.bookings
   .subscribe(bookings => {
    this.loadedBookings = bookings;
   });
  }

  onCancelBooking(bookingId: string, slidingEl: IonItemSliding) {
      slidingEl.close();
      this.bookingService.cancelBooking(bookingId).subscribe();
  }

  ngOnDestroy() {
    if (this.bookingsSub) {
      this.bookingsSub.unsubscribe();
    }
  }

}
