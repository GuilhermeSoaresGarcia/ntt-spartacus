import { NgModule } from '@angular/core';
import { translationChunksConfig, translations } from "@spartacus/assets";
import { common } from "../../assets/src/translations/en/common";
import { FeaturesConfig, I18nConfig, OccConfig, provideConfig, SiteContextConfig } from "@spartacus/core";
import { defaultCmsContentProviders, layoutConfig, mediaConfig } from "@spartacus/storefront";

export const translationOverwrites = {
  en: {
    common: {
      searchBox: common.searchBox
    }
  }
}

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
  }), provideConfig(<I18nConfig>{
    i18n: {
      resources: translations,
      chunks: translationChunksConfig,
      fallbackLang: 'en'
    },
  }),
  provideConfig({
    i18n: { resources: translationOverwrites },
  }),
  provideConfig(<FeaturesConfig>{
    features: {
      level: '4.3'
    }
  })]
})
export class SpartacusConfigurationModule { }
