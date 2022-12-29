import tDesignLang from "tdesign-vue-next/es/locale/zh_CN";

export default {
  common: {
    logout: "退出登录",
  },
  routes: {
    dashboard: "控制台",
    user: "用户",
    userManagement: "用户管理",
    roleManagement: "角色管理",
  },
  login: {
    title: "Yili Admin 登录",
    username: {
      placeholder: "请输入用户名",
      required: "请填写用户名",
    },
    password: {
      placeholder: "请输入密码",
      required: "请填写密码",
    },
    button: "登录",
    successMessage: "登录成功!",
  },
  dashboard: {
    infoCard: {
      userIncrease: "新增用户",
      userIncreaseUnit: "位",
      todayMessages: "今日消息",
      todayMessagesUnit: "条",
      income: "营业额",
      incomeUnit: "元",
      orderCount: "订单数",
      orderCountUnit: "个",
    },
    radarChart: {
      dataType: {
        ideal: "理想分布",
        actual: "实际分布",
      },
      factor: {
        technical: "技术能力",
        communication: "沟通能力",
        management: "管理能力",
        productThinking: "产品思维",
        practicalExperience: "实战经验",
      },
    },
  },
  user: {
    management: {
      createBtn: "创建用户",
      search: {
        username: {
          placeholder: "请输入用户名",
        },
      },
      table: {
        username: "用户名",
        nickname: "昵称",
        roles: "角色",
      },
      dialog: {
        createTitle: "创建用户",
        editTitle: "编辑用户",
        username: {
          label: "用户名称",
          placeholder: "请输入用户名称",
          required: "用户名称不能为空",
        },
        nickname: {
          label: "用户昵称",
          placeholder: "请输入用户昵称",
          required: "用户昵称不能为空",
        },
        password: {
          label: "密码",
          placeholder: "请输入需要设置的密码",
          required: "用户密码不能为空",
        },
        confirmPassword: {
          label: "确认密码",
          placeholder: "请输入再次输入密码确认",
          required: "确认密码不能为空",
          validate: "两次密码输入不一致，请确认密码是否一致",
        },
        roles: {
          label: "角色",
          placeholder: "请选择需要配置的角色",
        },
      },
    },
  },
  role: {
    management: {
      createBtn: "创建角色",
      search: {
        name: {
          placeholder: "请输入角色名称",
        },
        label: {
          placeholder: "请输入角色标识",
        },
      },
      table: {
        name: "角色名称",
        label: "角色标识",
      },
      dialog: {
        createTitle: "创建角色",
        editTitle: "编辑角色",
        name: {
          label: "角色名称",
          placeholder: "请输入角色名称",
          required: "角色名称不能为空",
        },
        label: {
          label: "角色标识",
          placeholder: "请输入用户标识",
        },
        permissions: {
          label: "权限集",
        },
      },
    },
  },
  errorPage: {
    notAllowed: {
      title: "403无权访问",
      description: "您当前无权访问该页面，若有疑问请跟网站管理员联系",
    },
    notFound: {
      title: "404无法找到该页面",
      description: "抱歉您访问的页面不存在",
    },
  },
  table: {
    operation: "操作",
  },

  edit: "编辑",

  week: {
    monday: "周一",
    tuesday: "周二",
    wednesday: "周三",
    thursday: "周四",
    friday: "周五",
    saturday: "周六",
    sunday: "周日",
  },
  dialog: {
    createSuccessMessage: "创建成功！",
    editSuccessMessage: "编辑成功！",
  },
  tDesignLang,
};
