<script setup lang="ts">
import { GraduationCap, TrendingUp, Calendar, MessageSquare, ChevronRight } from 'lucide-vue-next'

const { myChildren, activeChild, setActiveChild } = useParent()

const selectedChild = ref('')

const childrenWithStats = computed(() => {
  return myChildren.value.map(child => ({
    ...child,
    gpa: (3.5 + Math.random() * 0.5).toFixed(2),
    attendance: (90 + Math.random() * 10).toFixed(1),
    behaviorPoints: Math.floor(80 + Math.random() * 100),
    trend: Math.random() > 0.3 ? 'up' : 'stable'
  }))
})

const recentActivity = [
  { child: 'Alexander', action: 'Scored 94% on Mathematics Exam', date: 'Today', type: 'academic' },
  { child: 'Beatrice', action: 'Marked present for all classes', date: 'Today', type: 'attendance' },
  { child: 'Alexander', action: 'Received +10 behavior points for Participation', date: 'Yesterday', type: 'behavior' },
  { child: 'Beatrice', action: 'Submitted English Essay on time', date: 'Yesterday', type: 'academic' },
]

const upcomingEvents = [
  { event: 'Parent-Teacher Conference', date: 'Jan 20, 2024', type: 'meeting' },
  { event: 'Term 2 Progress Reports', date: 'Jan 25, 2024', type: 'report' },
  { event: 'Spring Break Begins', date: 'Mar 15, 2024', type: 'holiday' },
]
</script>

<template>
  <div class="max-w-[1600px] mx-auto pb-16 px-4 md:px-10">
    <div class="mb-8">
      <p class="text-xs font-semibold text-accent uppercase tracking-wider mb-2">Parent Portal</p>
      <h2 class="page-title">My Children</h2>
      <p class="text-slate-500 mt-2">Monitor and compare your children's academic progress</p>
    </div>

    <div class="space-y-8">
      <div v-for="child in childrenWithStats" :key="child.id" class="glass-card-static overflow-hidden">
        <div class="bg-gradient-to-r from-indigo-500 to-purple-600 p-6 text-white">
          <div class="flex items-center justify-between">
            <div class="flex items-center gap-4">
              <img :src="`https://ui-avatars.com/api/?name=${child.initials}&background=fff&color=6366F1`" class="w-16 h-16 rounded-2xl object-cover" />
              <div>
                <h3 class="text-xl font-black">{{ child.name }}</h3>
                <p class="text-sm text-indigo-100 mt-1">{{ child.grade }} • {{ child.section }}</p>
              </div>
            </div>
            <div class="flex items-center gap-8">
              <div class="text-center">
                <p class="text-2xl font-black">{{ child.gpa }}</p>
                <p class="text-[10px] uppercase tracking-widest text-indigo-200">GPA</p>
              </div>
              <div class="text-center">
                <p class="text-2xl font-black">{{ child.attendance }}%</p>
                <p class="text-[10px] uppercase tracking-widest text-indigo-200">Attendance</p>
              </div>
              <div class="text-center">
                <p class="text-2xl font-black">{{ child.behaviorPoints }}</p>
                <p class="text-[10px] uppercase tracking-widest text-indigo-200">Points</p>
              </div>
            </div>
          </div>
        </div>

        <div class="p-6 grid grid-cols-1 md:grid-cols-3 gap-4">
          <NuxtLink to="/progress" class="flex items-center gap-4 p-4 bg-slate-50 rounded-xl hover:bg-indigo-50 transition-colors group">
            <div class="w-10 h-10 bg-indigo-100 rounded-xl flex items-center justify-center text-indigo-600 group-hover:bg-indigo-200">
              <TrendingUp class="w-5 h-5" />
            </div>
            <div>
              <h4 class="font-bold text-slate-800">Academic Progress</h4>
              <p class="text-xs text-slate-500">Grades & performance</p>
            </div>
          </NuxtLink>

          <NuxtLink to="/parent/attendance" class="flex items-center gap-4 p-4 bg-slate-50 rounded-xl hover:bg-indigo-50 transition-colors group">
            <div class="w-10 h-10 bg-emerald-100 rounded-xl flex items-center justify-center text-emerald-600 group-hover:bg-emerald-200">
              <Calendar class="w-5 h-5" />
            </div>
            <div>
              <h4 class="font-bold text-slate-800">Attendance</h4>
              <p class="text-xs text-slate-500">Daily attendance record</p>
            </div>
          </NuxtLink>

          <NuxtLink to="/parent/messages" class="flex items-center gap-4 p-4 bg-slate-50 rounded-xl hover:bg-indigo-50 transition-colors group">
            <div class="w-10 h-10 bg-amber-100 rounded-xl flex items-center justify-center text-amber-600 group-hover:bg-amber-200">
              <MessageSquare class="w-5 h-5" />
            </div>
            <div>
              <h4 class="font-bold text-slate-800">Message Teacher</h4>
              <p class="text-xs text-slate-500">Contact teachers</p>
            </div>
          </NuxtLink>
        </div>
      </div>

      <div v-if="myChildren.length === 0" class="glass-card-static p-12 text-center">
        <GraduationCap class="w-12 h-12 text-slate-300 mx-auto mb-4" />
        <h3 class="text-xl font-black text-slate-800 tracking-tight">No Children Linked</h3>
        <p class="text-sm text-slate-500 mt-2">Contact the school administration to link your children's accounts</p>
      </div>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
      <div class="glass-card-static p-6">
        <h3 class="text-lg font-black text-slate-800 tracking-tight mb-6">Recent Activity</h3>
        <div class="space-y-3">
          <div v-for="activity in recentActivity" :key="activity.action" class="flex items-center justify-between p-4 bg-slate-50/50 rounded-2xl border border-slate-100">
            <div class="flex items-center gap-4">
              <div class="w-2 h-2 rounded-full"
                :class="activity.type === 'academic' ? 'bg-indigo-500' : activity.type === 'attendance' ? 'bg-emerald-500' : 'bg-amber-500'"
              ></div>
              <div>
                <p class="text-sm font-bold text-slate-800">{{ activity.action }}</p>
                <p class="text-[10px] text-slate-500">{{ activity.child }} • {{ activity.date }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="glass-card-static p-6">
        <h3 class="text-lg font-black text-slate-800 tracking-tight mb-6">Upcoming Events</h3>
        <div class="space-y-3">
          <div v-for="event in upcomingEvents" :key="event.event" class="flex items-center justify-between p-4 bg-slate-50/50 rounded-2xl border border-slate-100">
            <div>
              <h4 class="text-sm font-bold text-slate-800">{{ event.event }}</h4>
              <p class="text-xs text-slate-500">{{ event.date }}</p>
            </div>
            <ChevronRight class="w-4 h-4 text-slate-300" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
