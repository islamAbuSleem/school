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
  CircleHelp
} from 'lucide-vue-next'

const menuItems = [
  { name: 'STUDENTS', icon: GraduationCap, active: false },
  { name: 'TEACHERS', icon: Users, active: false },
  { name: 'CLASSES', icon: BookOpen, active: false },
  { name: 'ATTENDANCE', icon: CalendarCheck, active: true },
  { name: 'FEES', icon: Wallet, active: false },
  { name: 'EXAMS', icon: FileText, active: false },
]
</script>

<template>
  <div class="flex h-screen bg-[#F8FAFC]">
    <!-- Sidebar -->
    <aside class="w-64 bg-white border-r border-slate-200 flex flex-col">
      <div class="p-6">
        <h1 class="text-xl font-bold text-[#1E293B]">Editorial Admin</h1>
        <p class="text-xs font-semibold text-slate-400 tracking-wider">PRESTIGE ACADEMY</p>
      </div>

      <nav class="flex-1 px-4 py-6 space-y-2">
        <button
          v-for="item in menuItems"
          :key="item.name"
          class="flex items-center w-full px-4 py-3 text-sm font-semibold transition-colors rounded-lg group"
          :class="item.active ? 'bg-white text-[#1E293B] shadow-sm ring-1 ring-slate-200' : 'text-slate-500 hover:bg-slate-50'"
        >
          <component 
            :is="item.icon" 
            class="w-5 h-5 mr-4" 
            :class="item.active ? 'text-[#1E293B]' : 'text-slate-400 group-hover:text-slate-600'"
          />
          {{ item.name }}
        </button>
      </nav>

      <div class="p-4 mt-auto space-y-2">
        <button class="w-full py-3 text-sm font-bold text-white bg-[#0F172A] rounded-lg hover:bg-slate-800 transition-colors">
          Generate Reports
        </button>
        
        <button class="flex items-center w-full px-4 py-3 text-sm font-semibold text-slate-500 hover:bg-slate-50 rounded-lg group">
          <SettingsIcon class="w-5 h-5 mr-4 text-slate-400 group-hover:text-slate-600" />
          SETTINGS
        </button>
        
        <button class="flex items-center w-full px-4 py-3 text-sm font-semibold text-slate-500 hover:bg-slate-50 rounded-lg group">
          <LogOut class="w-5 h-5 mr-4 text-slate-400 group-hover:text-slate-600" />
          LOGOUT
        </button>
      </div>
    </aside>

    <!-- Main Content -->
    <div class="flex-1 flex flex-col overflow-hidden">
      <!-- Header -->
      <header class="h-20 bg-[#F8FAFC] flex items-center justify-between px-8">
        <div class="relative w-96">
          <Search class="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
          <input 
            type="text" 
            placeholder="Search Student" 
            class="w-full pl-10 pr-4 py-2 bg-white border-none rounded-lg focus:ring-2 focus:ring-slate-200 text-sm"
          >
        </div>

        <div class="flex items-center space-x-6">
          <button class="text-sm font-medium text-slate-500 hover:text-slate-800">Support</button>
          <div class="flex items-center space-x-4">
            <button class="p-2 text-slate-400 hover:text-slate-600 bg-white rounded-lg shadow-sm ring-1 ring-slate-100">
              <Bell class="w-5 h-5" />
            </button>
            <button class="p-2 text-slate-400 hover:text-slate-600 bg-white rounded-lg shadow-sm ring-1 ring-slate-100">
              <SettingsIcon class="w-5 h-5" />
            </button>
            <button class="p-2 text-slate-400 hover:text-slate-600 bg-white rounded-lg shadow-sm ring-1 ring-slate-100">
              <CircleHelp class="w-5 h-5" />
            </button>
          </div>
          <div class="flex items-center space-x-3 ml-4">
            <img 
              src="https://ui-avatars.com/api/?name=Admin+User&background=0D8ABC&color=fff" 
              alt="Avatar" 
              class="w-10 h-10 rounded-lg object-cover"
            >
          </div>
        </div>
      </header>

      <!-- Page Content -->
      <main class="flex-1 overflow-y-auto p-8 pt-0">
        <slot />
      </main>
    </div>
  </div>
</template>

<style>
body {
  @apply antialiased;
}
</style>
