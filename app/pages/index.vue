<template>
  <div class="max-w-[1600px] mx-auto pb-16">
    <div class="flex flex-col lg:flex-row items-start lg:items-center justify-between mb-8 gap-4">
      <div>
        <h2 class="page-title animate-fade-in">Welcome back, Administrator</h2>
        <p class="text-slate-500 mt-2 leading-relaxed max-w-2xl animate-fade-in stagger-1">
          Here's the curated overview of Prestige Academy's performance and operations for today.
        </p>
      </div>
      
      <div class="flex items-center glass-card-static px-2 py-1.5">
        <button class="px-4 py-2 text-sm font-medium text-slate-400 hover:text-slate-600 transition-colors rounded-lg">Term 2: 2024</button>
        <button class="btn-primary text-xs px-6">Academic Overview</button>
      </div>
    </div>

    <DashboardSummary />

    <div class="grid grid-cols-1 xl:grid-cols-[1fr,380px] gap-6 mt-8">
      <div class="space-y-6">
        <DashboardFinancialOverview />
        <DashboardAcademicPulse />
      </div>
      
      <div class="space-y-6">
        <DashboardAdminAlerts />
        <DashboardRecentLog />
        <DashboardQuickConnect />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
</script>
