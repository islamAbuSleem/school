<script setup lang="ts">
import { ChevronRight, Calendar, BookOpen, UserPlus } from 'lucide-vue-next'

const topics = [
  { title: 'Wave Phenomena', date: 'Starts: Monday, Oct 12', active: true, color: 'text-red-500', bg: 'bg-red-50' },
  { title: 'Electromagnetism', date: 'Starts: Oct 28', active: false, color: 'text-slate-300', bg: 'bg-slate-50' },
]

const upcoming = [
  { title: 'Lab Manual: Optics', action: 'Action Required: Read', icon: BookOpen, color: 'text-indigo-600', bg: 'bg-indigo-50' },
]
</script>

<template>
  <div class="space-y-12 h-full">
    <!-- Upcoming Topics -->
    <div class="bg-white rounded-[40px] p-10 shadow-sm ring-1 ring-slate-100 flex-1 relative group overflow-hidden">
      <div class="flex items-center justify-between mb-12">
        <h3 class="text-xl font-black text-[#0F172A] tracking-tight flex items-center">
          <Calendar class="w-6 h-6 mr-3 text-red-500" />
          Upcoming Topics
        </h3>
        <span class="text-3xl font-black text-red-600">45%</span>
      </div>

      <div class="space-y-10 pl-6 border-l-2 border-slate-50">
        <div v-for="topic in topics" :key="topic.title" class="relative">
          <div :class="['absolute -left-[31px] top-0 w-4 h-4 rounded-full ring-4 ring-white shadow-sm', topic.active ? 'bg-red-500' : 'bg-slate-200']"></div>
          <h4 :class="['text-sm font-black leading-tight mb-2', topic.active ? 'text-[#0F172A]' : 'text-slate-300']">{{ topic.title }}</h4>
          <p class="text-[10px] font-bold text-slate-300 tracking-widest uppercase">{{ topic.date }}</p>
        </div>
      </div>

      <div class="mt-16 pt-10 border-t border-slate-50">
        <p class="text-[10px] font-black text-slate-400 tracking-widest uppercase mb-6">NEXT MATERIAL</p>
        <div v-for="item in upcoming" :key="item.title" class="bg-[#F8FAFC] p-6 rounded-3xl ring-1 ring-slate-100 flex items-center space-x-6 transition-all hover:scale-[1.02] cursor-pointer group/item shadow-sm">
          <div :class="['p-4 rounded-2xl shadow-sm ring-1 ring-white transition-all group-hover/item:scale-110', item.bg]">
            <component :is="item.icon" class="w-6 h-6" :class="item.color" stroke-width="2.5" />
          </div>
          <div>
            <h5 class="text-sm font-black text-[#0F172A] leading-snug">{{ item.title }}</h5>
            <p class="text-[10px] font-bold text-red-600 mt-1 uppercase tracking-widest">{{ item.action }}</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Consultation Card -->
    <div class="bg-[#051139] rounded-[40px] p-10 shadow-2xl ring-1 ring-white/5 relative group overflow-hidden">
      <div class="absolute -top-12 -right-12 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
      
      <div class="relative">
        <div class="flex items-start justify-between mb-8">
          <h3 class="text-xl font-black text-white tracking-tight uppercase">Request Subject Consultation</h3>
          <UserPlus class="w-6 h-6 text-indigo-400" stroke-width="2.5" />
        </div>
        <p class="text-indigo-200/50 text-[11px] font-bold leading-relaxed max-w-sm mb-12 uppercase tracking-widest">
          Schedule a 15-min call with the Department Head regarding curriculum changes.
        </p>
        <button class="w-full py-4 bg-white text-[#0F172A] rounded-2xl font-black text-[11px] tracking-widest uppercase shadow-xl hover:bg-slate-50 transition-all transform hover:translate-y-[-2px]">
          Book Now
        </button>
      </div>
    </div>
  </div>
</template>
