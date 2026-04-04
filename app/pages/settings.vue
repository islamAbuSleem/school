<script setup lang="ts">
import { Settings, Bell, Mail, Smartphone, Globe, Shield, Palette, Save, CheckCircle2, Moon, Sun, Monitor } from 'lucide-vue-next'

const { currentUser, logout } = useAuth()
const { success } = useToast()

const settings = ref({
  schoolName: 'St. Edwards Academy',
  academicYear: '2023/24',
  currentTerm: 'Term 2',
  timezone: 'America/Los_Angeles',
  language: 'en',
  theme: 'light',
  notifications: {
    email: true,
    sms: false,
    push: true,
    attendanceAlerts: true,
    gradeAlerts: true,
    behaviorAlerts: true,
    feeReminders: true,
    announcementAlerts: true,
  },
  security: {
    twoFactor: false,
    sessionTimeout: 30,
    loginAlerts: true,
  }
})

const saveSettings = () => {
  if (typeof localStorage !== 'undefined') {
    localStorage.setItem('school_settings', JSON.stringify(settings.value))
  }
  success('Settings Saved', 'Your preferences have been updated successfully')
}

const timezones = [
  'America/New_York',
  'America/Chicago',
  'America/Denver',
  'America/Los_Angeles',
  'Europe/London',
  'Europe/Paris',
  'Asia/Tokyo',
  'Asia/Shanghai',
]

const languages = [
  { code: 'en', name: 'English' },
  { code: 'ar', name: 'العربية' },
  { code: 'fr', name: 'Français' },
  { code: 'es', name: 'Español' },
]
</script>

<template>
  <div class="max-w-[1600px] mx-auto pb-16 px-4 md:px-10">
    <div class="flex flex-col lg:flex-row lg:items-center justify-between mb-8 gap-4">
      <div>
        <p class="text-xs font-semibold text-accent uppercase tracking-wider mb-2">System</p>
        <h2 class="page-title">Settings</h2>
        <p class="text-slate-500 mt-2">Manage your account and system preferences</p>
      </div>
      <button @click="saveSettings" class="btn-primary flex items-center self-start lg:self-auto">
        <Save class="w-4 h-4 mr-2" />
        Save Changes
      </button>
    </div>

    <div class="grid grid-cols-1 lg:grid-cols-[300px,1fr] gap-8">
      <div class="glass-card-static p-4">
        <nav class="space-y-1">
          <button class="w-full flex items-center gap-3 p-3 rounded-xl bg-indigo-50 text-indigo-700 font-bold text-sm">
            <Settings class="w-4 h-4" />
            General
          </button>
          <button class="w-full flex items-center gap-3 p-3 rounded-xl text-slate-600 hover:bg-slate-50 font-medium text-sm transition-colors">
            <Bell class="w-4 h-4" />
            Notifications
          </button>
          <button class="w-full flex items-center gap-3 p-3 rounded-xl text-slate-600 hover:bg-slate-50 font-medium text-sm transition-colors">
            <Shield class="w-4 h-4" />
            Security
          </button>
          <button class="w-full flex items-center gap-3 p-3 rounded-xl text-slate-600 hover:bg-slate-50 font-medium text-sm transition-colors">
            <Palette class="w-4 h-4" />
            Appearance
          </button>
        </nav>
      </div>

      <div class="space-y-8">
        <!-- General Settings -->
        <div class="glass-card-static p-6">
          <h3 class="text-lg font-black text-slate-800 tracking-tight mb-6 flex items-center gap-2">
            <Settings class="w-5 h-5 text-accent" />
            General Settings
          </h3>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label class="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1.5 block">School Name</label>
              <input v-model="settings.schoolName" type="text" class="input-glass w-full" />
            </div>
            <div>
              <label class="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1.5 block">Academic Year</label>
              <input v-model="settings.academicYear" type="text" class="input-glass w-full" />
            </div>
            <div>
              <label class="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1.5 block">Current Term</label>
              <select v-model="settings.currentTerm" class="input-glass w-full appearance-none">
                <option>Term 1</option>
                <option>Term 2</option>
                <option>Term 3</option>
                <option>Term 4</option>
              </select>
            </div>
            <div>
              <label class="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1.5 block">Timezone</label>
              <select v-model="settings.timezone" class="input-glass w-full appearance-none">
                <option v-for="tz in timezones" :key="tz" :value="tz">{{ tz }}</option>
              </select>
            </div>
            <div>
              <label class="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1.5 block">Language</label>
              <select v-model="settings.language" class="input-glass w-full appearance-none">
                <option v-for="lang in languages" :key="lang.code" :value="lang.code">{{ lang.name }}</option>
              </select>
            </div>
          </div>
        </div>

        <!-- Notification Settings -->
        <div class="glass-card-static p-6">
          <h3 class="text-lg font-black text-slate-800 tracking-tight mb-6 flex items-center gap-2">
            <Bell class="w-5 h-5 text-accent" />
            Notification Preferences
          </h3>
          <div class="space-y-4">
            <div v-for="(enabled, key) in settings.notifications" :key="key" class="flex items-center justify-between p-4 bg-slate-50/50 rounded-2xl border border-slate-100">
              <div>
                <h4 class="font-bold text-slate-800 capitalize">{{ key.replace(/([A-Z])/g, ' $1').trim() }}</h4>
                <p class="text-xs text-slate-500">Receive alerts for {{ key.replace(/([A-Z])/g, ' $1').toLowerCase().trim() }}</p>
              </div>
              <button 
                @click="settings.notifications[key] = !enabled"
                class="relative w-12 h-6 rounded-full transition-colors"
                :class="enabled ? 'bg-indigo-600' : 'bg-slate-200'"
              >
                <div class="absolute top-0.5 w-5 h-5 bg-white rounded-full shadow-sm transition-transform"
                  :class="enabled ? 'translate-x-6' : 'translate-x-0.5'"
                ></div>
              </button>
            </div>
          </div>
        </div>

        <!-- Security Settings -->
        <div class="glass-card-static p-6">
          <h3 class="text-lg font-black text-slate-800 tracking-tight mb-6 flex items-center gap-2">
            <Shield class="w-5 h-5 text-accent" />
            Security
          </h3>
          <div class="space-y-4">
            <div class="flex items-center justify-between p-4 bg-slate-50/50 rounded-2xl border border-slate-100">
              <div>
                <h4 class="font-bold text-slate-800">Two-Factor Authentication</h4>
                <p class="text-xs text-slate-500">Add an extra layer of security to your account</p>
              </div>
              <button 
                @click="settings.security.twoFactor = !settings.security.twoFactor"
                class="relative w-12 h-6 rounded-full transition-colors"
                :class="settings.security.twoFactor ? 'bg-indigo-600' : 'bg-slate-200'"
              >
                <div class="absolute top-0.5 w-5 h-5 bg-white rounded-full shadow-sm transition-transform"
                  :class="settings.security.twoFactor ? 'translate-x-6' : 'translate-x-0.5'"
                ></div>
              </button>
            </div>
            <div class="flex items-center justify-between p-4 bg-slate-50/50 rounded-2xl border border-slate-100">
              <div>
                <h4 class="font-bold text-slate-800">Session Timeout</h4>
                <p class="text-xs text-slate-500">Auto-logout after inactivity</p>
              </div>
              <div class="flex items-center gap-2">
                <input v-model.number="settings.security.sessionTimeout" type="number" min="5" max="120" class="w-20 bg-white border border-slate-200 text-sm font-medium text-center rounded-lg px-3 py-2 focus:outline-none focus:border-indigo-500" />
                <span class="text-xs text-slate-500">minutes</span>
              </div>
            </div>
            <div class="flex items-center justify-between p-4 bg-slate-50/50 rounded-2xl border border-slate-100">
              <div>
                <h4 class="font-bold text-slate-800">Login Alerts</h4>
                <p class="text-xs text-slate-500">Get notified of new sign-ins</p>
              </div>
              <button 
                @click="settings.security.loginAlerts = !settings.security.loginAlerts"
                class="relative w-12 h-6 rounded-full transition-colors"
                :class="settings.security.loginAlerts ? 'bg-indigo-600' : 'bg-slate-200'"
              >
                <div class="absolute top-0.5 w-5 h-5 bg-white rounded-full shadow-sm transition-transform"
                  :class="settings.security.loginAlerts ? 'translate-x-6' : 'translate-x-0.5'"
                ></div>
              </button>
            </div>
          </div>
        </div>

        <!-- Appearance -->
        <div class="glass-card-static p-6">
          <h3 class="text-lg font-black text-slate-800 tracking-tight mb-6 flex items-center gap-2">
            <Palette class="w-5 h-5 text-accent" />
            Appearance
          </h3>
          <div class="grid grid-cols-3 gap-4">
            <button @click="settings.theme = 'light'" class="p-4 rounded-2xl border-2 transition-all text-center"
              :class="settings.theme === 'light' ? 'border-indigo-500 bg-indigo-50' : 'border-slate-200 hover:border-slate-300'"
            >
              <Sun class="w-6 h-6 mx-auto mb-2 text-amber-500" />
              <p class="text-xs font-bold text-slate-700">Light</p>
            </button>
            <button @click="settings.theme = 'dark'" class="p-4 rounded-2xl border-2 transition-all text-center"
              :class="settings.theme === 'dark' ? 'border-indigo-500 bg-indigo-50' : 'border-slate-200 hover:border-slate-300'"
            >
              <Moon class="w-6 h-6 mx-auto mb-2 text-indigo-600" />
              <p class="text-xs font-bold text-slate-700">Dark</p>
            </button>
            <button @click="settings.theme = 'system'" class="p-4 rounded-2xl border-2 transition-all text-center"
              :class="settings.theme === 'system' ? 'border-indigo-500 bg-indigo-50' : 'border-slate-200 hover:border-slate-300'"
            >
              <Monitor class="w-6 h-6 mx-auto mb-2 text-slate-600" />
              <p class="text-xs font-bold text-slate-700">System</p>
            </button>
          </div>
        </div>

        <!-- Account Info -->
        <div class="glass-card-static p-6 bg-primary text-white">
          <h3 class="text-lg font-black tracking-tight mb-6">Account Information</h3>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <p class="text-[10px] font-black text-white/40 uppercase tracking-widest mb-1">Logged in as</p>
              <p class="text-sm font-bold">{{ currentUser?.name }}</p>
            </div>
            <div>
              <p class="text-[10px] font-black text-white/40 uppercase tracking-widest mb-1">Role</p>
              <p class="text-sm font-bold capitalize">{{ currentUser?.role }}</p>
            </div>
            <div>
              <p class="text-[10px] font-black text-white/40 uppercase tracking-widest mb-1">Email</p>
              <p class="text-sm font-bold">{{ currentUser?.email }}</p>
            </div>
            <div>
              <p class="text-[10px] font-black text-white/40 uppercase tracking-widest mb-1">User ID</p>
              <p class="text-sm font-bold">{{ currentUser?.id }}</p>
            </div>
          </div>
          <button @click="logout" class="mt-6 px-6 py-2.5 bg-white/10 text-white text-sm font-bold rounded-xl hover:bg-white/20 transition-colors border border-white/10">
            Sign Out
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
