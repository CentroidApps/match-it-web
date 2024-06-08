import { Component, ViewChild } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
import { environment } from 'src/environments/environment';
import { GlobalVariable } from './config';
import { StorageService } from './services/storage.service';
import { SystemService } from './services/system.service';
import { UtilService } from './services/util.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  @ViewChild(MatDrawer) drawer!: MatDrawer;
  feVersion: string = '';
  srvUrl: string = '';

  constructor(
    private utilService: UtilService,
    public storageService: StorageService,
    private systemService: SystemService,
  ) { }

  ngOnInit(): void {
    this.feVersion = environment.appVersion;

    this.utilService.srvUrlObx.subscribe((it) => {
      if (it) {
        GlobalVariable.BASE_URL = it;
        this.srvUrl = it;
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

  async downloadDb() {
    try {
      this.utilService.showLoader();
      await this.systemService.downloadDatabase();
    } catch (e) {
      this.utilService.showError(e);
    } finally {
      this.utilService.hideLoader();
    }
  }

}
