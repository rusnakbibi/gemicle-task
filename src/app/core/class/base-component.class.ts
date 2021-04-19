import { Component, OnDestroy } from '@angular/core';

import { Observable, Subject } from 'rxjs';


@Component({
  selector: 'app-base-component',
  template: ''
})
export class BaseComponent implements OnDestroy {

  protected takeUntilDestroy$ = new Subject();

  ngOnDestroy(): void {
    this.completeStream();
  }

  protected componentDestroy(): Observable<any> {

    return this.takeUntilDestroy$.asObservable();
  }

  protected completeStream(): void {
    this.takeUntilDestroy$.next();
    this.takeUntilDestroy$.complete();
  }
}
