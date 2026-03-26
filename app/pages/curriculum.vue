<template>
  <div class="max-w-[1600px] mx-auto pb-16">
    <div class="mb-12">
      <p class="text-[10px] font-black text-red-600 tracking-[0.4em] uppercase mb-4">CURRICULUM INSIGHTS</p>
      <h2 class="text-5xl font-black text-[#0F172A] tracking-tighter uppercase">Academic Roadmap</h2>
      <p class="text-lg font-bold text-slate-400 mt-4 leading-relaxed max-w-2xl uppercase tracking-widest">Detailed curriculum tracking for James Edwards. Grade 11 - International Baccalaureate Program.</p>
    </div>

    <div class="grid grid-cols-[1fr,400px] gap-12">
      <CurriculumMain />
      <CurriculumSidebar />
    </div>

    <CurriculumExtended />
  </div>
</template>

<script setup lang="ts">
// Components are auto-imported by Nuxt
</script>
