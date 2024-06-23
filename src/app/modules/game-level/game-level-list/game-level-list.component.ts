import { HttpParams } from '@angular/common/http';
import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Subject, debounceTime, distinctUntilChanged, takeUntil } from 'rxjs';
import { PaginationModel } from 'src/app/models/common-interface';
import { GameLevel } from 'src/app/models/game-level';
import { GameType } from 'src/app/models/game-type';
import { SystemConstValues } from 'src/app/models/system-const-values';
import { GameLevelService } from 'src/app/services/game-level.service';
import { GameTypeService } from 'src/app/services/game-type.service';
import { SystemService } from 'src/app/services/system.service';
import { UtilService } from 'src/app/services/util.service';
import { AddGameLevelComponent } from '../add-game-level/add-game-level.component';

@Component({
  selector: 'app-game-level-list',
  templateUrl: './game-level-list.component.html',
  styleUrls: ['./game-level-list.component.scss']
})
export class GameLevelListComponent implements OnInit, OnDestroy {

  @ViewChild('paginator', { read: MatPaginator }) paginator!: MatPaginator;
  displayedColumns: string[] = ['gameType', 'gameLevel', 'coinValue', 'sequence', 'bgColor', 'description', 'status', 'action'];
  dataSource = new MatTableDataSource<GameLevel>();
  onDestroy = new Subject<void>();

  filterForm!: FormGroup;
  systemConstValues: SystemConstValues | undefined;

  pagination: PaginationModel = {
    pageSizeOptions: [10, 25, 50, 100],
    pageSize: 10,
    pageIndex: 0,
  };

  gameTypeList: GameType[] = [];

  constructor(
    private dialog: MatDialog,
    private gameLevelService: GameLevelService,
    private gameTypeService: GameTypeService,
    private fb: FormBuilder,
    private systemService: SystemService,
    public utilService: UtilService,
  ) { }

  ngOnDestroy(): void {
    this.onDestroy.next();
    this.onDestroy.complete();
  }

  async ngOnInit(): Promise<void> {
    this.filterForm = this.fb.group({
      keyword: new FormControl(null),
      gameTypeId: new FormControl(null),
    });

    let response = await this.systemService.getSystemConstValues();
    this.systemConstValues = response;

    this.filterForm.controls['keyword'].valueChanges
      .pipe(takeUntil(this.onDestroy), debounceTime(500), distinctUntilChanged(),)
      .subscribe((_value) => {
        this.paginator.pageIndex = 0;
        this.getGameLevelList();
      });

    this.loadData();
  }

  async onGameTypeChanged() {
    await this.getGameLevelList();
  }

  filterParams(): HttpParams {
    let params = new HttpParams();
    params = params.append('skip', this.pagination.pageIndex * this.pagination.pageSize);
    params = params.append('limit', this.pagination.pageSize);

    if (this.filterForm.value.keyword) {
      params = params.append('keyword', this.filterForm.value.keyword);
    }

    if (this.filterForm.value.gameTypeId) {
      params = params.append('gameTypeId', this.filterForm.value.gameTypeId);
    }

    return params;
  }

  async loadData() {
    try {
      this.utilService.showLoader();
      let response = await this.gameTypeService.getGameTypeDropdownList();
      this.gameTypeList = response.payload.data;
      await this.getGameLevelList(false);
    } catch (e) {
      this.utilService.showError(e);
    } finally {
      this.utilService.hideLoader();
    }
  }

  async getGameLevelList(showLoader: boolean = true) {
    try {
      if (showLoader) {
        this.utilService.showLoader();
      }
      let response = await this.gameLevelService.getGameLevelList(this.filterParams());
      this.buildTableData(response.payload.data);

      setTimeout(() => {
        this.paginator.pageIndex = this.pagination.pageIndex;
        this.paginator.length = response.payload.totalItems;
      });
    } catch (e) {
      this.utilService.showError(e);
    } finally {
      if (showLoader) {
        this.utilService.hideLoader();
      }
    }
  }

  buildTableData(response: any): void {
    if (response) {
      let data = response.map(
        (list: any) => {
          const temp = Object.assign({}, list);
          temp.bgColorKey = this.systemConstValues?.colorTypes.find((it) => it.value == temp.bgColor)?.key;
          return temp;
        }
      );
      this.dataSource.data = data;
    } else {
      this.dataSource.data = [];
    }
  }

  pageChanged(event: PageEvent): void {
    this.pagination.pageSize = event.pageSize;
    this.pagination.pageIndex = event.pageIndex;
    this.getGameLevelList();
  }

  addOrEdit(it: GameLevel | null) {
    const dialogRef = this.dialog.open(AddGameLevelComponent, {
      width: '50%',
      autoFocus: false,
      disableClose: false,
      data: it,
    });
    dialogRef.afterClosed().subscribe((data) => {
      if (data) {
        this.getGameLevelList();
      }
    });
  }

  async onChangeStatus(it: GameLevel) {
    try {
      this.utilService.showLoader();
      it.status = it.status == 'Active' ? 'Inactive' : 'Active';
      let response = await this.gameLevelService.updateGameLevel(it);
      this.utilService.showSuccessSnack(response.message);
      await this.getGameLevelList(false);
    } catch (error) {
      this.utilService.showError(error);
    } finally {
      this.utilService.hideLoader();
    }
  }

  async deleteGameLevel(it: GameLevel) {
    if (confirm('Are you sure? Do you want to delete game level?') === true) {
      try {
        this.utilService.showLoader();
        let response = await this.gameLevelService.deleteGameLevelById(it.id);
        this.utilService.showSuccessSnack(response.message);
        await this.getGameLevelList(false);
      } catch (error) {
        this.utilService.showError(error);
      } finally {
        this.utilService.hideLoader();
      }
    }
  }

}
