import { HttpClient } from '@angular/common/http';
import {Injectable} from '@angular/core';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable';
@Injectable()
 export class DepartmentService {
  constructor(private http: HttpClient) {
  }
  public getAllTodo(): Observable<any> {
    const URI = 'http://localhost:3000/customers';
    console.log(`Fetching all tasks from ${URI}...`);
    return this.http.get(URI).map((res: Response) => res);
  }
}
