import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  feVersion: string = '';

  constructor() { }

  ngOnInit(): void {
    this.feVersion = environment.appVersion;
  }
}
