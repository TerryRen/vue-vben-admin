var x=(s,l,p)=>new Promise((_,m)=>{var d=t=>{try{u(p.next(t))}catch(o){m(o)}},n=t=>{try{u(p.throw(t))}catch(o){m(o)}},u=t=>t.done?_(t.value):Promise.resolve(t.value).then(d,n);u((p=p.apply(s,l)).next())});import{_ as b}from"./BasicForm.vue_vue_type_script_setup_true_lang-wSyCYOUG.js";import"./BasicForm.vue_vue_type_style_index_0_lang-BNL5AsEG.js";import"./componentMap-BkO7yibD.js";import{u as y}from"./useForm-DxRP39cz.js";import{step1Schemas as B}from"./data-CaNweXRQ.js";import{E as I,W as h,a4 as w}from"./antd-BS7GgtZr.js";import{d as C,a7 as O,Z as U,_ as g,$ as i,k as e,a9 as r,u as a,G as S,a2 as k,a3 as F}from"./vue-COhTiP8A.js";import{c as N}from"./entry/index-C24idMx3-1709028881000.js";import"./FormItem.vue_vue_type_script_lang-DS-0MjtS.js";import"./helper-DExz0Pdl.js";import"./index-C5L-0YCp.js";import"./useWindowSizeFn-kpjxC-Kh.js";import"./useFormItem-CGQuU2J0.js";import"./RadioButtonGroup.vue_vue_type_script_setup_true_lang-BKM1W9OO.js";import"./uuid-D0SLUWHI.js";import"./useSortable-xu3PAa4T.js";import"./download-lIRuXSoC.js";import"./base64Conver-bBv-IO2K.js";import"./index-kdTdygKV.js";import"./IconPicker.vue_vue_type_script_setup_true_lang-DPDMQ3vz.js";import"./copyTextToClipboard-YrNkOw48.js";import"./index-zWgpO0cU.js";import"./index-DrPgDRM8.js";const c=s=>(k("data-v-b0796100"),s=s(),F(),s),R={class:"step1"},V={class:"step1-form"},E=c(()=>i("h3",null,"说明",-1)),G=c(()=>i("h4",null,"转账到支付宝账户",-1)),W=c(()=>i("p",null," 如果需要，这里可以放一些关于产品的常见问题说明。如果需要，这里可以放一些关于产品的常见问题说明。如果需要，这里可以放一些关于产品的常见问题说明。 ",-1)),$=c(()=>i("h4",null,"转账到银行卡",-1)),z=c(()=>i("p",null," 如果需要，这里可以放一些关于产品的常见问题说明。如果需要，这里可以放一些关于产品的常见问题说明。如果需要，这里可以放一些关于产品的常见问题说明。 ",-1)),D=C({__name:"Step1",emits:["next"],setup(s,{emit:l}){const p=l,[_,{validate:m}]=y({labelWidth:100,schemas:B,actionColOptions:{span:14},showResetButton:!1,submitButtonOptions:{text:"下一步"},submitFunc:d});function d(){return x(this,null,function*(){try{const n=yield m();p("next",n)}catch(n){}})}return(n,u)=>{const t=O("a-input");return U(),g("div",R,[i("div",V,[e(a(b),{onRegister:a(_)},{fac:r(({model:o,field:v})=>[e(a(I).Group,{compact:""},{default:r(()=>[e(a(h),{value:o.pay,"onUpdate:value":f=>o.pay=f,class:"pay-select"},{default:r(()=>[e(a(h).Option,{value:"zfb"},{default:r(()=>[S(" 支付宝 ")]),_:1}),e(a(h).Option,{value:"yl"},{default:r(()=>[S(" 银联 ")]),_:1})]),_:2},1032,["value","onUpdate:value"]),e(t,{class:"pay-input",value:o[v],"onUpdate:value":f=>o[v]=f},null,8,["value","onUpdate:value"])]),_:2},1024)]),_:1},8,["onRegister"])]),e(a(w)),E,G,W,$,z])}}}),mt=N(D,[["__scopeId","data-v-b0796100"]]);export{mt as default};
