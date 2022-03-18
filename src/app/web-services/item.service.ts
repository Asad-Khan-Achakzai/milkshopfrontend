import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Constant } from '../util/constant';
import { catchError, retry } from 'rxjs/operators';
@Injectable({ providedIn: 'root'})
export class ItemService {
 httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
constructor(private httpClient: HttpClient) {};
addItem (item:any ):Observable<string> {
return this.httpClient.post<string>(Constant.BASE_URL + "Items/add", item).pipe(retry(3),catchError(Constant.handleError));
}
updateItem (item :any):Observable<string> {
    let _id = item._id;
return this.httpClient.put<string>(Constant.BASE_URL + `Items/${_id}`, item, this.httpOptions).pipe(retry(3),catchError(Constant.handleError));
}
findAllItem (item :any,pageNo :number ,itemsPerPage :number ):Observable<string[]> {
return this.httpClient.post<string[]>(Constant.BASE_URL + "items/all",{'item':item,"pagination":{"pageNo":pageNo,"itemsPerPage":itemsPerPage}}).pipe(retry(3),catchError(Constant.handleError));
}
deleteByIdItem (itemId:any ):Observable<string> {
    let _id = itemId;
return this.httpClient.delete<string>(Constant.BASE_URL + `Items/${_id}`, this.httpOptions).pipe(retry(3),catchError(Constant.handleError));
}
countItem (item:any ):Observable<number> {
return this.httpClient.post<number>(Constant.BASE_URL + "Item/count", {"item": item } , this.httpOptions).pipe(retry(3),catchError(Constant.handleError));
}

}