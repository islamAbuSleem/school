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
  <div class="bg-white rounded-[48px] p-12 shadow-sm ring-1 ring-slate-100 flex-1 relative group overflow-hidden h-full">
    <div class="flex items-start justify-between mb-12">
      <div>
        <span class="px-4 py-1.5 bg-indigo-50 text-indigo-600 rounded-full text-[10px] font-black tracking-widest uppercase ring-1 ring-indigo-100 shadow-sm">CORE SUBJECT</span>
        <h3 class="text-4xl font-black text-[#0F172A] tracking-tighter mt-6">Advanced Mathematics HL</h3>
        <p class="text-[11px] font-bold text-slate-400 mt-2 uppercase tracking-widest">Instructor: Dr. Aris Thorne • Section 11–A</p>
      </div>
      <div class="text-right">
        <p class="text-5xl font-black text-[#0F172A] tracking-tighter">82%</p>
        <p class="text-[10px] font-black text-slate-300 tracking-widest uppercase mt-2">Syllabus Complete</p>
      </div>
    </div>

    <div class="grid grid-cols-[1.5fr,1fr] gap-12">
      <div class="space-y-6">
        <div class="flex items-center space-x-4 mb-8">
          <div class="w-1 h-6 bg-red-600 rounded-full"></div>
          <h4 class="text-[10px] font-black text-slate-400 tracking-[0.25em] uppercase">COURSE SYLLABUS</h4>
        </div>

        <div v-for="item in syllabus" :key="item.title" class="flex items-center space-x-6 p-4 rounded-2xl transition-all hover:bg-slate-50 cursor-pointer group/item">
          <CheckCircle2 v-if="item.completed" class="w-5 h-5 text-slate-300" />
          <div v-else-if="item.active" class="w-5 h-5 rounded-full border-2 border-[#0F172A] flex items-center justify-center">
            <div class="w-2 h-2 bg-[#0F172A] rounded-full"></div>
          </div>
          <Circle v-else class="w-5 h-5 text-slate-200" />
          
          <span :class="['text-sm font-bold', item.completed ? 'text-slate-300 line-through' : 'text-[#0F172A]', item.active ? 'font-black' : '']">
            {{ item.title }}
          </span>
        </div>
      </div>

      <div class="space-y-8">
        <div class="flex items-center space-x-4 mb-8">
          <div class="w-1 h-6 bg-indigo-600 rounded-full"></div>
          <h4 class="text-[10px] font-black text-slate-400 tracking-[0.25em] uppercase">LEARNING RESOURCES</h4>
        </div>

        <div v-for="res in resources" :key="res.title" class="bg-[#F8FAFC] p-6 rounded-3xl ring-1 ring-slate-100 flex items-center justify-between transition-all hover:scale-[1.02] cursor-pointer group/res shadow-sm">
          <div class="flex items-center space-x-5">
            <div class="p-3 bg-white rounded-xl shadow-sm group-hover/res:scale-110 transition-transform">
              <component :is="res.icon" class="w-5 h-5 text-[#0F172A]" stroke-width="2.5" />
            </div>
            <div>
              <h5 class="text-sm font-black text-[#0F172A]">{{ res.title }}</h5>
            </div>
          </div>
          <Download v-if="res.type === 'PDF'" class="w-4 h-4 text-slate-300 group-hover/res:text-indigo-600" />
          <ExternalLink v-else class="w-4 h-4 text-slate-300 group-hover/res:text-indigo-600" />
        </div>
      </div>
    </div>
  </div>
</template>
