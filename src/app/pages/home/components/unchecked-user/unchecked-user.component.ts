import { UserById } from './../../../../core/interfaces/user-by-id';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import * as moment from 'moment';

import { AppService, User } from 'src/app/core';

@Component({
  selector: 'app-unchecked-user',
  templateUrl: './unchecked-user.component.html',
  styleUrls: ['./unchecked-user.component.scss']
})
export class UncheckedUserComponent implements OnInit {

  @Input() user!: User;
  @Output() checkedUser = new EventEmitter();
  @Output() selectUser = new EventEmitter();

  checked = false;

  constructor(
    private appService: AppService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  selectedUser(value: User): void {
    this.selectUser.emit(value);
  }

  checkUser(): void {
    this.appService.counter++;
    const user = {
      ...this.user,
      checked: true,
      _id: Math.floor(Math.random() * 100),
      date: moment(new Date()).format('DD/MM/YYYY HH:mm:ss')
    };
    this.checkedUser.emit(user);

    if (user._id) {
      this.checked = true;
    }
  }

}
