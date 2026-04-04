<script setup lang="ts">
import { TrendingUp, Award, BookOpen, FileText, Plus, CheckCircle2, AlertCircle } from 'lucide-vue-next'

const { currentUser, teacherProfile } = useAuth()
const { classes, students } = useData()

const myClasses = computed(() => {
  const profile = teacherProfile.value
  if (!profile) return []
  return classes.value.filter(c => c.teacherId === profile.id)
})

const selectedClass = ref('')
const selectedType = ref('Exam')
const gradeEntries = ref<any[]>([])

const selectedClassStudents = computed(() => {
  if (!selectedClass.value) return []
  const cls = myClasses.value.find(c => c.id === selectedClass.value)
  if (!cls) return []
  return students.value.filter(s => cls.studentIds.includes(s.id))
})

const initGradeEntries = () => {
  gradeEntries.value = selectedClassStudents.value.map(s => ({
    studentId: s.id,
    studentName: s.name,
    score: '',
    grade: '',
    comment: ''
  }))
}

const calculateGrade = (score: number): string => {
  if (score >= 95) return 'A+'
  if (score >= 90) return 'A'
  if (score >= 85) return 'A-'
  if (score >= 80) return 'B+'
  if (score >= 75) return 'B'
  if (score >= 70) return 'B-'
  if (score >= 65) return 'C+'
  if (score >= 60) return 'C'
  if (score >= 55) return 'C-'
  if (score >= 50) return 'D'
  return 'F'
}

const getGradeColor = (grade: string) => {
  if (grade.startsWith('A')) return 'text-emerald-600'
  if (grade.startsWith('B')) return 'text-blue-600'
  if (grade.startsWith('C')) return 'text-amber-600'
  return 'text-rose-600'
}

const handleScoreInput = (entry: any, value: string) => {
  entry.score = value
  const num = parseFloat(value)
  if (!isNaN(num) && num >= 0 && num <= 100) {
    entry.grade = calculateGrade(num)
  } else {
    entry.grade = ''
  }
}

const submitGrades = () => {
  console.log('Submitting grades:', gradeEntries.value)
}

watch(selectedClass, () => {
  initGradeEntries()
})
</script>

<template>
  <div class="max-w-[1600px] mx-auto pb-16 px-4 md:px-10">
    <div class="mb-8">
      <p class="text-xs font-semibold text-accent uppercase tracking-wider mb-2">Teacher Portal</p>
      <h2 class="page-title">Grade Entry</h2>
      <p class="text-slate-500 mt-2">Enter and manage grades for your classes</p>
    </div>

    <div class="glass-card-static p-6 mb-8">
      <div class="flex flex-col md:flex-row md:items-end gap-4">
        <div class="flex-1">
          <label class="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1.5 block">Select Class</label>
          <select v-model="selectedClass" class="w-full bg-white border border-slate-200 text-sm font-medium text-slate-700 rounded-xl px-4 py-2.5">
            <option value="">Choose a class...</option>
            <option v-for="cls in myClasses" :key="cls.id" :value="cls.id">{{ cls.name }} - {{ cls.grade }}</option>
          </select>
        </div>
        <div>
          <label class="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1.5 block">Assessment Type</label>
          <select v-model="selectedType" class="bg-white border border-slate-200 text-sm font-medium text-slate-700 rounded-xl px-4 py-2.5">
            <option>Exam</option>
            <option>Quiz</option>
            <option>Assignment</option>
            <option>Project</option>
            <option>Lab</option>
          </select>
        </div>
        <button @click="submitGrades" :disabled="!selectedClass" class="btn-primary px-6 py-2.5 disabled:opacity-50 disabled:cursor-not-allowed">
          <CheckCircle2 class="w-4 h-4 mr-2" />
          Submit Grades
        </button>
      </div>
    </div>

    <div v-if="selectedClassStudents.length > 0" class="glass-card-static overflow-hidden">
      <div class="grid grid-cols-12 gap-4 items-center px-6 py-4 bg-slate-50/80 border-b border-slate-100">
        <div class="col-span-4 text-[10px] font-black text-slate-400 uppercase tracking-widest">Student</div>
        <div class="col-span-2 text-[10px] font-black text-slate-400 uppercase tracking-widest">Score (0-100)</div>
        <div class="col-span-2 text-[10px] font-black text-slate-400 uppercase tracking-widest">Grade</div>
        <div class="col-span-4 text-[10px] font-black text-slate-400 uppercase tracking-widest">Comment</div>
      </div>

      <div v-for="entry in gradeEntries" :key="entry.studentId" class="grid grid-cols-12 gap-4 items-center px-6 py-4 border-b border-slate-50 hover:bg-slate-50/50 transition-colors">
        <div class="col-span-4 flex items-center gap-3">
          <img :src="`https://ui-avatars.com/api/?name=${entry.studentName}&background=6366F1&color=fff`" class="w-10 h-10 rounded-xl object-cover" />
          <span class="font-bold text-slate-800">{{ entry.studentName }}</span>
        </div>
        <div class="col-span-2">
          <input 
            v-model="entry.score" 
            @input="handleScoreInput(entry, entry.score)"
            type="number" 
            min="0" 
            max="100" 
            placeholder="0-100"
            class="w-full bg-white border border-slate-200 text-sm font-medium text-slate-700 rounded-xl px-4 py-2.5 focus:border-indigo-500 focus:outline-none"
          />
        </div>
        <div class="col-span-2">
          <span v-if="entry.grade" :class="['text-lg font-black', getGradeColor(entry.grade)]">{{ entry.grade }}</span>
          <span v-else class="text-sm text-slate-300">--</span>
        </div>
        <div class="col-span-4">
          <input 
            v-model="entry.comment" 
            type="text" 
            placeholder="Optional comment..."
            class="w-full bg-white border border-slate-200 text-sm text-slate-700 rounded-xl px-4 py-2.5 focus:border-indigo-500 focus:outline-none"
          />
        </div>
      </div>
    </div>

    <div v-else-if="selectedClass" class="glass-card-static p-12 text-center">
      <Users class="w-12 h-12 text-slate-300 mx-auto mb-4" />
      <h3 class="text-xl font-black text-slate-800 tracking-tight">No Students Found</h3>
      <p class="text-sm text-slate-500 mt-2">This class has no enrolled students</p>
    </div>

    <div v-else class="glass-card-static p-12 text-center">
      <FileText class="w-12 h-12 text-slate-300 mx-auto mb-4" />
      <h3 class="text-xl font-black text-slate-800 tracking-tight">Select a Class</h3>
      <p class="text-sm text-slate-500 mt-2">Choose a class above to start entering grades</p>
    </div>
  </div>
</template>
