<template>
  <div class="max-w-[1600px] mx-auto pb-16 px-4 md:px-10">
    <div class="flex flex-col md:flex-row items-start md:items-center justify-between mb-8 md:mb-10 gap-4">
      <div>
        <h2 class="text-3xl md:text-4xl font-black text-[#0F172A] tracking-tighter">Institutional Dashboard</h2>
        <p class="text-sm md:text-lg font-bold text-slate-400 mt-2 leading-relaxed max-w-2xl">
          Welcome back, Administrator. Here is the curated overview of Prestige Academy's performance and operations for today.
        </p>
      </div>
      
      <div class="w-full md:w-auto flex items-center space-x-2 md:space-x-4 bg-slate-50 p-2 rounded-lg md:rounded-[24px] shadow-inner ring-1 ring-slate-100 flex-shrink-0">
        <button class="flex-1 md:flex-none px-4 md:px-8 py-2 md:py-3 text-[10px] md:text-[11px] font-black tracking-widest text-slate-400 hover:text-slate-600 uppercase">Term 2: 2024</button>
        <button class="flex-1 md:flex-none px-4 md:px-8 py-2 md:py-3 text-[10px] md:text-[11px] font-black tracking-widest bg-[#0F172A] text-white rounded-lg md:rounded-2xl shadow-xl shadow-slate-200 uppercase">Academic Overview</button>
      </div>
    </div>

    <DashboardSummary />

    <div class="grid grid-cols-1 lg:grid-cols-[1fr,450px] gap-8 md:gap-12">
      <div class="space-y-8 md:space-y-12">
        <DashboardFinancialOverview />
        <DashboardAcademicPulse />
      </div>
      
      <div class="space-y-8 md:space-y-12">
        <DashboardAdminAlerts />
        <DashboardRecentLog />
        <DashboardQuickConnect />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// Components are auto-imported by Nuxt
</script>
