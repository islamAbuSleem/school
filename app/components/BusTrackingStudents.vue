<script setup lang="ts">
import { Users2, CheckCircle2 } from 'lucide-vue-next'

const students = [
  { name: 'Julian Thorne', grade: 'Grade 4 - Section B', avatar: 'https://ui-avatars.com/api/?name=JT&background=0F172A&color=fff', checkIn: '3:12 PM', status: 'Boarded' },
  { name: 'Elena Thorne', grade: 'Grade 7 - Section A', avatar: 'https://ui-avatars.com/api/?name=ET&background=1E293B&color=fff', checkIn: '3:15 PM', status: 'Boarded' },
]
</script>

<template>
  <div class="bg-white rounded-[40px] p-10 shadow-sm ring-1 ring-slate-100 relative group">
    <div class="flex items-center justify-between mb-12">
      <h3 class="text-xl font-black text-[#0F172A] tracking-tight flex items-center uppercase">
        <Users2 class="w-6 h-6 mr-3 text-indigo-600" />
        Students On Board
      </h3>
      <span class="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Total: 2 / 24 Seats</span>
    </div>

    <div class="space-y-6">
      <div 
        v-for="student in students" 
        :key="student.name"
        class="flex items-center p-6 rounded-3xl bg-[#F8FAFC] transition-all hover:bg-white hover:shadow-xl hover:ring-1 hover:ring-slate-100 cursor-pointer group/item"
      >
        <div class="relative">
          <img :src="student.avatar" :alt="student.name" class="w-14 h-14 rounded-2xl object-cover shadow-lg group-hover/item:scale-110 transition-transform">
          <div class="absolute -bottom-1 -right-1 w-5 h-5 bg-green-500 rounded-full border-2 border-white flex items-center justify-center">
            <CheckCircle2 class="w-3 h-3 text-white" stroke-width="3" />
          </div>
        </div>
        <div class="ml-6 flex-1">
          <div class="flex items-center justify-between mb-1">
            <h4 class="text-base font-black text-[#0F172A] leading-tight">{{ student.name }}</h4>
            <span class="text-[9px] font-black text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded-full uppercase tracking-tighter">{{ student.status }}</span>
          </div>
          <div class="flex items-center justify-between">
            <p class="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{{ student.grade }}</p>
            <p class="text-[9px] font-black text-slate-400 uppercase">IN: {{ student.checkIn }}</p>
          </div>
        </div>
      </div>
    </div>

    <div class="mt-8 pt-8 border-t border-dashed border-slate-200">
      <div class="flex items-center justify-between text-[10px] font-bold text-slate-400 uppercase tracking-widest">
        <span>Capacity Utilization</span>
        <span class="text-indigo-600">8.3%</span>
      </div>
      <div class="mt-3 h-1.5 bg-slate-100 rounded-full overflow-hidden">
        <div class="h-full bg-indigo-600 rounded-full" style="width: 8.3%"></div>
      </div>
    </div>
  </div>
</template>
