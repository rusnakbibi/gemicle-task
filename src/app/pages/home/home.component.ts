import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { takeUntil } from 'rxjs/operators';

import { AppService, BaseComponent, User } from 'src/app/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent extends BaseComponent implements OnInit {
  uncheckedUser: User[] = [];
  checkedUser: User[] = [];

  searchValue = '';

  indexTab = 0;

  checked = false;

  constructor(
    private appService: AppService,
    private cd: ChangeDetectorRef,
    private router: Router,
  ) {
    super();
   }

  ngOnInit(): void {
    this.changeIndexTab();
  }


  handlerCheck(user: User): void {
    this.appService.checkedUser.push(user);

    this.uncheckedUser.find(value => {
      if (value._id) {
        this.checked = true;
      }
    });
  }

  handlerSelect(user: User): void {
    this.appService.selectedUser?.push(user);
    if (user.id.value) {
      this.router.navigate(['/user', user.id?.value]);
    } else if (user.id) {
      this.router.navigate(['/user', user.id]);
    } else {
      return;
    }
  }

  changeIndexTab(indexTab = 0): any {

    this.indexTab = indexTab;

    switch (indexTab) {
      case 0:
        this.getUncheckedUser();
        break;
      case 1:
        this.getCheckedUser();
    }
  }

  loadMore(): void {
    this.appService.getUncheckedUsers()
      .pipe(
        takeUntil(this.componentDestroy()),
      )
      .subscribe(res => {
        res.results.map(value => {
          this.uncheckedUser.push(value);
        });

        this.cd.markForCheck();
      });
  }


  private getCheckedUser(): any {
    return this.checkedUser = this.appService.checkedUser;
  }

  private getUncheckedUser(): void {
    this.appService.getUncheckedUsers()
      .pipe(
        takeUntil(this.componentDestroy()),
      )
      .subscribe(res => {
        this.uncheckedUser = res.results;

        this.cd.markForCheck();
      });
  }

}
