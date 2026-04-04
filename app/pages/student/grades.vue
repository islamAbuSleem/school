<script setup lang="ts">
import { TrendingUp, Award, BookOpen, FileText } from 'lucide-vue-next'

const { currentUser, studentProfile } = useAuth()

const subjects = [
  { name: 'Mathematics', grade: 'A', score: 94, trend: 'up', teacher: 'Prof. James Wilson' },
  { name: 'Physics', grade: 'A-', score: 91, trend: 'up', teacher: 'Prof. James Wilson' },
  { name: 'English', grade: 'B+', score: 87, trend: 'stable', teacher: 'Ms. Emily Johnson' },
  { name: 'History', grade: 'A', score: 95, trend: 'up', teacher: 'Ms. Layla Hassan' },
]

const gradeHistory = [
  { term: 'Term 1', gpa: 3.65 },
  { term: 'Term 2', gpa: 3.72 },
  { term: 'Term 3', gpa: 3.85 },
  { term: 'Term 4', gpa: 3.94 },
]

const getGradeColor = (grade: string) => {
  if (grade.startsWith('A')) return 'bg-emerald-50 text-emerald-700 border-emerald-200'
  if (grade.startsWith('B')) return 'bg-blue-50 text-blue-700 border-blue-200'
  return 'bg-amber-50 text-amber-700 border-amber-200'
}
</script>

<template>
  <div class="max-w-[1600px] mx-auto pb-16 px-4 md:px-10">
    <div class="mb-8">
      <p class="text-xs font-semibold text-accent uppercase tracking-wider mb-2">Student Portal</p>
      <h2 class="page-title">My Grades</h2>
      <p class="text-slate-500 mt-2">Your academic performance across all subjects</p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
      <div class="glass-card-static p-6">
        <div class="flex items-center justify-between mb-6">
          <h3 class="text-lg font-black text-slate-800 tracking-tight">Current GPA</h3>
          <div class="w-12 h-12 bg-indigo-50 rounded-2xl flex items-center justify-center text-indigo-600">
            <Award class="w-6 h-6" />
          </div>
        </div>
        <div class="flex items-end gap-3 mb-4">
          <span class="text-5xl font-black text-slate-800">3.94</span>
          <span class="text-sm font-bold text-slate-400 mb-2 uppercase tracking-widest">/ 4.0</span>
        </div>
        <div class="flex items-center gap-2 text-emerald-600">
          <TrendingUp class="w-4 h-4" />
          <span class="text-xs font-bold uppercase tracking-widest">+0.22 from last term</span>
        </div>
      </div>

      <div class="glass-card-static p-6">
        <h3 class="text-lg font-black text-slate-800 tracking-tight mb-6">GPA Trend</h3>
        <div class="flex items-end justify-between h-32 px-2">
          <div v-for="item in gradeHistory" :key="item.term" class="flex flex-col items-center gap-2">
            <div class="w-full bg-emerald-100 rounded-t-lg relative" :style="{ height: `${(item.gpa / 4.0) * 100}%`, minHeight: '20px' }">
              <div class="absolute inset-0 bg-emerald-500 rounded-t-lg"></div>
            </div>
            <span class="text-[10px] font-bold text-slate-400">{{ item.gpa }}</span>
          </div>
        </div>
        <div class="flex justify-between mt-3">
          <span v-for="item in gradeHistory" :key="item.term" class="text-[9px] font-bold text-slate-400 uppercase">{{ item.term }}</span>
        </div>
      </div>
    </div>

    <div class="glass-card-static p-6">
      <h3 class="text-lg font-black text-slate-800 tracking-tight mb-6 flex items-center gap-2">
        <BookOpen class="w-5 h-5 text-accent" />
        Subject Grades
      </h3>
      <div class="space-y-4">
        <div v-for="subject in subjects" :key="subject.name" class="flex items-center justify-between p-5 bg-slate-50/50 rounded-2xl border border-slate-100">
          <div class="flex items-center gap-4">
            <div class="w-12 h-12 bg-indigo-50 rounded-xl flex items-center justify-center text-indigo-600">
              <BookOpen class="w-6 h-6" />
            </div>
            <div>
              <h4 class="font-bold text-slate-800">{{ subject.name }}</h4>
              <p class="text-xs text-slate-500">{{ subject.teacher }}</p>
            </div>
          </div>
          <div class="flex items-center gap-6">
            <div class="text-right">
              <p class="text-sm font-bold text-slate-600">{{ subject.score }}%</p>
            </div>
            <span :class="['text-xs font-black uppercase px-3 py-1.5 rounded-lg border', getGradeColor(subject.grade)]">
              {{ subject.grade }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
