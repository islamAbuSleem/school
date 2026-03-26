<template>
  <div class="max-w-[1600px] mx-auto pb-16 px-4 md:px-10">
    <div class="flex flex-col md:flex-row items-start md:items-center justify-between mb-8 md:mb-12 gap-4">
      <div>
        <p class="text-[10px] md:text-[10px] font-black text-red-600 tracking-[0.4em] uppercase mb-2 md:mb-4">REAL-TIME LOGISTICS</p>
        <h2 class="text-3xl md:text-5xl font-black text-[#0F172A] tracking-tighter uppercase">Live Bus Tracking</h2>
      </div>
      
      <div class="w-full md:w-auto flex items-center space-x-3 md:space-x-4 bg-white p-4 md:p-6 rounded-xl md:rounded-[32px] shadow-sm ring-1 ring-slate-100 group transition-all hover:scale-[1.02] cursor-pointer flex-shrink-0">
        <div class="p-2 md:p-4 bg-indigo-50 rounded-lg md:rounded-2xl shadow-sm ring-1 ring-indigo-100 group-hover:rotate-12 transition-transform">
          <Route class="w-4 md:w-6 h-4 md:h-6 text-indigo-600" stroke-width="2.5" />
        </div>
        <div class="md:ml-6">
          <p class="text-[10px] md:text-[10px] font-black text-slate-300 tracking-[0.2em] uppercase mb-0.5 md:mb-1">ACTIVE ROUTE</p>
          <p class="text-xl md:text-3xl font-black text-[#0F172A] tracking-tighter">Route 42B</p>
        </div>
      </div>
    </div>

    <div class="grid grid-cols-1 lg:grid-cols-[1fr,450px] gap-8 md:gap-12">
      <div class="space-y-8 md:space-y-12">
        <BusTrackingMap />
        <BusTrackingTimeline />
      </div>
      
      <div class="space-y-8 md:space-y-12">
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
