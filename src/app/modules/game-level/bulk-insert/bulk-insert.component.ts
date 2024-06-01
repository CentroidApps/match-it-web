import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { GameLevel } from 'src/app/models/game-level';
import { GameLevelService } from 'src/app/services/game-level.service';
import { UtilService } from 'src/app/services/util.service';
import { WhiteSpaceValidator } from 'src/app/validators/white-space.validator';

@Component({
  selector: 'app-bulk-insert',
  templateUrl: './bulk-insert.component.html',
  styleUrls: ['./bulk-insert.component.scss']
})
export class BulkInsertComponent implements OnInit {

  form!: FormGroup;
  showValidation = false;

  constructor(
    private formBuilder: FormBuilder,
    private utilService: UtilService,
    private gameLevelService: GameLevelService,
    private dialogRef: MatDialogRef<BulkInsertComponent>,
    @Inject(MAT_DIALOG_DATA) public data: GameLevel | null,
  ) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void {
    this.form = this.formBuilder.group({
      data: new FormControl(null, [Validators.required, WhiteSpaceValidator.containSpace]),
    });
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
      let data = this.buildArrayData(JSON.parse(this.f.data.value), this.data?.id!);
      let response = await this.gameLevelService.saveGameLevelDetails(data);
      this.utilService.showSuccessSnack(response.message);
      this.dialogRef.close();
    } catch (e: any) {
      this.utilService.showError(e);
    } finally {
      this.utilService.hideLoader();
    }
  }

  buildArrayData(resp: any, gameLevelId: number) {
    return resp.map(
      (row: any) => {
        const temp = Object.assign({}, row);
        temp.gameLevelId = gameLevelId;
        return temp;
      }
    );
  }

}
