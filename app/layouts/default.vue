<script setup lang="ts">
import { 
  GraduationCap, 
  BookOpen, 
  CalendarCheck, 
  Wallet, 
  Settings, 
  LogOut,
  Search,
  TrendingUp,
  Bus,
  FileBarChart,
  ClipboardList,
  Sparkles,
  PieChart,
  LayoutGrid,
  Menu,
  X,
  User,
  ChevronDown,
  LogOut as LogOutIcon
} from 'lucide-vue-next'

const menuItems = [
  { name: 'Dashboard', icon: LayoutGrid, to: '/' },
  { name: 'Students', icon: GraduationCap, to: '/students' },
  { name: 'Classes', icon: BookOpen, to: '/classes' },
  { name: 'Attendance', icon: CalendarCheck, to: '/attendance' },
  { name: 'Progress', icon: TrendingUp, to: '/progress' },
  { name: 'Curriculum', icon: ClipboardList, to: '/curriculum' },
  { name: 'Reports', icon: FileBarChart, to: '/reports' },
  { name: 'Prediction', icon: Sparkles, to: '/prediction' },
  { name: 'Bus Tracking', icon: Bus, to: '/bus-tracking' },
  { name: 'Fees', icon: Wallet, to: '/fees' },
]

const route = useRoute()
const isMobileMenuOpen = ref(false)
const isProfileOpen = ref(false)

const getHeaderTitle = () => {
  const titles: Record<string, string> = {
    '/': 'Dashboard',
    '/fees': 'Fees & Payments',
    '/bus-tracking': 'Live Bus Tracking',
    '/students': 'Student Management',
    '/classes': 'Classes',
    '/attendance': 'Attendance',
    '/progress': 'Progress',
    '/curriculum': 'Curriculum',
    '/reports': 'Reports',
    '/prediction': 'AI Predictions',
  }
  return titles[route.path] || 'Dashboard'
}

const { success } = useToast()

const handleLogout = () => {
  success('Logged out', 'You have been successfully logged out')
}

const handleSettings = () => {
  success('Settings', 'Settings page coming soon')
}
</script>

<template>
  <div class="flex h-screen bg-[#F1F5F9]">
    <!-- Mobile Menu Button -->
    <button 
      @click="isMobileMenuOpen = !isMobileMenuOpen"
      class="lg:hidden fixed top-4 left-4 z-50 p-3 bg-white rounded-xl shadow-lg"
    >
      <Menu v-if="!isMobileMenuOpen" class="w-5 h-5 text-slate-600" />
      <X v-else class="w-5 h-5 text-slate-600" />
    </button>

    <!-- Sidebar -->
    <aside 
      class="fixed lg:relative z-40 w-72 h-full bg-white/80 backdrop-blur-xl border-r border-white/50 flex flex-col transition-transform duration-300 lg:translate-x-0"
      :class="isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'"
    >
      <div class="p-6 pt-16 lg:pt-6">
        <div class="flex items-center space-x-3 mb-2">
          <div class="w-11 h-11 bg-gradient-to-br from-accent to-purple-500 rounded-xl flex items-center justify-center shadow-lg shadow-accent/30">
            <GraduationCap class="w-6 h-6 text-white" />
          </div>
          <div>
            <h1 class="text-lg font-bold text-slate-800" style="font-family: var(--font-display)">St. Edwards</h1>
            <p class="text-[9px] font-bold text-slate-400 tracking-[0.2em] uppercase mt-0.5">Parent Portal</p>
          </div>
        </div>
      </div>

      <nav class="flex-1 px-4 py-2 space-y-1 overflow-y-auto custom-scrollbar">
        <NuxtLink
          v-for="item in menuItems"
          :key="item.name"
          :to="item.to"
          @click="isMobileMenuOpen = false"
          class="nav-item"
          :class="{ 'active': route.path === item.to }"
        >
          <component 
            :is="item.icon" 
            class="w-5 h-5 mr-3" 
          />
          {{ item.name }}
        </NuxtLink>
      </nav>

      <div class="p-4 mt-auto space-y-2 border-t border-slate-100/50">
        <div class="glass-card-static p-4 mb-3 cursor-pointer group hover:scale-[1.02] transition-transform">
          <p class="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-3">Primary Student</p>
          <div class="flex items-center space-x-3">
            <div class="w-10 h-10 bg-gradient-to-br from-accent to-purple-500 rounded-xl flex items-center justify-center overflow-hidden shadow-md">
              <img src="https://ui-avatars.com/api/?name=JE&background=6366F1&color=fff" class="w-full h-full object-cover" />
            </div>
            <div>
              <p class="text-sm font-bold text-slate-800">Julian Edwards</p>
              <p class="text-[10px] font-medium text-slate-400 uppercase">Grade 8 • Section A</p>
            </div>
          </div>
        </div>

        <button @click="handleSettings" class="nav-item w-full justify-start">
          <Settings class="w-4 h-4 mr-3" />
          Settings
        </button>
        
        <button @click="handleLogout" class="nav-item w-full justify-start text-red-500/70 hover:text-red-500">
          <LogOutIcon class="w-4 h-4 mr-3" />
          Logout
        </button>
      </div>
    </aside>

    <!-- Mobile Overlay -->
    <div 
      v-if="isMobileMenuOpen" 
      @click="isMobileMenuOpen = false"
      class="fixed inset-0 bg-black/20 backdrop-blur-sm z-30 lg:hidden"
    />

    <!-- Main Content -->
    <div class="flex-1 flex flex-col overflow-hidden">
      <!-- Header -->
      <header class="h-20 bg-white/60 backdrop-blur-xl border-b border-white/50 flex items-center justify-between px-6 lg:px-10">
        <div class="flex items-center space-x-8 ml-12 lg:ml-0">
          <h2 class="text-xl lg:text-2xl font-bold text-slate-800" style="font-family: var(--font-display)">
            {{ getHeaderTitle() }}
          </h2>
          
          <nav v-if="route.path !== '/fees'" class="hidden md:flex items-center space-x-6">
            <button 
              v-for="tab in ['Overview', 'Curriculum', 'Reports']" 
              :key="tab"
              class="text-sm font-medium pb-1 transition-all border-b-2"
              :class="tab === 'Overview' ? 'text-accent border-accent' : 'text-slate-400 border-transparent hover:text-slate-600'"
            >
              {{ tab }}
            </button>
          </nav>
        </div>

        <div class="flex items-center space-x-4">
          <div class="relative hidden sm:block">
            <Search class="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input 
              type="text" 
              :placeholder="route.path === '/fees' ? 'Search invoices...' : 'Search students...'" 
              class="input-glass pl-11 w-64 lg:w-80 text-sm"
            >
          </div>

          <div class="flex items-center space-x-2">
            <NotificationDropdown />
            <button class="p-3 text-slate-500 hover:text-accent bg-white/60 rounded-xl shadow-sm border border-white/50 transition-all hover:scale-105 hidden sm:block">
              <PieChart class="w-5 h-5" />
            </button>
          </div>
          
          <div class="h-8 w-[1px] bg-slate-200 mx-2 hidden lg:block"></div>

          <!-- Profile Dropdown -->
          <div class="relative hidden lg:block">
            <button 
              @click="isProfileOpen = !isProfileOpen"
              class="flex items-center space-x-3 hover:bg-slate-50 p-2 -m-2 rounded-xl transition-colors"
            >
              <div class="text-right">
                <p class="text-sm font-bold text-slate-700">Admin Account</p>
                <p class="text-[10px] font-medium text-slate-400 uppercase tracking-wider">Super Admin</p>
              </div>
              <img 
                src="https://ui-avatars.com/api/?name=Admin+User&background=6366F1&color=fff" 
                alt="Avatar" 
                class="w-11 h-11 rounded-xl object-cover ring-2 ring-white shadow-md"
              >
              <ChevronDown class="w-4 h-4 text-slate-400" :class="{ 'rotate-180': isProfileOpen }" />
            </button>

            <Transition
              enter-active-class="transition ease-out duration-150"
              enter-from-class="opacity-0 scale-95"
              enter-to-class="opacity-100 scale-100"
              leave-active-class="transition ease-in duration-100"
              leave-from-class="opacity-100 scale-100"
              leave-to-class="opacity-0 scale-95"
            >
              <div v-if="isProfileOpen" class="absolute right-0 mt-2 w-56 bg-white rounded-xl shadow-xl border border-slate-100 overflow-hidden z-[100]">
                <div class="p-3 border-b border-slate-100">
                  <p class="font-semibold text-slate-800">Admin Account</p>
                  <p class="text-xs text-slate-500">admin@stedwards.edu</p>
                </div>
                <div class="py-2">
                  <button class="w-full px-4 py-2.5 text-left text-sm text-slate-600 hover:bg-slate-50 hover:text-accent flex items-center gap-3">
                    <User class="w-4 h-4" />
                    My Profile
                  </button>
                  <button class="w-full px-4 py-2.5 text-left text-sm text-slate-600 hover:bg-slate-50 hover:text-accent flex items-center gap-3">
                    <Settings class="w-4 h-4" />
                    Account Settings
                  </button>
                  <button @click="handleLogout" class="w-full px-4 py-2.5 text-left text-sm text-red-600 hover:bg-red-50 flex items-center gap-3">
                    <LogOutIcon class="w-4 h-4" />
                    Sign Out
                  </button>
                </div>
              </div>
            </Transition>
            <div v-if="isProfileOpen" @click="isProfileOpen = false" class="fixed inset-0 z-[90]"></div>
          </div>
        </div>
      </header>

      <!-- Page Content -->
      <main class="flex-1 overflow-y-auto p-6 lg:p-8 bg-[#F1F5F9]">
        <slot />
      </main>
    </div>
  </div>
</template>
