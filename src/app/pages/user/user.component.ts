import { DatePipe } from '@angular/common';
import { AfterViewInit, ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
//import { NgxUiLoaderService } from 'ngx-ui-loader';
import { MyErrorStateMatcher } from '../../pipes/ErrorMatcher';
import { DeleteAlertDialog } from '../../delete-popup/dialog-delete-alert';
import { validateSpaces } from '../../util/custom.validator';
import { AlertService } from '../../web-services/alert.service';
import { Constant } from '../../util/constant';
import { Labels } from '../../util/labels';
import { ConstantService } from '../../web-services/constant.service';
import { UserService } from '../../web-services/user.service';
import { LocalService } from '../../web-services/local.service';
import { SessionService } from '../../web-services/session.service';
import { SharedService } from '../../web-services/shared.service';
import { BreakpointObserver } from '@angular/cdk/layout';

declare var closeAddOverlay: Function;
declare var openAddOverlay: Function;
declare var openSearchOverlay: Function;
declare var closeSearchOverlay: Function;
declare var showOrHide: Function;
@Component({ selector: 'app-user', templateUrl: './user.component.html', styleUrls: ['./user.component.scss'] })
export class UserComponent implements OnInit,AfterViewInit  {
    displayedColumns = ['name', 'password', 'role','contact','address','action'];
    dataSource: MatTableDataSource<UserData>;

    @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator = Object.create(null);
    @ViewChild(MatSort, { static: true }) sort: MatSort = Object.create(null);
    searchOverLay: boolean;
    history: any;
 
        // constructor(private sessionService:SessionService,private localService:LocalService,private userServices: UserService, private constantService: ConstantService, private sharedService: SharedService, private route: Router, public conformationDialog: MatDialog, private alertService: AlertService, private cdRef: ChangeDetectorRef, private loader: NgxUiLoaderService) { };
    constructor(breakpointObserver: BreakpointObserver,private sessionService:SessionService,private localService:LocalService,private userServices: UserService, private constantService: ConstantService, private sharedService: SharedService, private route: Router, public conformationDialog: MatDialog, private alertService: AlertService, private cdRef: ChangeDetectorRef) { 
        
        // breakpointObserver.observe(['(max-width: 600px)']).subscribe(result => {
        //     this.displayedColumns = result.matches ?
        //         ['id', 'name', 'progress', 'color'] :
        //         ['id', 'name', 'progress', 'color'];
        // });

        // Create 100 users
        const users: UserData[] = [];
     

        // Assign the data to the data source for the table to render
        this.userList = new MatTableDataSource(users);
    };

    public labels = Labels;
    formButton: string = this.translate(this.labels.btnAdd);
    submitted = false;
    selectedIndex = -1;
    updateUserId = null;
    userList: any = new MatTableDataSource();
    userSearch: FormGroup | undefined;
    userPerPage: number = Constant.ITEM_PER_PAGE;
    currentPage: any;
    count: number | undefined;
    pageNo: number = 0;
    matcher = new MyErrorStateMatcher();
    // displayedColumns: string[] = ['description', 'details', 'mml', 'ratReqPerMml', 'action'];
    userForm: FormGroup | undefined;
    constantList = [{code:'User Name',value:'changed Value'}];
    roles = ['Admin','User'];
    addUpdateUser(user:any) {
        
        closeAddOverlay();
        this.startLoader();
        if (this.updateUserId == null) {
            this.userServices.addUser(this.userForm?.value).subscribe(res => {
                if (res['message'] == 'manager added successfully') {
                    this.alertService.showSuccess(this.translate(this.labels.btnAdd), this.translate(this.labels.entityNameUser));
                    
                    user = res['data'];
                    this.userList.data.unshift(user);
                    this.userList._data.next(this.userList.data);
                    this.count++;
                    this.submitted = true;
                } else {
                    console.error(res['documentation']);
                }
            }, err => {
                console.error('err: ', err);
                this.stopLoader();
            });
        }
        else {
            
            user._id = this.updateUserId;
            this.userServices.updateUser(user).subscribe(res => {
                if (res['message'] == 'Updated Successfully') {
                    this.userList.data[this.selectedIndex] = res['data'];
                    this.submitted = true;
                    this.userList._data.next(this.userList.data);
                    this.alertService.showSuccess(this.translate(this.labels.btnUpdate), this.translate(this.labels.entityNameUser));
                } else {
                    console.error(res['documentation']);
                }
            }, err => {
                console.error('err: ', err);
                this.stopLoader();
            });
            this.updateUserId = null;
            this.onClearAdd();
            this.formButton = this.translate(this.labels.btnAdd);;
        } this.stopLoader();
    }
    findAllUser() {
        this.startLoader();
        let pageSize = 10;
        if(this.paginator?.pageSize){
            pageSize = this.paginator?.pageSize;
        }
        let index = this.paginator?.pageIndex;
        this.userServices.findAllUser(this.userSearch.value, this.paginator?.pageIndex, this.paginator?.pageSize).subscribe(
            res => {
                  //  this.userList.data = res['data']['docs'];
                if (res['message'] == 'Successful') {
                    
                    this.userList.data = res['data']['docs'];
                    
                  this.count = res['count']
                  setTimeout(()=>this.paginator.length = this.count) 

                  setTimeout(()=>  this.paginator.pageIndex = index) 
                  
                }
                else {
                    this.userList.data = [];
                } this.stopLoader();
            }, err => {
                console.error('err: ', err);
                this.stopLoader();
            });
    }
    onSearch() {
       // this.countUser();
        this.findAllUser();
    }
    openSearch(){
        closeAddOverlay();
        this.searchOverLay = true;
    }
    openSAdd(){
        closeSearchOverlay();
        this.searchOverLay = false;
    }
    deleteByIdUser(_id: number, index) {
        const dialogRef = this.conformationDialog.open(DeleteAlertDialog, {
            data: { title: this.translate(this.labels.entityNameUser) }
        });
        dialogRef.afterClosed().subscribe(result => {
            if (result == true) {
                this.startLoader();
                this.userServices.deleteByIdUser(_id).subscribe(res => {
                    if (res['message'] == 'Deleted Successfully') {
                        this.userList.data.splice(index, 1);
                        this.userList._data.next(this.userList.data);
                        this.alertService.showSuccess(this.translate(this.labels.btnDelete), this.translate(this.labels.entityNameUser));
                        this.count--;
                    } else {
                        console.error('error: ', res['documentation']);
                    }
                }, err => {
                    console.error('err: ', err);
                    this.stopLoader();
                });
            }
        });
    }
    countUser() {
        this.userServices.countUser(this.userSearch.value).subscribe(res => {
            if (res['message'] == 'Success') {
                if (this.count != res['data'][0]) {
                    this.count = res['data'][0];
                    this.findAllUser();
                }
            } else {
                this.count = 0;
            }
        }, err => {
            console.error('err: ', err);
        });
    }
    onSubmit() {
        this.addUpdateUser(this.userForm.value);
        this.submitted = false;
        this.onClearAdd();
    }
  
    ngOnInit() {
          closeSearchOverlay();
        closeAddOverlay();
        this.userForm = new FormGroup({user:new FormControl(1),contact:new FormControl(null, [Validators.required]),role:new FormControl(null, [Validators.required]),password:new FormControl(null, [Validators.required,validateSpaces]), name: new FormControl("", [Validators.required, validateSpaces]),address: new FormControl('', [Validators.required,validateSpaces]) });
        this.userSearch= new FormGroup({contact:new FormControl(),history: new FormControl(false), role: new FormControl(),password: new FormControl(),name: new FormControl(),address: new FormControl() });
        // this.countUser();
        this.findAllUser();  

     //   this.getConstantList(1234);
     
    }
    loadUserToEdit(_id: number, index) {
        this.searchOverLay = false;

        let user = this.userList.data.find(x => x['_id'] == _id);
        this.submitted = null;
        this.formButton = this.translate(this.labels.btnEdit);
        this.updateUserId = user['_id'];
        this.selectedIndex = index;
        this.userForm.controls['contact'].setValue(user['contact']);
        this.userForm.controls['role'].setValue(user['role']);
        this.userForm.controls['password'].setValue(user['password']);
        this.userForm.controls['name'].setValue(user['name']);
        this.userForm.controls['address'].setValue(user['address']);
    }
    onClearAdd() {
        this.userForm.reset();
        this.userForm.markAsUntouched();
        this.updateUserId = null;
    }
    onPageChange() {
        this.countUser();
        this.findAllUser();
    }
    onClearSearch() {
        this.userSearch.reset();
        this.history = undefined;
        this.selectedIndex = -1;
        this.onSearch();
    }
    ngAfterViewInit() {
        this.userList.paginator = this.paginator;
        this.userList.sort = this.sort;
        //  if(this.paginator?.pageSize){
        //     this.paginator.pageSize = Constant.ITEM_PER_PAGE;
        // }        this.matcher = new MyErrorStateMatcher();
        // this.cdRef.detectChanges();
    }
    applyFilter(filterValue: string) {
        filterValue = filterValue.trim(); // Remove whitespace
        filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
        this.userList.filter = filterValue;
    }
    resetCurrentUser() {
     if(this.paginator?.pageIndex){
            this.paginator.pageIndex = Constant.FIRST_PAGE;
            this.pageNo = this.paginator.pageIndex;
        }
    }
    startLoader() {
        //this.loader.start();
        setTimeout(() => {
           // this.loader.stop();
        }, 3000);
    }
    stopLoader() {
        //this.loader.stop();
    }
    addUpdateTitle() {
        if(this.searchOverLay && this.searchOverLay != null){
            return this.labels.btnSearch;
        }
        return this.updateUserId == null ? this.translate(this.labels.btnAdd) : this.translate(this.labels.btnUpdate);
    }
    required(control) {
        if(this.userForm.get(control).touched){
            return this.userForm.get(control).hasError('required') ? true : false;

        }
    }
    emptySpace(control) {
        return this.userForm.get(control).hasError('validSpace') ? true : false;
    }
    minLength(control) {
        return this.userForm.get(control).hasError('min') ? true : false;
    }
    maxLength(control) {
        return this.userForm.get(control).hasError('max') ? true : false;
    }
    pattern(control) {
        return this.userForm.get(control).hasError('pattern') ? true : false;
    }
    translate(label) {
        return this.sharedService.verifyLabel(label, this.sharedService.constantList);
    }
    getConstantList(formId) {
        this.constantService.getFormConstantsList(formId).subscribe(data => {
            if (data['statusCode'] == 200) {
                this.constantList = data['data'];
            } else {
                this.constantList = [];
            }
        });
    }
    onDateChange(value, control) {
        let date = new DatePipe('en-US').transform(value, 'yyyy-MM-dd');
        control.setValue(date);
    }
    refresh() {
        this.countUser();
    }
    printPage() {
        window.print();
    }
}
export interface UserData {
    id: string;
    name: string;
    progress: string;
    color: string;
}
