import { DatePipe } from '@angular/common';
import { AfterViewInit, ChangeDetectorRef, Component, DebugElement, OnInit, ViewChild } from '@angular/core';
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
import { SaleService } from '../../web-services/sale.service';
import { LocalService } from '../../web-services/local.service';
import { SessionService } from '../../web-services/session.service';
import { SharedService } from '../../web-services/shared.service';
import { BreakpointObserver } from '@angular/cdk/layout';
import { ItemService } from 'src/app/web-services/item.service';
import { BuyerService } from 'src/app/web-services/buyer.service';
import { PaymentService } from 'src/app/web-services/payment.service';

declare var closeAddOverlay: Function;
declare var openAddOverlay: Function;
declare var openSearchOverlay: Function;
declare var closeSearchOverlay: Function;
declare var showOrHide: Function;
@Component({
    selector: 'app-sale',
    templateUrl: './sale.component.html',
    styleUrls: ['./sale.component.scss']
})
export class SaleComponent implements OnInit {
    displayedColumns = ['Salename', 'item', 'quantity', 'amount', 'payment', 'user', 'timeStamp', 'action'];
    // dataSource: MatTableDataSource<UserData>;

    @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator = Object.create(null);
    @ViewChild(MatSort, { static: true }) sort: MatSort = Object.create(null);
    searchOverLay: boolean;
    history: any;
    revision: any;
    itemList: any;
    buyerList: any;
    isLocal = false;
    updatePaymentId: any;
    paymentRevision: any;

    // constructor(private sessionService:SessionService,private localService:LocalService,private saleServices: SaleService, private constantService: ConstantService, private sharedService: SharedService, private route: Router, public conformationDialog: MatDialog, private alertService: AlertService, private cdRef: ChangeDetectorRef, private loader: NgxUiLoaderService) { };
    constructor(breakpointObserver: BreakpointObserver, private sessionService: SessionService, private localService: LocalService, private saleServices: SaleService, private buyerServices: BuyerService, private itemServices: ItemService, private constantService: ConstantService, private sharedService: SharedService, private route: Router, private paymentServices: PaymentService, public conformationDialog: MatDialog, private alertService: AlertService, private cdRef: ChangeDetectorRef) {

        // Create 100 users
        
        // this.saleList.filterPredicate = (data: any, filter) => {
        //     const dataStr =JSON.stringify(data).toLowerCase();
        //     return dataStr.indexOf(filter) != -1; 
        //   }
        //   this.saleList.filterPredicate = (data: Element, filter: string) => {
        //     return data.item.Itemname.toLocaleLowerCase().includes(filter) ||
        //     data.buyer.name.toLocaleLowerCase().includes(filter);
        //   }

        // breakpointObserver.observe(['(max-width: 600px)']).subscribe(result => {
        //     this.displayedColumns = result.matches ?
        //         ['Salename', 'item', 'quantity', 'amount', 'payment', 'user', 'timeStamp'] :
        //         ['Salename', 'item', 'quantity', 'amount', 'payment', 'user', 'timeStamp'];
        // });
    };

    public labels = Labels;
    formButton: string = this.translate(this.labels.btnAdd);
    submitted = false;
    selectedIndex = -1;
    updateSaleId = null;
    saleList: any = new MatTableDataSource();
    saleSearch: FormGroup | undefined;

    itemSearch: FormGroup | undefined;
    hotelSearch: FormGroup | undefined;

    salePerPage: number = Constant.ITEM_PER_PAGE;
    currentPage: any;
    count: number | undefined;
    pageNo: number = 0;
    matcher = new MyErrorStateMatcher();
    // displayedColumns: string[] = ['description', 'details', 'mml', 'ratReqPerMml', 'action'];
    saleForm: FormGroup | undefined;
    paymentForm: FormGroup | undefined;
    paymentSearch: FormGroup | undefined;

    constantList = [{ code: 'Sale Name', value: 'changed Value' }];
    countingUnitList = ['KG', 'Liter', 'Dozen'];
    addUpdateSale(sale: any) {
        closeAddOverlay();
        this.startLoader();
        if (this.updateSaleId == null) {
            this.saleServices.addSale(this.saleForm?.value).subscribe(res => {
                if (res['message'] == 'sale added successfully') {
                    this.alertService.showSuccess(this.translate(this.labels.btnAdd), this.translate(this.labels.entityNameSale));
                    sale = res['data'];
                    this.saleList.data.unshift(sale);
                    this.saleList._data.next(this.saleList.data);
                    this.count++;
                    this.submitted = true;
                    
                    if (this.isLocal != true) {
                        this.addKhataPyment(sale['_id'], sale['buyer']['_id']);

                    } else {
                        this.addKhataPyment(sale['_id']);
                    }
                } else {
                    console.error(res['documentation']);
                }
            }, err => {
                console.error('err: ', err);
                this.stopLoader();
            });
        }
        else {
            sale._id = this.updateSaleId;
            sale.revision = ++this.revision;
            this.saleServices.updateSale(sale).subscribe(res => {
                if (res['message'] == 'Updated Successfully') {
                    this.saleList.data[this.selectedIndex] = res['data'];
                    
                    this.searchKhataPayment(res['data']);
                    this.submitted = true;
                    this.saleList._data.next(this.saleList.data);
                    this.alertService.showSuccess(this.translate(this.labels.btnUpdate), this.translate(this.labels.entityNameSale));
                } else {
                    console.error(res['documentation']);
                }
            }, err => {
                console.error('err: ', err);
                this.stopLoader();
            });
            this.updateSaleId = null;
            this.onClearAdd();
            this.formButton = this.translate(this.labels.btnAdd);;
            this.submitted = false;
            this.onClearAdd();
        } this.stopLoader();
    }
    searchKhataPayment(sale){
        
        this.paymentSearch.controls['sale'].setValue(sale._id);
        this.startLoader();
        this.paymentServices.findAllPayment(this.paymentSearch.value, this.paginator?.pageIndex, this.paginator?.pageSize).subscribe(
            res => {
                  //  this.paymentList.data = res['data']['docs'];
                if (res['message'] == 'Successful') {
                    let payment = res['data'];
                    this.UpdateKhataPyment(payment,sale);
                    this.paymentSearch.reset();
                }
                else {

                } this.stopLoader();
            }, err => {
                console.error('err: ', err);
                this.stopLoader();
            });
    }
    UpdateKhataPyment(payments,sale) {
     
    let  payment = payments[0];
        if (sale.buyer && sale.buyer!=null) {
            payment.buyer = sale.buyer;
        }else{
            if(payment.buyer && payment.buyer!= null){
                payment.buyer = null;
            }
        }
        if (sale.payment == 'true') {
            payment.amount = sale.amount;
            payment.unpaid = 0;
        } else {
            payment.unpaid = sale.amount;
            payment.amount = 0;
        }
        let revision = payment.revision;
        payment.revision=  ++revision;

        this.paymentServices.updatePayment(payment).subscribe(res => {
            if (res['message'] == 'Updated Successfully') {
                //this.paymentList.data[this.selectedIndex] = res['data'];
               // this.submitted = true;
               // this.paymentList._data.next(this.paymentList.data);
                this.alertService.showSuccess(this.translate(this.labels.btnUpdate), this.translate(this.labels.entityNamePayment));
            } else {
                console.error(res['documentation']);
            }
        }, err => {
            console.error('err: ', err);
            this.stopLoader();
        });
    }
    addKhataPyment(saleId, buyerId?) {
        this.paymentForm.controls['type'].setValue('sale');
        this.paymentForm.controls['sale'].setValue(saleId);

        if (this.isLocal != true) {
            this.paymentForm.controls['buyer'].setValue(buyerId)
        }
        if (this.saleForm.controls['payment'].value == 'true') {
            this.paymentForm.controls['amount'].setValue(this.saleForm.controls['amount'].value)
        } else {
            this.paymentForm.controls['unpaid'].setValue(this.saleForm.controls['amount'].value)
        }
        this.paymentServices.addPayment(this.paymentForm?.value).subscribe(async res => {
            if (res['message'] == 'payment added successfully') {
                this.alertService.showSuccess(this.translate(this.labels.btnAdd), this.translate(this.labels.entityNamePayment));
                this.paymentForm.reset();
                this.paymentForm.controls['userId'].setValue(await localStorage.getItem('userId'));
            } else {
                console.error(res['documentation']);
            }
        }, err => {
            console.error('err: ', err);
            this.stopLoader();
        });
    }
    findAllSale() {
        this.startLoader();
        let pageSize = 10;
        if(this.paginator?.pageSize){
            pageSize = this.paginator?.pageSize;
        }
        let index = this.paginator?.pageIndex;
        this.saleServices.findAllSale(this.saleSearch.value, this.paginator?.pageIndex, this.paginator?.pageSize).subscribe(
            res => {
                //  this.saleList.data = res['data']['docs'];
                if (res['message'] == 'Successful') {
                  
                    this.saleList = new MatTableDataSource(res['data']);

                    this.count = res['count']
                    setTimeout(()=>this.paginator.length = this.count) 
  
                    setTimeout(()=>  this.paginator.pageIndex = index) 
                    // this.saleList.data = res['data'];
                }
                else {
                    this.saleList.data = [];
                } this.stopLoader();
            }, err => {
                console.error('err: ', err);
                this.stopLoader();
            });
    }
    onSearch() {
        // this.countSale();
        this.findAllSale();
    }
    onValChangeIsLo() {
        if (!this.isLocal) {
            this.saleForm.controls['buyer'].setValidators([Validators.required]);
            this.saleForm.controls['buyer'].updateValueAndValidity();
        } else {

            this.saleForm.controls['buyer'].clearValidators();
            this.saleForm.controls['buyer'].updateValueAndValidity();
            this.saleForm.controls['buyer'].setValue(null);
        }
    }
    openSearch() {
        closeAddOverlay();
        this.searchOverLay = true;
    }
    openSAdd() {
        closeSearchOverlay();
        this.searchOverLay = false;
    }
    deleteByIdSale(_id: number, index) {
        const dialogRef = this.conformationDialog.open(DeleteAlertDialog, {
            data: { title: this.translate(this.labels.entityNameSale) }
        });
        dialogRef.afterClosed().subscribe(result => {
            if (result == true) {
                this.startLoader();
                this.saleServices.deleteByIdSale(_id).subscribe(res => {
                    if (res['message'] == 'Deleted Successfully') {
                        this.saleList.data.splice(index, 1);
                        this.saleList._data.next(this.saleList.data);
                        this.searchKhataPaymentForDelete(_id);
                        this.alertService.showSuccess(this.translate(this.labels.btnDelete), this.translate(this.labels.entityNameSale));
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
    deleteKhataPayment(paymentId){
        
        this.startLoader();
        this.paymentServices.deleteByIdPayment(paymentId).subscribe(res => {
            if (res['message'] == 'Deleted Successfully') {
                this.alertService.showSuccess(this.translate(this.labels.btnDelete), this.translate(this.labels.entityNamePayment));
                
            } else {
                console.error('error: ', res['documentation']);
            }
        }, err => {
            console.error('err: ', err);
            this.stopLoader();
        });
    }
    searchKhataPaymentForDelete(saleId){
        
        this.paymentSearch.controls['sale'].setValue(saleId);
        this.startLoader();
        this.paymentServices.findAllPayment(this.paymentSearch.value, this.paginator?.pageIndex, this.paginator?.pageSize).subscribe(
            res => {
                  //  this.paymentList.data = res['data']['docs'];
                if (res['message'] == 'Successful') {
                    let payment = res['data'];
                    this.deleteKhataPayment(payment[0]._id);
                    this.paymentSearch.reset();
                }
                else {

                } this.stopLoader();
            }, err => {
                console.error('err: ', err);
                this.stopLoader();
            });
    }
    countSale() {
        this.saleServices.countSale(this.saleSearch.value).subscribe(res => {
            if (res['message'] == 'Success') {
                if (this.count != res['data'][0]) {
                    this.count = res['data'][0];
                    this.findAllSale();
                }
            } else {
                this.count = 0;
            }
        }, err => {
            console.error('err: ', err);
        });
    }
    onSubmit() {

        this.saleForm.controls['amount'].setValue(this.saleForm.controls['unitPrice'].value * this.saleForm.controls['quantity'].value)
        this.addUpdateSale(this.saleForm.value);

    } onValChange() {

    }
    onValChangeItem() {

        if ((this.saleForm.controls['buyer'].value && this.saleForm.controls['buyer'].value != null) && (this.saleForm.controls['item'].value && this.saleForm.controls['item'].value != null)) {
            let item = this.itemList.find(x => x['_id'] == this.saleForm.controls['item'].value);;
            let buyer = this.buyerList.find(x => x['_id'] == this.saleForm.controls['buyer'].value);;
            if (item.Itemname.toUpperCase() == 'milk'.toUpperCase()) {
                this.saleForm.controls['unitPrice'].setValue(buyer.milkPrice);
            } else if (item.Itemname.toUpperCase() == 'yougurt'.toUpperCase()) {
                this.saleForm.controls['unitPrice'].setValue(buyer.yougurtPrice);
            } else {
                this.saleForm.controls['unitPrice'].setValue(null);

            }

        }
    }
    async ngOnInit() {

        closeSearchOverlay();
        openAddOverlay();
        this.saleForm = new FormGroup({ amount: new FormControl(null), unitPrice: new FormControl(null, [Validators.required]), userId: new FormControl(await localStorage.getItem('userId')), buyer: new FormControl(null), item: new FormControl("", [Validators.required]), quantity: new FormControl(0, [Validators.required]), payment: new FormControl(false, [Validators.required]) });
        this.saleSearch = new FormGroup({ buyer: new FormControl(), history: new FormControl(false), item: new FormControl(), quantity: new FormControl(), payment: new FormControl() });
        this.itemSearch = new FormGroup({ countingUnit: new FormControl(), history: new FormControl(false), Itemname: new FormControl(), price: new FormControl(), isExpense: new FormControl('false') });
        this.hotelSearch = new FormGroup({ type: new FormControl(), milkPrice: new FormControl(), history: new FormControl(false), name: new FormControl(), address: new FormControl(), yougurtPrice: new FormControl(), phoneN: new FormControl(), mobileN: new FormControl(), otherN: new FormControl() });
        this.paymentForm = new FormGroup({ userId: new FormControl(await localStorage.getItem('userId')), buyer: new FormControl(null, [Validators.required]), amount: new FormControl(0, [Validators.required]), unpaid: new FormControl(0, [Validators.required]), type: new FormControl('', [Validators.required]), sale: new FormControl('', [Validators.required]) });
        this.paymentSearch = new FormGroup({ buyer: new FormControl(), history: new FormControl(false), amount: new FormControl(), unpaid: new FormControl(null),type: new FormControl(), sale: new FormControl() });
        this.onValChangeIsLo();
        this.findAllItem();
        this.findAllBuyer();
        this.findAllSale();

        //   this.getConstantList(1234);

    }
    payment(_id: number, index, payment) {
        this.searchOverLay = false;

        let sale = this.saleList.data.find(x => x['_id'] == _id);
        this.submitted = null;
        this.formButton = this.translate(this.labels.btnEdit);
        this.updateSaleId = sale['_id'];
        this.revision = sale['revision'];
        this.selectedIndex = index;
        // this.saleForm.controls['userId'].setValue(sale['userId']);
        this.saleForm.controls['quantity'].setValue(sale['quantity']);
        if (sale['buyer'] && sale['buyer'] != null) {
            this.saleForm.controls['buyer'].setValue(sale['buyer']['_id']);
            this.isLocal = false;
            this.onValChangeIsLo();
        } else {
            this.isLocal = true;
            this.onValChangeIsLo();
        }
        this.saleForm.controls['item'].setValue(sale['item']['_id']);
        this.saleForm.controls['payment'].setValue(payment);
        this.saleForm.controls['unitPrice'].setValue(sale['unitPrice']);
        this.onSubmit();
    }
    loadSaleToEdit(_id: number, index) {
        this.searchOverLay = false;

        let sale = this.saleList.data.find(x => x['_id'] == _id);
        this.submitted = null;
        this.formButton = this.translate(this.labels.btnEdit);
        this.updateSaleId = sale['_id'];
        this.revision = sale['revision'];
        this.selectedIndex = index;
        // this.saleForm.controls['userId'].setValue(sale['userId']);
        this.saleForm.controls['quantity'].setValue(sale['quantity']);
        if (sale['buyer'] && sale['buyer'] != null) {
            this.saleForm.controls['buyer'].setValue(sale['buyer']['_id']);
            this.isLocal = false;
            this.onValChangeIsLo();
        } else {
            this.isLocal = true;
            this.onValChangeIsLo();
        }
        this.saleForm.controls['item'].setValue(sale['item']['_id']);
        this.saleForm.controls['payment'].setValue(sale['payment']);
        this.saleForm.controls['unitPrice'].setValue(sale['unitPrice']);
    }
    async onClearAdd() {
        this.saleForm.reset();
        this.saleForm.controls['userId'].setValue(await localStorage.getItem('userId'));
        this.saleForm.markAsUntouched();
        this.updateSaleId = null;
    }
    onPageChange() {
        this.countSale();
        this.findAllSale();
    }
    onClearSearch() {
        this.saleSearch.reset();
        this.history = undefined;
        this.selectedIndex = -1;
        this.onSearch();
    }
    ngAfterViewInit() {
       
        this.saleList.paginator = this.paginator;
        this.saleList.sort = this.sort;
        openAddOverlay();
    }
    applyFilter(filterValue: string) {
        filterValue = filterValue.trim(); // Remove whitespace
        filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
        this.saleList.filter = filterValue;
        console.log('filetered ',this.saleList.filteredData)
    }
    resetCurrentSale() {
        if (this.paginator?.pageIndex) {
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
        if (this.searchOverLay && this.searchOverLay != null) {
            return this.labels.btnSearch;
        }
        return this.updateSaleId == null ? this.translate(this.labels.btnAdd) : this.translate(this.labels.btnUpdate);
    }
    required(control) {
        if (this.saleForm.get(control).touched) {
            return this.saleForm.get(control).hasError('required') ? true : false;

        }
    }
    emptySpace(control) {
        return this.saleForm.get(control).hasError('validSpace') ? true : false;
    }
    minLength(control) {
        return this.saleForm.get(control).hasError('min') ? true : false;
    }
    maxLength(control) {
        return this.saleForm.get(control).hasError('max') ? true : false;
    }
    pattern(control) {
        return this.saleForm.get(control).hasError('pattern') ? true : false;
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
        this.countSale();
    }
    printPage() {
        window.print();
    }
    findAllItem() {
        this.startLoader();
        this.itemServices.findAllItem(this.itemSearch.value, this.paginator?.pageIndex, this.paginator?.pageSize).subscribe(
            res => {
                //  this.saleList.data = res['data']['docs'];
                if (res['message'] == 'Successful') {
                    this.itemList = res['data'];
                }
                else {
                    this.saleList = [];
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
// export interface buyerInterface {
//     type: string;
//     history: string;
//     milkPriceype: number;
//     name: string;
//     address: string;
//     yougurtPrice: number;
//     phoneN: number;
//     mobileN: number;
//     otherN: number;

//   }
//   export interface itemInterface {
//     countingUnit: number;
//     price: number;
//     history: string;

//     Itemname: string;
//     isExpense: string;
// }
//   export interface Element {
//     amount: number;
//     userId: string;
//     unitPrice: number;
//     buyer: buyerInterface;
//     item: itemInterface;
//   }