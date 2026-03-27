<script setup lang="ts">
const schedule = [
  { time: '09:00 AM', period: 'Period 1', subject: 'Advanced Mathematics', teacher: 'Dr. Sarah Jenkins', grade: 'Grade 12-A', status: 'IN PROGRESS', statusColor: 'bg-indigo-100 text-indigo-600' },
  { time: '10:45 AM', period: 'Period 2', subject: 'World Literature & Philosophy', teacher: 'Prof. Julian Black', grade: 'Theatre Hall', status: 'UP NEXT', statusColor: 'bg-red-100 text-red-600' },
  { time: '12:30 PM', period: 'Lunch', subject: 'Staff Interaction Session', teacher: 'Faculty Lounge', grade: '', status: 'PLANNED', statusColor: 'bg-slate-100 text-slate-400' },
]
</script>

<template>
  <div class="glass-card-static p-8">
    <div class="flex items-center justify-between mb-6">
      <h3 class="section-title">Today's Academic Pulse</h3>
      <button class="text-sm font-medium text-accent hover:text-accent-hover transition-colors border-b border-accent pb-0.5">Full Schedule</button>
    </div>

    <div class="space-y-3">
      <div 
        v-for="item in schedule" 
        :key="item.time"
        class="flex items-center p-4 rounded-xl transition-all hover:scale-[1.01] cursor-pointer border border-transparent hover:border-slate-200 hover:bg-white/60"
        :class="item.status === 'UP NEXT' ? 'bg-accent/5 border-accent/20' : ''"
      >
        <div class="w-20 border-r border-slate-200 mr-5">
          <p class="text-sm font-bold text-slate-700">{{ item.time }}</p>
          <p class="text-[10px] font-medium text-slate-400 uppercase mt-0.5">{{ item.period }}</p>
        </div>
        
        <div class="flex-1 flex items-center justify-between">
          <div>
            <h4 class="text-sm font-bold text-slate-800 leading-tight">{{ item.subject }}</h4>
            <p class="text-xs text-slate-400 mt-1">
              {{ item.teacher }} <span v-if="item.grade" class="mx-1 opacity-30">•</span> {{ item.grade }}
            </p>
          </div>
          
          <span :class="['px-3 py-1.5 rounded-lg text-[10px] font-bold uppercase', item.statusColor]">
            {{ item.status }}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>
