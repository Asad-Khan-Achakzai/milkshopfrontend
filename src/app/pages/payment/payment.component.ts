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
import { PaymentService } from '../../web-services/payment.service';
import { LocalService } from '../../web-services/local.service';
import { SessionService } from '../../web-services/session.service';
import { SharedService } from '../../web-services/shared.service';
import { BreakpointObserver } from '@angular/cdk/layout';
import { BuyerService } from 'src/app/web-services/buyer.service';

/** Constants used to fill up our data base. */
declare var closeAddOverlay: Function;
declare var openAddOverlay: Function;
declare var openSearchOverlay: Function;
declare var closeSearchOverlay: Function;
declare var showOrHide: Function;
@Component({ selector: 'app-payment', templateUrl: './payment.component.html', styleUrls: ['./payment.component.scss'] })
export class PaymentComponent implements OnInit,AfterViewInit  {
    displayedColumns = ['buyer', 'amount','unpaid','user','timeStamp','action'];
    dataSource: MatTableDataSource<UserData>;

    @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator = Object.create(null);
    @ViewChild(MatSort, { static: true }) sort: MatSort = Object.create(null);
    searchOverLay: boolean;
    history: any;
    revision: any;
    buyerList: any;
 
        // constructor(private sessionService:SessionService,private localService:LocalService,private paymentServices: PaymentService, private constantService: ConstantService, private sharedService: SharedService, private route: Router, public conformationDialog: MatDialog, private alertService: AlertService, private cdRef: ChangeDetectorRef, private loader: NgxUiLoaderService) { };
    constructor(breakpointObserver: BreakpointObserver,private sessionService:SessionService,private localService:LocalService,private paymentServices: PaymentService, private constantService: ConstantService,private buyerServices: BuyerService, private sharedService: SharedService, private route: Router, public conformationDialog: MatDialog, private alertService: AlertService, private cdRef: ChangeDetectorRef) { 
        
        // breakpointObserver.observe(['(max-width: 600px)']).subscribe(result => {
        //     this.displayedColumns = result.matches ?
        //         ['id', 'name', 'progress', 'color'] :
        //         ['id', 'name', 'progress', 'color'];
        // });

        // Create 100 users
        const users: UserData[] = [];
        // Assign the data to the data source for the table to render
        this.paymentList = new MatTableDataSource(users);
    };

    public labels = Labels;
    formButton: string = this.translate(this.labels.btnAdd);
    submitted = false;
    selectedIndex = -1;
    updatePaymentId = null;
    paymentList: any = new MatTableDataSource();
    paymentSearch: FormGroup | undefined;

    hotelSearch: FormGroup | undefined;
    paymentPerPage: number = Constant.ITEM_PER_PAGE;
    currentPage: any;
    count: number | undefined;
    pageNo: number = 0;
    matcher = new MyErrorStateMatcher();
    // displayedColumns: string[] = ['description', 'details', 'mml', 'ratReqPerMml', 'action'];
    paymentForm: FormGroup | undefined;
    constantList = [{code:'Payment Name',value:'changed Value'}];
     countingUnitList = ['KG','Liter','Dozen'];
    addUpdatePayment(payment:any) {
        
        closeAddOverlay();
        this.startLoader();
        if (this.updatePaymentId == null) {
            this.paymentForm.controls['type'].setValue('payment');

            this.paymentServices.addPayment(this.paymentForm?.value).subscribe(res => {
                if (res['message'] == 'payment added successfully') {
                    this.alertService.showSuccess(this.translate(this.labels.btnAdd), this.translate(this.labels.entityNamePayment));
                    
                    payment = res['data'];
                    this.paymentList.data.unshift(payment);
                    this.paymentList._data.next(this.paymentList.data);
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
            
            payment._id = this.updatePaymentId;
            payment.revision=  ++this.revision;

            this.paymentServices.updatePayment(payment).subscribe(res => {
                if (res['message'] == 'Updated Successfully') {
                    this.paymentList.data[this.selectedIndex] = res['data'];
                    this.submitted = true;
                    this.paymentList._data.next(this.paymentList.data);
                    this.alertService.showSuccess(this.translate(this.labels.btnUpdate), this.translate(this.labels.entityNamePayment));
                } else {
                    console.error(res['documentation']);
                }
            }, err => {
                console.error('err: ', err);
                this.stopLoader();
            });
            this.updatePaymentId = null;
            this.onClearAdd();
            this.formButton = this.translate(this.labels.btnAdd);;
        } this.stopLoader();
    }
    findAllPayment() {
        this.startLoader();
        let pageSize = 10;
        if(this.paginator?.pageSize){
            pageSize = this.paginator?.pageSize;
        }
        let index = this.paginator?.pageIndex;
        this.paymentServices.findAllPayment(this.paymentSearch.value, this.paginator?.pageIndex, this.paginator?.pageSize).subscribe(
            res => {
                  //  this.paymentList.data = res['data']['docs'];
                if (res['message'] == 'Successful') {
                    this.paymentList.data = res['data'];
                    
                  this.count = res['count']
                  setTimeout(()=>this.paginator.length = this.count) 

                  setTimeout(()=>  this.paginator.pageIndex = index) 
                }
                else {
                    this.paymentList.data = [];
                } this.stopLoader();
            }, err => {
                console.error('err: ', err);
                this.stopLoader();
            });
    }
    onSearch() {
       // this.countPayment();
        this.findAllPayment();
    }
    openSearch(){
        closeAddOverlay();
        this.searchOverLay = true;
    }
    openSAdd(){
        closeSearchOverlay();
        this.searchOverLay = false;
    }
    deleteByIdPayment(_id: number, index) {
        const dialogRef = this.conformationDialog.open(DeleteAlertDialog, {
            data: { title: this.translate(this.labels.entityNamePayment) }
        });
        dialogRef.afterClosed().subscribe(result => {
            if (result == true) {
                this.startLoader();
                this.paymentServices.deleteByIdPayment(_id).subscribe(res => {
                    if (res['message'] == 'Deleted Successfully') {
                        this.paymentList.data.splice(index, 1);
                        this.paymentList._data.next(this.paymentList.data);
                        this.alertService.showSuccess(this.translate(this.labels.btnDelete), this.translate(this.labels.entityNamePayment));
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
    countPayment() {
        this.paymentServices.countPayment(this.paymentSearch.value).subscribe(res => {
            if (res['message'] == 'Success') {
                if (this.count != res['data'][0]) {
                    this.count = res['data'][0];
                    this.findAllPayment();
                }
            } else {
                this.count = 0;
            }
        }, err => {
            console.error('err: ', err);
        });
    }
    onSubmit() {
        this.addUpdatePayment(this.paymentForm.value);
        this.submitted = false;
        this.onClearAdd();
    }onValChange(){
        
    }
    async ngOnInit() {
          closeSearchOverlay();
        openAddOverlay();
        this.paymentForm = new FormGroup({userId:new FormControl(await localStorage.getItem('userId')),buyer: new FormControl(null, [Validators.required]),amount: new FormControl(0, [Validators.required]),unpaid: new FormControl(0), type: new FormControl() });
        this.paymentSearch= new FormGroup({buyer:new FormControl(),history: new FormControl(false), amount: new FormControl()});
        this.hotelSearch = new FormGroup({ type: new FormControl(), milkPrice: new FormControl(), history: new FormControl(false), name: new FormControl(), address: new FormControl(), yougurtPrice: new FormControl(), phoneN: new FormControl(), mobileN: new FormControl(), otherN: new FormControl() });

        // this.countPayment();
        this.findAllPayment();  
        this.findAllBuyer();

     //   this.getConstantList(1234);
     
    }
    loadPaymentToEdit(_id: number, index) {
        this.searchOverLay = false;
        let payment = this.paymentList.data.find(x => x['_id'] == _id);
        this.submitted = null;
        this.formButton = this.translate(this.labels.btnEdit);
        this.updatePaymentId = payment['_id'];
        this.revision = payment['revision'];
        this.selectedIndex = index;
       // this.paymentForm.controls['userId'].setValue(payment['userId']);
        this.paymentForm.controls['buyer'].setValue(payment['buyer']['_id']);
        this.paymentForm.controls['amount'].setValue(payment['amount']);
    }
    async onClearAdd() {
        this.paymentForm.reset();
        this.paymentForm.controls['userId'].setValue( await localStorage.getItem('userId'));
        this.paymentForm.markAsUntouched();
        this.updatePaymentId = null;
    }
    onPageChange() {
        this.countPayment();
        this.findAllPayment();
    }
    onClearSearch() {
        this.paymentSearch.reset();
        this.history = undefined;
        this.selectedIndex = -1;
        this.onSearch();
    }
    ngAfterViewInit() {
        this.paymentList.paginator = this.paginator;
        this.paymentList.sort = this.sort;
        openAddOverlay();
    }
    applyFilter(filterValue: string) {
        filterValue = filterValue.trim(); // Remove whitespace
        filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
        this.paymentList.filter = filterValue;
    }
    resetCurrentPayment() {
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
        return this.updatePaymentId == null ? this.translate(this.labels.btnAdd) : this.translate(this.labels.btnUpdate);
    }
    required(control) {
        if(this.paymentForm.get(control).touched){
            return this.paymentForm.get(control).hasError('required') ? true : false;

        }
    }
    emptySpace(control) {
        return this.paymentForm.get(control).hasError('validSpace') ? true : false;
    }
    minLength(control) {
        return this.paymentForm.get(control).hasError('min') ? true : false;
    }
    maxLength(control) {
        return this.paymentForm.get(control).hasError('max') ? true : false;
    }
    pattern(control) {
        return this.paymentForm.get(control).hasError('pattern') ? true : false;
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
        this.countPayment();
    }
    printPage() {
        window.print();
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
