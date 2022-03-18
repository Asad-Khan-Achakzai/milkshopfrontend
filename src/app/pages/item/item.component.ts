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
import { ItemService } from '../../web-services/item.service';
import { LocalService } from '../../web-services/local.service';
import { SessionService } from '../../web-services/session.service';
import { SharedService } from '../../web-services/shared.service';
import { BreakpointObserver } from '@angular/cdk/layout';

/** Constants used to fill up our data base. */
declare var closeAddOverlay: Function;
declare var openAddOverlay: Function;
declare var openSearchOverlay: Function;
declare var closeSearchOverlay: Function;
declare var showOrHide: Function;
@Component({ selector: 'app-item', templateUrl: './item.component.html', styleUrls: ['./item.component.scss'] })
export class ItemComponent implements OnInit,AfterViewInit  {
    displayedColumns = ['Itemname', 'price', 'countingUnit','isExpense','user','timeStamp','action'];
    dataSource: MatTableDataSource<UserData>;

    @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator = Object.create(null);
    @ViewChild(MatSort, { static: true }) sort: MatSort = Object.create(null);
    searchOverLay: boolean;
    history: any;
    revision: any;
    counts = 23;
        // constructor(private sessionService:SessionService,private localService:LocalService,private itemServices: ItemService, private constantService: ConstantService, private sharedService: SharedService, private route: Router, public conformationDialog: MatDialog, private alertService: AlertService, private cdRef: ChangeDetectorRef, private loader: NgxUiLoaderService) { };
    constructor(breakpointObserver: BreakpointObserver,private sessionService:SessionService,private localService:LocalService,private itemServices: ItemService, private constantService: ConstantService, private sharedService: SharedService, private route: Router, public conformationDialog: MatDialog, private alertService: AlertService, private cdRef: ChangeDetectorRef) { 
        
        // breakpointObserver.observe(['(max-width: 600px)']).subscribe(result => {
        //     this.displayedColumns = result.matches ?
        //         ['id', 'name', 'progress', 'color'] :
        //         ['id', 'name', 'progress', 'color'];
        // });

        // Create 100 users
        const users: UserData[] = [];
        // Assign the data to the data source for the table to render
        this.itemList = new MatTableDataSource(users);
    };

    public labels = Labels;
    formButton: string = this.translate(this.labels.btnAdd);
    submitted = false;
    selectedIndex = -1;
    updateItemId = null;
    itemList: any = new MatTableDataSource();
    itemSearch: FormGroup | undefined;
    itemPerPage: number = Constant.ITEM_PER_PAGE;
    currentPage: any;
    count: number | undefined;
    pageNo: number = 0;
    matcher = new MyErrorStateMatcher();
    // displayedColumns: string[] = ['description', 'details', 'mml', 'ratReqPerMml', 'action'];
    itemForm: FormGroup | undefined;
    constantList = [{code:'Item Name',value:'changed Value'}];
     countingUnitList = ['KG','Liter','Dozen'];
    addUpdateItem(item:any) {
        
        closeAddOverlay();
        this.startLoader();
        if (this.updateItemId == null) {
            this.itemServices.addItem(this.itemForm?.value).subscribe(res => {
                if (res['message'] == 'item added successfully') {
                    this.alertService.showSuccess(this.translate(this.labels.btnAdd), this.translate(this.labels.entityNameItem));
                    
                    item = res['data'];
                    this.itemList.data.unshift(item);
                    this.itemList._data.next(this.itemList.data);
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
            
            item._id = this.updateItemId;
            item.revision=  ++this.revision;

            this.itemServices.updateItem(item).subscribe(res => {
                if (res['message'] == 'Updated Successfully') {
                    this.itemList.data[this.selectedIndex] = res['data'];
                    this.submitted = true;
                    this.itemList._data.next(this.itemList.data);
                    this.alertService.showSuccess(this.translate(this.labels.btnUpdate), this.translate(this.labels.entityNameItem));
                } else {
                    console.error(res['documentation']);
                }
            }, err => {
                console.error('err: ', err);
                this.stopLoader();
            });
            this.updateItemId = null;
            this.onClearAdd();
            this.formButton = this.translate(this.labels.btnAdd);;
        } this.stopLoader();
    }
    findAllItem() {
        this.startLoader();
        console.log('api called')
    let pageSize = 10;
        if(this.paginator?.pageSize){
            pageSize = this.paginator?.pageSize;
        }
        let index = this.paginator?.pageIndex;
        this.itemServices.findAllItem(this.itemSearch.value, this.paginator?.pageIndex, pageSize).subscribe(
            res => {
                  //  this.itemList.data = res['data']['docs'];
                if (res['message'] == 'Successful') {
                    this.count = res['count']
                    this.itemList.data = res['data'];
                    // this.paginator.length = this.count;
                    
                    this.count = res['count']
                    setTimeout(()=>this.paginator.length = this.count) 

                    setTimeout(()=>  this.paginator.pageIndex = index) 
                  

                    // this.itemList.paginator.pageIndex  = index;
                    //  this.itemList.paginator._pageIndex  = index;
                    // this.cdRef.detectChanges();
                    // this.dataSource.data.length = this.count;

                }
                else {
                    this.itemList.data = [];
                    this.count = 0;
                } this.stopLoader();
            }, err => {
                console.error('err: ', err);
                this.stopLoader();
            });
    }
    onSearch() {
       // this.countItem();
        this.findAllItem();
    }
    openSearch(){
        closeAddOverlay();
        this.searchOverLay = true;
    }
    openSAdd(){
        closeSearchOverlay();
        this.searchOverLay = false;
    }
    deleteByIdItem(_id: number, index) {
        const dialogRef = this.conformationDialog.open(DeleteAlertDialog, {
            data: { title: this.translate(this.labels.entityNameItem) }
        });
        dialogRef.afterClosed().subscribe(result => {
            if (result == true) {
                this.startLoader();
                this.itemServices.deleteByIdItem(_id).subscribe(res => {
                    if (res['message'] == 'Deleted Successfully') {
                        // this.itemList.data.splice(index, 1);
                        // this.itemList._data.next(this.itemList.data);
                        this.alertService.showSuccess(this.translate(this.labels.btnDelete), this.translate(this.labels.entityNameItem));
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
    countItem() {
        this.itemServices.countItem(this.itemSearch.value).subscribe(res => {
            if (res['message'] == 'Success') {
                if (this.count != res['data'][0]) {
                    this.count = res['data'][0];
                    this.findAllItem();
                }
            } else {
                // this.count = 0;
            }
        }, err => {
            console.error('err: ', err);
        });
    }
    onSubmit() {
        this.addUpdateItem(this.itemForm.value);
        this.submitted = false;
        this.onClearAdd();
    }onValChange(){
        
    }
    async ngOnInit() {
          closeSearchOverlay();
        closeAddOverlay();
        this.itemForm = new FormGroup({userId:new FormControl(await localStorage.getItem('userId')),countingUnit:new FormControl(null, [Validators.required]), Itemname: new FormControl("", [Validators.required, validateSpaces]),price: new FormControl(0, [Validators.required]),isExpense: new FormControl("false",[Validators.required]) });
        this.itemSearch= new FormGroup({countingUnit:new FormControl(),history: new FormControl(false), Itemname: new FormControl(),price: new FormControl() ,isExpense: new FormControl() });
        // this.countItem();
        this.countItem();
        this.findAllItem();  

     //   this.getConstantList(1234);
     
    }
    loadItemToEdit(_id: number, index) {
        this.searchOverLay = false;
        let item = this.itemList.data.find(x => x['_id'] == _id);
        this.submitted = null;
        this.formButton = this.translate(this.labels.btnEdit);
        this.updateItemId = item['_id'];
        this.revision = item['revision'];
        this.selectedIndex = index;
       // this.itemForm.controls['userId'].setValue(item['userId']);
        this.itemForm.controls['countingUnit'].setValue(item['countingUnit']);
        this.itemForm.controls['Itemname'].setValue(item['Itemname']);
        this.itemForm.controls['price'].setValue(item['price']);
        this.itemForm.controls['isExpense'].setValue(item['isExpense']);

    }
    async onClearAdd() {
        this.itemForm.reset();
        this.itemForm.controls['userId'].setValue( await localStorage.getItem('userId'));
        this.itemForm.markAsUntouched();
        this.updateItemId = null;
    }
    onPageChange() {
        //this.countItem();
        this.findAllItem();
    }
    onClearSearch() {
        this.itemSearch.reset();
        this.history = undefined;
        this.selectedIndex = -1;
        this.onSearch();
    }
    ngAfterViewInit() {
        this.itemList.sort = this.sort;
        this.itemList.paginator = this.paginator;
        console.log('paginater out of if')
         if(this.paginator?.pageSize){
            this.paginator.pageSize = Constant.ITEM_PER_PAGE;
            console.log('paginater',this.paginator?.pageSize)
        }       
         this.matcher = new MyErrorStateMatcher();
        this.cdRef.detectChanges();
    }
    applyFilter(filterValue: string) {
        filterValue = filterValue.trim(); // Remove whitespace
        filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
        this.itemList.filter = filterValue;
    }
    resetCurrentItem() {
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
        return this.updateItemId == null ? this.translate(this.labels.btnAdd) : this.translate(this.labels.btnUpdate);
    }
    required(control) {
        if(this.itemForm.get(control).touched){
            return this.itemForm.get(control).hasError('required') ? true : false;

        }
    }
    emptySpace(control) {
        return this.itemForm.get(control).hasError('validSpace') ? true : false;
    }
    minLength(control) {
        return this.itemForm.get(control).hasError('min') ? true : false;
    }
    maxLength(control) {
        return this.itemForm.get(control).hasError('max') ? true : false;
    }
    pattern(control) {
        return this.itemForm.get(control).hasError('pattern') ? true : false;
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
        this.countItem();
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
