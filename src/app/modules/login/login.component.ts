import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { StorageService } from 'src/app/services/storage.service';
import { UtilService } from 'src/app/services/util.service';
import { WhiteSpaceValidator } from 'src/app/validators/white-space.validator';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

	loginForm!: FormGroup;
	showValidation = false;

	constructor(
		private formBuilder: FormBuilder,
		private utilService: UtilService,
		private storageService: StorageService,
		private router: Router,
	) { }

	ngOnInit(): void {
		this.initializeForm();
	}

	initializeForm(): void {
		this.loginForm = this.formBuilder.group({
			srvUrl: new FormControl(null, [Validators.required, WhiteSpaceValidator.containSpace]),
		});
	}

	get form(): any {
		return this.loginForm.controls;
	}

	async onSubmitLoginDetails() {
		if (this.loginForm.invalid) {
			this.showValidation = true;
			return;
		}
		this.showValidation = false;

		try {
			this.utilService.showLoader();
			let url = this.loginForm.controls['srvUrl'].value;
			this.storageService.setSrvUrl(url);
			this.utilService.srvUrlObx.next(url);
			this.router.navigate(['game-type']);
		} catch (e: any) {
			this.utilService.showError(e);
		} finally {
			this.utilService.hideLoader();
		}
	}
}
