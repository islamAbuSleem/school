<template>
  <div class="max-w-[1600px] mx-auto pb-16">
    <div class="flex flex-col lg:flex-row lg:items-end justify-between mb-8 gap-4">
      <div>
        <h2 class="page-title">Student Progress</h2>
        <p class="text-slate-500 mt-2 uppercase tracking-wider text-sm">Academic Year 2023/24 • Term 2</p>
      </div>
      
      <button class="btn-primary flex items-center self-start lg:self-auto">
        <Download class="w-4 h-4 mr-2" />
        Export Full Report
      </button>
    </div>

    <div class="grid grid-cols-1 lg:grid-cols-[1fr,350px] gap-6">
      <div class="space-y-6">
        <ProgressSummary />
        <ProgressSubjectBreakdown />
        <ProgressCalendar />
      </div>
      
      <div>
        <ProgressActivityTimeline />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Download } from 'lucide-vue-next'
</script>
