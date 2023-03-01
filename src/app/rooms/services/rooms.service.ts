import { Injectable } from '@angular/core';
import { RoomList } from '../rooms';

@Injectable({
  providedIn: 'root'
})
export class RoomsService {

  constructor() { }

  roomList: RoomList[] = [
    {
      roomNumber: 1,
      roomType: 'Deluxe Room',
      amenities: 'Air Conditioner, Free Wifi, TV',
      price: 500,
      photos: 'https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      checkinTime: new Date('11-Nov-2021'),
      checkoutTime: new Date('13-Nov-2021'),
      rating: 2.5,
    },
    {
      roomNumber: 2,
      roomType: 'Superior Room',
      amenities: 'Air Conditioner, Free Wifi, TV',
      price: 1000,
      photos: 'https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      checkinTime: new Date('22-Nov-2021'),
      checkoutTime: new Date('13-Nov-2021'),
      rating: 4.58,
    },
    {
      roomNumber: 3,
      roomType: 'Mini Room',
      amenities: 'Air Conditioner, Free Wifi, TV',
      price: 50,
      photos: 'https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      checkinTime: new Date('22-Nov-2021'),
      checkoutTime: new Date('13-Nov-2021'),
      rating: 5.52,
    }
  ];
 

  getRooms() : RoomList[] {
    return this.roomList;
  }

}
