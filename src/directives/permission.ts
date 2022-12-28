import type { Directive, DirectiveBinding } from "vue";
import { useUserStore } from "@/store";

const hasNoPermission = (value: string) => {
  const userStore = useUserStore();
  return (
    !userStore.isAdmin &&
    userStore.currentUser?.permissions.indexOf(value) === -1
  );
};

export const permissionDirective: Directive = {
  mounted(el: Element, { value }: DirectiveBinding) {
    hasNoPermission(value) && el.parentNode?.removeChild(el);
  },
};
