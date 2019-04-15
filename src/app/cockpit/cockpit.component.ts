import { Component, OnInit, EventEmitter, Output, ViewEncapsulation, ViewChild, ElementRef } from '@angular/core';
import Server from '../models/server.model';


@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css'],
  encapsulation: ViewEncapsulation.Emulated //None,Native -> remove the ngcontent tags from html ,emulated is default
})
export class CockpitComponent {
  //make event that emits so another component can listen
  @Output() serverCreated = new EventEmitter<Server>();
  //set alias to output event emiter (optional)
  @Output('bpCreated') blueprintCreated = new EventEmitter<Server>();

  //access to the html input type as type ElementRef
  @ViewChild('serverContentInput') serverContentInput: ElementRef;

  server: Server = new Server('', '', '');

  // onAddServer() {
  //   //emit a new event of this type
  //   this.server.type = 'server';
  //   this.serverCreated.emit(this.server);
  //   this.server = this.newServer();
  // }

  //local references
  onAddServer(serverNameInput) {
    //emit a new event of this type
    this.server.type = 'server';
    this.server.name = serverNameInput.value;
    //get direct access to the value throgh nativeElement 
    this.server.content = this.serverContentInput.nativeElement.value;
    this.serverCreated.emit(this.server);
    this.server = this.newServer();
  }

  onAddServerBlueprint() {
    this.server.type = 'blueprint';
    this.blueprintCreated.emit(this.server);
    this.server = this.newServer();
  }

  newServer() {
    return new Server('', '', '');
  }

}
