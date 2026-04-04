<script setup lang="ts">
import { CalendarCheck, CalendarX, Clock } from 'lucide-vue-next'

const { childAttendance, activeChild } = useParent()

const stats = computed(() => {
  const total = activeChild.value?.attendanceRate || 0
  return [
    { label: 'Overall Rate', value: `${total}%`, color: 'text-emerald-600', icon: CalendarCheck, bg: 'bg-emerald-50' },
    { label: 'Unexcused', value: '2', color: 'text-rose-600', icon: CalendarX, bg: 'bg-rose-50' },
    { label: 'Late Arrival', value: '4', color: 'text-amber-600', icon: Clock, bg: 'bg-amber-50' }
  ]
})
</script>

<template>
  <div class="glass-card-static p-8">
    <div class="mb-8">
      <h3 class="text-xl font-black text-slate-800 tracking-tight">Attendance Pulse</h3>
      <p class="text-xs font-medium text-slate-400 mt-1 uppercase tracking-widest">Year-to-date summary for {{ activeChild?.name }}</p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
      <div v-for="stat in stats" :key="stat.label" class="p-6 rounded-2xl bg-white border border-slate-100 shadow-sm">
        <div class="flex items-center gap-4">
          <div :class="['w-12 h-12 rounded-xl flex items-center justify-center', stat.bg]">
            <component :is="stat.icon" class="w-6 h-6" :class="stat.color" />
          </div>
          <div>
            <p class="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">{{ stat.label }}</p>
            <p :class="['text-2xl font-black', stat.color]">{{ stat.value }}</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Mini Calendar Heatmap Simulation -->
    <div class="space-y-4">
      <h4 class="text-xs font-black text-slate-800 uppercase tracking-widest flex items-center gap-2">
        <CalendarCheck class="w-4 h-4 text-indigo-600" />
        Recent Calendar
      </h4>
      <div class="flex flex-wrap gap-2">
        <div v-for="i in 20" :key="i" 
          :class="[
            'w-8 h-8 rounded-lg border flex items-center justify-center transition-all cursor-help',
            i % 7 === 0 ? 'bg-rose-50 border-rose-100' : (i % 5 === 0 ? 'bg-amber-50 border-amber-100' : 'bg-emerald-50 border-emerald-100')
          ]"
          :title="i % 7 === 0 ? 'Absent' : (i % 5 === 0 ? 'Late' : 'Present')"
        >
          <div :class="[
            'w-2 h-2 rounded-full',
            i % 7 === 0 ? 'bg-rose-500' : (i % 5 === 0 ? 'bg-amber-500' : 'bg-emerald-500')
          ]"></div>
        </div>
      </div>
      <div class="flex items-center gap-6 mt-6">
        <div class="flex items-center gap-2">
          <div class="w-2.5 h-2.5 rounded-full bg-emerald-500"></div>
          <span class="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Present</span>
        </div>
        <div class="flex items-center gap-2">
          <div class="w-2.5 h-2.5 rounded-full bg-amber-500"></div>
          <span class="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Late</span>
        </div>
        <div class="flex items-center gap-2">
          <div class="w-2.5 h-2.5 rounded-full bg-rose-500"></div>
          <span class="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Absent</span>
        </div>
      </div>
    </div>
  </div>
</template>
