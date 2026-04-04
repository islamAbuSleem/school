<script setup lang="ts">
import { Settings, Bell, Shield, Palette, Save, Moon, Sun, Monitor, User, BookOpen, Users, GraduationCap, Eye, MessageSquare, FileText, Clock } from 'lucide-vue-next'

const { currentUser, isTeacher, isStudent, isAdmin, isParent, logout } = useAuth()
const { success } = useToast()

const settings = ref({
  // Common
  theme: 'light',
  language: 'en',
  timezone: 'America/Los_Angeles',
  notifications: {
    email: true,
    sms: false,
    push: true,
  },
  security: {
    twoFactor: false,
    sessionTimeout: 30,
    loginAlerts: true,
  },
  // Admin only
  schoolName: 'St. Edwards Academy',
  academicYear: '2023/24',
  currentTerm: 'Term 2',
  // Teacher only
  defaultView: 'Week View',
  autoGradeCalc: true,
  // Student only
  showGPA: true,
  studyReminders: true,
  // Parent only
  childProgressAlerts: true,
  feeReminders: true,
  behaviorAlerts: true,
})

const saveSettings = () => {
  if (typeof localStorage !== 'undefined') {
    localStorage.setItem('school_settings', JSON.stringify(settings.value))
  }
  success('Settings Saved', 'Your preferences have been updated successfully')
}

const timezones = [
  'America/New_York', 'America/Chicago', 'America/Denver', 'America/Los_Angeles',
  'Europe/London', 'Europe/Paris', 'Asia/Tokyo', 'Asia/Shanghai',
]

const languages = [
  { code: 'en', name: 'English' },
  { code: 'ar', name: 'العربية' },
  { code: 'fr', name: 'Français' },
  { code: 'es', name: 'Español' },
]

const activeSection = ref('general')

const sections = computed(() => {
  const all = [
    { id: 'general', label: 'General', icon: Settings },
    { id: 'notifications', label: 'Notifications', icon: Bell },
    { id: 'security', label: 'Security', icon: Shield },
    { id: 'appearance', label: 'Appearance', icon: Palette },
  ]
  if (isAdmin.value) {
    all.push({ id: 'system', label: 'System', icon: Users })
  }
  if (isTeacher.value) {
    all.push({ id: 'teaching', label: 'Teaching', icon: BookOpen })
  }
  if (isStudent.value) {
    all.push({ id: 'learning', label: 'Learning', icon: GraduationCap })
  }
  if (isParent.value) {
    all.push({ id: 'monitoring', label: 'Child Monitoring', icon: Eye })
  }
  return all
})
</script>

<template>
  <div class="max-w-[1600px] mx-auto pb-16 px-4 md:px-10">
    <div class="flex flex-col lg:flex-row lg:items-center justify-between mb-8 gap-4">
      <div>
        <p class="text-xs font-semibold text-accent uppercase tracking-wider mb-2">Account</p>
        <h2 class="page-title">Settings</h2>
        <p class="text-slate-500 mt-2">Manage your preferences and account settings</p>
      </div>
      <button @click="saveSettings" class="btn-primary flex items-center self-start lg:self-auto">
        <Save class="w-4 h-4 mr-2" />
        Save Changes
      </button>
    </div>

    <div class="grid grid-cols-1 lg:grid-cols-[280px,1fr] gap-8">
      <div class="glass-card-static p-4">
        <nav class="space-y-1">
          <button v-for="section in sections" :key="section.id" 
            @click="activeSection = section.id"
            class="w-full flex items-center gap-3 p-3 rounded-xl font-medium text-sm transition-all"
            :class="activeSection === section.id ? 'bg-indigo-50 text-indigo-700 font-bold' : 'text-slate-600 hover:bg-slate-50'"
          >
            <component :is="section.icon" class="w-4 h-4" />
            {{ section.label }}
          </button>
        </nav>
      </div>

      <div class="space-y-8">
        <!-- General Settings (All Roles) -->
        <div v-if="activeSection === 'general'" class="glass-card-static p-6">
          <h3 class="text-lg font-black text-slate-800 tracking-tight mb-6 flex items-center gap-2">
            <Settings class="w-5 h-5 text-accent" />
            General Settings
          </h3>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label class="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1.5 block">Language</label>
              <select v-model="settings.language" class="input-glass w-full appearance-none">
                <option v-for="lang in languages" :key="lang.code" :value="lang.code">{{ lang.name }}</option>
              </select>
            </div>
            <div>
              <label class="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1.5 block">Timezone</label>
              <select v-model="settings.timezone" class="input-glass w-full appearance-none">
                <option v-for="tz in timezones" :key="tz" :value="tz">{{ tz }}</option>
              </select>
            </div>
          </div>
        </div>

        <!-- Notifications (All Roles) -->
        <div v-if="activeSection === 'notifications'" class="glass-card-static p-6">
          <h3 class="text-lg font-black text-slate-800 tracking-tight mb-6 flex items-center gap-2">
            <Bell class="w-5 h-5 text-accent" />
            Notification Preferences
          </h3>
          <div class="space-y-4">
            <div class="flex items-center justify-between p-4 bg-slate-50/50 rounded-2xl border border-slate-100">
              <div>
                <h4 class="font-bold text-slate-800">Email Notifications</h4>
                <p class="text-xs text-slate-500">Receive updates via email</p>
              </div>
              <button @click="settings.notifications.email = !settings.notifications.email" class="relative w-12 h-6 rounded-full transition-colors" :class="settings.notifications.email ? 'bg-indigo-600' : 'bg-slate-200'">
                <div class="absolute top-0.5 w-5 h-5 bg-white rounded-full shadow-sm transition-transform" :class="settings.notifications.email ? 'translate-x-6' : 'translate-x-0.5'"></div>
              </button>
            </div>
            <div class="flex items-center justify-between p-4 bg-slate-50/50 rounded-2xl border border-slate-100">
              <div>
                <h4 class="font-bold text-slate-800">SMS Notifications</h4>
                <p class="text-xs text-slate-500">Receive updates via text message</p>
              </div>
              <button @click="settings.notifications.sms = !settings.notifications.sms" class="relative w-12 h-6 rounded-full transition-colors" :class="settings.notifications.sms ? 'bg-indigo-600' : 'bg-slate-200'">
                <div class="absolute top-0.5 w-5 h-5 bg-white rounded-full shadow-sm transition-transform" :class="settings.notifications.sms ? 'translate-x-6' : 'translate-x-0.5'"></div>
              </button>
            </div>
            <div class="flex items-center justify-between p-4 bg-slate-50/50 rounded-2xl border border-slate-100">
              <div>
                <h4 class="font-bold text-slate-800">Push Notifications</h4>
                <p class="text-xs text-slate-500">Browser push notifications</p>
              </div>
              <button @click="settings.notifications.push = !settings.notifications.push" class="relative w-12 h-6 rounded-full transition-colors" :class="settings.notifications.push ? 'bg-indigo-600' : 'bg-slate-200'">
                <div class="absolute top-0.5 w-5 h-5 bg-white rounded-full shadow-sm transition-transform" :class="settings.notifications.push ? 'translate-x-6' : 'translate-x-0.5'"></div>
              </button>
            </div>

            <!-- Role-specific notifications -->
            <template v-if="isTeacher">
              <div class="flex items-center justify-between p-4 bg-slate-50/50 rounded-2xl border border-slate-100">
                <div>
                  <h4 class="font-bold text-slate-800">Assignment Reminders</h4>
                  <p class="text-xs text-slate-500">Remind about pending grading</p>
                </div>
                <button class="relative w-12 h-6 rounded-full bg-indigo-600 transition-colors">
                  <div class="absolute top-0.5 w-5 h-5 bg-white rounded-full shadow-sm translate-x-6"></div>
                </button>
              </div>
            </template>

            <template v-if="isStudent">
              <div class="flex items-center justify-between p-4 bg-slate-50/50 rounded-2xl border border-slate-100">
                <div>
                  <h4 class="font-bold text-slate-800">Assignment Deadlines</h4>
                  <p class="text-xs text-slate-500">Get notified before due dates</p>
                </div>
                <button class="relative w-12 h-6 rounded-full bg-indigo-600 transition-colors">
                  <div class="absolute top-0.5 w-5 h-5 bg-white rounded-full shadow-sm translate-x-6"></div>
                </button>
              </div>
              <div class="flex items-center justify-between p-4 bg-slate-50/50 rounded-2xl border border-slate-100">
                <div>
                  <h4 class="font-bold text-slate-800">Grade Updates</h4>
                  <p class="text-xs text-slate-500">When new grades are posted</p>
                </div>
                <button class="relative w-12 h-6 rounded-full bg-indigo-600 transition-colors">
                  <div class="absolute top-0.5 w-5 h-5 bg-white rounded-full shadow-sm translate-x-6"></div>
                </button>
              </div>
            </template>

            <template v-if="isParent">
              <div class="flex items-center justify-between p-4 bg-slate-50/50 rounded-2xl border border-slate-100">
                <div>
                  <h4 class="font-bold text-slate-800">Child Progress Alerts</h4>
                  <p class="text-xs text-slate-500">When grades or attendance change</p>
                </div>
                <button @click="settings.childProgressAlerts = !settings.childProgressAlerts" class="relative w-12 h-6 rounded-full transition-colors" :class="settings.childProgressAlerts ? 'bg-indigo-600' : 'bg-slate-200'">
                  <div class="absolute top-0.5 w-5 h-5 bg-white rounded-full shadow-sm transition-transform" :class="settings.childProgressAlerts ? 'translate-x-6' : 'translate-x-0.5'"></div>
                </button>
              </div>
              <div class="flex items-center justify-between p-4 bg-slate-50/50 rounded-2xl border border-slate-100">
                <div>
                  <h4 class="font-bold text-slate-800">Fee Reminders</h4>
                  <p class="text-xs text-slate-500">Before payment due dates</p>
                </div>
                <button @click="settings.feeReminders = !settings.feeReminders" class="relative w-12 h-6 rounded-full transition-colors" :class="settings.feeReminders ? 'bg-indigo-600' : 'bg-slate-200'">
                  <div class="absolute top-0.5 w-5 h-5 bg-white rounded-full shadow-sm transition-transform" :class="settings.feeReminders ? 'translate-x-6' : 'translate-x-0.5'"></div>
                </button>
              </div>
              <div class="flex items-center justify-between p-4 bg-slate-50/50 rounded-2xl border border-slate-100">
                <div>
                  <h4 class="font-bold text-slate-800">Behavior Alerts</h4>
                  <p class="text-xs text-slate-500">When behavior points change</p>
                </div>
                <button @click="settings.behaviorAlerts = !settings.behaviorAlerts" class="relative w-12 h-6 rounded-full transition-colors" :class="settings.behaviorAlerts ? 'bg-indigo-600' : 'bg-slate-200'">
                  <div class="absolute top-0.5 w-5 h-5 bg-white rounded-full shadow-sm transition-transform" :class="settings.behaviorAlerts ? 'translate-x-6' : 'translate-x-0.5'"></div>
                </button>
              </div>
            </template>
          </div>
        </div>

        <!-- Security (All Roles) -->
        <div v-if="activeSection === 'security'" class="glass-card-static p-6">
          <h3 class="text-lg font-black text-slate-800 tracking-tight mb-6 flex items-center gap-2">
            <Shield class="w-5 h-5 text-accent" />
            Security
          </h3>
          <div class="space-y-4">
            <div class="flex items-center justify-between p-4 bg-slate-50/50 rounded-2xl border border-slate-100">
              <div>
                <h4 class="font-bold text-slate-800">Two-Factor Authentication</h4>
                <p class="text-xs text-slate-500">Extra layer of security</p>
              </div>
              <button @click="settings.security.twoFactor = !settings.security.twoFactor" class="relative w-12 h-6 rounded-full transition-colors" :class="settings.security.twoFactor ? 'bg-indigo-600' : 'bg-slate-200'">
                <div class="absolute top-0.5 w-5 h-5 bg-white rounded-full shadow-sm transition-transform" :class="settings.security.twoFactor ? 'translate-x-6' : 'translate-x-0.5'"></div>
              </button>
            </div>
            <div class="flex items-center justify-between p-4 bg-slate-50/50 rounded-2xl border border-slate-100">
              <div>
                <h4 class="font-bold text-slate-800">Session Timeout</h4>
                <p class="text-xs text-slate-500">Auto-logout after inactivity</p>
              </div>
              <div class="flex items-center gap-2">
                <input v-model.number="settings.security.sessionTimeout" type="number" min="5" max="120" class="w-20 bg-white border border-slate-200 text-sm font-medium text-center rounded-lg px-3 py-2 focus:outline-none focus:border-indigo-500" />
                <span class="text-xs text-slate-500">min</span>
              </div>
            </div>
            <div class="flex items-center justify-between p-4 bg-slate-50/50 rounded-2xl border border-slate-100">
              <div>
                <h4 class="font-bold text-slate-800">Login Alerts</h4>
                <p class="text-xs text-slate-500">Get notified of new sign-ins</p>
              </div>
              <button @click="settings.security.loginAlerts = !settings.security.loginAlerts" class="relative w-12 h-6 rounded-full transition-colors" :class="settings.security.loginAlerts ? 'bg-indigo-600' : 'bg-slate-200'">
                <div class="absolute top-0.5 w-5 h-5 bg-white rounded-full shadow-sm transition-transform" :class="settings.security.loginAlerts ? 'translate-x-6' : 'translate-x-0.5'"></div>
              </button>
            </div>
          </div>
        </div>

        <!-- Appearance (All Roles) -->
        <div v-if="activeSection === 'appearance'" class="glass-card-static p-6">
          <h3 class="text-lg font-black text-slate-800 tracking-tight mb-6 flex items-center gap-2">
            <Palette class="w-5 h-5 text-accent" />
            Appearance
          </h3>
          <div class="grid grid-cols-3 gap-4">
            <button @click="settings.theme = 'light'" class="p-6 rounded-2xl border-2 transition-all text-center" :class="settings.theme === 'light' ? 'border-indigo-500 bg-indigo-50' : 'border-slate-200 hover:border-slate-300'">
              <Sun class="w-8 h-8 mx-auto mb-3 text-amber-500" />
              <p class="text-sm font-bold text-slate-700">Light</p>
            </button>
            <button @click="settings.theme = 'dark'" class="p-6 rounded-2xl border-2 transition-all text-center" :class="settings.theme === 'dark' ? 'border-indigo-500 bg-indigo-50' : 'border-slate-200 hover:border-slate-300'">
              <Moon class="w-8 h-8 mx-auto mb-3 text-indigo-600" />
              <p class="text-sm font-bold text-slate-700">Dark</p>
            </button>
            <button @click="settings.theme = 'system'" class="p-6 rounded-2xl border-2 transition-all text-center" :class="settings.theme === 'system' ? 'border-indigo-500 bg-indigo-50' : 'border-slate-200 hover:border-slate-300'">
              <Monitor class="w-8 h-8 mx-auto mb-3 text-slate-600" />
              <p class="text-sm font-bold text-slate-700">System</p>
            </button>
          </div>
        </div>

        <!-- System Settings (Admin Only) -->
        <div v-if="activeSection === 'system' && isAdmin" class="glass-card-static p-6">
          <h3 class="text-lg font-black text-slate-800 tracking-tight mb-6 flex items-center gap-2">
            <Users class="w-5 h-5 text-accent" />
            System Settings
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
                <option>Term 1</option><option>Term 2</option><option>Term 3</option><option>Term 4</option>
              </select>
            </div>
          </div>
        </div>

        <!-- Teaching Settings (Teacher Only) -->
        <div v-if="activeSection === 'teaching' && isTeacher" class="glass-card-static p-6">
          <h3 class="text-lg font-black text-slate-800 tracking-tight mb-6 flex items-center gap-2">
            <BookOpen class="w-5 h-5 text-accent" />
            Teaching Preferences
          </h3>
          <div class="space-y-4">
            <div>
              <label class="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1.5 block">Default Schedule View</label>
              <select v-model="settings.defaultView" class="input-glass w-full appearance-none">
                <option>Week View</option><option>Day View</option>
              </select>
            </div>
            <div class="flex items-center justify-between p-4 bg-slate-50/50 rounded-2xl border border-slate-100">
              <div>
                <h4 class="font-bold text-slate-800">Auto Grade Calculation</h4>
                <p class="text-xs text-slate-500">Automatically calculate letter grades from scores</p>
              </div>
              <button @click="settings.autoGradeCalc = !settings.autoGradeCalc" class="relative w-12 h-6 rounded-full transition-colors" :class="settings.autoGradeCalc ? 'bg-indigo-600' : 'bg-slate-200'">
                <div class="absolute top-0.5 w-5 h-5 bg-white rounded-full shadow-sm transition-transform" :class="settings.autoGradeCalc ? 'translate-x-6' : 'translate-x-0.5'"></div>
              </button>
            </div>
          </div>
        </div>

        <!-- Learning Settings (Student Only) -->
        <div v-if="activeSection === 'learning' && isStudent" class="glass-card-static p-6">
          <h3 class="text-lg font-black text-slate-800 tracking-tight mb-6 flex items-center gap-2">
            <GraduationCap class="w-5 h-5 text-accent" />
            Learning Preferences
          </h3>
          <div class="space-y-4">
            <div class="flex items-center justify-between p-4 bg-slate-50/50 rounded-2xl border border-slate-100">
              <div>
                <h4 class="font-bold text-slate-800">Show GPA on Dashboard</h4>
                <p class="text-xs text-slate-500">Display GPA prominently</p>
              </div>
              <button @click="settings.showGPA = !settings.showGPA" class="relative w-12 h-6 rounded-full transition-colors" :class="settings.showGPA ? 'bg-indigo-600' : 'bg-slate-200'">
                <div class="absolute top-0.5 w-5 h-5 bg-white rounded-full shadow-sm transition-transform" :class="settings.showGPA ? 'translate-x-6' : 'translate-x-0.5'"></div>
              </button>
            </div>
            <div class="flex items-center justify-between p-4 bg-slate-50/50 rounded-2xl border border-slate-100">
              <div>
                <h4 class="font-bold text-slate-800">Study Reminders</h4>
                <p class="text-xs text-slate-500">Daily reminders to study</p>
              </div>
              <button @click="settings.studyReminders = !settings.studyReminders" class="relative w-12 h-6 rounded-full transition-colors" :class="settings.studyReminders ? 'bg-indigo-600' : 'bg-slate-200'">
                <div class="absolute top-0.5 w-5 h-5 bg-white rounded-full shadow-sm transition-transform" :class="settings.studyReminders ? 'translate-x-6' : 'translate-x-0.5'"></div>
              </button>
            </div>
          </div>
        </div>

        <!-- Child Monitoring Settings (Parent Only) -->
        <div v-if="activeSection === 'monitoring' && isParent" class="glass-card-static p-6">
          <h3 class="text-lg font-black text-slate-800 tracking-tight mb-6 flex items-center gap-2">
            <Eye class="w-5 h-5 text-accent" />
            Child Monitoring
          </h3>
          <div class="space-y-4">
            <div class="flex items-center justify-between p-4 bg-slate-50/50 rounded-2xl border border-slate-100">
              <div>
                <h4 class="font-bold text-slate-800">Progress Alerts</h4>
                <p class="text-xs text-slate-500">When grades or attendance change significantly</p>
              </div>
              <button @click="settings.childProgressAlerts = !settings.childProgressAlerts" class="relative w-12 h-6 rounded-full transition-colors" :class="settings.childProgressAlerts ? 'bg-indigo-600' : 'bg-slate-200'">
                <div class="absolute top-0.5 w-5 h-5 bg-white rounded-full shadow-sm transition-transform" :class="settings.childProgressAlerts ? 'translate-x-6' : 'translate-x-0.5'"></div>
              </button>
            </div>
            <div class="flex items-center justify-between p-4 bg-slate-50/50 rounded-2xl border border-slate-100">
              <div>
                <h4 class="font-bold text-slate-800">Fee Reminders</h4>
                <p class="text-xs text-slate-500">Before payment due dates</p>
              </div>
              <button @click="settings.feeReminders = !settings.feeReminders" class="relative w-12 h-6 rounded-full transition-colors" :class="settings.feeReminders ? 'bg-indigo-600' : 'bg-slate-200'">
                <div class="absolute top-0.5 w-5 h-5 bg-white rounded-full shadow-sm transition-transform" :class="settings.feeReminders ? 'translate-x-6' : 'translate-x-0.5'"></div>
              </button>
            </div>
            <div class="flex items-center justify-between p-4 bg-slate-50/50 rounded-2xl border border-slate-100">
              <div>
                <h4 class="font-bold text-slate-800">Behavior Alerts</h4>
                <p class="text-xs text-slate-500">When behavior points change</p>
              </div>
              <button @click="settings.behaviorAlerts = !settings.behaviorAlerts" class="relative w-12 h-6 rounded-full transition-colors" :class="settings.behaviorAlerts ? 'bg-indigo-600' : 'bg-slate-200'">
                <div class="absolute top-0.5 w-5 h-5 bg-white rounded-full shadow-sm transition-transform" :class="settings.behaviorAlerts ? 'translate-x-6' : 'translate-x-0.5'"></div>
              </button>
            </div>
          </div>
        </div>

        <!-- Account Info (All Roles) -->
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
