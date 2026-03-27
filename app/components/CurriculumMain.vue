<script setup lang="ts">
import { CheckCircle2, Circle, PlayCircle, FileText, Download, ExternalLink } from 'lucide-vue-next'

const syllabus = [
  { title: 'Complex Numbers & Vectors', completed: true },
  { title: 'Differential Calculus', completed: true },
  { title: 'Integral Calculus & Applications', active: true },
  { title: 'Probability Distributions', pending: true },
  { title: 'Statistical Inference', pending: true },
]

const resources = [
  { title: 'Calculus Bible v2.0', type: 'PDF', icon: FileText },
  { title: 'Vector Space Lectures', type: 'VIDEO', icon: PlayCircle },
  { title: 'Mock Exam Paper 1', type: 'PDF', icon: FileText },
]
</script>

<template>
  <div class="glass-card-static p-8 h-full">
    <div class="flex flex-wrap items-start justify-between gap-4 mb-8">
      <div>
        <span class="px-3 py-1.5 bg-indigo-50 text-accent rounded-full text-xs font-semibold uppercase">Core Subject</span>
        <h3 class="text-2xl font-bold text-slate-800 mt-4" style="font-family: var(--font-display)">Advanced Mathematics HL</h3>
        <p class="text-sm text-slate-400 mt-1 uppercase tracking-wide">Instructor: Dr. Aris Thorne • Section 11–A</p>
      </div>
      <div class="text-right">
        <p class="text-4xl font-bold text-slate-800" style="font-family: var(--font-display)">82%</p>
        <p class="text-xs font-medium text-slate-400 uppercase tracking-wider mt-1">Syllabus Complete</p>
      </div>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-[1.5fr,1fr] gap-8">
      <div class="space-y-2">
        <div class="flex items-center gap-3 mb-4">
          <div class="w-1 h-5 bg-accent rounded-full"></div>
          <h4 class="text-xs font-semibold text-slate-400 uppercase tracking-wider">Course Syllabus</h4>
        </div>

        <div v-for="item in syllabus" :key="item.title" class="flex items-center gap-4 p-3 rounded-xl transition-all hover:bg-slate-50 cursor-pointer">
          <CheckCircle2 v-if="item.completed" class="w-5 h-5 text-emerald-400 flex-shrink-0" />
          <div v-else-if="item.active" class="w-5 h-5 rounded-full border-2 border-accent flex items-center justify-center flex-shrink-0">
            <div class="w-2 h-2 bg-accent rounded-full"></div>
          </div>
          <Circle v-else class="w-5 h-5 text-slate-200 flex-shrink-0" />
          
          <span :class="['text-sm font-medium', item.completed ? 'text-slate-300 line-through' : 'text-slate-700', item.active ? 'font-semibold' : '']">
            {{ item.title }}
          </span>
        </div>
      </div>

      <div class="space-y-3">
        <div class="flex items-center gap-3 mb-4">
          <div class="w-1 h-5 bg-accent rounded-full"></div>
          <h4 class="text-xs font-semibold text-slate-400 uppercase tracking-wider">Learning Resources</h4>
        </div>

        <div v-for="res in resources" :key="res.title" class="bg-slate-50 p-4 rounded-xl flex items-center justify-between transition-all hover:scale-[1.01] cursor-pointer group">
          <div class="flex items-center gap-3">
            <div class="p-2 bg-white rounded-lg shadow-sm">
              <component :is="res.icon" class="w-4 h-4 text-slate-600" stroke-width="2" />
            </div>
            <h5 class="text-sm font-semibold text-slate-700">{{ res.title }}</h5>
          </div>
          <Download v-if="res.type === 'PDF'" class="w-4 h-4 text-slate-300 group-hover:text-accent" />
          <ExternalLink v-else class="w-4 h-4 text-slate-300 group-hover:text-accent" />
        </div>
      </div>
    </div>
  </div>
</template>
