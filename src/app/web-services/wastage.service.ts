import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Constant } from '../util/constant';
import { catchError, retry } from 'rxjs/operators';
@Injectable({ providedIn: 'root'})
export class WaistageService {
 httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
constructor(private httpClient: HttpClient) {};
addWaistage (waistage:any ):Observable<string> {
return this.httpClient.post<string>(Constant.BASE_URL + "waistages/add", waistage).pipe(retry(3),catchError(Constant.handleError));
}
updateWaistage (waistage :any):Observable<string> {
    let _id = waistage._id;
return this.httpClient.put<string>(Constant.BASE_URL + `waistages/${_id}`, waistage, this.httpOptions).pipe(retry(3),catchError(Constant.handleError));
}
findAllWaistage (waistage :any,pageNo :number ,waistagesPerPage :number ):Observable<string[]> {
return this.httpClient.post<string[]>(Constant.BASE_URL + "waistages/all",{'item':waistage,"pagination":{"pageNo":pageNo,"itemsPerPage":waistagesPerPage}}).pipe(retry(3),catchError(Constant.handleError));
}
deleteByIdWaistage (waistageId:any ):Observable<string> {
    let _id = waistageId;
return this.httpClient.delete<string>(Constant.BASE_URL + `waistages/${_id}`, this.httpOptions).pipe(retry(3),catchError(Constant.handleError));
}
countWaistage (waistage:any ):Observable<number> {
return this.httpClient.post<number>(Constant.BASE_URL + "Waistage/count", {"waistage": waistage } , this.httpOptions).pipe(retry(3),catchError(Constant.handleError));
}

}