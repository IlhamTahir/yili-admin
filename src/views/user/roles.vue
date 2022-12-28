<template>
  <t-card>
    <div class="action-area">
      <t-button
        v-permission="PermissionEnum.USER_ROLES_CREATE"
        @click="handleCreate"
        >{{ $t("role.management.createBtn") }}
      </t-button>
    </div>
    <div class="search-area">
      <t-input
        class="search-input"
        v-model="searchKey.name"
        :placeholder="$t('role.management.search.name.placeholder')"
      ></t-input>
      <t-input
        class="search-input"
        v-model="searchKey.label"
        :placeholder="$t('role.management.search.name.placeholder')"
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
    </t-table>
  </t-card>
  <role-edit-dialog
    :show="showDialog"
    :data="editData"
    @close="onDialogClose"
    @confirm="(value) => handleConfirm(value, fetchData)"
  ></role-edit-dialog>
</template>

<script lang="ts" setup>
import { PermissionEnum } from "@/config/permission.config";
import { useEditDialog } from "@/composables/useEditDialog";
import type { RoleCreateRequest, RoleEditRequest, RoleType } from "@/api/types";
import roleApi from "@/api/role";
import { computed, reactive } from "vue";
import { useSearch } from "@/composables/useSearch";
import RoleEditDialog from "./role-edit-dialog.vue";
import { Icon } from "tdesign-vue-next";
import { useI18n } from "@/composables/useI18n";

const { t } = useI18n();

const columns = computed(() => {
  return [
    { colKey: "id", title: "ID" },
    { colKey: "name", title: t("role.management.table.name") },
    { colKey: "label", title: t("role.management.table.label") },
    { colKey: "operation", title: t("table.operation") },
  ];
});
const searchKey = reactive({
  name: "",
  label: "",
});

const {
  showDialog,
  editData,
  handleCreate,
  onDialogClose,
  handleEdit,
  handleConfirm,
} = useEditDialog<RoleType, RoleCreateRequest, RoleEditRequest>(roleApi);

const { data, fetchData, pagination, loading, onPageChange } = useSearch<
  RoleType,
  {
    name: string;
    label: string;
  }
>(roleApi, searchKey);
</script>
<style lang="less" scoped></style>
