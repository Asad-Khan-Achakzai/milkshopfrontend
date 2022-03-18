
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AbstractControl, FormBuilder, ValidatorFn } from '@angular/forms';
import { MatSidenav } from '@angular/material/sidenav';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  private sidenav: MatSidenav | undefined;
constantsList = [];
  constructor(private formBuilder: FormBuilder, private httpClient: HttpClient) { }
  //******************  verify Label********************** */
  constantList = []
  personId:any;
  userName;
  userRole;
  verifyLabel(name: string, constantList:any) {
    // Null Conditions
    if (constantList == undefined || name == undefined || name == null) {
      return name
    }
    
    if (constantList.length == 0) {
      return name
    }
    console.log('name========> ',name);
    if(name == 'itemColumnName'){
      
    }
    let findConstant = constantList.find((x: { [x: string]: string; }) => x['code'].toLowerCase() == name.toLowerCase())
    if (findConstant) {
      let result = findConstant['value'];
      return result;
    }
    return name;
  }
  check(row){
    if(row.status ==2){
        return true;
    }
    return false;
}
  findSearchParams(rawValues:any, personList:any, rankList?:any, professionalCourseList?:any, storeList?:any, listOfValuesArray?:any) {
    let searchFormValidFields: any = [];
    let myForm2 = this.formBuilder.group(rawValues)
    const controls: any = myForm2.controls;
    for (const name in controls) {
      if ((controls[name].value || controls[name].value == 0 || controls[name].value == false) && (controls[name].value !== '')) {
        //searchFormValidFields.push({  name: name + ' : ' + controls[name].value  });
        if (name == 'personId' && personList.length > 0) {

          if (typeof controls[name].value != 'string') {
            let person = personList.find((x: { [x: string]: any; }) => x['personId'] == controls[name].value);
            controls[name].value = person.fullName;
          }
        } else if (name == 'rankId' && rankList.length > 0) {
          if (typeof controls[name].value != 'string') {
            let rank = rankList.find((x: { [x: string]: any; }) => x['rankId'] == controls[name].value);
            controls[name].value = rank.name;
          }
        }
        else if (name == 'professionalCourseId' && professionalCourseList.length > 0) {
          if (typeof controls[name].value != 'string') {
            let professionalCourse = professionalCourseList.find((x: { [x: string]: any; }) => x['professionalCourseId'] == controls[name].value);
            controls[name].value = professionalCourse.course;
          }
        }
        else if (name == 'choiceOfPost' && storeList.length > 0) {

          if (typeof controls[name].value != 'string') {
            let store = storeList.find((x: { [x: string]: any; }) => x['storeId'] == controls[name].value);
            controls[name].value = store.postName;
          }
        }
        else if (name == 'combatMedic') {
          if (controls[name].value) {
            controls[name].value = 'Qualified';
          } else {
            controls[name].value = 'Unqualified';
          }
          // if (typeof controls[name].value != 'string') {
          //   let store = storeList.find(x => x['storeId'] == controls[name].value);
          //   controls[name].value = store.postName;
          // }
        }
        else {

          if ((name == 'religion' || name == 'eyeColor' || name == 'bloodGroup' || name == 'medical category' || name == 'build' || name == 'complextion' || name == 'children' || name == 'proficiencyLevel' || name == 'martialStatus' || name == 'gender' || name == 'sect') && typeof controls[name].value != 'string' && listOfValuesArray && listOfValuesArray.length > 0) {
            let listofvalues = listOfValuesArray.find((x: { [x: string]: any; }) => x['listOfValuesId'] == controls[name].value);
            controls[name].value = listofvalues.title;
          }
        }
        searchFormValidFields.push({ name: name, value: controls[name].value });
      }
    }
    return searchFormValidFields;
  }
  personFilterOnNameRankAnumber(name: string, personList:any): any[] {
    console.log('name', name);
    let filterValue:any;
    if (typeof name === 'string') {
      filterValue = name.toLowerCase();
    } else {
      filterValue = name;
    }
    return personList.filter((option: { active: any; fullName: string; rankId: { name: string; }; anumber: { toString: () => string | any[]; }; }) => option.active || option.fullName.toLowerCase().includes(filterValue) || option.rankId.name.toLowerCase().includes(filterValue) || option.anumber.toString().includes(filterValue.toString()));
  }
  personFilterSearchOnNameRankAnumber(name: string, personList:any): any[] {
    console.log('name', name);
    let filterValue:any;
    if (typeof name === 'string') {
      filterValue = name.toLowerCase();
    } else {
      filterValue = name;
    }
    return personList.filter((option: { active: any; fullName: string | any[]; rankId: { name: string | any[]; }; anumber: { toString: () => string | any[]; }; }) => option.active || option.fullName.includes(filterValue) || option.rankId.name.includes(filterValue) || option.anumber.toString().includes(filterValue.toString()));
  }
  autocompleteObjectValidator(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
      if (typeof control.value === 'string' || control.value == null) {
        console.log('control ', control);
        return { 'invalidAutocompleteObject': { value: control.value } }
      }
      return null  /* valid option selected */
    }
  }
  addDaysToDate(date: Date, days: number): Date {
    let dat: any = date.setDate(date.getDate() + days);
    console.log('date = ', dat);
    return dat;
  }
  displayFn(user: any): string {
    return user && user.fullName ? user.fullName : '';
  }
  public setSidenav(sidenav: MatSidenav) {
    this.sidenav = sidenav;
  }
  public open() {
    return this.sidenav?.open();
  }
  public close() {
    return this.sidenav?.close();
  }
  public toggle(): void {

    console.log(this.sidenav);
    this.sidenav?.toggle();
  }
}
