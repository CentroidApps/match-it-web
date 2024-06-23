import { HttpParams } from '@angular/common/http';
import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Subject, debounceTime, distinctUntilChanged, takeUntil } from 'rxjs';
import { PaginationModel } from 'src/app/models/common-interface';
import { GameType } from 'src/app/models/game-type';
import { SystemConstValues } from 'src/app/models/system-const-values';
import { GameTypeService } from 'src/app/services/game-type.service';
import { SystemService } from 'src/app/services/system.service';
import { UtilService } from 'src/app/services/util.service';
import { AddGameTypeComponent } from '../add-game-type/add-game-type.component';

@Component({
  selector: 'app-game-type-list',
  templateUrl: './game-type-list.component.html',
  styleUrls: ['./game-type-list.component.scss']
})
export class GameTypeListComponent implements OnInit, OnDestroy {

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  displayedColumns: string[] = ['gameType', 'assetImagePath', 'imgType', 'sequence', 'bgColor', 'btnColor', 'status', 'action'];
  dataSource = new MatTableDataSource<GameType>();
  onDestroy = new Subject<void>();

  filterForm!: FormGroup;
  systemConstValues: SystemConstValues | undefined;

  pagination: PaginationModel = {
    pageSizeOptions: [10, 25, 50, 100],
    pageSize: 10,
    pageIndex: 0,
  };

  constructor(
    private dialog: MatDialog,
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
    });

    let response = await this.systemService.getSystemConstValues();
    this.systemConstValues = response;

    this.filterForm.controls['keyword'].valueChanges
      .pipe(takeUntil(this.onDestroy), debounceTime(500), distinctUntilChanged(),)
      .subscribe((_value) => {
        this.paginator.pageIndex = 0;
        this.getGameTypeList();
      });
    this.getGameTypeList();
  }

  async getGameTypeList(toShowLoader: boolean = true) {
    try {
      if (toShowLoader) {
        this.utilService.showLoader();
      }
      let response = await this.gameTypeService.getGameTypeList(this.filterParams());
      this.buildTableData(response.payload.data);

      setTimeout(() => {
        this.paginator.pageIndex = this.pagination.pageIndex;
        this.paginator.length = response.payload.totalItems;
      });
    } catch (e) {
      this.utilService.showError(e);
    } finally {
      if (toShowLoader) {
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
          temp.btnColorKey = this.systemConstValues?.colorTypes.find((it) => it.value == temp.btnColor)?.key;
          return temp;
        }
      );
      this.dataSource.data = data;
    } else {
      this.dataSource.data = [];
    }
  }

  filterParams(): HttpParams {
    let params = new HttpParams();
    params = params.append('skip', this.pagination.pageIndex * this.pagination.pageSize);
    params = params.append('limit', this.pagination.pageSize);

    if (this.filterForm.value.keyword) {
      params = params.append('keyword', this.filterForm.value.keyword);
    }

    return params;
  }

  pageChanged(event: PageEvent): void {
    this.pagination.pageSize = event.pageSize;
    this.pagination.pageIndex = event.pageIndex;
    this.getGameTypeList();
  }

  addOrEdit(it: GameType | null) {
    const dialogRef = this.dialog.open(AddGameTypeComponent, {
      width: '50%',
      autoFocus: false,
      disableClose: false,
      data: it,
    });
    dialogRef.afterClosed().subscribe((data) => {
      if (data) {
        this.getGameTypeList();
      }
    });
  }

  async onChangeStatus(gameType: GameType) {
    try {
      this.utilService.showLoader();
      gameType.status = gameType.status == 'Active' ? 'Inactive' : 'Active';
      let response = await this.gameTypeService.updateGameType(gameType);
      this.utilService.showSuccessSnack(response.message);
      await this.getGameTypeList(false);
    } catch (error) {
      this.utilService.showError(error);
    } finally {
      this.utilService.hideLoader();
    }
  }

  async deleteGameType(it: GameType) {
    if (confirm('Are you sure? Do you want to delete game?') === true) {
      try {
        this.utilService.showLoader();
        let response = await this.gameTypeService.deleteGameTypeById(it.id);
        this.utilService.showSuccessSnack(response.message);
        await this.getGameTypeList(false);
      } catch (error) {
        this.utilService.showError(error);
      } finally {
        this.utilService.hideLoader();
      }
    }
  }
}
