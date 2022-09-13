module.exports = {
  description: "创建标准CURD",
  prompts: [
    {
      type: "input",
      message:
        "请输入模型名称(用-分隔单词, 统一小写),勿与之前重复,然后点击回车",
      name: "modelName",
    },
    {
      type: "input",
      message: "请输入模型标识名称。建议中文，如：角色",
      name: "labelName",
    },
    {
      type: "confirm",
      name: "isPackage",
      message: "当前业务组件是否为主包主入口组件？",
      default: true,
    },
    {
      type: "input",
      name: "packageName",
      message: "请输入该组件属于主包名称",
      default: "",
      when: (data) => {
        return !data.isPackage;
      },
    },
  ],
  actions: (data) => {
    const { modelName, labelName, isPackage, packageName } = data;
    const listPath = isPackage
      ? `${modelName}/index.vue`
      : `${packageName}/${modelName}s.vue`;
    const editDialogPath = isPackage
      ? `${modelName}/edit-dialog.vue`
      : `${packageName}/${modelName}-edit-dialog.vue`;
    return [
      {
        type: "add",
        path: `src/api/${data.modelName}.ts`,
        templateFile: "templates/curd/api/api.hbs",
        data: {
          modelName,
          labelName,
        },
      },
      {
        type: "append",
        path: `src/api/types.ts`,
        templateFile: "templates/curd/api/types.hbs",
        data: {
          modelName,
        },
      },
      {
        type: "add",
        path: `src/views/${listPath}`,
        templateFile: "templates/curd/views/index.hbs",
        data: {
          modelName,
          labelName,
          editDialogPath,
        },
      },
      {
        type: "add",
        path: `src/views/${editDialogPath}`,
        templateFile: "templates/curd/views/edit-dialog.hbs",
        data: {
          modelName,
          labelName,
        },
      },
    ];
  },
};
