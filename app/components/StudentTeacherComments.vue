<script setup lang="ts">
import { MessageSquare, Calendar } from 'lucide-vue-next'

const props = defineProps<{
  studentId?: string
}>()

const comments = [
  {
    id: 1,
    teacher: 'Dr. Sarah Mitchell',
    subject: 'Mathematics',
    avatar: 'https://ui-avatars.com/api/?name=SM&background=6366F1&color=fff',
    comment: 'Julian demonstrates exceptional problem-solving abilities. He consistently goes above and beyond in his assignments and actively helps classmates understand complex concepts.',
    date: 'Jan 15, 2024',
    type: 'praise'
  },
  {
    id: 2,
    teacher: 'Mr. Robert Chen',
    subject: 'Physics',
    avatar: 'https://ui-avatars.com/api/?name=RC&background=10B981&color=fff',
    comment: 'Excellent performance in laboratory experiments. Julian shows great curiosity and asks thoughtful questions that show deep understanding of the material.',
    date: 'Jan 12, 2024',
    type: 'praise'
  },
  {
    id: 3,
    teacher: 'Ms. Emily Johnson',
    subject: 'English',
    avatar: 'https://ui-avatars.com/api/?name=EJ&background=F59E0B&color=fff',
    comment: 'Strong analytical skills in essay writing. Would benefit from more creative expression in creative writing assignments.',
    date: 'Jan 10, 2024',
    type: 'constructive'
  },
  {
    id: 4,
    teacher: 'Mr. David Park',
    subject: 'History',
    avatar: 'https://ui-avatars.com/api/?name=DP&background=EC4899&color=fff',
    comment: 'Outstanding participation in class discussions. Julian brings historical context to current events and shows genuine interest in world affairs.',
    date: 'Jan 8, 2024',
    type: 'praise'
  },
]
</script>

<template>
  <div class="glass-card-static p-6">
    <div class="flex items-center justify-between mb-6">
      <h3 class="text-lg font-black text-slate-800 tracking-tight flex items-center gap-2">
        <MessageSquare class="w-5 h-5 text-accent" />
        Teacher Comments
      </h3>
      <span class="text-xs font-bold text-slate-400 uppercase tracking-widest">This Term</span>
    </div>

    <div class="space-y-4">
      <div v-for="comment in comments" :key="comment.id" 
        class="p-5 rounded-2xl border transition-all hover:shadow-md cursor-pointer group"
        :class="comment.type === 'praise' ? 'bg-emerald-50/30 border-emerald-100 hover:border-emerald-200' : 'bg-amber-50/30 border-amber-100 hover:border-amber-200'"
      >
        <div class="flex items-start gap-4">
          <img :src="comment.avatar" :alt="comment.teacher" class="w-12 h-12 rounded-xl object-cover shadow-sm" />
          <div class="flex-1">
            <div class="flex items-center justify-between mb-2">
              <div>
                <h4 class="font-bold text-slate-800">{{ comment.teacher }}</h4>
                <p class="text-xs text-slate-500">{{ comment.subject }}</p>
              </div>
              <div class="flex items-center gap-2">
                <span v-if="comment.type === 'praise'" class="text-[10px] font-black text-emerald-600 bg-emerald-100 px-2 py-0.5 rounded-full uppercase">Praise</span>
                <span v-else class="text-[10px] font-black text-amber-600 bg-amber-100 px-2 py-0.5 rounded-full uppercase">Feedback</span>
                <span class="text-[10px] text-slate-400 flex items-center gap-1">
                  <Calendar class="w-3 h-3" />
                  {{ comment.date }}
                </span>
              </div>
            </div>
            <p class="text-sm text-slate-600 leading-relaxed">{{ comment.comment }}</p>
          </div>
        </div>
      </div>
    </div>

    <button class="w-full mt-6 py-4 border-2 border-dashed border-slate-200 rounded-2xl text-slate-400 text-xs font-bold uppercase tracking-widest hover:border-indigo-300 hover:text-indigo-500 transition-all">
      View All Comments
    </button>
  </div>
</template>
