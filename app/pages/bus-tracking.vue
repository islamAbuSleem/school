<template>
  <div class="max-w-[1600px] mx-auto pb-16">
    <div class="flex items-center justify-between mb-12">
      <div>
        <p class="text-[10px] font-black text-red-600 tracking-[0.4em] uppercase mb-4">REAL-TIME LOGISTICS</p>
        <h2 class="text-5xl font-black text-[#0F172A] tracking-tighter uppercase">Live Bus Tracking</h2>
      </div>
      
      <div class="flex items-center space-x-4 bg-white p-6 rounded-[32px] shadow-sm ring-1 ring-slate-100 group transition-all hover:scale-[1.02] cursor-pointer">
        <div class="p-4 bg-indigo-50 rounded-2xl shadow-sm ring-1 ring-indigo-100 group-hover:rotate-12 transition-transform">
          <Route class="w-6 h-6 text-indigo-600" stroke-width="2.5" />
        </div>
        <div class="ml-6">
          <p class="text-[10px] font-black text-slate-300 tracking-[0.2em] uppercase mb-1">ACTIVE ROUTE</p>
          <p class="text-3xl font-black text-[#0F172A] tracking-tighter">Route 42B</p>
        </div>
      </div>
    </div>

    <div class="grid grid-cols-[1fr,450px] gap-12">
      <div class="space-y-12">
        <BusTrackingMap />
        <BusTrackingTimeline />
      </div>
      
      <div class="space-y-12">
        <BusTrackingStudents />
        <BusTrackingDriver />
        <BusTrackingProcedures />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Route } from 'lucide-vue-next'
// Components are auto-imported by Nuxt
</script>
