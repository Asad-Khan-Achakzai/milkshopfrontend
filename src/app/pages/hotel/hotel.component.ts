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
import { BuyerService } from '../../web-services/buyer.service';
import { LocalService } from '../../web-services/local.service';
import { SessionService } from '../../web-services/session.service';
import { SharedService } from '../../web-services/shared.service';
import { BreakpointObserver } from '@angular/cdk/layout';
import { PaymentService } from 'src/app/web-services/payment.service';
/** Constants used to fill up our data base. */

declare var closeAddOverlay: Function;
declare var openAddOverlay: Function;
declare var openSearchOverlay: Function;
declare var closeSearchOverlay: Function;
declare var showOrHide: Function;
@Component({
  selector: 'app-hotel',
  templateUrl: './hotel.component.html',
  styleUrls: ['./hotel.component.scss']
})
export class HotelComponent implements OnInit {

    displayedColumns = ['buyername', 'milkPrice', 'yougurtPrice', 'phoneN', 'mobileN', 'otherN','address','user','timeStamp','action'];
  types = ['Hotel','Home','Comercial']
  dataSource: MatTableDataSource<UserData>;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator = Object.create(null);
  @ViewChild(MatSort, { static: true }) sort: MatSort = Object.create(null);
  searchOverLay: boolean;
  history: any;
    revision: any;
      // constructor(private sessionService:SessionService,private localService:LocalService,private buyerServices: BuyerService, private constantService: ConstantService, private sharedService: SharedService, private route: Router, public conformationDialog: MatDialog, private alertService: AlertService, private cdRef: ChangeDetectorRef, private loader: NgxUiLoaderService) { };
  constructor(breakpointObserver: BreakpointObserver,private paymentServices: PaymentService,private sessionService:SessionService,private localService:LocalService,private buyerServices: BuyerService, private constantService: ConstantService, private sharedService: SharedService, private route: Router, public conformationDialog: MatDialog, private alertService: AlertService, private cdRef: ChangeDetectorRef) { 
      
    //   breakpointObserver.observe(['(max-width: 600px)']).subscribe(result => {
    //       this.displayedColumns = result.matches ?
    //           ['id', 'name', 'progress', 'color'] :
    //           ['id', 'name', 'progress', 'color'];
    //   });

     
  };

  public labels = Labels;
  formButton: string = this.translate(this.labels.btnAdd);
  submitted = false;
  selectedIndex = -1;
  updateBuyerId = null;
  buyerList: any = new MatTableDataSource();
  hotelForm: FormGroup | undefined;
  paymentForm: FormGroup | undefined;

  buyerPerPage: number = Constant.ITEM_PER_PAGE;
  currentPage: any;
  count: number | undefined;
  pageNo: number = 0;
  matcher = new MyErrorStateMatcher();
  // displayedColumns: string[] = ['description', 'details', 'mml', 'ratReqPerMml', 'action'];
  hotelSearch: FormGroup | undefined;
  constantList = [];
   countingUnitList = ['KG','Liter','Dozen'];
  addUpdateBuyer(buyer:any) {
      closeAddOverlay();
      this.startLoader();
      if (this.updateBuyerId == null) {
          this.buyerServices.addBuyer(this.hotelForm?.value).subscribe(res => {
              if (res['message'] == 'Buyer added successfully') {
                  buyer = res['data'];
                  this.buyerList.data.unshift(buyer);
                  this.buyerList._data.next(this.buyerList.data);
                  this.count++;
                  this.alertService.showSuccess(this.translate(this.labels.btnAdd), this.translate(this.labels.entityNameBuyer));
                  this.submitted = true;
                  //this.createKhataInPayment(buyer._id);
              } else {
                  console.error(res['documentation']);
              }
          }, err => {
              console.error('err: ', err);
              this.stopLoader();
          });
      }
      else {
          buyer._id = this.updateBuyerId;
          buyer.revision=  ++this.revision;
          this.buyerServices.updateBuyer(buyer).subscribe(res => {
              if (res['message'] == 'Updated Successfully') {
                  this.buyerList.data[this.selectedIndex] = res['data'];
                  this.submitted = true;
                  this.buyerList._data.next(this.buyerList.data);
                  this.alertService.showSuccess(this.translate(this.labels.btnUpdate), this.translate(this.labels.entityNameBuyer));
              } else {
                  console.error(res['documentation']);
              }
          }, err => {
              console.error('err: ', err);
              this.stopLoader();
          });
          this.updateBuyerId = null;
          this.onClearAdd();
          this.formButton = this.translate(this.labels.btnAdd);;
      } this.stopLoader();
  }
  createKhataInPayment(buyerId){
      this.paymentForm.controls['buyer'].setValue(buyerId);
    this.paymentServices.addPayment(this.paymentForm?.value).subscribe(res => {
        if (res['message'] == 'payment added successfully') {
            this.alertService.showSuccess(this.translate(this.labels.btnAdd), this.translate(this.labels.entityNamePayment));
            
            // payment = res['data'];
            // this.paymentList.data.unshift(payment);
            // this.paymentList._data.next(this.paymentList.data);
            // this.count++;
            // this.submitted = true;
        } else {
            console.error(res['documentation']);
        }
    }, err => {
        console.error('err: ', err);
        this.stopLoader();
    });
  }
  findAllBuyer() {
      this.startLoader();
      let pageSize = 10;
      if(this.paginator?.pageSize){
          pageSize = this.paginator?.pageSize;
      }
      let index = this.paginator?.pageIndex;
      this.buyerServices.findAllBuyer(this.hotelSearch.value, this.paginator?.pageIndex, this.paginator?.pageSize).subscribe(
          res => {
              if (res['message'] == 'Successful') {
                  this.buyerList.data = res['data'];
       
                  this.count = res['count']
                  setTimeout(()=>this.paginator.length = this.count) 

                  setTimeout(()=>  this.paginator.pageIndex = index) 
              }
              else {
                  this.buyerList.data = [];
              } this.stopLoader();
          }, err => {
              console.error('err: ', err);
              this.stopLoader();
          });
  }
  onSearch() {
      this.countBuyer();
      this.findAllBuyer();
  }
  openSearch(){
      closeAddOverlay();
      this.searchOverLay = true;
  }
  openSAdd(){
      closeSearchOverlay();
      this.searchOverLay = false;
  }
  deleteByIdBuyer(buyerId: number, index) {
      const dialogRef = this.conformationDialog.open(DeleteAlertDialog, {
          data: { title: this.translate(this.labels.entityNameBuyer) }
      });
      dialogRef.afterClosed().subscribe(result => {
          if (result == true) {
              this.startLoader();
              this.buyerServices.deleteByIdBuyer(buyerId).subscribe(res => {
                  if (res['message'] == 'Deleted Successfully') {
                      this.buyerList.data.splice(index, 1);
                      this.buyerList._data.next(this.buyerList.data);
                      this.alertService.showSuccess(this.translate(this.labels.btnDelete), this.translate(this.labels.entityNameBuyer));
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
  countBuyer() {
      this.buyerServices.countBuyer(this.hotelSearch.value).subscribe(res => {
          if (res['message'] == 'Success') {
              if (this.count != res['data'][0]) {
                  this.count = res['data'][0];
                  this.findAllBuyer();
              }
          } else {
              this.count = 0;
          }
      }, err => {
          console.error('err: ', err);
      });
  }
  onSubmit() {
      this.addUpdateBuyer(this.hotelForm.value);
      this.submitted = false;
      this.onClearAdd();
  }onValChange(){
      
  }
  async ngOnInit() {
      closeSearchOverlay();
      closeAddOverlay();
      this.paymentForm = new FormGroup({userId:new FormControl(await localStorage.getItem('userId')),buyer: new FormControl(null, [Validators.required]),amount: new FormControl(0, [Validators.required]),unpaid: new FormControl(0, [Validators.required]) });
      this.hotelForm = new FormGroup({userId:new FormControl(await localStorage.getItem('userId')),milkPrice:new FormControl(0, [Validators.required]), name: new FormControl("", [Validators.required, validateSpaces]), address: new FormControl("", [Validators.required, validateSpaces]),yougurtPrice: new FormControl(0, [Validators.required]),phoneN: new FormControl(0, [Validators.required]),mobileN: new FormControl(0, [Validators.required]),otherN: new FormControl(0, [Validators.required]),type: new FormControl(0, [Validators.required]) });
      this.hotelSearch= new FormGroup({type:new FormControl(),milkPrice:new FormControl(),history: new FormControl(false), name: new FormControl(),address: new FormControl(),yougurtPrice: new FormControl() ,phoneN: new FormControl() ,mobileN: new FormControl() ,otherN: new FormControl()  });
      // this.countBuyer();
       this.findAllBuyer();  

      this.getConstantList(1234);
   
  }
  loadBuyerToEdit(buyerId: number, index) {
    this.searchOverLay = false;

      let buyer = this.buyerList.data.find(x => x['_id'] == buyerId);
      this.submitted = null;
      this.formButton = this.translate(this.labels.btnEdit);
      this.updateBuyerId = buyer['_id'];
      this.revision = buyer['revision'];
      this.selectedIndex = index;
      this.hotelForm.controls['milkPrice'].setValue(buyer['milkPrice']);
      this.hotelForm.controls['name'].setValue(buyer['name']);
      this.hotelForm.controls['address'].setValue(buyer['address']);

      this.hotelForm.controls['yougurtPrice'].setValue(buyer['yougurtPrice']);
      this.hotelForm.controls['phoneN'].setValue(buyer['phoneN']);
      this.hotelForm.controls['mobileN'].setValue(buyer['mobileN']);
      this.hotelForm.controls['otherN'].setValue(buyer['otherN']);
      this.hotelForm.controls['type'].setValue(buyer['type']);

  }
  async onClearAdd() {
      this.hotelForm.reset();
      this.hotelForm.markAsUntouched();
      this.hotelForm.controls['userId'].setValue( await localStorage.getItem('userId'));
      this.updateBuyerId = null;
  }
  onPageChange() {
      this.countBuyer();
      this.findAllBuyer();
  }
  onClearSearch() {
      this.hotelSearch.reset();
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
  resetCurrentBuyer() {
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
      return this.updateBuyerId == null ? this.translate(this.labels.btnAdd) : this.translate(this.labels.btnUpdate);
  }
  required(control) {
      if(this.hotelForm.get(control).touched){
          return this.hotelForm.get(control).hasError('required') ? true : false;

      }
  }
  emptySpace(control) {
      return this.hotelForm.get(control).hasError('validSpace') ? true : false;
  }
  minLength(control) {
      return this.hotelForm.get(control).hasError('min') ? true : false;
  }
  maxLength(control) {
      return this.hotelForm.get(control).hasError('max') ? true : false;
  }
  pattern(control) {
      return this.hotelForm.get(control).hasError('pattern') ? true : false;
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
      this.countBuyer();
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
