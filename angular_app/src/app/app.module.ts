import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HerosComponent } from './heros/heros.component';
import { CustomFormComponent } from './custom-form/custom-form.component';
import {FormsModule} from '@angular/forms';
import {RouterModule, Routes} from '@angular/router';
import { RemoveSpacesPipe } from './remove-spaces.pipe';
import { FirstServiceExampleComponent } from './first-service-example/first-service-example.component';
import { PostApiComponent } from './post-api/post-api.component';
import { MidtermComponent } from './midterm/midterm.component';
import {HttpClientModule} from "@angular/common/http";
import { TaskDetailsComponent } from './task-details/task-details.component';
import { TaskDetailsIdComponent } from './task-details-id/task-details-id.component';
import {AuthGuard} from "./auth.guard";

const routes: Routes = [
  {path: '', component:PostApiComponent},
  {path:'hero', component:HerosComponent},
  {path: 'task-detail',component:TaskDetailsComponent, canActivate:[AuthGuard]},
  {path:'task-detail-id/:id', component:TaskDetailsIdComponent, canActivate:[AuthGuard] }
];


@NgModule({
  declarations: [
    AppComponent,
    HerosComponent,
    CustomFormComponent,
    RemoveSpacesPipe,
    FirstServiceExampleComponent,
    PostApiComponent,
    MidtermComponent,
    TaskDetailsComponent,
    TaskDetailsIdComponent
  ],
  imports: [
    BrowserModule, FormsModule, RouterModule.forRoot(routes), HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


