import{_ as g}from"./BasicTable.vue_vue_type_script_setup_true_lang-zfjuvcM9.js";import"./TableImg.vue_vue_type_style_index_0_lang-BRdiJvOS.js";import{a as C}from"./componentMap-BkO7yibD.js";import{u as x}from"./useTable-DGAN9Glw.js";import{d as k}from"./system-BX7kEaMW.js";import{u as w}from"./index-9y0HnYgV.js";import{_ as y,c as T,s as S}from"./MenuDrawer.vue_vue_type_script_setup_true_lang-WbYzfxvx.js";import{d as R,a7 as D,Z as a,_ as v,k as o,a9 as r,G as B,a8 as F,u as e,ab as M,y as N}from"./vue-COhTiP8A.js";import"./BasicForm.vue_vue_type_script_setup_true_lang-wSyCYOUG.js";import"./FormItem.vue_vue_type_script_lang-DS-0MjtS.js";import"./entry/index-C24idMx3-1709028881000.js";import"./antd-BS7GgtZr.js";import"./helper-DExz0Pdl.js";import"./BasicForm.vue_vue_type_style_index_0_lang-BNL5AsEG.js";import"./index-C5L-0YCp.js";import"./useWindowSizeFn-kpjxC-Kh.js";import"./useForm-DxRP39cz.js";import"./uuid-D0SLUWHI.js";import"./sortable.esm-CoO8jRpa.js";import"./RadioButtonGroup.vue_vue_type_script_setup_true_lang-BKM1W9OO.js";import"./useFormItem-CGQuU2J0.js";import"./onMountedOrActivated-GpUdBAv_.js";import"./useSortable-xu3PAa4T.js";import"./download-lIRuXSoC.js";import"./base64Conver-bBv-IO2K.js";import"./index-kdTdygKV.js";import"./IconPicker.vue_vue_type_script_setup_true_lang-DPDMQ3vz.js";import"./copyTextToClipboard-YrNkOw48.js";import"./index-zWgpO0cU.js";import"./index-DrPgDRM8.js";const pe=R({name:"MenuManagement",__name:"index",setup(V){const[s,{openDrawer:i}]=w(),[m,{reload:l,expandAll:c}]=x({title:"菜单列表",api:k,columns:T,formConfig:{labelWidth:120,schemas:S},isTreeTable:!0,pagination:!1,striped:!1,useSearchForm:!0,showTableSetting:!0,bordered:!0,showIndexColumn:!1,canResize:!1,actionColumn:{width:80,title:"操作",dataIndex:"action",fixed:void 0}});function p(){i(!0,{isUpdate:!1})}function u(t){i(!0,{record:t,isUpdate:!0})}function d(t){}function f(){l()}function _(){N(c)}return(t,$)=>{const h=D("a-button");return a(),v("div",null,[o(e(g),{onRegister:e(m),onFetchSuccess:_},{toolbar:r(()=>[o(h,{type:"primary",onClick:p},{default:r(()=>[B(" 新增菜单 ")]),_:1})]),bodyCell:r(({column:b,record:n})=>[b.key==="action"?(a(),F(e(C),{key:0,actions:[{icon:"clarity:note-edit-line",onClick:u.bind(null,n)},{icon:"ant-design:delete-outlined",color:"error",popConfirm:{title:"是否确认删除",placement:"left",confirm:d.bind(null,n)}}]},null,8,["actions"])):M("",!0)]),_:1},8,["onRegister"]),o(y,{onRegister:e(s),onSuccess:f},null,8,["onRegister"])])}}});export{pe as default};
