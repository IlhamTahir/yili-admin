import { defineStore } from "pinia";
import { computed, ref } from "vue";
import type { Ref } from "vue";
import { i18n } from "@/plugins/i18n";

interface Locale {
  locale: string;
  label: string;
  dir: "rtl" | "ltr";
}

const defaultLocale: Locale = {
  locale: "zh-CN",
  label: "简体中文",
  dir: "ltr",
};
export const useLocaleStore = defineStore(
  "locale",
  () => {
    const currentLocale = <Ref<Locale>>ref(defaultLocale);
    const availableLocaleMap = <Ref<Locale[]>>ref([
      {
        locale: "zh-CN",
        label: "简体中文",
        dir: "ltr",
      },
      {
        locale: "ug-CN",
        label: "ئيغۇرچە",
        dir: "rtl",
      },
      {
        locale: "en-US",
        label: "English(USA)",
        dir: "ltr",
      },
    ]);

    const availableLocales = computed(() => {
      return availableLocaleMap.value.map((v) => v.locale);
    });

    // TODO
    const switchLocale = async (locale: string) => {
      currentLocale.value =
        availableLocaleMap.value.find(
          (item: Locale) => item.locale === locale
        ) || defaultLocale;

      const globalI18n = i18n.global;

      const langModule = await import(`../lang/${locale}.ts`);
      await import(`@/assets/less/lang/${locale}.less`);
      document.documentElement.setAttribute("lang", locale);

      globalI18n.setLocaleMessage(locale, langModule.default);
      if (i18n.mode === "legacy") {
        i18n.global.locale = locale;
      } else {
        (i18n.global.locale as any).value = locale;
      }
    };
    return {
      currentLocale,
      availableLocaleMap,
      availableLocales,
      switchLocale,
    };
  },
  { persist: true }
);
