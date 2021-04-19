import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { PaginationState, User, UserById } from '../../interfaces';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  counter = 0;

  checkedUser: User[] = [];

  selectedUser?: User[] = [];

  constructor(
    private http: HttpClient
  ) { }


  getUncheckedUsers(): Observable<PaginationState<User[]>> {
    return this.http.get<PaginationState<User[]>>('https://randomuser.me/api/?results=20')
      .pipe(map(res => {
        res.results.map(item => {
          item.checked = false;
          item._id = Math.floor(Math.random() * 100);
          return item;
        }
      );

        return res;
      }));
  }
}
