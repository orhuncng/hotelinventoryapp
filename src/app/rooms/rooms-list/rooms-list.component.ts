import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy, OnChanges, SimpleChanges, OnDestroy } from '@angular/core';
import { RoomList } from '../rooms';

@Component({
  selector: 'hinv-rooms-list',
  templateUrl: './rooms-list.component.html',
  styleUrls: ['./rooms-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class RoomsListComponent implements OnInit, OnChanges, OnDestroy {

  @Input() roomlistRooms: RoomList[] = [];
  @Input() title: string = '';

  @Output() selectedRoom = new EventEmitter<RoomList>();
  
  constructor() {

  }

  ngOnDestroy(): void {
    console.log("On Destroy Rooms Component");
  }


  ngOnChanges(changes: SimpleChanges) : void {
    console.log(changes);
    if(changes['title']){
      this.title = changes['title'].currentValue.toUpperCase();
    }
  }

  ngOnInit(): void {
    //throw new Error('Method not implemented.');
  }

  selectRoom(room: RoomList) {
    this.selectedRoom.emit(room)
  }

}
