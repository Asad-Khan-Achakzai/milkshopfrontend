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
import { WaistageService } from '../../web-services/wastage.service';
import { LocalService } from '../../web-services/local.service';
import { SessionService } from '../../web-services/session.service';
import { SharedService } from '../../web-services/shared.service';
import { BreakpointObserver } from '@angular/cdk/layout';
import { ItemService } from 'src/app/web-services/item.service';
import { BuyerService } from 'src/app/web-services/buyer.service';

declare var closeAddOverlay: Function;
declare var openAddOverlay: Function;
declare var openSearchOverlay: Function;
declare var closeSearchOverlay: Function;
declare var showOrHide: Function;
@Component({
  selector: 'app-wastage',
  templateUrl: './wastage.component.html',
  styleUrls: ['./wastage.component.scss']
})
export class WaistageComponent implements OnInit {

    displayedColumns = ['BuyerName', 'item', 'quantity','reason','user','timeStamp','action'];
    dataSource: MatTableDataSource<UserData>;

    @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator = Object.create(null);
    @ViewChild(MatSort, { static: true }) sort: MatSort = Object.create(null);
    searchOverLay: boolean;
    history: any;
    revision: any;
    itemList: any;
    buyerList: any;
 
        // constructor(private sessionService:SessionService,private localService:LocalService,private waistageServices: WaistageService, private constantService: ConstantService, private sharedService: SharedService, private route: Router, public conformationDialog: MatDialog, private alertService: AlertService, private cdRef: ChangeDetectorRef, private loader: NgxUiLoaderService) { };
    constructor(breakpointObserver: BreakpointObserver,private sessionService:SessionService,private localService:LocalService,private waistageServices: WaistageService,private buyerServices: BuyerService,private itemServices:ItemService, private constantService: ConstantService, private sharedService: SharedService, private route: Router, public conformationDialog: MatDialog, private alertService: AlertService, private cdRef: ChangeDetectorRef) { 

        // Create 100 users
        const users: UserData[] = [];
        

        // Assign the data to the data source for the table to render
        this.waistageList = new MatTableDataSource(users);
    };

    public labels = Labels;
    formButton: string = this.translate(this.labels.btnAdd);
    submitted = false;
    selectedIndex = -1;
    updateWaistageId = null;
    waistageList: any = new MatTableDataSource();
    waistageSearch: FormGroup | undefined;
    
    itemSearch: FormGroup | undefined;
    hotelSearch: FormGroup | undefined;

    waistagePerPage: number = Constant.ITEM_PER_PAGE;
    currentPage: any;
    count: number | undefined;
    pageNo: number = 0;
    matcher = new MyErrorStateMatcher();
    // displayedColumns: string[] = ['description', 'details', 'mml', 'ratReqPerMml', 'action'];
    waistageForm: FormGroup | undefined;
    constantList = [{code:'Waistage Name',value:'changed Value'}];
    reasons = ['reson 1','reson 2','reson 3'];
     countingUnitList = ['KG','Liter','Dozen'];
    addUpdateWaistage(waistage:any) {
        
        closeAddOverlay();
        this.startLoader();
        if (this.updateWaistageId == null) {
            this.waistageServices.addWaistage(this.waistageForm?.value).subscribe(res => {
                if (res['message'] == 'waistage added successfully') {
                    this.alertService.showSuccess(this.translate(this.labels.btnAdd), this.translate(this.labels.entityNameWaistage));
                    
                    waistage = res['data'];
                    this.waistageList.data.unshift(waistage);
                    this.waistageList._data.next(this.waistageList.data);
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
            
            waistage._id = this.updateWaistageId;
            waistage.revision=  ++this.revision;
            this.waistageServices.updateWaistage(waistage).subscribe(res => {
                if (res['message'] == 'Updated Successfully') {
                    this.waistageList.data[this.selectedIndex] = res['data'];
                    this.submitted = true;
                    this.waistageList._data.next(this.waistageList.data);
                    this.alertService.showSuccess(this.translate(this.labels.btnUpdate), this.translate(this.labels.entityNameWaistage));
                } else {
                    console.error(res['documentation']);
                }
            }, err => {
                console.error('err: ', err);
                this.stopLoader();
            });
            this.updateWaistageId = null;
            this.onClearAdd();
            this.formButton = this.translate(this.labels.btnAdd);;
        } this.stopLoader();
    }
    findAllWaistage() {
        this.startLoader();
        let pageSize = 10;
        if(this.paginator?.pageSize){
            pageSize = this.paginator?.pageSize;
        }
        let index = this.paginator?.pageIndex;
        this.waistageServices.findAllWaistage(this.waistageSearch.value, this.paginator?.pageIndex, this.paginator?.pageSize).subscribe(
            res => {
                  //  this.waistageList.data = res['data']['docs'];
                if (res['message'] == 'Successful') {
                    this.waistageList.data = res['data'];
                    
                  this.count = res['count']
                  setTimeout(()=>this.paginator.length = this.count) 

                  setTimeout(()=>  this.paginator.pageIndex = index) 
                }
                else {
                    this.waistageList.data = [];
                } this.stopLoader();
            }, err => {
                console.error('err: ', err);
                this.stopLoader();
            });
    }
    onSearch() {
       // this.countWaistage();
        this.findAllWaistage();
    }
    openSearch(){
        closeAddOverlay();
        this.searchOverLay = true;
    }
    openSAdd(){
        closeSearchOverlay();
        this.searchOverLay = false;
    }
    deleteByIdWaistage(_id: number, index) {
        const dialogRef = this.conformationDialog.open(DeleteAlertDialog, {
            data: { title: this.translate(this.labels.entityNameWaistage) }
        });
        dialogRef.afterClosed().subscribe(result => {
            if (result == true) {
                this.startLoader();
                this.waistageServices.deleteByIdWaistage(_id).subscribe(res => {
                    if (res['message'] == 'Deleted Successfully') {
                        this.waistageList.data.splice(index, 1);
                        this.waistageList._data.next(this.waistageList.data);
                        this.alertService.showSuccess(this.translate(this.labels.btnDelete), this.translate(this.labels.entityNameWaistage));
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
    countWaistage() {
        this.waistageServices.countWaistage(this.waistageSearch.value).subscribe(res => {
            if (res['message'] == 'Success') {
                if (this.count != res['data'][0]) {
                    this.count = res['data'][0];
                    this.findAllWaistage();
                }
            } else {
                this.count = 0;
            }
        }, err => {
            console.error('err: ', err);
        });
    }
    onSubmit() {
        this.addUpdateWaistage(this.waistageForm.value);
        this.submitted = false;
        this.onClearAdd();
    }onValChange(){
        
    }
    async ngOnInit() {
        closeSearchOverlay();
      closeAddOverlay();
      this.waistageForm = new FormGroup({userId:new FormControl(await localStorage.getItem('userId')),buyer:new FormControl(null, [Validators.required]), item: new FormControl("", [Validators.required]),quantity: new FormControl(0, [Validators.required]),reason: new FormControl(null, [Validators.required])});
      this.waistageSearch= new FormGroup({buyer:new FormControl(),history: new FormControl(false), item: new FormControl(),quantity: new FormControl(),reason: new FormControl() });
      this.itemSearch= new FormGroup({countingUnit:new FormControl(),history: new FormControl(false), Itemname: new FormControl(),price: new FormControl(),isExpense: new FormControl('false') });
      this.hotelSearch= new FormGroup({type:new FormControl(),milkPrice:new FormControl(),history: new FormControl(false), name: new FormControl(),address: new FormControl(),yougurtPrice: new FormControl() ,phoneN: new FormControl() ,mobileN: new FormControl() ,otherN: new FormControl()  });

      // this.countItem();
      this.findAllItem();  
      this.findAllBuyer();
      this.findAllWaistage();

   //   this.getConstantList(1234);
   
  }
    loadWaistageToEdit(_id: number, index) {
        this.searchOverLay = false;

        let waistage = this.waistageList.data.find(x => x['_id'] == _id);
        this.submitted = null;
        this.formButton = this.translate(this.labels.btnEdit);
        this.updateWaistageId = waistage['_id'];
        this.revision = waistage['revision'];
        this.selectedIndex = index;
       // this.waistageForm.controls['userId'].setValue(waistage['userId']);
        this.waistageForm.controls['quantity'].setValue(waistage['quantity']);
        this.waistageForm.controls['buyer'].setValue(waistage['buyer']['_id']);
        this.waistageForm.controls['item'].setValue(waistage['item']['_id']);
        this.waistageForm.controls['payment'].setValue(waistage['payment']);

    }
    async onClearAdd() {
        this.waistageForm.reset();
        this.waistageForm.controls['userId'].setValue( await localStorage.getItem('userId'));
        this.waistageForm.markAsUntouched();
        this.updateWaistageId = null;
    }
    onPageChange() {
        this.countWaistage();
        this.findAllWaistage();
    }
    onClearSearch() {
        this.waistageSearch.reset();
        this.history = undefined;
        this.selectedIndex = -1;
        this.onSearch();
    }
    ngAfterViewInit() {
        this.waistageList.paginator = this.paginator;
        this.waistageList.sort = this.sort;
        //  if(this.paginator?.pageSize){
        //     this.paginator.pageSize = Constant.ITEM_PER_PAGE;
        // }        this.matcher = new MyErrorStateMatcher();
        // this.cdRef.detectChanges();
    }
    applyFilter(filterValue: string) {
        filterValue = filterValue.trim(); // Remove whitespace
        filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
        this.waistageList.filter = filterValue;
    }
    resetCurrentWaistage() {
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
        return this.updateWaistageId == null ? this.translate(this.labels.btnAdd) : this.translate(this.labels.btnUpdate);
    }
    required(control) {
        if(this.waistageForm.get(control).touched){
            return this.waistageForm.get(control).hasError('required') ? true : false;

        }
    }
    emptySpace(control) {
        return this.waistageForm.get(control).hasError('validSpace') ? true : false;
    }
    minLength(control) {
        return this.waistageForm.get(control).hasError('min') ? true : false;
    }
    maxLength(control) {
        return this.waistageForm.get(control).hasError('max') ? true : false;
    }
    pattern(control) {
        return this.waistageForm.get(control).hasError('pattern') ? true : false;
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
        this.countWaistage();
    }
    printPage() {
        window.print();
    }
    findAllItem() {
        this.startLoader();
        this.itemServices.findAllItem(this.itemSearch.value, this.paginator?.pageIndex, this.paginator?.pageSize).subscribe(
            res => {
                  //  this.waistageList.data = res['data']['docs'];
                if (res['message'] == 'Successful') {
                    
                    this.itemList = res['data'];
                  
                }
                else {
                    this.waistageList= [];
                } this.stopLoader();
            }, err => {
                console.error('err: ', err);
                this.stopLoader();
            });
    }
    findAllBuyer() {
        this.startLoader();
        this.buyerServices.findAllBuyer(this.hotelSearch.value, this.paginator?.pageIndex, this.paginator?.pageSize).subscribe(
            res => {
                if (res['message'] == 'Successful') {
                    this.buyerList = res['data'];
                }
                else {
                    this.buyerList = [];
                } this.stopLoader();
            }, err => {
                console.error('err: ', err);
                this.stopLoader();
            });
    }
}

export interface UserData {
    id: string;
    name: string;
    progress: string;
    color: string;
}
