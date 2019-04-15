import { Component } from '@angular/core';
import Server from './models/server.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  servers: Server[] = [];

  onServerAdded(server: Server) {
    this.servers.push(server);
  }

  onBlueprintAdded(server: Server) {
    this.servers.push(server);
  }

  onChangeFirst() {
    this.servers[0].name = 'name changed';
  }

  onDestroyFirst() {
    this.servers.splice(0, 1);
  }
}

