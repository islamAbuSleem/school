<script setup lang="ts">
import { AlertTriangle, ArrowRight } from 'lucide-vue-next'
</script>

<template>
  <div class="glass-card-static p-6 relative group overflow-hidden border-l-4 border-l-amber-400">
    <div class="absolute -top-4 -right-4 w-24 h-24 bg-amber-50 rounded-full blur-3xl opacity-50 group-hover:opacity-100 transition-opacity"></div>

    <div class="flex items-start gap-4 relative">
      <div class="p-3 bg-amber-100 rounded-xl">
        <AlertTriangle class="w-6 h-6 text-amber-500" stroke-width="2" />
      </div>
      
      <div class="flex-1">
        <h3 class="text-lg font-bold text-slate-800 mb-1" style="font-family: var(--font-display)">
          Attendance Warning
        </h3>
        <p class="text-slate-500 text-sm leading-relaxed mb-4">
          12 students have dropped below the 85% mandatory attendance threshold this week.
        </p>
        
        <button class="flex items-center text-xs font-semibold text-amber-500 hover:text-amber-600 transition-colors group/btn">
          INITIATE REVIEW PROCESS
          <ArrowRight class="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" stroke-width="2" />
        </button>
      </div>
    </div>
  </div>
</template>
