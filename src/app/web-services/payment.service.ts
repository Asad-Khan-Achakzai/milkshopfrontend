import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Constant } from '../util/constant';
import { catchError, retry } from 'rxjs/operators';
@Injectable({ providedIn: 'root'})
export class PaymentService {
 httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
constructor(private httpClient: HttpClient) {};
addPayment (payment:any ):Observable<string> {
return this.httpClient.post<string>(Constant.BASE_URL + "Payments/add", payment).pipe(retry(3),catchError(Constant.handleError));
}
updatePayment (payment :any):Observable<string> {
    let _id = payment._id;
return this.httpClient.put<string>(Constant.BASE_URL + `Payments/${_id}`, payment, this.httpOptions).pipe(retry(3),catchError(Constant.handleError));
}
findAllPayment (payment :any,pageNo :number ,paymentsPerPage :number ):Observable<string[]> {
return this.httpClient.post<string[]>(Constant.BASE_URL + "payments/all",{'item':payment,"pagination":{"pageNo":pageNo,"itemsPerPage":paymentsPerPage}}).pipe(retry(3),catchError(Constant.handleError));
}
deleteByIdPayment (paymentId:any ):Observable<string> {
    let _id = paymentId;
return this.httpClient.delete<string>(Constant.BASE_URL + `Payments/${_id}`, this.httpOptions).pipe(retry(3),catchError(Constant.handleError));
}
countPayment (payment:any ):Observable<number> {
return this.httpClient.post<number>(Constant.BASE_URL + "Payment/count", {"payment": payment } , this.httpOptions).pipe(retry(3),catchError(Constant.handleError));
}

}