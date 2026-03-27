<script setup lang="ts">
import { CheckCircle2 } from 'lucide-vue-next'
</script>

<template>
  <div class="flex flex-col sm:flex-row sm:items-center justify-between mb-6 gap-4">
    <div>
      <h2 class="text-2xl font-bold text-slate-800" style="font-family: var(--font-display)">Class 10A - Mathematics</h2>
      <p class="text-slate-500 mt-1">Sunday, Oct 12 • 09:00 AM - 10:30 AM</p>
    </div>
    
    <div class="flex flex-wrap items-center gap-4">
      <div class="bg-slate-100 px-4 py-2 rounded-xl">
        <span class="text-xs font-medium text-slate-500">24/28 Students Recorded</span>
      </div>
      <button class="btn-primary flex items-center">
        <CheckCircle2 class="w-4 h-4 mr-2" />
        End Session
      </button>
    </div>
  </div>
</template>
