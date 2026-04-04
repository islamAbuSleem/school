<script setup lang="ts">
import { FileText, Download, ChevronDown } from 'lucide-vue-next'

const props = defineProps<{
  studentId?: string
}>()

const selectedTerm = ref('All Terms')
const terms = ['All Terms', 'Term 1', 'Term 2', 'Term 3', 'Term 4']

const grades = [
  { id: 1, subject: 'Mathematics', term: 'Term 4', type: 'Exam', score: 94, grade: 'A', date: 'Jan 15, 2024' },
  { id: 2, subject: 'Mathematics', term: 'Term 4', type: 'Quiz', score: 91, grade: 'A-', date: 'Jan 10, 2024' },
  { id: 3, subject: 'Physics', term: 'Term 4', type: 'Lab', score: 95, grade: 'A', date: 'Jan 12, 2024' },
  { id: 4, subject: 'Physics', term: 'Term 4', type: 'Exam', score: 88, grade: 'B+', date: 'Jan 8, 2024' },
  { id: 5, subject: 'English', term: 'Term 4', type: 'Essay', score: 92, grade: 'A-', date: 'Jan 11, 2024' },
  { id: 6, subject: 'English', term: 'Term 4', type: 'Quiz', score: 85, grade: 'B', date: 'Jan 5, 2024' },
  { id: 7, subject: 'History', term: 'Term 4', type: 'Project', score: 96, grade: 'A', date: 'Jan 14, 2024' },
  { id: 8, subject: 'History', term: 'Term 4', type: 'Exam', score: 94, grade: 'A', date: 'Jan 3, 2024' },
  { id: 9, subject: 'Art', term: 'Term 4', type: 'Portfolio', score: 92, grade: 'A-', date: 'Jan 13, 2024' },
  { id: 10, subject: 'Chemistry', term: 'Term 3', type: 'Lab', score: 89, grade: 'B+', date: 'Dec 10, 2023' },
]

const getGradeColor = (grade: string) => {
  if (grade.startsWith('A')) return 'bg-emerald-50 text-emerald-700 border-emerald-200'
  if (grade.startsWith('B')) return 'bg-blue-50 text-blue-700 border-blue-200'
  if (grade.startsWith('C')) return 'bg-amber-50 text-amber-700 border-amber-200'
  return 'bg-rose-50 text-rose-700 border-rose-200'
}

const downloadReport = () => {
  console.log('Downloading grades report...')
}
</script>

<template>
  <div class="glass-card-static p-6">
    <div class="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
      <h3 class="text-lg font-black text-slate-800 tracking-tight flex items-center gap-2">
        <FileText class="w-5 h-5 text-accent" />
        Grade History
      </h3>
      <div class="flex items-center gap-3">
        <div class="relative">
          <select v-model="selectedTerm" class="appearance-none bg-white border border-slate-200 text-sm font-medium text-slate-700 rounded-xl px-4 py-2.5 pr-10 cursor-pointer hover:border-slate-300 focus:outline-none focus:border-indigo-500">
            <option v-for="term in terms" :key="term">{{ term }}</option>
          </select>
          <ChevronDown class="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
        </div>
        <button @click="downloadReport" class="flex items-center gap-2 px-4 py-2.5 bg-indigo-600 text-white text-sm font-bold rounded-xl hover:bg-indigo-700 transition-colors">
          <Download class="w-4 h-4" />
          Export
        </button>
      </div>
    </div>

    <div class="overflow-x-auto">
      <table class="w-full">
        <thead>
          <tr class="border-b border-slate-200">
            <th class="text-left py-4 px-4 text-[10px] font-black text-slate-400 uppercase tracking-widest">Subject</th>
            <th class="text-left py-4 px-4 text-[10px] font-black text-slate-400 uppercase tracking-widest">Type</th>
            <th class="text-left py-4 px-4 text-[10px] font-black text-slate-400 uppercase tracking-widest">Date</th>
            <th class="text-left py-4 px-4 text-[10px] font-black text-slate-400 uppercase tracking-widest">Score</th>
            <th class="text-left py-4 px-4 text-[10px] font-black text-slate-400 uppercase tracking-widest">Grade</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="grade in grades" :key="grade.id" class="border-b border-slate-50 hover:bg-slate-50/50 transition-colors">
            <td class="py-4 px-4">
              <span class="font-bold text-slate-800">{{ grade.subject }}</span>
            </td>
            <td class="py-4 px-4">
              <span class="text-xs font-medium text-slate-500 bg-slate-100 px-2 py-1 rounded-lg">{{ grade.type }}</span>
            </td>
            <td class="py-4 px-4">
              <span class="text-sm text-slate-600">{{ grade.date }}</span>
            </td>
            <td class="py-4 px-4">
              <span class="font-bold text-slate-800">{{ grade.score }}%</span>
            </td>
            <td class="py-4 px-4">
              <span :class="['text-xs font-black uppercase px-3 py-1.5 rounded-lg border', getGradeColor(grade.grade)]">
                {{ grade.grade }}
              </span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="flex items-center justify-between mt-6 pt-6 border-t border-slate-100">
      <p class="text-xs text-slate-400">Showing 1-10 of 45 entries</p>
      <div class="flex items-center gap-2">
        <button class="px-3 py-1.5 text-xs font-medium text-slate-500 bg-white border border-slate-200 rounded-lg hover:bg-slate-50">Previous</button>
        <button class="px-3 py-1.5 text-xs font-medium text-white bg-indigo-600 rounded-lg">1</button>
        <button class="px-3 py-1.5 text-xs font-medium text-slate-500 bg-white border border-slate-200 rounded-lg hover:bg-slate-50">2</button>
        <button class="px-3 py-1.5 text-xs font-medium text-slate-500 bg-white border border-slate-200 rounded-lg hover:bg-slate-50">3</button>
        <button class="px-3 py-1.5 text-xs font-medium text-slate-500 bg-white border border-slate-200 rounded-lg hover:bg-slate-50">Next</button>
      </div>
    </div>
  </div>
</template>
