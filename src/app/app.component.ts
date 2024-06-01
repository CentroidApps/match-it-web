import { Component, ViewChild } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
import { GlobalVariable } from './config';
import { StorageService } from './services/storage.service';
import { UtilService } from './services/util.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  @ViewChild(MatDrawer) drawer!: MatDrawer;

  constructor(
    private utilService: UtilService,
    public storageService: StorageService,
  ) { }

  ngOnInit(): void {
    this.utilService.srvUrlObx.subscribe((it) => {
      if (it) {
        GlobalVariable.BASE_URL = it;
      }
    });
  }

  toggleDrawer() {
    this.drawer?.toggle();
  }

  logout() {
    this.storageService.clearLocalStorage();
    window.location.reload();
  }

}
