<template>
  <div class="max-w-[1600px] mx-auto pb-16">
    <div class="flex flex-col lg:flex-row lg:items-center justify-between mb-8 gap-4">
      <div>
        <p class="text-xs font-semibold text-accent uppercase tracking-wider mb-2">Real-time Logistics</p>
        <h2 class="page-title uppercase">Live Bus Tracking</h2>
      </div>
      
      <div class="glass-card flex items-center gap-4 p-4 hover:scale-[1.01] transition-transform cursor-pointer">
        <div class="p-3 bg-indigo-50 rounded-xl">
          <Route class="w-5 h-5 text-accent" stroke-width="2" />
        </div>
        <div>
          <p class="text-xs font-medium text-slate-400 uppercase tracking-wider mb-1">Active Route</p>
          <p class="text-2xl font-bold text-slate-800" style="font-family: var(--font-display)">Route 42B</p>
        </div>
      </div>
    </div>

    <div class="grid grid-cols-1 lg:grid-cols-[1fr,400px] gap-6">
      <div class="space-y-6">
        <BusTrackingMap />
        <BusTrackingTimeline />
      </div>
      
      <div class="space-y-6">
        <BusTrackingStudents />
        <BusTrackingDriver />
        <BusTrackingProcedures />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Route } from 'lucide-vue-next'
</script>
