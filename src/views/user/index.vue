<template>
  <t-card>
    <div class="action-area">
      <t-button
        v-permission="PermissionEnum.USER_LIST_CREATE"
        @click="handleCreate"
        >{{ $t("user.management.createBtn") }}
      </t-button>
    </div>
    <div class="search-area">
      <t-input
        class="search-input"
        v-model="searchKey.username"
        :placeholder="$t('user.management.search.username.placeholder')"
      ></t-input>
      <t-button @click="fetchData">
        <template #icon>
          <icon name="search"></icon>
        </template>
      </t-button>
    </div>
    <t-table
      :loading="loading"
      row-key="index"
      :columns="columns"
      :data="data"
      :pagination="pagination"
      @page-change="onPageChange"
    >
      <template #operation="slotProps">
        <t-button
          v-permission="PermissionEnum.USER_LIST_EDIT"
          variant="text"
          theme="primary"
          @click="handleEdit(slotProps)"
        >
          <icon name="edit"></icon>
          {{ $t("edit") }}
        </t-button>
      </template>
      <template #roles="slotProps">
        <t-tag
          v-for="(role, index) in slotProps.row.roles"
          :key="index"
          theme="primary"
          variant="light"
          style="margin-right: 8px; cursor: pointer"
          >{{ role.label }}
        </t-tag>
      </template>
    </t-table>
  </t-card>
  <edit-dialog
    :show="showDialog"
    :data="editData"
    @close="onDialogClose"
    @confirm="(value) => handleConfirm(value, fetchData)"
  ></edit-dialog>
</template>

<script lang="ts" setup>
import { PermissionEnum } from "@/config/permission.config";
import { Icon } from "tdesign-vue-next";
import { useSearch } from "@/composables/useSearch";
import userApi from "@/api/user";
import { computed, reactive } from "vue";
import type { User, UserCreateRequest, UserEditRequest } from "@/model/User";
import EditDialog from "@/views/user/edit-dialog.vue";
import { useEditDialog } from "@/composables/useEditDialog";
import { useI18n } from "vue-i18n";

const { t } = useI18n();

const columns = computed(() => [
  { colKey: "id", title: "ID" },
  { colKey: "username", title: t("user.management.table.username") },
  { colKey: "nickname", title: t("user.management.table.nickname") },
  { colKey: "roles", title: t("user.management.table.roles") },
  { colKey: "operation", title: t("table.operation") },
]);

const searchKey = reactive({
  username: "",
});

const { data, fetchData, pagination, loading, onPageChange } = useSearch<
  User,
  {
    username: string;
  }
>(userApi, searchKey);

const {
  showDialog,
  editData,
  handleCreate,
  handleEdit,
  onDialogClose,
  handleConfirm,
} = useEditDialog<User, UserCreateRequest, UserEditRequest>(userApi);
</script>

<style lang="less" scoped></style>
