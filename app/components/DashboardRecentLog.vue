<script setup lang="ts">
import { UserPlus, CheckCircle2, Wallet, Edit3 } from 'lucide-vue-next'

const logs = [
  { action: 'New student registered', name: 'Amina Ahmed', details: 'Grade 9-B', time: 'JUST NOW', icon: UserPlus, color: 'text-indigo-600', bg: 'bg-indigo-50' },
  { action: 'Attendance session closed', name: 'Class 10A • Morning Shift', details: '', time: '14 MINS AGO', icon: CheckCircle2, color: 'text-green-600', bg: 'bg-green-50' },
  { action: 'Fee Payment Processed', name: '$1,200.00 • Transaction #9921', details: '', time: '1 HOUR AGO', icon: Wallet, color: 'text-blue-600', bg: 'bg-blue-50' },
  { action: 'Grade Modification', name: 'By Dr. Jenkins • Science Unit 2', details: '', time: '2 HOURS AGO', icon: Edit3, color: 'text-orange-600', bg: 'bg-orange-50' },
]
</script>

<template>
  <div class="bg-white rounded-[40px] p-10 shadow-sm ring-1 ring-slate-100 flex-1 relative">
    <div class="flex items-center justify-between mb-12">
      <h3 class="text-xl font-black text-[#0F172A] tracking-tight">RECENT LOG</h3>
    </div>

    <div class="space-y-10">
      <div 
        v-for="log in logs" 
        :key="log.name"
        class="flex items-start space-x-6 relative transition-all hover:translate-x-1 cursor-pointer"
      >
        <div :class="['p-4 rounded-2xl shadow-sm', log.bg]">
          <component :is="log.icon" class="w-6 h-6" :class="log.color" stroke-width="2.5" />
        </div>
        <div>
          <h4 class="text-sm font-black text-[#0F172A] leading-snug">{{ log.action }}</h4>
          <p class="text-[11px] font-bold text-slate-400 mt-1">{{ log.name }} <span v-if="log.details" class="mx-1">•</span> {{ log.details }}</p>
          <p class="text-[9px] font-black text-slate-300 tracking-widest uppercase mt-2">{{ log.time }}</p>
        </div>
      </div>
    </div>

    <button class="w-full mt-16 py-4 text-[10px] font-black tracking-widest text-[#0F172A] border-2 border-slate-50 hover:bg-slate-50 rounded-2xl transition-all shadow-sm uppercase">
      VIEW FULL AUDIT LOG
    </button>
  </div>
</template>
