import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { GameType } from 'src/app/models/game-type';
import { SystemConstValues } from 'src/app/models/system-const-values';
import { GameTypeService } from 'src/app/services/game-type.service';
import { SystemService } from 'src/app/services/system.service';
import { UtilService } from 'src/app/services/util.service';
import { WhiteSpaceValidator } from 'src/app/validators/white-space.validator';

@Component({
  selector: 'app-add-game-type',
  templateUrl: './add-game-type.component.html',
  styleUrls: ['./add-game-type.component.scss']
})
export class AddGameTypeComponent implements OnInit {

  form!: FormGroup;
  showValidation = false;
  systemConstValues: SystemConstValues | undefined;

  constructor(
    private formBuilder: FormBuilder,
    private gameTypeService: GameTypeService,
    private systemService: SystemService,
    public utilService: UtilService,
    private dialogRef: MatDialogRef<AddGameTypeComponent>,
    @Inject(MAT_DIALOG_DATA) public data: GameType | null,
  ) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void {
    this.form = this.formBuilder.group({
      gameType: new FormControl(this.data?.gameType ?? '', [Validators.required, WhiteSpaceValidator.containSpace]),
      assetImagePath: new FormControl(this.data?.assetImagePath ?? '', [Validators.required, WhiteSpaceValidator.containSpace]),
      imgType: new FormControl(this.data?.imgType ?? '', [Validators.required]),
      bgColor: new FormControl(this.data?.bgColor ?? '', [Validators.required]),
      btnColor: new FormControl(this.data?.btnColor ?? '', [Validators.required]),
      sequence: new FormControl(this.data?.sequence),
      status: new FormControl(this.data?.status ?? '', [Validators.required]),
    });
    if (this.data?.id) {
      this.form.addControl('id', new FormControl(this.data?.id, [Validators.required]));
    }
    this.loadData();
  }

  async loadData() {
    try {
      this.utilService.showLoader();

      let response = await this.systemService.getSystemConstValues();
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
      let payload = this.form.value;
      payload.sequence = payload.sequence.toString().length <= 0 ? null : Number(payload.sequence);

      if (this.data?.id) {
        response = await this.gameTypeService.updateGameType(payload);
      } else {
        response = await this.gameTypeService.addGameType(payload);
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
