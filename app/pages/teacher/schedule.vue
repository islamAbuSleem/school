<script setup lang="ts">
import { BookOpen, Users, MapPin, Clock } from 'lucide-vue-next'

const { currentUser, teacherProfile } = useAuth()
const { classes } = useData()

const myClasses = computed(() => {
  const profile = teacherProfile.value
  if (!profile) return []
  return classes.value.filter(c => c.teacherId === profile.id)
})

const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday']
const times = ['08:00', '09:30', '11:00', '12:30', '14:00']

const schedule = [
  { day: 'Sunday', time: '08:00', title: 'Advanced Mathematics', grade: 'Grade 10', room: 'Lab 204' },
  { day: 'Sunday', time: '09:30', title: 'Theoretical Physics', grade: 'Grade 12', room: 'Auditorium 1' },
  { day: 'Monday', time: '08:00', title: 'Advanced Mathematics', grade: 'Grade 10', room: 'Lab 204' },
  { day: 'Monday', time: '12:30', title: 'Theoretical Physics', grade: 'Grade 12', room: 'Auditorium 1' },
  { day: 'Tuesday', time: '09:30', title: 'Advanced Mathematics', grade: 'Grade 10', room: 'Lab 204' },
  { day: 'Wednesday', time: '08:00', title: 'Theoretical Physics', grade: 'Grade 12', room: 'Auditorium 1' },
  { day: 'Wednesday', time: '12:30', title: 'Advanced Mathematics', grade: 'Grade 10', room: 'Lab 204' },
  { day: 'Thursday', time: '08:00', title: 'Advanced Mathematics', grade: 'Grade 10', room: 'Lab 204' },
  { day: 'Thursday', time: '14:00', title: 'Theoretical Physics', grade: 'Grade 12', room: 'Auditorium 1' },
]

const getItem = (day: string, time: string) => schedule.find(s => s.day === day && s.time === time)
</script>

<template>
  <div class="max-w-[1600px] mx-auto pb-16 px-4 md:px-10">
    <div class="mb-8">
      <p class="text-xs font-semibold text-accent uppercase tracking-wider mb-2">Teacher Portal</p>
      <h2 class="page-title">My Schedule</h2>
      <p class="text-slate-500 mt-2">Your weekly teaching schedule</p>
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
              <span class="text-[10px] font-medium text-slate-400 uppercase tracking-widest italic">Break</span>
            </div>
          </template>

          <template v-else>
            <div class="h-36 flex items-center justify-center border-b border-r border-slate-100 bg-white">
              <span class="text-sm font-semibold text-slate-600">{{ time }}</span>
            </div>
            <div v-for="day in days" :key="`${day}-${time}`" class="h-36 p-2 border-b border-r border-slate-100 last:border-r-0 bg-white relative">
              <template v-if="getItem(day, time)">
                <div class="h-full rounded-xl border-l-4 border-l-indigo-500 bg-indigo-50/80 p-3 flex flex-col justify-between">
                  <div>
                    <h4 class="font-semibold text-xs leading-tight pr-2 text-indigo-900">{{ getItem(day, time)!.title }}</h4>
                    <p class="text-[10px] text-indigo-600 mt-1">{{ getItem(day, time)!.grade }}</p>
                  </div>
                  <span class="bg-white/60 px-2 py-0.5 rounded text-[9px] font-medium self-start text-indigo-700">{{ getItem(day, time)!.room }}</span>
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
