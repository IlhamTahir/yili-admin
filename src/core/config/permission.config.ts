export enum PermissionEnum {
  DASHBOARD = "dashboard",
  USER = "user",
  USER_LIST = "user:list",
  USER_LIST_CREATE = "user:list:create",
  USER_LIST_EDIT = "user:list:edit",
  USER_ROLES = "user:roles",
  USER_ROLES_CREATE = "user:roles:create",
  USER_ROLES_EDIT = "user:roles:edit",
}

type PermissionsTree = {
  label: string;
  value: string;
  children?: Array<PermissionsTree>;
};

export const permissionsTree: Array<PermissionsTree> = [
  { label: "控制台", value: PermissionEnum.DASHBOARD },
  {
    label: "用户",
    value: PermissionEnum.USER,
    children: [
      {
        label: "用户管理",
        value: PermissionEnum.USER_LIST,
        children: [
          { label: "用户创建", value: PermissionEnum.USER_LIST_CREATE },
          { label: "用户编辑", value: PermissionEnum.USER_LIST_EDIT },
        ],
      },
      {
        label: "角色管理",
        value: PermissionEnum.USER_ROLES,
        children: [
          { label: "角色创建", value: PermissionEnum.USER_ROLES_CREATE },
          { label: "角色编辑", value: PermissionEnum.USER_ROLES_EDIT },
        ],
      },
    ],
  },
];
