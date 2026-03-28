<template>
  <div class="max-w-[1600px] mx-auto pb-16">
    <!-- Overview Tab Content -->
    <template v-if="activeTab === 'Overview'">
      <div class="flex flex-col lg:flex-row items-start lg:items-center justify-between mb-8 gap-4">
        <div>
          <h2 class="page-title animate-fade-in">{{ t('welcome') }}</h2>
          <p class="text-slate-500 mt-2 leading-relaxed max-w-2xl animate-fade-in stagger-1">
            {{ t('overview_desc') }}
          </p>
        </div>
        
        <div class="flex items-center glass-card-static px-2 py-1.5">
          <button class="px-4 py-2 text-sm font-medium text-slate-400 hover:text-slate-600 transition-colors rounded-lg">Term 2: 2024</button>
          <button class="btn-primary text-xs px-6">{{ t('academic_overview') }}</button>
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
    </template>

    <!-- Curriculum Tab Content -->
    <template v-else-if="activeTab === 'Curriculum'">
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
    </template>

    <!-- Reports Tab Content -->
    <template v-else-if="activeTab === 'Reports'">
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
    </template>
  </div>
</template>

<script setup lang="ts">
const { activeTab } = useDashboard()
const { t } = useLocale()
</script>
