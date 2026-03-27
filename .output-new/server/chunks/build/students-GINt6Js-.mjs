import { defineComponent, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderStyle, ssrRenderList, ssrInterpolate, ssrRenderAttr, ssrRenderClass } from 'vue/server-renderer';
import { UserPlus, BarChart3, TrendingUp, ChevronDown, Filter, Phone, MoreHorizontal, Plus, AlertTriangle, ArrowRight } from 'lucide-vue-next';
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

const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  __name: "StudentManagementHeader",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-col lg:flex-row lg:items-end justify-between mb-8 gap-4" }, _attrs))}><div><div class="flex items-center space-x-2 text-xs font-medium text-slate-400 uppercase tracking-wider mb-3"><span>Dashboard</span><span class="text-slate-300">/</span><span class="text-accent">Student Directory</span></div><h2 class="page-title">Student Management</h2><p class="text-slate-500 mt-2 leading-relaxed max-w-xl"> Maintain academic records and institutional integrity through our comprehensive data suite. </p></div><button class="btn-primary flex items-center self-start lg:self-auto">`);
      _push(ssrRenderComponent(unref(UserPlus), { class: "w-4 h-4 mr-2" }, null, _parent));
      _push(` Add New Student </button></div>`);
    };
  }
});
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/StudentManagementHeader.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const __nuxt_component_0 = Object.assign(_sfc_main$6, { __name: "StudentManagementHeader" });
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "StudentManagementStats",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "glass-card group cursor-pointer" }, _attrs))}><div class="flex items-start justify-between mb-4"><p class="text-xs font-medium text-slate-400 uppercase tracking-wider">Total Enrollment</p><div class="p-2.5 bg-white rounded-xl shadow-md group-hover:scale-110 transition-transform">`);
      _push(ssrRenderComponent(unref(BarChart3), {
        class: "w-4 h-4 text-accent",
        "stroke-width": "2"
      }, null, _parent));
      _push(`</div></div><div class="flex items-baseline space-x-3"><p class="text-4xl font-bold text-slate-800" style="${ssrRenderStyle({ "font-family": "var(--font-display)" })}">1,284</p><p class="text-lg font-bold text-emerald-500 flex items-center">`);
      _push(ssrRenderComponent(unref(TrendingUp), { class: "w-4 h-4 mr-1" }, null, _parent));
      _push(` +12% </p></div><p class="text-xs text-slate-400 mt-3 uppercase tracking-wide">Active academic session 2024–25</p></div>`);
    };
  }
});
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/StudentManagementStats.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const __nuxt_component_1 = Object.assign(_sfc_main$5, { __name: "StudentManagementStats" });
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "StudentManagementFilters",
  __ssrInlineRender: true,
  setup(__props) {
    const filters = [
      { label: "Grade Level", value: "All Grades" },
      { label: "Section", value: "All Sections" },
      { label: "Status", value: "Active Only" }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "glass-card-static flex items-center gap-4 p-4" }, _attrs))}><div class="flex items-center gap-4 flex-1"><!--[-->`);
      ssrRenderList(filters, (filter) => {
        _push(`<div class="flex-1 min-w-0"><p class="text-[10px] font-medium text-slate-400 uppercase tracking-wider mb-2">${ssrInterpolate(filter.label)}</p><button class="w-full flex items-center justify-between px-4 py-2.5 bg-slate-50 text-slate-700 text-sm font-medium rounded-xl transition-all hover:bg-slate-100 border border-transparent hover:border-slate-200">${ssrInterpolate(filter.value)} `);
        _push(ssrRenderComponent(unref(ChevronDown), { class: "w-4 h-4 text-slate-400" }, null, _parent));
        _push(`</button></div>`);
      });
      _push(`<!--]--></div><button class="p-3.5 bg-accent text-white rounded-xl shadow-lg shadow-accent/30 hover:shadow-xl hover:shadow-accent/40 transition-all hover:scale-105">`);
      _push(ssrRenderComponent(unref(Filter), {
        class: "w-5 h-5",
        "stroke-width": "2"
      }, null, _parent));
      _push(`</button></div>`);
    };
  }
});
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/StudentManagementFilters.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const __nuxt_component_2 = Object.assign(_sfc_main$4, { __name: "StudentManagementFilters" });
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "StudentManagementTable",
  __ssrInlineRender: true,
  setup(__props) {
    const students = [
      { name: "Julian Thorne", email: "j.thorne@academy.edu", id: "PA-2024-0812", grade: "Grade 12-A", phone: "+1 (555) 012-9844", attendance: "98.4%", status: "ACTIVE", statusColor: "bg-emerald-100 text-emerald-600", avatar: "https://ui-avatars.com/api/?name=Julian+Thorne&background=6366F1&color=fff" },
      { name: "Elena Rodriguez", email: "e.rodriguez@academy.edu", id: "PA-2024-0922", grade: "Grade 11-B", phone: "+1 (555) 012-7732", attendance: "82.1%", status: "ON LEAVE", statusColor: "bg-amber-100 text-amber-600", avatar: "https://ui-avatars.com/api/?name=Elena+Rodriguez&background=6366F1&color=fff" },
      { name: "Marcus Vance", email: "m.vance@academy.edu", id: "PA-2024-0411", grade: "Grade 12-A", phone: "+1 (555) 012-1190", attendance: "94.5%", status: "ACTIVE", statusColor: "bg-emerald-100 text-emerald-600", avatar: "https://ui-avatars.com/api/?name=Marcus+Vance&background=6366F1&color=fff" },
      { name: "Sophia Chen", email: "s.chen@academy.edu", id: "PA-2024-0019", grade: "Grade 10-C", phone: "+1 (555) 012-3321", attendance: "100%", status: "GRADUATED", statusColor: "bg-indigo-100 text-indigo-600", avatar: "https://ui-avatars.com/api/?name=Sophia+Chen&background=6366F1&color=fff" }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "glass-card-static overflow-hidden" }, _attrs))}><div class="grid grid-cols-7 gap-4 items-center px-6 py-4 bg-slate-50/80 border-b border-slate-100"><span class="text-[10px] font-semibold text-slate-400 uppercase tracking-wider">Name</span><span class="text-[10px] font-semibold text-slate-400 uppercase tracking-wider">Student ID</span><span class="text-[10px] font-semibold text-slate-400 uppercase tracking-wider">Grade</span><span class="text-[10px] font-semibold text-slate-400 uppercase tracking-wider">Contact</span><span class="text-[10px] font-semibold text-slate-400 uppercase tracking-wider">Attendance</span><span class="text-[10px] font-semibold text-slate-400 uppercase tracking-wider">Status</span><span class="text-[10px] font-semibold text-slate-400 uppercase tracking-wider">Actions</span></div><div class="divide-y divide-slate-50"><!--[-->`);
      ssrRenderList(students, (student) => {
        _push(`<div class="grid grid-cols-7 gap-4 items-center px-6 py-4 transition-all hover:bg-slate-50/50 cursor-pointer"><div class="flex items-center space-x-3"><img${ssrRenderAttr("src", student.avatar)}${ssrRenderAttr("alt", student.name)} class="w-10 h-10 rounded-xl object-cover"><div><h4 class="text-sm font-semibold text-slate-800">${ssrInterpolate(student.name)}</h4><p class="text-xs text-slate-400">${ssrInterpolate(student.email)}</p></div></div><div><p class="text-sm font-medium text-slate-600">${ssrInterpolate(student.id)}</p></div><div><span class="px-3 py-1 bg-indigo-50 text-indigo-600 rounded-lg text-xs font-medium">${ssrInterpolate(student.grade)}</span></div><div class="flex items-center space-x-2"><div class="p-1.5 bg-slate-100 rounded-lg text-slate-400">`);
        _push(ssrRenderComponent(unref(Phone), {
          class: "w-3.5 h-3.5",
          "stroke-width": "2"
        }, null, _parent));
        _push(`</div><p class="text-xs font-medium text-slate-600">${ssrInterpolate(student.phone)}</p></div><div><div class="relative w-20 h-1.5 bg-slate-100 rounded-full overflow-hidden mb-1.5"><div class="h-full bg-accent rounded-full" style="${ssrRenderStyle({ width: student.attendance })}"></div></div><p class="text-sm font-semibold text-slate-700">${ssrInterpolate(student.attendance)}</p></div><div><span class="${ssrRenderClass(["px-3 py-1.5 rounded-full text-[10px] font-semibold uppercase", student.statusColor])}">${ssrInterpolate(student.status)}</span></div><button class="p-2 text-slate-300 hover:text-slate-600 transition-colors">`);
        _push(ssrRenderComponent(unref(MoreHorizontal), { class: "w-5 h-5" }, null, _parent));
        _push(`</button></div>`);
      });
      _push(`<!--]--></div><div class="px-6 py-4 border-t border-slate-100 flex items-center justify-between"><p class="text-xs text-slate-400">Showing 1 to 4 of 1,284 students</p><div class="flex items-center space-x-2"><button class="w-9 h-9 flex items-center justify-center rounded-lg bg-accent text-white font-medium text-sm shadow-md">1</button><button class="w-9 h-9 flex items-center justify-center rounded-lg bg-white text-slate-400 font-medium text-sm shadow-sm border border-slate-100 hover:bg-slate-50">2</button><button class="w-9 h-9 flex items-center justify-center rounded-lg bg-white text-slate-400 font-medium text-sm shadow-sm border border-slate-100 hover:bg-slate-50">3</button><span class="text-slate-200">...</span><button class="w-9 h-9 flex items-center justify-center rounded-lg bg-white text-slate-400 font-medium text-sm shadow-sm border border-slate-100 hover:bg-slate-50">321</button></div></div><button class="absolute bottom-6 right-6 w-14 h-14 bg-accent text-white rounded-2xl shadow-xl shadow-accent/30 flex items-center justify-center hover:scale-110 hover:rotate-90 transition-all">`);
      _push(ssrRenderComponent(unref(Plus), {
        class: "w-6 h-6",
        "stroke-width": "2.5"
      }, null, _parent));
      _push(`</button></div>`);
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/StudentManagementTable.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_3 = Object.assign(_sfc_main$3, { __name: "StudentManagementTable" });
const _sfc_main$2 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "glass-card-static p-6 relative overflow-hidden group" }, _attrs))}><div class="absolute -top-8 -right-8 w-32 h-32 bg-indigo-100 rounded-full blur-3xl opacity-50 group-hover:opacity-100 transition-opacity"></div><div class="relative"><h3 class="text-xl font-bold text-slate-800 mb-2" style="${ssrRenderStyle({ "font-family": "var(--font-display)" })}">Performance Snapshot</h3><p class="text-slate-500 text-sm leading-relaxed mb-6 max-w-sm"> Aggregate academic growth across all active departments for the Q3 session. </p><button class="btn-primary text-xs px-6 py-2.5"> View Deep Analysis </button></div></div>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/StudentManagementPerformanceSnapshot.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_4 = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender]]), { __name: "StudentManagementPerformanceSnapshot" });
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "StudentManagementAttendanceWarning",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "glass-card-static p-6 relative group overflow-hidden border-l-4 border-l-amber-400" }, _attrs))}><div class="absolute -top-4 -right-4 w-24 h-24 bg-amber-50 rounded-full blur-3xl opacity-50 group-hover:opacity-100 transition-opacity"></div><div class="flex items-start gap-4 relative"><div class="p-3 bg-amber-100 rounded-xl">`);
      _push(ssrRenderComponent(unref(AlertTriangle), {
        class: "w-6 h-6 text-amber-500",
        "stroke-width": "2"
      }, null, _parent));
      _push(`</div><div class="flex-1"><h3 class="text-lg font-bold text-slate-800 mb-1" style="${ssrRenderStyle({ "font-family": "var(--font-display)" })}"> Attendance Warning </h3><p class="text-slate-500 text-sm leading-relaxed mb-4"> 12 students have dropped below the 85% mandatory attendance threshold this week. </p><button class="flex items-center text-xs font-semibold text-amber-500 hover:text-amber-600 transition-colors group/btn"> INITIATE REVIEW PROCESS `);
      _push(ssrRenderComponent(unref(ArrowRight), {
        class: "w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform",
        "stroke-width": "2"
      }, null, _parent));
      _push(`</button></div></div></div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/StudentManagementAttendanceWarning.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_5 = Object.assign(_sfc_main$1, { __name: "StudentManagementAttendanceWarning" });
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "students",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_StudentManagementHeader = __nuxt_component_0;
      const _component_StudentManagementStats = __nuxt_component_1;
      const _component_StudentManagementFilters = __nuxt_component_2;
      const _component_StudentManagementTable = __nuxt_component_3;
      const _component_StudentManagementPerformanceSnapshot = __nuxt_component_4;
      const _component_StudentManagementAttendanceWarning = __nuxt_component_5;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "max-w-[1600px] mx-auto pb-16 px-4 md:px-10" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_StudentManagementHeader, null, null, _parent));
      _push(`<div class="grid grid-cols-1 lg:grid-cols-[450px,1fr] gap-8 md:gap-12 mb-8 md:mb-12">`);
      _push(ssrRenderComponent(_component_StudentManagementStats, null, null, _parent));
      _push(ssrRenderComponent(_component_StudentManagementFilters, null, null, _parent));
      _push(`</div>`);
      _push(ssrRenderComponent(_component_StudentManagementTable, null, null, _parent));
      _push(`<div class="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mt-12 md:mt-16">`);
      _push(ssrRenderComponent(_component_StudentManagementPerformanceSnapshot, null, null, _parent));
      _push(ssrRenderComponent(_component_StudentManagementAttendanceWarning, null, null, _parent));
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/students.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=students-GINt6Js-.mjs.map
