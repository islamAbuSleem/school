<script setup lang="ts">
import { LayoutGrid, Sparkles } from 'lucide-vue-next'
</script>

<template>
  <div class="flex items-center justify-between mb-8">
    <div>
      <h2 class="text-4xl font-extrabold text-[#0F172A] tracking-tight">Weekly Class Schedule</h2>
      <p class="text-slate-400 mt-2 font-semibold text-lg">Academic Year 2023–2024 • Term 2</p>
    </div>
    
    <div class="flex items-center space-x-4">
      <button class="bg-white text-[#0F172A] px-6 py-3 rounded-xl font-bold flex items-center shadow-sm ring-1 ring-slate-200 hover:bg-slate-50 transition-all">
        <LayoutGrid class="w-5 h-5 mr-3" />
        Manage Classrooms
      </button>
      <button class="bg-[#0F172A] text-white px-6 py-3 rounded-xl font-bold flex items-center shadow-lg hover:bg-slate-800 transition-all">
        <Sparkles class="w-5 h-5 mr-3 text-blue-400" />
        Generate Auto Schedule
      </button>
    </div>
  </div>
</template>
