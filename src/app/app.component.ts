import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  username = '';
  users$:any;

  constructor(private readonly http: HttpClient) {}

  searchUser(): void {
    console.log(this.username);
    this.users$ = this.http
      .get(`https://api.github.com/search/users?q=${this.username}`)
      .pipe(map((res: any) => res.items));
  }
}
