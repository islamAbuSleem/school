<script setup lang="ts">
import { QrCode } from 'lucide-vue-next'
</script>

<template>
  <div class="bg-white rounded-[40px] p-12 shadow-sm ring-1 ring-slate-100 flex flex-col items-center justify-center relative overflow-hidden group">
    <div class="absolute -top-12 -right-12 w-32 h-32 bg-indigo-50 rounded-full blur-3xl opacity-40 group-hover:opacity-100 transition-opacity"></div>
    <div class="absolute -bottom-12 -left-12 w-32 h-32 bg-orange-50 rounded-full blur-3xl opacity-40 group-hover:opacity-100 transition-opacity"></div>

    <div class="relative w-48 h-48 mb-10 bg-white p-4 rounded-3xl shadow-xl ring-1 ring-slate-100 flex items-center justify-center transform group-hover:scale-105 transition-all">
      <QrCode class="w-full h-full text-[#0F172A]" stroke-width="1.5" />
    </div>

    <h3 class="text-xl font-black text-[#0F172A] tracking-tight text-center mb-3">Institution Quick-Connect</h3>
    <p class="text-[11px] font-bold text-slate-400 text-center leading-relaxed max-w-[200px] uppercase tracking-widest">
      Scan for immediate Guest Registration or Visitor Logs.
    </p>
  </div>
</template>
