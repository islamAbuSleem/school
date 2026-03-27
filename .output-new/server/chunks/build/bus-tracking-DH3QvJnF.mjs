import { defineComponent, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderStyle, ssrRenderList, ssrRenderClass, ssrInterpolate, ssrRenderAttr } from 'vue/server-renderer';
import { Route, Bus, Navigation, Plus, Minus, Target, CheckCircle2, Users2, User, Star, MessageSquare, ShieldCheck } from 'lucide-vue-next';

const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "BusTrackingMap",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-indigo-100 rounded-[48px] h-[600px] relative overflow-hidden group shadow-inner ring-1 ring-slate-200" }, _attrs))}><div class="absolute inset-0 bg-[#A5B4FC] opacity-50"><div class="absolute top-20 left-40 w-1 h-80 bg-white/40 rotate-45"></div><div class="absolute top-40 left-80 w-1 h-80 bg-white/40 -rotate-12"></div><div class="absolute bottom-20 right-40 w-1 h-80 bg-white/40 rotate-12"></div><div class="absolute top-1/2 left-0 w-full h-1 bg-white/20"></div><div class="absolute left-1/2 top-0 h-full w-1 bg-white/20"></div></div><div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"><div class="relative"><div class="absolute -top-12 -left-12 w-24 h-24 bg-red-500/20 rounded-full animate-ping"></div><div class="w-12 h-12 bg-white rounded-2xl shadow-2xl flex items-center justify-center relative z-10 border-4 border-red-500">`);
      _push(ssrRenderComponent(unref(Bus), { class: "w-6 h-6 text-red-500" }, null, _parent));
      _push(`</div></div></div><div class="absolute top-40 left-1/3"><div class="flex flex-col items-center"><div class="w-4 h-4 bg-indigo-600 rounded-full border-2 border-white shadow-lg"></div><div class="mt-2 bg-white px-3 py-1 rounded-lg shadow-xl ring-1 ring-slate-100"><p class="text-[8px] font-black text-[#0F172A] tracking-widest uppercase">North Park Station</p></div></div></div><div class="absolute top-10 left-10 bg-white/90 backdrop-blur-xl p-8 rounded-[32px] shadow-2xl ring-1 ring-white/50 group-hover:scale-105 transition-transform"><p class="text-[9px] font-black text-slate-400 tracking-[0.2em] uppercase mb-2">ESTIMATED ARRIVAL</p><h3 class="text-5xl font-black text-[#0F172A] tracking-tighter">12 Minutes</h3></div><div class="absolute bottom-10 left-10 right-10 bg-[#051139] p-8 rounded-[32px] shadow-2xl ring-1 ring-white/10 flex items-center space-x-8"><div class="p-4 bg-white/10 rounded-2xl">`);
      _push(ssrRenderComponent(unref(Navigation), {
        class: "w-8 h-8 text-indigo-400 animate-pulse",
        "stroke-width": "2.5"
      }, null, _parent));
      _push(`</div><div><h4 class="text-xl font-black text-white tracking-tight mb-1">Current Progress</h4><p class="text-indigo-200/50 text-sm font-bold leading-relaxed uppercase tracking-widest">Approaching Oak Ridge Dr. &amp; 5th Ave. Traffic is light.</p></div></div><div class="absolute bottom-10 right-10 flex flex-col space-y-4"><button class="p-4 bg-white rounded-2xl shadow-xl hover:bg-slate-50 transition-all">`);
      _push(ssrRenderComponent(unref(Plus), { class: "w-6 h-6 text-[#0F172A]" }, null, _parent));
      _push(`</button><button class="p-4 bg-white rounded-2xl shadow-xl hover:bg-slate-50 transition-all">`);
      _push(ssrRenderComponent(unref(Minus), { class: "w-6 h-6 text-[#0F172A]" }, null, _parent));
      _push(`</button><button class="p-4 bg-white rounded-2xl shadow-xl hover:bg-slate-50 transition-all">`);
      _push(ssrRenderComponent(unref(Target), { class: "w-6 h-6 text-[#0F172A]" }, null, _parent));
      _push(`</button></div></div>`);
    };
  }
});
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/BusTrackingMap.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const __nuxt_component_0 = Object.assign(_sfc_main$5, { __name: "BusTrackingMap" });
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "BusTrackingTimeline",
  __ssrInlineRender: true,
  setup(__props) {
    const stops = [
      { name: "St. Edwards Campus", time: "Departed 3:15 PM", status: "completed" },
      { name: "North Park Station", time: "Last Stop 3:28 PM", status: "completed" },
      { name: "Oak Ridge Dr.", time: "Current Location", status: "active" },
      { name: "Greenwood Circle", time: "Est. 3:42 PM", status: "pending" },
      { name: "Oakwood Estates", time: "Est. 3:55 PM", status: "pending" }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "mt-12 bg-[#F8FAFC] rounded-[48px] p-12 shadow-inner ring-1 ring-slate-100 relative group overflow-hidden" }, _attrs))}><div class="flex items-center justify-between mb-16"><h3 class="text-xl font-black text-[#0F172A] tracking-tight uppercase">Route Timeline</h3><span class="px-4 py-1.5 bg-indigo-50 text-indigo-600 rounded-full text-[9px] font-black tracking-widest uppercase shadow-sm ring-1 ring-indigo-100">IN TRANSIT</span></div><div class="flex items-start justify-between relative px-10"><div class="absolute top-[11px] left-20 right-20 h-0.5 bg-slate-200"><div class="h-full bg-indigo-600 transition-all duration-1000" style="${ssrRenderStyle({ "width": "50%" })}"></div></div><!--[-->`);
      ssrRenderList(stops, (stop) => {
        _push(`<div class="flex flex-col items-center relative z-10 w-40"><div class="${ssrRenderClass(["w-6 h-6 rounded-full flex items-center justify-center ring-4 ring-white shadow-sm mb-6 transition-all", stop.status === "completed" ? "bg-indigo-600" : stop.status === "active" ? "bg-white ring-indigo-600" : "bg-slate-200"])}">`);
        if (stop.status === "completed") {
          _push(ssrRenderComponent(unref(CheckCircle2), { class: "w-3 h-3 text-white" }, null, _parent));
        } else if (stop.status === "active") {
          _push(ssrRenderComponent(unref(Bus), { class: "w-3 h-3 text-indigo-600" }, null, _parent));
        } else {
          _push(`<div class="w-1.5 h-1.5 bg-white rounded-full"></div>`);
        }
        _push(`</div><h4 class="${ssrRenderClass(["text-xs font-black text-center mb-2", stop.status === "pending" ? "text-slate-300" : "text-[#0F172A]"])}">${ssrInterpolate(stop.name)}</h4><p class="${ssrRenderClass(["text-[9px] font-bold text-center uppercase tracking-widest", stop.status === "active" ? "text-red-500" : "text-slate-300"])}">${ssrInterpolate(stop.time)}</p></div>`);
      });
      _push(`<!--]--></div></div>`);
    };
  }
});
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/BusTrackingTimeline.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const __nuxt_component_1 = Object.assign(_sfc_main$4, { __name: "BusTrackingTimeline" });
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "BusTrackingStudents",
  __ssrInlineRender: true,
  setup(__props) {
    const students = [
      { name: "Julian Thorne", grade: "Grade 4 - Section B", avatar: "https://ui-avatars.com/api/?name=JT&background=0F172A&color=fff" },
      { name: "Elena Thorne", grade: "Grade 7 - Section A", avatar: "https://ui-avatars.com/api/?name=ET&background=1E293B&color=fff" }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-white rounded-[40px] p-10 shadow-sm ring-1 ring-slate-100 flex-1 relative group h-full" }, _attrs))}><div class="flex items-center justify-between mb-12"><h3 class="text-xl font-black text-[#0F172A] tracking-tight flex items-center uppercase">`);
      _push(ssrRenderComponent(unref(Users2), { class: "w-6 h-6 mr-3 text-indigo-600" }, null, _parent));
      _push(` Students On Board </h3></div><div class="space-y-6"><!--[-->`);
      ssrRenderList(students, (student) => {
        _push(`<div class="flex items-center p-6 rounded-3xl bg-[#F8FAFC] transition-all hover:bg-white hover:shadow-xl hover:ring-1 hover:ring-slate-100 cursor-pointer group/item"><img${ssrRenderAttr("src", student.avatar)}${ssrRenderAttr("alt", student.name)} class="w-14 h-14 rounded-2xl object-cover shadow-lg group-hover/item:scale-110 transition-transform"><div class="ml-6 flex-1"><h4 class="text-base font-black text-[#0F172A] leading-tight">${ssrInterpolate(student.name)}</h4><p class="text-[10px] font-bold text-slate-400 mt-1 uppercase tracking-widest">${ssrInterpolate(student.grade)}</p></div>`);
        _push(ssrRenderComponent(unref(CheckCircle2), {
          class: "w-5 h-5 text-green-500",
          "stroke-width": "3"
        }, null, _parent));
        _push(`</div>`);
      });
      _push(`<!--]--></div></div>`);
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/BusTrackingStudents.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_2 = Object.assign(_sfc_main$3, { __name: "BusTrackingStudents" });
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "BusTrackingDriver",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-[#051139] rounded-[40px] p-10 shadow-2xl ring-1 ring-white/5 relative group overflow-hidden" }, _attrs))}><div class="absolute -top-12 -right-12 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity"></div><div class="relative"><div class="flex items-center space-x-4 mb-10">`);
      _push(ssrRenderComponent(unref(User), { class: "w-6 h-6 text-indigo-400" }, null, _parent));
      _push(`<h3 class="text-xl font-black text-white tracking-tight uppercase">Driver Profile</h3></div><div class="flex items-center space-x-8 mb-12"><img src="https://ui-avatars.com/api/?name=MH&amp;background=random" class="w-24 h-24 rounded-[32px] object-cover ring-4 ring-white/10 shadow-2xl group-hover:scale-105 transition-transform"><div><h4 class="text-2xl font-black text-white leading-tight mb-2">Marcus Halloway</h4><p class="text-[10px] font-bold text-white/40 uppercase tracking-[0.2em] mb-4">Verified Staff • 12Y Exp</p><div class="flex items-center space-x-1"><!--[-->`);
      ssrRenderList(5, (i) => {
        _push(ssrRenderComponent(unref(Star), {
          key: i,
          class: "w-4 h-4 text-orange-400 fill-orange-400"
        }, null, _parent));
      });
      _push(`<!--]--><span class="ml-2 text-xs font-black text-white">4.8</span></div></div></div><div class="grid grid-cols-2 gap-6 mb-12"><div class="bg-white/5 p-6 rounded-3xl border border-white/5"><p class="text-[9px] font-black text-white/30 uppercase tracking-widest mb-2">BUS LICENSE</p><p class="text-sm font-black text-white tracking-widest">TX–8821–B</p></div><div class="bg-white/5 p-6 rounded-3xl border border-white/5"><p class="text-[9px] font-black text-white/30 uppercase tracking-widest mb-2">SAFETY RATING</p><p class="text-sm font-black text-green-400 tracking-widest">Excellent</p></div></div><button class="w-full py-5 bg-white text-[#0F172A] rounded-[24px] font-black text-[11px] tracking-widest uppercase shadow-2xl hover:bg-slate-50 transition-all transform hover:translate-y-[-2px] flex items-center justify-center">`);
      _push(ssrRenderComponent(unref(MessageSquare), { class: "w-5 h-5 mr-4" }, null, _parent));
      _push(` Message Driver </button></div></div>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/BusTrackingDriver.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_3 = Object.assign(_sfc_main$2, { __name: "BusTrackingDriver" });
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "BusTrackingProcedures",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "mt-8 bg-red-50/50 rounded-[40px] p-10 border-l-8 border-red-600 shadow-sm ring-1 ring-red-100 relative group overflow-hidden" }, _attrs))}><div class="absolute -top-12 -right-12 w-64 h-64 bg-red-500/5 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity"></div><div class="flex items-start space-x-8 relative"><div class="p-4 bg-white rounded-2xl shadow-xl ring-1 ring-red-50 group-hover:scale-110 transition-transform">`);
      _push(ssrRenderComponent(unref(ShieldCheck), {
        class: "w-8 h-8 text-red-600",
        "stroke-width": "2.5"
      }, null, _parent));
      _push(`</div><div><h4 class="text-xl font-black text-[#0F172A] tracking-tight mb-3 uppercase">Standard Procedures</h4><p class="text-xs font-bold text-red-600/60 leading-relaxed max-w-sm uppercase tracking-widest"> The bus is following all safety protocols. GPS updates every 5 seconds. In-cabin surveillance is active. </p></div></div></div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/BusTrackingProcedures.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_4 = Object.assign(_sfc_main$1, { __name: "BusTrackingProcedures" });
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "bus-tracking",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_BusTrackingMap = __nuxt_component_0;
      const _component_BusTrackingTimeline = __nuxt_component_1;
      const _component_BusTrackingStudents = __nuxt_component_2;
      const _component_BusTrackingDriver = __nuxt_component_3;
      const _component_BusTrackingProcedures = __nuxt_component_4;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "max-w-[1600px] mx-auto pb-16" }, _attrs))}><div class="flex flex-col lg:flex-row lg:items-center justify-between mb-8 gap-4"><div><p class="text-xs font-semibold text-accent uppercase tracking-wider mb-2">Real-time Logistics</p><h2 class="page-title uppercase">Live Bus Tracking</h2></div><div class="glass-card flex items-center gap-4 p-4 hover:scale-[1.01] transition-transform cursor-pointer"><div class="p-3 bg-indigo-50 rounded-xl">`);
      _push(ssrRenderComponent(unref(Route), {
        class: "w-5 h-5 text-accent",
        "stroke-width": "2"
      }, null, _parent));
      _push(`</div><div><p class="text-xs font-medium text-slate-400 uppercase tracking-wider mb-1">Active Route</p><p class="text-2xl font-bold text-slate-800" style="${ssrRenderStyle({ "font-family": "var(--font-display)" })}">Route 42B</p></div></div></div><div class="grid grid-cols-1 lg:grid-cols-[1fr,400px] gap-6"><div class="space-y-6">`);
      _push(ssrRenderComponent(_component_BusTrackingMap, null, null, _parent));
      _push(ssrRenderComponent(_component_BusTrackingTimeline, null, null, _parent));
      _push(`</div><div class="space-y-6">`);
      _push(ssrRenderComponent(_component_BusTrackingStudents, null, null, _parent));
      _push(ssrRenderComponent(_component_BusTrackingDriver, null, null, _parent));
      _push(ssrRenderComponent(_component_BusTrackingProcedures, null, null, _parent));
      _push(`</div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/bus-tracking.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=bus-tracking-DH3QvJnF.mjs.map
