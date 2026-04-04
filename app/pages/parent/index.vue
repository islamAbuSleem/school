<script setup lang="ts">
import { Users, TrendingUp, Calendar, Bus, FileBarChart } from 'lucide-vue-next'

const { isParent } = useAuth()
const { myChildren, activeChild, setActiveChild } = useParent()

const activeTab = ref('Overview')
const tabs = ['Overview', 'Children', 'Messages', 'Settings']

const childrenStats = computed(() => {
  return myChildren.value.map(child => ({
    ...child,
    gpa: 3.85 + Math.random() * 0.2,
    attendance: 95 + Math.random() * 5,
    behaviorPoints: Math.floor(100 + Math.random() * 80)
  }))
})
</script>

<template>
  <div class="max-w-[1600px] mx-auto pb-16 px-4 md:px-10">
    <div class="flex flex-col lg:flex-row lg:items-center justify-between mb-8 gap-4">
      <div>
        <p class="text-xs font-semibold text-accent uppercase tracking-wider mb-2">Parent Portal</p>
        <h2 class="page-title">Family Dashboard</h2>
      </div>
    </div>

    <template v-if="activeTab === 'Overview'">
      <div class="grid grid-cols-1 lg:grid-cols-[1fr,400px] gap-8">
        <div class="space-y-8">
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div class="glass-card-static p-6 border-l-4 border-l-indigo-500">
              <div class="flex items-center justify-between mb-4">
                <div class="w-10 h-10 bg-indigo-50 rounded-xl flex items-center justify-center text-indigo-600">
                  <TrendingUp class="w-5 h-5" />
                </div>
              </div>
              <p class="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Average GPA</p>
              <p class="text-3xl font-black text-slate-800">3.92</p>
              <p class="text-xs text-emerald-600 mt-2 font-bold">+0.12 this term</p>
            </div>
            
            <div class="glass-card-static p-6 border-l-4 border-l-emerald-500">
              <div class="flex items-center justify-between mb-4">
                <div class="w-10 h-10 bg-emerald-50 rounded-xl flex items-center justify-center text-emerald-600">
                  <Calendar class="w-5 h-5" />
                </div>
              </div>
              <p class="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Attendance</p>
              <p class="text-3xl font-black text-slate-800">97.8%</p>
              <p class="text-xs text-emerald-600 mt-2 font-bold">Excellent</p>
            </div>
            
            <div class="glass-card-static p-6 border-l-4 border-l-amber-500">
              <div class="flex items-center justify-between mb-4">
                <div class="w-10 h-10 bg-amber-50 rounded-xl flex items-center justify-center text-amber-600">
                  <Users class="w-5 h-5" />
                </div>
              </div>
              <p class="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Behavior Points</p>
              <p class="text-3xl font-black text-slate-800">145</p>
              <p class="text-xs text-emerald-600 mt-2 font-bold">Top 5%</p>
            </div>
          </div>

          <div class="glass-card-static p-6">
            <h3 class="text-lg font-black text-slate-800 tracking-tight mb-6">Children Overview</h3>
            <div class="space-y-4">
              <div v-for="child in childrenStats" :key="child.id" 
                class="flex items-center justify-between p-5 bg-slate-50/50 rounded-2xl border border-slate-100 hover:border-indigo-200 hover:shadow-lg transition-all cursor-pointer"
              >
                <div class="flex items-center gap-4">
                  <img :src="`https://ui-avatars.com/api/?name=${child.initials}&background=6366F1&color=fff`" class="w-14 h-14 rounded-xl object-cover" />
                  <div>
                    <h4 class="font-bold text-slate-800">{{ child.name }}</h4>
                    <p class="text-xs text-slate-500">{{ child.grade }}</p>
                  </div>
                </div>
                <div class="flex items-center gap-8">
                  <div class="text-center">
                    <p class="text-xs text-slate-400 uppercase tracking-widest mb-1">GPA</p>
                    <p class="font-black text-indigo-600">{{ child.gpa.toFixed(2) }}</p>
                  </div>
                  <div class="text-center">
                    <p class="text-xs text-slate-400 uppercase tracking-widest mb-1">Attendance</p>
                    <p class="font-black text-emerald-600">{{ child.attendance.toFixed(1) }}%</p>
                  </div>
                  <div class="text-center">
                    <p class="text-xs text-slate-400 uppercase tracking-widest mb-1">Points</p>
                    <p class="font-black text-amber-600">{{ child.behaviorPoints }}</p>
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

        <div class="space-y-6">
          <div class="glass-card-static p-6">
            <h3 class="text-lg font-black text-slate-800 tracking-tight mb-6">Quick Actions</h3>
            <div class="space-y-3">
              <NuxtLink to="/bus-tracking" class="flex items-center gap-4 p-4 bg-slate-50 rounded-xl hover:bg-indigo-50 transition-colors group">
                <div class="w-10 h-10 bg-indigo-100 rounded-xl flex items-center justify-center text-indigo-600 group-hover:bg-indigo-200">
                  <Bus class="w-5 h-5" />
                </div>
                <div>
                  <h4 class="font-bold text-slate-800">Live Bus Tracking</h4>
                  <p class="text-xs text-slate-500">Track school bus location</p>
                </div>
              </NuxtLink>
              
              <NuxtLink to="/fees" class="flex items-center gap-4 p-4 bg-slate-50 rounded-xl hover:bg-indigo-50 transition-colors group">
                <div class="w-10 h-10 bg-emerald-100 rounded-xl flex items-center justify-center text-emerald-600 group-hover:bg-emerald-200">
                  <FileBarChart class="w-5 h-5" />
                </div>
                <div>
                  <h4 class="font-bold text-slate-800">View Fees</h4>
                  <p class="text-xs text-slate-500">Payment history & status</p>
                </div>
              </NuxtLink>
              
              <NuxtLink to="/progress" class="flex items-center gap-4 p-4 bg-slate-50 rounded-xl hover:bg-indigo-50 transition-colors group">
                <div class="w-10 h-10 bg-amber-100 rounded-xl flex items-center justify-center text-amber-600 group-hover:bg-amber-200">
                  <TrendingUp class="w-5 h-5" />
                </div>
                <div>
                  <h4 class="font-bold text-slate-800">Academic Progress</h4>
                  <p class="text-xs text-slate-500">Grades & performance</p>
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
              <div class="p-4 bg-white/5 rounded-xl border border-white/10">
                <p class="text-xs font-bold text-white/60 mb-1">Jan 20, 2024</p>
                <p class="text-sm font-medium">Term 2 progress reports available</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </template>

    <template v-else-if="activeTab === 'Children'">
      <div class="space-y-6">
        <div v-for="child in childrenStats" :key="child.id" class="glass-card-static p-8">
          <div class="flex items-center gap-6 mb-8">
            <img :src="`https://ui-avatars.com/api/?name=${child.initials}&background=6366F1&color=fff`" class="w-20 h-20 rounded-2xl object-cover" />
            <div>
              <h3 class="text-2xl font-black text-slate-800">{{ child.name }}</h3>
              <p class="text-sm text-slate-500">{{ child.grade }}</p>
            </div>
          </div>
          
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div class="p-6 bg-slate-50 rounded-2xl">
              <p class="text-xs font-black text-slate-400 uppercase tracking-widest mb-2">GPA</p>
              <p class="text-4xl font-black text-indigo-600">{{ child.gpa.toFixed(2) }}</p>
            </div>
            <div class="p-6 bg-slate-50 rounded-2xl">
              <p class="text-xs font-black text-slate-400 uppercase tracking-widest mb-2">Attendance</p>
              <p class="text-4xl font-black text-emerald-600">{{ child.attendance.toFixed(1) }}%</p>
            </div>
            <div class="p-6 bg-slate-50 rounded-2xl">
              <p class="text-xs font-black text-slate-400 uppercase tracking-widest mb-2">Behavior Points</p>
              <p class="text-4xl font-black text-amber-600">{{ child.behaviorPoints }}</p>
            </div>
          </div>
        </div>
      </div>
    </template>

    <template v-else-if="activeTab === 'Messages'">
      <div class="glass-card-static p-12 text-center">
        <div class="w-16 h-16 bg-slate-50 rounded-full flex items-center justify-center mx-auto mb-4">
          <Users class="w-8 h-8 text-slate-300" />
        </div>
        <h3 class="text-xl font-black text-slate-800 tracking-tight">Messages</h3>
        <p class="text-sm text-slate-500 mt-2">Communicate with teachers and staff</p>
        <button class="btn-primary mt-6">Start Conversation</button>
      </div>
    </template>

    <template v-else-if="activeTab === 'Settings'">
      <div class="glass-card-static p-12 text-center">
        <div class="w-16 h-16 bg-slate-50 rounded-full flex items-center justify-center mx-auto mb-4">
          <TrendingUp class="w-8 h-8 text-slate-300" />
        </div>
        <h3 class="text-xl font-black text-slate-800 tracking-tight">Settings</h3>
        <p class="text-sm text-slate-500 mt-2">Manage notification preferences and account</p>
      </div>
    </template>
  </div>
</template>
