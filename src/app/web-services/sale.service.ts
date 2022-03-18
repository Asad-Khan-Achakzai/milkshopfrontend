import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Constant } from '../util/constant';
import { catchError, retry } from 'rxjs/operators';
@Injectable({ providedIn: 'root'})
export class SaleService {
 httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
constructor(private httpClient: HttpClient) {};
addSale (sale:any ):Observable<string> {
return this.httpClient.post<string>(Constant.BASE_URL + "Sales/add", sale).pipe(retry(3),catchError(Constant.handleError));
}
updateSale (sale :any):Observable<string> {
    let _id = sale._id;
return this.httpClient.put<string>(Constant.BASE_URL + `Sales/${_id}`, sale, this.httpOptions).pipe(retry(3),catchError(Constant.handleError));
}
findAllSale (sale :any,pageNo :number ,salesPerPage :number ):Observable<string[]> {
return this.httpClient.post<string[]>(Constant.BASE_URL + "sales/all",{'item':sale,"pagination":{"pageNo":pageNo,"itemsPerPage":salesPerPage}}).pipe(retry(3),catchError(Constant.handleError));
}
deleteByIdSale (saleId:any ):Observable<string> {
    let _id = saleId;
return this.httpClient.delete<string>(Constant.BASE_URL + `Sales/${_id}`, this.httpOptions).pipe(retry(3),catchError(Constant.handleError));
}
countSale (sale:any ):Observable<number> {
return this.httpClient.post<number>(Constant.BASE_URL + "Sale/count", {"sale": sale } , this.httpOptions).pipe(retry(3),catchError(Constant.handleError));
}

}