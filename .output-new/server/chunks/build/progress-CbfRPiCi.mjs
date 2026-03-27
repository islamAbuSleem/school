import { defineComponent, mergeProps, unref, createVNode, resolveDynamicComponent, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrRenderClass, ssrInterpolate, ssrRenderVNode, ssrRenderStyle } from 'vue/server-renderer';
import { Download, TrendingUp, Calendar, ChevronLeft, ChevronRight, FileText, AlertTriangle, Users2 } from 'lucide-vue-next';

const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "ProgressSummary",
  __ssrInlineRender: true,
  setup(__props) {
    const stats = [
      {
        label: "Cumulative GPA",
        value: "3.8",
        target: "/ 4.0",
        description: "Benjamin ranks in the top 5% of his cohort this semester.",
        icon: TrendingUp,
        color: "text-accent",
        bg: "bg-indigo-50"
      },
      {
        label: "Attendance",
        value: "98.4%",
        description: "Total of 2 unexcused absences this term.",
        icon: Calendar,
        color: "text-red-500",
        bg: "bg-red-50"
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "grid grid-cols-1 sm:grid-cols-2 gap-4" }, _attrs))}><!--[-->`);
      ssrRenderList(stats, (stat) => {
        _push(`<div class="glass-card"><div class="flex items-start justify-between mb-4"><span class="${ssrRenderClass(["px-3 py-1.5 rounded-full text-xs font-semibold shadow-sm", stat.bg, stat.color])}">${ssrInterpolate(stat.label)}</span><div class="p-2 bg-white rounded-xl shadow-md">`);
        ssrRenderVNode(_push, createVNode(resolveDynamicComponent(stat.icon), {
          class: ["w-5 h-5", stat.color],
          "stroke-width": "2"
        }, null), _parent);
        _push(`</div></div><div><div class="flex items-baseline gap-2 mb-1"><p class="text-4xl font-bold text-slate-800" style="${ssrRenderStyle({ "font-family": "var(--font-display)" })}">${ssrInterpolate(stat.value)}</p>`);
        if (stat.target) {
          _push(`<p class="text-lg font-medium text-slate-300">${ssrInterpolate(stat.target)}</p>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div><p class="text-xs text-slate-400 mt-2 leading-relaxed">${ssrInterpolate(stat.description)}</p></div></div>`);
      });
      _push(`<!--]--></div>`);
    };
  }
});
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ProgressSummary.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const __nuxt_component_0 = Object.assign(_sfc_main$4, { __name: "ProgressSummary" });
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "ProgressSubjectBreakdown",
  __ssrInlineRender: true,
  setup(__props) {
    const subjects = [
      { name: "Advanced Mathematics", instructor: "Dr. Aris Thorne", level: "AP Calculus BC", progress: 75, grade: "A" },
      { name: "Theoretical Physics", instructor: "Prof. Julian Vane", level: "Quantum Mechanics Intro", progress: 60, grade: "A-" },
      { name: "Modern Literature", instructor: "Sarah Jenkins", level: "Post-War Narrative", progress: 45, grade: "B" },
      { name: "World History", instructor: "Mark Rothko", level: "European Diplomacy", progress: 90, grade: "A+" }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "glass-card-static p-6" }, _attrs))}><div class="flex flex-wrap items-center justify-between gap-4 mb-6"><h3 class="section-title">Subject Breakdown</h3><div class="flex items-center gap-1 bg-slate-50 p-1 rounded-xl"><button class="px-3 py-1.5 text-xs font-medium text-slate-400 hover:text-slate-600 rounded-lg transition-colors">Quarter 1</button><button class="px-3 py-1.5 text-xs font-medium bg-accent text-white rounded-lg shadow-sm">Quarter 2</button></div></div><div class="space-y-1"><div class="grid grid-cols-[2fr,1fr,1.5fr,0.5fr] gap-4 px-2 pb-3 border-b border-slate-100"><span class="text-[10px] font-medium text-slate-400 uppercase tracking-wider">Subject</span><span class="text-[10px] font-medium text-slate-400 uppercase tracking-wider">Instructor</span><span class="text-[10px] font-medium text-slate-400 uppercase tracking-wider text-center">Progress</span><span class="text-[10px] font-medium text-slate-400 uppercase tracking-wider text-right">Grade</span></div><!--[-->`);
      ssrRenderList(subjects, (sub) => {
        _push(`<div class="grid grid-cols-[2fr,1fr,1.5fr,0.5fr] gap-4 items-center px-2 py-3 hover:bg-slate-50 rounded-xl transition-all cursor-pointer group"><div><h4 class="text-sm font-semibold text-slate-700 group-hover:text-accent transition-colors">${ssrInterpolate(sub.name)}</h4><p class="text-[10px] text-slate-400 uppercase tracking-wide mt-0.5">${ssrInterpolate(sub.level)}</p></div><div><p class="text-xs text-slate-500">${ssrInterpolate(sub.instructor)}</p></div><div class="flex flex-col items-center"><div class="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden"><div class="h-full bg-accent rounded-full transition-all duration-700" style="${ssrRenderStyle({ width: sub.progress + "%" })}"></div></div></div><div class="text-right"><span class="${ssrRenderClass([sub.grade.includes("A") ? "text-accent" : "text-slate-600", "text-lg font-bold"])}">${ssrInterpolate(sub.grade)}</span></div></div>`);
      });
      _push(`<!--]--></div></div>`);
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ProgressSubjectBreakdown.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_1 = Object.assign(_sfc_main$3, { __name: "ProgressSubjectBreakdown" });
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "ProgressCalendar",
  __ssrInlineRender: true,
  setup(__props) {
    const weekDays = ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"];
    const calendar = [
      { day: 25, active: false },
      { day: 26, active: false },
      { day: 27, active: false },
      { day: 28, active: false },
      { day: 29, active: false },
      { day: 30, active: false },
      { day: 1, active: true, bold: true },
      { day: 2, active: true },
      { day: 3, active: true },
      { day: 4, active: true },
      { day: 5, active: true, event: "Physics Lab", color: "bg-indigo-100 text-indigo-600" },
      { day: 6, active: true },
      { day: 7, active: true },
      { day: 8, active: true },
      { day: 9, active: true },
      { day: 10, active: true },
      { day: 11, active: true },
      { day: 12, active: true, selected: true },
      { day: 13, active: true },
      { day: 14, active: true },
      { day: 15, active: true },
      { day: 16, active: true, event: "MID-TERM EXAM", color: "bg-red-100 text-red-600" },
      { day: 17, active: true },
      { day: 18, active: true },
      { day: 19, active: true },
      { day: 20, active: true },
      { day: 21, active: true },
      { day: 22, active: true }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "glass-card-static p-6 overflow-hidden" }, _attrs))}><div class="flex flex-wrap items-center justify-between gap-4 mb-6"><h3 class="section-title">Academic Calendar</h3><div class="flex items-center gap-3"><span class="text-sm font-semibold text-slate-600">October 2023</span><div class="flex items-center gap-1"><button class="p-2 bg-slate-50 text-slate-400 hover:text-slate-600 rounded-lg transition-colors">`);
      _push(ssrRenderComponent(unref(ChevronLeft), { class: "w-4 h-4" }, null, _parent));
      _push(`</button><button class="p-2 bg-slate-50 text-slate-400 hover:text-slate-600 rounded-lg transition-colors">`);
      _push(ssrRenderComponent(unref(ChevronRight), { class: "w-4 h-4" }, null, _parent));
      _push(`</button></div></div></div><div class="grid grid-cols-7 border border-slate-100 rounded-xl overflow-hidden"><!--[-->`);
      ssrRenderList(weekDays, (day) => {
        _push(`<div class="h-10 flex items-center justify-center bg-slate-50 border-b border-slate-100"><span class="text-[10px] font-medium text-slate-400 uppercase tracking-wider">${ssrInterpolate(day)}</span></div>`);
      });
      _push(`<!--]--><!--[-->`);
      ssrRenderList(calendar, (date, i) => {
        _push(`<div class="${ssrRenderClass([[date.selected ? "bg-accent/5 ring-2 ring-accent/30" : ""], "h-24 p-2 border-b border-r border-slate-100 transition-all hover:bg-slate-50 cursor-pointer relative"])}"><span class="${ssrRenderClass(["text-xs font-semibold", date.active ? "text-slate-700" : "text-slate-200", date.bold ? "text-base" : ""])}">${ssrInterpolate(date.day)}</span>`);
        if (date.event) {
          _push(`<div class="${ssrRenderClass(["mt-1 p-1.5 rounded-lg text-[8px] font-semibold uppercase", date.color])}">${ssrInterpolate(date.event)}</div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      });
      _push(`<!--]--></div></div>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ProgressCalendar.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_2 = Object.assign(_sfc_main$2, { __name: "ProgressCalendar" });
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "ProgressActivityTimeline",
  __ssrInlineRender: true,
  setup(__props) {
    const activities = [
      { action: "Grade Published", details: "Physics Quiz #4: 92/100", time: "2 hours ago", icon: FileText, color: "text-accent", bg: "bg-indigo-50" },
      { action: "Attendance Warning", details: "Unexcused late arrival: History", time: "Yesterday", icon: AlertTriangle, color: "text-red-500", bg: "bg-red-50" },
      { action: "PTC Scheduled", details: "Meeting with Dr. Aris (Math)", time: "3 days ago", icon: Users2, color: "text-accent", bg: "bg-indigo-50" }
    ];
    const deadlines = [
      { title: "History Essay", details: "Modern European Revolutions", due: "Due Tomorrow", color: "text-red-500", bg: "bg-red-50" },
      { title: "Science Lab Report", details: "Fluid Dynamics Analysis", due: "Friday, Oct 20", color: "text-accent", bg: "bg-indigo-50" }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "space-y-6" }, _attrs))}><div class="glass-card-static p-6"><div class="flex items-center justify-between mb-4"><h3 class="section-title text-lg flex items-center">`);
      _push(ssrRenderComponent(unref(Calendar), { class: "w-5 h-5 mr-2 text-accent" }, null, _parent));
      _push(` Recent Activity </h3></div><div class="space-y-3"><!--[-->`);
      ssrRenderList(activities, (activity) => {
        _push(`<div class="flex items-start gap-3 p-3 -mx-3 rounded-xl hover:bg-slate-50 transition-all cursor-pointer"><div class="${ssrRenderClass(["p-2.5 rounded-xl shadow-sm", activity.bg])}">`);
        ssrRenderVNode(_push, createVNode(resolveDynamicComponent(activity.icon), {
          class: ["w-4 h-4", activity.color],
          "stroke-width": "2"
        }, null), _parent);
        _push(`</div><div class="flex-1 min-w-0"><h4 class="text-sm font-semibold text-slate-700">${ssrInterpolate(activity.action)}</h4><p class="text-xs text-slate-400 mt-0.5">${ssrInterpolate(activity.details)}</p><p class="text-[10px] text-slate-300 mt-1 uppercase tracking-wide">${ssrInterpolate(activity.time)}</p></div></div>`);
      });
      _push(`<!--]--></div></div><div class="glass-card-static p-6 overflow-hidden"><div class="flex items-center justify-between mb-4"><h3 class="section-title text-lg flex items-center">`);
      _push(ssrRenderComponent(unref(Calendar), { class: "w-5 h-5 mr-2 text-red-500" }, null, _parent));
      _push(` Upcoming Deadlines </h3></div><div class="space-y-3"><!--[-->`);
      ssrRenderList(deadlines, (deadline) => {
        _push(`<div class="p-4 rounded-xl border border-slate-100 hover:border-accent/30 transition-all cursor-pointer"><div class="flex items-center justify-between mb-2"><span class="${ssrRenderClass(["text-[10px] font-semibold uppercase", deadline.color])}">${ssrInterpolate(deadline.due)}</span></div><h4 class="text-sm font-semibold text-slate-700">${ssrInterpolate(deadline.title)}</h4><p class="text-xs text-slate-400 mt-1">${ssrInterpolate(deadline.details)}</p></div>`);
      });
      _push(`<!--]--></div></div></div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ProgressActivityTimeline.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_3 = Object.assign(_sfc_main$1, { __name: "ProgressActivityTimeline" });
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "progress",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ProgressSummary = __nuxt_component_0;
      const _component_ProgressSubjectBreakdown = __nuxt_component_1;
      const _component_ProgressCalendar = __nuxt_component_2;
      const _component_ProgressActivityTimeline = __nuxt_component_3;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "max-w-[1600px] mx-auto pb-16" }, _attrs))}><div class="flex flex-col lg:flex-row lg:items-end justify-between mb-8 gap-4"><div><h2 class="page-title">Student Progress</h2><p class="text-slate-500 mt-2 uppercase tracking-wider text-sm">Academic Year 2023/24 • Term 2</p></div><button class="btn-primary flex items-center self-start lg:self-auto">`);
      _push(ssrRenderComponent(unref(Download), { class: "w-4 h-4 mr-2" }, null, _parent));
      _push(` Export Full Report </button></div><div class="grid grid-cols-1 lg:grid-cols-[1fr,350px] gap-6"><div class="space-y-6">`);
      _push(ssrRenderComponent(_component_ProgressSummary, null, null, _parent));
      _push(ssrRenderComponent(_component_ProgressSubjectBreakdown, null, null, _parent));
      _push(ssrRenderComponent(_component_ProgressCalendar, null, null, _parent));
      _push(`</div><div>`);
      _push(ssrRenderComponent(_component_ProgressActivityTimeline, null, null, _parent));
      _push(`</div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/progress.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=progress-CbfRPiCi.mjs.map
