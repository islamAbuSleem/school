<template>
  <div class="space-y-6">
    <div>
      <h3 class="section-title mb-1">Accounts Overview</h3>
      <p class="text-sm text-slate-500">Financial summary for the 2023 Fall Academic Year</p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
      <div class="bg-gradient-to-br from-primary to-slate-700 rounded-2xl p-6 text-white shadow-lg">
        <p class="text-xs font-medium text-slate-300 uppercase tracking-wider mb-4">Total Outstanding</p>
        <h4 class="text-3xl font-bold mb-4" style="font-family: var(--font-display)">$4,250.00</h4>
        <div class="flex items-center gap-2 text-sm text-slate-300">
          <CalendarDays class="w-4 h-4 flex-shrink-0" />
          <span>Next Due: Oct 15, 2023</span>
        </div>
      </div>

      <div class="glass-card-static p-6">
        <p class="text-xs font-medium text-slate-400 uppercase tracking-wider mb-2">Paid This Term</p>
        <h4 class="text-3xl font-bold text-slate-800 mb-4" style="font-family: var(--font-display)">$12,800.00</h4>
        
        <div class="space-y-2">
          <div class="h-1.5 bg-slate-100 rounded-full overflow-hidden">
            <div class="h-full w-3/4 bg-accent rounded-full"></div>
          </div>
          <p class="text-xs text-slate-500">75% of annual tuition completed</p>
        </div>
      </div>

      <div class="glass-card-static p-6">
        <p class="text-xs font-medium text-slate-400 uppercase tracking-wider mb-2">Term Total</p>
        <h4 class="text-3xl font-bold text-slate-800 mb-4" style="font-family: var(--font-display)">$17,050.00</h4>
        
        <p class="text-xs text-slate-500">Includes Athletics & Lab Fees</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { CalendarDays } from 'lucide-vue-next'
</script>
