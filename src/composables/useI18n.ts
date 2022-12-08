import { i18n } from "@/plugins/i18n";

export const useI18n = () => {
  return {
    t: i18n.global.t,
  };
};
