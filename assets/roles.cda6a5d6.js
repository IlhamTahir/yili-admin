import{a as D,p as O,P as U}from"./index.c88cb4e4.js";import{a as z,u as G}from"./useEditDialog.d46c8dd9.js";import{u as q}from"./useI18n.d1638193.js";import{h as A,f as w,e as B,K as H,c as h,w as s,l as e,r,o as g,a as l,s as I,i as J,j as M,F as Q,k as K,L as S,m as N,t as P,I as R,N as W}from"./vendor.db0a3e2e.js";const X=i=>D.get("/roles",{params:i}),Y=i=>D.post("/roles",i),Z=(i,d)=>D.put(`/roles/${i}`,d),L={list:X,create:Y,edit:Z},x=A({__name:"role-edit-dialog",props:{show:{type:Boolean,default:!1},data:null},emits:["close","confirm"],setup(i,{emit:d}){const f=i,{t:u}=q(),C=w(()=>({name:[{required:!0,message:u("role.management.dialog.name.required"),trigger:"blur"}]})),v={id:"",name:"",label:"",permissions:[]},a=B(f.data||v);H(f,o=>{a.value=o.data||v});const V=w(()=>f.show),$=B(null),k=()=>{d("confirm",a.value)};return(o,t)=>{const _=r("t-input"),b=r("t-form-item"),y=r("t-tree"),p=r("t-form"),m=r("t-dialog");return g(),h(m,{ref:"dialog",width:"900px",visible:e(V),header:a.value.id?o.$t("role.management.dialog.editTitle"):o.$t("role.management.dialog.createTitle"),onClose:t[3]||(t[3]=n=>o.$emit("close")),onConfirm:k},{default:s(()=>[l(p,{ref_key:"form",ref:$,class:"dialog-form",data:a.value,rules:e(C)},{default:s(()=>[l(b,{label:o.$t("role.management.dialog.name.label"),name:"name"},{default:s(()=>[a.value.id?(g(),h(_,{key:0,disabled:"",value:a.value.name},null,8,["value"])):I("",!0),a.value.id?I("",!0):(g(),h(_,{key:1,placeholder:o.$t("role.management.dialog.name.placeholder"),modelValue:a.value.name,"onUpdate:modelValue":t[0]||(t[0]=n=>a.value.name=n)},null,8,["placeholder","modelValue"]))]),_:1},8,["label"]),l(b,{label:o.$t("role.management.dialog.label.label"),name:"label"},{default:s(()=>[l(_,{placeholder:o.$t("role.management.dialog.label.placeholder"),modelValue:a.value.label,"onUpdate:modelValue":t[1]||(t[1]=n=>a.value.label=n)},null,8,["placeholder","modelValue"])]),_:1},8,["label"]),l(b,{label:o.$t("role.management.dialog.permissions.label"),name:"permissions"},{default:s(()=>[l(y,{data:e(O),hover:"","expand-all":"",checkable:!0,"value-mode":"all",modelValue:a.value.permissions,"onUpdate:modelValue":t[2]||(t[2]=n=>a.value.permissions=n)},null,8,["data","modelValue"])]),_:1},8,["label"])]),_:1},8,["data","rules"])]),_:1},8,["visible","header"])}}}),ee={class:"action-area"},ae={class:"search-area"},re=A({__name:"roles",setup(i){const{t:d}=q(),f=w(()=>[{colKey:"id",title:"ID"},{colKey:"name",title:d("role.management.table.name")},{colKey:"label",title:d("role.management.table.label")},{colKey:"operation",title:d("table.operation")}]),u=J({name:"",label:""}),{showDialog:C,editData:v,handleCreate:a,onDialogClose:V,handleEdit:$,handleConfirm:k}=z(L),{data:o,fetchData:t,pagination:_,loading:b,onPageChange:y}=G(L,u);return(p,m)=>{const n=r("t-button"),E=r("t-input"),F=r("t-table"),j=r("t-card"),T=W("permission");return g(),M(Q,null,[l(j,null,{default:s(()=>[K("div",ee,[S((g(),h(n,{onClick:e(a)},{default:s(()=>[N(P(p.$t("role.management.createBtn")),1)]),_:1},8,["onClick"])),[[T,e(U).USER_ROLES_CREATE]])]),K("div",ae,[l(E,{class:"search-input",modelValue:u.name,"onUpdate:modelValue":m[0]||(m[0]=c=>u.name=c),placeholder:p.$t("role.management.search.name.placeholder")},null,8,["modelValue","placeholder"]),l(E,{class:"search-input",modelValue:u.label,"onUpdate:modelValue":m[1]||(m[1]=c=>u.label=c),placeholder:p.$t("role.management.search.name.placeholder")},null,8,["modelValue","placeholder"]),l(n,{onClick:e(t)},{icon:s(()=>[l(e(R),{name:"search"})]),_:1},8,["onClick"])]),l(F,{loading:e(b),"row-key":"index",columns:e(f),data:e(o),pagination:e(_),onPageChange:e(y)},{operation:s(c=>[S((g(),h(n,{variant:"text",theme:"primary",onClick:le=>e($)(c)},{default:s(()=>[l(e(R),{name:"edit"}),N(" "+P(p.$t("edit")),1)]),_:2},1032,["onClick"])),[[T,e(U).USER_LIST_EDIT]])]),_:1},8,["loading","columns","data","pagination","onPageChange"])]),_:1}),l(x,{show:e(C),data:e(v),onClose:e(V),onConfirm:m[2]||(m[2]=c=>e(k)(c,e(t)))},null,8,["show","data","onClose"])],64)}}});export{re as default};