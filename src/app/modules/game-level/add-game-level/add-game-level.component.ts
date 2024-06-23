import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { GameLevel } from 'src/app/models/game-level';
import { GameType } from 'src/app/models/game-type';
import { SystemConstValues } from 'src/app/models/system-const-values';
import { GameLevelService } from 'src/app/services/game-level.service';
import { GameTypeService } from 'src/app/services/game-type.service';
import { SystemService } from 'src/app/services/system.service';
import { UtilService } from 'src/app/services/util.service';
import { WhiteSpaceValidator } from 'src/app/validators/white-space.validator';

@Component({
  selector: 'app-add-game-level',
  templateUrl: './add-game-level.component.html',
  styleUrls: ['./add-game-level.component.scss']
})
export class AddGameLevelComponent implements OnInit {

  form!: FormGroup;
  showValidation = false;
  gameTypeList: GameType[] = [];
  systemConstValues: SystemConstValues | undefined;

  constructor(
    private formBuilder: FormBuilder,
    private gameTypeService: GameTypeService,
    private gameLevelService: GameLevelService,
    private systemService: SystemService,
    public utilService: UtilService,
    private dialogRef: MatDialogRef<AddGameLevelComponent>,
    @Inject(MAT_DIALOG_DATA) public data: GameLevel | null,
  ) { }

  ngOnInit(): void {
    this.initForm();
    this.loadData();
  }

  initForm(): void {
    this.form = this.formBuilder.group({
      gameTypeId: new FormControl(this.data?.gameType?.id, [Validators.required]),
      gameLevel: new FormControl(this.data?.gameLevel ?? '', [Validators.required, WhiteSpaceValidator.containSpace]),
      description: new FormControl(this.data?.description ?? '', [Validators.required]),
      bgColor: new FormControl(this.data?.bgColor ?? '', [Validators.required]),
      coinValue: new FormControl(this.data?.coinValue ?? '', [Validators.required, WhiteSpaceValidator.containSpace]),
      sequence: new FormControl(this.data?.sequence ?? '', [Validators.required, WhiteSpaceValidator.containSpace]),
      status: new FormControl(this.data?.status ?? '', [Validators.required]),
    });
    if (this.data?.id) {
      this.form.addControl('id', new FormControl(this.data?.id, [Validators.required]));
    }
  }

  async loadData() {
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

  get f(): any {
    return this.form.controls;
  }

  async onSubmit(): Promise<any> {
    if (this.form.invalid) {
      this.showValidation = true;
      return;
    }
    this.showValidation = false;

    try {
      this.utilService.showLoader();
      let response: any;
      if (this.data?.id) {
        response = await this.gameLevelService.updateGameLevel(this.form.value);
      } else {
        response = await this.gameLevelService.addGameLevel(this.form.value);
      }

      this.utilService.showSuccessSnack(response.message);
      this.dialogRef.close(true);
    } catch (e: any) {
      this.utilService.showError(e);
    } finally {
      this.utilService.hideLoader();
    }
  }

}
