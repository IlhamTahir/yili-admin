import tDesignLang from "tdesign-vue-next/es/locale/en_US";

export default {
  common: {
    logout: "Logout",
  },
  routes: {
    dashboard: "Dashboard",
    user: "User",
    userManagement: "User Management",
    roleManagement: "Role Management",
  },
  login: {
    title: "Yili Admin Login",
    username: {
      placeholder: "input your account please",
      required: "need to input your username",
    },
    password: {
      placeholder: "input your password please",
      required: "need to input your password",
    },
    button: "Login",
    successMessage: "login success!",
  },
  dashboard: {
    infoCard: {
      userIncrease: "User Increase",
      userIncreaseUnit: "",
      todayMessages: "Today's Messages",
      todayMessagesUnit: "",
      income: "Income",
      incomeUnit: "",
      orderCount: "Order Count",
      orderCountUnit: "",
    },
    radarChart: {
      dataType: {
        ideal: "Ideal",
        actual: "Actual",
      },
      factor: {
        technical: "Technical competence",
        communication: "Communication skills",
        management: "Management capabilities",
        productThinking: "Product thinking",
        practicalExperience: "Practical experience",
      },
    },
  },
  user: {
    management: {
      createBtn: "Create User",
      search: {
        username: {
          placeholder: "input username to search",
        },
      },
      table: {
        username: "Username",
        nickname: "Nickname",
        roles: "Roles",
      },
      dialog: {
        createTitle: "Create User",
        editTitle: "Edit User",
        username: {
          label: "Username",
          placeholder: "please input a username",
          required: "username cannot be empty",
        },
        nickname: {
          label: "Nickname",
          placeholder: "please input a nickname",
          required: "nickname cannot be empty",
        },
        password: {
          label: "Password",
          placeholder: "please input a password",
          required: "password cannot be empty",
        },
        confirmPassword: {
          label: "Confirm Password",
          placeholder: "please input the password again to confirm",
          required: "confirm password can not be blank",
          validate:
            "The two passwords entered are inconsistent, please confirm whether the passwords are consistent",
        },
        roles: {
          label: "Role",
          placeholder: "please select the role to be configured",
        },
      },
    },
  },
  role: {
    management: {
      createBtn: "Create Role",
      search: {
        name: {
          placeholder: "input role name to search",
        },
        label: {
          placeholder: "input role label to search",
        },
      },
      table: {
        name: "Role Name",
        label: "Role Label",
      },
      dialog: {
        createTitle: "Create Role",
        editTitle: "Edit Role",
        name: {
          label: "Role Name",
          placeholder: "please input a role name",
          required: "need to input a role name",
        },
        label: {
          label: "Role Label",
          placeholder: "please input a role label",
        },
        permissions: {
          label: "Permissions",
        },
      },
    },
  },
  errorPage: {
    notAllowed: {
      title: "Not Allowed",
      description:
        "You are currently not authorized to access this page, if you have any questions, please contact the webmaster",
    },
    notFound: {
      title: "Not Found",
      description: "Sorry, the page you visited does not exist",
    },
  },
  table: {
    operation: "Operation",
  },
  edit: "Edit",

  week: {
    monday: "Monday",
    tuesday: "Tuesday",
    wednesday: "Wednesday",
    thursday: "Thursday",
    friday: "Friday",
    saturday: "Saturday",
    sunday: "Sunday",
  },
  dialog: {
    createSuccessMessage: "Create Success！",
    editSuccessMessage: "Edit Success！",
  },
  tDesignLang,
};
