<template>
  <t-row :gutter="[16, 16]">
    <t-col v-for="(infoCard, index) in infoCards" :key="index" :span="3">
      <info-card :info="infoCard"></info-card>
    </t-col>
    <t-col :span="7">
      <t-card :bordered="false">
        <div style="height: 500px">
          <e-charts :option="options"></e-charts>
        </div>
      </t-card>
    </t-col>

    <t-col :span="5">
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

import { useI18n } from "@/composables/useI18n";
import { computed } from "vue";

const { t } = useI18n();
const infoCards = computed(() => [
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
]);
const options = computed(() => {
  return {
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
        data: [
          t("week.monday"),
          t("week.tuesday"),
          t("week.wednesday"),
          t("week.thursday"),
          t("week.friday"),
          t("week.saturday"),
          t("week.sunday"),
        ],
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
});

const options2 = computed(() => {
  return {
    legend: {
      data: [
        t("dashboard.radarChart.dataType.ideal"),
        t("dashboard.radarChart.dataType.actual"),
      ],
    },
    radar: {
      // shape: 'circle',
      indicator: [
        { name: t("dashboard.radarChart.factor.technical"), max: 10 },
        { name: t("dashboard.radarChart.factor.communication"), max: 10 },
        { name: t("dashboard.radarChart.factor.management"), max: 10 },
        { name: t("dashboard.radarChart.factor.productThinking"), max: 10 },
        { name: t("dashboard.radarChart.factor.practicalExperience"), max: 10 },
      ],
    },
    series: [
      {
        name: "Budget vs spending",
        type: "radar",
        data: [
          {
            value: [10, 10, 10, 10, 10, 10],
            name: t("dashboard.radarChart.dataType.ideal"),
          },
          {
            value: [5, 5, 3, 1, 5, 1],
            name: t("dashboard.radarChart.dataType.actual"),
          },
        ],
      },
    ],
  };
});
</script>

<style scoped></style>
