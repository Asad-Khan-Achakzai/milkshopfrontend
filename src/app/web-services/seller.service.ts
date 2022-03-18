import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Constant } from '../util/constant';
import { catchError, retry } from 'rxjs/operators';
@Injectable({ providedIn: 'root'})
export class SellerService {
 httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
constructor(private httpClient: HttpClient) {};
addSeller (seller:any ):Observable<string> {
return this.httpClient.post<string>(Constant.BASE_URL + "Sellers/add", seller).pipe(retry(3),catchError(Constant.handleError));
}
updateSeller (seller :any):Observable<string> {
    let _id = seller._id;
return this.httpClient.put<string>(Constant.BASE_URL + `Sellers/${_id}`, seller, this.httpOptions).pipe(retry(3),catchError(Constant.handleError));
}
findAllSeller (seller :any,pageNo :number ,sellersPerPage :number ):Observable<string[]> {
return this.httpClient.post<string[]>(Constant.BASE_URL + "sellers/all",{'item':seller,"pagination":{"pageNo":pageNo,"itemsPerPage":sellersPerPage}}).pipe(retry(3),catchError(Constant.handleError));
}
deleteByIdSeller (sellerId:any ):Observable<string> {
    let _id = sellerId;
return this.httpClient.delete<string>(Constant.BASE_URL + `Sellers/${_id}`, this.httpOptions).pipe(retry(3),catchError(Constant.handleError));
}
countSeller (seller:any ):Observable<number> {
return this.httpClient.post<number>(Constant.BASE_URL + "Seller/count", {"seller": seller } , this.httpOptions).pipe(retry(3),catchError(Constant.handleError));
}

}