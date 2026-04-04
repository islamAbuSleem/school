<script setup lang="ts">
import { Circle, CheckCircle2, MapPin, Bus } from 'lucide-vue-next'

const stops = [
  { name: 'St. Edwards Campus', time: 'Departed 3:15 PM', status: 'completed' },
  { name: 'North Park Station', time: 'Last Stop 3:28 PM', status: 'completed' },
  { name: 'Oak Ridge Dr.', time: 'Current Location', status: 'active' },
  { name: 'Greenwood Circle', time: 'Est. 3:42 PM', status: 'pending' },
  { name: 'Oakwood Estates', time: 'Est. 3:55 PM', status: 'pending' },
]
</script>

<template>
  <div class="mt-12 bg-[#F8FAFC] rounded-[48px] p-12 shadow-inner ring-1 ring-slate-100 relative group overflow-hidden">
    <div class="flex items-center justify-between mb-16">
      <h3 class="text-xl font-black text-[#0F172A] tracking-tight uppercase">Route Timeline</h3>
      <span class="px-4 py-1.5 bg-indigo-50 text-indigo-600 rounded-full text-[9px] font-black tracking-widest uppercase shadow-sm ring-1 ring-indigo-100">IN TRANSIT</span>
    </div>

    <div class="pb-6">
      <div class="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-6 relative">
        <!-- Connection Line - hidden on mobile -->
        <div class="hidden lg:block absolute top-[11px] left-[10%] right-[10%] h-0.5 bg-slate-200">
          <div class="h-full bg-indigo-600 transition-all duration-1000" style="width: 50%"></div>
        </div>

        <div v-for="(stop, index) in stops" :key="stop.name" class="flex flex-col items-center relative z-10">
          <div :class="['w-6 h-6 rounded-full flex items-center justify-center ring-4 ring-white shadow-sm mb-6 transition-all', stop.status === 'completed' ? 'bg-indigo-600' : stop.status === 'active' ? 'bg-white ring-indigo-600' : 'bg-slate-200']">
            <CheckCircle2 v-if="stop.status === 'completed'" class="w-3 h-3 text-white" />
            <Bus v-else-if="stop.status === 'active'" class="w-3 h-3 text-indigo-600" />
            <div v-else class="w-1.5 h-1.5 bg-white rounded-full"></div>
          </div>
          
          <h4 :class="['text-xs font-black text-center mb-2', stop.status === 'pending' ? 'text-slate-300' : 'text-[#0F172A]']">{{ stop.name }}</h4>
          <p :class="['text-[9px] font-bold text-center uppercase tracking-widest', stop.status === 'active' ? 'text-red-500' : 'text-slate-300']">{{ stop.time }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
