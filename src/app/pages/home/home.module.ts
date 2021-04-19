import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MatTabsModule } from '@angular/material/tabs';

import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { UncheckedUserComponent } from './components/unchecked-user/unchecked-user.component';
import { CheckedUserComponent } from './components/checked-user/checked-user.component';
import { PlaceholderModule } from 'src/app/shared';
import { SearchPipe } from 'src/app/core';

@NgModule({
  declarations: [
    HomeComponent,
    UncheckedUserComponent,
    CheckedUserComponent,
    SearchPipe
  ],
  exports: [HomeComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MatTabsModule,
    PlaceholderModule,
    FormsModule
  ]
})
export class HomeModule { }
