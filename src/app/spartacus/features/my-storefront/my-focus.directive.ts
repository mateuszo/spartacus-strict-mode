import { Directive, Input } from '@angular/core';
import { FocusConfig, FocusDirective } from '@spartacus/storefront';

@Directive({
  selector: '[appMyFocus]',
})
export class MyFocusDirective extends FocusDirective {
  // TODO: dirty hack - should be fixed in the next Spartacus release
  @Input('appMyFocus') config: FocusConfig = {};
}
