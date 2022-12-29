<template>
  <t-dialog
    ref="dialog"
    width="900px"
    :visible="visible"
    :header="
      user.id
        ? $t('user.management.dialog.editTitle')
        : $t('user.management.dialog.createTitle')
    "
    @close="$emit('close')"
    @confirm="handleConfirm"
  >
    <t-form ref="form" class="dialog-form" :data="user" :rules="rules">
      <t-form-item
        :label="$t('user.management.dialog.username.label')"
        name="username"
      >
        <t-input
          :placeholder="$t('user.management.dialog.username.placeholder')"
          v-model="user.username"
          autocomplete="off"
        />
      </t-form-item>
      <t-form-item
        :label="$t('user.management.dialog.nickname.label')"
        name="nickname"
      >
        <t-input
          :placeholder="$t('user.management.dialog.username.placeholder')"
          v-model="user.nickname"
        />
      </t-form-item>
      <t-form-item
        :label="$t('user.management.dialog.password.label')"
        v-if="!user.id"
        name="password"
      >
        <t-input
          type="password"
          :placeholder="$t('user.management.dialog.password.placeholder')"
          v-model="user.password"
          autocomplete="off"
        />
      </t-form-item>
      <t-form-item
        v-if="!user.id"
        :label="$t('user.management.dialog.confirmPassword.label')"
        name="confirmPassword"
      >
        <t-input
          type="password"
          :placeholder="
            $t('user.management.dialog.confirmPassword.placeholder')
          "
          v-model="confirmPassword"
        />
      </t-form-item>
      <t-form-item
        :label="$t('user.management.dialog.roles.label')"
        name="roles"
      >
        <t-select
          v-model="roles"
          :options="options"
          :placeholder="$t('user.management.dialog.roles.placeholder')"
          clearable
          multiple
        >
        </t-select>
      </t-form-item>
    </t-form>
  </t-dialog>
</template>

<script lang="ts" setup>
import { computed, ref, watch } from "vue";
import { useI18n } from "vue-i18n";

import type { User, UserCreateRequest, UserEditRequest } from "@/model/User";

const { t } = useI18n();

interface Props {
  show: boolean;
  data: User | null;
}

const props = withDefaults(defineProps<Props>(), {
  show: false,
});

const rules = computed(() => {
  return {
    username: [
      {
        required: true,
        message: t("user.management.dialog.username.required"),
        trigger: "blur",
      },
    ],
    nickname: [
      {
        required: true,
        message: t("user.management.dialog.nickname.required"),
        trigger: "blur",
      },
    ],
    password: [
      {
        required: true,
        message: t("user.management.dialog.password.required"),
        trigger: "blur",
      },
    ],
    confirmPassword: [
      {
        validator: () => {
          return Boolean(confirmPassword.value);
        },
        message: t("user.management.dialog.confirmPassword.required"),
        trigger: "blur",
      },
      {
        validator: validateConfirmPassword,
        message: t("user.management.dialog.confirmPassword.validate"),
        trigger: "blur",
      },
    ],
  };
});

const options = computed(() => {
  return [
    { label: "管理员", value: "ROLE_ADMIN" },
    { label: "普通用户", value: "ROLE_USER" },
  ];
});

const defaultData: UserCreateRequest = {
  id: "",
  username: "",
  nickname: "",
  password: "",
  roles: [],
};

const user = ref<UserCreateRequest>(props.data || defaultData);
const roles = ref<string[]>(
  user.value.roles ? user.value.roles.map((item) => item.name) : []
);

watch(props, (newValue) => {
  user.value = newValue.data || defaultData;
  roles.value = user.value.roles
    ? user.value.roles.map((item) => item.name)
    : [];
});

const emit = defineEmits(["close", "confirm"]);

const visible = computed(() => props.show);

const confirmPassword = ref("");

const validateConfirmPassword = () => {
  return user.value.password === confirmPassword.value;
};

// todo
const form = ref(null);

const handleConfirm = () => {
  emit("confirm", { ...user.value, roles: roles.value });
};
</script>

<style scoped></style>
