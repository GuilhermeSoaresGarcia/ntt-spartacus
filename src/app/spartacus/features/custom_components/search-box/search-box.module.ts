import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { UrlModule, I18nModule, provideDefaultConfig, CmsConfig } from "@spartacus/core";
import { MediaModule, IconModule } from "@spartacus/storefront";
import { CustomSearchBoxComponent } from "./search-box.component";


@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MediaModule,
    IconModule,
    UrlModule,
    I18nModule,
  ],
  providers: [
    provideDefaultConfig(<CmsConfig>{
      cmsComponents: {
        SearchBoxComponent: {
          component: CustomSearchBoxComponent,
        },
      },
    }),
  ],
  declarations: [CustomSearchBoxComponent],
  exports: [CustomSearchBoxComponent],
})
export class CustomSearchBoxModule {}
