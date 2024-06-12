import { HttpParams } from '@angular/common/http';
import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject, debounceTime, distinctUntilChanged, takeUntil } from 'rxjs';
import { PaginationModel } from 'src/app/models/common-interface';
import { GameSource } from 'src/app/models/game-source';
import { GameType } from 'src/app/models/game-type';
import { MediaItem } from 'src/app/models/media-item';
import { GameSourceService } from 'src/app/services/game-source.service';
import { GameTypeService } from 'src/app/services/game-type.service';
import { UtilService } from 'src/app/services/util.service';
import { ShowImageDialogComponent } from '../show-image-dialog/show-image-dialog.component';

@Component({
  selector: 'app-game-source-list',
  templateUrl: './game-source-list.component.html',
  styleUrls: ['./game-source-list.component.scss']
})
export class GameSourceListComponent implements OnInit, OnDestroy {

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  displayedColumns: string[] = ['media', 'spelling', 'text1', 'text2', 'createdAt', 'status', 'action'];
  dataSource = new MatTableDataSource<GameSource>();
  onDestroy = new Subject<void>();

  filterForm!: FormGroup;

  pagination: PaginationModel = {
    pageSizeOptions: [10, 25, 50, 100],
    pageSize: 10,
    pageIndex: 0,
  };

  gameTypeList: GameType[] = [];

  constructor(
    public utilService: UtilService,
    private gameSourceService: GameSourceService,
    private gameTypeService: GameTypeService,
    private fb: FormBuilder,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private _dialog: MatDialog,
  ) { }

  ngOnDestroy(): void {
    this.onDestroy.next();
    this.onDestroy.complete();
  }

  ngOnInit(): void {
    this.filterForm = this.fb.group({
      keyword: new FormControl(null),
      gameTypeId: new FormControl(null),
    });

    this.activatedRoute.queryParams.subscribe((params) => {
      const options: { [key: string]: any } = {};
      if (params?.['page'] && !this.pagination.pageIndex) {
        this.pagination.pageIndex = parseInt(params?.['page'])
      }
      if (params?.['size']) {
        this.pagination.pageSize = params?.['size']
      }
      if (params?.['keyword'] && !this.filterForm.value.keyword) {
        options['keyword'] = params?.['keyword'];
      }
      if (params?.['gameTypeId'] && !this.filterForm.value.gameTypeId) {
        options['gameTypeId'] = parseInt(params?.['gameTypeId']);
      }

      this.filterForm.patchValue(options);
    });

    this.filterForm.controls['keyword'].valueChanges
      .pipe(takeUntil(this.onDestroy), debounceTime(500), distinctUntilChanged(),)
      .subscribe((_value) => {
        this.paginator.pageIndex = 0;
        this.getGameSourceList();
      });

    this.loadData();
  }

  async onGameTypeChanged() {
    await this.getGameSourceList();
  }

  async loadData() {
    try {
      this.utilService.showLoader();
      let response = await this.gameTypeService.getGameTypeDropdownList();
      this.gameTypeList = response.payload.data;
      await this.getGameSourceList(false);
    } catch (e) {
      this.utilService.showError(e);
    } finally {
      this.utilService.hideLoader();
    }
  }

  async getGameSourceList(showLoader: boolean = true) {
    try {
      if (showLoader) {
        this.utilService.showLoader();
      }
      let response = await this.gameSourceService.getGameSourceList(this.filterParams());
      response.payload.data.map(it => {
        it.mediaItems?.sort((a: MediaItem, b: MediaItem) => {
          return a.id - b.id;
        });
      });
      this.dataSource.data = response.payload.data;
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

  pageChanged(event: PageEvent): void {
    this.pagination.pageSize = event.pageSize;
    this.pagination.pageIndex = event.pageIndex;
    this.getGameSourceList();
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
    this.updateRoute();
    return params;
  }

  updateRoute() {
    this.router.navigate([], {
      replaceUrl: true,
      relativeTo: this.activatedRoute,
      queryParams: {
        page: this.pagination.pageIndex,
        size: this.pagination.pageSize,
        keyword: this.filterForm.value.keyword,
        gameTypeId: this.filterForm.value.gameTypeId,
      },
      queryParamsHandling: 'merge',
    });
  }

  openDetails(source: GameSource) {
    this.router.navigate(['source-form', source.id], { relativeTo: this.activatedRoute });
  }

  async onChangeStatus(it: GameSource) {
    try {
      this.utilService.showLoader();
      it.status = it.status == 'Active' ? 'Inactive' : 'Active';
      let response = await this.gameSourceService.updateGameSource(it);
      this.utilService.showSuccessSnack(response.message);
      await this.getGameSourceList(false);
    } catch (error) {
      this.utilService.showError(error);
    } finally {
      this.utilService.hideLoader();
    }
  }

  async deleteSourceDetails(source: GameSource) {
    if (confirm('Are you sure? Do you want to delete source item?') === true) {
      try {
        this.utilService.showLoader();
        await this.gameSourceService.deleteGameSourceById(source.id);
        this.utilService.showSuccessSnack('Game source item deleted successfully');
        await this.getGameSourceList(false);
      } catch (e) {
        this.utilService.showError(e);
      } finally {
        this.utilService.hideLoader();
      }
    }
  }

  showImageDialog(media: MediaImage) {
    this._dialog.open(ShowImageDialogComponent, {
      autoFocus: false,
      data: {
        media: media,
      }
    })
  }
}
