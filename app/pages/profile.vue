<script setup lang="ts">
import { User, Mail, Phone, MapPin, Calendar, BookOpen, Users, Shield, Edit2, Save, X, Camera, Award, TrendingUp, Clock, FileText, MessageSquare } from 'lucide-vue-next'

const { currentUser, isTeacher, isStudent, isAdmin, isParent, teacherProfile, studentProfile } = useAuth()
const { classes, students } = useData()
const { success, info } = useToast()

const isEditing = ref(false)
const editForm = ref({
  name: '',
  email: '',
  phone: '',
  address: '',
  bio: ''
})

const originalForm = ref({ ...editForm.value })

const initEditForm = () => {
  if (!currentUser.value) return
  editForm.value = {
    name: currentUser.value.name,
    email: currentUser.value.email,
    phone: '',
    address: '',
    bio: ''
  }
  originalForm.value = { ...editForm.value }
}

const startEditing = () => {
  initEditForm()
  isEditing.value = true
}

const cancelEditing = () => {
  editForm.value = { ...originalForm.value }
  isEditing.value = false
}

const saveProfile = () => {
  if (currentUser.value) {
    currentUser.value.name = editForm.value.name
    currentUser.value.email = editForm.value.email
    if (typeof localStorage !== 'undefined') {
      localStorage.setItem('school_user', JSON.stringify(currentUser.value))
    }
    success('Profile Updated', 'Your profile has been saved successfully')
  }
  isEditing.value = false
}

// Teacher-specific data
const myClasses = computed(() => {
  if (!isTeacher.value || !teacherProfile.value) return []
  return classes.value.filter(c => teacherProfile.value?.classes.includes(c.id))
})

const myStudentCount = computed(() => {
  const studentIds = new Set<string>()
  myClasses.value.forEach(c => c.studentIds.forEach(id => studentIds.add(id)))
  return studentIds.size
})

// Student-specific data
const myStudentClasses = computed(() => {
  const profile = studentProfile.value
  if (!profile) return []
  return classes.value.filter(c => c.studentIds.includes(profile.id))
})

const recentGrades = [
  { subject: 'Mathematics', grade: 'A', score: 94, date: 'Jan 15, 2024' },
  { subject: 'Physics', grade: 'A-', score: 91, date: 'Jan 12, 2024' },
  { subject: 'English', grade: 'B+', score: 87, date: 'Jan 10, 2024' },
  { subject: 'History', grade: 'A', score: 95, date: 'Jan 8, 2024' },
]

const getGradeColor = (grade: string) => {
  if (grade.startsWith('A')) return 'text-emerald-600 bg-emerald-50'
  if (grade.startsWith('B')) return 'text-blue-600 bg-blue-50'
  return 'text-amber-600 bg-amber-50'
}

initEditForm()
</script>

<template>
  <div class="max-w-[1600px] mx-auto pb-16 px-4 md:px-10">
    <div class="flex flex-col lg:flex-row lg:items-center justify-between mb-8 gap-4">
      <div>
        <p class="text-xs font-semibold text-accent uppercase tracking-wider mb-2">Account</p>
        <h2 class="page-title">My Profile</h2>
      </div>
      <div class="flex items-center gap-3">
        <button v-if="!isEditing" @click="startEditing" class="btn-secondary flex items-center">
          <Edit2 class="w-4 h-4 mr-2" />
          Edit Profile
        </button>
        <template v-else>
          <button @click="cancelEditing" class="btn-secondary flex items-center">
            <X class="w-4 h-4 mr-2" />
            Cancel
          </button>
          <button @click="saveProfile" class="btn-primary flex items-center">
            <Save class="w-4 h-4 mr-2" />
            Save Changes
          </button>
        </template>
      </div>
    </div>

    <div class="grid grid-cols-1 lg:grid-cols-[400px,1fr] gap-8">
      <!-- Profile Card -->
      <div class="space-y-6">
        <div class="glass-card-static overflow-hidden">
          <div class="h-32 bg-gradient-to-r from-indigo-500 to-purple-600 relative">
            <button class="absolute bottom-4 right-4 p-2 bg-white/20 backdrop-blur-sm rounded-lg hover:bg-white/30 transition-colors">
              <Camera class="w-4 h-4 text-white" />
            </button>
          </div>
          <div class="px-6 pb-6">
            <div class="-mt-12 mb-4">
              <div class="w-24 h-24 rounded-2xl bg-white p-1 shadow-lg">
                <div class="w-full h-full rounded-xl bg-indigo-100 flex items-center justify-center text-2xl font-black text-indigo-600">
                  {{ currentUser?.initials }}
                </div>
              </div>
            </div>
            
            <template v-if="isEditing">
              <input v-model="editForm.name" class="text-xl font-black text-slate-800 w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 mb-1 focus:outline-none focus:border-indigo-500" />
              <input v-model="editForm.email" class="text-sm text-slate-500 w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 mb-4 focus:outline-none focus:border-indigo-500" />
            </template>
            <template v-else>
              <h3 class="text-xl font-black text-slate-800">{{ currentUser?.name }}</h3>
              <p class="text-sm text-slate-500">{{ currentUser?.email }}</p>
            </template>
            
            <span class="inline-flex px-3 py-1 bg-indigo-50 text-indigo-600 rounded-full text-[10px] font-black uppercase tracking-widest mt-2">
              {{ currentUser?.role }}
            </span>
          </div>
        </div>

        <!-- Contact Info -->
        <div class="glass-card-static p-6">
          <h4 class="text-sm font-black text-slate-800 uppercase tracking-widest mb-4">Contact Information</h4>
          <div class="space-y-3">
            <div class="flex items-center gap-3 text-sm">
              <Mail class="w-4 h-4 text-slate-400" />
              <template v-if="isEditing">
                <input v-model="editForm.email" class="flex-1 bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 focus:outline-none focus:border-indigo-500" />
              </template>
              <span v-else class="text-slate-600">{{ currentUser?.email }}</span>
            </div>
            <div class="flex items-center gap-3 text-sm">
              <Phone class="w-4 h-4 text-slate-400" />
              <template v-if="isEditing">
                <input v-model="editForm.phone" placeholder="Add phone number" class="flex-1 bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 focus:outline-none focus:border-indigo-500" />
              </template>
              <span v-else class="text-slate-400">Not provided</span>
            </div>
            <div class="flex items-center gap-3 text-sm">
              <MapPin class="w-4 h-4 text-slate-400" />
              <template v-if="isEditing">
                <input v-model="editForm.address" placeholder="Add address" class="flex-1 bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 focus:outline-none focus:border-indigo-500" />
              </template>
              <span v-else class="text-slate-400">Not provided</span>
            </div>
            <div class="flex items-center gap-3 text-sm">
              <Calendar class="w-4 h-4 text-slate-400" />
              <span class="text-slate-600">Joined Sept 2021</span>
            </div>
          </div>
        </div>

        <!-- Bio -->
        <div class="glass-card-static p-6">
          <h4 class="text-sm font-black text-slate-800 uppercase tracking-widest mb-4">About</h4>
          <template v-if="isEditing">
            <textarea v-model="editForm.bio" rows="4" placeholder="Tell us about yourself..." class="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 focus:outline-none focus:border-indigo-500 text-sm resize-none"></textarea>
          </template>
          <p v-else class="text-sm text-slate-500 leading-relaxed">No bio added yet. Click "Edit Profile" to add one.</p>
        </div>
      </div>

      <!-- Role-Specific Content -->
      <div class="space-y-8">
        <!-- ADMIN Profile -->
        <template v-if="isAdmin">
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div class="glass-card-static p-6 text-center">
              <div class="w-12 h-12 bg-indigo-50 rounded-xl flex items-center justify-center mx-auto mb-3">
                <Users class="w-6 h-6 text-indigo-600" />
              </div>
              <p class="text-3xl font-black text-slate-800">1,284</p>
              <p class="text-xs text-slate-400 uppercase tracking-widest mt-1">Total Students</p>
            </div>
            <div class="glass-card-static p-6 text-center">
              <div class="w-12 h-12 bg-emerald-50 rounded-xl flex items-center justify-center mx-auto mb-3">
                <BookOpen class="w-6 h-6 text-emerald-600" />
              </div>
              <p class="text-3xl font-black text-slate-800">84</p>
              <p class="text-xs text-slate-400 uppercase tracking-widest mt-1">Teachers</p>
            </div>
            <div class="glass-card-static p-6 text-center">
              <div class="w-12 h-12 bg-amber-50 rounded-xl flex items-center justify-center mx-auto mb-3">
                <Shield class="w-6 h-6 text-amber-600" />
              </div>
              <p class="text-3xl font-black text-slate-800">99.9%</p>
              <p class="text-xs text-slate-400 uppercase tracking-widest mt-1">Uptime</p>
            </div>
          </div>

          <div class="glass-card-static p-6">
            <h3 class="text-lg font-black text-slate-800 tracking-tight mb-6">System Permissions</h3>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div v-for="perm in ['Manage Students', 'Manage Teachers', 'View Reports', 'Manage Finances', 'System Settings', 'User Roles', 'Bus Management', 'Curriculum']" :key="perm" class="flex items-center gap-3 p-3 bg-slate-50 rounded-xl">
                <div class="w-2 h-2 rounded-full bg-emerald-500"></div>
                <span class="text-sm font-medium text-slate-700">{{ perm }}</span>
              </div>
            </div>
          </div>

          <div class="glass-card-static p-6">
            <h3 class="text-lg font-black text-slate-800 tracking-tight mb-6">Recent Activity</h3>
            <div class="space-y-3">
              <div v-for="activity in [
                { action: 'Updated system settings', time: '2 hours ago', icon: Shield },
                { action: 'Added new teacher: Dr. Sarah Ahmed', time: 'Yesterday', icon: Users },
                { action: 'Generated Term 2 reports', time: '3 days ago', icon: FileText },
                { action: 'Approved bus route changes', time: '1 week ago', icon: MapPin },
              ]" :key="activity.action" class="flex items-center gap-4 p-4 bg-slate-50/50 rounded-2xl border border-slate-100">
                <div class="w-10 h-10 bg-indigo-50 rounded-xl flex items-center justify-center text-indigo-600">
                  <component :is="activity.icon" class="w-5 h-5" />
                </div>
                <div class="flex-1">
                  <p class="text-sm font-bold text-slate-800">{{ activity.action }}</p>
                  <p class="text-xs text-slate-500">{{ activity.time }}</p>
                </div>
              </div>
            </div>
          </div>
        </template>

        <!-- TEACHER Profile -->
        <template v-if="isTeacher">
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div class="glass-card-static p-6 text-center">
              <div class="w-12 h-12 bg-indigo-50 rounded-xl flex items-center justify-center mx-auto mb-3">
                <BookOpen class="w-6 h-6 text-indigo-600" />
              </div>
              <p class="text-3xl font-black text-slate-800">{{ myClasses.length }}</p>
              <p class="text-xs text-slate-400 uppercase tracking-widest mt-1">My Classes</p>
            </div>
            <div class="glass-card-static p-6 text-center">
              <div class="w-12 h-12 bg-emerald-50 rounded-xl flex items-center justify-center mx-auto mb-3">
                <Users class="w-6 h-6 text-emerald-600" />
              </div>
              <p class="text-3xl font-black text-slate-800">{{ myStudentCount }}</p>
              <p class="text-xs text-slate-400 uppercase tracking-widest mt-1">Students</p>
            </div>
            <div class="glass-card-static p-6 text-center">
              <div class="w-12 h-12 bg-amber-50 rounded-xl flex items-center justify-center mx-auto mb-3">
                <Award class="w-6 h-6 text-amber-600" />
              </div>
              <p class="text-3xl font-black text-slate-800">4.8</p>
              <p class="text-xs text-slate-400 uppercase tracking-widest mt-1">Rating</p>
            </div>
          </div>

          <div class="glass-card-static p-6">
            <h3 class="text-lg font-black text-slate-800 tracking-tight mb-6">Subjects & Classes</h3>
            <div class="space-y-4">
              <div v-for="cls in myClasses" :key="cls.id" class="p-5 bg-slate-50/50 rounded-2xl border border-slate-100">
                <div class="flex items-center justify-between mb-3">
                  <h4 class="font-bold text-slate-800">{{ cls.name }}</h4>
                  <span class="text-xs font-bold text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full">{{ cls.grade }}</span>
                </div>
                <div class="flex items-center gap-4 text-xs text-slate-500">
                  <span class="flex items-center gap-1"><MapPin class="w-3 h-3" /> {{ cls.room }}</span>
                  <span class="flex items-center gap-1"><Users class="w-3 h-3" /> {{ cls.studentIds.length }} students</span>
                </div>
              </div>
            </div>
          </div>

          <div class="glass-card-static p-6">
            <h3 class="text-lg font-black text-slate-800 tracking-tight mb-6">Professional Info</h3>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div class="p-4 bg-slate-50 rounded-xl">
                <p class="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Department</p>
                <p class="text-sm font-bold text-slate-800">Science & Mathematics</p>
              </div>
              <div class="p-4 bg-slate-50 rounded-xl">
                <p class="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Experience</p>
                <p class="text-sm font-bold text-slate-800">12 years</p>
              </div>
              <div class="p-4 bg-slate-50 rounded-xl">
                <p class="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Education</p>
                <p class="text-sm font-bold text-slate-800">Ph.D. in Physics</p>
              </div>
              <div class="p-4 bg-slate-50 rounded-xl">
                <p class="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Specialization</p>
                <p class="text-sm font-bold text-slate-800">Theoretical Physics</p>
              </div>
            </div>
          </div>
        </template>

        <!-- STUDENT Profile -->
        <template v-if="isStudent">
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div class="glass-card-static p-6 text-center">
              <div class="w-12 h-12 bg-indigo-50 rounded-xl flex items-center justify-center mx-auto mb-3">
                <TrendingUp class="w-6 h-6 text-indigo-600" />
              </div>
              <p class="text-3xl font-black text-slate-800">{{ studentProfile?.performanceScore ? (studentProfile.performanceScore / 25).toFixed(2) : '3.85' }}</p>
              <p class="text-xs text-slate-400 uppercase tracking-widest mt-1">GPA</p>
            </div>
            <div class="glass-card-static p-6 text-center">
              <div class="w-12 h-12 bg-emerald-50 rounded-xl flex items-center justify-center mx-auto mb-3">
                <Clock class="w-6 h-6 text-emerald-600" />
              </div>
              <p class="text-3xl font-black text-slate-800">{{ studentProfile?.attendanceRate }}%</p>
              <p class="text-xs text-slate-400 uppercase tracking-widest mt-1">Attendance</p>
            </div>
            <div class="glass-card-static p-6 text-center">
              <div class="w-12 h-12 bg-amber-50 rounded-xl flex items-center justify-center mx-auto mb-3">
                <Award class="w-6 h-6 text-amber-600" />
              </div>
              <p class="text-3xl font-black text-slate-800">{{ studentProfile?.behaviorPoints || 0 }}</p>
              <p class="text-xs text-slate-400 uppercase tracking-widest mt-1">Points</p>
            </div>
          </div>

          <div class="glass-card-static p-6">
            <h3 class="text-lg font-black text-slate-800 tracking-tight mb-6">Recent Grades</h3>
            <div class="space-y-3">
              <div v-for="grade in recentGrades" :key="grade.subject" class="flex items-center justify-between p-4 bg-slate-50/50 rounded-2xl border border-slate-100">
                <div>
                  <h4 class="font-bold text-slate-800">{{ grade.subject }}</h4>
                  <p class="text-xs text-slate-500">{{ grade.date }}</p>
                </div>
                <div class="flex items-center gap-4">
                  <span class="text-sm font-bold text-slate-600">{{ grade.score }}%</span>
                  <span :class="['text-xs font-black uppercase px-3 py-1.5 rounded-lg', getGradeColor(grade.grade)]">
                    {{ grade.grade }}
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div class="glass-card-static p-6">
            <h3 class="text-lg font-black text-slate-800 tracking-tight mb-6">Enrollment Info</h3>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div class="p-4 bg-slate-50 rounded-xl">
                <p class="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Grade</p>
                <p class="text-sm font-bold text-slate-800">{{ studentProfile?.grade }}</p>
              </div>
              <div class="p-4 bg-slate-50 rounded-xl">
                <p class="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Section</p>
                <p class="text-sm font-bold text-slate-800">{{ studentProfile?.section }}</p>
              </div>
              <div class="p-4 bg-slate-50 rounded-xl">
                <p class="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Enrollment ID</p>
                <p class="text-sm font-bold text-slate-800">{{ studentProfile?.enrollmentId }}</p>
              </div>
              <div class="p-4 bg-slate-50 rounded-xl">
                <p class="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Academic Year</p>
                <p class="text-sm font-bold text-slate-800">2023/24</p>
              </div>
            </div>
          </div>
        </template>

        <!-- PARENT Profile -->
        <template v-if="isParent">
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div class="glass-card-static p-6 text-center">
              <div class="w-12 h-12 bg-indigo-50 rounded-xl flex items-center justify-center mx-auto mb-3">
                <Users class="w-6 h-6 text-indigo-600" />
              </div>
              <p class="text-3xl font-black text-slate-800">2</p>
              <p class="text-xs text-slate-400 uppercase tracking-widest mt-1">Children</p>
            </div>
            <div class="glass-card-static p-6 text-center">
              <div class="w-12 h-12 bg-emerald-50 rounded-xl flex items-center justify-center mx-auto mb-3">
                <MessageSquare class="w-6 h-6 text-emerald-600" />
              </div>
              <p class="text-3xl font-black text-slate-800">12</p>
              <p class="text-xs text-slate-400 uppercase tracking-widest mt-1">Messages</p>
            </div>
            <div class="glass-card-static p-6 text-center">
              <div class="w-12 h-12 bg-amber-50 rounded-xl flex items-center justify-center mx-auto mb-3">
                <FileText class="w-6 h-6 text-amber-600" />
              </div>
              <p class="text-3xl font-black text-slate-800">$3,050</p>
              <p class="text-xs text-slate-400 uppercase tracking-widest mt-1">Pending Fees</p>
            </div>
          </div>

          <div class="glass-card-static p-6">
            <h3 class="text-lg font-black text-slate-800 tracking-tight mb-6">My Children</h3>
            <div class="space-y-4">
              <div v-for="child in ['Alexander Abernathy', 'Beatrice Bennett']" :key="child" class="flex items-center justify-between p-5 bg-slate-50/50 rounded-2xl border border-slate-100">
                <div class="flex items-center gap-4">
                  <div class="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center text-indigo-600 font-black">
                    {{ child.split(' ').map(n => n[0]).join('') }}
                  </div>
                  <div>
                    <h4 class="font-bold text-slate-800">{{ child }}</h4>
                    <p class="text-xs text-slate-500">Grade 10 • Section A</p>
                  </div>
                </div>
                <NuxtLink :to="`/progress`" class="text-xs font-bold text-accent hover:text-accent-hover uppercase tracking-widest">View Progress</NuxtLink>
              </div>
            </div>
          </div>

          <div class="glass-card-static p-6">
            <h3 class="text-lg font-black text-slate-800 tracking-tight mb-6">Parent Info</h3>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div class="p-4 bg-slate-50 rounded-xl">
                <p class="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Relationship</p>
                <p class="text-sm font-bold text-slate-800">Father</p>
              </div>
              <div class="p-4 bg-slate-50 rounded-xl">
                <p class="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Phone</p>
                <p class="text-sm font-bold text-slate-800">+1 (555) 012-0001</p>
              </div>
              <div class="p-4 bg-slate-50 rounded-xl">
                <p class="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Address</p>
                <p class="text-sm font-bold text-slate-800">123 Oak St, Beverly Hills</p>
              </div>
              <div class="p-4 bg-slate-50 rounded-xl">
                <p class="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Emergency Contact</p>
                <p class="text-sm font-bold text-slate-800">+1 (555) 012-0099</p>
              </div>
            </div>
          </div>
        </template>
      </div>
    </div>
  </div>
</template>
