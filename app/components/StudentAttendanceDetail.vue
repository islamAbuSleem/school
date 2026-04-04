<script setup lang="ts">
import { CalendarCheck, CalendarX, Clock, ChevronLeft, ChevronRight } from 'lucide-vue-next'

const props = defineProps<{
  studentId?: string
}>()

const currentMonth = ref(new Date())
const selectedDate = ref<number | null>(null)

const daysInMonth = computed(() => {
  const year = currentMonth.value.getFullYear()
  const month = currentMonth.value.getMonth()
  return new Date(year, month + 1, 0).getDate()
})

const firstDayOfMonth = computed(() => {
  const year = currentMonth.value.getFullYear()
  const month = currentMonth.value.getMonth()
  return new Date(year, month, 1).getDay()
})

const monthName = computed(() => {
  return currentMonth.value.toLocaleString('default', { month: 'long', year: 'numeric' })
})

const attendanceData = computed(() => {
  const data: Record<number, string> = {}
  for (let i = 1; i <= daysInMonth.value; i++) {
    const rand = Math.random()
    if (rand < 0.1) data[i] = 'absent'
    else if (rand < 0.2) data[i] = 'late'
    else data[i] = 'present'
  }
  return data
})

const prevMonth = () => {
  currentMonth.value = new Date(currentMonth.value.getFullYear(), currentMonth.value.getMonth() - 1)
}

const nextMonth = () => {
  currentMonth.value = new Date(currentMonth.value.getFullYear(), currentMonth.value.getMonth() + 1)
}

const getStatusBg = (status: string) => {
  if (status === 'present') return 'bg-emerald-50 border-emerald-200'
  if (status === 'absent') return 'bg-rose-50 border-rose-200'
  return 'bg-amber-50 border-amber-200'
}
</script>

<template>
  <div class="glass-card-static p-6">
    <div class="flex items-center justify-between mb-6">
      <h3 class="text-lg font-black text-slate-800 tracking-tight flex items-center gap-2">
        <CalendarCheck class="w-5 h-5 text-accent" />
        Attendance Calendar
      </h3>
      <div class="flex items-center gap-2">
        <button @click="prevMonth" class="p-2 hover:bg-slate-100 rounded-lg transition-colors">
          <ChevronLeft class="w-4 h-4 text-slate-600" />
        </button>
        <span class="text-sm font-bold text-slate-700">{{ monthName }}</span>
        <button @click="nextMonth" class="p-2 hover:bg-slate-100 rounded-lg transition-colors">
          <ChevronRight class="w-4 h-4 text-slate-600" />
        </button>
      </div>
    </div>

    <div class="grid grid-cols-7 gap-1 mb-2">
      <div v-for="day in ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']" :key="day" class="text-center text-[10px] font-black text-slate-400 uppercase py-2">
        {{ day }}
      </div>
    </div>

    <div class="grid grid-cols-7 gap-1">
      <div v-for="i in firstDayOfMonth" :key="'empty-' + i" class="aspect-square"></div>
      <div v-for="day in daysInMonth" :key="day" 
        :class="[
          'aspect-square rounded-lg border flex items-center justify-center cursor-pointer transition-all text-sm font-bold',
          attendanceData[day] ? getStatusBg(attendanceData[day]) : 'border-slate-100 hover:border-indigo-200',
          selectedDate === day ? 'ring-2 ring-indigo-500' : ''
        ]"
        @click="selectedDate = day"
      >
        <span :class="attendanceData[day] ? 'text-white' : 'text-slate-600'">
          {{ day }}
        </span>
      </div>
    </div>

    <div class="flex items-center justify-center gap-6 mt-6 pt-6 border-t border-slate-100">
      <div class="flex items-center gap-2">
        <div class="w-3 h-3 rounded-full bg-emerald-500"></div>
        <span class="text-[10px] font-bold text-slate-400 uppercase">Present</span>
      </div>
      <div class="flex items-center gap-2">
        <div class="w-3 h-3 rounded-full bg-amber-500"></div>
        <span class="text-[10px] font-bold text-slate-400 uppercase">Late</span>
      </div>
      <div class="flex items-center gap-2">
        <div class="w-3 h-3 rounded-full bg-rose-500"></div>
        <span class="text-[10px] font-bold text-slate-400 uppercase">Absent</span>
      </div>
    </div>
  </div>
</template>
