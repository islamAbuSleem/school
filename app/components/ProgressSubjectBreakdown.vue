<script setup lang="ts">
const subjects = [
  { name: 'Advanced Mathematics', instructor: 'Dr. Aris Thorne', level: 'AP Calculus BC', progress: 75, grade: 'A' },
  { name: 'Theoretical Physics', instructor: 'Prof. Julian Vane', level: 'Quantum Mechanics Intro', progress: 60, grade: 'A-' },
  { name: 'Modern Literature', instructor: 'Sarah Jenkins', level: 'Post-War Narrative', progress: 45, grade: 'B' },
  { name: 'World History', instructor: 'Mark Rothko', level: 'European Diplomacy', progress: 90, grade: 'A+' },
]
</script>

<template>
  <div class="glass-card-static p-6">
    <div class="flex flex-wrap items-center justify-between gap-4 mb-6">
      <h3 class="section-title">Subject Breakdown</h3>
      <div class="flex items-center gap-1 bg-slate-50 p-1 rounded-xl">
        <button class="px-3 py-1.5 text-xs font-medium text-slate-400 hover:text-slate-600 rounded-lg transition-colors">Quarter 1</button>
        <button class="px-3 py-1.5 text-xs font-medium bg-accent text-white rounded-lg shadow-sm">Quarter 2</button>
      </div>
    </div>

    <div class="space-y-1">
      <div class="grid grid-cols-[2fr,1fr,1.5fr,0.5fr] gap-4 px-2 pb-3 border-b border-slate-100">
        <span class="text-[10px] font-medium text-slate-400 uppercase tracking-wider">Subject</span>
        <span class="text-[10px] font-medium text-slate-400 uppercase tracking-wider">Instructor</span>
        <span class="text-[10px] font-medium text-slate-400 uppercase tracking-wider text-center">Progress</span>
        <span class="text-[10px] font-medium text-slate-400 uppercase tracking-wider text-right">Grade</span>
      </div>

      <div v-for="sub in subjects" :key="sub.name" class="grid grid-cols-[2fr,1fr,1.5fr,0.5fr] gap-4 items-center px-2 py-3 hover:bg-slate-50 rounded-xl transition-all cursor-pointer group">
        <div>
          <h4 class="text-sm font-semibold text-slate-700 group-hover:text-accent transition-colors">{{ sub.name }}</h4>
          <p class="text-[10px] text-slate-400 uppercase tracking-wide mt-0.5">{{ sub.level }}</p>
        </div>
        <div>
          <p class="text-xs text-slate-500">{{ sub.instructor }}</p>
        </div>
        <div class="flex flex-col items-center">
          <div class="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden">
            <div 
              class="h-full bg-accent rounded-full transition-all duration-700"
              :style="{ width: sub.progress + '%' }"
            ></div>
          </div>
        </div>
        <div class="text-right">
          <span class="text-lg font-bold" :class="sub.grade.includes('A') ? 'text-accent' : 'text-slate-600'">{{ sub.grade }}</span>
        </div>
      </div>
    </div>
  </div>
</template>
