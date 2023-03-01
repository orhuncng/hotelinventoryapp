import { Component, ViewChild, ViewContainerRef, OnInit, AfterViewInit, ElementRef } from '@angular/core';
import { RoomsComponent } from './rooms/rooms.component';

@Component({
  selector: 'hinv-root',
  templateUrl: './app.component.html',
  //template: '<h1>Hello from app component inline template</h1>',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'hotelinventoryapp';
  role = 'Admin'

  @ViewChild('name', {static: true}) name!: ElementRef;

/*   @ViewChild('user', {read: ViewContainerRef}) vcr!: ViewContainerRef;
  
  ngAfterViewInit(): void {
    const componentRef = this.vcr.createComponent(RoomsComponent);
    componentRef.instance.numberOfRooms = 50;
  } */

  ngOnInit(): void {
    this.name.nativeElement.innerText = "Ankara Hotel";
  }

}
