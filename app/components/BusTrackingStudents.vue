<script setup lang="ts">
import { Users2, CheckCircle2 } from 'lucide-vue-next'

const students = [
  { name: 'Julian Thorne', grade: 'Grade 4 - Section B', avatar: 'https://ui-avatars.com/api/?name=JT&background=0F172A&color=fff' },
  { name: 'Elena Thorne', grade: 'Grade 7 - Section A', avatar: 'https://ui-avatars.com/api/?name=ET&background=1E293B&color=fff' },
]
</script>

<template>
  <div class="bg-white rounded-[40px] p-10 shadow-sm ring-1 ring-slate-100 flex-1 relative group h-full">
    <div class="flex items-center justify-between mb-12">
      <h3 class="text-xl font-black text-[#0F172A] tracking-tight flex items-center uppercase">
        <Users2 class="w-6 h-6 mr-3 text-indigo-600" />
        Students On Board
      </h3>
    </div>

    <div class="space-y-6">
      <div 
        v-for="student in students" 
        :key="student.name"
        class="flex items-center p-6 rounded-3xl bg-[#F8FAFC] transition-all hover:bg-white hover:shadow-xl hover:ring-1 hover:ring-slate-100 cursor-pointer group/item"
      >
        <img :src="student.avatar" :alt="student.name" class="w-14 h-14 rounded-2xl object-cover shadow-lg group-hover/item:scale-110 transition-transform">
        <div class="ml-6 flex-1">
          <h4 class="text-base font-black text-[#0F172A] leading-tight">{{ student.name }}</h4>
          <p class="text-[10px] font-bold text-slate-400 mt-1 uppercase tracking-widest">{{ student.grade }}</p>
        </div>
        <CheckCircle2 class="w-5 h-5 text-green-500" stroke-width="3" />
      </div>
    </div>
  </div>
</template>
