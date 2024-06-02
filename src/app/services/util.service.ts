import { Overlay, OverlayRef } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { BehaviorSubject } from 'rxjs';
import { LoadingViewComponent } from 'src/app/shared/loading-view/loading-view.component';
import { ApiUrls } from '../config';
import { StorageService } from './storage.service';

@Injectable({
    providedIn: 'root'
})
export class UtilService {

    private progressRef: OverlayRef | undefined;
    public srvUrlObx: BehaviorSubject<string | null>;

    constructor(
        private matSnackBar: MatSnackBar,
        private overlay: Overlay,
        private storageService: StorageService
    ) {
        this.srvUrlObx = new BehaviorSubject<string | null>(this.storageService.getSrvUrl());
    }

    createOverlayRef() {
        // Globally centered position strategy
        const positionStrategy = this.overlay
            .position()
            .global()
            .centerHorizontally()
            .centerVertically();

        // Create the overlay with customizable options
        this.progressRef = this.overlay.create({
            positionStrategy,
            hasBackdrop: true,
            backdropClass: 'overlay-backdrop',
            panelClass: 'overlay-panel',
            disposeOnNavigation: true,
        });
    }

    showLoader() {
        if (this.progressRef != undefined) {
            this.hideLoader();
        }
        this.createOverlayRef();
        var portal = new ComponentPortal(LoadingViewComponent);
        this.progressRef?.attach(portal);
    }

    hideLoader() {
        this.progressRef?.dispose();
    }

    showError(e: any) {
        console.error(e);
        if (e instanceof HttpErrorResponse) {
            let error = (e as any);
            let message: string;
            if (error?.error?.errorMessages) {
                message = this.prepareErrorMessage(error.error.errorMessages);
            } else {
                message = error?.message;
            }
            this.showErrorSnack(message);
        } else if (typeof e === 'string') {
            this.showErrorSnack(e);
        }
    }

    prepareErrorMessage(messages: Array<string>) {
        return messages.join('\n');
    }

    showSuccessSnack(message: string | null | undefined, duration: number = 5000) {
        if (message) {
            this.matSnackBar.open(message, undefined, {
                duration: duration,
                panelClass: ['green-snackbar'],
                horizontalPosition: 'center',
                verticalPosition: 'top',
            });
        }
    }

    showErrorSnack(message: string | null | undefined, duration: number = 5000): void {
        if (message) {
            this.matSnackBar.open(message, undefined, {
                duration: duration,
                panelClass: ['red-snackbar'],
                horizontalPosition: 'center',
                verticalPosition: 'top',
            });
        }
    }

    getImageUrl(id: number) {
        return ApiUrls.MEDIA_DOWNLOAD() + id;
    }

    toColor(colorCode: string) {
        var num = parseInt(colorCode);
        num >>>= 0;
        var b = num & 0xFF,
            g = (num & 0xFF00) >>> 8,
            r = (num & 0xFF0000) >>> 16,
            a = ((num & 0xFF000000) >>> 24) / 255;
        return "rgba(" + [r, g, b, a].join(",") + ")";
    }
}
