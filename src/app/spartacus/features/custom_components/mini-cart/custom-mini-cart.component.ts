import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ActiveCartService } from '@spartacus/core';
import { MiniCartComponent } from '@spartacus/storefront';

@Component({
  selector: 'custom-mini-cart',
  templateUrl: './custom-mini-cart.component.html',
  styleUrls: ["./custom-mini-cart.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CustomMiniCartComponent extends MiniCartComponent {
  constructor(protected activeCartService: ActiveCartService) {
    super(activeCartService)
  }
}
