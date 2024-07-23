import { Component, OnInit } from '@angular/core';
import { GlobalVariable } from 'src/app/config';
import { StorageService } from 'src/app/services/storage.service';
import { SystemService } from 'src/app/services/system.service';
import { UtilService } from 'src/app/services/util.service';

@Component({
  selector: 'app-system-settings',
  templateUrl: './system-settings.component.html',
  styleUrls: ['./system-settings.component.scss'],
})
export class SystemSettingsComponent implements OnInit {

  srvUrl: string = '';

  constructor(
    private utilService: UtilService,
    public storageService: StorageService,
    private systemService: SystemService,
  ) { }

  ngOnInit(): void {
    this.srvUrl = GlobalVariable.BASE_URL;
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
