<script setup lang="ts">
import { ShieldCheck, ShieldAlert, MessageSquare, Calendar } from 'lucide-vue-next'

const { childBehavior, activeChild } = useParent()

const getCategoryIcon = (category: string) => {
  switch (category) {
    case 'participation': return MessageSquare
    case 'conduct': return ShieldCheck
    case 'assignment': return Calendar
    default: return ShieldCheck
  }
}
</script>

<template>
  <div class="glass-card-static p-8">
    <div class="flex items-center justify-between mb-8">
      <div>
        <h3 class="text-xl font-black text-slate-800 tracking-tight">Behavioral & Wellbeing</h3>
        <p class="text-xs font-medium text-slate-400 mt-1 uppercase tracking-widest">Recent conduct logs for {{ activeChild?.name }}</p>
      </div>
      <div class="flex items-center gap-2 px-4 py-2 bg-emerald-50 rounded-xl border border-emerald-100">
        <span class="text-[10px] font-bold text-emerald-600 uppercase tracking-widest">Total Merits:</span>
        <span class="text-lg font-black text-emerald-700">{{ activeChild?.behaviorPoints || 0 }}</span>
      </div>
    </div>

    <div v-if="childBehavior.length === 0" class="py-12 text-center">
      <div class="w-16 h-16 bg-slate-50 rounded-full flex items-center justify-center mx-auto mb-4">
        <ShieldCheck class="w-8 h-8 text-slate-300" />
      </div>
      <p class="text-slate-400 font-medium italic">No recent behavior records found.</p>
    </div>

    <div v-else class="space-y-4">
      <div v-for="record in childBehavior" :key="record.id" 
        class="flex items-start gap-4 p-4 rounded-2xl border border-slate-50 bg-slate-50/30 hover:bg-white hover:border-indigo-100 hover:shadow-xl hover:shadow-indigo-500/5 transition-all group"
      >
        <div :class="[
          'w-12 h-12 rounded-xl flex items-center justify-center shrink-0 transition-transform group-hover:scale-110',
          record.type === 'positive' ? 'bg-emerald-50 text-emerald-600' : 'bg-rose-50 text-rose-600'
        ]">
          <component :is="getCategoryIcon(record.category)" class="w-6 h-6" />
        </div>
        
        <div class="flex-1">
          <div class="flex items-center justify-between mb-1">
            <h4 class="font-bold text-slate-800 capitalize">{{ record.category }}</h4>
            <span :class="[
              'text-[10px] font-black uppercase tracking-widest px-2 py-0.5 rounded-md',
              record.type === 'positive' ? 'text-emerald-600 bg-emerald-100/50' : 'text-rose-600 bg-rose-100/50'
            ]">
              {{ record.points > 0 ? '+' : '' }}{{ record.points }} Points
            </span>
          </div>
          <p class="text-sm text-slate-600 leading-relaxed">{{ record.comment }}</p>
          <div class="flex items-center gap-3 mt-3">
            <p class="text-[10px] font-bold text-slate-400 uppercase tracking-widest">By Prof. Wilson</p>
            <div class="w-1 h-1 bg-slate-200 rounded-full"></div>
            <p class="text-[10px] font-medium text-slate-400 uppercase tracking-widest">2 days ago</p>
          </div>
        </div>
      </div>
    </div>

    <button class="w-full mt-8 py-4 border-2 border-dashed border-slate-200 rounded-2xl text-slate-400 text-xs font-bold uppercase tracking-widest hover:border-indigo-300 hover:text-indigo-500 transition-all">
      View Full History
    </button>
  </div>
</template>
