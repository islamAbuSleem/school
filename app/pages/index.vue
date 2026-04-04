<script setup lang="ts">
import { 
  Users, 
  BookOpen, 
  Calendar, 
  TrendingUp, 
  AlertCircle, 
  Clock,
  ChevronRight,
  Plus
} from 'lucide-vue-next'

const { currentUser, isTeacher, isStudent, isAdmin, isParent, teacherProfile, studentProfile } = useAuth()
const { activeTab, setActiveTab } = useDashboard()
const { t } = useLocale()
const { classes } = useData()

// For Teachers: Get their classes
const myClasses = computed(() => {
  if (!isTeacher.value || !teacherProfile.value) return []
  return classes.value.filter(c => teacherProfile.value?.classes.includes(c.id))
})
</script>

<template>
  <div v-if="currentUser" class="max-w-[1600px] mx-auto pb-16">
    
    <!-- ADMIN DASHBOARD -->
    <template v-if="isAdmin">
      <div class="flex flex-col lg:flex-row items-start lg:items-center justify-between mb-10 gap-4">
        <div>
          <h2 class="text-3xl font-black text-slate-800 tracking-tight">System Overview</h2>
          <p class="text-slate-500 mt-2 font-medium leading-relaxed max-w-2xl">
            Welcome back, Administrator. Here's a pulse check of the school's performance and operations.
          </p>
        </div>
        
        <div class="flex items-center gap-3">
          <button class="flex items-center gap-2 px-5 py-2.5 bg-white text-slate-600 font-bold text-xs rounded-2xl border border-slate-200 shadow-sm hover:bg-slate-50 transition-all">
            <Calendar class="w-4 h-4 text-indigo-600" />
            Academic Year 2024/25
          </button>
          <button class="btn-primary flex items-center gap-2 text-xs px-6 py-2.5 shadow-lg shadow-indigo-200">
            <Plus class="w-4 h-4" />
            New Enrollment
          </button>
        </div>
      </div>

      <DashboardSummary />

      <div class="grid grid-cols-1 xl:grid-cols-[1fr,400px] gap-8 mt-10">
        <div class="space-y-8">
          <DashboardFinancialOverview />
          <DashboardAcademicPulse />
        </div>
        
        <div class="space-y-8">
          <DashboardAdminAlerts />
          <DashboardRecentLog />
          <DashboardQuickConnect />
        </div>
      </div>
    </template>

    <!-- TEACHER DASHBOARD -->
    <template v-else-if="isTeacher">
      <div class="mb-10">
        <h2 class="text-3xl font-black text-slate-800 tracking-tight">Teacher Console</h2>
        <p class="text-slate-500 mt-2 font-medium leading-relaxed">
          Ready for your next lesson, {{ currentUser.name }}? You have {{ myClasses.length }} classes today.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
        <div class="glass-card-static p-6 flex items-center gap-4 group hover:border-indigo-500 transition-colors cursor-pointer">
          <div class="w-14 h-14 bg-indigo-50 rounded-2xl flex items-center justify-center text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white transition-all">
            <BookOpen class="w-7 h-7" />
          </div>
          <div>
            <p class="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Active Classes</p>
            <p class="text-2xl font-black text-slate-800">{{ myClasses.length }}</p>
          </div>
        </div>
        <div class="glass-card-static p-6 flex items-center gap-4 group hover:border-emerald-500 transition-colors cursor-pointer">
          <div class="w-14 h-14 bg-emerald-50 rounded-2xl flex items-center justify-center text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white transition-all">
            <Users class="w-7 h-7" />
          </div>
          <div>
            <p class="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Total Students</p>
            <p class="text-2xl font-black text-slate-800">142</p>
          </div>
        </div>
        <div class="glass-card-static p-6 flex items-center gap-4 group hover:border-amber-500 transition-colors cursor-pointer">
          <div class="w-14 h-14 bg-amber-50 rounded-2xl flex items-center justify-center text-amber-600 group-hover:bg-amber-600 group-hover:text-white transition-all">
            <Clock class="w-7 h-7" />
          </div>
          <div>
            <p class="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Pending Roll</p>
            <p class="text-2xl font-black text-slate-800">1</p>
          </div>
        </div>
        <div class="glass-card-static p-6 flex items-center gap-4 group hover:border-rose-500 transition-colors cursor-pointer">
          <div class="w-14 h-14 bg-rose-50 rounded-2xl flex items-center justify-center text-rose-600 group-hover:bg-rose-600 group-hover:text-white transition-all">
            <AlertCircle class="w-7 h-7" />
          </div>
          <div>
            <p class="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Unread Alerts</p>
            <p class="text-2xl font-black text-slate-800">4</p>
          </div>
        </div>
      </div>

      <div class="grid grid-cols-1 xl:grid-cols-3 gap-8">
        <div class="xl:col-span-2 space-y-8">
          <div class="glass-card-static p-8">
            <div class="flex items-center justify-between mb-8">
              <h3 class="text-xl font-black text-slate-800 tracking-tight">Today's Teaching Schedule</h3>
              <button class="text-indigo-600 text-xs font-bold uppercase tracking-widest hover:underline flex items-center gap-1">
                Full Schedule <ChevronRight class="w-3 h-3" />
              </button>
            </div>
            <div class="space-y-4">
              <div v-for="cls in myClasses" :key="cls.id" class="flex items-center gap-6 p-4 rounded-2xl border border-slate-50 bg-slate-50/50 hover:bg-white hover:border-indigo-100 hover:shadow-xl hover:shadow-indigo-500/5 transition-all group">
                <div class="w-20 text-center border-r border-slate-200 pr-6">
                  <p class="text-xs font-bold text-indigo-600">09:00</p>
                  <p class="text-[10px] font-medium text-slate-400">AM</p>
                </div>
                <div class="flex-1">
                  <h4 class="font-bold text-slate-800">{{ cls.name }}</h4>
                  <p class="text-[10px] font-medium text-slate-400 uppercase tracking-wider">{{ cls.grade }} • Room {{ cls.room }}</p>
                </div>
                <div class="flex items-center gap-4">
                  <div class="flex -space-x-2">
                    <img v-for="i in 3" :key="i" :src="`https://ui-avatars.com/api/?name=S${i}&background=random`" class="w-8 h-8 rounded-full border-2 border-white" />
                    <div class="w-8 h-8 rounded-full border-2 border-white bg-slate-100 flex items-center justify-center text-[10px] font-bold text-slate-500">+22</div>
                  </div>
                  <NuxtLink to="/attendance" class="px-4 py-2 bg-indigo-600 text-white text-[10px] font-black uppercase tracking-widest rounded-xl shadow-lg shadow-indigo-200 transition-transform group-hover:scale-105">
                    Start Roll
                  </NuxtLink>
                </div>
              </div>
            </div>
          </div>
          <DashboardAcademicPulse />
        </div>
        <div class="space-y-8">
          <DashboardAdminAlerts />
          <DashboardQuickConnect />
        </div>
      </div>
    </template>

    <!-- PARENT/STUDENT DASHBOARD -->
    <template v-else-if="isParent || isStudent">
      <div class="flex flex-col lg:flex-row items-start lg:items-center justify-between mb-8 gap-4">
        <div>
          <h2 class="text-3xl font-black text-slate-800 tracking-tight">{{ isParent ? 'Family Dashboard' : 'Academic Hub' }}</h2>
          <p class="text-slate-500 mt-2 font-medium leading-relaxed max-w-2xl">
            {{ isParent ? "Tracking Julian's academic journey and school interactions." : "Your personalized learning space. Stay on top of your goals." }}
          </p>
        </div>
        
        <nav class="flex items-center bg-white/60 backdrop-blur-md p-1.5 rounded-2xl border border-white/50 shadow-sm">
          <button v-for="tab in ['Overview', 'Curriculum', 'Reports']" :key="tab" @click="setActiveTab(tab)"
            class="px-6 py-2.5 text-xs font-bold rounded-xl transition-all uppercase tracking-widest"
            :class="activeTab === tab ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-200' : 'text-slate-400 hover:text-slate-600'">
            {{ tab }}
          </button>
        </nav>
      </div>

      <!-- Tab Content (Legacy implementation preserved for Parent/Student) -->
      <template v-if="activeTab === 'Overview'">
        <DashboardSummary />
        <div class="grid grid-cols-1 xl:grid-cols-[1fr,400px] gap-8 mt-10">
          <div class="space-y-8">
            <DashboardFinancialOverview v-if="isParent" />
            <DashboardAcademicPulse />
          </div>
          <div class="space-y-8">
            <DashboardAdminAlerts />
            <DashboardRecentLog />
            <DashboardQuickConnect />
          </div>
        </div>
      </template>

      <template v-else-if="activeTab === 'Curriculum'">
        <div class="grid grid-cols-1 lg:grid-cols-[1fr,400px] gap-8">
          <CurriculumMain />
          <CurriculumSidebar />
        </div>
        <CurriculumExtended />
      </template>

      <template v-else-if="activeTab === 'Reports'">
        <div class="grid grid-cols-1 lg:grid-cols-[1fr,1.5fr] gap-8 mb-10 h-full">
          <ReportsBuilder />
          <ReportsTrends />
        </div>
        <ReportsDownloadCenter />
      </template>
    </template>

  </div>
</template>
