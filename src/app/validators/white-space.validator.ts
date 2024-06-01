import { AbstractControl, ValidationErrors } from '@angular/forms';

export class WhiteSpaceValidator {
  static containSpace(control: AbstractControl): ValidationErrors | null {
    let value: string = control.value?.toString() ?? '';
    let invalid = false;
    if (value) {
      if (value.startsWith(' ') || value.endsWith(' ')) {
        invalid = true;
      }
      if (value.trim() === "" || (value.trim()).length === 0) {
        invalid = true;
      }
    }
    return invalid ? { 'whiteSpace': true } : null;
  }
}
