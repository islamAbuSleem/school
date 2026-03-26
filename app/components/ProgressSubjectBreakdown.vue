<script setup lang="ts">
const subjects = [
  { name: 'Advanced Mathematics', instructor: 'Dr. Aris Thorne', level: 'AP Calculus BC', progress: 75, grade: 'A' },
  { name: 'Theoretical Physics', instructor: 'Prof. Julian Vane', level: 'Quantum Mechanics Intro', progress: 60, grade: 'A-' },
  { name: 'Modern Literature', instructor: 'Sarah Jenkins', level: 'Post-War Narrative', progress: 45, grade: 'B' },
  { name: 'World History', instructor: 'Mark Rothko', level: 'European Diplomacy', progress: 90, grade: 'A+' },
]
</script>

<template>
  <div class="bg-white rounded-[40px] p-10 shadow-sm ring-1 ring-slate-100 h-full">
    <div class="flex items-center justify-between mb-12">
      <h3 class="text-xl font-black text-[#0F172A] tracking-tight">Subject Breakdown</h3>
      <div class="flex items-center space-x-2 bg-slate-50 p-1 rounded-xl">
        <button class="px-4 py-1.5 text-[10px] font-black tracking-widest text-slate-400 hover:text-slate-600 uppercase">Quarter 1</button>
        <button class="px-4 py-1.5 text-[10px] font-black tracking-widest bg-[#0F172A] text-white rounded-lg shadow-sm uppercase">Quarter 2</button>
      </div>
    </div>

    <div class="space-y-8">
      <div class="grid grid-cols-[2fr,1fr,1.5fr,0.5fr] gap-8 px-4 pb-4 border-b border-slate-50">
        <span class="text-[10px] font-black text-slate-300 tracking-[0.2em] uppercase">Subject</span>
        <span class="text-[10px] font-black text-slate-300 tracking-[0.2em] uppercase">Instructor</span>
        <span class="text-[10px] font-black text-slate-300 tracking-[0.2em] uppercase text-center">Progress</span>
        <span class="text-[10px] font-black text-slate-300 tracking-[0.2em] uppercase text-right">Grade</span>
      </div>

      <div v-for="sub in subjects" :key="sub.name" class="grid grid-cols-[2fr,1fr,1.5fr,0.5fr] gap-8 items-center px-4 py-2 hover:bg-slate-50/50 rounded-2xl transition-all cursor-pointer group">
        <div>
          <h4 class="text-base font-black text-[#0F172A] group-hover:text-indigo-600 transition-colors">{{ sub.name }}</h4>
          <p class="text-[10px] font-bold text-slate-300 uppercase tracking-widest mt-1">{{ sub.level }}</p>
        </div>
        <div>
          <p class="text-[11px] font-bold text-slate-400 leading-tight">{{ sub.instructor }}</p>
        </div>
        <div class="flex flex-col items-center">
          <div class="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden mb-2">
            <div 
              class="h-full bg-[#0F172A] rounded-full transition-all duration-1000"
              :style="{ width: sub.progress + '%' }"
            ></div>
          </div>
        </div>
        <div class="text-right">
          <span class="text-xl font-black text-[#0F172A]" :class="sub.grade.includes('A') ? 'text-indigo-600' : ''">{{ sub.grade }}</span>
        </div>
      </div>
    </div>
  </div>
</template>
