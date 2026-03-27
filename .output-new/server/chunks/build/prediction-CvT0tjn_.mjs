import { defineComponent, mergeProps, unref, createVNode, resolveDynamicComponent, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderStyle, ssrRenderComponent, ssrRenderList, ssrInterpolate, ssrRenderClass, ssrRenderVNode } from 'vue/server-renderer';
import { Sparkles, AlertTriangle, ClipboardList, Lightbulb, Calendar, TrendingUp, Target } from 'lucide-vue-next';

const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "PredictionInsights",
  __ssrInlineRender: true,
  setup(__props) {
    const predictions = [
      {
        subject: "Calculus II",
        category: "MATHEMATICS",
        current: "78%",
        predicted: "84%",
        change: "+6%",
        probability: "62%",
        risk: "MEDIUM (Consistency)",
        riskLevel: "text-orange-500 bg-orange-50 ring-orange-100",
        description: "Julian's performance dips during late-week quizzes. Stabilizing quiz scores could yield a 90% final grade."
      },
      {
        subject: "Modern History",
        category: "HUMANITIES",
        current: "91%",
        predicted: "94%",
        change: "+3%",
        probability: "88%",
        risk: "LOW",
        riskLevel: "text-green-600 bg-green-50 ring-green-100",
        description: "Excellent participation and essay scores. Predicted to maintain top-tier performance through finals."
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "grid grid-cols-2 gap-8 mb-12" }, _attrs))}><!--[-->`);
      ssrRenderList(predictions, (pred) => {
        _push(`<div class="bg-white p-10 rounded-[40px] shadow-sm ring-1 ring-slate-100 flex flex-col justify-between transition-all hover:scale-[1.01] cursor-pointer group"><div class="flex items-start justify-between mb-10"><div><span class="px-4 py-1.5 rounded-full text-[10px] font-black tracking-widest uppercase bg-indigo-50 text-indigo-600 ring-1 ring-indigo-100 shadow-sm">${ssrInterpolate(pred.category)}</span><h3 class="text-3xl font-black text-[#0F172A] tracking-tighter mt-6">${ssrInterpolate(pred.subject)}</h3></div><div class="text-right"><p class="text-[10px] font-black text-slate-300 tracking-widest uppercase mb-1">CURRENT</p><p class="text-3xl font-black text-[#0F172A] tracking-tighter">${ssrInterpolate(pred.current)}</p></div></div><div class="mb-10"><p class="text-[10px] font-black text-slate-400 tracking-widest uppercase mb-4">PREDICTED FINAL GRADE</p><div class="flex items-baseline space-x-4"><p class="text-7xl font-black text-[#0F172A] tracking-tighter">${ssrInterpolate(pred.predicted)}</p><p class="text-xl font-black text-green-500 tracking-tight italic">${ssrInterpolate(pred.change)}</p></div></div><div class="space-y-4 mb-10"><div class="flex items-center justify-between"><p class="text-[10px] font-black text-slate-400 tracking-widest uppercase">Probability of Grade A+</p><p class="text-[10px] font-black text-[#0F172A] tracking-widest uppercase">${ssrInterpolate(pred.probability)}</p></div><div class="w-full h-2 bg-slate-50 rounded-full overflow-hidden"><div class="h-full bg-[#0F172A] rounded-full transition-all duration-1000" style="${ssrRenderStyle({ width: pred.probability })}"></div></div></div><div class="${ssrRenderClass(["p-6 rounded-[24px] ring-1 shadow-sm", pred.riskLevel])}"><h4 class="text-[10px] font-black tracking-widest uppercase mb-3 flex items-center">`);
        _push(ssrRenderComponent(unref(AlertTriangle), { class: "w-4 h-4 mr-2" }, null, _parent));
        _push(` RISK: ${ssrInterpolate(pred.risk)}</h4><p class="text-[11px] font-bold leading-relaxed opacity-70">${ssrInterpolate(pred.description)}</p></div></div>`);
      });
      _push(`<!--]--></div>`);
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/PredictionInsights.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_0 = Object.assign(_sfc_main$3, { __name: "PredictionInsights" });
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "PredictionImprovementPath",
  __ssrInlineRender: true,
  setup(__props) {
    const paths = [
      {
        title: "IMMEDIATE FOCUS",
        icon: Sparkles,
        color: "text-indigo-400",
        description: "Calculus Quiz 5 Preparation: Data shows a gap in Integral Calculus mastery.",
        bg: "bg-white/10"
      },
      {
        title: "BEHAVIORAL ALERT",
        icon: ClipboardList,
        color: "text-orange-400",
        description: "Attendance in History: 15% drop in late-session attendance correlated with quiz dips.",
        bg: "bg-white/10"
      },
      {
        title: "OPTIMIZATION",
        icon: Lightbulb,
        color: "text-indigo-400",
        description: "Physics Lab: Submit the optional extra credit for a predicted 2% total grade lift.",
        bg: "bg-white/10"
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[--><div class="bg-[#051139] rounded-[48px] p-16 shadow-2xl ring-1 ring-white/5 relative overflow-hidden group"><div class="absolute -top-12 -right-12 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity"></div><div class="flex items-center space-x-6 mb-16">`);
      _push(ssrRenderComponent(unref(Sparkles), { class: "w-8 h-8 text-indigo-400" }, null, _parent));
      _push(`<h3 class="text-4xl font-black text-white tracking-tighter uppercase">Strategic Improvement Path</h3></div><div class="grid grid-cols-3 gap-10"><!--[-->`);
      ssrRenderList(paths, (path) => {
        _push(`<div class="flex flex-col h-full rounded-[32px] p-8 transition-all hover:bg-white/5 cursor-pointer border border-white/5 group/item"><div class="${ssrRenderClass(["p-4 rounded-2xl w-fit mb-8 shadow-xl", path.bg])}">`);
        ssrRenderVNode(_push, createVNode(resolveDynamicComponent(path.icon), {
          class: ["w-6 h-6", path.color],
          "stroke-width": "2.5"
        }, null), _parent);
        _push(`</div><h4 class="text-[11px] font-black tracking-[0.2em] text-white/40 uppercase mb-4">${ssrInterpolate(path.title)}</h4><p class="text-sm font-bold text-white leading-relaxed mb-8 flex-1 opacity-80 group-hover/item:opacity-100 transition-opacity">${ssrInterpolate(path.description)}</p></div>`);
      });
      _push(`<!--]--></div></div><div class="mt-12 bg-red-50/50 rounded-[48px] p-12 shadow-sm ring-1 ring-red-100 flex items-center justify-between group overflow-hidden relative"><div class="absolute -top-12 -right-12 w-64 h-64 bg-red-500/5 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity"></div><div class="flex items-center space-x-10 relative"><div class="p-5 bg-white rounded-3xl shadow-xl ring-1 ring-red-50 group-hover:rotate-12 transition-transform">`);
      _push(ssrRenderComponent(unref(Calendar), {
        class: "w-8 h-8 text-red-600",
        "stroke-width": "2.5"
      }, null, _parent));
      _push(`</div><div><h4 class="text-2xl font-black text-[#0F172A] tracking-tight mb-2 uppercase">Schedule Consultation</h4><p class="text-[11px] font-bold text-red-600/60 uppercase tracking-widest">Discuss these predictions with Julian&#39;s Advisor.</p></div></div><button class="px-10 py-5 bg-white text-red-600 rounded-[20px] font-black text-[11px] tracking-widest uppercase shadow-xl hover:bg-red-50 transition-all transform hover:translate-y-[-2px] relative"> Book Now </button></div><!--]-->`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/PredictionImprovementPath.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_1 = Object.assign(_sfc_main$2, { __name: "PredictionImprovementPath" });
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "PredictionHistory",
  __ssrInlineRender: true,
  setup(__props) {
    const risks = [
      { label: "Academic Stability", value: "High", icon: TrendingUp, color: "text-green-500" },
      { label: "Engagement Variance", value: "Medium", icon: Target, color: "text-orange-500" },
      { label: "Failure Risk", value: "Low (2%)", icon: AlertTriangle, color: "text-red-500" }
    ];
    const history = [
      { week: "WEEK 12", action: "Prediction Adjusted +2%", details: "Following English midterm results.", icon: TrendingUp, color: "text-indigo-600", bg: "bg-indigo-50" },
      { week: "WEEK 8", action: "Risk Flag: Calculus", details: "Attendance dropped below 80% threshold.", icon: AlertTriangle, color: "text-red-500", bg: "bg-red-50" }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "space-y-12" }, _attrs))}><div class="bg-white rounded-[40px] p-12 shadow-sm ring-1 ring-slate-100 flex-1 relative group"><div class="flex items-center justify-between mb-12"><h3 class="text-xl font-black text-[#0F172A] tracking-tight">Risk Profile Matrix</h3></div><div class="space-y-10"><!--[-->`);
      ssrRenderList(risks, (risk) => {
        _push(`<div class="flex items-center justify-between p-6 rounded-3xl bg-[#F8FAFC] transition-all hover:scale-[1.01] cursor-pointer group/item"><div class="flex items-center space-x-6"><div class="${ssrRenderClass(["w-2 h-2 rounded-full bg-current", risk.color])}"></div><h4 class="text-sm font-black text-[#0F172A] leading-snug">${ssrInterpolate(risk.label)}</h4></div><p class="text-xs font-black text-[#0F172A] opacity-60 uppercase tracking-widest">${ssrInterpolate(risk.value)}</p></div>`);
      });
      _push(`<!--]--></div><div class="mt-16 pt-10 border-t border-slate-50"><div class="flex items-center justify-between mb-6"><p class="text-[10px] font-black text-slate-400 tracking-widest uppercase">TARGET GPA: 3.8</p><p class="text-3xl font-black text-[#0F172A] tracking-tighter">3.65</p></div><div class="w-full h-3 bg-slate-100 rounded-full overflow-hidden mb-4"><div class="h-full bg-[#0F172A] rounded-full transition-all duration-1000" style="${ssrRenderStyle({ "width": "85%" })}"></div></div><p class="text-[10px] font-bold text-slate-300 tracking-widest uppercase">92% of the way to the Dean&#39;s List goal.</p></div></div><div class="bg-white rounded-[40px] p-12 shadow-sm ring-1 ring-slate-100 flex-1 relative group"><div class="flex items-center justify-between mb-12"><h3 class="text-xl font-black text-[#0F172A] tracking-tight">Prediction History</h3></div><div class="space-y-12 pl-4 border-l-2 border-slate-50"><!--[-->`);
      ssrRenderList(history, (log) => {
        _push(`<div class="relative pl-10"><div class="absolute -left-[11px] top-0 w-5 h-5 bg-[#0F172A] rounded-full ring-4 ring-white shadow-sm"></div><p class="text-[9px] font-black text-slate-300 tracking-widest uppercase mb-2">${ssrInterpolate(log.week)}</p><h4 class="text-sm font-black text-[#0F172A] leading-snug">${ssrInterpolate(log.action)}</h4><p class="text-[11px] font-bold text-slate-400 mt-2 leading-relaxed">${ssrInterpolate(log.details)}</p></div>`);
      });
      _push(`<!--]--></div></div></div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/PredictionHistory.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_2 = Object.assign(_sfc_main$1, { __name: "PredictionHistory" });
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "prediction",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_PredictionInsights = __nuxt_component_0;
      const _component_PredictionImprovementPath = __nuxt_component_1;
      const _component_PredictionHistory = __nuxt_component_2;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "max-w-[1600px] mx-auto pb-16" }, _attrs))}><div class="flex flex-col lg:flex-row lg:items-center justify-between mb-8 gap-4"><div><h2 class="page-title">Grade Prediction Insight</h2><p class="text-sm text-slate-500 mt-2 leading-relaxed max-w-xl uppercase tracking-wide"> Projected performance for Julian Edwards — Semester 2, 2024 </p></div><div class="glass-card flex items-center gap-4 p-4 hover:scale-[1.01] transition-transform cursor-pointer"><div class="text-right"><p class="text-xs font-medium text-slate-400 uppercase tracking-wider mb-1">Confidence Level</p><p class="text-2xl font-bold text-slate-800" style="${ssrRenderStyle({ "font-family": "var(--font-display)" })}">94% AI Accuracy</p></div><div class="p-3 bg-indigo-50 rounded-xl">`);
      _push(ssrRenderComponent(unref(Sparkles), {
        class: "w-5 h-5 text-accent",
        "stroke-width": "2"
      }, null, _parent));
      _push(`</div></div></div><div class="grid grid-cols-1 lg:grid-cols-[1fr,400px] gap-6"><div class="space-y-6">`);
      _push(ssrRenderComponent(_component_PredictionInsights, null, null, _parent));
      _push(ssrRenderComponent(_component_PredictionImprovementPath, null, null, _parent));
      _push(`</div><div>`);
      _push(ssrRenderComponent(_component_PredictionHistory, null, null, _parent));
      _push(`</div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/prediction.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=prediction-CvT0tjn_.mjs.map
