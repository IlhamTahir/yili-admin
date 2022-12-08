<template>
  <t-row :gutter="[16, 16]">
    <t-col v-for="(infoCard, index) in infoCards" :key="index" :span="3">
      <info-card :info="infoCard"></info-card>
    </t-col>
    <t-col :span="8">
      <t-card :bordered="false">
        <div style="height: 500px">
          <e-charts :option="options"></e-charts>
        </div>
      </t-card>
    </t-col>

    <t-col :span="4">
      <t-card :bordered="false">
        <div style="height: 500px">
          <e-charts :option="options2"></e-charts>
        </div>
      </t-card>
    </t-col>
  </t-row>
</template>

<script lang="ts" setup>
import InfoCard from "@/components/InfoCard.vue";
import { i18n } from "@/plugins/i18n";

const infoCards = [
  {
    icon: "user",
    title: "dashboard.infoCard.userIncrease",
    color: "#40c9c6",
    number: 195,
    unit: "dashboard.infoCard.userIncreaseUnit",
  },
  {
    icon: "chat",
    title: "dashboard.infoCard.todayMessages",
    color: "#36a3f7",
    number: 99,
    unit: "dashboard.infoCard.todayMessagesUnit",
  },
  {
    icon: "money-circle",
    title: "dashboard.infoCard.income",
    color: "#f4516c",
    number: 365454,
    unit: "dashboard.infoCard.incomeUnit",
  },
  {
    icon: "cart",
    title: "dashboard.infoCard.orderCount",
    color: "#34bfa3",
    number: 195,
    unit: "dashboard.infoCard.orderCountUnit",
  },
];
const options = {
  tooltip: {
    trigger: "axis",
    axisPointer: {
      type: "cross",
      label: {
        backgroundColor: "#6a7985",
      },
    },
  },
  legend: {
    data: ["w", "d", "b"],
  },
  toolbox: {
    feature: {
      saveAsImage: {},
    },
  },
  grid: {
    left: "3%",
    right: "4%",
    bottom: "3%",
    containLabel: true,
  },
  xAxis: [
    {
      type: "category",
      boundaryGap: false,
      data: ["周一", "周二", "周三", "周四", "周五", "周六", "周日"],
    },
  ],
  yAxis: [
    {
      type: "value",
    },
  ],
  series: [
    {
      name: "w",
      type: "line",
      stack: "总量",
      areaStyle: {},
      data: [120, 132, 101, 134, 90, 230, 210],
    },
    {
      name: "d",
      type: "line",
      stack: "总量",
      areaStyle: {},
      data: [220, 182, 191, 234, 290, 330, 310],
    },
    {
      name: "b",
      type: "line",
      stack: "总量",
      areaStyle: {},
      data: [150, 232, 201, 154, 190, 330, 410],
    },
  ],
};

const options2 = {
  legend: {
    data: [i18n.global.t("理想分布"), "实际分布"],
  },
  radar: {
    // shape: 'circle',
    indicator: [
      { name: "技术能力", max: 10 },
      { name: "沟通能力", max: 10 },
      { name: "管理能力", max: 10 },
      { name: "产品思维", max: 10 },
      { name: "实战经验", max: 10 },
    ],
  },
  series: [
    {
      name: "Budget vs spending",
      type: "radar",
      data: [
        {
          value: [10, 10, 10, 10, 10, 10],
          name: "理想分布",
        },
        {
          value: [5, 5, 3, 1, 5, 1],
          name: "实际分布",
        },
      ],
    },
  ],
};
</script>

<style scoped></style>
