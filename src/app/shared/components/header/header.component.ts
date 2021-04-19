import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AppService } from 'src/app/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  date: Observable<Date> = new Observable(obs => {
    setInterval(() => {
      obs.next(new Date());
    }, 250);
  });

  constructor(
    public appService: AppService,
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  isHome() {
    return this.router.url === '/home';
  }


  goBack(): void {
    this.router.navigate(['/']);
  }

}
