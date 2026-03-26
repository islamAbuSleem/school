<script setup lang="ts">
import { MoreVertical, Lock, PlusCircle } from 'lucide-vue-next'

const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday']
const times = ['08:00', '09:30', '11:00', '12:30', '14:00']

const schedule = [
  // 08:00
  { day: 'Sunday', time: '08:00', title: 'Advanced Physics', teacher: 'Prof. James Wilson', room: 'ROOM 402', type: 'science', status: 'active' },
  { day: 'Monday', time: '08:00', title: 'Literature Analysis', teacher: 'Ms. Layla Hassan', room: 'LIBRARY B', type: 'arts', status: 'active' },
  { day: 'Tuesday', time: '08:00', title: 'Calculus II', teacher: 'Dr. Sarah Ahmed', room: 'ROOM 305', type: 'math', status: 'active' },
  { day: 'Wednesday', time: '08:00', title: 'Visual Arts', teacher: 'Marcus Stone', room: 'STUDIO 1', type: 'arts', status: 'active' },
  { day: 'Thursday', time: '08:00', title: 'Ethics', teacher: 'Prof. Lee', room: 'AUDITORIUM', type: 'social', status: 'active' },

  // 09:30
  { day: 'Sunday', time: '09:30', type: 'placeholder' },
  { day: 'Monday', time: '09:30', title: 'Chemistry Lab', teacher: 'Dr. Elena Rostova', room: 'LAB 04', type: 'science', status: 'active' },
  { day: 'Tuesday', time: '09:30', title: 'Macroeconomics', teacher: 'Dr. Sarah Ahmed', room: 'ROOM 101', type: 'social', status: 'active' },
  { day: 'Wednesday', time: '09:30', title: 'Advanced Physics', teacher: 'Prof. James Wilson', room: 'ROOM 402', type: 'science', status: 'active' },
  { day: 'Thursday', time: '09:30', type: 'placeholder' },

  // 12:30
  { day: 'Sunday', time: '12:30', title: 'Computer Science', teacher: 'Eng. Samer Ali', room: 'ICT LAB 1', type: 'it', status: 'active' },
  { day: 'Monday', time: '12:30', title: 'Physical Education', teacher: 'Coach Ryan', room: 'SPORTS HALL', type: 'pe', status: 'active' },
  { day: 'Tuesday', time: '12:30', title: 'Biology II', teacher: 'Dr. Elena Rostova', room: 'ROOM 202', type: 'science', status: 'active' },
  { day: 'Wednesday', time: '12:30', title: 'World History', teacher: 'Prof. Omar Khalid', room: 'ROOM 105', type: 'social', status: 'active' },
  { day: 'Thursday', time: '12:30', title: 'Calculus II', teacher: 'Dr. Sarah Ahmed', room: 'ROOM 305', type: 'math', status: 'active' },

  // 14:00
  { day: 'Sunday', time: '14:00', title: 'Faculty Meeting', teacher: 'Board Room', room: 'ADMIN AREA', type: 'meeting', status: 'locked' },
  { day: 'Monday', time: '14:00', title: 'Database Systems', teacher: 'Eng. Samer Ali', room: 'ICT LAB 2', type: 'it', status: 'active' },
  { day: 'Tuesday', time: '14:00', title: 'Literature Analysis', teacher: 'Ms. Layla Hassan', room: 'LIBRARY B', type: 'arts', status: 'active' },
  { day: 'Wednesday', time: '14:00', type: 'placeholder' },
  { day: 'Thursday', time: '14:00', title: 'Physical Education', teacher: 'Coach Ryan', room: 'SPORTS HALL', type: 'pe', status: 'active' },
]

const getCardColor = (type: string) => {
  switch (type) {
    case 'science': return 'bg-[#E0E7FF] border-l-[#4F46E5] text-[#1E1B4B]'
    case 'math': return 'bg-[#F0F9FF] border-l-[#0EA5E9] text-[#082F49]'
    case 'arts': return 'bg-[#FFEDD5] border-l-[#F97316] text-[#431407]'
    case 'social': return 'bg-[#FEF2F2] border-l-[#EF4444] text-[#450A0A]'
    case 'it': return 'bg-[#EEF2FF] border-l-[#6366F1] text-[#1E1B4B]'
    case 'pe': return 'bg-[#FFF7ED] border-l-[#FB923C] text-[#431407]'
    case 'meeting': return 'bg-[#F8FAFC] border-l-[#94A3B8] text-[#1E293B]'
    default: return 'bg-white border-slate-200'
  }
}

const getAccentColor = (type: string) => {
  switch (type) {
    case 'science': return 'text-[#4F46E5]'
    case 'math': return 'text-[#0EA5E9]'
    case 'arts': return 'text-[#F97316]'
    case 'social': return 'text-[#EF4444]'
    case 'it': return 'text-[#6366F1]'
    case 'pe': return 'text-[#FB923C]'
    case 'meeting': return 'text-[#94A3B8]'
    default: return 'text-slate-400'
  }
}
</script>

<template>
  <div class="bg-white rounded-3xl overflow-hidden shadow-sm ring-1 ring-slate-100 mb-8">
    <div class="grid grid-cols-[100px,repeat(5,1fr)]">
      <!-- Grid Header -->
      <div class="h-20 bg-[#0F172A] flex items-center justify-center border-r border-slate-800">
        <span class="text-[10px] font-black text-slate-500 tracking-[0.2em] uppercase">TIME</span>
      </div>
      <div 
        v-for="day in days" 
        :key="day"
        class="h-20 bg-[#0F172A] flex items-center justify-center border-r border-slate-800 last:border-r-0"
      >
        <span class="text-lg font-bold text-white tracking-wide">{{ day }}</span>
      </div>

      <!-- Grid Body -->
      <template v-for="time in times" :key="time">
        <!-- Interval Row -->
        <template v-if="time === '11:00'">
          <div class="h-16 bg-slate-50 flex items-center justify-center border-b border-r border-slate-100">
            <span class="text-xs font-bold text-slate-400">{{ time }}</span>
          </div>
          <div class="col-span-5 h-16 bg-slate-50 flex items-center justify-center border-b border-slate-100">
            <span class="text-xs font-black text-slate-400 tracking-[0.3em] uppercase italic">
              MORNING ASSEMBLY & MID–DAY INTERVAL
            </span>
          </div>
        </template>

        <!-- Regular Row -->
        <template v-else>
          <div class="h-44 flex items-center justify-center border-b border-r border-slate-100 bg-white">
            <span class="text-sm font-bold text-[#0F172A]">{{ time }}</span>
          </div>
          <div 
            v-for="day in days" 
            :key="`${day}-${time}`"
            class="h-44 p-4 border-b border-r border-slate-100 last:border-r-0 bg-white relative"
          >
            <!-- Card -->
            <template v-if="schedule.find(s => s.day === day && s.time === time)?.type !== 'placeholder'">
              <div 
                v-if="schedule.find(s => s.day === day && s.time === time)"
                class="h-full rounded-2xl border-l-4 p-5 flex flex-col justify-between transition-all hover:scale-[1.02] cursor-pointer group shadow-sm"
                :class="getCardColor(schedule.find(s => s.day === day && s.time === time)!.type)"
              >
                <div>
                  <div class="flex items-start justify-between mb-1">
                    <h4 class="font-extrabold text-sm leading-tight pr-4">
                      {{ schedule.find(s => s.day === day && s.time === time)!.title }}
                    </h4>
                    <MoreVertical 
                      v-if="schedule.find(s => s.day === day && s.time === time)!.status !== 'locked'"
                      class="w-4 h-4 opacity-40 group-hover:opacity-100 transition-opacity" 
                    />
                    <Lock 
                      v-else
                      class="w-4 h-4 text-slate-400" 
                    />
                  </div>
                  <p class="text-[11px] font-bold opacity-70">
                    {{ schedule.find(s => s.day === day && s.time === time)!.teacher }}
                  </p>
                </div>

                <div class="flex items-center justify-between">
                  <div class="bg-white/50 px-3 py-1 rounded-lg text-[9px] font-black tracking-widest uppercase">
                    {{ schedule.find(s => s.day === day && s.time === time)!.room }}
                  </div>
                  <div class="flex space-y-0.5 flex-col">
                    <div class="w-1 h-1 rounded-full bg-current opacity-40" :class="getAccentColor(schedule.find(s => s.day === day && s.time === time)!.type)"></div>
                    <div class="w-1 h-1 rounded-full bg-current opacity-40" :class="getAccentColor(schedule.find(s => s.day === day && s.time === time)!.type)"></div>
                  </div>
                </div>
              </div>
            </template>

            <!-- Placeholder -->
            <div 
              v-else
              class="h-full rounded-2xl border-2 border-dashed border-slate-100 flex flex-col items-center justify-center text-slate-300 hover:border-slate-200 hover:text-slate-400 transition-all cursor-pointer group"
            >
              <PlusCircle class="w-6 h-6 mb-3 opacity-20 group-hover:opacity-100 transition-opacity" />
              <span class="text-[9px] font-black tracking-[0.2em] uppercase">ASSIGN CLASS</span>
            </div>
          </div>
        </template>
      </template>
    </div>
  </div>
</template>
