<script setup lang="ts">
import { MoreVertical, Lock, PlusCircle, X, Users, BookOpen, Clock, MapPin, ChevronLeft, ChevronRight } from 'lucide-vue-next'

const { selectedGrade, selectedTeacher, viewMode } = useSchedule()

const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday']
const times = ['08:00', '09:30', '11:00', '12:30', '14:00']

const currentDayIndex = ref(0)
const nextDay = () => { if (currentDayIndex.value < days.length - 1) currentDayIndex.value++ }
const prevDay = () => { if (currentDayIndex.value > 0) currentDayIndex.value-- }

const schedule = ref([
  { day: 'Sunday', time: '08:00', title: 'Advanced Physics', teacher: 'Prof. James Wilson', grade: 'Grade 11', room: 'ROOM 402', type: 'science', status: 'active' },
  { day: 'Monday', time: '08:00', title: 'Literature Analysis', teacher: 'Ms. Layla Hassan', grade: 'Grade 10', room: 'LIBRARY B', type: 'arts', status: 'active' },
  { day: 'Tuesday', time: '08:00', title: 'Calculus II', teacher: 'Dr. Sarah Ahmed', grade: 'Grade 12', room: 'ROOM 305', type: 'math', status: 'active' },
  { day: 'Wednesday', time: '08:00', title: 'Visual Arts', teacher: 'Marcus Stone', grade: 'Grade 9', room: 'STUDIO 1', type: 'arts', status: 'active' },
  { day: 'Thursday', time: '08:00', title: 'Ethics', teacher: 'Prof. Lee', grade: 'Grade 11', room: 'AUDITORIUM', type: 'social', status: 'active' },

  { day: 'Sunday', time: '09:30', type: 'placeholder' },
  { day: 'Monday', time: '09:30', title: 'Chemistry Lab', teacher: 'Dr. Elena Rostova', grade: 'Grade 11', room: 'LAB 04', type: 'science', status: 'active' },
  { day: 'Tuesday', time: '09:30', title: 'Macroeconomics', teacher: 'Dr. Sarah Ahmed', grade: 'Grade 12', room: 'ROOM 101', type: 'social', status: 'active' },
  { day: 'Wednesday', time: '09:30', title: 'Advanced Physics', teacher: 'Prof. James Wilson', grade: 'Grade 11', room: 'ROOM 402', type: 'science', status: 'active' },
  { day: 'Thursday', time: '09:30', type: 'placeholder' },

  { day: 'Sunday', time: '12:30', title: 'Computer Science', teacher: 'Eng. Samer Ali', grade: 'Grade 10', room: 'ICT LAB 1', type: 'it', status: 'active' },
  { day: 'Monday', time: '12:30', title: 'Physical Education', teacher: 'Coach Ryan', grade: 'Grade 8', room: 'SPORTS HALL', type: 'pe', status: 'active' },
  { day: 'Tuesday', time: '12:30', title: 'Biology II', teacher: 'Dr. Elena Rostova', grade: 'Grade 11', room: 'ROOM 202', type: 'science', status: 'active' },
  { day: 'Wednesday', time: '12:30', title: 'World History', teacher: 'Prof. Omar Khalid', grade: 'Grade 10', room: 'ROOM 105', type: 'social', status: 'active' },
  { day: 'Thursday', time: '12:30', title: 'Calculus II', teacher: 'Dr. Sarah Ahmed', grade: 'Grade 12', room: 'ROOM 305', type: 'math', status: 'active' },

  { day: 'Sunday', time: '14:00', title: 'Faculty Meeting', teacher: 'Board Room', grade: 'Staff', room: 'ADMIN AREA', type: 'meeting', status: 'locked' },
  { day: 'Monday', time: '14:00', title: 'Database Systems', teacher: 'Eng. Samer Ali', grade: 'Grade 12', room: 'ICT LAB 2', type: 'it', status: 'active' },
  { day: 'Tuesday', time: '14:00', title: 'Literature Analysis', teacher: 'Ms. Layla Hassan', grade: 'Grade 10', room: 'LIBRARY B', type: 'arts', status: 'active' },
  { day: 'Wednesday', time: '14:00', type: 'placeholder' },
  { day: 'Thursday', time: '14:00', title: 'Physical Education', teacher: 'Coach Ryan', grade: 'Grade 8', room: 'SPORTS HALL', type: 'pe', status: 'active' },
])

const filteredSchedule = computed(() => {
  return schedule.value.filter(item => {
    const teacherMatch = selectedTeacher.value === 'All Teachers' || item.teacher === selectedTeacher.value
    const gradeMatch = selectedGrade.value === 'All Grades' || item.grade === selectedGrade.value
    return teacherMatch && gradeMatch
  })
})

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

const getItem = (day: string, time: string) => filteredSchedule.value.find(s => s.day === day && s.time === time)

const isAssignModalOpen = ref(false)
const selectedCell = ref({ day: '', time: '' })

const openAssignModal = (day: string, time: string) => {
  selectedCell.value = { day, time }
  isAssignModalOpen.value = true
}

const { success } = useToast()
const handleAssign = () => {
  success('Class Assigned', `A new class has been scheduled for ${selectedCell.value.day} at ${selectedCell.value.time}`)
  isAssignModalOpen.value = false
}
</script>

<template>
  <div class="glass-card-static overflow-hidden mb-6 relative">
    <!-- Day View Header (only visible in Day View) -->
    <div v-if="viewMode === 'Day View'" class="bg-primary p-4 flex items-center justify-between border-b border-white/10">
      <button @click="prevDay" :disabled="currentDayIndex === 0" class="p-2 text-white/50 hover:text-white disabled:opacity-20 transition-all">
        <ChevronLeft class="w-6 h-6" />
      </button>
      <h3 class="text-xl font-bold text-white tracking-wide uppercase">{{ days[currentDayIndex] }}</h3>
      <button @click="nextDay" :disabled="currentDayIndex === days.length - 1" class="p-2 text-white/50 hover:text-white disabled:opacity-20 transition-all">
        <ChevronRight class="w-6 h-6" />
      </button>
    </div>

    <!-- Week View Grid -->
    <div v-if="viewMode === 'Week View'" class="grid grid-cols-[80px,repeat(5,1fr)]">
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
            <template v-if="getItem(day, time) && getItem(day, time)?.type !== 'placeholder'">
              <div 
                class="h-full rounded-xl border-l-4 p-3 flex flex-col justify-between transition-all hover:scale-[1.02] cursor-pointer group"
                :class="getCardColor(getItem(day, time)!.type)"
                @click="success('Class Details', `${getItem(day, time)!.title} with ${getItem(day, time)!.teacher}`)"
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
                  <p class="text-[9px] mt-1 font-medium opacity-60">
                    {{ getItem(day, time)!.grade }}
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
              @click="openAssignModal(day, time)"
              class="h-full rounded-xl border-2 border-dashed border-slate-100 flex flex-col items-center justify-center text-slate-300 hover:border-accent/30 hover:text-accent/50 transition-all cursor-pointer group"
            >
              <PlusCircle class="w-5 h-5 mb-1 opacity-30 group-hover:opacity-100 transition-opacity" />
              <span class="text-[8px] font-medium uppercase tracking-wider">Assign</span>
            </div>
          </div>
        </template>
      </template>
    </div>

    <!-- Day View Grid -->
    <div v-else class="flex flex-col">
      <template v-for="time in times" :key="time">
        <template v-if="time === '11:00'">
          <div class="h-12 bg-slate-50 flex items-center justify-center border-b border-slate-100">
            <span class="text-[10px] font-bold text-slate-400 uppercase tracking-widest italic">
              {{ time }} • Morning Assembly & Mid-day Interval
            </span>
          </div>
        </template>
        <div v-else class="flex border-b border-slate-100 group">
          <div class="w-24 flex items-center justify-center bg-slate-50/50 border-r border-slate-100 transition-colors group-hover:bg-slate-50">
            <span class="text-sm font-bold text-slate-600">{{ time }}</span>
          </div>
          <div class="flex-1 p-4 bg-white relative min-h-[140px]">
            <template v-if="getItem(days[currentDayIndex], time) && getItem(days[currentDayIndex], time)?.type !== 'placeholder'">
              <div 
                class="h-full rounded-2xl border-l-4 p-5 flex items-center justify-between transition-all hover:translate-x-1 cursor-pointer shadow-sm hover:shadow-md"
                :class="getCardColor(getItem(days[currentDayIndex], time)!.type)"
                @click="success('Class Details', `${getItem(days[currentDayIndex], time)!.title} with ${getItem(days[currentDayIndex], time)!.teacher}`)"
              >
                <div class="flex items-center gap-6">
                  <div class="w-14 h-14 rounded-2xl bg-white/50 flex items-center justify-center shadow-inner">
                    <BookOpen class="w-6 h-6 opacity-60" />
                  </div>
                  <div>
                    <h4 class="text-lg font-bold mb-1">{{ getItem(days[currentDayIndex], time)!.title }}</h4>
                    <div class="flex items-center gap-4 text-sm opacity-70 font-medium">
                      <span class="flex items-center gap-1.5"><Users class="w-4 h-4" /> {{ getItem(days[currentDayIndex], time)!.teacher }}</span>
                      <span class="flex items-center gap-1.5"><MapPin class="w-4 h-4" /> {{ getItem(days[currentDayIndex], time)!.room }}</span>
                      <span class="px-2 py-0.5 bg-white/40 rounded-lg text-xs">{{ getItem(days[currentDayIndex], time)!.grade }}</span>
                    </div>
                  </div>
                </div>
                <button class="p-3 hover:bg-white/40 rounded-xl transition-all">
                  <MoreVertical class="w-6 h-6 opacity-40" />
                </button>
              </div>
            </template>
            <div 
              v-else
              @click="openAssignModal(days[currentDayIndex], time)"
              class="h-full rounded-2xl border-2 border-dashed border-slate-100 flex items-center justify-center text-slate-300 hover:border-accent/30 hover:text-accent/50 hover:bg-slate-50/50 transition-all cursor-pointer group"
            >
              <div class="flex flex-col items-center">
                <PlusCircle class="w-8 h-8 mb-2 opacity-20 group-hover:opacity-100 transition-opacity" />
                <span class="text-xs font-bold uppercase tracking-widest">Assign Class for this Slot</span>
              </div>
            </div>
          </div>
        </div>
      </template>
    </div>

    <!-- Assign Class Modal -->
    <Transition
      enter-active-class="transition duration-300 ease-out"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition duration-200 ease-in"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div v-if="isAssignModalOpen" class="fixed inset-0 z-[200] flex items-center justify-center px-4">
        <div @click="isAssignModalOpen = false" class="absolute inset-0 bg-slate-900/40 backdrop-blur-sm"></div>
        
        <div class="bg-white rounded-3xl shadow-2xl w-full max-w-md overflow-hidden relative animate-scale-in">
          <div class="p-6 border-b border-slate-100 flex items-center justify-between">
            <div>
              <h3 class="text-lg font-bold text-slate-800">Assign New Class</h3>
              <p class="text-xs text-slate-500">{{ selectedCell.day }} • {{ selectedCell.time }}</p>
            </div>
            <button @click="isAssignModalOpen = false" class="p-2 hover:bg-slate-100 rounded-xl transition-colors">
              <X class="w-5 h-5 text-slate-400" />
            </button>
          </div>
          
          <div class="p-6 space-y-4">
            <div>
              <label class="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1.5 block">Subject / Title</label>
              <div class="relative">
                <BookOpen class="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <input type="text" placeholder="e.g. Advanced Physics" class="input-glass pl-11">
              </div>
            </div>

            <div class="grid grid-cols-2 gap-4">
              <div>
                <label class="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1.5 block">Teacher</label>
                <div class="relative">
                  <Users class="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                  <select class="input-glass pl-11 appearance-none">
                    <option>Select Teacher</option>
                    <option>Dr. Sarah Ahmed</option>
                    <option>Prof. James Wilson</option>
                  </select>
                </div>
              </div>
              <div>
                <label class="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1.5 block">Room</label>
                <div class="relative">
                  <MapPin class="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                  <input type="text" placeholder="e.g. ROOM 402" class="input-glass pl-11">
                </div>
              </div>
            </div>

            <div>
              <label class="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1.5 block">Duration</label>
              <div class="relative">
                <Clock class="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <select class="input-glass pl-11 appearance-none">
                  <option>90 Minutes (Standard)</option>
                  <option>45 Minutes (Short)</option>
                  <option>180 Minutes (Lab)</option>
                </select>
              </div>
            </div>
          </div>
          
          <div class="p-6 bg-slate-50 flex items-center gap-3">
            <button @click="isAssignModalOpen = false" class="btn-secondary flex-1 py-2.5">Cancel</button>
            <button @click="handleAssign" class="btn-primary flex-1 py-2.5">Assign Class</button>
          </div>
        </div>
      </div>
    </Transition>
  </div>
</template>
