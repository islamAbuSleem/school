import { mergeProps, defineComponent, unref, createVNode, resolveDynamicComponent, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderStyle, ssrRenderList, ssrRenderClass, ssrInterpolate, ssrRenderVNode } from 'vue/server-renderer';
import { CheckCircle2, Circle, FileText, PlayCircle, Download, ExternalLink, Calendar, BookOpen, UserPlus, BarChart3, Palette, Monitor } from 'lucide-vue-next';
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
  __name: "CurriculumMain",
  __ssrInlineRender: true,
  setup(__props) {
    const syllabus = [
      { title: "Complex Numbers & Vectors", completed: true },
      { title: "Differential Calculus", completed: true },
      { title: "Integral Calculus & Applications", active: true },
      { title: "Probability Distributions", pending: true },
      { title: "Statistical Inference", pending: true }
    ];
    const resources = [
      { title: "Calculus Bible v2.0", type: "PDF", icon: FileText },
      { title: "Vector Space Lectures", type: "VIDEO", icon: PlayCircle },
      { title: "Mock Exam Paper 1", type: "PDF", icon: FileText }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "glass-card-static p-8 h-full" }, _attrs))}><div class="flex flex-wrap items-start justify-between gap-4 mb-8"><div><span class="px-3 py-1.5 bg-indigo-50 text-accent rounded-full text-xs font-semibold uppercase">Core Subject</span><h3 class="text-2xl font-bold text-slate-800 mt-4" style="${ssrRenderStyle({ "font-family": "var(--font-display)" })}">Advanced Mathematics HL</h3><p class="text-sm text-slate-400 mt-1 uppercase tracking-wide">Instructor: Dr. Aris Thorne • Section 11–A</p></div><div class="text-right"><p class="text-4xl font-bold text-slate-800" style="${ssrRenderStyle({ "font-family": "var(--font-display)" })}">82%</p><p class="text-xs font-medium text-slate-400 uppercase tracking-wider mt-1">Syllabus Complete</p></div></div><div class="grid grid-cols-1 md:grid-cols-[1.5fr,1fr] gap-8"><div class="space-y-2"><div class="flex items-center gap-3 mb-4"><div class="w-1 h-5 bg-accent rounded-full"></div><h4 class="text-xs font-semibold text-slate-400 uppercase tracking-wider">Course Syllabus</h4></div><!--[-->`);
      ssrRenderList(syllabus, (item) => {
        _push(`<div class="flex items-center gap-4 p-3 rounded-xl transition-all hover:bg-slate-50 cursor-pointer">`);
        if (item.completed) {
          _push(ssrRenderComponent(unref(CheckCircle2), { class: "w-5 h-5 text-emerald-400 flex-shrink-0" }, null, _parent));
        } else if (item.active) {
          _push(`<div class="w-5 h-5 rounded-full border-2 border-accent flex items-center justify-center flex-shrink-0"><div class="w-2 h-2 bg-accent rounded-full"></div></div>`);
        } else {
          _push(ssrRenderComponent(unref(Circle), { class: "w-5 h-5 text-slate-200 flex-shrink-0" }, null, _parent));
        }
        _push(`<span class="${ssrRenderClass(["text-sm font-medium", item.completed ? "text-slate-300 line-through" : "text-slate-700", item.active ? "font-semibold" : ""])}">${ssrInterpolate(item.title)}</span></div>`);
      });
      _push(`<!--]--></div><div class="space-y-3"><div class="flex items-center gap-3 mb-4"><div class="w-1 h-5 bg-accent rounded-full"></div><h4 class="text-xs font-semibold text-slate-400 uppercase tracking-wider">Learning Resources</h4></div><!--[-->`);
      ssrRenderList(resources, (res) => {
        _push(`<div class="bg-slate-50 p-4 rounded-xl flex items-center justify-between transition-all hover:scale-[1.01] cursor-pointer group"><div class="flex items-center gap-3"><div class="p-2 bg-white rounded-lg shadow-sm">`);
        ssrRenderVNode(_push, createVNode(resolveDynamicComponent(res.icon), {
          class: "w-4 h-4 text-slate-600",
          "stroke-width": "2"
        }, null), _parent);
        _push(`</div><h5 class="text-sm font-semibold text-slate-700">${ssrInterpolate(res.title)}</h5></div>`);
        if (res.type === "PDF") {
          _push(ssrRenderComponent(unref(Download), { class: "w-4 h-4 text-slate-300 group-hover:text-accent" }, null, _parent));
        } else {
          _push(ssrRenderComponent(unref(ExternalLink), { class: "w-4 h-4 text-slate-300 group-hover:text-accent" }, null, _parent));
        }
        _push(`</div>`);
      });
      _push(`<!--]--></div></div></div>`);
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/CurriculumMain.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_0 = Object.assign(_sfc_main$3, { __name: "CurriculumMain" });
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "CurriculumSidebar",
  __ssrInlineRender: true,
  setup(__props) {
    const topics = [
      { title: "Wave Phenomena", date: "Starts: Monday, Oct 12", active: true, color: "text-red-500", bg: "bg-red-50" },
      { title: "Electromagnetism", date: "Starts: Oct 28", active: false, color: "text-slate-300", bg: "bg-slate-50" }
    ];
    const upcoming = [
      { title: "Lab Manual: Optics", action: "Action Required: Read", icon: BookOpen, color: "text-indigo-600", bg: "bg-indigo-50" }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "space-y-12 h-full" }, _attrs))}><div class="bg-white rounded-[40px] p-10 shadow-sm ring-1 ring-slate-100 flex-1 relative group overflow-hidden"><div class="flex items-center justify-between mb-12"><h3 class="text-xl font-black text-[#0F172A] tracking-tight flex items-center">`);
      _push(ssrRenderComponent(unref(Calendar), { class: "w-6 h-6 mr-3 text-red-500" }, null, _parent));
      _push(` Upcoming Topics </h3><span class="text-3xl font-black text-red-600">45%</span></div><div class="space-y-10 pl-6 border-l-2 border-slate-50"><!--[-->`);
      ssrRenderList(topics, (topic) => {
        _push(`<div class="relative"><div class="${ssrRenderClass(["absolute -left-[31px] top-0 w-4 h-4 rounded-full ring-4 ring-white shadow-sm", topic.active ? "bg-red-500" : "bg-slate-200"])}"></div><h4 class="${ssrRenderClass(["text-sm font-black leading-tight mb-2", topic.active ? "text-[#0F172A]" : "text-slate-300"])}">${ssrInterpolate(topic.title)}</h4><p class="text-[10px] font-bold text-slate-300 tracking-widest uppercase">${ssrInterpolate(topic.date)}</p></div>`);
      });
      _push(`<!--]--></div><div class="mt-16 pt-10 border-t border-slate-50"><p class="text-[10px] font-black text-slate-400 tracking-widest uppercase mb-6">NEXT MATERIAL</p><!--[-->`);
      ssrRenderList(upcoming, (item) => {
        _push(`<div class="bg-[#F8FAFC] p-6 rounded-3xl ring-1 ring-slate-100 flex items-center space-x-6 transition-all hover:scale-[1.02] cursor-pointer group/item shadow-sm"><div class="${ssrRenderClass(["p-4 rounded-2xl shadow-sm ring-1 ring-white transition-all group-hover/item:scale-110", item.bg])}">`);
        ssrRenderVNode(_push, createVNode(resolveDynamicComponent(item.icon), {
          class: ["w-6 h-6", item.color],
          "stroke-width": "2.5"
        }, null), _parent);
        _push(`</div><div><h5 class="text-sm font-black text-[#0F172A] leading-snug">${ssrInterpolate(item.title)}</h5><p class="text-[10px] font-bold text-red-600 mt-1 uppercase tracking-widest">${ssrInterpolate(item.action)}</p></div></div>`);
      });
      _push(`<!--]--></div></div><div class="bg-[#051139] rounded-[40px] p-10 shadow-2xl ring-1 ring-white/5 relative group overflow-hidden"><div class="absolute -top-12 -right-12 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity"></div><div class="relative"><div class="flex items-start justify-between mb-8"><h3 class="text-xl font-black text-white tracking-tight uppercase">Request Subject Consultation</h3>`);
      _push(ssrRenderComponent(unref(UserPlus), {
        class: "w-6 h-6 text-indigo-400",
        "stroke-width": "2.5"
      }, null, _parent));
      _push(`</div><p class="text-indigo-200/50 text-[11px] font-bold leading-relaxed max-w-sm mb-12 uppercase tracking-widest"> Schedule a 15-min call with the Department Head regarding curriculum changes. </p><button class="w-full py-4 bg-white text-[#0F172A] rounded-2xl font-black text-[11px] tracking-widest uppercase shadow-xl hover:bg-slate-50 transition-all transform hover:translate-y-[-2px]"> Book Now </button></div></div></div>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/CurriculumSidebar.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_1 = Object.assign(_sfc_main$2, { __name: "CurriculumSidebar" });
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "CurriculumExtended",
  __ssrInlineRender: true,
  setup(__props) {
    const extended = [
      { title: "English Lit", icon: BookOpen, progress: 40, color: "bg-[#0F172A]" },
      { title: "Economics", icon: BarChart3, progress: 65, color: "bg-indigo-600" },
      { title: "Art History", icon: Palette, progress: 20, color: "bg-[#0F172A]" },
      { title: "Computer Science", icon: Monitor, progress: 85, color: "bg-red-600" }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "mt-16" }, _attrs))}><div class="flex items-center justify-between mb-12"><h3 class="text-[10px] font-black text-slate-300 tracking-[0.4em] uppercase">EXTENDED CURRICULUM</h3></div><div class="grid grid-cols-4 gap-10"><!--[-->`);
      ssrRenderList(extended, (sub) => {
        _push(`<div class="bg-white p-10 rounded-[40px] shadow-sm ring-1 ring-slate-100 flex items-center space-x-8 transition-all hover:scale-[1.02] cursor-pointer group"><div class="p-4 bg-slate-50 rounded-2xl shadow-sm group-hover:scale-110 transition-transform">`);
        ssrRenderVNode(_push, createVNode(resolveDynamicComponent(sub.icon), {
          class: "w-6 h-6 text-[#0F172A]",
          "stroke-width": "2.5"
        }, null), _parent);
        _push(`</div><div class="flex-1"><h4 class="text-sm font-black text-[#0F172A] mb-3 uppercase tracking-widest">${ssrInterpolate(sub.title)}</h4><div class="w-full h-1 bg-slate-100 rounded-full overflow-hidden"><div class="${ssrRenderClass([sub.color, "h-full rounded-full transition-all duration-1000"])}" style="${ssrRenderStyle({ width: sub.progress + "%" })}"></div></div></div></div>`);
      });
      _push(`<!--]--></div><div class="mt-16 bg-white rounded-[48px] p-16 shadow-sm ring-1 ring-slate-100 relative group overflow-hidden"><div class="absolute -top-12 -right-12 w-64 h-64 bg-indigo-50/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity"></div><div class="grid grid-cols-[1.5fr,1fr] gap-20"><div><h3 class="text-4xl font-black text-[#0F172A] tracking-tighter mb-4">Curriculum Assessment Cycle</h3><p class="text-lg font-bold text-slate-400 mb-16 leading-relaxed max-w-lg">Upcoming summative assessments and syllabus milestones for the next 30 days.</p><div class="flex items-center space-x-8"><div class="flex-1 p-8 rounded-[32px] bg-slate-50/50 ring-1 ring-slate-100 group/item transition-all hover:bg-white hover:shadow-xl hover:ring-slate-200"><p class="text-[9px] font-black text-slate-300 tracking-widest uppercase mb-2">OCT 14</p><h4 class="text-sm font-black text-[#0F172A] mb-1">Math Quiz</h4><p class="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Calculus Pt 1</p></div><div class="flex-1 p-8 rounded-[32px] bg-slate-50/50 ring-1 ring-slate-100 border-l-4 border-red-600 group/item transition-all hover:bg-white hover:shadow-xl hover:ring-slate-200"><p class="text-[9px] font-black text-slate-300 tracking-widest uppercase mb-2">OCT 21</p><h4 class="text-sm font-black text-[#0F172A] mb-1">Physics Lab</h4><p class="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Optics Report</p></div><div class="flex-1 p-8 rounded-[32px] bg-slate-50/50 ring-1 ring-slate-100 group/item transition-all hover:bg-white hover:shadow-xl hover:ring-slate-200"><p class="text-[9px] font-black text-slate-300 tracking-widest uppercase mb-2">NOV 02</p><h4 class="text-sm font-black text-[#0F172A] mb-1">English Essay</h4><p class="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Gothic Lit</p></div></div></div><div class="flex flex-col items-center justify-center border-l border-slate-50 pl-20"><div class="w-48 h-48 bg-[#0F172A] rounded-3xl p-4 shadow-2xl transform rotate-[-3deg] hover:rotate-0 transition-transform cursor-pointer relative overflow-hidden group/card"><div class="absolute inset-0 bg-indigo-500/20 opacity-0 group-hover/card:opacity-100 transition-opacity"></div><img src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&amp;data=calendar" class="w-full h-full object-cover rounded-2xl invert"></div><h4 class="text-sm font-black text-[#0F172A] mt-10 uppercase tracking-widest">Sync to Calendar</h4><p class="text-[10px] font-bold text-slate-300 mt-3 text-center leading-relaxed uppercase tracking-widest max-w-[180px]">Scan to add all curriculum dates to your personal device.</p></div></div></div></div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/CurriculumExtended.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_2 = Object.assign(_sfc_main$1, { __name: "CurriculumExtended" });
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_CurriculumMain = __nuxt_component_0;
  const _component_CurriculumSidebar = __nuxt_component_1;
  const _component_CurriculumExtended = __nuxt_component_2;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "max-w-[1600px] mx-auto pb-16" }, _attrs))}><div class="mb-8"><p class="text-xs font-semibold text-accent uppercase tracking-wider mb-2">Curriculum Insights</p><h2 class="page-title uppercase">Academic Roadmap</h2><p class="text-sm text-slate-500 mt-2 leading-relaxed max-w-2xl uppercase tracking-wide"> Detailed curriculum tracking for James Edwards. Grade 11 - International Baccalaureate Program. </p></div><div class="grid grid-cols-1 lg:grid-cols-[1fr,380px] gap-6">`);
  _push(ssrRenderComponent(_component_CurriculumMain, null, null, _parent));
  _push(ssrRenderComponent(_component_CurriculumSidebar, null, null, _parent));
  _push(`</div>`);
  _push(ssrRenderComponent(_component_CurriculumExtended, null, null, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/curriculum.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const curriculum = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { curriculum as default };
//# sourceMappingURL=curriculum-BM32MhYO.mjs.map
