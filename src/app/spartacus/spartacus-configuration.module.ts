import { NgModule } from '@angular/core';
import { translationChunksConfig } from "@spartacus/assets";
import { FeaturesConfig, I18nConfig, OccConfig, provideConfig, SiteContextConfig } from "@spartacus/core";
import { defaultCmsContentProviders, layoutConfig, mediaConfig } from "@spartacus/storefront";

@NgModule({
  declarations: [],
  imports: [
  ],
  providers: [provideConfig(layoutConfig), provideConfig(mediaConfig), ...defaultCmsContentProviders, provideConfig(<OccConfig>{
    backend: {
      occ: {
        baseUrl: 'https://spartacus-demo.eastus.cloudapp.azure.com:8443/',
      }
    },
  }), provideConfig(<SiteContextConfig>{
    context: {
      currency: ['USD'],
      language: ['en'],
      baseSite: ['electronics-spa'],
    },
  }),
  provideConfig({
    i18n: {
      backend: {
        loadPath: '../../assets/i18n-assets/{{lng}}/{{ns}}.json'
      },
      chunks: translationChunksConfig,
      fallbackLang: 'en'
    },
  }),  
  provideConfig(<FeaturesConfig>{
    features: {
      level: '4.3'
    }
  })]
})
export class SpartacusConfigurationModule { }
