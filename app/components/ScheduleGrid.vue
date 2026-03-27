<script setup lang="ts">
import { MoreVertical, Lock, PlusCircle } from 'lucide-vue-next'

const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday']
const times = ['08:00', '09:30', '11:00', '12:30', '14:00']

const schedule = [
  { day: 'Sunday', time: '08:00', title: 'Advanced Physics', teacher: 'Prof. James Wilson', room: 'ROOM 402', type: 'science', status: 'active' },
  { day: 'Monday', time: '08:00', title: 'Literature Analysis', teacher: 'Ms. Layla Hassan', room: 'LIBRARY B', type: 'arts', status: 'active' },
  { day: 'Tuesday', time: '08:00', title: 'Calculus II', teacher: 'Dr. Sarah Ahmed', room: 'ROOM 305', type: 'math', status: 'active' },
  { day: 'Wednesday', time: '08:00', title: 'Visual Arts', teacher: 'Marcus Stone', room: 'STUDIO 1', type: 'arts', status: 'active' },
  { day: 'Thursday', time: '08:00', title: 'Ethics', teacher: 'Prof. Lee', room: 'AUDITORIUM', type: 'social', status: 'active' },

  { day: 'Sunday', time: '09:30', type: 'placeholder' },
  { day: 'Monday', time: '09:30', title: 'Chemistry Lab', teacher: 'Dr. Elena Rostova', room: 'LAB 04', type: 'science', status: 'active' },
  { day: 'Tuesday', time: '09:30', title: 'Macroeconomics', teacher: 'Dr. Sarah Ahmed', room: 'ROOM 101', type: 'social', status: 'active' },
  { day: 'Wednesday', time: '09:30', title: 'Advanced Physics', teacher: 'Prof. James Wilson', room: 'ROOM 402', type: 'science', status: 'active' },
  { day: 'Thursday', time: '09:30', type: 'placeholder' },

  { day: 'Sunday', time: '12:30', title: 'Computer Science', teacher: 'Eng. Samer Ali', room: 'ICT LAB 1', type: 'it', status: 'active' },
  { day: 'Monday', time: '12:30', title: 'Physical Education', teacher: 'Coach Ryan', room: 'SPORTS HALL', type: 'pe', status: 'active' },
  { day: 'Tuesday', time: '12:30', title: 'Biology II', teacher: 'Dr. Elena Rostova', room: 'ROOM 202', type: 'science', status: 'active' },
  { day: 'Wednesday', time: '12:30', title: 'World History', teacher: 'Prof. Omar Khalid', room: 'ROOM 105', type: 'social', status: 'active' },
  { day: 'Thursday', time: '12:30', title: 'Calculus II', teacher: 'Dr. Sarah Ahmed', room: 'ROOM 305', type: 'math', status: 'active' },

  { day: 'Sunday', time: '14:00', title: 'Faculty Meeting', teacher: 'Board Room', room: 'ADMIN AREA', type: 'meeting', status: 'locked' },
  { day: 'Monday', time: '14:00', title: 'Database Systems', teacher: 'Eng. Samer Ali', room: 'ICT LAB 2', type: 'it', status: 'active' },
  { day: 'Tuesday', time: '14:00', title: 'Literature Analysis', teacher: 'Ms. Layla Hassan', room: 'LIBRARY B', type: 'arts', status: 'active' },
  { day: 'Wednesday', time: '14:00', type: 'placeholder' },
  { day: 'Thursday', time: '14:00', title: 'Physical Education', teacher: 'Coach Ryan', room: 'SPORTS HALL', type: 'pe', status: 'active' },
]

const getCardColor = (type: string) => {
  switch (type) {
    case 'science': return 'bg-indigo-50/80 border-l-indigo-500 text-indigo-900'
    case 'math': return 'bg-sky-50/80 border-l-sky-500 text-sky-900'
    case 'arts': return 'bg-orange-50/80 border-l-orange-500 text-orange-900'
    case 'social': return 'bg-red-50/80 border-l-red-500 text-red-900'
    case 'it': return 'bg-violet-50/80 border-l-violet-500 text-violet-900'
    case 'pe': return 'bg-amber-50/80 border-l-amber-500 text-amber-900'
    case 'meeting': return 'bg-slate-50/80 border-l-slate-400 text-slate-700'
    default: return 'bg-white border-slate-200'
  }
}

const getItem = (day: string, time: string) => schedule.find(s => s.day === day && s.time === time)
</script>

<template>
  <div class="glass-card-static overflow-hidden mb-6">
    <div class="grid grid-cols-[80px,repeat(5,1fr)]">
      <div class="h-16 bg-primary flex items-center justify-center border-r border-white/10">
        <span class="text-[10px] font-semibold text-slate-400 uppercase tracking-wider">Time</span>
      </div>
      <div 
        v-for="day in days" 
        :key="day"
        class="h-16 bg-primary flex items-center justify-center border-r border-white/10 last:border-r-0"
      >
        <span class="text-base font-semibold text-white">{{ day }}</span>
      </div>

      <template v-for="time in times" :key="time">
        <template v-if="time === '11:00'">
          <div class="h-12 bg-slate-50 flex items-center justify-center border-b border-r border-slate-100">
            <span class="text-xs font-medium text-slate-400">{{ time }}</span>
          </div>
          <div class="col-span-5 h-12 bg-slate-50 flex items-center justify-center border-b border-slate-100">
            <span class="text-[10px] font-medium text-slate-400 uppercase tracking-widest italic">
              Morning Assembly & Mid-day Interval
            </span>
          </div>
        </template>

        <template v-else>
          <div class="h-36 flex items-center justify-center border-b border-r border-slate-100 bg-white">
            <span class="text-sm font-semibold text-slate-600">{{ time }}</span>
          </div>
          <div 
            v-for="day in days" 
            :key="`${day}-${time}`"
            class="h-36 p-2 border-b border-r border-slate-100 last:border-r-0 bg-white relative"
          >
            <template v-if="getItem(day, time)?.type && getItem(day, time)!.type !== 'placeholder'">
              <div 
                class="h-full rounded-xl border-l-4 p-3 flex flex-col justify-between transition-all hover:scale-[1.02] cursor-pointer group"
                :class="getCardColor(getItem(day, time)!.type)"
              >
                <div>
                  <div class="flex items-start justify-between mb-1">
                    <h4 class="font-semibold text-xs leading-tight pr-2">
                      {{ getItem(day, time)!.title }}
                    </h4>
                    <MoreVertical 
                      v-if="getItem(day, time)!.status !== 'locked'"
                      class="w-4 h-4 opacity-40 group-hover:opacity-100 transition-opacity flex-shrink-0" 
                    />
                    <Lock 
                      v-else
                      class="w-4 h-4 text-slate-400 flex-shrink-0" 
                    />
                  </div>
                  <p class="text-[10px] opacity-70">
                    {{ getItem(day, time)!.teacher }}
                  </p>
                </div>

                <div class="flex items-center justify-between">
                  <span class="bg-white/60 px-2 py-0.5 rounded text-[9px] font-medium">
                    {{ getItem(day, time)!.room }}
                  </span>
                </div>
              </div>
            </template>

            <div 
              v-else
              class="h-full rounded-xl border-2 border-dashed border-slate-100 flex flex-col items-center justify-center text-slate-300 hover:border-accent/30 hover:text-accent/50 transition-all cursor-pointer group"
            >
              <PlusCircle class="w-5 h-5 mb-1 opacity-30 group-hover:opacity-100 transition-opacity" />
              <span class="text-[8px] font-medium uppercase tracking-wider">Assign</span>
            </div>
          </div>
        </template>
      </template>
    </div>
  </div>
</template>
