import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { pull } from 'lodash';
import { GameLevel } from 'src/app/models/game-level';
import { GameType } from 'src/app/models/game-type';
import { GameLevelDetails } from 'src/app/models/level-details';
import { SystemConstValues } from 'src/app/models/system-const-values';
import { GameLevelService } from 'src/app/services/game-level.service';
import { GameTypeService } from 'src/app/services/game-type.service';
import { SystemService } from 'src/app/services/system.service';
import { UtilService } from 'src/app/services/util.service';

@Component({
  selector: 'app-level-details-table',
  templateUrl: './level-details-table.component.html',
  styleUrls: ['./level-details-table.component.scss']
})
export class LevelDetailsTableComponent implements OnInit {

  displayedColumns: string[] = ['action', 'description', 'questionModelType', 'start', 'end', 'answerModelType', 'status'];
  dataSource = new MatTableDataSource<GameLevelDetails>();
  filterForm!: FormGroup;
  gameTypeList: GameType[] = [];
  gameLevelList: GameLevel[] = [];
  systemConstValues: SystemConstValues | undefined;

  constructor(
    private utilService: UtilService,
    private gameLevelService: GameLevelService,
    private gameTypeService: GameTypeService,
    private systemService: SystemService,
    private fb: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.filterForm = this.fb.group({
      gameTypeId: new FormControl(),
      gameLevelId: new FormControl(),
    });
    this.loadGameType();
  }

  onChangeStatus(event: boolean, element: GameLevelDetails) {
    element.status = event ? 'Active' : 'Inactive';
  }

  async onGameTypeChanged() {
    this.dataSource.data = [];
    this.filterForm.patchValue({ gameLevelId: NaN });
    await this.loadGameLevel();
  }

  async loadGameLevel() {
    try {
      this.utilService.showLoader();

      let typeId = this.filterForm.controls['gameTypeId'].value;
      let response = await this.gameLevelService.getGameLevelDropdownList(typeId);
      this.gameLevelList = response.payload.data;

    } catch (e) {
      this.utilService.showError(e);
    } finally {
      this.utilService.hideLoader();
    }
  }

  async onGameLevelChanged() {
    await this.loadLevelDetails();
  }

  async loadLevelDetails() {
    try {
      this.utilService.showLoader();
      let levelId = this.filterForm.controls['gameLevelId'].value;
      let response = await this.gameLevelService.getGameLevelDetailsList(levelId);
      this.dataSource.data = response.payload.data;
    } catch (e) {
      this.utilService.showError(e);
    } finally {
      this.utilService.hideLoader();
    }
  }

  async deleteRow(item: GameLevelDetails) {
    let data = this.dataSource.data;
    pull(data, item);
    this.dataSource.data = data;

    if (item.id) {
      try {
        this.utilService.showLoader();
        let response = await this.gameLevelService.deleteGameLevelDetailsById(item.id);
        this.utilService.showSuccessSnack(response.message);
      } catch (error) {
        this.utilService.showError(error);
      } finally {
        this.utilService.hideLoader();
      }
    }
  }

  async loadGameType() {
    try {
      this.utilService.showLoader();

      let response = await this.gameTypeService.getGameTypeDropdownList();
      this.gameTypeList = response.payload.data;

      response = await this.systemService.getSystemConstValues();
      this.systemConstValues = response;

    } catch (e) {
      this.utilService.showError(e);
    } finally {
      this.utilService.hideLoader();
    }
  }

  addRow() {
    let data = this.dataSource.data;
    this.dataSource.data = [...data, this.getEmptyRow(this.filterForm.controls['gameLevelId'].value)];
  }

  async saveLevelDetails() {
    try {
      this.utilService.showLoader();
      let response = await this.gameLevelService.saveGameLevelDetails(this.dataSource.data);
      this.utilService.showSuccessSnack(response.message);
    } catch (e) {
      this.utilService.showError(e);
    } finally {
      this.utilService.hideLoader();
    }
  }

  getEmptyRow(gameLevelId: number): GameLevelDetails {
    return {
      gameLevelId: gameLevelId,
      description: '',
      questionModelType: '',
      start: 0,
      end: 0,
      answerModelType: '',
    } as GameLevelDetails;
  }
}
