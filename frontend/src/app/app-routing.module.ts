import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ChatPageComponent } from './components/chat-page/chat-page.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'chatpage', component: ChatPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
