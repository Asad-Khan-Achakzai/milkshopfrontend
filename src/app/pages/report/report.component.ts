import { DatePipe } from '@angular/common';
import { ChangeDetectorRef, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { reportService } from '../../web-services/report.service';
import * as moment from 'moment'
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { UserData } from 'src/app/tables/mix/mix.component';
import { BreakpointObserver } from '@angular/cdk/layout';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AlertService } from 'src/app/web-services/alert.service';
import { ConstantService } from 'src/app/web-services/constant.service';
import { ItemService } from 'src/app/web-services/item.service';
import { LocalService } from 'src/app/web-services/local.service';
import { SessionService } from 'src/app/web-services/session.service';
import { SharedService } from 'src/app/web-services/shared.service';
import { Labels } from '../../util/labels';
import { MyErrorStateMatcher } from 'src/app/pipes/ErrorMatcher';
import { BuyerService } from 'src/app/web-services/buyer.service';
import jspdf, { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';
@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.scss']
})
export class ReportComponent implements OnInit {
  reportForm: FormGroup;
  hotelSearch: FormGroup;

  date: string;
  day: string;
  month: string;
  year: string;
  displayedColumns = ['buyerName', 'Itemname', 'quantity', 'price', 'amount', 'payment', 'user', 'timeStamp'];
  menuList = ['Date', 'Date Range', 'Buyer', 'Date And Buyer', 'Date Range And Buyer'];
  matcher = new MyErrorStateMatcher();

  dataSource: MatTableDataSource<UserData>;
  report: any = new MatTableDataSource();
  public labels = Labels;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator = Object.create(null);
  @ViewChild(MatSort, { static: true }) sort: MatSort = Object.create(null);
  @ViewChild('pdfTable', { static: false }) pdfTable: ElementRef;

  totalAmount = 0;
  totalUnpaidAmount = 0;
  buyerList: any;
  paid = 0;
  oldUnpaidAmount = 0;
  paidFromPayments = 0;
  totalUnpaid = 0;
  unpaid = 0;
  totalPaidFromPayments = 0;
  expensesAmount = 0;
  oldpaidAmount= 0;
  oldPaidFromPayments= 0;
  itemsReport: any;
  constructor(private buyerServices: BuyerService, private reportService: reportService, breakpointObserver: BreakpointObserver, private sessionService: SessionService, private localService: LocalService, private itemServices: ItemService, private constantService: ConstantService, private sharedService: SharedService, private route: Router, public conformationDialog: MatDialog, private alertService: AlertService, private cdRef: ChangeDetectorRef) {

    // breakpointObserver.observe(['(max-width: 600px)']).subscribe(result => {
    //     this.displayedColumns = result.matches ?
    //         ['id', 'name', 'progress', 'color'] :
    //         ['id', 'name', 'progress', 'color'];
    // });

    // Create 100 users
    const users: UserData[] = [];


    // Assign the data to the data source for the table to render
    this.report = new MatTableDataSource(users);
  };
  async ngOnInit(): Promise<void> {
    this.reportForm = new FormGroup({ date: new FormControl(null), buyer: new FormControl(null), menu: new FormControl(null, [Validators.required]), end: new FormControl(null), start: new FormControl(null) });
    this.hotelSearch = new FormGroup({ type: new FormControl(), milkPrice: new FormControl(), history: new FormControl(false), name: new FormControl(), address: new FormControl(), yougurtPrice: new FormControl(), phoneN: new FormControl(), mobileN: new FormControl(), otherN: new FormControl() });
    this.findAllBuyer();
    this.reportForm.controls['menu'].value
  }
  // exportAsPDF(divId)
  // {

  //     let data = document.getElementById(divId);  
  //     html2canvas(data).then(canvas => {

  //     const contentDataURL = canvas.toDataURL('image/png')  
  //     let pdf = new jspdf('l', 'cm', 'a4'); //Generates PDF in landscape mode
  //     // let pdf = new jspdf('p', 'cm', 'a4'); Generates PDF in portrait mode
  //     pdf.addImage(contentDataURL, 'PNG', 0, 0, 29.7, 21.0);  
  //     pdf.save('Filename.pdf');   
  //   }); 
  // }
  exportAsPDF(divId) {
    let data = document.getElementById(divId);

    html2canvas(data, { allowTaint: true }).then(canvas => {
      let HTML_Width = canvas.width;
      let HTML_Height = canvas.height;
      let top_left_margin = 15;
      let PDF_Width = HTML_Width + (top_left_margin * 2);
      let PDF_Height = (PDF_Width * 1.5) + (top_left_margin * 2);
      let canvas_image_width = HTML_Width;
      let canvas_image_height = HTML_Height;
      let totalPDFPages = Math.ceil(HTML_Height / PDF_Height) - 1;
      canvas.getContext('2d');
      let imgData = canvas.toDataURL("image/jpeg", 1.0);
      let pdf = new jsPDF('p', 'pt', [PDF_Width, PDF_Height]);
      pdf.addImage(imgData, 'JPG', top_left_margin, top_left_margin, canvas_image_width, canvas_image_height);
      for (let i = 1; i <= totalPDFPages; i++) {
        pdf.addPage([PDF_Width, PDF_Height], 'p');
        pdf.addImage(imgData, 'JPG', top_left_margin, -(PDF_Height * i) + (top_left_margin * 4), canvas_image_width, canvas_image_height);
      }
      pdf.save("Quetta-Milk-Shop "+moment(Date.now()).format('MMMM Do YYYY, h:mm:ss a')+".pdf");
    });
  }
  selectionChanged() {
    if(this.reportForm.controls['menu'].value =="Date Range"){
      this.reportForm.get('buyer').clearValidators();
      this.reportForm.controls['buyer'].updateValueAndValidity();

      this.reportForm.get('date').clearValidators();
      this.reportForm.controls['date'].updateValueAndValidity();

      this.reportForm.controls['end'].setValidators([Validators.required]);              
      this.reportForm.controls['end'].updateValueAndValidity();
    // this.reportForm.get('end').clearValidators();  
    this.reportForm.controls['start'].setValidators([Validators.required]);              
    this.reportForm.controls['start'].updateValueAndValidity();
  // this.reportForm.get('start').clearValidators();             

    }else if(this.reportForm.controls['menu'].value =="Date"){
      this.reportForm.get('start').clearValidators();
      this.reportForm.controls['start'].updateValueAndValidity();

      this.reportForm.get('end').clearValidators();
      this.reportForm.controls['end'].updateValueAndValidity();

      this.reportForm.get('buyer').clearValidators();
      this.reportForm.controls['buyer'].updateValueAndValidity();

      this.reportForm.controls['date'].setValidators([Validators.required]);              
      this.reportForm.controls['date'].updateValueAndValidity();
    }else if(this.reportForm.controls['menu'].value =="Buyer"){
      this.reportForm.get('start').clearValidators();
      this.reportForm.controls['start'].updateValueAndValidity();

      this.reportForm.get('end').clearValidators();
      this.reportForm.controls['end'].updateValueAndValidity();

      this.reportForm.get('date').clearValidators();
      this.reportForm.controls['date'].updateValueAndValidity();

      this.reportForm.controls['buyer'].setValidators([Validators.required]);              
      this.reportForm.controls['buyer'].updateValueAndValidity();
    }else if(this.reportForm.controls['menu'].value =="Date And Buyer"){
      this.reportForm.get('start').clearValidators();
      this.reportForm.controls['start'].updateValueAndValidity();

      this.reportForm.get('end').clearValidators();
      this.reportForm.controls['end'].updateValueAndValidity();


      this.reportForm.controls['date'].setValidators([Validators.required]);              
      this.reportForm.controls['date'].updateValueAndValidity();
            this.reportForm.controls['buyer'].setValidators([Validators.required]);              
      this.reportForm.controls['buyer'].updateValueAndValidity();
    }else if(this.reportForm.controls['menu'].value =="Date Range And Buyer"){

      this.reportForm.get('date').clearValidators();
      this.reportForm.controls['date'].updateValueAndValidity();

      this.reportForm.controls['end'].setValidators([Validators.required]);              
      this.reportForm.controls['end'].updateValueAndValidity();
    // this.reportForm.get('end').clearValidators();  
    this.reportForm.controls['start'].setValidators([Validators.required]);              
    this.reportForm.controls['start'].updateValueAndValidity();
    this.reportForm.controls['buyer'].setValidators([Validators.required]);              
    this.reportForm.controls['buyer'].updateValueAndValidity();
    }
    this.reportForm.controls['date'].reset();
    this.reportForm.controls['buyer'].reset();
    this.reportForm.controls['end'].reset();
    this.reportForm.controls['start'].reset();

  }
  onSubmit() {
    this.paid = 0;
    this.oldUnpaidAmount = 0;
    this.paidFromPayments = 0;
    this.totalUnpaid = 0;
    this.unpaid = 0;
    this.oldPaidFromPayments = 0;
    this.oldpaidAmount = 0;
    this.totalPaidFromPayments = 0;
    this.expensesAmount = 0;
    this.totalAmount = 0;
    if(this.reportForm.controls['menu'].value =='Date' || this.reportForm.controls['menu'].value =='Date Range'){
      this.getItemsReport();
    }
    
    this.reportService.getSaleReport(this.reportForm.value).subscribe(
      res => {
        if (res['message'] == 'Successful') {

          if (res['paidAndUnpaid'] && res['paidAndUnpaid'] != null && res['paidAndUnpaid'].length != 0) {
            this.paid = res['paidAndUnpaid'][0].paid;
            this.unpaid = res['paidAndUnpaid'][0].unpaid;
          }
          if (res['paidFromPayments'] && res['paidFromPayments'] != null && res['paidFromPayments'].length != 0) {
            this.paidFromPayments = res['paidFromPayments'][0].payment;
          }
    
          if (res['oldPaidAndUnpaidAmount'] && res['oldPaidAndUnpaidAmount'] != null && res['oldPaidAndUnpaidAmount'].length != 0) {
            this.oldpaidAmount = res['oldPaidAndUnpaidAmount'][0].paid;
            this.oldUnpaidAmount = res['oldPaidAndUnpaidAmount'][0].unpaid;
          }
        
          if (res['oldPaidFromPayments'] && res['oldPaidFromPayments'] != null && res['oldPaidFromPayments'].length != 0) {
            this.oldPaidFromPayments = res['oldPaidFromPayments'][0].payment;
          }
          if (res['totalPaidAndUnpaid'] && res['totalPaidAndUnpaid'] != null && res['totalPaidAndUnpaid'].length != 0) {
            this.totalAmount = res['totalPaidAndUnpaid'][0].paid;
            this.totalUnpaid = res['totalPaidAndUnpaid'][0].unpaid;
          }
          if (res['totalPaidFromPayments'] && res['totalPaidFromPayments'] != null && res['totalPaidFromPayments'].length != 0) {
            this.totalPaidFromPayments = res['totalPaidFromPayments'][0].payment;
          }
          if (res['expensesAmount'] && res['expensesAmount'] != null && res['expensesAmount'].length != 0) {
            this.expensesAmount = res['expensesAmount'][0]  .paid;
          }
        }
        else {
          this.report.data = [];
        }
        console.log('res', res);
      }, err => {
        alert(err)
      });
  }
  getItemsReport(){
    this.reportService.getitemReport(this.reportForm.value).subscribe(
      res => {
        if (res['message'] == 'Successful') {
this.itemsReport = res['report'];
        }
          else {
            this.report.data = [];
          }
        }, err => {
          alert(err)
        });
  }
  required(control) {
    if (this.reportForm.get(control).touched) {
      return this.reportForm.get(control).hasError('required') ? true : false;

    }
  }
  onDateChange(value, control) {

    let date = moment(value).format('yyyy-MM-DD');
    control.setValue(date);
    // this.day = moment(date).format('DD'); // June 1, 2019
    // this.month = moment(date).format('MM'); // June 1, 2019
    // this.year = moment(date).format('YYYY'); // June 1, 2019
  }
  translate(label) {
    return this.sharedService.verifyLabel(label, this.sharedService.constantList);
  }
  findAllBuyer() {
    this.buyerServices.findAllBuyer(this.hotelSearch.value, this.paginator?.pageIndex, this.paginator?.pageSize).subscribe(
      res => {
        if (res['message'] == 'Successful') {
          this.buyerList = res['data'];
        }
        else {
          this.buyerList = [];
        }
      }, err => {
        console.error('err: ', err);

      });
  }
}
