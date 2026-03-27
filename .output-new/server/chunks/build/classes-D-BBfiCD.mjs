import { defineComponent, mergeProps, unref, createVNode, resolveDynamicComponent, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrRenderClass, ssrInterpolate, ssrRenderVNode } from 'vue/server-renderer';
import { LayoutGrid, Sparkles, ChevronDown, MoreVertical, Lock, PlusCircle, AlertTriangle, Users2, DoorOpen } from 'lucide-vue-next';

const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "ScheduleHeader",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-col lg:flex-row lg:items-center justify-between mb-6 gap-4" }, _attrs))}><div><h2 class="page-title">Weekly Class Schedule</h2><p class="text-slate-500 mt-1">Academic Year 2023–2024 • Term 2</p></div><div class="flex items-center gap-3"><button class="btn-secondary flex items-center">`);
      _push(ssrRenderComponent(unref(LayoutGrid), { class: "w-4 h-4 mr-2" }, null, _parent));
      _push(` Manage Classrooms </button><button class="btn-primary flex items-center">`);
      _push(ssrRenderComponent(unref(Sparkles), { class: "w-4 h-4 mr-2 text-white/80" }, null, _parent));
      _push(` Generate Auto Schedule </button></div></div>`);
    };
  }
});
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ScheduleHeader.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const __nuxt_component_0 = Object.assign(_sfc_main$4, { __name: "ScheduleHeader" });
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "ScheduleFilters",
  __ssrInlineRender: true,
  setup(__props) {
    const viewOptions = [
      { label: "Week View", active: true },
      { label: "Day View", active: false }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-col sm:flex-row sm:items-center justify-between mb-6 gap-4" }, _attrs))}><div class="flex flex-wrap items-center gap-3"><span class="text-xs font-medium text-slate-400 uppercase tracking-wider">Filters:</span><div class="flex flex-wrap items-center gap-2"><button class="flex items-center px-4 py-2 bg-white text-slate-600 text-sm font-medium rounded-xl shadow-sm border border-slate-100 hover:border-slate-200 transition-all"> Filter by Grade `);
      _push(ssrRenderComponent(unref(ChevronDown), { class: "w-4 h-4 ml-2 text-slate-400" }, null, _parent));
      _push(`</button><button class="flex items-center px-4 py-2 bg-white text-slate-600 text-sm font-medium rounded-xl shadow-sm border border-slate-100 hover:border-slate-200 transition-all"> Filter by Teacher `);
      _push(ssrRenderComponent(unref(ChevronDown), { class: "w-4 h-4 ml-2 text-slate-400" }, null, _parent));
      _push(`</button></div></div><div class="bg-slate-100 p-1 rounded-xl flex items-center"><!--[-->`);
      ssrRenderList(viewOptions, (option) => {
        _push(`<button class="${ssrRenderClass([option.active ? "bg-white text-accent shadow-sm" : "text-slate-400 hover:text-slate-600", "px-4 py-2 text-sm font-medium rounded-lg transition-all"])}">${ssrInterpolate(option.label)}</button>`);
      });
      _push(`<!--]--></div></div>`);
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ScheduleFilters.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_1 = Object.assign(_sfc_main$3, { __name: "ScheduleFilters" });
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "ScheduleGrid",
  __ssrInlineRender: true,
  setup(__props) {
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday"];
    const times = ["08:00", "09:30", "11:00", "12:30", "14:00"];
    const schedule = [
      { day: "Sunday", time: "08:00", title: "Advanced Physics", teacher: "Prof. James Wilson", room: "ROOM 402", type: "science", status: "active" },
      { day: "Monday", time: "08:00", title: "Literature Analysis", teacher: "Ms. Layla Hassan", room: "LIBRARY B", type: "arts", status: "active" },
      { day: "Tuesday", time: "08:00", title: "Calculus II", teacher: "Dr. Sarah Ahmed", room: "ROOM 305", type: "math", status: "active" },
      { day: "Wednesday", time: "08:00", title: "Visual Arts", teacher: "Marcus Stone", room: "STUDIO 1", type: "arts", status: "active" },
      { day: "Thursday", time: "08:00", title: "Ethics", teacher: "Prof. Lee", room: "AUDITORIUM", type: "social", status: "active" },
      { day: "Sunday", time: "09:30", type: "placeholder" },
      { day: "Monday", time: "09:30", title: "Chemistry Lab", teacher: "Dr. Elena Rostova", room: "LAB 04", type: "science", status: "active" },
      { day: "Tuesday", time: "09:30", title: "Macroeconomics", teacher: "Dr. Sarah Ahmed", room: "ROOM 101", type: "social", status: "active" },
      { day: "Wednesday", time: "09:30", title: "Advanced Physics", teacher: "Prof. James Wilson", room: "ROOM 402", type: "science", status: "active" },
      { day: "Thursday", time: "09:30", type: "placeholder" },
      { day: "Sunday", time: "12:30", title: "Computer Science", teacher: "Eng. Samer Ali", room: "ICT LAB 1", type: "it", status: "active" },
      { day: "Monday", time: "12:30", title: "Physical Education", teacher: "Coach Ryan", room: "SPORTS HALL", type: "pe", status: "active" },
      { day: "Tuesday", time: "12:30", title: "Biology II", teacher: "Dr. Elena Rostova", room: "ROOM 202", type: "science", status: "active" },
      { day: "Wednesday", time: "12:30", title: "World History", teacher: "Prof. Omar Khalid", room: "ROOM 105", type: "social", status: "active" },
      { day: "Thursday", time: "12:30", title: "Calculus II", teacher: "Dr. Sarah Ahmed", room: "ROOM 305", type: "math", status: "active" },
      { day: "Sunday", time: "14:00", title: "Faculty Meeting", teacher: "Board Room", room: "ADMIN AREA", type: "meeting", status: "locked" },
      { day: "Monday", time: "14:00", title: "Database Systems", teacher: "Eng. Samer Ali", room: "ICT LAB 2", type: "it", status: "active" },
      { day: "Tuesday", time: "14:00", title: "Literature Analysis", teacher: "Ms. Layla Hassan", room: "LIBRARY B", type: "arts", status: "active" },
      { day: "Wednesday", time: "14:00", type: "placeholder" },
      { day: "Thursday", time: "14:00", title: "Physical Education", teacher: "Coach Ryan", room: "SPORTS HALL", type: "pe", status: "active" }
    ];
    const getCardColor = (type) => {
      switch (type) {
        case "science":
          return "bg-indigo-50/80 border-l-indigo-500 text-indigo-900";
        case "math":
          return "bg-sky-50/80 border-l-sky-500 text-sky-900";
        case "arts":
          return "bg-orange-50/80 border-l-orange-500 text-orange-900";
        case "social":
          return "bg-red-50/80 border-l-red-500 text-red-900";
        case "it":
          return "bg-violet-50/80 border-l-violet-500 text-violet-900";
        case "pe":
          return "bg-amber-50/80 border-l-amber-500 text-amber-900";
        case "meeting":
          return "bg-slate-50/80 border-l-slate-400 text-slate-700";
        default:
          return "bg-white border-slate-200";
      }
    };
    const getItem = (day, time) => schedule.find((s) => s.day === day && s.time === time);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "glass-card-static overflow-hidden mb-6" }, _attrs))}><div class="grid grid-cols-[80px,repeat(5,1fr)]"><div class="h-16 bg-primary flex items-center justify-center border-r border-white/10"><span class="text-[10px] font-semibold text-slate-400 uppercase tracking-wider">Time</span></div><!--[-->`);
      ssrRenderList(days, (day) => {
        _push(`<div class="h-16 bg-primary flex items-center justify-center border-r border-white/10 last:border-r-0"><span class="text-base font-semibold text-white">${ssrInterpolate(day)}</span></div>`);
      });
      _push(`<!--]--><!--[-->`);
      ssrRenderList(times, (time) => {
        _push(`<!--[-->`);
        if (time === "11:00") {
          _push(`<!--[--><div class="h-12 bg-slate-50 flex items-center justify-center border-b border-r border-slate-100"><span class="text-xs font-medium text-slate-400">${ssrInterpolate(time)}</span></div><div class="col-span-5 h-12 bg-slate-50 flex items-center justify-center border-b border-slate-100"><span class="text-[10px] font-medium text-slate-400 uppercase tracking-widest italic"> Morning Assembly &amp; Mid-day Interval </span></div><!--]-->`);
        } else {
          _push(`<!--[--><div class="h-36 flex items-center justify-center border-b border-r border-slate-100 bg-white"><span class="text-sm font-semibold text-slate-600">${ssrInterpolate(time)}</span></div><!--[-->`);
          ssrRenderList(days, (day) => {
            _push(`<div class="h-36 p-2 border-b border-r border-slate-100 last:border-r-0 bg-white relative">`);
            if (getItem(day, time)?.type && getItem(day, time).type !== "placeholder") {
              _push(`<div class="${ssrRenderClass([getCardColor(getItem(day, time).type), "h-full rounded-xl border-l-4 p-3 flex flex-col justify-between transition-all hover:scale-[1.02] cursor-pointer group"])}"><div><div class="flex items-start justify-between mb-1"><h4 class="font-semibold text-xs leading-tight pr-2">${ssrInterpolate(getItem(day, time).title)}</h4>`);
              if (getItem(day, time).status !== "locked") {
                _push(ssrRenderComponent(unref(MoreVertical), { class: "w-4 h-4 opacity-40 group-hover:opacity-100 transition-opacity flex-shrink-0" }, null, _parent));
              } else {
                _push(ssrRenderComponent(unref(Lock), { class: "w-4 h-4 text-slate-400 flex-shrink-0" }, null, _parent));
              }
              _push(`</div><p class="text-[10px] opacity-70">${ssrInterpolate(getItem(day, time).teacher)}</p></div><div class="flex items-center justify-between"><span class="bg-white/60 px-2 py-0.5 rounded text-[9px] font-medium">${ssrInterpolate(getItem(day, time).room)}</span></div></div>`);
            } else {
              _push(`<div class="h-full rounded-xl border-2 border-dashed border-slate-100 flex flex-col items-center justify-center text-slate-300 hover:border-accent/30 hover:text-accent/50 transition-all cursor-pointer group">`);
              _push(ssrRenderComponent(unref(PlusCircle), { class: "w-5 h-5 mb-1 opacity-30 group-hover:opacity-100 transition-opacity" }, null, _parent));
              _push(`<span class="text-[8px] font-medium uppercase tracking-wider">Assign</span></div>`);
            }
            _push(`</div>`);
          });
          _push(`<!--]--><!--]-->`);
        }
        _push(`<!--]-->`);
      });
      _push(`<!--]--></div></div>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ScheduleGrid.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_2 = Object.assign(_sfc_main$2, { __name: "ScheduleGrid" });
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "ScheduleStatsFooter",
  __ssrInlineRender: true,
  setup(__props) {
    const stats = [
      {
        label: "Conflicts Detected",
        value: "02 Issues",
        icon: AlertTriangle,
        color: "bg-red-50 text-red-600",
        iconBg: "bg-white"
      },
      {
        label: "Teacher Utilization",
        value: "88% Capacity",
        icon: Users2,
        color: "bg-indigo-50 text-indigo-600",
        iconBg: "bg-white"
      },
      {
        label: "Rooms Occupied",
        value: "14 / 18",
        icon: DoorOpen,
        color: "bg-slate-50 text-slate-600",
        iconBg: "bg-white"
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "grid grid-cols-1 sm:grid-cols-3 gap-4" }, _attrs))}><!--[-->`);
      ssrRenderList(stats, (stat) => {
        _push(`<div class="glass-card flex items-center gap-4"><div class="${ssrRenderClass(["p-3 rounded-xl shadow-sm", stat.iconBg])}">`);
        ssrRenderVNode(_push, createVNode(resolveDynamicComponent(stat.icon), {
          class: ["w-5 h-5", stat.color.replace("bg-", "text-")],
          "stroke-width": "2"
        }, null), _parent);
        _push(`</div><div><p class="text-[10px] font-medium text-slate-400 uppercase tracking-wider mb-0.5">${ssrInterpolate(stat.label)}</p><p class="${ssrRenderClass([stat.color, "text-lg font-bold"])}">${ssrInterpolate(stat.value)}</p></div></div>`);
      });
      _push(`<!--]--></div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ScheduleStatsFooter.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_3 = Object.assign(_sfc_main$1, { __name: "ScheduleStatsFooter" });
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "classes",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ScheduleHeader = __nuxt_component_0;
      const _component_ScheduleFilters = __nuxt_component_1;
      const _component_ScheduleGrid = __nuxt_component_2;
      const _component_ScheduleStatsFooter = __nuxt_component_3;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "max-w-[1600px] mx-auto pb-12 px-4 md:px-10" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_ScheduleHeader, null, null, _parent));
      _push(ssrRenderComponent(_component_ScheduleFilters, null, null, _parent));
      _push(ssrRenderComponent(_component_ScheduleGrid, null, null, _parent));
      _push(ssrRenderComponent(_component_ScheduleStatsFooter, null, null, _parent));
      _push(`<div class="mt-12 md:mt-16 text-center"><p class="text-[10px] font-black text-slate-300 tracking-[0.4em] uppercase"> THE ACADEMIC EDITORIAL © 2024 • EXCELLENCE IN ADMINISTRATION </p></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/classes.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=classes-D-BBfiCD.mjs.map
