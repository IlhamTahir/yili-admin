import{r as u,o as d,c as v,w as i,a as l,b as ae,M as G,d as I,e as D,f as F,g as re,h as E,u as le,i as ie,j as y,k as h,l as _,I as b,t as S,m as $,n as K,p as ue,q as ce,s as q,F as V,v as Y,x as de,y as _e,z as me,A as pe,B as fe,C as ge,D as he,E as ve,G as Ee,H as be}from"./vendor.db0a3e2e.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))a(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const r of o.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&a(r)}).observe(document,{childList:!0,subtree:!0});function n(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerpolicy&&(o.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?o.credentials="include":s.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(s){if(s.ep)return;s.ep=!0;const o=n(s);fetch(s.href,o)}})();const A=(e,t)=>{const n=e.__vccOpts||e;for(const[a,s]of t)n[a]=s;return n},ye={};function Le(e,t){const n=u("router-view"),a=u("t-config-provider");return d(),v(a,{"global-config":e.$tm("tDesignLang")},{default:i(()=>[l(n)]),_:1},8,["global-config"])}const we=A(ye,[["render",Le]]),Se="modulepreload",Ae=function(e){return"/yili-admin/"+e},H={},m=function(t,n,a){if(!n||n.length===0)return t();const s=document.getElementsByTagName("link");return Promise.all(n.map(o=>{if(o=Ae(o),o in H)return;H[o]=!0;const r=o.endsWith(".css"),p=r?'[rel="stylesheet"]':"";if(!!a)for(let c=s.length-1;c>=0;c--){const g=s[c];if(g.href===o&&(!r||g.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${o}"]${p}`))return;const f=document.createElement("link");if(f.rel=r?"stylesheet":Se,r||(f.as="script",f.crossOrigin=""),f.href=o,document.head.appendChild(f),r)return new Promise((c,g)=>{f.addEventListener("load",c),f.addEventListener("error",()=>g(new Error(`Unable to preload CSS for ${o}`)))})})).then(()=>t())},Re="https://yili-admin-api-17768-5-1308655658.sh.run.tcloudbase.com",L=ae.create({baseURL:Re,timeout:6e4}),Ce="Bearer ";L.interceptors.request.use(e=>{const t=R();return t.token&&e.headers&&(e.headers.Authorization=Ce+t.token),e});L.interceptors.response.use(e=>e.data,async e=>{var n,a,s;const t=(n=e.response)==null?void 0:n.data;return t&&await G.error(t.message),(((a=e.response)==null?void 0:a.status)===401||((s=e.response)==null?void 0:s.status)===403)&&await R().logout(),Promise.reject(e)});const ke=e=>L.post("/tokens",e),$e={createToken:ke},De=()=>L.get("/users/me"),Oe=e=>L.get("/users",{params:e}),Ie=e=>L.post("/users",e),Ue=(e,t)=>L.put(`/users/${e}`,t),Ne={me:De,list:Oe,create:Ie,edit:Ue},J=(e,t)=>e.filter(n=>(n.children&&(n.children=J(n.children,t)),!n.meta||n.meta&&(!n.meta.permission||n.meta.permission&&t.includes(n.meta.permission)))),Q=e=>{const t=[];return e.forEach(n=>{n.children&&t.push(...Q(n.children)),n.name&&t.push(n.name)}),t},x=I("permission",{state:()=>({routes:[]}),persist:!0,actions:{generateRoutes(e,t=!1){this.routes=t?B:J(B,e)}},getters:{menuRoutes(){var e;return(e=this.routes.find(t=>t.name===ee))==null?void 0:e.children},permissionRouteNamesList(){return this.routes?Q(this.routes):[]}}}),U=I("user",()=>{const e=D(null),t=async()=>{var o,r;e.value=await Ne.me(),x().generateRoutes((o=e.value)==null?void 0:o.permissions,s((r=e.value)==null?void 0:r.roles))},n=()=>{e.value=null},a=F(()=>{var r;const o=(r=e.value)==null?void 0:r.roles;return o&&s(o)}),s=o=>o.findIndex(r=>r.name==="ROLE_ADMIN")!==-1;return{currentUser:e,fetchCurrentUser:t,reset:n,isAdmin:a}},{persist:!0}),R=I("app",{state:()=>({token:"",menuCollapse:!1}),persist:!0,actions:{async login(e){this.token=await $e.createToken(e)},async logout(){const e=U();this.token="",e.reset()}}}),O=(e,t)=>{const n=e[t];return n?typeof n=="function"?n():Promise.resolve(n):new Promise((a,s)=>{(typeof queueMicrotask=="function"?queueMicrotask:setTimeout)(s.bind(null,new Error("Unknown variable dynamic import: "+t)))})};let w;const Pe=async e=>{const t=M(),n=await O(Object.assign({"../../lang/en-US.ts":()=>m(()=>import("./en-US.e0b4c9d2.js"),[]),"../../lang/ug-CN.ts":()=>m(()=>import("./ug-CN.c1cf77b2.js"),[]),"../../lang/zh-CN.ts":()=>m(()=>import("./zh-CN.125999b7.js"),["assets/zh-CN.125999b7.js","assets/vendor.db0a3e2e.js","assets/vendor.6e240bf4.css"])}),`../../lang/${t.currentLocale.locale}.ts`);O(Object.assign({"../../assets/less/lang/en-US.less":()=>m(()=>import("./en-US.70bb0c07.js"),[]),"../../assets/less/lang/ug-CN.less":()=>m(()=>Promise.resolve({}),["assets/ug-CN.ea7a2c2b.css"]),"../../assets/less/lang/zh-CN.less":()=>m(()=>import("./zh-CN.d899a10e.js"),[])}),`../../assets/less/lang/${t.currentLocale.locale}.less`),document.documentElement.setAttribute("lang",t.currentLocale.locale),w=re({legacy:!1,locale:t.currentLocale.locale,messages:{[t.currentLocale.locale]:n.default},availableLocales:t.availableLocales,sync:!0,silentTranslationWarn:!0,missingWarn:!1,silentFallbackWarn:!0}),e.use(w)},j={locale:"zh-CN",label:"\u7B80\u4F53\u4E2D\u6587",dir:"ltr"},M=I("locale",()=>{const e=D(j),t=D([{locale:"zh-CN",label:"\u7B80\u4F53\u4E2D\u6587",dir:"ltr"},{locale:"ug-CN",label:"\u0626\u064A\u063A\u06C7\u0631\u0686\u06D5",dir:"rtl"},{locale:"en-US",label:"English(USA)",dir:"ltr"}]),n=F(()=>t.value.map(s=>s.locale));return{currentLocale:e,availableLocaleMap:t,availableLocales:n,switchLocale:async s=>{e.value=t.value.find(p=>p.locale===s)||j;const o=w.global,r=await O(Object.assign({"../lang/en-US.ts":()=>m(()=>import("./en-US.e0b4c9d2.js"),[]),"../lang/ug-CN.ts":()=>m(()=>import("./ug-CN.c1cf77b2.js"),[]),"../lang/zh-CN.ts":()=>m(()=>import("./zh-CN.125999b7.js"),["assets/zh-CN.125999b7.js","assets/vendor.db0a3e2e.js","assets/vendor.6e240bf4.css"])}),`../lang/${s}.ts`);await O(Object.assign({"../assets/less/lang/en-US.less":()=>m(()=>import("./en-US.70bb0c07.js"),[]),"../assets/less/lang/ug-CN.less":()=>m(()=>Promise.resolve({}),["assets/ug-CN.ea7a2c2b.css"]),"../assets/less/lang/zh-CN.less":()=>m(()=>import("./zh-CN.d899a10e.js"),[])}),`../assets/less/lang/${s}.less`),document.documentElement.setAttribute("lang",s),o.setLocaleMessage(s,r.default),w.mode==="legacy"?w.global.locale=s:w.global.locale.value=s}}},{persist:!0}),Te={class:"login-container"},Ve={class:"content"},Be={class:"locale-icon"},Fe=E({__name:"index",setup(e){const{t}=le(),n=F(()=>({username:[{required:!0,message:t("login.username.required")}],password:[{required:!0,message:t("login.password.required")}]})),a=ie({username:"",password:""}),s=R(),o=U(),r=D(!1),p=K(),C=async({validateResult:c})=>{if(c===!0){r.value=!0;try{await s.login(a),await o.fetchCurrentUser(),await G.success(t("login.successMessage")),await p.push({name:"dashboard"})}finally{r.value=!1}}},f=c=>{M().switchLocale(c.value)};return(c,g)=>{const N=u("t-dropdown"),z=u("t-input"),P=u("t-form-item"),ne=u("t-button"),se=u("t-form"),oe=u("t-card");return d(),y("div",Te,[h("div",Ve,[l(oe,null,{default:i(()=>[h("div",Be,[l(N,{options:[{content:"\u4E2D\u6587",value:"zh-CN"},{content:"English",value:"en-US"},{content:"\u0626\u06C7\u064A\u063A\u06C7\u0631\u0686\u06D5",value:"ug-CN"}],trigger:"click",onClick:f,placement:"bottom"},{default:i(()=>[l(_(b),{name:"internet"})]),_:1})]),h("h1",null,S(c.$t("login.title")),1),l(se,{ref:"form",data:a,rules:_(n),class:"login-form",colon:!0,"label-width":0,onSubmit:C},{default:i(()=>[l(P,{name:"username"},{default:i(()=>[l(z,{modelValue:a.username,"onUpdate:modelValue":g[0]||(g[0]=T=>a.username=T),clearable:"",placeholder:c.$t("login.username.placeholder")},{"prefix-icon":i(()=>[l(_(b),{name:"desktop"})]),_:1},8,["modelValue","placeholder"])]),_:1}),l(P,{name:"password"},{default:i(()=>[l(z,{modelValue:a.password,"onUpdate:modelValue":g[1]||(g[1]=T=>a.password=T),type:"password",clearable:"",placeholder:c.$t("login.password.placeholder")},{"prefix-icon":i(()=>[l(_(b),{name:"lock-on"})]),_:1},8,["modelValue","placeholder"])]),_:1}),l(P,{style:{"padding-top":"8px"}},{default:i(()=>[l(ne,{theme:"primary",type:"submit",block:"",loading:r.value},{default:i(()=>[$(S(c.$t("login.button")),1)]),_:1},8,["loading"])]),_:1})]),_:1},8,["data","rules"])]),_:1})])])}}});const xe=A(Fe,[["__scopeId","data-v-11c49c54"]]),Me=E({__name:"CollapseButton",props:{collapse:{type:Boolean,required:!0}},emits:["update:collapse"],setup(e){return(t,n)=>(d(),y("div",{class:ue(["collapse-button",{collapse:!e.collapse}]),onClick:n[0]||(n[0]=a=>t.$emit("update:collapse",!e.collapse))},null,2))}});const ze=A(Me,[["__scopeId","data-v-bdf185ec"]]),qe={class:"operation-area"},He=E({__name:"header",setup(e){const t=U(),n=R(),a=K(),s=ce(),o=async({value:p})=>{switch(p){case"logout":await n.logout(),await a.push({name:"login",params:{redirect:s.fullPath}});break}},r=p=>{M().switchLocale(p.value)};return(p,C)=>{const f=u("t-button"),c=u("t-dropdown"),g=u("t-header");return d(),v(g,{class:"header"},{default:i(()=>[l(ze,{collapse:_(n).menuCollapse,"onUpdate:collapse":C[0]||(C[0]=N=>_(n).menuCollapse=N)},null,8,["collapse"]),h("div",qe,[l(c,{options:[{content:"\u4E2D\u6587",value:"zh-CN"},{content:"English",value:"en-US"},{content:"\u0626\u06C7\u064A\u063A\u06C7\u0631\u0686\u06D5",value:"ug-CN"}],trigger:"click",onClick:r,placement:"bottom"},{default:i(()=>[l(f,{variant:"text"},{icon:i(()=>[l(_(b),{name:"internet"})]),_:1})]),_:1}),l(c,{options:[{content:p.$t("common.logout"),value:"logout"}],"min-column-width":112,onClick:o},{default:i(()=>[l(f,{variant:"text"},{icon:i(()=>[l(_(b),{name:"user"})]),default:i(()=>[$(" "+S(_(t).currentUser&&_(t).currentUser.nickname),1)]),_:1})]),_:1},8,["options"])])]),_:1})}}});const je=A(He,[["__scopeId","data-v-afe45239"]]),We=E({__name:"SidebarItem",props:{item:{type:Object,default:null}},setup(e){return(t,n)=>{const a=u("t-menu-item"),s=u("sidebar-item",!0),o=u("t-submenu");return d(),y(V,null,[e.item&&!e.item.children?(d(),v(a,{key:0,value:e.item.name,to:{name:e.item.name}},{icon:i(()=>[l(_(b),{name:e.item.meta.icon},null,8,["name"])]),default:i(()=>[$(" "+S(t.$t(e.item.meta.title)),1)]),_:1},8,["value","to"])):q("",!0),e.item&&e.item.children?(d(),v(o,{key:1,value:e.item.name,title:t.$t(e.item.meta.title)},{icon:i(()=>[l(_(b),{name:e.item.meta.icon},null,8,["name"])]),default:i(()=>[(d(!0),y(V,null,Y(e.item.children,r=>(d(),v(s,{key:r.name,item:r},null,8,["item"]))),128))]),_:1},8,["value","title"])):q("",!0)],64)}}}),Ge=E({__name:"sidebar",setup(e){const t=R(),n=x();return(a,s)=>{const o=u("t-menu"),r=u("t-aside");return d(),v(r,{width:_(t).menuCollapse?"64px":"232px"},{default:i(()=>[l(o,{collapsed:_(t).menuCollapse,defaultValue:a.$route.name},{default:i(()=>[(d(!0),y(V,null,Y(_(n).menuRoutes,p=>(d(),v(We,{key:p.name,item:p},null,8,["item"]))),128))]),_:1},8,["collapsed","defaultValue"])]),_:1},8,["width"])}}}),Ke=E({__name:"layout",setup(e){return(t,n)=>{const a=u("router-view"),s=u("t-content"),o=u("t-footer"),r=u("t-layout");return d(),y("div",null,[l(r,{class:"main-layout"},{default:i(()=>[l(Ge),l(r,null,{default:i(()=>[l(je),l(s,{class:"content-layout"},{default:i(()=>[l(a)]),_:1}),l(o,{style:{"text-align":"center"}},{default:i(()=>[$("Copyright @ 2021-2022 YiliAdmin.")]),_:1})]),_:1})]),_:1})])}}});const Ye=A(Ke,[["__scopeId","data-v-8a3c8f81"]]),X="/yili-admin/assets/not-found.c2e9c2e1.png",Je={class:"main"},Qe={class:"content"},Xe=h("img",{src:X},null,-1),Ze={class:"info"},et={class:"title"},tt={class:"description"},Z=E({__name:"ErrorPage",props:{title:{default:"\u672A\u77E5\u9519\u8BEF"},description:{default:"\u6682\u65F6\u65E0\u6CD5\u627E\u5230\u9519\u8BEF\u539F\u56E0"}},setup(e){return(t,n)=>{const a=u("t-button");return d(),y("div",Je,[h("div",Qe,[de(t.$slots,"image",{},()=>[Xe]),h("div",Ze,[h("h1",et,S(e.title),1),h("h2",tt,S(e.description),1),l(a,{onClick:n[0]||(n[0]=s=>t.$router.replace({path:"/"}))},{default:i(()=>[$("\u8FD4\u56DE\u9996\u9875")]),_:1})])])])}}});const nt=h("img",{src:X},null,-1),st=E({__name:"not-found",setup(e){return(t,n)=>(d(),v(Z,{title:t.$t("errorPage.notFound.title"),description:t.$t("errorPage.notFound.description")},{image:i(()=>[nt]),_:1},8,["title","description"]))}}),ot="/yili-admin/assets/not-allowed.95b00d4e.png",at=h("img",{src:ot},null,-1),rt=E({__name:"not-allowed",setup(e){return(t,n)=>(d(),v(Z,{title:t.$t("errorPage.notAllowed.title"),description:t.$t("errorPage.notAllowed.description")},{image:i(()=>[at]),_:1},8,["title","description"]))}}),lt={};function it(e,t){const n=u("router-view");return d(),v(n)}const ut=A(lt,[["render",it]]);var k=(e=>(e.DASHBOARD="dashboard",e.USER="user",e.USER_LIST="user:list",e.USER_LIST_CREATE="user:list:create",e.USER_LIST_EDIT="user:list:edit",e.USER_ROLES="user:roles",e.USER_ROLES_CREATE="user:roles:create",e.USER_ROLES_EDIT="user:roles:edit",e))(k||{});const pt=[{label:"\u63A7\u5236\u53F0",value:"dashboard"},{label:"\u7528\u6237",value:"user",children:[{label:"\u7528\u6237\u7BA1\u7406",value:"user:list",children:[{label:"\u7528\u6237\u521B\u5EFA",value:"user:list:create"},{label:"\u7528\u6237\u7F16\u8F91",value:"user:list:edit"}]},{label:"\u89D2\u8272\u7BA1\u7406",value:"user:roles",children:[{label:"\u89D2\u8272\u521B\u5EFA",value:"user:roles:create"},{label:"\u89D2\u8272\u7F16\u8F91",value:"user:roles:edit"}]}]}],ee="menuRoot",B=[{path:"/",name:ee,component:Ye,redirect:"dashboard",children:[{name:"dashboard",path:"dashboard",component:()=>m(()=>import("./index.23bf1593.js"),["assets/index.23bf1593.js","assets/vendor.db0a3e2e.js","assets/vendor.6e240bf4.css","assets/useI18n.d1638193.js","assets/index.d43e5ad9.css"]),meta:{permission:k.DASHBOARD,title:"routes.dashboard",icon:"dashboard"}},{name:"user",path:"user",component:ut,meta:{title:"routes.user",icon:"usergroup",permission:k.USER},redirect:{name:"user-list"},children:[{name:"user-list",path:"list",component:()=>m(()=>import("./index.91cb0680.js"),["assets/index.91cb0680.js","assets/useEditDialog.d46c8dd9.js","assets/vendor.db0a3e2e.js","assets/vendor.6e240bf4.css","assets/useI18n.d1638193.js"]),meta:{title:"routes.userManagement",icon:"user",permission:k.USER_LIST}},{name:"role-list",path:"roles",component:()=>m(()=>import("./roles.cda6a5d6.js"),["assets/roles.cda6a5d6.js","assets/useEditDialog.d46c8dd9.js","assets/vendor.db0a3e2e.js","assets/vendor.6e240bf4.css","assets/useI18n.d1638193.js"]),meta:{title:"routes.roleManagement",permission:k.USER_ROLES,icon:"secured"}}]}]},{path:"/login",name:"login",component:xe},{path:"/403",name:"not-allowed",component:rt},{path:"/:pathMatch(.*)*",name:"not-found",component:st}],te=_e({history:me(),strict:!0,routes:B,scrollBehavior:()=>({left:0,top:0})}),W=["login","not-found","not-allowed"];te.beforeEach((e,t,n)=>{const a=R();if(a.token||(W.indexOf(e.name)!==-1?n():n(`/login?redirect=${e.path}`)),a.token&&e.path==="/login"&&n({name:"dashboard"}),e.name){const o=!x().permissionRouteNamesList.includes(e.name);a.token&&o&&W.indexOf(e.name)!==-1&&n({name:"not-allowed"})}n()});const ct=e=>{var n;const t=U();return!t.isAdmin&&((n=t.currentUser)==null?void 0:n.permissions.indexOf(e))===-1},dt={mounted(e,{value:t}){var n;ct(t)&&((n=e.parentNode)==null||n.removeChild(e))}},_t=async()=>{const e=pe(we),t=fe();t.use(ge),e.use(t),await Pe(e),e.use(te),e.use(he),e.use(ve,{echarts:Ee,h:be}),e.directive("permission",dt),e.mount("#app")};_t();export{k as P,A as _,L as a,w as i,pt as p,Ne as u};
