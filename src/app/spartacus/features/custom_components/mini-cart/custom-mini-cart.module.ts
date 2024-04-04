import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { UrlModule, I18nModule, provideDefaultConfig, CmsConfig } from "@spartacus/core";
import { IconModule } from "@spartacus/storefront";
import { CustomMiniCartComponent } from "./custom-mini-cart.component";


@NgModule({
  imports: [CommonModule, RouterModule, UrlModule, IconModule, I18nModule],  
  providers: [
    provideDefaultConfig(<CmsConfig>{
      cmsComponents: {
        MiniCartComponent: {
          component: CustomMiniCartComponent,
        },
      },
    }),
  ],
  declarations: [CustomMiniCartComponent],  
  exports: [CustomMiniCartComponent],
})
export class CustomMiniCartModule {}
