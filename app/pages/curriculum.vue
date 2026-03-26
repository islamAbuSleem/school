<template>
  <div class="max-w-[1600px] mx-auto pb-16 px-4 md:px-10">
    <div class="mb-8 md:mb-12">
      <p class="text-[10px] font-black text-red-600 tracking-[0.4em] uppercase mb-2 md:mb-4">CURRICULUM INSIGHTS</p>
      <h2 class="text-3xl md:text-5xl font-black text-[#0F172A] tracking-tighter uppercase">Academic Roadmap</h2>
      <p class="text-xs md:text-lg font-bold text-slate-400 mt-2 md:mt-4 leading-relaxed max-w-2xl uppercase tracking-widest">Detailed curriculum tracking for James Edwards. Grade 11 - International Baccalaureate Program.</p>
    </div>

    <div class="grid grid-cols-1 lg:grid-cols-[1fr,400px] gap-8 md:gap-12">
      <CurriculumMain />
      <CurriculumSidebar />
    </div>

    <CurriculumExtended />
  </div>
</template>

<script setup lang="ts">
// Components are auto-imported by Nuxt
</script>
