<script setup lang="ts">
import { QrCode } from 'lucide-vue-next'
</script>

<template>
  <div class="glass-card-static p-8 flex flex-col items-center justify-center relative overflow-hidden group">
    <div class="absolute -top-8 -right-8 w-24 h-24 bg-indigo-100 rounded-full blur-3xl opacity-50 group-hover:opacity-100 transition-opacity"></div>
    <div class="absolute -bottom-8 -left-8 w-24 h-24 bg-purple-100 rounded-full blur-3xl opacity-50 group-hover:opacity-100 transition-opacity"></div>

    <div class="relative w-36 h-36 mb-6 bg-white p-4 rounded-2xl shadow-lg flex items-center justify-center transform group-hover:scale-105 transition-all duration-300">
      <QrCode class="w-full h-full text-slate-800" stroke-width="1.5" />
    </div>

    <h3 class="text-lg font-bold text-slate-800 text-center mb-2" style="font-family: var(--font-display)">Quick Connect</h3>
    <p class="text-xs text-slate-400 text-center leading-relaxed max-w-[220px]">
      Scan for immediate Guest Registration or Visitor Logs.
    </p>
  </div>
</template>
