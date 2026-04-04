<script setup lang="ts">
import { Calendar, BookOpen, Users, MapPin, Clock } from 'lucide-vue-next'

const { currentUser, studentProfile } = useAuth()

const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday']
const times = ['08:00', '09:30', '11:00', '12:30', '14:00']

const schedule = [
  { day: 'Sunday', time: '08:00', title: 'Mathematics', teacher: 'Prof. James Wilson', room: 'Lab 204', type: 'science' },
  { day: 'Sunday', time: '09:30', title: 'Physics', teacher: 'Prof. James Wilson', room: 'Auditorium 1', type: 'science' },
  { day: 'Sunday', time: '12:30', title: 'History', teacher: 'Ms. Layla Hassan', room: 'Room 105', type: 'social' },
  { day: 'Monday', time: '08:00', title: 'English', teacher: 'Ms. Emily Johnson', room: 'Library B', type: 'arts' },
  { day: 'Monday', time: '09:30', title: 'Mathematics', teacher: 'Prof. James Wilson', room: 'Lab 204', type: 'science' },
  { day: 'Monday', time: '12:30', title: 'Physics Lab', teacher: 'Prof. James Wilson', room: 'Lab 04', type: 'science' },
  { day: 'Tuesday', time: '08:00', title: 'History', teacher: 'Ms. Layla Hassan', room: 'Room 105', type: 'social' },
  { day: 'Tuesday', time: '09:30', title: 'English', teacher: 'Ms. Emily Johnson', room: 'Library B', type: 'arts' },
  { day: 'Tuesday', time: '12:30', title: 'Mathematics', teacher: 'Prof. James Wilson', room: 'Lab 204', type: 'science' },
  { day: 'Wednesday', time: '08:00', title: 'Physics', teacher: 'Prof. James Wilson', room: 'Auditorium 1', type: 'science' },
  { day: 'Wednesday', time: '09:30', title: 'History', teacher: 'Ms. Layla Hassan', room: 'Room 105', type: 'social' },
  { day: 'Wednesday', time: '12:30', title: 'English', teacher: 'Ms. Emily Johnson', room: 'Library B', type: 'arts' },
  { day: 'Thursday', time: '08:00', title: 'Mathematics', teacher: 'Prof. James Wilson', room: 'Lab 204', type: 'science' },
  { day: 'Thursday', time: '09:30', title: 'Physics', teacher: 'Prof. James Wilson', room: 'Auditorium 1', type: 'science' },
  { day: 'Thursday', time: '12:30', title: 'History', teacher: 'Ms. Layla Hassan', room: 'Room 105', type: 'social' },
]

const getCardColor = (type: string) => {
  switch (type) {
    case 'science': return 'bg-indigo-50/80 border-l-indigo-500 text-indigo-900'
    case 'math': return 'bg-sky-50/80 border-l-sky-500 text-sky-900'
    case 'arts': return 'bg-orange-50/80 border-l-orange-500 text-orange-900'
    case 'social': return 'bg-red-50/80 border-l-red-500 text-red-900'
    default: return 'bg-white border-slate-200'
  }
}

const getItem = (day: string, time: string) => schedule.find(s => s.day === day && s.time === time)
</script>

<template>
  <div class="max-w-[1600px] mx-auto pb-16 px-4 md:px-10">
    <div class="mb-8">
      <p class="text-xs font-semibold text-accent uppercase tracking-wider mb-2">Student Portal</p>
      <h2 class="page-title">My Schedule</h2>
      <p class="text-slate-500 mt-2">Your weekly class schedule</p>
    </div>

    <div class="glass-card-static overflow-hidden">
      <div class="grid grid-cols-[80px,repeat(5,1fr)]">
        <div class="h-16 bg-primary flex items-center justify-center border-r border-white/10">
          <span class="text-[10px] font-semibold text-slate-400 uppercase tracking-wider">Time</span>
        </div>
        <div v-for="day in days" :key="day" class="h-16 bg-primary flex items-center justify-center border-r border-white/10 last:border-r-0">
          <span class="text-base font-semibold text-white">{{ day }}</span>
        </div>

        <template v-for="time in times" :key="time">
          <template v-if="time === '11:00'">
            <div class="h-12 bg-slate-50 flex items-center justify-center border-b border-r border-slate-100">
              <span class="text-xs font-medium text-slate-400">{{ time }}</span>
            </div>
            <div class="col-span-5 h-12 bg-slate-50 flex items-center justify-center border-b border-slate-100">
              <span class="text-[10px] font-medium text-slate-400 uppercase tracking-widest italic">Morning Break</span>
            </div>
          </template>

          <template v-else>
            <div class="h-36 flex items-center justify-center border-b border-r border-slate-100 bg-white">
              <span class="text-sm font-semibold text-slate-600">{{ time }}</span>
            </div>
            <div v-for="day in days" :key="`${day}-${time}`" class="h-36 p-2 border-b border-r border-slate-100 last:border-r-0 bg-white relative">
              <template v-if="getItem(day, time)">
                <div class="h-full rounded-xl border-l-4 p-3 flex flex-col justify-between" :class="getCardColor(getItem(day, time)!.type)">
                  <div>
                    <h4 class="font-semibold text-xs leading-tight pr-2">{{ getItem(day, time)!.title }}</h4>
                    <p class="text-[10px] opacity-70 mt-1">{{ getItem(day, time)!.teacher }}</p>
                  </div>
                  <span class="bg-white/60 px-2 py-0.5 rounded text-[9px] font-medium self-start">{{ getItem(day, time)!.room }}</span>
                </div>
              </template>
              <div v-else class="h-full rounded-xl border border-slate-100 flex items-center justify-center text-slate-200">
                <span class="text-[8px] font-medium uppercase tracking-wider">Free</span>
              </div>
            </div>
          </template>
        </template>
      </div>
    </div>
  </div>
</template>
