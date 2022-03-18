import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Constant } from '../util/constant';
import { catchError, retry } from 'rxjs/operators';
@Injectable({ providedIn: 'root'})
export class UserService {
 httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
constructor(private httpClient: HttpClient) {};
addUser (user:any ):Observable<string> {
return this.httpClient.post<string>(Constant.BASE_URL + "managers/add", user).pipe(retry(3),catchError(Constant.handleError));
}
updateUser (user :any):Observable<string> {
    let _id = user._id;
return this.httpClient.put<string>(Constant.BASE_URL + `managers/${_id}`, user, this.httpOptions).pipe(retry(3),catchError(Constant.handleError));
}
findAllUser (user :any,pageNo :number ,usersPerPage :number ):Observable<string[]> {
return this.httpClient.post<string[]>(Constant.BASE_URL + "managers/all",{'item':user,"pagination":{"pageNo":pageNo,"itemsPerPage":usersPerPage}}).pipe(retry(3),catchError(Constant.handleError));
}
loginUser (user :any ):Observable<string[]> {
    return this.httpClient.post<string[]>(Constant.BASE_URL + "managers/login",user).pipe(retry(3),catchError(Constant.handleError));
    }
deleteByIdUser (userId:any ):Observable<string> {
    let _id = userId;
return this.httpClient.delete<string>(Constant.BASE_URL + `managers/${_id}`, this.httpOptions).pipe(retry(3),catchError(Constant.handleError));
}
countUser (user:any ):Observable<number> {
return this.httpClient.post<number>(Constant.BASE_URL + "manager/count", {"user": user } , this.httpOptions).pipe(retry(3),catchError(Constant.handleError));
}

}