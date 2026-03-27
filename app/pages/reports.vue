<template>
  <div class="max-w-[1600px] mx-auto pb-16">
    <div class="mb-8">
      <h2 class="page-title uppercase">Student Performance Insights</h2>
      <p class="text-sm text-slate-500 mt-2 leading-relaxed max-w-2xl uppercase tracking-wide">
        Detailed academic analytics and official documentation for the current term.
      </p>
    </div>

    <div class="grid grid-cols-1 lg:grid-cols-[1fr,1.5fr] gap-6 mb-8 h-full">
      <ReportsBuilder />
      <ReportsTrends />
    </div>

    <ReportsDownloadCenter />
  </div>
</template>

<script setup lang="ts">
</script>
