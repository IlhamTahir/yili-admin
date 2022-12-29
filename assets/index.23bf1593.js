import{h as p,r as n,o as d,c as m,w as t,k as r,t as l,m as x,a as e,l as s,I as k,J as v,f as u,j as w,v as I,F as B}from"./vendor.db0a3e2e.js";import{_ as S}from"./index.c88cb4e4.js";import{u as T}from"./useI18n.d1638193.js";const $={class:"header"},F={class:"info"},U={class:"number"},A={class:"unit"},L=p({__name:"InfoCard",props:{info:null},setup(o){return(a,f)=>{const i=n("t-card");return d(),m(i,{class:"info-card",size:"medium",style:v(`--info-card-primary-color: ${o.info.color}`),bordered:!1},{header:t(()=>[r("div",$,l(a.$t(o.info.title)),1)]),default:t(()=>[r("div",F,[r("div",U,[x(l(o.info.number.toLocaleString()),1),r("span",A,l(a.$t(o.info.unit)),1)]),e(s(k),{class:"icon",name:o.info.icon},null,8,["name"])])]),_:1},8,["style"])}}});const N=S(L,[["__scopeId","data-v-8b8eb9a8"]]),V={style:{height:"500px"}},z={style:{height:"500px"}},J=p({__name:"index",setup(o){const{t:a}=T(),f=u(()=>[{icon:"user",title:"dashboard.infoCard.userIncrease",color:"#40c9c6",number:195,unit:"dashboard.infoCard.userIncreaseUnit"},{icon:"chat",title:"dashboard.infoCard.todayMessages",color:"#36a3f7",number:99,unit:"dashboard.infoCard.todayMessagesUnit"},{icon:"money-circle",title:"dashboard.infoCard.income",color:"#f4516c",number:365454,unit:"dashboard.infoCard.incomeUnit"},{icon:"cart",title:"dashboard.infoCard.orderCount",color:"#34bfa3",number:195,unit:"dashboard.infoCard.orderCountUnit"}]),i=u(()=>({tooltip:{trigger:"axis",axisPointer:{type:"cross",label:{backgroundColor:"#6a7985"}}},legend:{data:["w","d","b"]},toolbox:{feature:{saveAsImage:{}}},grid:{left:"3%",right:"4%",bottom:"3%",containLabel:!0},xAxis:[{type:"category",boundaryGap:!1,data:[a("week.monday"),a("week.tuesday"),a("week.wednesday"),a("week.thursday"),a("week.friday"),a("week.saturday"),a("week.sunday")]}],yAxis:[{type:"value"}],series:[{name:"w",type:"line",stack:"\u603B\u91CF",areaStyle:{},data:[120,132,101,134,90,230,210]},{name:"d",type:"line",stack:"\u603B\u91CF",areaStyle:{},data:[220,182,191,234,290,330,310]},{name:"b",type:"line",stack:"\u603B\u91CF",areaStyle:{},data:[150,232,201,154,190,330,410]}]})),b=u(()=>({legend:{data:[a("dashboard.radarChart.dataType.ideal"),a("dashboard.radarChart.dataType.actual")]},radar:{indicator:[{name:a("dashboard.radarChart.factor.technical"),max:10},{name:a("dashboard.radarChart.factor.communication"),max:10},{name:a("dashboard.radarChart.factor.management"),max:10},{name:a("dashboard.radarChart.factor.productThinking"),max:10},{name:a("dashboard.radarChart.factor.practicalExperience"),max:10}]},series:[{name:"Budget vs spending",type:"radar",data:[{value:[10,10,10,10,10,10],name:a("dashboard.radarChart.dataType.ideal")},{value:[5,5,3,1,5,1],name:a("dashboard.radarChart.dataType.actual")}]}]}));return(E,M)=>{const c=n("t-col"),_=n("e-charts"),h=n("t-card"),y=n("t-row");return d(),m(y,{gutter:[16,16]},{default:t(()=>[(d(!0),w(B,null,I(s(f),(C,g)=>(d(),m(c,{key:g,span:3},{default:t(()=>[e(N,{info:C},null,8,["info"])]),_:2},1024))),128)),e(c,{span:7},{default:t(()=>[e(h,{bordered:!1},{default:t(()=>[r("div",V,[e(_,{option:s(i)},null,8,["option"])])]),_:1})]),_:1}),e(c,{span:5},{default:t(()=>[e(h,{bordered:!1},{default:t(()=>[r("div",z,[e(_,{option:s(b)},null,8,["option"])])]),_:1})]),_:1})]),_:1})}}});export{J as default};