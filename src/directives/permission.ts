import type { Directive, DirectiveBinding } from "vue";
import { useUserStore } from "@/store";

const hasNoPermission = (value: string) => {
  return useUserStore().currentUser?.permissions.indexOf(value) === -1;
};

export const permissionDirective: Directive = {
  mounted(el: Element, { value }: DirectiveBinding) {
    hasNoPermission(value) && el.parentNode?.removeChild(el);
  },
};
