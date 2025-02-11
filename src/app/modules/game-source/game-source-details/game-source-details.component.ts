import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { GameSource } from 'src/app/models/game-source';
import { GameType } from 'src/app/models/game-type';
import { MediaBucket } from 'src/app/models/media-bucket';
import { MediaItem } from 'src/app/models/media-item';
import { SystemConstValues } from 'src/app/models/system-const-values';
import { GameSourceService } from 'src/app/services/game-source.service';
import { GameTypeService } from 'src/app/services/game-type.service';
import { SystemService } from 'src/app/services/system.service';
import { UtilService } from 'src/app/services/util.service';
import { WhiteSpaceValidator } from 'src/app/validators/white-space.validator';

@Component({
  selector: 'app-game-source-details',
  templateUrl: './game-source-details.component.html',
  styleUrls: ['./game-source-details.component.scss'],
})
export class GameSourceDetailsComponent implements OnInit {

  form!: FormGroup;
  showValidation = false;
  data: GameSource | null = null;
  gameSourceId: number | null = null;
  systemConstValues: SystemConstValues | undefined;
  gameTypeList: GameType[] = [];

  constructor(
    private gameSourceService: GameSourceService,
    private gameTypeService: GameTypeService,
    private activatedRoute: ActivatedRoute,
    public utilService: UtilService,
    private systemService: SystemService,
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.initForm();

    this.activatedRoute.paramMap.subscribe(async (it) => {
      if (it.get('id')) {
        this.gameSourceId = parseInt(it.get('id') ?? '0');
      }
      await this.preLoadData();
    });
  }

  initForm(): void {
    this.form = this.formBuilder.group({
      gameTypeId: new FormControl(null, [Validators.required]),
      sourceGroup: new FormControl(null, [Validators.required]),
      tts: new FormControl(null, [Validators.required, WhiteSpaceValidator.containSpace]),
      spelling: new FormControl(null, [Validators.required, WhiteSpaceValidator.containSpace]),
      text1: new FormControl(null),
      text2: new FormControl(null),
      status: new FormControl('Active', [Validators.required]),
    });
  }

  onChangeStatus(value: boolean) {
    this.form.patchValue({
      status: value ? 'Active' : 'Inactive',
    });
  }

  get f(): any {
    return this.form.controls;
  }

  async preLoadData() {
    try {
      this.utilService.showLoader();
      let response = await this.gameTypeService.getGameTypeDropdownList();
      this.gameTypeList = response.payload.data;

      response = await this.systemService.getSystemConstValues();
      this.systemConstValues = response;

      if (this.gameSourceId) {
        response = await this.gameSourceService.getGameSourceDetailsById(this.gameSourceId);
        this.data = response.payload;

        if (this.data?.id) {
          this.form.addControl('id', new FormControl(this.data?.id, [Validators.required]));
        }

        this.form.patchValue(this.data!);
      }
    } catch (e) {
      this.utilService.showError(e);
    } finally {
      this.utilService.hideLoader();
    }
  }

  async deleteGameSourceMedia(media: MediaItem) {
    try {
      this.utilService.showLoader();
      await this.gameSourceService.deleteMediaById(media.id);
      this.utilService.showSuccessSnack('Media item deleted successfully');
      await this.preLoadData();
    } catch (e) {
      this.utilService.showError(e);
    } finally {
      this.utilService.hideLoader();
    }
  }

  async addFromCopyToClipboard() {
    try {
      this.utilService.showLoader();
      const clipboardItems = await navigator.clipboard.read();
      for (const item of clipboardItems) {
        for (const type of item.types) {
          if (type.startsWith('image/')) {
            const blob = await item.getType(type);
            let formData = new FormData()
            formData.append('file', blob);
            const response = await this.gameSourceService.uploadSourceMedia(formData, this.gameSourceId!);
            this.utilService.showSuccessSnack(response.message);
            await this.preLoadData();
            return;
          }
        }
      }
      alert('No image found in clipboard.');
    } catch (error) {
      console.error('Error accessing clipboard:', error);
    } finally {
      this.utilService.hideLoader();
    }
  }

  async addSourceMedia(event: any) {
    try {
      this.utilService.showLoader();
      const files = event.target?.files;

      if (files.length) {
        for (let index = 0; index < files.length; index++) {
          const selectedFile = files[index];

          let formData = new FormData()
          formData.append('file', selectedFile);
          const response = await this.gameSourceService.uploadSourceMedia(formData, this.gameSourceId!);
          this.utilService.showSuccessSnack(response.message);
        }
        event.target.value = null;
        await this.preLoadData();
      }
    } catch (error) {
      this.utilService.showError(error);
    } finally {
      this.utilService.hideLoader();
    }
  }

  async onSubmit() {

    if (this.form.invalid) {
      this.showValidation = true;
      return;
    }
    this.showValidation = false;

    try {
      this.utilService.showLoader();
      let response: any;
      if (this.gameSourceId) {
        response = await this.gameSourceService.updateGameSource(this.form.value);
      } else {
        response = await this.gameSourceService.createGameSource(this.form.value);
        this.gameSourceId = response.payload.id;
      }
      this.utilService.showSuccessSnack(response.message);
      await this.preLoadData();
    } catch (e) {
      this.utilService.showError(e);
    } finally {
      this.utilService.hideLoader();
    }
  }

  async onBucketTypeChange(bucketValue: string, media: MediaItem) {
    try {
      this.utilService.showLoader();
      let response = await this.gameSourceService.updateMediaBucket({
        id: media.id,
        bucket: bucketValue,
      } as MediaBucket);
      this.utilService.showSuccessSnack(response.message);
    } catch (e) {
      this.utilService.showError(e);
    } finally {
      this.utilService.hideLoader();
    }
  }
}
