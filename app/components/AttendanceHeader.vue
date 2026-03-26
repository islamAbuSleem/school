<script setup lang="ts">
import { CheckCircle2 } from 'lucide-vue-next'
</script>

<template>
  <div class="flex items-center justify-between mb-10">
    <div>
      <h2 class="text-3xl font-bold text-[#0F172A]">Class 10A - Mathematics</h2>
      <p class="text-slate-400 mt-1 font-medium">Sunday, Oct 12 • 09:00 AM - 10:30 AM</p>
    </div>
    
    <div class="flex items-center space-x-6">
      <div class="bg-[#E2E8F0] px-4 py-1.5 rounded-full">
        <span class="text-[10px] font-bold text-[#475569] tracking-widest uppercase">24/28 STUDENTS RECORDED</span>
      </div>
      <button class="bg-[#0F172A] text-white px-6 py-3 rounded-xl font-bold flex items-center shadow-lg hover:bg-slate-800 transition-all">
        <CheckCircle2 class="w-5 h-5 mr-3" />
        End Session
      </button>
    </div>
  </div>
</template>
