import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'my-app';
  serverName: string = '';
  serverContent: string = ''
  servers = []

  constructor() {
  }

  ngOnInit(): void {
  }

  addServer() {
    this.servers.push({ type: 1, name: this.serverName, content: this.serverContent });
    console.log(this.servers);
  }

  addBlueprint() {
    this.servers.push({ type: 2, name: this.serverName, content: this.serverContent });
  }

}
