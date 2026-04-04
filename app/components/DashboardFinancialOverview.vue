<script setup lang="ts">
import { ref } from 'vue'

const activeTab = ref('revenue')

const tabs = [
  { id: 'revenue', label: 'Revenue' },
  { id: 'expenses', label: 'Expenses' },
]

const months = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN']

const revenueData = [35, 45, 55, 70, 50, 65]
const expensesData = [25, 30, 35, 40, 35, 45]

const getData = () => activeTab.value === 'revenue' ? revenueData : expensesData
const getValue = (index: number) => getData()[index] ?? 0

const { info } = useToast()

const handleTabChange = (tab: string) => {
  activeTab.value = tab
  info(tab.charAt(0).toUpperCase() + tab.slice(1), `Showing ${tab} data for the first half of 2024`)
}
</script>

<template>
  <div class="glass-card-static p-8">
    <div class="flex items-center justify-between mb-8">
      <h3 class="section-title">Monthly Financial Overview</h3>
      <div class="flex items-center space-x-1 bg-slate-100 p-1 rounded-xl">
        <button 
          v-for="tab in tabs" 
          :key="tab.id"
          @click="handleTabChange(tab.id)"
          class="px-4 py-2 text-xs font-medium rounded-lg transition-all"
          :class="activeTab === tab.id ? 'bg-white text-accent shadow-sm' : 'text-slate-400 hover:text-slate-600'"
        >
          {{ tab.label }}
        </button>
      </div>
    </div>

    <div class="h-56 flex items-end justify-between px-2">
      <div v-for="(month, index) in months" :key="month" class="flex flex-col items-center w-full group">
        <div class="relative w-3 h-40 bg-slate-100 rounded-full flex items-end overflow-hidden">
          <div 
            class="w-full bg-gradient-to-t from-accent to-purple-400 rounded-full transition-all duration-700 group-hover:opacity-80"
            :style="{ height: getValue(index) + '%' }"
          ></div>
          <Transition
            enter-active-class="transition ease-out duration-200"
            enter-from-class="opacity-0 -translate-y-2"
            enter-to-class="opacity-100 translate-y-0"
            leave-active-class="transition ease-in duration-100"
            leave-from-class="opacity-100 translate-y-0"
            leave-to-class="opacity-0 -translate-y-2"
          >
            <div v-if="activeTab === 'revenue'" class="absolute -top-8 left-1/2 -translate-x-1/2 bg-accent text-white text-[10px] font-bold px-2 py-1 rounded-lg shadow-lg whitespace-nowrap">
              ${{ getValue(index) * 1000 }}
            </div>
          </Transition>
        </div>
        <span class="text-[10px] font-medium text-slate-400 mt-3 uppercase">{{ month }}</span>
      </div>
    </div>

    <div class="flex items-center justify-between mt-6 pt-4 border-t border-slate-100">
      <div class="flex items-center gap-6">
        <div class="flex items-center gap-2">
          <div class="w-3 h-3 bg-accent rounded-full"></div>
          <span class="text-xs text-slate-500">Total {{ activeTab }}</span>
        </div>
        <span class="text-lg font-bold text-slate-800">${{ getData().reduce((a, b) => a + b, 0) * 1000 }}</span>
      </div>
      <span class="text-xs text-emerald-500 font-medium">+18.2% vs last term</span>
    </div>
  </div>
</template>
