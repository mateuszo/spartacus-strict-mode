import { Component } from '@angular/core';
import { ICON_TYPE } from '@spartacus/storefront';
// TODO:Spartacus - 'LoginComponent' was moved to '@spartacus/user/account/components'. Logic for this component was changed. For more details please look into 4.0 migration documentation.
import { LoginComponent } from '@spartacus/user/account/components';
import { userIconType } from './my-icon-types';

@Component({
  selector: 'app-my-login',
  templateUrl: './my-login.component.html',
  styleUrls: ['./my-login.component.scss'],
})
export class MyLoginComponent extends LoginComponent {
  userIcon: ICON_TYPE = userIconType;
}
