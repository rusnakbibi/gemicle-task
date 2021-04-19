import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { User } from 'src/app/core';

@Component({
  selector: 'app-checked-user',
  templateUrl: './checked-user.component.html',
  styleUrls: ['./checked-user.component.scss']
})
export class CheckedUserComponent implements OnInit {

  @Input() user?: User;
  @Output() selectUser = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  selectedUser(value: User): void {
    this.selectUser.emit(value);
  }

}
