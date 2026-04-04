<script setup lang="ts">
import { BookOpen, Calendar, TrendingUp, Clock, Award, AlertCircle } from 'lucide-vue-next'

const { currentUser, studentProfile } = useAuth()
const { classes } = useData()

const myClasses = computed(() => {
  const profile = studentProfile.value
  if (!profile) return []
  return classes.value.filter(c => c.studentIds.includes(profile.id))
})

const todaySchedule = [
  { time: '08:00', subject: 'Mathematics', teacher: 'Prof. James Wilson', room: 'Lab 204', status: 'upcoming' },
  { time: '09:30', subject: 'Physics', teacher: 'Prof. James Wilson', room: 'Auditorium 1', status: 'upcoming' },
  { time: '11:00', subject: 'Break', teacher: '', room: '', status: 'break' },
  { time: '12:30', subject: 'History', teacher: 'Ms. Layla Hassan', room: 'Room 105', status: 'upcoming' },
  { time: '14:00', subject: 'English', teacher: 'Ms. Emily Johnson', room: 'Library B', status: 'upcoming' },
]

const upcomingDeadlines = [
  { title: 'Physics Lab Report', due: 'Tomorrow', subject: 'Physics', priority: 'high' },
  { title: 'Math Problem Set #12', due: 'Jan 20', subject: 'Mathematics', priority: 'medium' },
  { title: 'History Essay Draft', due: 'Jan 25', subject: 'History', priority: 'low' },
]
</script>

<template>
  <div class="max-w-[1600px] mx-auto pb-16 px-4 md:px-10">
    <div class="mb-8">
      <p class="text-xs font-semibold text-accent uppercase tracking-wider mb-2">Student Portal</p>
      <h2 class="page-title">Welcome, {{ studentProfile?.name || currentUser?.name }}</h2>
      <p class="text-slate-500 mt-2">Here's your academic overview for today</p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      <div class="glass-card-static p-6 border-l-4 border-l-indigo-500">
        <div class="flex items-center justify-between mb-4">
          <div class="w-10 h-10 bg-indigo-50 rounded-xl flex items-center justify-center text-indigo-600">
            <TrendingUp class="w-5 h-5" />
          </div>
        </div>
        <p class="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Current GPA</p>
        <p class="text-3xl font-black text-slate-800">{{ studentProfile?.performanceScore ? (studentProfile.performanceScore / 25).toFixed(2) : '3.85' }}</p>
        <p class="text-xs text-emerald-600 mt-2 font-bold">+0.12 this term</p>
      </div>

      <div class="glass-card-static p-6 border-l-4 border-l-emerald-500">
        <div class="flex items-center justify-between mb-4">
          <div class="w-10 h-10 bg-emerald-50 rounded-xl flex items-center justify-center text-emerald-600">
            <Calendar class="w-5 h-5" />
          </div>
        </div>
        <p class="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Attendance</p>
        <p class="text-3xl font-black text-slate-800">{{ studentProfile?.attendanceRate }}%</p>
        <p class="text-xs text-emerald-600 mt-2 font-bold">Excellent</p>
      </div>

      <div class="glass-card-static p-6 border-l-4 border-l-amber-500">
        <div class="flex items-center justify-between mb-4">
          <div class="w-10 h-10 bg-amber-50 rounded-xl flex items-center justify-center text-amber-600">
            <BookOpen class="w-5 h-5" />
          </div>
        </div>
        <p class="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">My Courses</p>
        <p class="text-3xl font-black text-slate-800">{{ myClasses.length }}</p>
        <p class="text-xs text-slate-500 mt-2">Enrolled this term</p>
      </div>

      <div class="glass-card-static p-6 border-l-4 border-l-rose-500">
        <div class="flex items-center justify-between mb-4">
          <div class="w-10 h-10 bg-rose-50 rounded-xl flex items-center justify-center text-rose-600">
            <Clock class="w-5 h-5" />
          </div>
        </div>
        <p class="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Pending Tasks</p>
        <p class="text-3xl font-black text-slate-800">{{ upcomingDeadlines.length }}</p>
        <p class="text-xs text-rose-600 mt-2 font-bold">1 due tomorrow</p>
      </div>
    </div>

    <div class="grid grid-cols-1 lg:grid-cols-[1fr,400px] gap-8">
      <div class="space-y-8">
        <div class="glass-card-static p-6">
          <div class="flex items-center justify-between mb-6">
            <h3 class="text-lg font-black text-slate-800 tracking-tight">Today's Schedule</h3>
            <NuxtLink to="/student/schedule" class="text-xs font-bold text-accent hover:text-accent-hover uppercase tracking-widest">Full Schedule</NuxtLink>
          </div>
          <div class="space-y-3">
            <div v-for="slot in todaySchedule" :key="slot.time" 
              class="flex items-center justify-between p-4 rounded-2xl border transition-all"
              :class="slot.status === 'break' ? 'bg-slate-50 border-slate-100' : 'bg-indigo-50/30 border-indigo-100 hover:border-indigo-200'"
            >
              <div class="flex items-center gap-4">
                <div class="w-16 text-center">
                  <p class="text-sm font-black text-slate-800">{{ slot.time }}</p>
                </div>
                <div v-if="slot.status === 'break'" class="w-1 h-10 bg-slate-200 rounded-full"></div>
                <div v-else class="w-1 h-10 bg-indigo-500 rounded-full"></div>
                <div>
                  <h4 class="font-bold text-slate-800" :class="slot.status === 'break' ? 'text-slate-400' : ''">{{ slot.status === 'break' ? 'Morning Break' : slot.subject }}</h4>
                  <p v-if="slot.teacher" class="text-xs text-slate-500">{{ slot.teacher }} • {{ slot.room }}</p>
                </div>
              </div>
              <span v-if="slot.status !== 'break'" class="text-[10px] font-black text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full uppercase">Upcoming</span>
            </div>
          </div>
        </div>

        <div class="glass-card-static p-6">
          <div class="flex items-center justify-between mb-6">
            <h3 class="text-lg font-black text-slate-800 tracking-tight">My Courses</h3>
            <NuxtLink to="/student/courses" class="text-xs font-bold text-accent hover:text-accent-hover uppercase tracking-widest">View All</NuxtLink>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div v-for="cls in myClasses" :key="cls.id" class="p-5 bg-slate-50/50 rounded-2xl border border-slate-100 hover:border-indigo-200 transition-all cursor-pointer">
              <div class="flex items-center gap-3 mb-3">
                <div class="w-10 h-10 bg-indigo-50 rounded-xl flex items-center justify-center text-indigo-600">
                  <BookOpen class="w-5 h-5" />
                </div>
                <div>
                  <h4 class="font-bold text-slate-800">{{ cls.name }}</h4>
                  <p class="text-xs text-slate-500">{{ cls.subject }}</p>
                </div>
              </div>
              <div class="flex items-center justify-between text-xs text-slate-500">
                <span>{{ cls.grade }} • {{ cls.room }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="space-y-6">
        <div class="glass-card-static p-6">
          <h3 class="text-lg font-black text-slate-800 tracking-tight mb-6">Upcoming Deadlines</h3>
          <div class="space-y-3">
            <div v-for="task in upcomingDeadlines" :key="task.title" class="p-4 bg-slate-50/50 rounded-2xl border border-slate-100">
              <div class="flex items-center justify-between mb-2">
                <h4 class="text-sm font-bold text-slate-800">{{ task.title }}</h4>
                <span :class="[
                  'text-[10px] font-black uppercase px-2 py-1 rounded-lg',
                  task.priority === 'high' ? 'text-rose-600 bg-rose-100' : task.priority === 'medium' ? 'text-amber-600 bg-amber-100' : 'text-emerald-600 bg-emerald-100'
                ]">
                  {{ task.priority }}
                </span>
              </div>
              <div class="flex items-center justify-between">
                <p class="text-xs text-slate-500">{{ task.subject }}</p>
                <p class="text-xs font-bold text-slate-600">{{ task.due }}</p>
              </div>
            </div>
          </div>
        </div>

        <div class="glass-card-static p-6 bg-primary text-white">
          <h3 class="text-lg font-black tracking-tight mb-4">Quick Links</h3>
          <div class="space-y-3">
            <NuxtLink to="/student/schedule" class="flex items-center gap-3 p-3 bg-white/5 rounded-xl hover:bg-white/10 transition-colors">
              <Calendar class="w-4 h-4 text-indigo-300" />
              <span class="text-sm font-medium">View Full Schedule</span>
            </NuxtLink>
            <NuxtLink to="/student/grades" class="flex items-center gap-3 p-3 bg-white/5 rounded-xl hover:bg-white/10 transition-colors">
              <TrendingUp class="w-4 h-4 text-emerald-300" />
              <span class="text-sm font-medium">View My Grades</span>
            </NuxtLink>
            <NuxtLink to="/bus-tracking" class="flex items-center gap-3 p-3 bg-white/5 rounded-xl hover:bg-white/10 transition-colors">
              <BookOpen class="w-4 h-4 text-amber-300" />
              <span class="text-sm font-medium">Track School Bus</span>
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
