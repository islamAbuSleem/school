<script setup lang="ts">
import { TrendingUp, TrendingDown, Award, BookOpen, Calculator, FlaskConical, Globe, PenTool } from 'lucide-vue-next'

const props = defineProps<{
  studentId?: string
}>()

const subjects = [
  { name: 'Mathematics', icon: Calculator, grade: 'A', score: 94, trend: 'up', color: 'text-indigo-600', bg: 'bg-indigo-50' },
  { name: 'Physics', icon: FlaskConical, grade: 'A-', score: 91, trend: 'up', color: 'text-blue-600', bg: 'bg-blue-50' },
  { name: 'English', icon: BookOpen, grade: 'B+', score: 87, trend: 'stable', color: 'text-emerald-600', bg: 'bg-emerald-50' },
  { name: 'History', icon: Globe, grade: 'A', score: 95, trend: 'up', color: 'text-amber-600', bg: 'bg-amber-50' },
  { name: 'Art', icon: PenTool, grade: 'A-', score: 92, trend: 'up', color: 'text-purple-600', bg: 'bg-purple-50' },
]

const gpaHistory = [
  { term: 'Term 1', gpa: 3.65 },
  { term: 'Term 2', gpa: 3.72 },
  { term: 'Term 3', gpa: 3.85 },
  { term: 'Term 4', gpa: 3.94 },
]

const maxGpa = 4.0
</script>

<template>
  <div class="space-y-8">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
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
        <div class="mt-6 h-3 bg-slate-100 rounded-full overflow-hidden">
          <div class="h-full bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full w-[98.5%] shadow-[0_0_12px_rgba(99,102,241,0.4)]"></div>
        </div>
      </div>

      <div class="glass-card-static p-6">
        <div class="flex items-center justify-between mb-6">
          <h3 class="text-lg font-black text-slate-800 tracking-tight">GPA Trend</h3>
          <div class="w-12 h-12 bg-emerald-50 rounded-2xl flex items-center justify-center text-emerald-600">
            <TrendingUp class="w-6 h-6" />
          </div>
        </div>
        <div class="flex items-end justify-between h-32 px-2">
          <div v-for="item in gpaHistory" :key="item.term" class="flex flex-col items-center gap-2">
            <div class="w-full bg-emerald-100 rounded-t-lg relative" :style="{ height: `${(item.gpa / maxGpa) * 100}%`, minHeight: '20px' }">
              <div class="absolute inset-0 bg-emerald-500 rounded-t-lg shadow-[0_0_8px_rgba(16,185,129,0.3)]"></div>
            </div>
            <span class="text-[10px] font-bold text-slate-400">{{ item.gpa }}</span>
          </div>
        </div>
        <div class="flex justify-between mt-3">
          <span v-for="item in gpaHistory" :key="item.term" class="text-[9px] font-bold text-slate-400 uppercase">{{ item.term }}</span>
        </div>
      </div>
    </div>

    <div class="glass-card-static p-6">
      <h3 class="text-lg font-black text-slate-800 tracking-tight mb-6 flex items-center gap-2">
        <BookOpen class="w-5 h-5 text-accent" />
        Subject Performance
      </h3>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <div v-for="subject in subjects" :key="subject.name" 
          class="p-5 rounded-2xl border border-slate-100 bg-white hover:border-indigo-200 hover:shadow-lg hover:shadow-indigo-500/10 transition-all group cursor-pointer"
        >
          <div class="flex items-center justify-between mb-4">
            <div :class="['w-10 h-10 rounded-xl flex items-center justify-center', subject.bg]">
              <component :is="subject.icon" class="w-5 h-5" :class="subject.color" />
            </div>
            <div class="flex items-center gap-1">
              <span class="text-xs font-black uppercase tracking-widest" :class="subject.color">{{ subject.grade }}</span>
              <TrendingUp v-if="subject.trend === 'up'" class="w-3 h-3 text-emerald-500" />
              <TrendingDown v-else-if="subject.trend === 'down'" class="w-3 h-3 text-rose-500" />
            </div>
          </div>
          <h4 class="font-bold text-slate-800 mb-2">{{ subject.name }}</h4>
          <div class="flex items-center gap-3">
            <div class="flex-1 h-2 bg-slate-100 rounded-full overflow-hidden">
              <div class="h-full rounded-full" :class="subject.color.replace('text-', 'bg-')" :style="{ width: `${subject.score}%` }"></div>
            </div>
            <span class="text-xs font-black text-slate-600">{{ subject.score }}%</span>
          </div>
        </div>
      </div>
    </div>

    <div class="glass-card-static p-6 bg-gradient-to-br from-indigo-50/50 to-purple-50/50">
      <h3 class="text-lg font-black text-slate-800 tracking-tight mb-6">Top Achievements</h3>
      <div class="space-y-4">
        <div class="flex items-center gap-4 p-4 bg-white rounded-2xl border border-indigo-100 shadow-sm">
          <div class="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center">
            <Award class="w-6 h-6 text-amber-600" />
          </div>
          <div class="flex-1">
            <h4 class="font-bold text-slate-800">Mathematics Excellence Award</h4>
            <p class="text-xs text-slate-500">Top 5% of the cohort • January 2024</p>
          </div>
          <span class="text-[10px] font-black text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full uppercase">Honor</span>
        </div>
        <div class="flex items-center gap-4 p-4 bg-white rounded-2xl border border-indigo-100 shadow-sm">
          <div class="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center">
            <BookOpen class="w-6 h-6 text-emerald-600" />
          </div>
          <div class="flex-1">
            <h4 class="font-bold text-slate-800">Perfect Attendance</h4>
            <p class="text-xs text-slate-500">Full semester attendance • December 2023</p>
          </div>
          <span class="text-[10px] font-black text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full uppercase">Achievement</span>
        </div>
      </div>
    </div>
  </div>
</template>
