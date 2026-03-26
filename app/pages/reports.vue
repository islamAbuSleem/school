<template>
  <div class="max-w-[1600px] mx-auto pb-16">
    <div class="mb-12">
      <h2 class="text-5xl font-black text-[#0F172A] tracking-tighter uppercase">Student Performance Insights</h2>
      <p class="text-lg font-bold text-slate-400 mt-4 leading-relaxed max-w-2xl uppercase tracking-widest">Detailed academic analytics and official documentation for the current term.</p>
    </div>

    <div class="grid grid-cols-[1fr,1.5fr] gap-12 mb-12 h-full">
      <ReportsBuilder />
      <ReportsTrends />
    </div>

    <ReportsDownloadCenter />
  </div>
</template>

<script setup lang="ts">
// Components are auto-imported by Nuxt
</script>
