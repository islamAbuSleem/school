<script setup lang="ts">
import { 
  ArrowLeft, 
  Mail, 
  Phone, 
  MapPin, 
  Calendar, 
  Award, 
  Clock, 
  FileText, 
  MessageSquare,
  ChevronRight,
  Download,
  ShieldCheck
} from 'lucide-vue-next'

const route = useRoute()
const studentId = computed(() => {
  const id = route.params.id
  return Array.isArray(id) ? id[0] : id
})

const activeTab = ref('Overview')
const tabs = ['Overview', 'Academic', 'Attendance', 'Behavioral']

const student = {
  name: 'Julian Thorne',
  id: studentId,
  email: 'j.thorne@academy.edu',
  phone: '+1 (555) 012-9844',
  address: '1288 Oakwood Dr, Beverly Hills, CA 90210',
  dob: 'March 12, 2008',
  grade: 'Grade 12-A',
  gpa: '3.94',
  attendance: '98.4%',
  avatar: 'https://ui-avatars.com/api/?name=Julian+Thorne&background=6366F1&color=fff',
  status: 'ACTIVE',
  joinedDate: 'Sept 2021',
  parents: [
    { name: 'Marcus Thorne', relationship: 'Father', phone: '+1 (555) 012-9800', email: 'm.thorne@corp.com' },
    { name: 'Sarah Thorne', relationship: 'Mother', phone: '+1 (555) 012-9801', email: 's.thorne@design.com' }
  ]
}

const { success } = useToast()
const downloadReport = () => {
  success('Report Generated', `Annual progress report for ${student.name} is ready for download.`)
}
</script>

<template>
  <div class="max-w-[1600px] mx-auto pb-16 px-4 md:px-10">
    <!-- Back Button & Actions -->
    <div class="flex items-center justify-between mb-8">
      <NuxtLink to="/students" class="flex items-center text-sm font-bold text-slate-400 hover:text-accent transition-colors group">
        <ArrowLeft class="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
        Back to Student Directory
      </NuxtLink>
      
      <div class="flex items-center gap-3">
        <button class="btn-secondary px-4 py-2 flex items-center text-xs">
          <MessageSquare class="w-4 h-4 mr-2" />
          Contact Parent
        </button>
        <button @click="downloadReport" class="btn-primary px-4 py-2 flex items-center text-xs">
          <Download class="w-4 h-4 mr-2" />
          Export Profile
        </button>
      </div>
    </div>

    <!-- Profile Header Card -->
    <div class="glass-card-static p-8 mb-8 relative overflow-hidden">
      <div class="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
      
      <div class="flex flex-col md:flex-row items-center md:items-start gap-8 relative z-10">
        <div class="relative">
          <img :src="student.avatar" class="w-32 h-32 rounded-3xl object-cover ring-4 ring-white shadow-xl shadow-accent/20" />
          <div class="absolute -bottom-2 -right-2 bg-emerald-500 text-white p-1.5 rounded-xl border-4 border-white">
            <ShieldCheck class="w-4 h-4" />
          </div>
        </div>
        
        <div class="flex-1 text-center md:text-left">
          <div class="flex flex-col md:flex-row md:items-center gap-4 mb-4">
            <h1 class="text-3xl font-black text-slate-800 tracking-tight">{{ student.name }}</h1>
            <span class="inline-flex px-4 py-1.5 bg-emerald-100 text-emerald-600 rounded-full text-[10px] font-black uppercase tracking-widest self-center md:self-auto">
              {{ student.status }}
            </span>
          </div>
          
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div class="flex items-center gap-3">
              <div class="p-2.5 bg-slate-50 rounded-xl text-slate-400"><Mail class="w-4 h-4" /></div>
              <div><p class="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-0.5">Email</p><p class="text-sm font-semibold text-slate-700">{{ student.email }}</p></div>
            </div>
            <div class="flex items-center gap-3">
              <div class="p-2.5 bg-slate-50 rounded-xl text-slate-400"><Phone class="w-4 h-4" /></div>
              <div><p class="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-0.5">Phone</p><p class="text-sm font-semibold text-slate-700">{{ student.phone }}</p></div>
            </div>
            <div class="flex items-center gap-3">
              <div class="p-2.5 bg-slate-50 rounded-xl text-slate-400"><Calendar class="w-4 h-4" /></div>
              <div><p class="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-0.5">Joined</p><p class="text-sm font-semibold text-slate-700">{{ student.joinedDate }}</p></div>
            </div>
            <div class="flex items-center gap-3">
              <div class="p-2.5 bg-slate-50 rounded-xl text-slate-400"><MapPin class="w-4 h-4" /></div>
              <div><p class="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-0.5">Student ID</p><p class="text-sm font-semibold text-slate-700">{{ student.id }}</p></div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Profile Navigation -->
    <div class="flex items-center gap-8 border-b border-slate-200 mb-8">
      <button 
        v-for="tab in tabs" 
        :key="tab"
        @click="activeTab = tab"
        class="pb-4 text-sm font-bold transition-all relative"
        :class="activeTab === tab ? 'text-accent' : 'text-slate-400 hover:text-slate-600'"
      >
        {{ tab }}
        <div v-if="activeTab === tab" class="absolute bottom-0 left-0 w-full h-1 bg-accent rounded-t-full shadow-[0_-2px_8px_rgba(99,102,241,0.4)]"></div>
      </button>
    </div>

    <!-- Tab Content -->
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
      <!-- Main Content Area -->
      <div class="lg:col-span-2 space-y-8">
        <template v-if="activeTab === 'Overview'">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div class="glass-card-static p-6 border-l-4 border-l-indigo-500">
              <div class="flex items-center justify-between mb-6">
                <h3 class="text-lg font-black text-slate-800 tracking-tight">Academic Pulse</h3>
                <div class="w-12 h-12 bg-indigo-50 rounded-2xl flex items-center justify-center text-indigo-600">
                  <Award class="w-6 h-6" />
                </div>
              </div>
              <div class="flex items-end gap-2 mb-2">
                <span class="text-4xl font-black text-slate-800">{{ student.gpa }}</span>
                <span class="text-sm font-bold text-slate-400 mb-1.5 uppercase tracking-widest">GPA</span>
              </div>
              <p class="text-xs text-slate-500 leading-relaxed mb-6">Julian ranks in the top 5% of his cohort with exceptional performance in STEM subjects.</p>
              <div class="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                <div class="h-full bg-indigo-500 rounded-full w-[94%] shadow-[0_0_12px_rgba(99,102,241,0.3)]"></div>
              </div>
            </div>

            <div class="glass-card-static p-6 border-l-4 border-l-emerald-500">
              <div class="flex items-center justify-between mb-6">
                <h3 class="text-lg font-black text-slate-800 tracking-tight">Attendance Rate</h3>
                <div class="w-12 h-12 bg-emerald-50 rounded-2xl flex items-center justify-center text-emerald-600">
                  <Clock class="w-6 h-6" />
                </div>
              </div>
              <div class="flex items-end gap-2 mb-2">
                <span class="text-4xl font-black text-slate-800">{{ student.attendance }}</span>
                <span class="text-sm font-bold text-slate-400 mb-1.5 uppercase tracking-widest">Present</span>
              </div>
              <p class="text-xs text-slate-500 leading-relaxed mb-6">Consistently punctual. Only 2 excused absences recorded during this semester.</p>
              <div class="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                <div class="h-full bg-emerald-500 rounded-full w-[98%] shadow-[0_0_12px_rgba(16,185,129,0.3)]"></div>
              </div>
            </div>
          </div>

          <div class="glass-card-static p-6">
            <h3 class="text-lg font-black text-slate-800 tracking-tight mb-6 flex items-center gap-2">
              <FileText class="w-5 h-5 text-accent" />
              Recent Evaluations
            </h3>
            <div class="space-y-4">
              <div v-for="i in 3" :key="i" class="flex items-center justify-between p-4 bg-slate-50/50 rounded-2xl border border-slate-100 hover:border-accent/20 transition-all cursor-pointer group">
                <div class="flex items-center gap-4">
                  <div class="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center font-black text-slate-400 text-xs">
                    PDF
                  </div>
                  <div>
                    <h4 class="text-sm font-bold text-slate-800 group-hover:text-accent transition-colors">Semester {{ 4-i }} Comprehensive Assessment</h4>
                    <p class="text-[10px] text-slate-400 uppercase tracking-widest mt-0.5">Submitted Jan {{ 20-i }}, 2024</p>
                  </div>
                </div>
                <ChevronRight class="w-5 h-5 text-slate-300 group-hover:text-accent transition-colors" />
              </div>
            </div>
          </div>
        </template>
        
        <template v-else-if="activeTab === 'Academic'">
          <div class="space-y-8">
            <StudentAcademicOverview :student-id="studentId" />
            <StudentGradesTable :student-id="studentId" />
            <StudentTeacherComments :student-id="studentId" />
          </div>
        </template>
        
        <template v-else-if="activeTab === 'Attendance'">
          <div class="space-y-8">
            <StudentAttendanceStats :student-id="studentId" />
            <StudentAttendanceDetail :student-id="studentId" />
          </div>
        </template>
        
        <template v-else-if="activeTab === 'Behavioral'">
          <div class="space-y-8">
            <StudentBehaviorSummary :student-id="studentId" />
            <StudentBehaviorHistory :student-id="studentId" />
          </div>
        </template>
      </div>

      <!-- Sidebar -->
      <div class="space-y-8">
        <div class="glass-card-static p-6">
          <h3 class="text-lg font-black text-slate-800 tracking-tight mb-6">Parental Information</h3>
          <div class="space-y-6">
            <div v-for="parent in student.parents" :key="parent.name" class="p-4 bg-slate-50/50 rounded-2xl border border-slate-100">
              <div class="flex items-center justify-between mb-3">
                <p class="text-xs font-black text-accent uppercase tracking-[0.2em]">{{ parent.relationship }}</p>
                <div class="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)]"></div>
              </div>
              <h4 class="font-bold text-slate-800 mb-3">{{ parent.name }}</h4>
              <div class="space-y-2">
                <div class="flex items-center gap-2 text-xs text-slate-500">
                  <Phone class="w-3.5 h-3.5" />
                  {{ parent.phone }}
                </div>
                <div class="flex items-center gap-2 text-xs text-slate-500">
                  <Mail class="w-3.5 h-3.5" />
                  {{ parent.email }}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="glass-card-static p-6 bg-primary text-white relative overflow-hidden">
          <div class="absolute -bottom-4 -right-4 w-32 h-32 bg-white/5 rounded-full blur-2xl"></div>
          <h3 class="text-lg font-black tracking-tight mb-4 relative z-10">Administrative Note</h3>
          <p class="text-xs text-slate-400 leading-relaxed mb-6 relative z-10">
            Candidate for the Academic Excellence Award 2024. Recommended for advanced placement in Honors Mathematics.
          </p>
          <div class="p-3 bg-white/5 rounded-xl border border-white/10 relative z-10">
            <p class="text-[9px] font-black uppercase tracking-[0.3em] text-white/40 mb-1">Assigned Counselor</p>
            <p class="text-sm font-bold">Dr. Emily Sterling</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
