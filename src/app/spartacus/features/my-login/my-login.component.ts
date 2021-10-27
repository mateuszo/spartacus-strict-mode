import { Component } from '@angular/core';
// TODO:Spartacus - 'LoginComponent' was moved to '@spartacus/user/account/components'. Logic for this component was changed. For more details please look into 4.0 migration documentation.
import { LoginComponent } from '@spartacus/user/account/components';

@Component({
  selector: 'app-my-login',
  templateUrl: './my-login.component.html',
  styleUrls: ['./my-login.component.scss'],
})
export class MyLoginComponent extends LoginComponent {}
