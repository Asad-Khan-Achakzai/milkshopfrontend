import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Constant } from '../util/constant';
import { catchError, retry } from 'rxjs/operators';
@Injectable({ providedIn: 'root'})
export class ExpensesService {
 httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
constructor(private httpClient: HttpClient) {};
addExpenses (expenses:any ):Observable<string> {
return this.httpClient.post<string>(Constant.BASE_URL + "Expenses/add", expenses).pipe(retry(3),catchError(Constant.handleError));
}
updateExpenses (expenses :any):Observable<string> {
    let _id = expenses._id;
return this.httpClient.put<string>(Constant.BASE_URL + `Expenses/${_id}`, expenses, this.httpOptions).pipe(retry(3),catchError(Constant.handleError));
}
findAllExpenses (expenses :any,pageNo :number ,expensesPerPage :number ):Observable<string[]> {
return this.httpClient.post<string[]>(Constant.BASE_URL + "expenses/all",{'item':expenses,"pagination":{"pageNo":pageNo,"itemsPerPage":expensesPerPage}}).pipe(retry(3),catchError(Constant.handleError));
}
deleteByIdExpenses (expensesId:any ):Observable<string> {
    let _id = expensesId;
return this.httpClient.delete<string>(Constant.BASE_URL + `Expenses/${_id}`, this.httpOptions).pipe(retry(3),catchError(Constant.handleError));
}
countExpenses (expenses:any ):Observable<number> {
return this.httpClient.post<number>(Constant.BASE_URL + "Expenses/count", {"expenses": expenses } , this.httpOptions).pipe(retry(3),catchError(Constant.handleError));
}

}