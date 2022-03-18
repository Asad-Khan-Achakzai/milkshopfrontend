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
import { ExpensesService } from '../../web-services/expenses.service';
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
    selector: 'app-expenses',
    templateUrl: './expenses.component.html',
    styleUrls: ['./expenses.component.scss']
})
export class ExpensesComponent implements OnInit {
    displayedColumns = [ 'item', 'quantity', 'amount', 'details', 'user', 'timeStamp', 'action'];
    dataSource: MatTableDataSource<UserData>;

    @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator = Object.create(null);
    @ViewChild(MatSort, { static: true }) sort: MatSort = Object.create(null);
    searchOverLay: boolean;
    history: any;
    revision: any;
    itemList: any;
    buyerList: any;
    isLocal = false;

    // constructor(private sessionService:SessionService,private localService:LocalService,private expensesServices: ExpensesService, private constantService: ConstantService, private sharedService: SharedService, private route: Router, public conformationDialog: MatDialog, private alertService: AlertService, private cdRef: ChangeDetectorRef, private loader: NgxUiLoaderService) { };
    constructor(breakpointObserver: BreakpointObserver, private sessionService: SessionService, private localService: LocalService, private expensesServices: ExpensesService, private buyerServices: BuyerService, private itemServices: ItemService, private constantService: ConstantService, private sharedService: SharedService, private route: Router, public conformationDialog: MatDialog, private alertService: AlertService, private cdRef: ChangeDetectorRef) {

        // Create 100 users
        const users: UserData[] = [];


        // Assign the data to the data source for the table to render
        this.expensesList = new MatTableDataSource(users);
    };

    public labels = Labels;
    formButton: string = this.translate(this.labels.btnAdd);
    submitted = false;
    selectedIndex = -1;
    updateExpensesId = null;
    expensesList: any = new MatTableDataSource();
    expensesSearch: FormGroup | undefined;

    itemSearch: FormGroup | undefined;
    hotelSearch: FormGroup | undefined;

    expensesPerPage: number = Constant.ITEM_PER_PAGE;
    currentPage: any;
    count: number | undefined;
    pageNo: number = 0;
    matcher = new MyErrorStateMatcher();
    // displayedColumns: string[] = ['description', 'details', 'mml', 'ratReqPerMml', 'action'];
    expensesForm: FormGroup | undefined;
    constantList = [{ code: 'Expenses Name', value: 'changed Value' }];
    countingUnitList = ['KG', 'Liter', 'Dozen'];
    addUpdateExpenses(expenses: any) {

        closeAddOverlay();
        this.startLoader();
        if (this.updateExpensesId == null) {
            this.expensesServices.addExpenses(this.expensesForm?.value).subscribe(res => {
                if (res['message'] == 'expense added successfully') {
                    this.alertService.showSuccess(this.translate(this.labels.btnAdd), this.translate(this.labels.entityNameExpenses));

                    expenses = res['data'];
                    this.expensesList.data.unshift(expenses);
                    this.expensesList._data.next(this.expensesList.data);
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

            expenses._id = this.updateExpensesId;
            expenses.revision = ++this.revision;
            this.expensesServices.updateExpenses(expenses).subscribe(res => {
                if (res['message'] == 'Updated Successfully') {
                    this.expensesList.data[this.selectedIndex] = res['data'];
                    this.submitted = true;
                    this.expensesList._data.next(this.expensesList.data);
                    this.alertService.showSuccess(this.translate(this.labels.btnUpdate), this.translate(this.labels.entityNameExpenses));
                } else {
                    console.error(res['documentation']);
                }
            }, err => {
                console.error('err: ', err);
                this.stopLoader();
            });
            this.updateExpensesId = null;
            this.onClearAdd();
            this.formButton = this.translate(this.labels.btnAdd);;
        } this.stopLoader();
    }
    findAllExpenses() {
        this.startLoader();
        let pageSize = 10;
        if(this.paginator?.pageSize){
            pageSize = this.paginator?.pageSize;
        }
        let index = this.paginator?.pageIndex;
        this.expensesServices.findAllExpenses(this.expensesSearch.value, this.paginator?.pageIndex, this.paginator?.pageSize).subscribe(
            res => {
                //  this.expensesList.data = res['data']['docs'];
                if (res['message'] == 'Successful') {
                    this.expensesList.data = res['data'];
                    this.count = res['count']
                    setTimeout(()=>this.paginator.length = this.count) 

                    setTimeout(()=>  this.paginator.pageIndex = index) 
                }
                else {
                    this.expensesList.data = [];
                } this.stopLoader();
            }, err => {
                console.error('err: ', err);
                this.stopLoader();
            });
    }
    onSearch() {
        // this.countExpenses();
        this.findAllExpenses();
    }
    openSearch() {
        closeAddOverlay();
        this.searchOverLay = true;
    }
    openSAdd() {
        closeSearchOverlay();
        this.searchOverLay = false;
    }
    deleteByIdExpenses(_id: number, index) {
        const dialogRef = this.conformationDialog.open(DeleteAlertDialog, {
            data: { title: this.translate(this.labels.entityNameExpenses) }
        });
        dialogRef.afterClosed().subscribe(result => {
            if (result == true) {
                this.startLoader();
                this.expensesServices.deleteByIdExpenses(_id).subscribe(res => {
                    if (res['message'] == 'Deleted Successfully') {
                        this.expensesList.data.splice(index, 1);
                        this.expensesList._data.next(this.expensesList.data);
                        this.alertService.showSuccess(this.translate(this.labels.btnDelete), this.translate(this.labels.entityNameExpenses));
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
    countExpenses() {
        this.expensesServices.countExpenses(this.expensesSearch.value).subscribe(res => {
            if (res['message'] == 'Success') {
                if (this.count != res['data'][0]) {
                    this.count = res['data'][0];
                    this.findAllExpenses();
                }
            } else {
                this.count = 0;
            }
        }, err => {
            console.error('err: ', err);
        });
    }
    onSubmit() {
                 this.addUpdateExpenses(this.expensesForm.value);
        this.submitted = false;
        this.onClearAdd();
    } onValChange() {

    }
    onValChangeItem() {
         
        if ((this.expensesForm.controls['buyer'].value && this.expensesForm.controls['buyer'].value != null) && (this.expensesForm.controls['item'].value && this.expensesForm.controls['item'].value != null)) {
            let item = this.itemList.find(x => x['_id'] == this.expensesForm.controls['item'].value);;
            let buyer = this.buyerList.find(x => x['_id'] == this.expensesForm.controls['buyer'].value);;
            if (item.Itemname.toUpperCase() == 'milk'.toUpperCase()) {
                this.expensesForm.controls['unitPrice'].setValue(buyer.milkPrice);
            } else if (item.Itemname.toUpperCase() == 'yougurt'.toUpperCase()) {
                this.expensesForm.controls['unitPrice'].setValue(buyer.yougurtPrice);
            } else {
                this.expensesForm.controls['unitPrice'].setValue(null);

            }

        }
    }

    async ngOnInit() {
        
        closeSearchOverlay();
        openAddOverlay();
        //closeAddOverlay();
        this.expensesForm = new FormGroup({  price: new FormControl(null, [Validators.required]), userId: new FormControl(await localStorage.getItem('userId')),  item: new FormControl("", [Validators.required]), quantity: new FormControl(0, [Validators.required]), details: new FormControl('', [Validators.required, validateSpaces]) });
        this.expensesSearch = new FormGroup({ price: new FormControl(), history: new FormControl(false), item: new FormControl(), quantity: new FormControl(), details: new FormControl() });
        this.itemSearch = new FormGroup({ countingUnit: new FormControl(), history: new FormControl(false), Itemname: new FormControl(), price: new FormControl(),isExpense: new FormControl('true') });
        this.findAllItem();
        this.findAllExpenses();

        //   this.getConstantList(1234);

    }
    loadExpensesToEdit(_id: number, index) {
        this.searchOverLay = false;

        let expenses = this.expensesList.data.find(x => x['_id'] == _id);
        this.submitted = null;
        this.formButton = this.translate(this.labels.btnEdit);
        this.updateExpensesId = expenses['_id'];
        this.revision = expenses['revision'];
        this.selectedIndex = index;
        // this.expensesForm.controls['userId'].setValue(expenses['userId']);
        this.expensesForm.controls['quantity'].setValue(expenses['quantity']);  
        this.expensesForm.controls['item'].setValue(expenses['item']['_id']);
        this.expensesForm.controls['details'].setValue(expenses['details']);
        this.expensesForm.controls['price'].setValue(expenses['price']);
    }
    async onClearAdd() {
        this.expensesForm.reset();
        this.expensesForm.controls['userId'].setValue(await localStorage.getItem('userId'));
        this.expensesForm.markAsUntouched();
        this.updateExpensesId = null;
    }
    onPageChange() {
        this.countExpenses();
        this.findAllExpenses();
    }
    onClearSearch() {
        this.expensesSearch.reset();
        this.history = undefined;
        this.selectedIndex = -1;
        this.onSearch();
    }
    ngAfterViewInit() {
        this.expensesList.paginator = this.paginator;
        this.expensesList.sort = this.sort;
        openAddOverlay();
        //  if(this.paginator?.pageSize){
        //     this.paginator.pageSize = Constant.ITEM_PER_PAGE;
        // }        this.matcher = new MyErrorStateMatcher();
        // this.cdRef.detectChanges();
    }
    applyFilter(filterValue: string) {
        filterValue = filterValue.trim(); // Remove whitespace
        filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
        this.expensesList.filter = filterValue;
    }
    resetCurrentExpenses() {
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
        return this.updateExpensesId == null ? this.translate(this.labels.btnAdd) : this.translate(this.labels.btnUpdate);
    }
    required(control) {
        if (this.expensesForm.get(control).touched) {
            return this.expensesForm.get(control).hasError('required') ? true : false;

        }
    }
    emptySpace(control) {
        return this.expensesForm.get(control).hasError('validSpace') ? true : false;
    }
    minLength(control) {
        return this.expensesForm.get(control).hasError('min') ? true : false;
    }
    maxLength(control) {
        return this.expensesForm.get(control).hasError('max') ? true : false;
    }
    pattern(control) {
        return this.expensesForm.get(control).hasError('pattern') ? true : false;
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
        this.countExpenses();
    }
    printPage() {
        window.print();
    }
    findAllItem() {
        this.startLoader();

        this.itemServices.findAllItem(this.itemSearch.value, this.paginator?.pageIndex, this.paginator?.pageSize).subscribe(
            res => {
                //  this.expensesList.data = res['data']['docs'];
                if (res['message'] == 'Successful') {

                    this.itemList = res['data'];
                 
                }
                else {
                    this.expensesList = [];
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
