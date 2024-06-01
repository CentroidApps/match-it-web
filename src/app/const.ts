import { Validators } from "@angular/forms";

export class Const {

  static dateFormat = 'YYYY-MM-DDTHH:mm';
  static allowOnlyAlphabetWithSpacialChar = Validators.pattern('[a-zA-Z][a-zA-Z @/]+');
  static allowOnlyAlphabet = Validators.pattern('[a-zA-Z][a-zA-Z ]+');
  static allowOnlyAlphabetDigits = Validators.pattern('[a-zA-Z0-9][a-zA-Z0-9 ]+');
  static allowOnlyDigits = Validators.pattern('[0-9]+');
  static LogoPosition = [
    'TopLeft',
    'TopRight',
    'TopCenter',
    'BottomLeft',
    'BottomRight',
    'BottomCenter',
    'CenterLeft',
    'CenterRight',
    'Center'
  ];
  static licenseStatus = [
    'Active',
    'Inactive',
    'Expired',
  ];
  static commonDialogParams = { disableClose: false }
}
