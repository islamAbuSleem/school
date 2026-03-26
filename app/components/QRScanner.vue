<script setup lang="ts">
import { QrCode } from 'lucide-vue-next'
</script>

<template>
  <div class="bg-white rounded-3xl p-8 flex flex-col items-center justify-center shadow-sm ring-1 ring-slate-100 h-fit">
    <h3 class="text-[10px] font-bold text-slate-400 tracking-[0.2em] uppercase mb-8">STUDENT ID SCAN</h3>
    
    <div class="relative w-48 h-48 mb-8">
      <!-- QR Frame Corners -->
      <div class="absolute inset-0 border-2 border-dashed border-slate-200 rounded-3xl"></div>
      
      <!-- Corner Highlights -->
      <div class="absolute -top-1 -left-1 w-6 h-6 border-t-4 border-l-4 border-red-600 rounded-tl-lg"></div>
      <div class="absolute -top-1 -right-1 w-6 h-6 border-t-4 border-r-4 border-red-600 rounded-tr-lg"></div>
      <div class="absolute -bottom-1 -left-1 w-6 h-6 border-b-4 border-l-4 border-red-600 rounded-bl-lg"></div>
      <div class="absolute -bottom-1 -right-1 w-6 h-6 border-b-4 border-r-4 border-red-600 rounded-br-lg"></div>

      <div class="absolute inset-6 flex items-center justify-center">
        <QrCode class="w-full h-full text-slate-200" stroke-width="1.5" />
      </div>
    </div>

    <p class="text-xs font-medium text-slate-400 text-center leading-relaxed max-w-[180px]">
      Position student card within the frame to record entry automatically
    </p>
  </div>
</template>
