<script setup lang="ts">
import { CalendarCheck, CalendarX, Clock, TrendingUp, AlertCircle } from 'lucide-vue-next'

const props = defineProps<{
  studentId?: string
}>()

const stats = [
  { label: 'Present Days', value: 156, total: 180, icon: CalendarCheck, color: 'text-emerald-600', bg: 'bg-emerald-50', border: 'border-emerald-200' },
  { label: 'Absent Days', value: 8, total: 180, icon: CalendarX, color: 'text-rose-600', bg: 'bg-rose-50', border: 'border-rose-200' },
  { label: 'Late Arrivals', value: 16, total: 180, icon: Clock, color: 'text-amber-600', bg: 'bg-amber-50', border: 'border-amber-200' },
]

const excusedAbsences = [
  { date: 'Jan 10, 2024', reason: 'Medical Appointment', status: 'Excused' },
  { date: 'Dec 15, 2023', reason: 'Family Emergency', status: 'Excused' },
  { date: 'Nov 22, 2023', reason: 'Doctor Visit', status: 'Excused' },
]

const unexcusedAbsences = [
  { date: 'Jan 8, 2024', reason: 'Unexcused', status: 'Unexcused' },
  { date: 'Dec 5, 2023', reason: 'Unexcused', status: 'Unexcused' },
]
</script>

<template>
  <div class="space-y-6">
    <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
      <div v-for="stat in stats" :key="stat.label" class="glass-card-static p-5 border-l-4" :class="stat.border">
        <div class="flex items-center justify-between mb-4">
          <div :class="['w-10 h-10 rounded-xl flex items-center justify-center', stat.bg]">
            <component :is="stat.icon" class="w-5 h-5" :class="stat.color" />
          </div>
          <div class="flex items-center gap-1 text-emerald-600">
            <TrendingUp class="w-3 h-3" />
            <span class="text-[10px] font-bold">+2%</span>
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

    <div class="glass-card-static p-6 bg-gradient-to-br from-emerald-50/50 to-teal-50/50">
      <div class="flex items-center justify-between mb-4">
        <div>
          <h3 class="text-lg font-black text-slate-800 tracking-tight">Overall Attendance Rate</h3>
          <p class="text-xs text-slate-500 mt-1">Academic Year 2023/24</p>
        </div>
        <div class="text-right">
          <span class="text-4xl font-black text-emerald-600">98.4%</span>
        </div>
      </div>
      <div class="flex items-center gap-4 text-sm">
        <div class="flex-1 h-4 bg-white rounded-full overflow-hidden border border-emerald-100">
          <div class="h-full bg-gradient-to-r from-emerald-400 to-teal-500 rounded-full w-[98.4%]"></div>
        </div>
        <span class="text-xs font-bold text-emerald-600">Excellent</span>
      </div>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div class="glass-card-static p-5">
        <h4 class="text-sm font-black text-slate-800 uppercase tracking-widest mb-4 flex items-center gap-2">
          <CalendarCheck class="w-4 h-4 text-emerald-600" />
          Excused Absences
        </h4>
        <div class="space-y-3">
          <div v-for="(absence, i) in excusedAbsences" :key="i" class="flex items-center justify-between p-3 bg-emerald-50/50 rounded-xl">
            <div>
              <p class="text-xs font-bold text-slate-800">{{ absence.reason }}</p>
              <p class="text-[10px] text-slate-500">{{ absence.date }}</p>
            </div>
            <span class="text-[10px] font-black text-emerald-600 bg-emerald-100 px-2 py-0.5 rounded-full uppercase">{{ absence.status }}</span>
          </div>
        </div>
      </div>

      <div class="glass-card-static p-5">
        <h4 class="text-sm font-black text-slate-800 uppercase tracking-widest mb-4 flex items-center gap-2">
          <AlertCircle class="w-4 h-4 text-rose-600" />
          Unexcused Absences
        </h4>
        <div class="space-y-3">
          <div v-for="(absence, i) in unexcusedAbsences" :key="i" class="flex items-center justify-between p-3 bg-rose-50/50 rounded-xl">
            <div>
              <p class="text-xs font-bold text-slate-800">{{ absence.reason }}</p>
              <p class="text-[10px] text-slate-500">{{ absence.date }}</p>
            </div>
            <span class="text-[10px] font-black text-rose-600 bg-rose-100 px-2 py-0.5 rounded-full uppercase">{{ absence.status }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
