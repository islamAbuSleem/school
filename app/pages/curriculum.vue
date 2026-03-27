<template>
  <div class="max-w-[1600px] mx-auto pb-16">
    <div class="mb-8">
      <p class="text-xs font-semibold text-accent uppercase tracking-wider mb-2">Curriculum Insights</p>
      <h2 class="page-title uppercase">Academic Roadmap</h2>
      <p class="text-sm text-slate-500 mt-2 leading-relaxed max-w-2xl uppercase tracking-wide">
        Detailed curriculum tracking for James Edwards. Grade 11 - International Baccalaureate Program.
      </p>
    </div>

    <div class="grid grid-cols-1 lg:grid-cols-[1fr,380px] gap-6">
      <CurriculumMain />
      <CurriculumSidebar />
    </div>

    <CurriculumExtended />
  </div>
</template>

<script setup lang="ts">
</script>
