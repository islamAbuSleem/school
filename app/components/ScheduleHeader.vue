<script setup lang="ts">
import { LayoutGrid, Sparkles } from 'lucide-vue-next'
</script>

<template>
  <div class="flex flex-col lg:flex-row lg:items-center justify-between mb-6 gap-4">
    <div>
      <h2 class="page-title">Weekly Class Schedule</h2>
      <p class="text-slate-500 mt-1">Academic Year 2023–2024 • Term 2</p>
    </div>
    
    <div class="flex items-center gap-3">
      <button class="btn-secondary flex items-center">
        <LayoutGrid class="w-4 h-4 mr-2" />
        Manage Classrooms
      </button>
      <button class="btn-primary flex items-center">
        <Sparkles class="w-4 h-4 mr-2 text-white/80" />
        Generate Auto Schedule
      </button>
    </div>
  </div>
</template>
