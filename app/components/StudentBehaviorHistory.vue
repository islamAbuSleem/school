<script setup lang="ts">
import { ShieldCheck, MessageSquare, Award, AlertTriangle, Calendar } from 'lucide-vue-next'

const props = defineProps<{
  studentId?: string
}>()

const records = [
  { id: 1, type: 'positive', category: 'Participation', points: 10, comment: 'Excellent participation in Algebra class - consistently contributed to group discussions', teacher: 'Dr. Sarah Mitchell', date: 'Jan 15, 2024', subject: 'Mathematics' },
  { id: 2, type: 'positive', category: 'Conduct', points: 5, comment: 'Helped a classmate understand difficult concepts during study hall', teacher: 'Mr. Robert Chen', date: 'Jan 12, 2024', subject: 'Physics' },
  { id: 3, type: 'positive', category: 'Achievement', points: 15, comment: 'Outstanding performance on mid-term examination', teacher: 'Ms. Emily Johnson', date: 'Jan 10, 2024', subject: 'English' },
  { id: 4, type: 'negative', category: 'Assignment', points: -5, comment: 'Incomplete homework assignment', teacher: 'Dr. Sarah Mitchell', date: 'Jan 8, 2024', subject: 'Mathematics' },
  { id: 5, type: 'positive', category: 'Conduct', points: 10, comment: 'Demonstrated excellent behavior during school assembly', teacher: 'Mr. David Park', date: 'Jan 5, 2024', subject: 'History' },
  { id: 6, type: 'negative', category: 'Tardiness', points: -2, comment: 'Arrived late to class 3 times this week', teacher: 'Ms. Emily Johnson', date: 'Jan 3, 2024', subject: 'English' },
]

const getCategoryIcon = (category: string) => {
  switch (category) {
    case 'Participation': return MessageSquare
    case 'Conduct': return ShieldCheck
    case 'Achievement': return Award
    case 'Assignment': return AlertTriangle
    case 'Tardiness': return Calendar
    default: return ShieldCheck
  }
}
</script>

<template>
  <div class="glass-card-static p-6">
    <div class="flex items-center justify-between mb-6">
      <h3 class="text-lg font-black text-slate-800 tracking-tight flex items-center gap-2">
        <ShieldCheck class="w-5 h-5 text-accent" />
        Behavior History
      </h3>
      <div class="flex items-center gap-2">
        <select class="text-xs font-medium text-slate-600 bg-white border border-slate-200 rounded-lg px-3 py-1.5">
          <option>This Term</option>
          <option>Last Month</option>
          <option>This Year</option>
        </select>
      </div>
    </div>

    <div class="space-y-3">
      <div v-for="record in records" :key="record.id" 
        class="flex items-start gap-4 p-4 rounded-2xl border transition-all hover:shadow-md cursor-pointer group"
        :class="record.type === 'positive' ? 'bg-emerald-50/30 border-emerald-100 hover:border-emerald-200' : 'bg-rose-50/30 border-rose-100 hover:border-rose-200'"
      >
        <div :class="[
          'w-12 h-12 rounded-xl flex items-center justify-center shrink-0 transition-transform group-hover:scale-110',
          record.type === 'positive' ? 'bg-emerald-100 text-emerald-600' : 'bg-rose-100 text-rose-600'
        ]">
          <component :is="getCategoryIcon(record.category)" class="w-6 h-6" />
        </div>
        
        <div class="flex-1">
          <div class="flex items-center justify-between mb-2">
            <div class="flex items-center gap-3">
              <h4 class="font-bold text-slate-800">{{ record.category }}</h4>
              <span class="text-[10px] font-medium text-slate-400 bg-slate-100 px-2 py-0.5 rounded-lg">{{ record.subject }}</span>
            </div>
            <span :class="[
              'text-xs font-black uppercase tracking-widest px-2 py-1 rounded-lg',
              record.type === 'positive' ? 'text-emerald-600 bg-emerald-100' : 'text-rose-600 bg-rose-100'
            ]">
              {{ record.points > 0 ? '+' : '' }}{{ record.points }} Points
            </span>
          </div>
          <p class="text-sm text-slate-600 leading-relaxed">{{ record.comment }}</p>
          <div class="flex items-center gap-3 mt-3">
            <p class="text-[10px] font-bold text-slate-400 uppercase tracking-widest">By {{ record.teacher }}</p>
            <div class="w-1 h-1 bg-slate-200 rounded-full"></div>
            <p class="text-[10px] font-medium text-slate-400 uppercase tracking-widest">{{ record.date }}</p>
          </div>
        </div>
      </div>
    </div>

    <button class="w-full mt-6 py-4 border-2 border-dashed border-slate-200 rounded-2xl text-slate-400 text-xs font-bold uppercase tracking-widest hover:border-indigo-300 hover:text-indigo-500 transition-all">
      View Full History
    </button>
  </div>
</template>
