import { _ as __nuxt_component_0 } from './nuxt-link-CCT2e9Ng.mjs';
import { defineComponent, ref, mergeProps, unref, withCtx, createVNode, resolveDynamicComponent, openBlock, createBlock, createTextVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderClass, ssrRenderStyle, ssrRenderList, ssrRenderVNode, ssrInterpolate, ssrRenderAttr, ssrRenderSlot } from 'vue/server-renderer';
import { Menu, X, GraduationCap, LayoutGrid, BookOpen, CalendarCheck, TrendingUp, ClipboardList, FileBarChart, Sparkles, Bus, Wallet, Settings, LogOut, Search, Bell, PieChart } from 'lucide-vue-next';
import { a as useRoute } from './server.mjs';
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

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "default",
  __ssrInlineRender: true,
  setup(__props) {
    const menuItems = [
      { name: "Dashboard", icon: LayoutGrid, to: "/" },
      { name: "Students", icon: GraduationCap, to: "/students" },
      { name: "Classes", icon: BookOpen, to: "/classes" },
      { name: "Attendance", icon: CalendarCheck, to: "/attendance" },
      { name: "Progress", icon: TrendingUp, to: "/progress" },
      { name: "Curriculum", icon: ClipboardList, to: "/curriculum" },
      { name: "Reports", icon: FileBarChart, to: "/reports" },
      { name: "Prediction", icon: Sparkles, to: "/prediction" },
      { name: "Bus Tracking", icon: Bus, to: "/bus-tracking" },
      { name: "Fees", icon: Wallet, to: "/fees" }
    ];
    const route = useRoute();
    const isMobileMenuOpen = ref(false);
    const getHeaderTitle = () => {
      const titles = {
        "/": "Dashboard",
        "/fees": "Fees & Payments",
        "/bus-tracking": "Live Bus Tracking",
        "/students": "Student Management",
        "/classes": "Classes",
        "/attendance": "Attendance",
        "/progress": "Progress",
        "/curriculum": "Curriculum",
        "/reports": "Reports",
        "/prediction": "AI Predictions"
      };
      return titles[route.path] || "Dashboard";
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex h-screen bg-[#F1F5F9]" }, _attrs))}><button class="lg:hidden fixed top-4 left-4 z-50 p-3 bg-white rounded-xl shadow-lg">`);
      if (!unref(isMobileMenuOpen)) {
        _push(ssrRenderComponent(unref(Menu), { class: "w-5 h-5 text-slate-600" }, null, _parent));
      } else {
        _push(ssrRenderComponent(unref(X), { class: "w-5 h-5 text-slate-600" }, null, _parent));
      }
      _push(`</button><aside class="${ssrRenderClass([unref(isMobileMenuOpen) ? "translate-x-0" : "-translate-x-full lg:translate-x-0", "fixed lg:relative z-40 w-72 h-full bg-white/80 backdrop-blur-xl border-r border-white/50 flex flex-col transition-transform duration-300 lg:translate-x-0"])}"><div class="p-6 pt-16 lg:pt-6"><div class="flex items-center space-x-3 mb-2"><div class="w-11 h-11 bg-gradient-to-br from-accent to-purple-500 rounded-xl flex items-center justify-center shadow-lg shadow-accent/30">`);
      _push(ssrRenderComponent(unref(GraduationCap), { class: "w-6 h-6 text-white" }, null, _parent));
      _push(`</div><div><h1 class="text-lg font-bold text-slate-800" style="${ssrRenderStyle({ "font-family": "var(--font-display)" })}">St. Edwards</h1><p class="text-[9px] font-bold text-slate-400 tracking-[0.2em] uppercase mt-0.5">Parent Portal</p></div></div></div><nav class="flex-1 px-4 py-2 space-y-1 overflow-y-auto custom-scrollbar"><!--[-->`);
      ssrRenderList(menuItems, (item) => {
        _push(ssrRenderComponent(_component_NuxtLink, {
          key: item.name,
          to: item.to,
          onClick: ($event) => isMobileMenuOpen.value = false,
          class: ["nav-item", { "active": unref(route).path === item.to }]
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderVNode(_push2, createVNode(resolveDynamicComponent(item.icon), { class: "w-5 h-5 mr-3" }, null), _parent2, _scopeId);
              _push2(` ${ssrInterpolate(item.name)}`);
            } else {
              return [
                (openBlock(), createBlock(resolveDynamicComponent(item.icon), { class: "w-5 h-5 mr-3" })),
                createTextVNode(" " + toDisplayString(item.name), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]--></nav><div class="p-4 mt-auto space-y-2 border-t border-slate-100/50"><div class="glass-card-static p-4 mb-3 cursor-pointer group"><p class="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-3">Primary Student</p><div class="flex items-center space-x-3"><div class="w-10 h-10 bg-gradient-to-br from-accent to-purple-500 rounded-xl flex items-center justify-center overflow-hidden shadow-md"><img src="https://ui-avatars.com/api/?name=JE&amp;background=6366F1&amp;color=fff" class="w-full h-full object-cover"></div><div><p class="text-sm font-bold text-slate-800">Julian Edwards</p><p class="text-[10px] font-medium text-slate-400 uppercase">Grade 8 • Section A</p></div></div></div><button class="nav-item w-full justify-start">`);
      _push(ssrRenderComponent(unref(Settings), { class: "w-4 h-4 mr-3" }, null, _parent));
      _push(` Settings </button><button class="nav-item w-full justify-start text-red-500/70 hover:text-red-500">`);
      _push(ssrRenderComponent(unref(LogOut), { class: "w-4 h-4 mr-3" }, null, _parent));
      _push(` Logout </button></div></aside>`);
      if (unref(isMobileMenuOpen)) {
        _push(`<div class="fixed inset-0 bg-black/20 backdrop-blur-sm z-30 lg:hidden"></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="flex-1 flex flex-col overflow-hidden"><header class="h-20 bg-white/60 backdrop-blur-xl border-b border-white/50 flex items-center justify-between px-6 lg:px-10"><div class="flex items-center space-x-8 ml-12 lg:ml-0"><h2 class="text-xl lg:text-2xl font-bold text-slate-800" style="${ssrRenderStyle({ "font-family": "var(--font-display)" })}">${ssrInterpolate(getHeaderTitle())}</h2>`);
      if (unref(route).path !== "/fees") {
        _push(`<nav class="hidden md:flex items-center space-x-6"><!--[-->`);
        ssrRenderList(["Overview", "Curriculum", "Reports"], (tab) => {
          _push(`<button class="${ssrRenderClass([tab === "Overview" ? "text-accent border-accent" : "text-slate-400 border-transparent hover:text-slate-600", "text-sm font-medium pb-1 transition-all border-b-2"])}">${ssrInterpolate(tab)}</button>`);
        });
        _push(`<!--]--></nav>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="flex items-center space-x-4"><div class="relative hidden sm:block">`);
      _push(ssrRenderComponent(unref(Search), { class: "absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" }, null, _parent));
      _push(`<input type="text"${ssrRenderAttr("placeholder", unref(route).path === "/fees" ? "Search invoices..." : "Search students...")} class="input-glass pl-11 w-64 lg:w-80 text-sm"></div><div class="flex items-center space-x-2"><button class="p-3 text-slate-500 hover:text-accent bg-white/60 rounded-xl shadow-sm border border-white/50 transition-all hover:scale-105">`);
      _push(ssrRenderComponent(unref(Bell), { class: "w-5 h-5" }, null, _parent));
      _push(`<div class="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></div></button><button class="p-3 text-slate-500 hover:text-accent bg-white/60 rounded-xl shadow-sm border border-white/50 transition-all hover:scale-105 hidden sm:block">`);
      _push(ssrRenderComponent(unref(PieChart), { class: "w-5 h-5" }, null, _parent));
      _push(`</button></div><div class="h-8 w-[1px] bg-slate-200 mx-2 hidden lg:block"></div><div class="flex items-center space-x-3 hidden lg:flex"><div class="text-right"><p class="text-sm font-bold text-slate-700">Admin Account</p><p class="text-[10px] font-medium text-slate-400 uppercase tracking-wider">Super Admin</p></div><img src="https://ui-avatars.com/api/?name=Admin+User&amp;background=6366F1&amp;color=fff" alt="Avatar" class="w-11 h-11 rounded-xl object-cover ring-2 ring-white shadow-md"></div></div></header><main class="flex-1 overflow-y-auto p-6 lg:p-8 bg-[#F1F5F9]">`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</main></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=default-CpwvoWBZ.mjs.map
