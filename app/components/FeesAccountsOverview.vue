<template>
  <div class="space-y-6">
    <div>
      <h3 class="text-3xl font-black text-[#0F172A] tracking-tighter mb-2">Accounts Overview</h3>
      <p class="text-base text-slate-500 font-semibold">Financial summary for the 2023 Fall Academic Year</p>
    </div>

    <div class="grid grid-cols-3 gap-6">
      <!-- Total Outstanding Card -->
      <div class="bg-gradient-to-br from-[#0F172A] to-[#1E293B] rounded-2xl p-8 text-white shadow-lg ring-1 ring-slate-200/50">
        <p class="text-xs font-black text-slate-400 tracking-widest uppercase mb-6">TOTAL OUTSTANDING</p>
        <h4 class="text-4xl font-black tracking-tighter mb-6">$4,250.00</h4>
        <div class="flex items-center space-x-2 text-sm font-bold text-slate-300">
          <CalendarDays class="w-4 h-4" />
          <span>Next Due: Oct 15, 2023</span>
        </div>
      </div>

      <!-- Paid This Term Card -->
      <div class="bg-white rounded-2xl p-8 shadow-sm ring-1 ring-slate-100 space-y-4">
        <p class="text-xs font-black text-slate-400 tracking-widest uppercase">PAID THIS TERM</p>
        <h4 class="text-4xl font-black text-[#0F172A] tracking-tighter">$12,800.00</h4>
        
        <!-- Progress Bar -->
        <div class="space-y-2 mt-6">
          <div class="h-2 bg-slate-100 rounded-full overflow-hidden">
            <div class="h-full w-3/4 bg-[#0F172A] rounded-full"></div>
          </div>
          <p class="text-xs text-slate-500 font-semibold">75% of annual tuition completed</p>
        </div>
      </div>

      <!-- Term Total Card -->
      <div class="bg-white rounded-2xl p-8 shadow-sm ring-1 ring-slate-100 space-y-4">
        <p class="text-xs font-black text-slate-400 tracking-widest uppercase">TERM TOTAL</p>
        <h4 class="text-4xl font-black text-[#0F172A] tracking-tighter">$17,050.00</h4>
        
        <p class="text-xs text-slate-500 font-semibold mt-6">Includes Athletics & Lab Fees</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { CalendarDays } from 'lucide-vue-next'
</script>
