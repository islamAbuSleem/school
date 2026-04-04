<script setup lang="ts">
import { UserPlus, Search, MoreHorizontal, Mail, Phone, BookOpen, Users, X, Check, AlertCircle } from 'lucide-vue-next'

const { teachers, classes } = useData()
const { success, error: showError } = useToast()

const searchQuery = ref('')
const showAddModal = ref(false)
const editingTeacher = ref<any>(null)

const newTeacher = ref({
  name: '',
  email: '',
  subjects: [] as string[],
  phone: ''
})

const availableSubjects = ['Mathematics', 'Physics', 'Chemistry', 'Biology', 'English', 'History', 'Geography', 'Art', 'Music', 'Physical Education', 'Computer Science', 'Economics']

const filteredTeachers = computed(() => {
  if (!searchQuery.value) return teachers.value
  const q = searchQuery.value.toLowerCase()
  return teachers.value.filter(t => 
    t.name.toLowerCase().includes(q) || 
    t.email.toLowerCase().includes(q) ||
    t.subjects.some(s => s.toLowerCase().includes(q))
  )
})

const getTeacherClasses = (teacherId: string) => {
  return classes.value.filter(c => c.teacherId === teacherId)
}

const getStudentCount = (teacherId: string) => {
  const teacherClasses = classes.value.filter(c => c.teacherId === teacherId)
  const studentIds = new Set<string>()
  teacherClasses.forEach(c => c.studentIds.forEach(id => studentIds.add(id)))
  return studentIds.size
}

const toggleSubject = (subject: string) => {
  const idx = newTeacher.value.subjects.indexOf(subject)
  if (idx > -1) {
    newTeacher.value.subjects.splice(idx, 1)
  } else {
    newTeacher.value.subjects.push(subject)
  }
}

const addTeacher = () => {
  if (!newTeacher.value.name || !newTeacher.value.email) {
    showError('Missing Fields', 'Name and email are required')
    return
  }
  const initials = newTeacher.value.name.split(' ').map((n: string) => n[0]).join('').toUpperCase().slice(0, 2)
  teachers.value.push({
    id: `T${String(teachers.value.length + 1).padStart(3, '0')}`,
    name: newTeacher.value.name,
    initials,
    role: 'teacher',
    email: newTeacher.value.email,
    subjects: [...newTeacher.value.subjects],
    classes: []
  })
  success('Teacher Added', `${newTeacher.value.name} has been added successfully`)
  newTeacher.value = { name: '', email: '', subjects: [], phone: '' }
  showAddModal.value = false
}

const deleteTeacher = (id: string, name: string) => {
  const idx = teachers.value.findIndex(t => t.id === id)
  if (idx > -1) {
    teachers.value.splice(idx, 1)
    success('Teacher Removed', `${name} has been removed`)
  }
}
</script>

<template>
  <div class="max-w-[1600px] mx-auto pb-16 px-4 md:px-10">
    <div class="flex flex-col lg:flex-row lg:items-center justify-between mb-8 gap-4">
      <div>
        <p class="text-xs font-semibold text-accent uppercase tracking-wider mb-2">Admin Console</p>
        <h2 class="page-title">Teacher Directory</h2>
        <p class="text-slate-500 mt-2">Manage teaching staff and assignments</p>
      </div>
      <button @click="showAddModal = true" class="btn-primary flex items-center self-start lg:self-auto">
        <UserPlus class="w-4 h-4 mr-2" />
        Add Teacher
      </button>
    </div>

    <div class="glass-card-static p-4 mb-8">
      <div class="relative">
        <Search class="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
        <input 
          v-model="searchQuery" 
          type="text" 
          placeholder="Search teachers by name, email, or subject..." 
          class="w-full bg-slate-50 border border-slate-200 text-sm rounded-xl pl-12 pr-4 py-3 focus:outline-none focus:border-indigo-500"
        />
      </div>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div v-for="teacher in filteredTeachers" :key="teacher.id" class="glass-card-static overflow-hidden group">
        <div class="bg-gradient-to-r from-indigo-500 to-purple-600 p-6 text-white relative">
          <div class="flex items-center gap-4">
            <img :src="`https://ui-avatars.com/api/?name=${teacher.name}&background=fff&color=6366F1`" class="w-16 h-16 rounded-2xl object-cover" />
            <div>
              <h3 class="text-lg font-black">{{ teacher.name }}</h3>
              <p class="text-sm text-indigo-100">{{ teacher.email }}</p>
            </div>
          </div>
          <button @click="deleteTeacher(teacher.id, teacher.name)" class="absolute top-4 right-4 p-2 bg-white/10 rounded-lg hover:bg-white/20 transition-colors opacity-0 group-hover:opacity-100">
            <X class="w-4 h-4" />
          </button>
        </div>
        <div class="p-6">
          <div class="grid grid-cols-2 gap-4 mb-4">
            <div class="text-center p-3 bg-slate-50 rounded-xl">
              <div class="flex items-center justify-center gap-1 mb-1">
                <BookOpen class="w-4 h-4 text-indigo-600" />
                <p class="text-xl font-black text-slate-800">{{ teacher.subjects.length }}</p>
              </div>
              <p class="text-[10px] text-slate-400 uppercase tracking-widest">Subjects</p>
            </div>
            <div class="text-center p-3 bg-slate-50 rounded-xl">
              <div class="flex items-center justify-center gap-1 mb-1">
                <Users class="w-4 h-4 text-emerald-600" />
                <p class="text-xl font-black text-slate-800">{{ getStudentCount(teacher.id) }}</p>
              </div>
              <p class="text-[10px] text-slate-400 uppercase tracking-widest">Students</p>
            </div>
          </div>
          <div class="flex flex-wrap gap-2 mb-4">
            <span v-for="subject in teacher.subjects" :key="subject" class="text-[10px] font-bold text-indigo-600 bg-indigo-50 px-2 py-1 rounded-lg uppercase">
              {{ subject }}
            </span>
          </div>
          <div class="space-y-2">
            <div v-for="cls in getTeacherClasses(teacher.id)" :key="cls.id" class="flex items-center justify-between p-2 bg-slate-50 rounded-lg">
              <span class="text-xs font-bold text-slate-700">{{ cls.name }}</span>
              <span class="text-[10px] text-slate-400">{{ cls.room }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Add Teacher Modal -->
    <Transition
      enter-active-class="transition duration-300 ease-out"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition duration-200 ease-in"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div v-if="showAddModal" class="fixed inset-0 z-[200] flex items-center justify-center px-4">
        <div @click="showAddModal = false" class="absolute inset-0 bg-slate-900/40 backdrop-blur-sm"></div>
        <div class="bg-white rounded-3xl shadow-2xl w-full max-w-lg overflow-hidden relative">
          <div class="p-6 border-b border-slate-100 flex items-center justify-between">
            <div>
              <h3 class="text-lg font-bold text-slate-800">Add New Teacher</h3>
              <p class="text-xs text-slate-500">Fill in the teacher details</p>
            </div>
            <button @click="showAddModal = false" class="p-2 hover:bg-slate-100 rounded-xl transition-colors">
              <X class="w-5 h-5 text-slate-400" />
            </button>
          </div>
          <div class="p-6 space-y-4">
            <div>
              <label class="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1.5 block">Full Name</label>
              <input v-model="newTeacher.name" type="text" placeholder="e.g. Dr. Sarah Ahmed" class="input-glass w-full" />
            </div>
            <div>
              <label class="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1.5 block">Email</label>
              <input v-model="newTeacher.email" type="email" placeholder="e.g. s.ahmed@school.com" class="input-glass w-full" />
            </div>
            <div>
              <label class="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1.5 block">Subjects</label>
              <div class="flex flex-wrap gap-2 max-h-40 overflow-y-auto p-2 bg-slate-50 rounded-xl">
                <button 
                  v-for="subject in availableSubjects" 
                  :key="subject"
                  @click="toggleSubject(subject)"
                  class="text-[10px] font-bold px-3 py-1.5 rounded-lg border transition-all uppercase"
                  :class="newTeacher.subjects.includes(subject) ? 'bg-indigo-100 text-indigo-700 border-indigo-200' : 'bg-white text-slate-500 border-slate-200 hover:border-indigo-200'"
                >
                  {{ subject }}
                </button>
              </div>
            </div>
          </div>
          <div class="p-6 bg-slate-50 flex items-center gap-3">
            <button @click="showAddModal = false" class="btn-secondary flex-1 py-2.5">Cancel</button>
            <button @click="addTeacher" class="btn-primary flex-1 py-2.5">Add Teacher</button>
          </div>
        </div>
      </div>
    </Transition>
  </div>
</template>
