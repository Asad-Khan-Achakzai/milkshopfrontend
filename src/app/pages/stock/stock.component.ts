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
import { PurchaseService } from '../../web-services/stock.service';
import { LocalService } from '../../web-services/local.service';
import { SessionService } from '../../web-services/session.service';
import { SharedService } from '../../web-services/shared.service';
import { BreakpointObserver } from '@angular/cdk/layout';
import { ItemService } from 'src/app/web-services/item.service';
import { SellerService } from 'src/app/web-services/seller.service';
import * as moment from 'moment'

declare var closeAddOverlay: Function;
declare var openAddOverlay: Function;
declare var openSearchOverlay: Function;
declare var closeSearchOverlay: Function;
declare var showOrHide: Function;
@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.scss']
})
export class StockComponent implements OnInit {

    displayedColumns = ['Purchasename', 'item', 'quantity','payment','user','timeStamp','action'];
    dataSource: MatTableDataSource<UserData>;

    @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator = Object.create(null);
    @ViewChild(MatSort, { static: true }) sort: MatSort = Object.create(null);
    searchOverLay: boolean;
    history: any;
    revision: any;
    itemList: any;
    sellerList: any;
    disableHistory = false;
 
        // constructor(private sessionService:SessionService,private localService:LocalService,private purchaseServices: PurchaseService, private constantService: ConstantService, private sharedService: SharedService, private route: Router, public conformationDialog: MatDialog, private alertService: AlertService, private cdRef: ChangeDetectorRef, private loader: NgxUiLoaderService) { };
    constructor(breakpointObserver: BreakpointObserver,private sessionService:SessionService,private localService:LocalService,private purchaseServices: PurchaseService,private sellerServices: SellerService,private itemServices:ItemService, private constantService: ConstantService, private sharedService: SharedService, private route: Router, public conformationDialog: MatDialog, private alertService: AlertService, private cdRef: ChangeDetectorRef) { 

        // Create 100 users
        const users: UserData[] = [];
        

        // Assign the data to the data source for the table to render
        this.purchaseList = new MatTableDataSource(users);
    };

    public labels = Labels;
    formButton: string = this.translate(this.labels.btnAdd);
    submitted = false;
    selectedIndex = -1;
    updatePurchaseId = null;
    purchaseList: any = new MatTableDataSource();
    purchaseSearch: FormGroup | undefined;
    
    itemSearch: FormGroup | undefined;
    hotelSearch: FormGroup | undefined;

    purchasePerPage: number = Constant.ITEM_PER_PAGE;
    currentPage: any;
    count: number | undefined;
    pageNo: number = 0;
    matcher = new MyErrorStateMatcher();
    // displayedColumns: string[] = ['description', 'details', 'mml', 'ratReqPerMml', 'action'];
    purchaseForm: FormGroup | undefined;
    constantList = [{code:'Purchase Name',value:'changed Value'}];
     countingUnitList = ['KG','Liter','Dozen'];
    addUpdatePurchase(purchase:any) {
        
        closeAddOverlay();
        this.startLoader();
        if (this.updatePurchaseId == null) {
            this.purchaseServices.addPurchase(this.purchaseForm?.value).subscribe(res => {
                if (res['message'] == 'purchase added successfully') {
                    this.alertService.showSuccess(this.translate(this.labels.btnAdd), this.translate(this.labels.entityNamePurchase));
                    
                    purchase = res['data'];
                    this.purchaseList.data.unshift(purchase);
                    this.purchaseList._data.next(this.purchaseList.data);
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
            
            purchase._id = this.updatePurchaseId;
            purchase.revision=  ++this.revision;
            this.purchaseServices.updatePurchase(purchase).subscribe(res => {
                if (res['message'] == 'Updated Successfully') {
                    this.purchaseList.data[this.selectedIndex] = res['data'];
                    this.submitted = true;
                    this.purchaseList._data.next(this.purchaseList.data);
                    this.alertService.showSuccess(this.translate(this.labels.btnUpdate), this.translate(this.labels.entityNamePurchase));
                } else {
                    console.error(res['documentation']);
                }
            }, err => {
                console.error('err: ', err);
                this.stopLoader();
            });
            this.updatePurchaseId = null;
            this.onClearAdd();
            this.formButton = this.translate(this.labels.btnAdd);;
        } this.stopLoader();
    }
  
    findAllPurchase() {
        this.startLoader();
        let pageSize = 10;
        if(this.paginator?.pageSize){
            pageSize = this.paginator?.pageSize;
        }
        let index = this.paginator?.pageIndex;
        this.purchaseServices.findAllPurchase(this.purchaseSearch.value, this.paginator?.pageIndex, this.paginator?.pageSize).subscribe(
            res => {
                  //  this.purchaseList.data = res['data']['docs'];
                if (res['message'] == 'Successful') {
                    this.purchaseList.data = res['data'];
                    
                  this.count = res['count']
                  setTimeout(()=>this.paginator.length = this.count) 

                  setTimeout(()=>  this.paginator.pageIndex = index) 
                }
                else {
                    this.purchaseList.data = [];
                } this.stopLoader();
            }, err => {
                console.error('err: ', err);
                this.stopLoader();
            });
    }
    onSearch() {
       // this.countPurchase();
        this.findAllPurchase();
    }
    openSearch(){
        closeAddOverlay();
        this.searchOverLay = true;
    }
    openSAdd(){
        closeSearchOverlay();
        this.searchOverLay = false;
    }
    deleteByIdPurchase(_id: number, index) {
        const dialogRef = this.conformationDialog.open(DeleteAlertDialog, {
            data: { title: this.translate(this.labels.entityNamePurchase) }
        });
        dialogRef.afterClosed().subscribe(result => {
            if (result == true) {
                this.startLoader();
                this.purchaseServices.deleteByIdPurchase(_id).subscribe(res => {
                    if (res['message'] == 'Deleted Successfully') {
                        this.purchaseList.data.splice(index, 1);
                        this.purchaseList._data.next(this.purchaseList.data);
                        this.alertService.showSuccess(this.translate(this.labels.btnDelete), this.translate(this.labels.entityNamePurchase));
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
    countPurchase() {
        this.purchaseServices.countPurchase(this.purchaseSearch.value).subscribe(res => {
            if (res['message'] == 'Success') {
                if (this.count != res['data'][0]) {
                    this.count = res['data'][0];
                    this.findAllPurchase();
                }
            } else {
                this.count = 0;
            }
        }, err => {
            console.error('err: ', err);
        });
    }
    onSubmit() {
        this.addUpdatePurchase(this.purchaseForm.value);
        this.submitted = false;
        this.onClearAdd();
    }onValChange(){
        
    }
    async ngOnInit() {
        this.calc();
        closeSearchOverlay();
      closeAddOverlay();
      this.purchaseForm = new FormGroup({userId:new FormControl(await localStorage.getItem('userId')),seller:new FormControl(null, [Validators.required]), item: new FormControl("", [Validators.required]),quantity: new FormControl(0, [Validators.required]),payment: new FormControl(false, [Validators.required]) });
      this.purchaseSearch= new FormGroup({seller:new FormControl(),history: new FormControl(false), item: new FormControl(),quantity: new FormControl(),payment: new FormControl() });
      this.itemSearch= new FormGroup({countingUnit:new FormControl(),history: new FormControl(false), Itemname: new FormControl(),price: new FormControl() ,isExpense: new FormControl('false')});
      this.hotelSearch= new FormGroup({type:new FormControl(),milkPrice:new FormControl(),history: new FormControl(false), name: new FormControl(),address: new FormControl(),yougurtPrice: new FormControl() ,phoneN: new FormControl() ,mobileN: new FormControl() ,otherN: new FormControl()  });

      // this.countItem();
      this.findAllItem();  
      this.findAllSeller();
      this.findAllPurchase();

   //   this.getConstantList(1234);
   
  }
  calc(){
    
       let purchase: [
            {
                id: "613c96a37a5ace32201b86d7",
                soldQuantity: 90
            },
            {
                id: "613c96b07a5ace32201b86da",
                soldQuantity: 60
            },
            {
                id: "613c96a37a5ace32201b86d7",
                name: "Milk",
                purchasedQuantity: 110
            },
            {
                id: "613c96b07a5ace32201b86da",
                name: "Egg",
                purchasedQuantity: 110
            },
            {
                id: "613dc9d4a2d0c83754853276",
                name: "gas",
                purchasedQuantity: 50
            },
            {
                id: "613c96b07a5ace32201b86da",
                wastageQuantity: 10
            },
            {
                id: "613c96a37a5ace32201b86d7",
                wastageQuantity: 20
            }
        ]

  
function groupBy(key) {
    return function group(array) {
      return array.reduce((acc, obj) => {
        const property = obj[key];
        acc[property] = acc[property] || [];
        acc[property].push(obj);
        return acc;
      }, {});
    };
  }
  

  const groupByArtist = groupBy("id");
  console.log('results',groupByArtist);

  }
    loadPurchaseToEdit(_id: number, index) {
        this.searchOverLay = false;
        console.log('ed',this.addUpdateTitle)
        let purchase = this.purchaseList.data.find(x => x['_id'] == _id);
        this.submitted = null;
        this.formButton = this.translate(this.labels.btnEdit);
        this.updatePurchaseId = purchase['_id'];
        this.revision = purchase['revision'];
        this.selectedIndex = index;
       // this.purchaseForm.controls['userId'].setValue(purchase['userId']);
        this.purchaseForm.controls['quantity'].setValue(purchase['quantity']);
        this.purchaseForm.controls['seller'].setValue(purchase['seller']['_id']);
        this.purchaseForm.controls['item'].setValue(purchase['item']['_id']);
        this.purchaseForm.controls['payment'].setValue(purchase['payment']);

    }
    async onClearAdd() {
        this.purchaseForm.reset();
        this.purchaseForm.controls['userId'].setValue( await localStorage.getItem('userId'));
        this.purchaseForm.markAsUntouched();
        this.updatePurchaseId = null;
    }
    onPageChange() {
        this.countPurchase();
        this.findAllPurchase();
    }
    onClearSearch() {
        this.purchaseSearch.reset();
        this.history = undefined;
        this.selectedIndex = -1;
        this.disableHistory = false;
        this.onSearch();

    }
    ngAfterViewInit() {
        this.purchaseList.paginator = this.paginator;
        this.purchaseList.sort = this.sort;
        //  if(this.paginator?.pageSize){
        //     this.paginator.pageSize = Constant.ITEM_PER_PAGE;
        // }        this.matcher = new MyErrorStateMatcher();
        // this.cdRef.detectChanges();
    }
    applyFilter(filterValue: string) {
        filterValue = filterValue.trim(); // Remove whitespace
        filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
        this.purchaseList.filter = filterValue;
    }
    resetCurrentPurchase() {
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
        return this.updatePurchaseId == null ? this.translate(this.labels.btnAdd) : this.translate(this.labels.btnUpdate);
    }
    required(control) {
        if(this.purchaseForm.get(control).touched){
            return this.purchaseForm.get(control).hasError('required') ? true : false;

        }
    }
    emptySpace(control) {
        return this.purchaseForm.get(control).hasError('validSpace') ? true : false;
    }
    minLength(control) {
        return this.purchaseForm.get(control).hasError('min') ? true : false;
    }
    maxLength(control) {
        return this.purchaseForm.get(control).hasError('max') ? true : false;
    }
    pattern(control) {
        return this.purchaseForm.get(control).hasError('pattern') ? true : false;
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
    onDateChange(value) {
        debugger
        if(value !=null){

            let date = moment(value).format('L'); // June 1, 2019
            this.purchaseSearch.controls['date'].setValue(date);
            this.purchaseSearch.controls['history'].setValue(null);
            this.purchaseSearch.markAllAsTouched();
            this.disableHistory = true;
        }else{
            this.disableHistory = false;
        }
    }
    refresh() {
        this.countPurchase();
    }
    printPage() {
        window.print();
    }
    findAllItem() {
        this.startLoader();
        this.itemServices.findAllItem(this.itemSearch.value, this.paginator?.pageIndex, this.paginator?.pageSize).subscribe(
            res => {
                  //  this.purchaseList.data = res['data']['docs'];
                if (res['message'] == 'Successful') {
                    
                    this.itemList = res['data'];
                  
                }
                else {
                    this.purchaseList= [];
                } this.stopLoader();
            }, err => {
                console.error('err: ', err);
                this.stopLoader();
            });
    }
    findAllSeller() {
        this.startLoader();
        this.sellerServices.findAllSeller(this.hotelSearch.value, this.paginator?.pageIndex, this.paginator?.pageSize).subscribe(
            res => {
                if (res['message'] == 'Successful') {
                    this.sellerList = res['data'];
                }
                else {
                    this.sellerList = [];
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
