import { defineComponent, mergeProps, unref, createVNode, resolveDynamicComponent, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderStyle, ssrRenderList, ssrRenderClass, ssrInterpolate, ssrRenderVNode } from 'vue/server-renderer';
import { CheckCircle2, QrCode, AlertTriangle, ChevronDown, TrendingUp, Clock, ShieldCheck, RefreshCw } from 'lucide-vue-next';

const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "AttendanceHeader",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-col sm:flex-row sm:items-center justify-between mb-6 gap-4" }, _attrs))}><div><h2 class="text-2xl font-bold text-slate-800" style="${ssrRenderStyle({ "font-family": "var(--font-display)" })}">Class 10A - Mathematics</h2><p class="text-slate-500 mt-1">Sunday, Oct 12 • 09:00 AM - 10:30 AM</p></div><div class="flex flex-wrap items-center gap-4"><div class="bg-slate-100 px-4 py-2 rounded-xl"><span class="text-xs font-medium text-slate-500">24/28 Students Recorded</span></div><button class="btn-primary flex items-center">`);
      _push(ssrRenderComponent(unref(CheckCircle2), { class: "w-4 h-4 mr-2" }, null, _parent));
      _push(` End Session </button></div></div>`);
    };
  }
});
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/AttendanceHeader.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const __nuxt_component_0 = Object.assign(_sfc_main$5, { __name: "AttendanceHeader" });
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "QRScanner",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "glass-card-static p-6 flex flex-col items-center justify-center" }, _attrs))}><h3 class="text-xs font-medium text-slate-400 uppercase tracking-wider mb-6">Student ID Scan</h3><div class="relative w-40 h-40 mb-6"><div class="absolute inset-0 border-2 border-dashed border-slate-200 rounded-2xl"></div><div class="absolute -top-1 -left-1 w-5 h-5 border-t-3 border-l-3 border-accent rounded-tl-lg"></div><div class="absolute -top-1 -right-1 w-5 h-5 border-t-3 border-r-3 border-accent rounded-tr-lg"></div><div class="absolute -bottom-1 -left-1 w-5 h-5 border-b-3 border-l-3 border-accent rounded-bl-lg"></div><div class="absolute -bottom-1 -right-1 w-5 h-5 border-b-3 border-r-3 border-accent rounded-br-lg"></div><div class="absolute inset-8 flex items-center justify-center">`);
      _push(ssrRenderComponent(unref(QrCode), {
        class: "w-full h-full text-slate-200",
        "stroke-width": "1.5"
      }, null, _parent));
      _push(`</div></div><p class="text-xs text-slate-400 text-center leading-relaxed max-w-[180px]"> Position student card within the frame to record entry automatically </p></div>`);
    };
  }
});
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/QRScanner.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const __nuxt_component_1 = Object.assign(_sfc_main$4, { __name: "QRScanner" });
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "UnaccountedAlert",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-amber-50 border border-amber-100 rounded-2xl p-4 flex items-center gap-4" }, _attrs))}><div class="bg-white p-3 rounded-xl shadow-sm">`);
      _push(ssrRenderComponent(unref(AlertTriangle), {
        class: "w-6 h-6 text-amber-500",
        fill: "currentColor"
      }, null, _parent));
      _push(`</div><div><h4 class="text-base font-semibold text-amber-900">4 Students Unaccounted</h4><p class="text-sm text-amber-600 mt-0.5"> System will mark as absent in 15 mins </p></div></div>`);
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/UnaccountedAlert.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_2 = Object.assign(_sfc_main$3, { __name: "UnaccountedAlert" });
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "AttendanceRoll",
  __ssrInlineRender: true,
  setup(__props) {
    const students = [
      { id: "#2024-0012", name: "Alexander Abernathy", initials: "AA", status: "present" },
      { id: "#2024-0045", name: "Beatrice Bennett", initials: "BB", status: "late" },
      { id: "#2024-0089", name: "Caleb Hughes", initials: "CH", status: "excused" },
      { id: "#2024-0102", name: "Diana Lawrence", initials: "DL", status: "present" },
      { id: "#2024-0134", name: "Ethan Miller", initials: "EM", status: "present" }
    ];
    const statusColors = {
      AA: "bg-blue-100 text-blue-600",
      BB: "bg-orange-100 text-orange-600",
      CH: "bg-red-100 text-red-600",
      DL: "bg-indigo-100 text-indigo-600",
      EM: "bg-orange-100 text-orange-600"
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "glass-card-static p-6" }, _attrs))}><div class="flex flex-wrap items-center justify-between gap-4 mb-6"><h3 class="section-title">Attendance Roll</h3><div class="flex items-center gap-2"><button class="flex items-center px-3 py-2 bg-slate-50 text-slate-500 text-xs font-medium rounded-lg hover:bg-slate-100 transition-colors"> Sort by Name `);
      _push(ssrRenderComponent(unref(ChevronDown), { class: "w-4 h-4 ml-1" }, null, _parent));
      _push(`</button><button class="flex items-center px-3 py-2 bg-slate-50 text-slate-500 text-xs font-medium rounded-lg hover:bg-slate-100 transition-colors"> Status Filter `);
      _push(ssrRenderComponent(unref(ChevronDown), { class: "w-4 h-4 ml-1" }, null, _parent));
      _push(`</button></div></div><div class="grid grid-cols-[1fr,repeat(4,60px)] gap-y-4 items-center"><div class="text-[10px] font-medium text-slate-400 uppercase tracking-wider pb-2 border-b border-slate-100">Student Name</div><div class="text-[10px] font-medium text-slate-400 uppercase tracking-wider pb-2 border-b border-slate-100 text-center">Present</div><div class="text-[10px] font-medium text-slate-400 uppercase tracking-wider pb-2 border-b border-slate-100 text-center">Late</div><div class="text-[10px] font-medium text-slate-400 uppercase tracking-wider pb-2 border-b border-slate-100 text-center">Absent</div><div class="text-[10px] font-medium text-slate-400 uppercase tracking-wider pb-2 border-b border-slate-100 text-center">Excused</div><!--[-->`);
      ssrRenderList(students, (student) => {
        _push(`<!--[--><div class="flex items-center gap-3 py-2"><div class="${ssrRenderClass(["w-10 h-10 rounded-xl flex items-center justify-center font-semibold text-sm", statusColors[student.initials]])}">${ssrInterpolate(student.initials)}</div><div><div class="font-semibold text-slate-700 text-sm">${ssrInterpolate(student.name)}</div><div class="text-[10px] text-slate-400">ID: ${ssrInterpolate(student.id)}</div></div></div><div class="flex justify-center"><div class="${ssrRenderClass(["w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all cursor-pointer", student.status === "present" ? "border-accent bg-accent" : "border-slate-200 hover:border-accent"])}">`);
        if (student.status === "present") {
          _push(`<div class="w-2 h-2 bg-white rounded-full"></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div></div><div class="flex justify-center"><div class="${ssrRenderClass(["w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all cursor-pointer", student.status === "late" ? "border-orange-500 bg-orange-500" : "border-slate-200 hover:border-orange-500"])}">`);
        if (student.status === "late") {
          _push(`<div class="w-2 h-2 bg-white rounded-full"></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div></div><div class="flex justify-center"><div class="w-5 h-5 rounded-full border-2 border-slate-200 hover:border-red-500 hover:bg-red-50 transition-all cursor-pointer flex items-center justify-center"></div></div><div class="flex justify-center"><div class="${ssrRenderClass(["w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all cursor-pointer", student.status === "excused" ? "border-purple-500 bg-purple-500" : "border-slate-200 hover:border-purple-500"])}">`);
        if (student.status === "excused") {
          _push(`<div class="w-2 h-2 bg-white rounded-full"></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div></div><!--]-->`);
      });
      _push(`<!--]--></div><button class="w-full mt-8 py-3 text-sm font-medium text-slate-500 hover:text-accent hover:bg-slate-50 rounded-xl transition-colors"> Load Next 10 Students </button></div>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/AttendanceRoll.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_3 = Object.assign(_sfc_main$2, { __name: "AttendanceRoll" });
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "AttendanceStats",
  __ssrInlineRender: true,
  setup(__props) {
    const stats = [
      { label: "Historical Avg", value: "96.4%", icon: TrendingUp },
      { label: "Avg Late Entry", value: "4.2 min", icon: Clock },
      { label: "Validation", value: "Biometric", icon: ShieldCheck },
      { label: "Cloud Sync", value: "Live", icon: RefreshCw, italic: true }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-6" }, _attrs))}><!--[-->`);
      ssrRenderList(stats, (stat) => {
        _push(`<div class="glass-card flex items-center gap-4"><div class="bg-slate-100 p-3 rounded-xl">`);
        ssrRenderVNode(_push, createVNode(resolveDynamicComponent(stat.icon), {
          class: "w-5 h-5 text-slate-600",
          "stroke-width": "1.5"
        }, null), _parent);
        _push(`</div><div><p class="text-[10px] font-medium text-slate-400 uppercase tracking-wider mb-0.5">${ssrInterpolate(stat.label)}</p><p class="${ssrRenderClass(["text-lg font-bold text-slate-700", stat.italic ? "italic" : ""])}">${ssrInterpolate(stat.value)}</p></div></div>`);
      });
      _push(`<!--]--></div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/AttendanceStats.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_4 = Object.assign(_sfc_main$1, { __name: "AttendanceStats" });
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "attendance",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_AttendanceHeader = __nuxt_component_0;
      const _component_QRScanner = __nuxt_component_1;
      const _component_UnaccountedAlert = __nuxt_component_2;
      const _component_AttendanceRoll = __nuxt_component_3;
      const _component_AttendanceStats = __nuxt_component_4;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "max-w-[1400px] mx-auto px-4 md:px-10" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_AttendanceHeader, null, null, _parent));
      _push(`<div class="grid grid-cols-1 lg:grid-cols-[380px,1fr] gap-6 md:gap-10"><div class="space-y-6 md:space-y-10">`);
      _push(ssrRenderComponent(_component_QRScanner, null, null, _parent));
      _push(ssrRenderComponent(_component_UnaccountedAlert, null, null, _parent));
      _push(`</div><div>`);
      _push(ssrRenderComponent(_component_AttendanceRoll, null, null, _parent));
      _push(`</div></div>`);
      _push(ssrRenderComponent(_component_AttendanceStats, null, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/attendance.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=attendance-BuDPhuxi.mjs.map
