import { mergeProps, defineComponent, createVNode, resolveDynamicComponent, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrRenderStyle, ssrRenderClass, ssrRenderVNode, ssrInterpolate } from 'vue/server-renderer';
import { Users2, GraduationCap, TrendingUp, Wallet, AlertTriangle, Bus, UserPlus, CheckCircle2, Edit3, QrCode } from 'lucide-vue-next';
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
  __name: "DashboardSummary",
  __ssrInlineRender: true,
  setup(__props) {
    const stats = [
      { label: "Total Students", value: "1,240", change: "+12%", icon: Users2, color: "from-indigo-500 to-indigo-600", badge: "bg-emerald-100 text-emerald-600" },
      { label: "Total Teachers", value: "84", status: "Stable", icon: GraduationCap, color: "from-red-500 to-red-600", badge: "bg-slate-100 text-slate-500" },
      { label: "Attendance Today", value: "94%", status: "Excellent", icon: TrendingUp, color: "from-orange-500 to-orange-600", badge: "bg-emerald-100 text-emerald-600" },
      { label: "Fees Collected", value: "$450k", status: "On Track", icon: Wallet, color: "from-blue-500 to-blue-600", badge: "bg-emerald-100 text-emerald-600" }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 lg:gap-6" }, _attrs))}><!--[-->`);
      ssrRenderList(stats, (stat, index2) => {
        _push(`<div class="stat-card group opacity-0 animate-slide-up" style="${ssrRenderStyle({ animationDelay: `${index2 * 0.1}s` })}"><div class="flex items-start justify-between mb-4"><div class="${ssrRenderClass(["p-3 rounded-xl bg-gradient-to-br shadow-lg", stat.color])}">`);
        ssrRenderVNode(_push, createVNode(resolveDynamicComponent(stat.icon), {
          class: "w-5 h-5 text-white",
          "stroke-width": "2.5"
        }, null), _parent);
        _push(`</div>`);
        if (stat.change || stat.status) {
          _push(`<div class="${ssrRenderClass(["px-2.5 py-1 rounded-full text-[10px] font-bold", stat.badge])}">${ssrInterpolate(stat.change || stat.status)}</div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div><div><p class="text-xs font-medium text-slate-400 uppercase tracking-wider mb-1">${ssrInterpolate(stat.label)}</p><p class="text-2xl font-bold text-slate-800" style="${ssrRenderStyle({ "font-family": "var(--font-display)" })}">${ssrInterpolate(stat.value)}</p></div></div>`);
      });
      _push(`<!--]--></div>`);
    };
  }
});
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/DashboardSummary.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const __nuxt_component_0 = Object.assign(_sfc_main$6, { __name: "DashboardSummary" });
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "DashboardFinancialOverview",
  __ssrInlineRender: true,
  setup(__props) {
    const months = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN"];
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "glass-card-static p-8" }, _attrs))}><div class="flex items-center justify-between mb-8"><h3 class="section-title">Monthly Financial Overview</h3><div class="flex items-center space-x-1 bg-slate-100 p-1 rounded-xl"><button class="px-4 py-2 text-xs font-medium bg-white text-accent rounded-lg shadow-sm">Revenue</button><button class="px-4 py-2 text-xs font-medium text-slate-400 hover:text-slate-600 transition-colors">Expenses</button></div></div><div class="h-56 flex items-end justify-between px-2"><!--[-->`);
      ssrRenderList(months, (month) => {
        _push(`<div class="flex flex-col items-center w-full group"><div class="relative w-3 h-40 bg-slate-100 rounded-full flex items-end overflow-hidden"><div class="w-full bg-gradient-to-t from-accent to-purple-400 rounded-full transition-all duration-700 group-hover:opacity-80" style="${ssrRenderStyle({ height: month === "APR" ? "70%" : month === "MAR" ? "55%" : "35%" })}"></div>`);
        if (month === "APR") {
          _push(`<div class="absolute -top-8 left-1/2 -translate-x-1/2 bg-accent text-white text-[10px] font-bold px-2 py-1 rounded-lg shadow-lg"> $24k </div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div><span class="text-[10px] font-medium text-slate-400 mt-3 uppercase">${ssrInterpolate(month)}</span></div>`);
      });
      _push(`<!--]--></div></div>`);
    };
  }
});
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/DashboardFinancialOverview.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const __nuxt_component_1 = Object.assign(_sfc_main$5, { __name: "DashboardFinancialOverview" });
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "DashboardAcademicPulse",
  __ssrInlineRender: true,
  setup(__props) {
    const schedule = [
      { time: "09:00 AM", period: "Period 1", subject: "Advanced Mathematics", teacher: "Dr. Sarah Jenkins", grade: "Grade 12-A", status: "IN PROGRESS", statusColor: "bg-indigo-100 text-indigo-600" },
      { time: "10:45 AM", period: "Period 2", subject: "World Literature & Philosophy", teacher: "Prof. Julian Black", grade: "Theatre Hall", status: "UP NEXT", statusColor: "bg-red-100 text-red-600" },
      { time: "12:30 PM", period: "Lunch", subject: "Staff Interaction Session", teacher: "Faculty Lounge", grade: "", status: "PLANNED", statusColor: "bg-slate-100 text-slate-400" }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "glass-card-static p-8" }, _attrs))}><div class="flex items-center justify-between mb-6"><h3 class="section-title">Today&#39;s Academic Pulse</h3><button class="text-sm font-medium text-accent hover:text-accent-hover transition-colors border-b border-accent pb-0.5">Full Schedule</button></div><div class="space-y-3"><!--[-->`);
      ssrRenderList(schedule, (item) => {
        _push(`<div class="${ssrRenderClass([item.status === "UP NEXT" ? "bg-accent/5 border-accent/20" : "", "flex items-center p-4 rounded-xl transition-all hover:scale-[1.01] cursor-pointer border border-transparent hover:border-slate-200 hover:bg-white/60"])}"><div class="w-20 border-r border-slate-200 mr-5"><p class="text-sm font-bold text-slate-700">${ssrInterpolate(item.time)}</p><p class="text-[10px] font-medium text-slate-400 uppercase mt-0.5">${ssrInterpolate(item.period)}</p></div><div class="flex-1 flex items-center justify-between"><div><h4 class="text-sm font-bold text-slate-800 leading-tight">${ssrInterpolate(item.subject)}</h4><p class="text-xs text-slate-400 mt-1">${ssrInterpolate(item.teacher)} `);
        if (item.grade) {
          _push(`<span class="mx-1 opacity-30">•</span>`);
        } else {
          _push(`<!---->`);
        }
        _push(` ${ssrInterpolate(item.grade)}</p></div><span class="${ssrRenderClass(["px-3 py-1.5 rounded-lg text-[10px] font-bold uppercase", item.statusColor])}">${ssrInterpolate(item.status)}</span></div></div>`);
      });
      _push(`<!--]--></div></div>`);
    };
  }
});
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/DashboardAcademicPulse.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const __nuxt_component_2 = Object.assign(_sfc_main$4, { __name: "DashboardAcademicPulse" });
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "DashboardAdminAlerts",
  __ssrInlineRender: true,
  setup(__props) {
    const alerts = [
      {
        title: "5 students at high risk of academic failure.",
        description: "Immediate counselor review required.",
        icon: AlertTriangle,
        color: "text-orange-500",
        bg: "bg-orange-100"
      },
      {
        title: "Bus 03 delay reported (Route 12).",
        description: "ETA: 20 mins late due to roadworks.",
        icon: Bus,
        color: "text-indigo-500",
        bg: "bg-indigo-100"
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-2xl p-6 shadow-xl relative overflow-hidden group" }, _attrs))}><div class="absolute inset-0 bg-gradient-to-br from-accent/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div><div class="flex items-center justify-between mb-6 relative"><h3 class="text-sm font-bold text-white uppercase tracking-wider flex items-center">`);
      _push(ssrRenderComponent(unref(AlertTriangle), { class: "w-5 h-5 mr-2 text-orange-400" }, null, _parent));
      _push(` Administrative Alerts </h3></div><div class="space-y-4 relative"><!--[-->`);
      ssrRenderList(alerts, (alert) => {
        _push(`<div class="flex items-start space-x-4 transition-all hover:translate-x-1 cursor-pointer p-3 rounded-xl hover:bg-white/5"><div class="${ssrRenderClass(["p-3 rounded-xl", alert.bg])}">`);
        ssrRenderVNode(_push, createVNode(resolveDynamicComponent(alert.icon), {
          class: ["w-5 h-5", alert.color],
          "stroke-width": "2"
        }, null), _parent);
        _push(`</div><div><h4 class="text-sm font-bold text-white leading-snug">${ssrInterpolate(alert.title)}</h4><p class="text-xs text-slate-400 mt-1">${ssrInterpolate(alert.description)}</p></div></div>`);
      });
      _push(`<!--]--></div><button class="w-full mt-6 py-3 text-xs font-medium text-slate-400 hover:text-white transition-colors border-t border-white/10 pt-4"> DISMISS ALL </button></div>`);
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/DashboardAdminAlerts.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_3 = Object.assign(_sfc_main$3, { __name: "DashboardAdminAlerts" });
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "DashboardRecentLog",
  __ssrInlineRender: true,
  setup(__props) {
    const logs = [
      { action: "New student registered", name: "Amina Ahmed", details: "Grade 9-B", time: "Just now", icon: UserPlus, color: "text-indigo-500", bg: "bg-indigo-100" },
      { action: "Attendance session closed", name: "Class 10A • Morning Shift", details: "", time: "14 mins ago", icon: CheckCircle2, color: "text-emerald-500", bg: "bg-emerald-100" },
      { action: "Fee Payment Processed", name: "$1,200.00 • Transaction #9921", details: "", time: "1 hour ago", icon: Wallet, color: "text-blue-500", bg: "bg-blue-100" },
      { action: "Grade Modification", name: "By Dr. Jenkins • Science Unit 2", details: "", time: "2 hours ago", icon: Edit3, color: "text-orange-500", bg: "bg-orange-100" }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "glass-card-static p-6" }, _attrs))}><div class="flex items-center justify-between mb-5"><h3 class="section-title text-lg">Recent Activity</h3></div><div class="space-y-3"><!--[-->`);
      ssrRenderList(logs, (log) => {
        _push(`<div class="flex items-start space-x-3 transition-all hover:translate-x-1 cursor-pointer p-3 -mx-3 rounded-xl hover:bg-slate-50"><div class="${ssrRenderClass(["p-2.5 rounded-lg", log.bg])}">`);
        ssrRenderVNode(_push, createVNode(resolveDynamicComponent(log.icon), {
          class: ["w-4 h-4", log.color],
          "stroke-width": "2"
        }, null), _parent);
        _push(`</div><div class="flex-1 min-w-0"><h4 class="text-sm font-medium text-slate-700 truncate">${ssrInterpolate(log.action)}</h4><p class="text-xs text-slate-400 truncate">${ssrInterpolate(log.name)}</p><p class="text-[10px] text-slate-300 mt-1 uppercase tracking-wide">${ssrInterpolate(log.time)}</p></div></div>`);
      });
      _push(`<!--]--></div><button class="w-full mt-5 py-3 text-sm font-medium text-slate-500 hover:text-accent transition-colors border border-slate-200 rounded-xl hover:border-accent/30"> View Full Audit Log </button></div>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/DashboardRecentLog.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_4 = Object.assign(_sfc_main$2, { __name: "DashboardRecentLog" });
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "DashboardQuickConnect",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "glass-card-static p-8 flex flex-col items-center justify-center relative overflow-hidden group" }, _attrs))}><div class="absolute -top-8 -right-8 w-24 h-24 bg-indigo-100 rounded-full blur-3xl opacity-50 group-hover:opacity-100 transition-opacity"></div><div class="absolute -bottom-8 -left-8 w-24 h-24 bg-purple-100 rounded-full blur-3xl opacity-50 group-hover:opacity-100 transition-opacity"></div><div class="relative w-36 h-36 mb-6 bg-white p-4 rounded-2xl shadow-lg flex items-center justify-center transform group-hover:scale-105 transition-all duration-300">`);
      _push(ssrRenderComponent(unref(QrCode), {
        class: "w-full h-full text-slate-800",
        "stroke-width": "1.5"
      }, null, _parent));
      _push(`</div><h3 class="text-lg font-bold text-slate-800 text-center mb-2" style="${ssrRenderStyle({ "font-family": "var(--font-display)" })}">Quick Connect</h3><p class="text-xs text-slate-400 text-center leading-relaxed max-w-[220px]"> Scan for immediate Guest Registration or Visitor Logs. </p></div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/DashboardQuickConnect.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_5 = Object.assign(_sfc_main$1, { __name: "DashboardQuickConnect" });
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_DashboardSummary = __nuxt_component_0;
  const _component_DashboardFinancialOverview = __nuxt_component_1;
  const _component_DashboardAcademicPulse = __nuxt_component_2;
  const _component_DashboardAdminAlerts = __nuxt_component_3;
  const _component_DashboardRecentLog = __nuxt_component_4;
  const _component_DashboardQuickConnect = __nuxt_component_5;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "max-w-[1600px] mx-auto pb-16" }, _attrs))}><div class="flex flex-col lg:flex-row items-start lg:items-center justify-between mb-8 gap-4"><div><h2 class="page-title animate-fade-in">Welcome back, Administrator</h2><p class="text-slate-500 mt-2 leading-relaxed max-w-2xl animate-fade-in stagger-1"> Here&#39;s the curated overview of Prestige Academy&#39;s performance and operations for today. </p></div><div class="flex items-center glass-card-static px-2 py-1.5"><button class="px-4 py-2 text-sm font-medium text-slate-400 hover:text-slate-600 transition-colors rounded-lg">Term 2: 2024</button><button class="btn-primary text-xs px-6">Academic Overview</button></div></div>`);
  _push(ssrRenderComponent(_component_DashboardSummary, null, null, _parent));
  _push(`<div class="grid grid-cols-1 xl:grid-cols-[1fr,380px] gap-6 mt-8"><div class="space-y-6">`);
  _push(ssrRenderComponent(_component_DashboardFinancialOverview, null, null, _parent));
  _push(ssrRenderComponent(_component_DashboardAcademicPulse, null, null, _parent));
  _push(`</div><div class="space-y-6">`);
  _push(ssrRenderComponent(_component_DashboardAdminAlerts, null, null, _parent));
  _push(ssrRenderComponent(_component_DashboardRecentLog, null, null, _parent));
  _push(ssrRenderComponent(_component_DashboardQuickConnect, null, null, _parent));
  _push(`</div></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { index as default };
//# sourceMappingURL=index-EPVacZdx.mjs.map
