import { UserById } from './../../core/interfaces/user-by-id';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { AppService, User } from 'src/app/core';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.scss']
})
export class UserPageComponent implements OnInit {

  userId?: string;

  user?: User;

  constructor(
    private route: ActivatedRoute,
    private appService: AppService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.userId = params.id;
    });

    this.getUserById();
  }


  private getUserById(): void {
    this.appService.selectedUser?.map(value => {
      this.user = value;
    });
  }

}
