<script setup lang="ts">
import { BookOpen, Users, Clock, AlertCircle, TrendingUp, CheckCircle2, MessageSquare, Calendar } from 'lucide-vue-next'

const { currentUser, teacherProfile } = useAuth()
const { classes, teachers, students, attendanceRecords } = useData()

const myClasses = computed(() => {
  const profile = teacherProfile.value
  if (!profile) return []
  return classes.value.filter(c => c.teacherId === profile.id)
})

const myStudents = computed(() => {
  const studentIds = new Set<string>()
  myClasses.value.forEach(c => c.studentIds.forEach(id => studentIds.add(id)))
  return students.value.filter(s => studentIds.has(s.id))
})

const recentAttendance = computed(() => {
  return attendanceRecords.value.slice(-5).reverse()
})

const pendingTasks = [
  { task: 'Grade Physics Mid-term Exam', due: 'Tomorrow', priority: 'high' },
  { task: 'Submit attendance for Grade 12-B', due: 'Today', priority: 'medium' },
  { task: 'Review lesson plans for next week', due: 'Friday', priority: 'low' },
]
</script>

<template>
  <div class="max-w-[1600px] mx-auto pb-16 px-4 md:px-10">
    <div class="mb-8">
      <p class="text-xs font-semibold text-accent uppercase tracking-wider mb-2">Teacher Console</p>
      <h2 class="page-title">Welcome, {{ teacherProfile?.name || currentUser?.name }}</h2>
      <p class="text-slate-500 mt-2">Here's your teaching overview for today</p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      <div class="glass-card-static p-6 border-l-4 border-l-indigo-500">
        <div class="flex items-center justify-between mb-4">
          <div class="w-10 h-10 bg-indigo-50 rounded-xl flex items-center justify-center text-indigo-600">
            <BookOpen class="w-5 h-5" />
          </div>
        </div>
        <p class="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">My Classes</p>
        <p class="text-3xl font-black text-slate-800">{{ myClasses.length }}</p>
        <p class="text-xs text-slate-500 mt-2">Active this term</p>
      </div>

      <div class="glass-card-static p-6 border-l-4 border-l-emerald-500">
        <div class="flex items-center justify-between mb-4">
          <div class="w-10 h-10 bg-emerald-50 rounded-xl flex items-center justify-center text-emerald-600">
            <Users class="w-5 h-5" />
          </div>
        </div>
        <p class="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">My Students</p>
        <p class="text-3xl font-black text-slate-800">{{ myStudents.length }}</p>
        <p class="text-xs text-slate-500 mt-2">Across all classes</p>
      </div>

      <div class="glass-card-static p-6 border-l-4 border-l-amber-500">
        <div class="flex items-center justify-between mb-4">
          <div class="w-10 h-10 bg-amber-50 rounded-xl flex items-center justify-center text-amber-600">
            <Clock class="w-5 h-5" />
          </div>
        </div>
        <p class="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Pending Tasks</p>
        <p class="text-3xl font-black text-slate-800">{{ pendingTasks.length }}</p>
        <p class="text-xs text-amber-600 mt-2 font-bold">{{ pendingTasks.filter(t => t.priority === 'high').length }} urgent</p>
      </div>

      <div class="glass-card-static p-6 border-l-4 border-l-rose-500">
        <div class="flex items-center justify-between mb-4">
          <div class="w-10 h-10 bg-rose-50 rounded-xl flex items-center justify-center text-rose-600">
            <AlertCircle class="w-5 h-5" />
          </div>
        </div>
        <p class="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Alerts</p>
        <p class="text-3xl font-black text-slate-800">2</p>
        <p class="text-xs text-rose-600 mt-2 font-bold">Students at risk</p>
      </div>
    </div>

    <div class="grid grid-cols-1 lg:grid-cols-[1fr,400px] gap-8">
      <div class="space-y-8">
        <div class="glass-card-static p-6">
          <div class="flex items-center justify-between mb-6">
            <h3 class="text-lg font-black text-slate-800 tracking-tight">My Classes</h3>
            <NuxtLink to="/teacher/classes" class="text-xs font-bold text-accent hover:text-accent-hover uppercase tracking-widest">View All</NuxtLink>
          </div>
          <div class="space-y-3">
            <div v-for="cls in myClasses" :key="cls.id" class="flex items-center justify-between p-4 bg-slate-50/50 rounded-2xl border border-slate-100 hover:border-indigo-200 transition-all cursor-pointer">
              <div class="flex items-center gap-4">
                <div class="w-10 h-10 bg-indigo-50 rounded-xl flex items-center justify-center text-indigo-600">
                  <BookOpen class="w-5 h-5" />
                </div>
                <div>
                  <h4 class="font-bold text-slate-800">{{ cls.name }}</h4>
                  <p class="text-xs text-slate-500">{{ cls.grade }} • {{ cls.room }}</p>
                </div>
              </div>
              <div class="flex items-center gap-4">
                <div class="text-right">
                  <p class="text-xs font-bold text-slate-600">{{ cls.studentIds.length }} Students</p>
                </div>
              </div>
            </div>
            <div v-if="myClasses.length === 0" class="p-8 text-center text-slate-400">
              <BookOpen class="w-8 h-8 mx-auto mb-3 opacity-30" />
              <p class="text-sm font-bold">No classes assigned yet</p>
            </div>
          </div>
        </div>

        <div class="glass-card-static p-6">
          <div class="flex items-center justify-between mb-6">
            <h3 class="text-lg font-black text-slate-800 tracking-tight">Pending Tasks</h3>
          </div>
          <div class="space-y-3">
            <div v-for="task in pendingTasks" :key="task.task" class="flex items-center justify-between p-4 bg-slate-50/50 rounded-2xl border border-slate-100">
              <div class="flex items-center gap-4">
                <div class="w-8 h-8 rounded-xl flex items-center justify-center"
                  :class="task.priority === 'high' ? 'bg-rose-50 text-rose-600' : task.priority === 'medium' ? 'bg-amber-50 text-amber-600' : 'bg-emerald-50 text-emerald-600'"
                >
                  <AlertCircle class="w-4 h-4" />
                </div>
                <div>
                  <h4 class="text-sm font-bold text-slate-800">{{ task.task }}</h4>
                  <p class="text-[10px] text-slate-500">Due: {{ task.due }}</p>
                </div>
              </div>
              <span :class="[
                'text-[10px] font-black uppercase px-2 py-1 rounded-lg',
                task.priority === 'high' ? 'text-rose-600 bg-rose-100' : task.priority === 'medium' ? 'text-amber-600 bg-amber-100' : 'text-emerald-600 bg-emerald-100'
              ]">
                {{ task.priority }}
              </span>
            </div>
          </div>
        </div>
      </div>

      <div class="space-y-6">
        <div class="glass-card-static p-6">
          <h3 class="text-lg font-black text-slate-800 tracking-tight mb-6">Quick Actions</h3>
          <div class="space-y-3">
            <NuxtLink to="/attendance" class="flex items-center gap-4 p-4 bg-slate-50 rounded-xl hover:bg-indigo-50 transition-colors group">
              <div class="w-10 h-10 bg-emerald-100 rounded-xl flex items-center justify-center text-emerald-600 group-hover:bg-emerald-200">
                <CheckCircle2 class="w-5 h-5" />
              </div>
              <div>
                <h4 class="font-bold text-slate-800">Take Attendance</h4>
                <p class="text-xs text-slate-500">Mark today's attendance</p>
              </div>
            </NuxtLink>

            <NuxtLink to="/teacher/grades" class="flex items-center gap-4 p-4 bg-slate-50 rounded-xl hover:bg-indigo-50 transition-colors group">
              <div class="w-10 h-10 bg-indigo-100 rounded-xl flex items-center justify-center text-indigo-600 group-hover:bg-indigo-200">
                <TrendingUp class="w-5 h-5" />
              </div>
              <div>
                <h4 class="font-bold text-slate-800">Enter Grades</h4>
                <p class="text-xs text-slate-500">Grade assignments and exams</p>
              </div>
            </NuxtLink>

            <NuxtLink to="/teacher/messages" class="flex items-center gap-4 p-4 bg-slate-50 rounded-xl hover:bg-indigo-50 transition-colors group">
              <div class="w-10 h-10 bg-amber-100 rounded-xl flex items-center justify-center text-amber-600 group-hover:bg-amber-200">
                <MessageSquare class="w-5 h-5" />
              </div>
              <div>
                <h4 class="font-bold text-slate-800">Messages</h4>
                <p class="text-xs text-slate-500">Contact parents and students</p>
              </div>
            </NuxtLink>
          </div>
        </div>

        <div class="glass-card-static p-6">
          <h3 class="text-lg font-black text-slate-800 tracking-tight mb-6">Recent Attendance</h3>
          <div v-if="recentAttendance.length > 0" class="space-y-3">
            <div v-for="record in recentAttendance" :key="record.id" class="flex items-center justify-between p-3 bg-slate-50/50 rounded-xl">
              <div>
                <p class="text-xs font-bold text-slate-800">{{ record.studentId }}</p>
                <p class="text-[10px] text-slate-500">{{ record.date }}</p>
              </div>
              <span :class="[
                'text-[10px] font-black uppercase px-2 py-1 rounded-lg',
                record.status === 'present' ? 'text-emerald-600 bg-emerald-100' :
                record.status === 'absent' ? 'text-rose-600 bg-rose-100' :
                record.status === 'late' ? 'text-amber-600 bg-amber-100' :
                'text-blue-600 bg-blue-100'
              ]">
                {{ record.status }}
              </span>
            </div>
          </div>
          <div v-else class="p-6 text-center text-slate-400">
            <Calendar class="w-8 h-8 mx-auto mb-3 opacity-30" />
            <p class="text-xs font-bold">No attendance records yet</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
