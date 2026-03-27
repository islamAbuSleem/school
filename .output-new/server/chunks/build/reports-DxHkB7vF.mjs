import { mergeProps, defineComponent, unref, createVNode, resolveDynamicComponent, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrRenderClass, ssrInterpolate, ssrRenderStyle, ssrRenderVNode } from 'vue/server-renderer';
import { Download, ChevronDown, FileText, Calendar, Settings, Eye } from 'lucide-vue-next';
import { _ as _export_sfc } from './server.mjs';
import '../_/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'node:url';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/utils';
import 'vue-router';

const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "ReportsBuilder",
  __ssrInlineRender: true,
  setup(__props) {
    const quarters = ["Academic", "Attendance"];
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-white rounded-[40px] p-12 shadow-sm ring-1 ring-slate-100 flex-1 relative group overflow-hidden h-full" }, _attrs))}><div class="absolute -top-12 -right-12 w-64 h-64 bg-indigo-50/20 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity"></div><div class="flex items-center space-x-4 mb-12"><div class="p-3 bg-slate-50 rounded-2xl">`);
      _push(ssrRenderComponent(unref(Download), {
        class: "w-6 h-6 text-[#0F172A]",
        "stroke-width": "2.5"
      }, null, _parent));
      _push(`</div><h3 class="text-2xl font-black text-[#0F172A] tracking-tighter uppercase">Report Builder</h3></div><div class="space-y-10"><div><p class="text-[10px] font-black text-slate-300 tracking-[0.2em] uppercase mb-4">ACADEMIC TERM</p><button class="w-full flex items-center justify-between px-8 py-4 bg-[#F1F5F9] text-[#0F172A] text-[11px] font-black rounded-[24px] shadow-inner ring-1 ring-slate-100 transition-all hover:ring-slate-200 uppercase tracking-widest group"> Fall Semester 2023 `);
      _push(ssrRenderComponent(unref(ChevronDown), { class: "w-4 h-4 ml-3 text-slate-300 group-hover:text-slate-500 transition-colors" }, null, _parent));
      _push(`</button></div><div><p class="text-[10px] font-black text-slate-300 tracking-[0.2em] uppercase mb-4">SUBJECT AREA</p><button class="w-full flex items-center justify-between px-8 py-4 bg-[#F1F5F9] text-[#0F172A] text-[11px] font-black rounded-[24px] shadow-inner ring-1 ring-slate-100 transition-all hover:ring-slate-200 uppercase tracking-widest group"> All Subjects `);
      _push(ssrRenderComponent(unref(ChevronDown), { class: "w-4 h-4 ml-3 text-slate-300 group-hover:text-slate-500 transition-colors" }, null, _parent));
      _push(`</button></div><div><p class="text-[10px] font-black text-slate-300 tracking-[0.2em] uppercase mb-4">REPORT CATEGORY</p><div class="flex items-center space-x-3 bg-slate-50 p-2 rounded-[24px]"><!--[-->`);
      ssrRenderList(quarters, (cat) => {
        _push(`<button class="${ssrRenderClass([cat === "Academic" ? "bg-[#0F172A] text-white shadow-xl shadow-slate-200" : "text-slate-400 hover:text-slate-600", "flex-1 px-8 py-3 text-[10px] font-black tracking-widest rounded-xl transition-all uppercase"])}">${ssrInterpolate(cat)}</button>`);
      });
      _push(`<!--]--></div></div><button class="w-full mt-12 py-5 bg-[#0F172A] text-white rounded-[24px] font-black text-[11px] tracking-widest uppercase shadow-2xl shadow-slate-200 hover:bg-slate-800 transition-all transform hover:translate-y-[-2px]"> Generate Deep-Dive </button></div></div>`);
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ReportsBuilder.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_0 = Object.assign(_sfc_main$3, { __name: "ReportsBuilder" });
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "ReportsTrends",
  __ssrInlineRender: true,
  setup(__props) {
    const trends = [
      { label: "Q1 2023", avg: 60, median: 40 },
      { label: "Q2 2023", avg: 85, median: 60 },
      { label: "Q3 2023", avg: 75, median: 55 },
      { label: "Q4 2023", avg: 95, median: 80 }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-white rounded-[40px] p-12 shadow-sm ring-1 ring-slate-100 flex-1 relative group overflow-hidden h-full" }, _attrs))}><div class="absolute -top-12 -right-12 w-64 h-64 bg-indigo-50/20 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity"></div><div class="flex items-center justify-between mb-12"><h3 class="text-2xl font-black text-[#0F172A] tracking-tighter uppercase">Historical Trends</h3><div class="flex items-center space-x-6"><div class="flex items-center space-x-2"><div class="w-3 h-3 bg-[#0F172A] rounded-full"></div><span class="text-[9px] font-black text-slate-400 tracking-widest uppercase">STUDENT AVG</span></div><div class="flex items-center space-x-2"><div class="w-3 h-3 bg-red-600 rounded-full"></div><span class="text-[9px] font-black text-slate-400 tracking-widest uppercase">CLASS MEDIAN</span></div></div></div><div class="h-80 flex items-end justify-between px-8 border-b border-slate-50 relative"><!--[-->`);
      ssrRenderList(trends, (trend) => {
        _push(`<div class="flex flex-col items-center space-y-8 w-full relative"><div class="relative w-12 h-64 flex items-end justify-center group/bar"><div class="w-full bg-indigo-100 rounded-t-lg transition-all duration-1000 group-hover/bar:bg-indigo-200" style="${ssrRenderStyle({ height: trend.avg + "%" })}"></div><div class="absolute bottom-0 w-6 bg-red-900 rounded-t-md transition-all duration-1000 group-hover/bar:bg-red-800 opacity-80" style="${ssrRenderStyle({ height: trend.median + "%" })}"></div></div><span class="text-[10px] font-black text-slate-300 tracking-[0.2em] uppercase">${ssrInterpolate(trend.label)}</span></div>`);
      });
      _push(`<!--]--></div></div>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ReportsTrends.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_1 = Object.assign(_sfc_main$2, { __name: "ReportsTrends" });
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "ReportsDownloadCenter",
  __ssrInlineRender: true,
  setup(__props) {
    const downloads = [
      {
        title: "Final Transcript 2023",
        date: "Dec 12, 2023",
        size: "2.4 MB",
        type: "OFFICIAL",
        icon: FileText,
        color: "text-indigo-600",
        bg: "bg-indigo-50",
        badge: "bg-orange-50 text-orange-600"
      },
      {
        title: "Attendance Audit Q4",
        date: "Nov 30, 2023",
        size: "1.1 MB",
        type: "DRAFT",
        icon: Calendar,
        color: "text-indigo-600",
        bg: "bg-indigo-50",
        badge: "bg-slate-100 text-slate-400"
      },
      {
        title: "Progress Assessment",
        date: "Oct 15, 2023",
        size: "4.8 MB",
        type: "COUNSELOR",
        icon: Settings,
        color: "text-indigo-600",
        bg: "bg-indigo-50",
        badge: "bg-orange-50 text-orange-600"
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "mt-16" }, _attrs))}><div class="flex items-center justify-between mb-12"><h3 class="text-3xl font-black text-[#0F172A] tracking-tighter uppercase">Download Center</h3><button class="text-[10px] font-black tracking-widest text-slate-400 hover:text-slate-600 uppercase border-b-2 border-transparent hover:border-slate-200 pb-1">View Archive</button></div><div class="grid grid-cols-3 gap-10"><!--[-->`);
      ssrRenderList(downloads, (file) => {
        _push(`<div class="bg-white p-10 rounded-[40px] shadow-sm ring-1 ring-slate-100 flex flex-col justify-between transition-all hover:scale-[1.02] cursor-pointer group"><div class="flex items-start justify-between mb-10"><div class="${ssrRenderClass(["p-4 rounded-2xl shadow-sm ring-1 ring-white transition-all group-hover:scale-110", file.bg])}">`);
        ssrRenderVNode(_push, createVNode(resolveDynamicComponent(file.icon), {
          class: ["w-6 h-6", file.color],
          "stroke-width": "2.5"
        }, null), _parent);
        _push(`</div><span class="${ssrRenderClass(["px-4 py-1.5 rounded-full text-[9px] font-black tracking-widest uppercase shadow-sm ring-1", file.badge])}">${ssrInterpolate(file.type)}</span></div><div class="mb-12"><h4 class="text-xl font-black text-[#0F172A] leading-tight mb-2">${ssrInterpolate(file.title)}</h4><p class="text-[11px] font-bold text-slate-400 tracking-widest uppercase">Generated on ${ssrInterpolate(file.date)} • ${ssrInterpolate(file.size)}</p></div><div class="flex items-center space-x-4"><button class="flex-1 py-4 bg-[#0F172A] text-white rounded-[20px] font-black text-[11px] tracking-widest uppercase shadow-xl hover:bg-slate-800 transition-all flex items-center justify-center">`);
        _push(ssrRenderComponent(unref(Download), { class: "w-4 h-4 mr-3" }, null, _parent));
        _push(` Download </button><button class="p-4 bg-slate-50 text-slate-400 hover:text-slate-600 rounded-[20px] transition-all">`);
        _push(ssrRenderComponent(unref(Eye), { class: "w-5 h-5" }, null, _parent));
        _push(`</button></div></div>`);
      });
      _push(`<!--]--></div><div class="mt-16 bg-[#0F172A] rounded-[40px] p-6 shadow-2xl flex items-center justify-between"><div class="flex items-center space-x-8 px-8"><div class="bg-red-700 px-6 py-2 rounded-xl text-[10px] font-black tracking-widest text-white uppercase shadow-lg">Academic Standing: Elite</div><div class="flex items-baseline space-x-3"><span class="text-[10px] font-black text-slate-400 tracking-widest uppercase">GPA</span><span class="text-2xl font-black text-white tracking-tighter">3.92</span></div><div class="flex items-baseline space-x-3"><span class="text-[10px] font-black text-slate-400 tracking-widest uppercase">RANK</span><span class="text-2xl font-black text-white tracking-tighter">#12 / 450</span></div><div class="flex items-baseline space-x-3"><span class="text-[10px] font-black text-slate-400 tracking-widest uppercase">ATTENDANCE</span><span class="text-2xl font-black text-white tracking-tighter">98.4%</span></div></div></div></div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ReportsDownloadCenter.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_2 = Object.assign(_sfc_main$1, { __name: "ReportsDownloadCenter" });
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_ReportsBuilder = __nuxt_component_0;
  const _component_ReportsTrends = __nuxt_component_1;
  const _component_ReportsDownloadCenter = __nuxt_component_2;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "max-w-[1600px] mx-auto pb-16" }, _attrs))}><div class="mb-8"><h2 class="page-title uppercase">Student Performance Insights</h2><p class="text-sm text-slate-500 mt-2 leading-relaxed max-w-2xl uppercase tracking-wide"> Detailed academic analytics and official documentation for the current term. </p></div><div class="grid grid-cols-1 lg:grid-cols-[1fr,1.5fr] gap-6 mb-8 h-full">`);
  _push(ssrRenderComponent(_component_ReportsBuilder, null, null, _parent));
  _push(ssrRenderComponent(_component_ReportsTrends, null, null, _parent));
  _push(`</div>`);
  _push(ssrRenderComponent(_component_ReportsDownloadCenter, null, null, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/reports.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const reports = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { reports as default };
//# sourceMappingURL=reports-DxHkB7vF.mjs.map
