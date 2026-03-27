<script setup lang="ts">
import { QrCode } from 'lucide-vue-next'
</script>

<template>
  <div class="glass-card-static p-6 flex flex-col items-center justify-center">
    <h3 class="text-xs font-medium text-slate-400 uppercase tracking-wider mb-6">Student ID Scan</h3>
    
    <div class="relative w-40 h-40 mb-6">
      <div class="absolute inset-0 border-2 border-dashed border-slate-200 rounded-2xl"></div>
      
      <div class="absolute -top-1 -left-1 w-5 h-5 border-t-3 border-l-3 border-accent rounded-tl-lg"></div>
      <div class="absolute -top-1 -right-1 w-5 h-5 border-t-3 border-r-3 border-accent rounded-tr-lg"></div>
      <div class="absolute -bottom-1 -left-1 w-5 h-5 border-b-3 border-l-3 border-accent rounded-bl-lg"></div>
      <div class="absolute -bottom-1 -right-1 w-5 h-5 border-b-3 border-r-3 border-accent rounded-br-lg"></div>

      <div class="absolute inset-8 flex items-center justify-center">
        <QrCode class="w-full h-full text-slate-200" stroke-width="1.5" />
      </div>
    </div>

    <p class="text-xs text-slate-400 text-center leading-relaxed max-w-[180px]">
      Position student card within the frame to record entry automatically
    </p>
  </div>
</template>
