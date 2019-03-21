import { Injectable } from '@angular/core';
import { Place } from './place.model';

@Injectable({
  providedIn: 'root'
})
export class PlacesService {
private _places: Place[] = [
  new Place(
    'p1',
    'Yankari National Park',
    'In the heart of Lagos City',
    'https://lh6.googleusercontent.com/--Wu6vSB_mDo/WV0YQej59XI/AAAAAAAABb0/5v68z5qiTFssjZDZWEdA548n5E2ySvwAQCLIBGAYYCw/w100-h134-n-k-no/',
    500.67
    ),
    new Place(
      'p2',
      'Lekki Conservation Centre',
      'In the heart of Lagos City',
      'https://lh3.googleusercontent.com/-Q16qljHw5r8/Wqu7fWAzPgI/AAAAAAAADlM/WlwYkUCHSM48Y-FTM-QMs2d6S2X21SFLACLIBGAYYCw/w100-h134-n-k-no/',
      500.67
      ),
      new Place(
        'p3',
        'Zuma Rock',
        'In the heart of Lagos City',
        'https://lh4.googleusercontent.com/proxy/_Zv8UiZ613P7GsVFnelmB9Sn1W0XI1geptdla5o4Tx333uqZZjgtWqDqindDqLn74A4MBQ6akmrLjc-uB1RwxM5TDj1VnYLoPuKS_QtPTNfZDGsvYQp9fm09PxE6wx2l0LQ6eZvhfJtmbteCA4WSsGeDdLv3VJ_yfTI=w100-h134-n-k-no',
        500.67
        ),
        new Place(
          'p4',
          'Olumo Rock',
          'In the heart of Lagos City',
          'https://lh4.googleusercontent.com/-KhhJrJaPRC4/WndGih4yTYI/AAAAAAAAT5A/ykk2PmM46BUN4KCyuW0KFOr-KjeDbhOsACLIBGAYYCw/w100-h134-n-k-no/',
          500.67
          )
          ,
        new Place(
          'p4',
          'Osun-Osogbo',
          'In the heart of Lagos City',
          'https://lh4.googleusercontent.com/-GyflTYWt_oU/W-_GmkfS9VI/AAAAAAAASqU/2_lt9rN7gOASu-SP4TbjZWiP7OEHLEBSgCLIBGAYYCw/w100-h134-n-k-no/',
          500.67
          )
];

get places() {
  return [...this._places];
}
  constructor() { }

  getPlace(id: string) {
    return { ...this._places.find(p => p.id === id)};
  }
}
