(function(t,e){typeof exports=="object"&&typeof module<"u"?e(exports,require("vue")):typeof define=="function"&&define.amd?define(["exports","vue"],e):(t=typeof globalThis<"u"?globalThis:t||self,e(t.VDepartureBoard={},t.Vue))})(this,function(t,e){"use strict";const c="",l=e.defineComponent({__name:"VDepartureBoard",props:{displayStr:{default:""},color:{default:"white"},bgColor:{default:"black"},size:{default:40}},setup(s){const n=s,a=e.computed(()=>{var o;return((o=n.displayStr)==null?void 0:o.split("").map(r=>r==" "?"blank":r=="+"?"add":r.toUpperCase()))||[]}),p=e.computed(()=>`${n.size}px`),d=e.computed(()=>`${n.size/2}px`);return(o,r)=>(e.openBlock(),e.createElementBlock("div",{class:"v-departure-board",style:e.normalizeStyle({"--sizePx":e.unref(p),"--halfSizePx":e.unref(d)})},[(e.openBlock(!0),e.createElementBlock(e.Fragment,null,e.renderList(e.unref(a),i=>(e.openBlock(),e.createElementBlock("span",{class:e.normalizeClass(["letter",[`letter-${i}`]])},null,2))),256))],4))}}),u="";t.VDepartureBoard=l,Object.defineProperties(t,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});