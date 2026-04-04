<script setup lang="ts">
import { CalendarCheck, CalendarX, Clock, TrendingUp } from 'lucide-vue-next'

const { activeChild } = useParent()

const stats = [
  { label: 'Present Days', value: 156, total: 180, icon: CalendarCheck, color: 'text-emerald-600', bg: 'bg-emerald-50' },
  { label: 'Absent Days', value: 8, total: 180, icon: CalendarX, color: 'text-rose-600', bg: 'bg-rose-50' },
  { label: 'Late Arrivals', value: 16, total: 180, icon: Clock, color: 'text-amber-600', bg: 'bg-amber-50' },
]

const recentAttendance = [
  { date: 'Jan 15, 2024', status: 'Present', class: 'Mathematics' },
  { date: 'Jan 14, 2024', status: 'Present', class: 'Physics' },
  { date: 'Jan 13, 2024', status: 'Late', class: 'History' },
  { date: 'Jan 12, 2024', status: 'Present', class: 'English' },
  { date: 'Jan 11, 2024', status: 'Present', class: 'Mathematics' },
  { date: 'Jan 10, 2024', status: 'Absent', class: 'Physics', reason: 'Medical Appointment' },
]

const getStatusColor = (status: string) => {
  if (status === 'Present') return 'text-emerald-600 bg-emerald-50'
  if (status === 'Absent') return 'text-rose-600 bg-rose-50'
  return 'text-amber-600 bg-amber-50'
}
</script>

<template>
  <div class="max-w-[1600px] mx-auto pb-16 px-4 md:px-10">
    <div class="mb-8">
      <p class="text-xs font-semibold text-accent uppercase tracking-wider mb-2">Parent Portal</p>
      <h2 class="page-title">{{ activeChild?.name || 'Child' }}'s Attendance</h2>
      <p class="text-slate-500 mt-2">Monitor your child's daily attendance</p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
      <div v-for="stat in stats" :key="stat.label" class="glass-card-static p-6">
        <div class="flex items-center justify-between mb-4">
          <div :class="['w-10 h-10 rounded-xl flex items-center justify-center', stat.bg]">
            <component :is="stat.icon" class="w-5 h-5" :class="stat.color" />
          </div>
        </div>
        <p class="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">{{ stat.label }}</p>
        <div class="flex items-baseline gap-1">
          <span class="text-3xl font-black text-slate-800">{{ stat.value }}</span>
          <span class="text-sm font-bold text-slate-400">/ {{ stat.total }}</span>
        </div>
        <div class="mt-3 h-2 bg-slate-100 rounded-full overflow-hidden">
          <div class="h-full rounded-full" :class="stat.color.replace('text-', 'bg-')" :style="{ width: `${(stat.value / stat.total) * 100}%` }"></div>
        </div>
      </div>
    </div>

    <div class="glass-card-static p-6">
      <h3 class="text-lg font-black text-slate-800 tracking-tight mb-6">Attendance History</h3>
      <div class="space-y-3">
        <div v-for="record in recentAttendance" :key="record.date" class="flex items-center justify-between p-4 bg-slate-50/50 rounded-2xl border border-slate-100">
          <div class="flex items-center gap-4">
            <div class="w-10 h-10 rounded-xl flex items-center justify-center" :class="getStatusColor(record.status)">
              <component :is="record.status === 'Present' ? CalendarCheck : record.status === 'Absent' ? CalendarX : Clock" class="w-5 h-5" />
            </div>
            <div>
              <h4 class="font-bold text-slate-800">{{ record.class }}</h4>
              <p class="text-xs text-slate-500">{{ record.date }}</p>
            </div>
          </div>
          <div class="text-right">
            <span :class="['text-xs font-black uppercase px-3 py-1.5 rounded-lg', getStatusColor(record.status)]">
              {{ record.status }}
            </span>
            <p v-if="record.reason" class="text-[10px] text-slate-400 mt-1">{{ record.reason }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
