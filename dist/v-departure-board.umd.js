(function(t,e){typeof exports=="object"&&typeof module<"u"?e(exports,require("vue")):typeof define=="function"&&define.amd?define(["exports","vue"],e):(t=typeof globalThis<"u"?globalThis:t||self,e(t.VDepartureBoard={},t.Vue))})(this,function(t,e){"use strict";const i="",o=e.defineComponent({__name:"VDepartureBoard",props:{displayStr:{default:""},color:{default:"white"},bgColor:{default:"black"},size:{default:40}},setup(l){const n=l,s=e.computed(()=>n.displayStr?.split("").map(r=>r==" "?"blank":r=="+"?"add":r.toUpperCase())||[]),a=e.computed(()=>`${n.size}px`),p=e.computed(()=>`${n.size/2}px`);return(r,u)=>(e.openBlock(),e.createElementBlock("div",{class:"v-departure-board",style:e.normalizeStyle({"--sizePx":e.unref(a),"--halfSizePx":e.unref(p)})},[(e.openBlock(!0),e.createElementBlock(e.Fragment,null,e.renderList(e.unref(s),d=>(e.openBlock(),e.createElementBlock("span",{class:e.normalizeClass(["letter",[`letter-${d}`]])},null,2))),256))],4))}}),c="";t.VDepartureBoard=o,Object.defineProperties(t,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});
