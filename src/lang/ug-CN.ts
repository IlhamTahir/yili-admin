import type TDesignLang from "tdesign-vue-next/es/locale/zh_CN";
export const tDesignLang: typeof TDesignLang = {
  pagination: {
    itemsPerPage: "{size}/بەت",
    jumpTo: "بەت تاقلاش",
    page: "بەت",
    total: "جەمئىي {total} تال",
  },
  cascader: {
    empty: "سانلىق مەلۇمات يوق",
    loadingText: "",
    placeholder: "",
  },
  calendar: {
    yearSelection: "{year}",
    monthSelection: "{month}",
    yearRadio: "يىل",
    monthRadio: "ئاي",
    hideWeekend: "ھەپتىنى يوشۇرۇش",
    showWeekend: "ھەپتىنى كۆرسىتىش",
    today: "بۈگۈن",
    thisMonth: "ھازىرقى ئاي",
    week: "دۈشەنبە,سەيشەنبە,چارشەنبە,پەيشەنبە,چۈمە,شەنبە,يەكشەنبە",
    cellMonth:
      "\u4E00\u6708,\u4E8C\u6708,\u4E09\u6708,\u56DB\u6708,\u4E94\u6708,\u516D\u6708,\u4E03\u6708,\u516B\u6708,\u4E5D\u6708,\u5341\u6708,\u5341\u4E00\u6708,\u5341\u4E8C\u6708",
  },
  transfer: {
    title: "{checked} / {total} \u9879",
    empty: "\u6682\u65E0\u6570\u636E",
    placeholder: "\u8BF7\u8F93\u5165\u5173\u952E\u8BCD\u641C\u7D22",
  },
  timePicker: {
    now: "\u6B64\u523B",
    confirm: "\u786E\u5B9A",
    anteMeridiem: "\u4E0A\u5348",
    postMeridiem: "\u4E0B\u5348",
    placeholder: "\u9009\u62E9\u65F6\u95F4",
  },
  dialog: {
    confirm: "\u786E\u8BA4",
    cancel: "\u53D6\u6D88",
  },
  drawer: {
    confirm: "\u786E\u8BA4",
    cancel: "\u53D6\u6D88",
  },
  popconfirm: {
    confirm: {
      content: "\u786E\u5B9A",
    },
    cancel: {
      content: "\u53D6\u6D88",
    },
  },
  table: {
    empty: "\u6682\u65E0\u6570\u636E",
    loadingText: "\u6B63\u5728\u52A0\u8F7D\u4E2D\uFF0C\u8BF7\u7A0D\u540E",
    loadingMoreText: "\u70B9\u51FB\u52A0\u8F7D\u66F4\u591A",
    filterInputPlaceholder:
      "\u8BF7\u8F93\u5165\u5185\u5BB9\uFF08\u65E0\u9ED8\u8BA4\u503C\uFF09",
    sortAscendingOperationText: "\u70B9\u51FB\u5347\u5E8F",
    sortCancelOperationText: "\u70B9\u51FB\u53D6\u6D88\u6392\u5E8F",
    sortDescendingOperationText: "\u70B9\u51FB\u964D\u5E8F",
    clearFilterResultButtonText: "\u6E05\u7A7A\u7B5B\u9009",
    columnConfigButtonText: "\u5217\u914D\u7F6E",
    columnConfigTitleText: "\u8868\u683C\u5217\u914D\u7F6E",
    columnConfigDescriptionText:
      "\u8BF7\u9009\u62E9\u9700\u8981\u5728\u8868\u683C\u4E2D\u663E\u793A\u7684\u6570\u636E\u5217",
    confirmText: "\u786E\u8BA4",
    cancelText: "\u53D6\u6D88",
    resetText: "\u91CD\u7F6E",
    selectAllText: "\u5168\u9009",
    searchResultText:
      "\u641C\u7D22\u201C{result}\u201D\uFF0C\u627E\u5230 {count} \u6761\u7ED3\u679C",
  },
  select: {
    empty: "\u6682\u65E0\u6570\u636E",
    loadingText: "\u52A0\u8F7D\u4E2D",
    placeholder: "\u8BF7\u9009\u62E9",
  },
  tree: {
    empty: "\u6682\u65E0\u6570\u636E",
  },
  treeSelect: {
    empty: "\u6682\u65E0\u6570\u636E",
    loadingText: "\u52A0\u8F7D\u4E2D",
    placeholder: "\u8BF7\u9009\u62E9",
  },
  datePicker: {
    placeholder: {
      date: "\u8BF7\u9009\u62E9\u65E5\u671F",
      month: "\u8BF7\u9009\u62E9\u6708\u4EFD",
      year: "\u8BF7\u9009\u62E9\u5E74\u4EFD",
    },
    weekdays: [
      "\u4E00",
      "\u4E8C",
      "\u4E09",
      "\u56DB",
      "\u4E94",
      "\u516D",
      "\u65E5",
    ],
    months: [
      "1 \u6708",
      "2 \u6708",
      "3 \u6708",
      "4 \u6708",
      "5 \u6708",
      "6 \u6708",
      "7 \u6708",
      "8 \u6708",
      "9 \u6708",
      "10 \u6708",
      "11 \u6708",
      "12 \u6708",
    ],
    quarters: [
      "\u4E00\u5B63\u5EA6",
      "\u4E8C\u5B63\u5EA6",
      "\u4E09\u5B63\u5EA6",
      "\u56DB\u5B63\u5EA6",
    ],
    rangeSeparator: " - ",
    direction: "ltr",
    format: "YYYY-MM-DD",
    dayAriaLabel: "\u65E5",
    weekAbbreviation: "\u5468",
    yearAriaLabel: "\u5E74",
    monthAriaLabel: "\u6708",
    confirm: "\u786E\u5B9A",
    selectTime: "\u9009\u62E9\u65F6\u95F4",
    selectDate: "\u9009\u62E9\u65E5\u671F",
    nextYear: "\u4E0B\u4E00\u5E74",
    preYear: "\u4E0A\u4E00\u5E74",
    nextMonth: "\u4E0B\u4E2A\u6708",
    preMonth: "\u4E0A\u4E2A\u6708",
    preDecade: "\u4E0A\u4E2A\u5341\u5E74",
    nextDecade: "\u4E0B\u4E2A\u5341\u5E74",
    now: "\u5F53\u524D",
  },
  upload: {
    sizeLimitMessage:
      "\u56FE\u7247\u5927\u5C0F\u4E0D\u80FD\u8D85\u8FC7 {sizeLimit}",
    cancelUploadText: "\u53D6\u6D88\u4E0A\u4F20",
    triggerUploadText: {
      fileInput: "\u9009\u62E9\u6587\u4EF6",
      image: "\u70B9\u51FB\u4E0A\u4F20\u56FE\u7247",
      normal: "\u70B9\u51FB\u4E0A\u4F20",
      reupload: "\u91CD\u65B0\u4E0A\u4F20",
      continueUpload: "\u7EE7\u7EED\u4E0A\u4F20",
      delete: "\u5220\u9664",
    },
    dragger: {
      dragDropText: "\u91CA\u653E\u9F20\u6807",
      draggingText: "\u62D6\u62FD\u5230\u6B64\u533A\u57DF",
      clickAndDragText:
        "\u70B9\u51FB\u4E0A\u65B9\u201C\u9009\u62E9\u6587\u4EF6\u201D\u6216\u5C06\u6587\u4EF6\u62D6\u62FD\u5230\u6B64\u533A\u57DF",
    },
    file: {
      fileNameText: "\u6587\u4EF6\u540D",
      fileSizeText: "\u6587\u4EF6\u5927\u5C0F",
      fileStatusText: "\u72B6\u6001",
      fileOperationText: "\u64CD\u4F5C",
      fileOperationDateText: "\u4E0A\u4F20\u65E5\u671F",
    },
    progress: {
      uploadingText: "\u4E0A\u4F20\u4E2D",
      waitingText: "\u5F85\u4E0A\u4F20",
      failText: "\u4E0A\u4F20\u5931\u8D25",
      successText: "\u4E0A\u4F20\u6210\u529F",
    },
  },
  form: {
    errorMessage: {
      date: "\u8BF7\u8F93\u5165\u6B63\u786E\u7684${name}",
      url: "\u8BF7\u8F93\u5165\u6B63\u786E\u7684${name}",
      required: "${name}\u5FC5\u586B",
      max: "${name}\u5B57\u7B26\u957F\u5EA6\u4E0D\u80FD\u8D85\u8FC7 ${validate} \u4E2A\u5B57\u7B26\uFF0C\u4E00\u4E2A\u4E2D\u6587\u7B49\u4E8E\u4E24\u4E2A\u5B57\u7B26",
      min: "${name}\u5B57\u7B26\u957F\u5EA6\u4E0D\u80FD\u5C11\u4E8E ${validate} \u4E2A\u5B57\u7B26\uFF0C\u4E00\u4E2A\u4E2D\u6587\u7B49\u4E8E\u4E24\u4E2A\u5B57\u7B26",
      len: "${name}\u5B57\u7B26\u957F\u5EA6\u5FC5\u987B\u662F ${validate}",
      enum: "${name}\u53EA\u80FD\u662F${validate}\u7B49",
      idcard: "\u8BF7\u8F93\u5165\u6B63\u786E\u7684${name}",
      telnumber: "\u8BF7\u8F93\u5165\u6B63\u786E\u7684${name}",
      pattern: "\u8BF7\u8F93\u5165\u6B63\u786E\u7684${name}",
      validator: "${name}\u4E0D\u7B26\u5408\u8981\u6C42",
      boolean:
        "${name}\u6570\u636E\u7C7B\u578B\u5FC5\u987B\u662F\u5E03\u5C14\u7C7B\u578B",
      number: "${name}\u5FC5\u987B\u662F\u6570\u5B57",
    },
  },
  input: {
    placeholder: "\u8BF7\u8F93\u5165",
  },
  list: {
    loadingText: "\u6B63\u5728\u52A0\u8F7D\u4E2D\uFF0C\u8BF7\u7A0D\u7B49",
    loadingMoreText: "\u70B9\u51FB\u52A0\u8F7D\u66F4\u591A",
  },
  alert: {
    expandText: "\u5C55\u5F00\u66F4\u591A",
    collapseText: "\u6536\u8D77",
  },
  anchor: {
    copySuccessText: "\u94FE\u63A5\u590D\u5236\u6210\u529F",
    copyText: "\u590D\u5236\u94FE\u63A5",
  },
  colorPicker: {
    swatchColorTitle: "\u7CFB\u7EDF\u9884\u8BBE\u989C\u8272",
    recentColorTitle: "\u6700\u8FD1\u4F7F\u7528\u989C\u8272",
    clearConfirmText:
      "\u786E\u5B9A\u6E05\u7A7A\u6700\u8FD1\u4F7F\u7528\u7684\u989C\u8272\u5417\uFF1F",
  },
};

export default {
  common: {
    logout: "چېكىنىش",
  },
  routes: {
    dashboard: "باشقۇرۇش سۇپىسى",
    user: "ئابونت",
    userManagement: "ئابونت باشقۇرۇش",
    roleManagement: "رول باشقۇرۇش",
  },
  login: {
    title: "Yili Admin كىرىش",
    username: {
      placeholder: "ئ‍ابونت نامىنى كىرگۈزۈڭ",
    },
    password: {
      placeholder: "پارولنى كىرگۈزۈڭ",
    },
    button: "كىرىش",
  },
  dashboard: {
    infoCard: {
      userIncrease: "يېڭى ئابونت",
      userIncreaseUnit: "نەپەر",
      todayMessages: "بۈگۈنكى ئۇچۇرلار",
      todayMessagesUnit: "پارچە",
      income: "كىرىم",
      incomeUnit: "يۈەن",
      orderCount: "زاكاس سانى",
      orderCountUnit: "تال",
    },
    radarChart: {
      dataType: {
        ideal: "كۆڭۈلدىكىدەك",
        actual: "ئەمەلىيەت",
      },
      factor: {
        technical: "تېخنىكا ئقتىدارى",
        communication: "پىكىر ئالماشتۇرۇش ئقتىدارى",
        management: "باشقۇرۇش ئىقتىدارى",
        productThinking: "مەھسۇلات تەپەككۇرى",
        practicalExperience: "ئەمەلىي جەڭ تەجىربىسى",
      },
    },
  },
  user: {
    management: {
      createBtn: "ئابونت قۇرۇش",
      search: {
        username: {
          placeholder: "ئابونت نامىنى كىرگۈزۈپ ئىزدەڭ",
        },
      },
      table: {
        username: "ئابونت نامى",
        nickname: "تەخەللۇسى",
        roles: "رولى",
      },
    },
  },
  table: {
    operation: "مەشغۇلات",
  },
  edit: "تەھرىرلەش",

  week: {
    monday: "دۈشەنبە",
    tuesday: "سەيشەنبە",
    wednesday: "چارشەنبە",
    thursday: "پەيشەنبە",
    friday: "جۈمە",
    saturday: "شەنبە",
    sunday: "يەكشەنبە",
  },
  tDesignLang,
};
