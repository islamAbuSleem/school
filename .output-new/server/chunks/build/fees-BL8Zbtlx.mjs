import { defineComponent, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderStyle, ssrRenderList, ssrRenderClass } from 'vue/server-renderer';
import { CreditCard, CalendarDays, Download, GraduationCap, Zap, Building2, BookOpen, Plus } from 'lucide-vue-next';

const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "FeesAccountsOverview",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "space-y-6" }, _attrs))}><div><h3 class="section-title mb-1">Accounts Overview</h3><p class="text-sm text-slate-500">Financial summary for the 2023 Fall Academic Year</p></div><div class="grid grid-cols-1 md:grid-cols-3 gap-4"><div class="bg-gradient-to-br from-primary to-slate-700 rounded-2xl p-6 text-white shadow-lg"><p class="text-xs font-medium text-slate-300 uppercase tracking-wider mb-4">Total Outstanding</p><h4 class="text-3xl font-bold mb-4" style="${ssrRenderStyle({ "font-family": "var(--font-display)" })}">$4,250.00</h4><div class="flex items-center gap-2 text-sm text-slate-300">`);
      _push(ssrRenderComponent(unref(CalendarDays), { class: "w-4 h-4 flex-shrink-0" }, null, _parent));
      _push(`<span>Next Due: Oct 15, 2023</span></div></div><div class="glass-card-static p-6"><p class="text-xs font-medium text-slate-400 uppercase tracking-wider mb-2">Paid This Term</p><h4 class="text-3xl font-bold text-slate-800 mb-4" style="${ssrRenderStyle({ "font-family": "var(--font-display)" })}">$12,800.00</h4><div class="space-y-2"><div class="h-1.5 bg-slate-100 rounded-full overflow-hidden"><div class="h-full w-3/4 bg-accent rounded-full"></div></div><p class="text-xs text-slate-500">75% of annual tuition completed</p></div></div><div class="glass-card-static p-6"><p class="text-xs font-medium text-slate-400 uppercase tracking-wider mb-2">Term Total</p><h4 class="text-3xl font-bold text-slate-800 mb-4" style="${ssrRenderStyle({ "font-family": "var(--font-display)" })}">$17,050.00</h4><p class="text-xs text-slate-500">Includes Athletics &amp; Lab Fees</p></div></div></div>`);
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/FeesAccountsOverview.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_0 = Object.assign(_sfc_main$3, { __name: "FeesAccountsOverview" });
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "FeesTransactionHistory",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "space-y-6" }, _attrs))}><div class="flex items-center justify-between"><h3 class="section-title">Transaction History</h3><button class="flex items-center gap-2 px-4 py-2 text-sm font-medium text-slate-500 hover:text-accent transition-colors">`);
      _push(ssrRenderComponent(unref(Download), { class: "w-4 h-4" }, null, _parent));
      _push(` Download Statement </button></div><div class="glass-card-static overflow-hidden"><table class="w-full"><thead><tr class="border-b border-slate-100"><th class="px-6 py-4 text-left text-xs font-medium text-slate-400 uppercase tracking-wider">Description</th><th class="px-6 py-4 text-left text-xs font-medium text-slate-400 uppercase tracking-wider">Date</th><th class="px-6 py-4 text-left text-xs font-medium text-slate-400 uppercase tracking-wider">Method</th><th class="px-6 py-4 text-left text-xs font-medium text-slate-400 uppercase tracking-wider">Amount</th></tr></thead><tbody><tr class="border-b border-slate-50 hover:bg-slate-50 transition-colors"><td class="px-6 py-5"><div class="flex items-center gap-4"><div class="w-10 h-10 bg-slate-100 rounded-xl flex items-center justify-center">`);
      _push(ssrRenderComponent(unref(GraduationCap), { class: "w-5 h-5 text-slate-400" }, null, _parent));
      _push(`</div><div><p class="text-sm font-semibold text-slate-700">Fall Quarter Tuition</p><p class="text-xs text-slate-400">INV-2023-089</p></div></div></td><td class="px-6 py-5"><p class="text-sm font-medium text-slate-600">Sep 12, 2023</p></td><td class="px-6 py-5"><div class="flex items-center gap-2 text-slate-600">`);
      _push(ssrRenderComponent(unref(CreditCard), { class: "w-4 h-4" }, null, _parent));
      _push(`<span class="text-sm font-medium">Visa ••••</span><span class="text-xs text-slate-400">4242</span></div></td><td class="px-6 py-5"><p class="text-sm font-bold text-slate-800">$12,000.00</p></td></tr><tr class="border-b border-slate-50 hover:bg-slate-50 transition-colors"><td class="px-6 py-5"><div class="flex items-center gap-4"><div class="w-10 h-10 bg-amber-50 rounded-xl flex items-center justify-center">`);
      _push(ssrRenderComponent(unref(Zap), { class: "w-5 h-5 text-amber-500" }, null, _parent));
      _push(`</div><div><p class="text-sm font-semibold text-slate-700">Athletics &amp; Club Fees</p><p class="text-xs text-slate-400">ACT-9921</p></div></div></td><td class="px-6 py-5"><p class="text-sm font-medium text-slate-600">Sep 15, 2023</p></td><td class="px-6 py-5"><div class="flex items-center gap-2 text-slate-600">`);
      _push(ssrRenderComponent(unref(Building2), { class: "w-4 h-4" }, null, _parent));
      _push(`<span class="text-sm font-medium">Bank ••••</span><span class="text-xs text-slate-400">1009</span></div></td><td class="px-6 py-5"><p class="text-sm font-bold text-slate-800">$450.00</p></td></tr><tr class="hover:bg-slate-50 transition-colors"><td class="px-6 py-5"><div class="flex items-center gap-4"><div class="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center">`);
      _push(ssrRenderComponent(unref(BookOpen), { class: "w-5 h-5 text-blue-500" }, null, _parent));
      _push(`</div><div><p class="text-sm font-semibold text-slate-700">Resource &amp; Tech Lab Fee</p><p class="text-xs text-slate-400">LAB-4402</p></div></div></td><td class="px-6 py-5"><p class="text-sm font-medium text-slate-600">Sep 18, 2023</p></td><td class="px-6 py-5"><div class="flex items-center gap-2 text-slate-600">`);
      _push(ssrRenderComponent(unref(CreditCard), { class: "w-4 h-4" }, null, _parent));
      _push(`<span class="text-sm font-medium">Visa ••••</span><span class="text-xs text-slate-400">4242</span></div></td><td class="px-6 py-5"><p class="text-sm font-bold text-slate-800">$350.00</p></td></tr></tbody></table></div></div>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/FeesTransactionHistory.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_1 = Object.assign(_sfc_main$2, { __name: "FeesTransactionHistory" });
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "FeesSavedMethods",
  __ssrInlineRender: true,
  setup(__props) {
    const getQRPattern = (index) => {
      const patterns = [0, 1, 0, 1, 1, 1, 0, 1, 0, 1, 1, 0, 0, 1, 1, 0, 1, 0, 0, 0, 1, 0, 1, 1, 0];
      return patterns[index] ? "bg-white" : "bg-slate-700";
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "space-y-6" }, _attrs))}><div class="flex items-center justify-between"><h3 class="section-title">Saved Methods</h3><button class="p-2 text-slate-400 hover:text-accent transition-colors rounded-lg hover:bg-slate-50">`);
      _push(ssrRenderComponent(unref(Plus), { class: "w-5 h-5" }, null, _parent));
      _push(`</button></div><div class="space-y-3"><div class="glass-card-static p-4 hover:scale-[1.01] transition-transform cursor-pointer group"><div class="flex items-center justify-between"><div class="flex items-center gap-3"><div class="w-11 h-11 bg-primary rounded-xl flex items-center justify-center"><span class="text-white font-bold text-xs">VISA</span></div><div><p class="text-sm font-semibold text-slate-700">Visa Platinum</p><p class="text-xs text-slate-400">•••• 4242 | Exp 12/26</p></div></div><div class="w-5 h-5 border-2 border-slate-200 rounded-full group-hover:border-accent transition-colors"></div></div></div><div class="glass-card-static p-4 hover:scale-[1.01] transition-transform cursor-pointer group"><div class="flex items-center justify-between"><div class="flex items-center gap-3"><div class="w-11 h-11 bg-slate-100 rounded-xl flex items-center justify-center">`);
      _push(ssrRenderComponent(unref(Building2), { class: "w-5 h-5 text-slate-600" }, null, _parent));
      _push(`</div><div><p class="text-sm font-semibold text-slate-700">St. Edwards Credit Union</p><p class="text-xs text-slate-400">•••• 1009 | Savings</p></div></div><div class="w-5 h-5 border-2 border-slate-200 rounded-full group-hover:border-accent transition-colors flex-shrink-0"></div></div></div></div><div class="bg-gradient-to-br from-red-50 to-orange-50 rounded-2xl p-5 border border-red-100 mt-4"><div class="mb-3"><p class="text-xs font-semibold text-red-500 uppercase tracking-wider mb-1">Quick Mobile Pay</p><p class="text-sm font-medium text-slate-700">Scan to pay via School App</p></div><div class="flex justify-center py-4"><div class="w-28 h-28 bg-primary rounded-xl p-2 flex items-center justify-center"><div class="w-full h-full grid grid-cols-5 gap-0.5"><!--[-->`);
      ssrRenderList(25, (i) => {
        _push(`<div class="${ssrRenderClass([getQRPattern(i), "rounded-sm"])}"></div>`);
      });
      _push(`<!--]--></div></div></div><p class="text-xs text-slate-500 text-center leading-relaxed"> Securely authorise payments from your mobile device using Biometric ID. </p></div></div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/FeesSavedMethods.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_2 = Object.assign(_sfc_main$1, { __name: "FeesSavedMethods" });
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "fees",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_FeesAccountsOverview = __nuxt_component_0;
      const _component_FeesTransactionHistory = __nuxt_component_1;
      const _component_FeesSavedMethods = __nuxt_component_2;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "max-w-[1600px] mx-auto pb-16" }, _attrs))}><div class="flex flex-col lg:flex-row lg:items-center justify-between mb-8 gap-4"><div><h2 class="page-title">Fees &amp; Payments</h2></div><button class="btn-primary flex items-center self-start lg:self-auto">`);
      _push(ssrRenderComponent(unref(CreditCard), { class: "w-4 h-4 mr-2" }, null, _parent));
      _push(` Make a Payment </button></div><div class="grid grid-cols-1 lg:grid-cols-[1fr,350px] gap-6"><div class="space-y-6">`);
      _push(ssrRenderComponent(_component_FeesAccountsOverview, null, null, _parent));
      _push(ssrRenderComponent(_component_FeesTransactionHistory, null, null, _parent));
      _push(`</div><div>`);
      _push(ssrRenderComponent(_component_FeesSavedMethods, null, null, _parent));
      _push(`</div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/fees.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=fees-BL8Zbtlx.mjs.map
