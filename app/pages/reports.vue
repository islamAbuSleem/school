<template>
  <div class="max-w-[1600px] mx-auto pb-16 px-4 md:px-10">
    <div class="mb-8 md:mb-12">
      <h2 class="text-3xl md:text-5xl font-black text-[#0F172A] tracking-tighter uppercase">Student Performance Insights</h2>
      <p class="text-xs md:text-lg font-bold text-slate-400 mt-2 md:mt-4 leading-relaxed max-w-2xl uppercase tracking-widest">Detailed academic analytics and official documentation for the current term.</p>
    </div>

    <div class="grid grid-cols-1 lg:grid-cols-[1fr,1.5fr] gap-8 md:gap-12 mb-8 md:mb-12 h-full">
      <ReportsBuilder />
      <ReportsTrends />
    </div>

    <ReportsDownloadCenter />
  </div>
</template>

<script setup lang="ts">
// Components are auto-imported by Nuxt
</script>
