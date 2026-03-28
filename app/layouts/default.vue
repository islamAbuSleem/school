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
  LogOut as LogOutIcon,
  Globe
} from 'lucide-vue-next'

const route = useRoute()
const isMobileMenuOpen = ref(false)
const isProfileOpen = ref(false)

const { success } = useToast()
const { activeTab, setActiveTab } = useDashboard()
const { t, currentLocale, toggleLocale, direction } = useLocale()

const menuItems = computed(() => [
  { name: t('dashboard'), icon: LayoutGrid, to: '/' },
  { name: t('students'), icon: GraduationCap, to: '/students' },
  { name: t('classes'), icon: BookOpen, to: '/classes' },
  { name: t('attendance'), icon: CalendarCheck, to: '/attendance' },
  { name: t('progress'), icon: TrendingUp, to: '/progress' },
  { name: t('curriculum'), icon: ClipboardList, to: '/curriculum' },
  { name: t('reports'), icon: FileBarChart, to: '/reports' },
  { name: t('prediction'), icon: Sparkles, to: '/prediction' },
  { name: t('bus-tracking'), icon: Bus, to: '/bus-tracking' },
  { name: t('fees'), icon: Wallet, to: '/fees' },
])

const getHeaderTitle = () => {
  const titles: Record<string, string> = {
    '/': t('dashboard'),
    '/fees': t('fees'),
    '/bus-tracking': t('bus-tracking'),
    '/students': t('students'),
    '/classes': t('classes'),
    '/attendance': t('attendance'),
    '/progress': t('progress'),
    '/curriculum': t('curriculum'),
    '/reports': t('reports'),
    '/prediction': t('prediction'),
  }
  return titles[route.path] || t('dashboard')
}

const handleLogout = () => {
  success(t('logout'), 'You have been successfully logged out')
}

const handleSettings = () => {
  success(t('settings'), 'Settings page coming soon')
}
</script>

<template>
  <div class="flex h-screen bg-[#F1F5F9]" :dir="direction">
    <!-- Mobile Menu Button -->
    <button @click="isMobileMenuOpen = !isMobileMenuOpen"
      class="lg:hidden fixed top-4 z-50 p-3 bg-white rounded-xl shadow-lg"
      :class="direction === 'rtl' ? 'right-4' : 'left-4'">
      <Menu v-if="!isMobileMenuOpen" class="w-5 h-5 text-slate-600" />
      <X v-else class="w-5 h-5 text-slate-600" />
    </button>

    <!-- Sidebar -->
    <aside
      class="fixed lg:relative z-40 w-72 h-full bg-white/80 backdrop-blur-xl border-white/50 flex flex-col transition-transform duration-300 lg:translate-x-0"
      :class="[
        isMobileMenuOpen ? 'translate-x-0' : (direction === 'rtl' ? 'translate-x-full lg:translate-x-0' : '-translate-x-full lg:translate-x-0'),
        direction === 'rtl' ? 'border-l' : 'border-r'
      ]">
      <div class="p-6 pt-16 lg:pt-6">
        <div class="flex items-center space-x-3 rtl:space-x-reverse mb-2">
          <div
            class="w-11 h-11 bg-gradient-to-br from-accent to-purple-500 rounded-xl flex items-center justify-center shadow-lg shadow-accent/30">
            <GraduationCap class="w-6 h-6 text-white" />
          </div>
          <div>
            <h1 class="text-lg font-bold text-slate-800" style="font-family: var(--font-display)">St. Edwards</h1>
            <p class="text-[9px] font-bold text-slate-400 tracking-[0.2em] uppercase mt-0.5">Parent Portal</p>
          </div>
        </div>
      </div>

      <nav class="flex-1 px-4 py-2 space-y-1 overflow-y-auto custom-scrollbar">
        <NuxtLink v-for="item in menuItems" :key="item.name" :to="item.to" @click="isMobileMenuOpen = false"
          class="nav-item" :class="{ 'active': route.path === item.to }">
          <component :is="item.icon" class="w-5 h-5" :class="direction === 'rtl' ? 'ml-3' : 'mr-3'" />
          {{ item.name }}
        </NuxtLink>
      </nav>

      <div class="p-4 mt-auto space-y-2 border-t border-slate-100/50">
        <div class="glass-card-static p-4 mb-3 cursor-pointer group hover:scale-[1.02] transition-transform">
          <p class="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-3">{{ t('primary_student') }}</p>
          <div class="flex items-center space-x-3 rtl:space-x-reverse">
            <div
              class="w-10 h-10 bg-gradient-to-br from-accent to-purple-500 rounded-xl flex items-center justify-center overflow-hidden shadow-md">
              <img src="https://ui-avatars.com/api/?name=JE&background=6366F1&color=fff"
                class="w-full h-full object-cover" />
            </div>
            <div>
              <p class="text-sm font-bold text-slate-800">Julian Edwards</p>
              <p class="text-[10px] font-medium text-slate-400 uppercase">{{ t('grade') }} 8 • {{ t('section') }} A</p>
            </div>
          </div>
        </div>

        <button @click="handleSettings" class="nav-item w-full justify-start">
          <Settings class="w-4 h-4" :class="direction === 'rtl' ? 'ml-3' : 'mr-3'" />
          {{ t('settings') }}
        </button>

        <button @click="handleLogout" class="nav-item w-full justify-start text-red-500/70 hover:text-red-500">
          <LogOutIcon class="w-4 h-4" :class="direction === 'rtl' ? 'ml-3' : 'mr-3'" />
          {{ t('logout') }}
        </button>
      </div>
    </aside>

    <!-- Mobile Overlay -->
    <div v-if="isMobileMenuOpen" @click="isMobileMenuOpen = false"
      class="fixed inset-0 bg-black/20 backdrop-blur-sm z-30 lg:hidden" />

    <!-- Main Content -->
    <div class="flex-1 flex flex-col overflow-hidden">
      <!-- Header -->
      <header
        class="h-20 bg-white/60 backdrop-blur-xl border-b border-white/50 flex items-center justify-between px-6 lg:px-10 z-50 relative">
        <div class="flex items-center space-x-8 rtl:space-x-reverse ml-12 lg:ml-0 rtl:ml-0 rtl:mr-12 lg:rtl:mr-0">
          <h2 class="text-xl lg:text-2xl font-bold text-slate-800" style="font-family: var(--font-display)">
            {{ getHeaderTitle() }}
          </h2>

          <nav v-if="route.path === '/'" class="hidden md:flex items-center space-x-6 rtl:space-x-reverse">
            <button v-for="tab in ['Overview', 'Curriculum', 'Reports']" :key="tab" @click="setActiveTab(tab)"
              class="text-sm font-medium pb-1 transition-all border-b-2"
              :class="activeTab === tab ? 'text-accent border-accent' : 'text-slate-400 border-transparent hover:text-slate-600'">
              {{ tab }}
            </button>
          </nav>
        </div>

        <div class="flex items-center space-x-4 rtl:space-x-reverse">
          <div class="relative hidden sm:block">
            <Search class="absolute top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400"
              :class="direction === 'rtl' ? 'right-3.5' : 'left-3.5'" />
            <input type="text" :placeholder="t('search')" class="input-glass w-64 lg:w-80 text-sm"
              :class="direction === 'rtl' ? 'pr-11' : 'pl-11'">
          </div>

          <div class="flex items-center space-x-2 rtl:space-x-reverse">
            <NotificationDropdown />
            <button
              class="p-3 text-slate-500 hover:text-accent bg-white/60 rounded-xl shadow-sm border border-white/50 transition-all hover:scale-105 hidden sm:block">
              <PieChart class="w-5 h-5" />
            </button>
            <button @click="toggleLocale"
              class="flex items-center gap-2 px-3 py-2 text-[13px] font-black uppercase tracking-widest bg-slate-100 hover:bg-slate-200 text-slate-600 rounded-lg transition-colors border border-slate-200 shadow-sm">
              <Globe class="w-5 h-5 text-accent" />
              {{ currentLocale === 'en' ? 'AR' : 'EN' }}
            </button>
          </div>

          <div class="h-8 w-[1px] bg-slate-200 mx-2 hidden lg:block"></div>

          <!-- Profile Dropdown -->
          <div class="relative hidden lg:block">
            <button @click="isProfileOpen = !isProfileOpen"
              class="flex items-center space-x-3 rtl:space-x-reverse hover:bg-slate-50 p-2 -m-2 rounded-xl transition-colors">
              <div :class="direction === 'rtl' ? 'text-left' : 'text-right'">
                <p class="text-sm font-bold text-slate-700">{{ t('admin_account') }}</p>
                <p class="text-[10px] font-medium text-slate-400 uppercase tracking-wider">{{ t('super_admin') }}</p>
              </div>
              <img src="https://ui-avatars.com/api/?name=Admin+User&background=6366F1&color=fff" alt="Avatar"
                class="w-11 h-11 rounded-xl object-cover ring-2 ring-white shadow-md">
              <ChevronDown class="w-4 h-4 text-slate-400 transition-transform"
                :class="{ 'rotate-180': isProfileOpen }" />
            </button>

            <Transition enter-active-class="transition ease-out duration-150" enter-from-class="opacity-0 scale-95"
              enter-to-class="opacity-100 scale-100" leave-active-class="transition ease-in duration-100"
              leave-from-class="opacity-100 scale-100" leave-to-class="opacity-0 scale-95">
              <div v-if="isProfileOpen"
                class="absolute mt-2 w-56 bg-white rounded-xl shadow-xl border border-slate-100 overflow-hidden z-[100]"
                :class="direction === 'rtl' ? 'left-0' : 'right-0'">
                <div class="p-3 border-b border-slate-100">
                  <p class="font-semibold text-slate-800">{{ t('admin_account') }}</p>
                  <p class="text-xs text-slate-500">admin@stedwards.edu</p>
                </div>
                <div class="py-2">
                  <button
                    class="w-full px-4 py-2.5 text-sm text-slate-600 hover:bg-slate-50 hover:text-accent flex items-center gap-3"
                    :class="direction === 'rtl' ? 'text-right' : 'text-left'">
                    <User class="w-4 h-4" />
                    {{ t('my_profile') }}
                  </button>
                  <button
                    class="w-full px-4 py-2.5 text-sm text-slate-600 hover:bg-slate-50 hover:text-accent flex items-center gap-3"
                    :class="direction === 'rtl' ? 'text-right' : 'text-left'">
                    <Settings class="w-4 h-4" />
                    {{ t('account_settings') }}
                  </button>
                  <button @click="handleLogout"
                    class="w-full px-4 py-2.5 text-sm text-red-600 hover:bg-red-50 flex items-center gap-3"
                    :class="direction === 'rtl' ? 'text-right' : 'text-left'">
                    <LogOutIcon class="w-4 h-4" />
                    {{ t('sign_out') }}
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
