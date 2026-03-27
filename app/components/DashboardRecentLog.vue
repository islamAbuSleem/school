<script setup lang="ts">
import { UserPlus, CheckCircle2, Wallet, Edit3 } from 'lucide-vue-next'

const logs = [
  { action: 'New student registered', name: 'Amina Ahmed', details: 'Grade 9-B', time: 'Just now', icon: UserPlus, color: 'text-indigo-500', bg: 'bg-indigo-100' },
  { action: 'Attendance session closed', name: 'Class 10A • Morning Shift', details: '', time: '14 mins ago', icon: CheckCircle2, color: 'text-emerald-500', bg: 'bg-emerald-100' },
  { action: 'Fee Payment Processed', name: '$1,200.00 • Transaction #9921', details: '', time: '1 hour ago', icon: Wallet, color: 'text-blue-500', bg: 'bg-blue-100' },
  { action: 'Grade Modification', name: 'By Dr. Jenkins • Science Unit 2', details: '', time: '2 hours ago', icon: Edit3, color: 'text-orange-500', bg: 'bg-orange-100' },
]
</script>

<template>
  <div class="glass-card-static p-6">
    <div class="flex items-center justify-between mb-5">
      <h3 class="section-title text-lg">Recent Activity</h3>
    </div>

    <div class="space-y-3">
      <div 
        v-for="log in logs" 
        :key="log.name"
        class="flex items-start space-x-3 transition-all hover:translate-x-1 cursor-pointer p-3 -mx-3 rounded-xl hover:bg-slate-50"
      >
        <div :class="['p-2.5 rounded-lg', log.bg]">
          <component :is="log.icon" class="w-4 h-4" :class="log.color" stroke-width="2" />
        </div>
        <div class="flex-1 min-w-0">
          <h4 class="text-sm font-medium text-slate-700 truncate">{{ log.action }}</h4>
          <p class="text-xs text-slate-400 truncate">{{ log.name }}</p>
          <p class="text-[10px] text-slate-300 mt-1 uppercase tracking-wide">{{ log.time }}</p>
        </div>
      </div>
    </div>

    <button class="w-full mt-5 py-3 text-sm font-medium text-slate-500 hover:text-accent transition-colors border border-slate-200 rounded-xl hover:border-accent/30">
      View Full Audit Log
    </button>
  </div>
</template>
