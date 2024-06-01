import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { GameType } from 'src/app/models/game-type';
import { GameTypeService } from 'src/app/services/game-type.service';
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

  constructor(
    private formBuilder: FormBuilder,
    private utilService: UtilService,
    private gameTypeService: GameTypeService,
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
      bgColor: new FormControl(this.data?.bgColor ?? '', [Validators.required, WhiteSpaceValidator.containSpace]),
      btnColor: new FormControl(this.data?.btnColor ?? '', [Validators.required, WhiteSpaceValidator.containSpace]),
      sequence: new FormControl(this.data?.sequence ?? '', [Validators.required, WhiteSpaceValidator.containSpace]),
      status: new FormControl(this.data?.status ?? '', [Validators.required]),
    });
    if (this.data?.id) {
      this.form.addControl('id', new FormControl(this.data?.id, [Validators.required]));
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
        response = await this.gameTypeService.updateGameType(this.form.value);
      } else {
        response = await this.gameTypeService.addGameType(this.form.value);
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
