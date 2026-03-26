<template>
  <div class="max-w-[1600px] mx-auto pb-16">
    <div class="flex items-center justify-between mb-10">
      <div>
        <h2 class="text-4xl font-black text-[#0F172A] tracking-tighter">Institutional Dashboard</h2>
        <p class="text-lg font-bold text-slate-400 mt-2 leading-relaxed max-w-2xl">
          Welcome back, Administrator. Here is the curated overview of Prestige Academy's performance and operations for today.
        </p>
      </div>
      
      <div class="flex items-center space-x-4 bg-slate-50 p-2 rounded-[24px] shadow-inner ring-1 ring-slate-100">
        <button class="px-8 py-3 text-[11px] font-black tracking-widest text-slate-400 hover:text-slate-600 uppercase">Term 2: 2024</button>
        <button class="px-8 py-3 text-[11px] font-black tracking-widest bg-[#0F172A] text-white rounded-2xl shadow-xl shadow-slate-200 uppercase">Academic Overview</button>
      </div>
    </div>

    <DashboardSummary />

    <div class="grid grid-cols-[1fr,450px] gap-12">
      <div class="space-y-12">
        <DashboardFinancialOverview />
        <DashboardAcademicPulse />
      </div>
      
      <div class="space-y-12">
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
