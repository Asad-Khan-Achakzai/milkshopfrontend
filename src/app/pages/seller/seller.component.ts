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
import { SellerService } from '../../web-services/seller.service';
import { LocalService } from '../../web-services/local.service';
import { SessionService } from '../../web-services/session.service';
import { SharedService } from '../../web-services/shared.service';
import { BreakpointObserver } from '@angular/cdk/layout';

declare var closeAddOverlay: Function;
declare var openAddOverlay: Function;
declare var openSearchOverlay: Function;
declare var closeSearchOverlay: Function;
declare var showOrHide: Function;
@Component({ selector: 'app-seller', templateUrl: './seller.component.html', styleUrls: ['./seller.component.scss'] })
export class SellerComponent implements OnInit,AfterViewInit  {
    displayedColumns = ['sellername', 'milkPrice', 'yougurtPrice', 'phoneN', 'mobileN', 'otherN','address','user','timeStamp','action'];
    types = ['Seller','Home','Comercial']
    dataSource: MatTableDataSource<UserData>;
  
    @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator = Object.create(null);
    @ViewChild(MatSort, { static: true }) sort: MatSort = Object.create(null);
    searchOverLay: boolean;
    history: any;
      revision: any;
        // constructor(private sessionService:SessionService,private localService:LocalService,private sellerServices: SellerService, private constantService: ConstantService, private sharedService: SharedService, private route: Router, public conformationDialog: MatDialog, private alertService: AlertService, private cdRef: ChangeDetectorRef, private loader: NgxUiLoaderService) { };
    constructor(breakpointObserver: BreakpointObserver,private sessionService:SessionService,private localService:LocalService,private sellerServices: SellerService, private constantService: ConstantService, private sharedService: SharedService, private route: Router, public conformationDialog: MatDialog, private alertService: AlertService, private cdRef: ChangeDetectorRef) { 
        
      //   breakpointObserver.observe(['(max-width: 600px)']).subscribe(result => {
      //       this.displayedColumns = result.matches ?
      //           ['id', 'name', 'progress', 'color'] :
      //           ['id', 'name', 'progress', 'color'];
      //   });
  
        // Create 100 users
        const users: UserData[] = [];
     
        // Assign the data to the data source for the table to render
        this.dataSource = new MatTableDataSource(users);
    };
  
    public labels = Labels;
    formButton: string = this.translate(this.labels.btnAdd);
    submitted = false;
    selectedIndex = -1;
    updateSellerId = null;
    sellerList: any = new MatTableDataSource();
    sellerForm: FormGroup | undefined;
    sellerPerPage: number = Constant.ITEM_PER_PAGE;
    currentPage: any;
    count: number | undefined;
    pageNo: number = 0;
    matcher = new MyErrorStateMatcher();
    // displayedColumns: string[] = ['description', 'details', 'mml', 'ratReqPerMml', 'action'];
    sellerSearch: FormGroup | undefined;
    constantList = [];
     countingUnitList = ['KG','Liter','Dozen'];
    addUpdateSeller(seller:any) {
        closeAddOverlay();
        this.startLoader();
        if (this.updateSellerId == null) {
            this.sellerServices.addSeller(this.sellerForm?.value).subscribe(res => {
                if (res['message'] == 'seller added successfully') {
                    seller = res['data'];
                    this.sellerList.data.unshift(seller);
                    this.sellerList._data.next(this.sellerList.data);
                    this.count++;
                    this.alertService.showSuccess(this.translate(this.labels.btnAdd), this.translate(this.labels.entityNameSeller));
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
            seller._id = this.updateSellerId;
            seller.revision=  ++this.revision;
            this.sellerServices.updateSeller(seller).subscribe(res => {
                if (res['message'] == 'Updated Successfully') {
                    this.sellerList.data[this.selectedIndex] = res['data'];
                    this.submitted = true;
                    this.sellerList._data.next(this.sellerList.data);
                    this.alertService.showSuccess(this.translate(this.labels.btnUpdate), this.translate(this.labels.entityNameSeller));
                } else {
                    console.error(res['documentation']);
                }
            }, err => {
                console.error('err: ', err);
                this.stopLoader();
            });
            this.updateSellerId = null;
            this.onClearAdd();
            this.formButton = this.translate(this.labels.btnAdd);;
        } this.stopLoader();
    }
    findAllSeller() {
        this.startLoader();
        let pageSize = 10;
        if(this.paginator?.pageSize){
            pageSize = this.paginator?.pageSize;
        }
        let index = this.paginator?.pageIndex;
        this.sellerServices.findAllSeller(this.sellerSearch.value, this.paginator?.pageIndex, this.paginator?.pageSize).subscribe(
            res => {
                if (res['message'] == 'Successful') {
                    this.sellerList.data = res['data'];
                    
                  this.count = res['count']
                  setTimeout(()=>this.paginator.length = this.count) 

                  setTimeout(()=>  this.paginator.pageIndex = index) 
                }
                else {
                    this.sellerList.data = [];
                } this.stopLoader();
            }, err => {
                console.error('err: ', err);
                this.stopLoader();
            });
    }
    onSearch() {
        this.countSeller();
        this.findAllSeller();
    }
    openSearch(){
        closeAddOverlay();
        this.searchOverLay = true;
    }
    openSAdd(){
        closeSearchOverlay();
        this.searchOverLay = false;
    }
    deleteByIdSeller(sellerId: number, index) {
        const dialogRef = this.conformationDialog.open(DeleteAlertDialog, {
            data: { title: this.translate(this.labels.entityNameSeller) }
        });
        dialogRef.afterClosed().subscribe(result => {
            if (result == true) {
                this.startLoader();
                this.sellerServices.deleteByIdSeller(sellerId).subscribe(res => {
                    if (res['message'] == 'Deleted Successfully') {
                        this.sellerList.data.splice(index, 1);
                        this.sellerList._data.next(this.sellerList.data);
                        this.alertService.showSuccess(this.translate(this.labels.btnDelete), this.translate(this.labels.entityNameSeller));
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
    countSeller() {
        this.sellerServices.countSeller(this.sellerSearch.value).subscribe(res => {
            if (res['message'] == 'Success') {
                if (this.count != res['data'][0]) {
                    this.count = res['data'][0];
                    this.findAllSeller();
                }
            } else {
                this.count = 0;
            }
        }, err => {
            console.error('err: ', err);
        });
    }
    onSubmit() {
        this.addUpdateSeller(this.sellerForm.value);
        this.submitted = false;
        this.onClearAdd();
    }onValChange(){
        
    }
    async ngOnInit() {
        closeSearchOverlay();
        closeAddOverlay();
        this.sellerForm = new FormGroup({userId:new FormControl(await localStorage.getItem('userId')),milkPrice:new FormControl(0, [Validators.required]), name: new FormControl("", [Validators.required, validateSpaces]), address: new FormControl("", [Validators.required, validateSpaces]),yougurtPrice: new FormControl(0, [Validators.required]),phoneN: new FormControl(0, [Validators.required]),mobileN: new FormControl(0, [Validators.required]),otherN: new FormControl(0, [Validators.required])});
        this.sellerSearch= new FormGroup({milkPrice:new FormControl(),history: new FormControl(false), name: new FormControl(),address: new FormControl(),yougurtPrice: new FormControl() ,phoneN: new FormControl() ,mobileN: new FormControl() ,otherN: new FormControl()  });
        // this.countSeller();
         this.findAllSeller();  
  
        this.getConstantList(1234);
     
    }
    loadSellerToEdit(sellerId: number, index) {
        this.searchOverLay = false;

        let seller = this.sellerList.data.find(x => x['_id'] == sellerId);
        this.submitted = null;
        this.formButton = this.translate(this.labels.btnEdit);
        this.updateSellerId = seller['_id'];
        this.revision = seller['revision'];
        this.selectedIndex = index;
        this.sellerForm.controls['milkPrice'].setValue(seller['milkPrice']);
        this.sellerForm.controls['name'].setValue(seller['name']);
        this.sellerForm.controls['address'].setValue(seller['address']);
  
        this.sellerForm.controls['yougurtPrice'].setValue(seller['yougurtPrice']);
        this.sellerForm.controls['phoneN'].setValue(seller['phoneN']);
        this.sellerForm.controls['mobileN'].setValue(seller['mobileN']);
        this.sellerForm.controls['otherN'].setValue(seller['otherN']);
  
    }
    async onClearAdd() {
        this.sellerForm.reset();
        this.sellerForm.markAsUntouched();
        this.sellerForm.controls['userId'].setValue( await localStorage.getItem('userId'));
        this.updateSellerId = null;
    }
    onPageChange() {
        this.countSeller();
        this.findAllSeller();
    }
    onClearSearch() {
        this.sellerSearch.reset();
        this.history = undefined;
        this.selectedIndex = -1;
        this.onSearch();
    }
    ngAfterViewInit() {
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
        //  if(this.paginator?.pageSize){
        //     this.paginator.pageSize = Constant.ITEM_PER_PAGE;
        // }        this.matcher = new MyErrorStateMatcher();
        // this.cdRef.detectChanges();
    }
    applyFilter(filterValue: string) {
        filterValue = filterValue.trim(); // Remove whitespace
        filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
        this.dataSource.filter = filterValue;
    }
    resetCurrentSeller() {
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
        return this.updateSellerId == null ? this.translate(this.labels.btnAdd) : this.translate(this.labels.btnUpdate);
    }
    required(control) {
        if(this.sellerForm.get(control).touched){
            return this.sellerForm.get(control).hasError('required') ? true : false;
  
        }
    }
    emptySpace(control) {
        return this.sellerForm.get(control).hasError('validSpace') ? true : false;
    }
    minLength(control) {
        return this.sellerForm.get(control).hasError('min') ? true : false;
    }
    maxLength(control) {
        return this.sellerForm.get(control).hasError('max') ? true : false;
    }
    pattern(control) {
        return this.sellerForm.get(control).hasError('pattern') ? true : false;
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
        this.countSeller();
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
  