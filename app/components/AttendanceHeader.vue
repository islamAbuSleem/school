<script setup lang="ts">
import { CheckCircle2, Calendar } from 'lucide-vue-next'

const { classes, attendanceRecords } = useData()

// For now, assuming class C001
const classId = 'C001'
const currentClass = computed(() => classes.value.find(c => c.id === classId))
const classAttendance = computed(() => attendanceRecords.value.filter(r => r.classId === classId))

const formattedDate = new Intl.DateTimeFormat('en-US', {
  weekday: 'long',
  month: 'short',
  day: 'numeric'
}).format(new Date())
</script>

<template>
  <div class="flex flex-col sm:flex-row sm:items-center justify-between mb-8 gap-6">
    <div class="space-y-1">
      <div class="flex items-center gap-3">
        <div class="w-10 h-10 bg-indigo-50 rounded-xl flex items-center justify-center">
          <Calendar class="w-5 h-5 text-indigo-600" />
        </div>
        <div>
          <h2 class="text-2xl font-bold text-slate-800 tracking-tight">{{ currentClass?.name || 'Class Attendance' }}</h2>
          <p class="text-slate-500 text-sm font-medium flex items-center gap-2">
            {{ formattedDate }} • {{ currentClass?.room || 'Remote' }}
          </p>
        </div>
      </div>
    </div>
    
    <div class="flex flex-wrap items-center gap-4">
      <div class="bg-indigo-50/50 border border-indigo-100 px-5 py-2.5 rounded-2xl">
        <span class="text-[11px] font-bold text-indigo-600 uppercase tracking-widest">{{ classAttendance.length }}/{{ currentClass?.studentIds.length || 0 }} Students Recorded</span>
      </div>
      <button class="btn-primary flex items-center gap-2 px-6 py-3 shadow-lg shadow-indigo-100">
        <CheckCircle2 class="w-4 h-4" />
        End Session
      </button>
    </div>
  </div>
</template>
