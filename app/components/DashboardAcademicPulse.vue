<script setup lang="ts">
const schedule = [
  { time: '09:00 AM', period: 'Period 1', subject: 'Advanced Mathematics', teacher: 'Dr. Sarah Jenkins', grade: 'Grade 12-A', status: 'IN PROGRESS', statusColor: 'bg-indigo-50 text-indigo-600 ring-indigo-100' },
  { time: '10:45 AM', period: 'Period 2', subject: 'World Literature & Philosophy', teacher: 'Prof. Julian Black', grade: 'Theatre Hall', status: 'UP NEXT', statusColor: 'bg-red-50 text-red-600 ring-red-100' },
  { time: '12:30 PM', period: 'Lunch', subject: 'Staff Interaction Session', teacher: 'Faculty Lounge', grade: '', status: 'PLANNED', statusColor: 'bg-slate-50 text-slate-400 ring-slate-100' },
]
</script>

<template>
  <div class="bg-white rounded-[40px] p-10 shadow-sm ring-1 ring-slate-100 flex-1 relative">
    <div class="flex items-center justify-between mb-12">
      <h3 class="text-xl font-black text-[#0F172A] tracking-tight">Today's Academic Pulse</h3>
      <button class="text-[10px] font-black tracking-widest text-[#0F172A] border-b-2 border-[#0F172A] pb-1 uppercase">Full Schedule</button>
    </div>

    <div class="space-y-6">
      <div 
        v-for="item in schedule" 
        :key="item.time"
        class="flex items-center p-6 rounded-3xl transition-all hover:scale-[1.01] cursor-pointer"
        :class="item.status === 'UP NEXT' ? 'bg-[#F1F5F9] ring-1 ring-slate-100 shadow-sm' : ''"
      >
        <div class="w-24 border-r border-slate-100 mr-8">
          <p class="text-sm font-black text-[#0F172A]">{{ item.time }}</p>
          <p class="text-[9px] font-black text-slate-300 tracking-widest uppercase mt-0.5">{{ item.period }}</p>
        </div>
        
        <div class="flex-1 flex items-center justify-between">
          <div>
            <h4 class="text-base font-black text-[#0F172A] leading-tight">{{ item.subject }}</h4>
            <p class="text-[11px] font-bold text-slate-400 mt-1">
              {{ item.teacher }} <span v-if="item.grade" class="mx-2 opacity-30">•</span> {{ item.grade }}
            </p>
          </div>
          
          <div :class="['px-4 py-1.5 rounded-lg text-[9px] font-black tracking-widest ring-1 uppercase shadow-sm', item.statusColor]">
            {{ item.status }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
