import { AfterViewChecked, AfterViewInit, Component, DoCheck, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { Room, RoomList } from './rooms';
import { HeaderComponent } from '../header/header.component';
import { RoomsService } from './services/rooms.service';

@Component({
  selector: 'hinv-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss']
})
export class RoomsComponent implements OnInit, DoCheck, AfterViewInit, AfterViewChecked {

  hotelName: string = 'Hilton Otel';
  numberOfRooms = 10;
  hideRooms = false;
  title = 'Room List'

  selectedRoom!: RoomList;

  rooms: Room = {
    totalRooms: 20,
    availableRooms: 10,
    bookedRooms: 5,
  };

  roomList: RoomList[] = [];

  @ViewChild(HeaderComponent) headerComponent!: HeaderComponent;

  @ViewChildren(HeaderComponent) headerChildrenComponent!: QueryList<HeaderComponent>;

  constructor(private roomsService : RoomsService) {
    console.log("Rooms Constructor");
  }

  ngAfterViewChecked(): void {
    this.headerComponent.title = "Rooms View"
  }

  ngAfterViewInit(): void {
    console.log(this.headerComponent);

    console.log(this.headerChildrenComponent);
    this.headerChildrenComponent.first.title = "Last Title";
    
  }

  ngDoCheck(): void {
    console.log("Do Check");
  }

  ngOnInit(): void {
    console.log("ngOnInit Rooms Component");
    this.roomList = this.roomsService.getRooms();
  }

  toggle() {
    this.hideRooms = !this.hideRooms;
    this.title = "Rooms List"
  }

  selectRoom(room: RoomList) {
    this.selectedRoom = room;
  }

  addRoom() {
    const room: RoomList = {
      roomNumber: 4,
      roomType: 'Mini Room',
      amenities: 'Air Conditioner, Free Wifi, TV',
      price: 50,
      photos: 'https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      checkinTime: new Date('22-Nov-2021'),
      checkoutTime: new Date('13-Nov-2021'),
      rating: 8.52,
    };

    //this.roomList.push(room);
    this.roomList = [...this.roomList, room];

  }

}
