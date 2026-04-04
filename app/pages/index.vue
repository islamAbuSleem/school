<script setup lang="ts">
import { TrendingUp, BookOpen, Calendar, Users, Award, AlertCircle, Clock, ChevronRight, Plus, MessageSquare, Wallet } from 'lucide-vue-next'

const { currentUser, isTeacher, isStudent, isAdmin, isParent, teacherProfile, studentProfile } = useAuth()
const { myChildren, activeChild } = useParent()
const { classes, students, attendanceRecords } = useData()
const { success, info } = useToast()

// For Teachers: Get their classes
const myClasses = computed(() => {
  if (!isTeacher.value || !teacherProfile.value) return []
  return classes.value.filter(c => teacherProfile.value?.classes.includes(c.id))
})

// For Students: Get their classes
const myStudentClasses = computed(() => {
  const profile = studentProfile.value
  if (!profile) return []
  return classes.value.filter(c => c.studentIds.includes(profile.id))
})

// For Admins: Stats
const totalStudents = computed(() => students.value.length)
const totalClasses = computed(() => classes.value.length)
const avgAttendance = computed(() => {
  if (students.value.length === 0) return 0
  return (students.value.reduce((sum, s) => sum + s.attendanceRate, 0) / students.value.length).toFixed(1)
})

const pendingTasks = [
  { task: 'Review Term 2 grades', due: 'Tomorrow', priority: 'high' as const },
  { task: 'Update attendance records', due: 'Today', priority: 'medium' as const },
  { task: 'Prepare staff meeting agenda', due: 'Friday', priority: 'low' as const },
]

const upcomingDeadlines = [
  { title: 'Physics Lab Report', due: 'Tomorrow', subject: 'Physics', priority: 'high' as const },
  { title: 'Math Problem Set #12', due: 'Jan 20', subject: 'Mathematics', priority: 'medium' as const },
  { title: 'History Essay Draft', due: 'Jan 25', subject: 'History', priority: 'low' as const },
]

const handleNewEnrollment = () => {
  info('New Enrollment', 'Enrollment form would open here. Connect to backend API.')
}

const handleViewStudents = () => {
  info('Students', `Currently ${students.value.length} students enrolled`)
}

const handleViewClasses = () => {
  info('Classes', `${classes.value.length} active classes this term`)
}
</script>

<template>
  <div v-if="currentUser" class="max-w-[1600px] mx-auto pb-16 px-4 md:px-10">
    
    <!-- ADMIN DASHBOARD -->
    <template v-if="isAdmin">
      <div class="flex flex-col lg:flex-row items-start lg:items-center justify-between mb-10 gap-4">
        <div>
          <p class="text-xs font-semibold text-accent uppercase tracking-wider mb-2">Admin Console</p>
          <h2 class="page-title">System Overview</h2>
          <p class="text-slate-500 mt-2 font-medium leading-relaxed max-w-2xl">
            Here's the curated overview of Prestige Academy's performance and operations for today.
          </p>
        </div>
        <button @click="handleNewEnrollment" class="btn-primary flex items-center self-start lg:self-auto">
          <Plus class="w-4 h-4 mr-2" />
          New Enrollment
        </button>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
        <NuxtLink to="/students" class="glass-card-static p-6 border-l-4 border-l-indigo-500 cursor-pointer hover:shadow-lg hover:scale-[1.02] transition-all">
          <div class="flex items-center justify-between mb-4">
            <div class="w-10 h-10 bg-indigo-50 rounded-xl flex items-center justify-center text-indigo-600">
              <Users class="w-5 h-5" />
            </div>
          </div>
          <p class="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Total Students</p>
          <p class="text-3xl font-black text-slate-800">{{ totalStudents }}</p>
          <p class="text-xs text-emerald-600 mt-2 font-bold">+12 this month</p>
        </NuxtLink>

        <NuxtLink to="/classes" class="glass-card-static p-6 border-l-4 border-l-emerald-500 cursor-pointer hover:shadow-lg hover:scale-[1.02] transition-all">
          <div class="flex items-center justify-between mb-4">
            <div class="w-10 h-10 bg-emerald-50 rounded-xl flex items-center justify-center text-emerald-600">
              <BookOpen class="w-5 h-5" />
            </div>
          </div>
          <p class="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Active Classes</p>
          <p class="text-3xl font-black text-slate-800">{{ totalClasses }}</p>
          <p class="text-xs text-slate-500 mt-2">Across all grades</p>
        </NuxtLink>

        <NuxtLink to="/attendance" class="glass-card-static p-6 border-l-4 border-l-amber-500 cursor-pointer hover:shadow-lg hover:scale-[1.02] transition-all">
          <div class="flex items-center justify-between mb-4">
            <div class="w-10 h-10 bg-amber-50 rounded-xl flex items-center justify-center text-amber-600">
              <Calendar class="w-5 h-5" />
            </div>
          </div>
          <p class="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Avg Attendance</p>
          <p class="text-3xl font-black text-slate-800">{{ avgAttendance }}%</p>
          <p class="text-xs text-emerald-600 mt-2 font-bold">+1.2% vs last term</p>
        </NuxtLink>

        <div @click="info('Alerts', '3 alerts require your attention')" class="glass-card-static p-6 border-l-4 border-l-rose-500 cursor-pointer hover:shadow-lg hover:scale-[1.02] transition-all">
          <div class="flex items-center justify-between mb-4">
            <div class="w-10 h-10 bg-rose-50 rounded-xl flex items-center justify-center text-rose-600">
              <AlertCircle class="w-5 h-5" />
            </div>
          </div>
          <p class="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Alerts</p>
          <p class="text-3xl font-black text-slate-800">3</p>
          <p class="text-xs text-rose-600 mt-2 font-bold">Require attention</p>
        </div>
      </div>

      <div class="grid grid-cols-1 xl:grid-cols-[1fr,400px] gap-8">
        <div class="space-y-8">
          <DashboardSummary />
          <DashboardFinancialOverview />
          <DashboardAcademicPulse />
        </div>
        <div class="space-y-8">
          <DashboardAdminAlerts />
          <DashboardQuickConnect />
        </div>
      </div>
    </template>

    <!-- TEACHER DASHBOARD -->
    <template v-else-if="isTeacher">
      <div class="mb-10">
        <p class="text-xs font-semibold text-accent uppercase tracking-wider mb-2">Teacher Console</p>
        <h2 class="page-title">Welcome, {{ teacherProfile?.name }}</h2>
        <p class="text-slate-500 mt-2">Here's your teaching overview for today</p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
        <div class="glass-card-static p-6 border-l-4 border-l-indigo-500">
          <div class="flex items-center justify-between mb-4">
            <div class="w-10 h-10 bg-indigo-50 rounded-xl flex items-center justify-center text-indigo-600">
              <BookOpen class="w-5 h-5" />
            </div>
          </div>
          <p class="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">My Classes</p>
          <p class="text-3xl font-black text-slate-800">{{ myClasses.length }}</p>
        </div>
        <div class="glass-card-static p-6 border-l-4 border-l-emerald-500">
          <div class="flex items-center justify-between mb-4">
            <div class="w-10 h-10 bg-emerald-50 rounded-xl flex items-center justify-center text-emerald-600">
              <Users class="w-5 h-5" />
            </div>
          </div>
          <p class="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">My Students</p>
          <p class="text-3xl font-black text-slate-800">{{ myClasses.reduce((sum, c) => sum + c.studentIds.length, 0) }}</p>
        </div>
        <div class="glass-card-static p-6 border-l-4 border-l-amber-500">
          <div class="flex items-center justify-between mb-4">
            <div class="w-10 h-10 bg-amber-50 rounded-xl flex items-center justify-center text-amber-600">
              <Clock class="w-5 h-5" />
            </div>
          </div>
          <p class="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Pending Tasks</p>
          <p class="text-3xl font-black text-slate-800">{{ pendingTasks.length }}</p>
        </div>
        <div class="glass-card-static p-6 border-l-4 border-l-rose-500">
          <div class="flex items-center justify-between mb-4">
            <div class="w-10 h-10 bg-rose-50 rounded-xl flex items-center justify-center text-rose-600">
              <AlertCircle class="w-5 h-5" />
            </div>
          </div>
          <p class="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Alerts</p>
          <p class="text-3xl font-black text-slate-800">2</p>
        </div>
      </div>

      <div class="grid grid-cols-1 xl:grid-cols-[1fr,400px] gap-8">
        <div class="space-y-8">
          <div class="glass-card-static p-6">
            <div class="flex items-center justify-between mb-6">
              <h3 class="text-lg font-black text-slate-800 tracking-tight">My Classes</h3>
              <NuxtLink to="/teacher/classes" class="text-xs font-bold text-accent uppercase tracking-widest">View All</NuxtLink>
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
                <div class="text-right">
                  <p class="text-xs font-bold text-slate-600">{{ cls.studentIds.length }} Students</p>
                </div>
              </div>
            </div>
          </div>
          <DashboardAcademicPulse />
        </div>
        <div class="space-y-8">
          <div class="glass-card-static p-6">
            <h3 class="text-lg font-black text-slate-800 tracking-tight mb-6">Pending Tasks</h3>
            <div class="space-y-3">
              <div v-for="task in pendingTasks" :key="task.task" class="flex items-center justify-between p-4 bg-slate-50/50 rounded-2xl border border-slate-100">
                <div>
                  <h4 class="text-sm font-bold text-slate-800">{{ task.task }}</h4>
                  <p class="text-[10px] text-slate-500">Due: {{ task.due }}</p>
                </div>
                <span :class="['text-[10px] font-black uppercase px-2 py-1 rounded-lg', task.priority === 'high' ? 'text-rose-600 bg-rose-100' : task.priority === 'medium' ? 'text-amber-600 bg-amber-100' : 'text-emerald-600 bg-emerald-100']">
                  {{ task.priority }}
                </span>
              </div>
            </div>
          </div>
          <DashboardAdminAlerts />
        </div>
      </div>
    </template>

    <!-- STUDENT DASHBOARD -->
    <template v-else-if="isStudent">
      <div class="mb-10">
        <p class="text-xs font-semibold text-accent uppercase tracking-wider mb-2">Student Portal</p>
        <h2 class="page-title">Welcome, {{ studentProfile?.name }}</h2>
        <p class="text-slate-500 mt-2">Your personalized learning space</p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
        <div class="glass-card-static p-6 border-l-4 border-l-indigo-500">
          <div class="flex items-center justify-between mb-4">
            <div class="w-10 h-10 bg-indigo-50 rounded-xl flex items-center justify-center text-indigo-600">
              <TrendingUp class="w-5 h-5" />
            </div>
          </div>
          <p class="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Current GPA</p>
          <p class="text-3xl font-black text-slate-800">{{ (studentProfile?.performanceScore || 0 / 25).toFixed(2) }}</p>
        </div>
        <div class="glass-card-static p-6 border-l-4 border-l-emerald-500">
          <div class="flex items-center justify-between mb-4">
            <div class="w-10 h-10 bg-emerald-50 rounded-xl flex items-center justify-center text-emerald-600">
              <Calendar class="w-5 h-5" />
            </div>
          </div>
          <p class="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Attendance</p>
          <p class="text-3xl font-black text-slate-800">{{ studentProfile?.attendanceRate }}%</p>
        </div>
        <div class="glass-card-static p-6 border-l-4 border-l-amber-500">
          <div class="flex items-center justify-between mb-4">
            <div class="w-10 h-10 bg-amber-50 rounded-xl flex items-center justify-center text-amber-600">
              <BookOpen class="w-5 h-5" />
            </div>
          </div>
          <p class="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">My Courses</p>
          <p class="text-3xl font-black text-slate-800">{{ myStudentClasses.length }}</p>
        </div>
        <div class="glass-card-static p-6 border-l-4 border-l-rose-500">
          <div class="flex items-center justify-between mb-4">
            <div class="w-10 h-10 bg-rose-50 rounded-xl flex items-center justify-center text-rose-600">
              <Clock class="w-5 h-5" />
            </div>
          </div>
          <p class="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Pending Tasks</p>
          <p class="text-3xl font-black text-slate-800">{{ upcomingDeadlines.length }}</p>
        </div>
      </div>

      <div class="grid grid-cols-1 xl:grid-cols-[1fr,400px] gap-8">
        <div class="space-y-8">
          <div class="glass-card-static p-6">
            <div class="flex items-center justify-between mb-6">
              <h3 class="text-lg font-black text-slate-800 tracking-tight">My Courses</h3>
              <NuxtLink to="/student/courses" class="text-xs font-bold text-accent uppercase tracking-widest">View All</NuxtLink>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div v-for="cls in myStudentClasses" :key="cls.id" class="p-5 bg-slate-50/50 rounded-2xl border border-slate-100 hover:border-indigo-200 transition-all cursor-pointer">
                <div class="flex items-center gap-3 mb-3">
                  <div class="w-10 h-10 bg-indigo-50 rounded-xl flex items-center justify-center text-indigo-600">
                    <BookOpen class="w-5 h-5" />
                  </div>
                  <div>
                    <h4 class="font-bold text-slate-800">{{ cls.name }}</h4>
                    <p class="text-xs text-slate-500">{{ cls.subject }}</p>
                  </div>
                </div>
                <p class="text-xs text-slate-500">{{ cls.grade }} • {{ cls.room }}</p>
              </div>
            </div>
          </div>
          <div class="glass-card-static p-6">
            <h3 class="text-lg font-black text-slate-800 tracking-tight mb-6">Upcoming Deadlines</h3>
            <div class="space-y-3">
              <div v-for="task in upcomingDeadlines" :key="task.title" class="flex items-center justify-between p-4 bg-slate-50/50 rounded-2xl border border-slate-100">
                <div>
                  <h4 class="text-sm font-bold text-slate-800">{{ task.title }}</h4>
                  <p class="text-xs text-slate-500">{{ task.subject }}</p>
                </div>
                <div class="text-right">
                  <p class="text-xs font-bold text-slate-600">{{ task.due }}</p>
                  <span :class="['text-[10px] font-black uppercase px-2 py-1 rounded-lg mt-1 inline-block', task.priority === 'high' ? 'text-rose-600 bg-rose-100' : task.priority === 'medium' ? 'text-amber-600 bg-amber-100' : 'text-emerald-600 bg-emerald-100']">
                    {{ task.priority }}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="space-y-8">
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
                <Award class="w-4 h-4 text-amber-300" />
                <span class="text-sm font-medium">Track School Bus</span>
              </NuxtLink>
            </div>
          </div>
          <DashboardAdminAlerts />
        </div>
      </div>
    </template>

    <!-- PARENT DASHBOARD -->
    <template v-else-if="isParent">
      <div class="mb-10">
        <p class="text-xs font-semibold text-accent uppercase tracking-wider mb-2">Parent Portal</p>
        <h2 class="page-title">Family Dashboard</h2>
        <p class="text-slate-500 mt-2">Tracking your children's academic journey</p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
        <div class="glass-card-static p-6 border-l-4 border-l-indigo-500">
          <div class="flex items-center justify-between mb-4">
            <div class="w-10 h-10 bg-indigo-50 rounded-xl flex items-center justify-center text-indigo-600">
              <TrendingUp class="w-5 h-5" />
            </div>
          </div>
          <p class="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Average GPA</p>
          <p class="text-3xl font-black text-slate-800">3.92</p>
        </div>
        <div class="glass-card-static p-6 border-l-4 border-l-emerald-500">
          <div class="flex items-center justify-between mb-4">
            <div class="w-10 h-10 bg-emerald-50 rounded-xl flex items-center justify-center text-emerald-600">
              <Calendar class="w-5 h-5" />
            </div>
          </div>
          <p class="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Attendance</p>
          <p class="text-3xl font-black text-slate-800">97.8%</p>
        </div>
        <div class="glass-card-static p-6 border-l-4 border-l-amber-500">
          <div class="flex items-center justify-between mb-4">
            <div class="w-10 h-10 bg-amber-50 rounded-xl flex items-center justify-center text-amber-600">
              <Users class="w-5 h-5" />
            </div>
          </div>
          <p class="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">My Children</p>
          <p class="text-3xl font-black text-slate-800">{{ myChildren.length }}</p>
        </div>
        <div class="glass-card-static p-6 border-l-4 border-l-rose-500">
          <div class="flex items-center justify-between mb-4">
            <div class="w-10 h-10 bg-rose-50 rounded-xl flex items-center justify-center text-rose-600">
              <AlertCircle class="w-5 h-5" />
            </div>
          </div>
          <p class="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Alerts</p>
          <p class="text-3xl font-black text-slate-800">1</p>
        </div>
      </div>

      <div class="grid grid-cols-1 xl:grid-cols-[1fr,400px] gap-8">
        <div class="space-y-8">
          <div class="glass-card-static p-6">
            <div class="flex items-center justify-between mb-6">
              <h3 class="text-lg font-black text-slate-800 tracking-tight">Children Overview</h3>
              <NuxtLink to="/parent/children" class="text-xs font-bold text-accent uppercase tracking-widest">View All</NuxtLink>
            </div>
            <div class="space-y-4">
              <div v-for="child in myChildren" :key="child.id" class="flex items-center justify-between p-5 bg-slate-50/50 rounded-2xl border border-slate-100 hover:border-indigo-200 transition-all cursor-pointer">
                <div class="flex items-center gap-4">
                  <img :src="`https://ui-avatars.com/api/?name=${child.initials}&background=6366F1&color=fff`" class="w-14 h-14 rounded-xl object-cover" />
                  <div>
                    <h4 class="font-bold text-slate-800">{{ child.name }}</h4>
                    <p class="text-xs text-slate-500">{{ child.grade }}</p>
                  </div>
                </div>
                <div class="flex items-center gap-6">
                  <div class="text-center">
                    <p class="text-xs text-slate-400 uppercase tracking-widest mb-1">GPA</p>
                    <p class="font-black text-indigo-600">{{ (child.performanceScore / 25).toFixed(2) }}</p>
                  </div>
                  <div class="text-center">
                    <p class="text-xs text-slate-400 uppercase tracking-widest mb-1">Attendance</p>
                    <p class="font-black text-emerald-600">{{ child.attendanceRate }}%</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <ParentAttendanceOverview />
            <ParentBehaviorOverview />
          </div>
        </div>
        <div class="space-y-8">
          <div class="glass-card-static p-6">
            <h3 class="text-lg font-black text-slate-800 tracking-tight mb-6">Quick Actions</h3>
            <div class="space-y-3">
              <NuxtLink to="/bus-tracking" class="flex items-center gap-4 p-4 bg-slate-50 rounded-xl hover:bg-indigo-50 transition-colors">
                <div class="w-10 h-10 bg-indigo-100 rounded-xl flex items-center justify-center text-indigo-600">
                  <BookOpen class="w-5 h-5" />
                </div>
                <div>
                  <h4 class="font-bold text-slate-800">Live Bus Tracking</h4>
                  <p class="text-xs text-slate-500">Track school bus</p>
                </div>
              </NuxtLink>
              <NuxtLink to="/parent/fees" class="flex items-center gap-4 p-4 bg-slate-50 rounded-xl hover:bg-indigo-50 transition-colors">
                <div class="w-10 h-10 bg-emerald-100 rounded-xl flex items-center justify-center text-emerald-600">
                  <Wallet class="w-5 h-5" />
                </div>
                <div>
                  <h4 class="font-bold text-slate-800">View Fees</h4>
                  <p class="text-xs text-slate-500">Payment history</p>
                </div>
              </NuxtLink>
              <NuxtLink to="/parent/messages" class="flex items-center gap-4 p-4 bg-slate-50 rounded-xl hover:bg-indigo-50 transition-colors">
                <div class="w-10 h-10 bg-amber-100 rounded-xl flex items-center justify-center text-amber-600">
                  <MessageSquare class="w-5 h-5" />
                </div>
                <div>
                  <h4 class="font-bold text-slate-800">Messages</h4>
                  <p class="text-xs text-slate-500">Contact teachers</p>
                </div>
              </NuxtLink>
            </div>
          </div>
          <div class="glass-card-static p-6 bg-primary text-white">
            <h3 class="text-lg font-black tracking-tight mb-4">School Announcements</h3>
            <div class="space-y-4">
              <div class="p-4 bg-white/5 rounded-xl border border-white/10">
                <p class="text-xs font-bold text-white/60 mb-1">Today</p>
                <p class="text-sm font-medium">Parent-Teacher Conference scheduled for next Friday</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </template>

    <!-- NO ROLE -->
    <template v-else>
      <div class="glass-card-static p-20 flex flex-col items-center justify-center text-center">
        <AlertCircle class="w-12 h-12 text-slate-300 mb-4" />
        <h3 class="text-xl font-black text-slate-800 tracking-tight">No Role Assigned</h3>
        <p class="text-sm text-slate-500 mt-2">Please contact the administrator to assign your role.</p>
        <NuxtLink to="/login" class="btn-primary mt-6">Back to Login</NuxtLink>
      </div>
    </template>
  </div>
</template>
