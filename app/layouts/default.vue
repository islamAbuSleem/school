<script setup lang="ts">
import { 
  Users, 
  GraduationCap, 
  BookOpen, 
  CalendarCheck, 
  Wallet, 
  FileText, 
  Settings, 
  LogOut,
  Search,
  Bell,
  HelpCircle,
  Settings as SettingsIcon,
  CircleHelp,
  LayoutGrid,
  TrendingUp,
  Bus,
  FileBarChart,
  ClipboardList,
  Sparkles,
  PieChart
} from 'lucide-vue-next'

const menuItems = [
  { name: 'DASHBOARD', icon: LayoutGrid, to: '/' },
  { name: 'STUDENTS', icon: GraduationCap, to: '/students' },
  { name: 'CLASSES', icon: BookOpen, to: '/classes' },
  { name: 'ATTENDANCE', icon: CalendarCheck, to: '/attendance' },
  { name: 'PROGRESS', icon: TrendingUp, to: '/progress' },
  { name: 'CURRICULUM', icon: ClipboardList, to: '/curriculum' },
  { name: 'REPORTS', icon: FileBarChart, to: '/reports' },
  { name: 'PREDICTION', icon: Sparkles, to: '/prediction' },
  { name: 'BUS TRACKING', icon: Bus, to: '/bus-tracking' },
  { name: 'FEES', icon: Wallet, to: '/fees' },
]

const route = useRoute()

const getHeaderTitle = () => {
  const titles: Record<string, string> = {
    '/': 'The Academic Editorial',
    '/fees': 'Fees & Payments',
    '/bus-tracking': 'Live Bus Tracking',
    '/students': 'Student Management',
    '/classes': 'Classes',
    '/attendance': 'Attendance',
    '/progress': 'Progress',
    '/curriculum': 'Curriculum',
    '/reports': 'Reports',
    '/prediction': 'Prediction',
  }
  return titles[route.path] || 'The Academic Editorial'
}
</script>

<template>
  <div class="flex h-screen bg-[#F8FAFC]">
    <!-- Sidebar -->
    <aside class="w-72 bg-[#F8FAFC] border-r border-slate-200 flex flex-col">
      <div class="p-8">
        <div class="flex items-center space-x-3 mb-2">
          <div class="w-10 h-10 bg-[#0F172A] rounded-xl flex items-center justify-center shadow-lg shadow-slate-200">
            <GraduationCap class="w-6 h-6 text-white" />
          </div>
          <div>
            <h1 class="text-lg font-black text-[#1E293B] leading-none">St. Edwards</h1>
            <p class="text-[9px] font-black text-slate-400 tracking-[0.2em] uppercase mt-1">PARENT PORTAL</p>
          </div>
        </div>
      </div>

      <nav class="flex-1 px-6 py-2 space-y-1 overflow-y-auto custom-scrollbar">
        <NuxtLink
          v-for="item in menuItems"
          :key="item.name"
          :to="item.to"
          class="flex items-center w-full px-5 py-3.5 text-[10px] font-black tracking-widest transition-all rounded-xl group"
          :class="route.path === item.to ? 'bg-white text-[#0F172A] shadow-sm ring-1 ring-slate-200' : 'text-slate-400 hover:text-[#0F172A] hover:bg-white/50'"
        >
          <component 
            :is="item.icon" 
            class="w-5 h-5 mr-4 transition-colors" 
            :class="route.path === item.to ? 'text-[#0F172A]' : 'text-slate-300 group-hover:text-slate-500'"
          />
          {{ item.name }}
        </NuxtLink>
      </nav>

      <div class="p-6 mt-auto space-y-2 border-t border-slate-100">
        <div class="bg-white rounded-2xl p-5 mb-4 relative overflow-hidden group cursor-pointer shadow-sm ring-1 ring-slate-100">
          <p class="text-[9px] font-black text-slate-300 tracking-widest uppercase mb-2">PRIMARY STUDENT</p>
          <div class="flex items-center space-x-3">
            <div class="w-10 h-10 bg-[#0F172A] rounded-xl flex items-center justify-center overflow-hidden">
              <img src="https://ui-avatars.com/api/?name=JE&background=0F172A&color=fff" class="w-full h-full object-cover" />
            </div>
            <div>
              <p class="text-xs font-black text-[#0F172A]">Julian Edwards</p>
              <p class="text-[9px] font-bold text-slate-400 uppercase">Grade 8 • Section A</p>
            </div>
          </div>
        </div>

        <button class="flex items-center w-full px-5 py-3 text-[10px] font-black tracking-widest text-slate-400 hover:text-slate-600 transition-all uppercase">
          <SettingsIcon class="w-4 h-4 mr-4" />
          SETTINGS
        </button>
        
        <button class="flex items-center w-full px-5 py-3 text-[10px] font-black tracking-widest text-slate-400 hover:text-slate-600 transition-all uppercase">
          <LogOut class="w-4 h-4 mr-4" />
          LOGOUT
        </button>
      </div>
    </aside>

    <!-- Main Content -->
    <div class="flex-1 flex flex-col overflow-hidden">
      <!-- Header -->
      <header class="h-24 bg-[#F8FAFC] flex items-center justify-between px-10 border-b border-slate-100/50">
        <div class="flex items-center space-x-12">
          <h2 class="text-2xl font-black text-[#0F172A] tracking-tighter">
            {{ getHeaderTitle() }}
          </h2>
          
          <nav v-if="route.path !== '/fees'" class="flex items-center space-x-8">
            <button 
              v-for="tab in ['Overview', 'Curriculum', 'Reports']" 
              :key="tab"
              class="text-[11px] font-black tracking-widest uppercase pb-1 transition-all border-b-2"
              :class="tab === 'Overview' ? 'text-[#0F172A] border-[#0F172A]' : 'text-slate-300 border-transparent hover:text-slate-500'"
            >
              {{ tab }}
            </button>
          </nav>
        </div>

        <div class="flex items-center space-x-6">
          <div class="relative w-80">
            <Search class="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-300" />
            <input 
              type="text" 
              :placeholder="route.path === '/fees' ? 'Search invoices...' : 'Search students, records...'" 
              class="w-full pl-12 pr-4 py-3 bg-white border border-slate-100 rounded-xl focus:ring-2 focus:ring-slate-100 text-xs font-bold transition-all shadow-sm"
            >
          </div>

          <div class="flex items-center space-x-4">
            <button class="p-3 text-slate-400 hover:text-slate-600 bg-white rounded-xl shadow-sm ring-1 ring-slate-100 transition-all relative">
              <Bell class="w-5 h-5" />
              <div class="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></div>
            </button>
            <button class="p-3 text-slate-400 hover:text-slate-600 bg-white rounded-xl shadow-sm ring-1 ring-slate-100 transition-all">
              <PieChart class="w-5 h-5" />
            </button>
          </div>
          
          <div class="h-10 w-[1px] bg-slate-200 mx-4"></div>

          <div class="flex items-center space-x-4">
            <div class="text-right">
              <p class="text-xs font-black text-[#0F172A]">Admin Account</p>
              <p class="text-[9px] font-black text-slate-400 tracking-widest uppercase">SUPER ADMINISTRATOR</p>
            </div>
            <img 
              src="https://ui-avatars.com/api/?name=Admin+User&background=0F172A&color=fff" 
              alt="Avatar" 
              class="w-12 h-12 rounded-2xl object-cover ring-4 ring-white shadow-xl"
            >
          </div>
        </div>
      </header>

      <!-- Page Content -->
      <main class="flex-1 overflow-y-auto p-10 bg-[#F8FAFC]">
        <slot />
      </main>
    </div>
  </div>
</template>

<style>
body {
  @apply antialiased;
}

.custom-scrollbar::-webkit-scrollbar {
  width: 4px;
}
.custom-scrollbar::-webkit-scrollbar-track {
  background: transparent;
}
.custom-scrollbar::-webkit-scrollbar-thumb {
  @apply bg-slate-200 rounded-full;
}
</style>
