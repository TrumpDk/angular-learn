import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IMenuItem } from '../../app.component';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  private userMenuListUrl = 'api/catagories';

  constructor(private http: HttpClient) { }

  retrieveMenuList() {
    return this.http.get<IMenuItem[]>(this.userMenuListUrl);
  }
}
