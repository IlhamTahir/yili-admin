import { defineStore } from "pinia";
import { computed, ref } from "vue";
import { i18n } from "@/plugins/i18n";

export const useLocaleStore = defineStore(
  "locale",
  () => {
    const currentLocale = ref("zh-CN");
    const availableLocaleMap = ref([
      {
        locale: "zh-CN",
        label: "简体中文",
      },
      {
        locale: "ug-CN",
        label: "ئيغۇرچە",
      },
      {
        locale: "en-US",
        label: "English(USA)",
      },
    ]);

    const availableLocales = computed(() => {
      return availableLocaleMap.value.map((v) => v.locale);
    });

    // TODO
    const switchLocale = async (locale: string) => {
      currentLocale.value = locale;
      const globalI18n = i18n.global;

      const langModule = await import(`../lang/${locale}.ts`);

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
