import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Constant } from '../util/constant';
import { catchError, retry } from 'rxjs/operators';
@Injectable({ providedIn: 'root'})
export class PurchaseService {
 httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
constructor(private httpClient: HttpClient) {};
addPurchase (purchase:any ):Observable<string> {
return this.httpClient.post<string>(Constant.BASE_URL + "Purchases/add", purchase).pipe(retry(3),catchError(Constant.handleError));
}
updatePurchase (purchase :any):Observable<string> {
    let _id = purchase._id;
return this.httpClient.put<string>(Constant.BASE_URL + `Purchases/${_id}`, purchase, this.httpOptions).pipe(retry(3),catchError(Constant.handleError));
}
findAllPurchase (purchase :any,pageNo :number ,purchasesPerPage :number ):Observable<string[]> {
return this.httpClient.post<string[]>(Constant.BASE_URL + "purchases/all",{'item':purchase,"pagination":{"pageNo":pageNo,"itemsPerPage":purchasesPerPage}}).pipe(retry(3),catchError(Constant.handleError));
}
deleteByIdPurchase (purchaseId:any ):Observable<string> {
    let _id = purchaseId;
return this.httpClient.delete<string>(Constant.BASE_URL + `Purchases/${_id}`, this.httpOptions).pipe(retry(3),catchError(Constant.handleError));
}
countPurchase (purchase:any ):Observable<number> {
return this.httpClient.post<number>(Constant.BASE_URL + "Purchase/count", {"purchase": purchase } , this.httpOptions).pipe(retry(3),catchError(Constant.handleError));
}

}