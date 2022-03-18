import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Constant } from '../util/constant';
import { catchError, retry } from 'rxjs/operators';
@Injectable({ providedIn: 'root' })
export class reportService {
    httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    constructor(private httpClient: HttpClient) { };
    
    getSaleReport(item: any): Observable<string[]> {
      //return this.httpClient.post<string[]>(Constant.BASE_URL + "report/itemsReport", item).pipe(retry(3), catchError(Constant.handleError));

  return this.httpClient.post<string[]>(Constant.BASE_URL + "report/saleReportRange", item).pipe(retry(3), catchError(Constant.handleError));
    }
    getitemReport(item: any): Observable<string[]> {
      return this.httpClient.post<string[]>(Constant.BASE_URL + "report/itemsReport", item).pipe(retry(3), catchError(Constant.handleError));

    }

}