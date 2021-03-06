import { Component } from '@angular/core';
import { UserProvider } from '../../providers/user.provider';

@Component({
  selector: 'page-account',
  templateUrl: 'account.html',
})
export class AccountPage {
  params: any = {};
  
  constructor(
    private _userProvider: UserProvider) {
    this.params.subtitle = "";
    this.params.description = "";

    this.params.data = [
      { page: "ProfilePage", title: "Profile" },
      { page: "SecuritySettingsPage", title: "Security settings" }
    ];
  }
}
