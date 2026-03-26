<script setup lang="ts">
import { AlertTriangle, ArrowRight } from 'lucide-vue-next'
</script>

<template>
  <div class="bg-[#2D0A01] rounded-[40px] p-12 shadow-2xl ring-1 ring-white/5 relative group overflow-hidden">
    <div class="absolute -top-12 -right-12 w-64 h-64 bg-red-500/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity"></div>

    <div class="flex items-start space-x-10 relative">
      <div class="p-5 bg-white rounded-3xl shadow-xl ring-1 ring-red-50 group-hover:rotate-12 transition-transform">
        <AlertTriangle class="w-10 h-10 text-red-600" stroke-width="2.5" />
      </div>
      
      <div class="flex-1">
        <h3 class="text-3xl font-black text-white tracking-tight mb-4 flex items-center">
          Attendance Warning
        </h3>
        <p class="text-red-200/40 text-base font-bold leading-relaxed max-w-md mb-10">
          12 students have dropped below the 85% mandatory prestige attendance threshold this week.
        </p>
        
        <button class="flex items-center text-[11px] font-black tracking-[0.2em] text-red-500 hover:text-red-400 transition-colors group/btn uppercase">
          INITIATE REVIEW PROCESS
          <ArrowRight class="w-5 h-5 ml-4 group-hover/btn:translate-x-2 transition-transform" stroke-width="3" />
        </button>
      </div>
    </div>
  </div>
</template>
