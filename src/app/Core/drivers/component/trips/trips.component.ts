import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Observable, catchError, of } from 'rxjs';
import { ApiService } from 'src/app/Shared/services/api.service';

@Component({
  selector: 'app-trips',
  templateUrl: './trips.component.html',
  styleUrls: ['./trips.component.scss']
})
export class TripsComponent implements OnInit {
  tableData$!: Observable<any>

  constructor(
    public dialogRef: MatDialogRef<TripsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private apiService: ApiService
  ) { }
  
  ngOnInit(): void {
    this.tableData$ = this.apiService.getRiders('?driverId=' + this.data.element.id).pipe(catchError((error) => {
      console.log(error)
      return of([])
    }))
  }

  handleSelectedDriver(e:any) {
    
  }

      // table
      displayedColumns: string[] = [
        'driverId',

        'driverName',
        'vehicleNumber',
        'vehicleType',
        
        // 'status',
        
      ];
}



// {
//   "tripId": "94",
//   "goodsType": "looseGoods",
//   "userId": "27",
//   "userName": "Pramod Loadgo",
//   "userPhone": "7003981601",
//   "vehicleNumber": "",
//   "driverId": "5",
//   "driverName": "chandan  emulator",
//   "driverPhone": "1234567890",
//   "vehicleType": "",
//   "driverTotalRating": "0",
//   "requestDate": "2023-11-18",
//   "requestTime": "17:30:44",
//   "distance": "4.378",
//   "amount": "212",
//   "paymentMethod": "cash",
//   "pickUpLocation": "130, 33, Shib Narayan Rd, Kotrung, Uttarpara, West Bengal 712258, India",
//   "dropLocation": "M83R+Q2M, Durgapur, Bally, Howrah, West Bengal 711205, India",
//   "status": "5",
//   "totalUserRating": "0",
//   "totalDriverRating": "0",
//   "feedbackDriversRating": "0",
//   "feedbackUsersRating": "0",
//   "feedbackDriversFeedback": "",
//   "feedbackUsersFeedback": "",
//   "driverTotalTrips": "0",
//   "otp": "2000",
//   "driversRating": "0",
//   "usersRating": "0",
//   "driversFeedback": "",
//   "usersFeedback": "",
//   "totalTrips": "0",
//   "pickUpCoords": {
//       "pickUpLat": "22.65664280",
//       "pickUpLng": "88.34674010"
//   },
//   "dropCoords": {
//       "dropLat": "22.65447160",
//       "dropLng": "88.34004890"
//   },
//   "driverCoords": {
//       "driverLat": "22.56287830",
//       "driverLng": "88.39624670"
//   },
//   "userCoords": {
//       "userLat": "0.00000000",
//       "userLng": "0.00000000"
//   }
// }