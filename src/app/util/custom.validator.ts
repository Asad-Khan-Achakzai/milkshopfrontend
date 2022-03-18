import { Injectable } from '@angular/core';
import { AbstractControl, ValidationErrors } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class CustomValidators {
  constructor(private conformationDialog: MatDialog) { }

  static isContainSpace(controls: AbstractControl) {
    return { cannotContainSpace: /^\s+|\s+$/g.test(controls.value) }
  }

  static isPhoneNoValid(controls: AbstractControl): ValidationErrors {
    return { returnPhoneTest: /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/.test(controls.value) }
  }

  ValidateUrl(control: AbstractControl) {
    if (!control.value.startsWith('https') || !control.value.endsWith('.io')) {
      return { validUrl: true };
    }
    return null;
  }


  static validate(control: AbstractControl): Observable<ValidationErrors | null> {
    let isValidated = new BehaviorSubject<{ isRequired: boolean }>(undefined);
    if (control.touched) {
      if (control.value == undefined || control.value == null || control.value == "") {
        isValidated.next({ isRequired: true });
        return isValidated;
      }
    }

    return null;
  }


}

export function ValidateUrl(control: AbstractControl) {
  if (!control.value.startsWith('https') || !control.value.includes('.io')) {
    return { validUrl: true };
  }
  return null;
}


export function validateSpaces(control: AbstractControl) {
  if (control.value == undefined || control.value == null || control.value == "") {
    return null;
  }
  // if contains spaces
  if (control.value.startsWith(' ') || control.value.endsWith(' ')) {
    // console.log("contains space");
    return { validSpace: true };
  }
  return null;
}


export function validateRequired(control: AbstractControl): Observable<ValidationErrors | null> {
  console.log("control ", control.value);
  console.log("control touched ", control.touched);

  let isValidated = new BehaviorSubject<{ isRequired: boolean }>(null);
  if (control.dirty) {
    if (control.value == undefined || control.value == null || control.value == "") {
      isValidated.next({ isRequired: true });
      return isValidated;
    }
    return null;
  }

  return null;
}



export function validatePhone(control: AbstractControl): ValidationErrors {
  if (control.value == undefined || control.value == null || control.value == "") {
    return null;
  }
  // if phone is invalid
  if (!(/^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/.test(control.value))) {
    return { validPhone: true }
  }
  return null
}