<template>
  <t-card>
    <div class="action-area">
      <t-button
        v-permission="PermissionEnum.USER_ROLES_CREATE"
        @click="handleCreate"
        >创建角色
      </t-button>
    </div>
    <div class="search-area">
      <t-input
        class="search-input"
        v-model="searchKey.name"
        placeholder="请输入角色名称"
      ></t-input>
      <t-input
        class="search-input"
        v-model="searchKey.label"
        placeholder="请输入角色标识"
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
          编辑
        </t-button>
      </template>
    </t-table>
  </t-card>
  <role-edit-dialog
    :show="showDialog"
    :data="editData"
    @close="onDialogClose"
    @confirm="handleConfirm"
  ></role-edit-dialog>
</template>

<script lang="ts" setup>
import { PermissionEnum } from "@/config/permission.config";
import { useEditDialog } from "@/composables/useEditDialog";
import type { RoleCreateRequest, RoleType } from "@/api/types";
import roleApi from "@/api/role";
import { reactive } from "vue";
import { useSearch } from "@/composables/useSearch";
import RoleEditDialog from "./role-edit-dialog.vue";
import { Icon } from "tdesign-vue-next";

const columns = [
  { colKey: "id", title: "ID" },
  { colKey: "name", title: "角色名称" },
  { colKey: "label", title: "角色标识" },
  { colKey: "operation", title: "操作" },
];
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
} = useEditDialog<RoleType, RoleCreateRequest>(roleApi, "角色");

const { data, fetchData, pagination, loading, onPageChange } = useSearch<
  RoleType,
  {
    name: string;
    label: string;
  }
>(roleApi, searchKey);
</script>
<style lang="less" scoped></style>
