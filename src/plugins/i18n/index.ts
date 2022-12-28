import type { App } from "vue";
import { createI18n } from "vue-i18n";
import type { I18n } from "vue-i18n";
import { useLocaleStore } from "@/store/locale";

export let i18n: I18n;

export const setupI18n = async (app: App<Element>) => {
  const localeStore = useLocaleStore();
  const defaultLocal = await import(
    `../../lang/${localeStore.currentLocale.locale}.ts`
  );
  import(`../../assets/less/lang/${localeStore.currentLocale.locale}.less`);
  document.documentElement.setAttribute(
    "lang",
    localeStore.currentLocale.locale
  );
  i18n = createI18n({
    legacy: false,
    locale: localeStore.currentLocale.locale,
    messages: {
      [localeStore.currentLocale.locale]: defaultLocal.default,
    },
    availableLocales: localeStore.availableLocales,
    sync: true,
    silentTranslationWarn: true,
    missingWarn: false,
    silentFallbackWarn: true,
  });
  app.use(i18n);
};
