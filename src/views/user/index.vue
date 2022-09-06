<template>
  <t-card>
    <div class="action-area">
      <t-button v-permission="PermissionEnum.USER_LIST_CREATE"
        >创建用户
      </t-button>
    </div>
    <div class="search-area">
      <t-input
        class="search-input"
        v-model="searchKey.name"
        placeholder="请输入用户名"
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
    ></t-table>
  </t-card>
</template>

<script lang="ts" setup>
import { PermissionEnum } from "@/config/permission.config";
import { Icon } from "tdesign-vue-next";
import { onMounted, reactive, ref } from "vue";
import type { UserType } from "@/api/types";
import type { PaginationProps, PageInfo } from "tdesign-vue-next";
import userApi from "@/api/user";

const columns = [
  { colKey: "id", title: "ID" },
  { colKey: "username", title: "用户名" },
  { colKey: "nickname", title: "昵称" },
  { colKey: "roles", title: "角色" },
  { colKey: "operation", title: "操作" },
];

const data = ref<Array<UserType>>([]);
const pagination = reactive<PaginationProps>({
  current: 1,
  total: 0,
  pageSize: 10,
});

const searchKey = reactive({
  name: "",
});
const loading = ref(false);

const fetchData = () => {
  loading.value = true;
  userApi
    .list({
      name: searchKey.name,
      page: pagination.current,
      size: pagination.pageSize,
      total: pagination.total,
    })
    .then((res) => {
      data.value = res.data;
      pagination.current = res.paging.page;
      pagination.pageSize = res.paging.size;
      pagination.total = res.paging.total;
      loading.value = false;
    })
    .catch((error) => {
      loading.value = true;
      throw new Error(error);
    });
};

onMounted(fetchData);

const onPageChange = (pageInfo: PageInfo) => {
  pagination.current = pageInfo.current;
  pagination.pageSize = pageInfo.pageSize;
  fetchData();
};
</script>

<style lang="less" scoped>
.search-area {
  margin-top: 20px;
  display: flex;

  .search-input {
    width: 200px;
    margin-right: 20px;
  }
}
</style>
