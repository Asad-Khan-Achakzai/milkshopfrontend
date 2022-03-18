import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Constant } from '../util/constant';
import { catchError, retry } from 'rxjs/operators';
@Injectable({ providedIn: 'root'})
export class BuyerService {
 httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
constructor(private httpClient: HttpClient) {};
addBuyer (buyer:any ):Observable<string> {
return this.httpClient.post<string>(Constant.BASE_URL + "Buyers/add", buyer).pipe(retry(3),catchError(Constant.handleError));
}
updateBuyer (buyer :any):Observable<string> {
    let _id = buyer._id;
return this.httpClient.put<string>(Constant.BASE_URL + `Buyers/${_id}`, buyer, this.httpOptions).pipe(retry(3),catchError(Constant.handleError));
}
findAllBuyer (buyer :any,pageNo :number ,buyersPerPage :number ):Observable<string[]> {
return this.httpClient.post<string[]>(Constant.BASE_URL + "buyers/all",{'item':buyer,"pagination":{"pageNo":pageNo,"itemsPerPage":buyersPerPage}}).pipe(retry(3),catchError(Constant.handleError));
}
deleteByIdBuyer (buyerId:any ):Observable<string> {
    let _id = buyerId;
return this.httpClient.delete<string>(Constant.BASE_URL + `Buyers/${_id}`, this.httpOptions).pipe(retry(3),catchError(Constant.handleError));
}
countBuyer (buyer:any ):Observable<number> {
return this.httpClient.post<number>(Constant.BASE_URL + "Buyer/count", {"buyer": buyer } , this.httpOptions).pipe(retry(3),catchError(Constant.handleError));
}

}