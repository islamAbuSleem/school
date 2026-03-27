<template>
  <div class="space-y-6">
    <div class="flex items-center justify-between">
      <h3 class="section-title">Saved Methods</h3>
      <button class="p-2 text-slate-400 hover:text-accent transition-colors rounded-lg hover:bg-slate-50">
        <Plus class="w-5 h-5" />
      </button>
    </div>

    <div class="space-y-3">
      <div class="glass-card-static p-4 hover:scale-[1.01] transition-transform cursor-pointer group">
        <div class="flex items-center justify-between">
          <div class="flex items-center gap-3">
            <div class="w-11 h-11 bg-primary rounded-xl flex items-center justify-center">
              <span class="text-white font-bold text-xs">VISA</span>
            </div>
            <div>
              <p class="text-sm font-semibold text-slate-700">Visa Platinum</p>
              <p class="text-xs text-slate-400">•••• 4242 | Exp 12/26</p>
            </div>
          </div>
          <div class="w-5 h-5 border-2 border-slate-200 rounded-full group-hover:border-accent transition-colors"></div>
        </div>
      </div>

      <div class="glass-card-static p-4 hover:scale-[1.01] transition-transform cursor-pointer group">
        <div class="flex items-center justify-between">
          <div class="flex items-center gap-3">
            <div class="w-11 h-11 bg-slate-100 rounded-xl flex items-center justify-center">
              <Building2 class="w-5 h-5 text-slate-600" />
            </div>
            <div>
              <p class="text-sm font-semibold text-slate-700">St. Edwards Credit Union</p>
              <p class="text-xs text-slate-400">•••• 1009 | Savings</p>
            </div>
          </div>
          <div class="w-5 h-5 border-2 border-slate-200 rounded-full group-hover:border-accent transition-colors flex-shrink-0"></div>
        </div>
      </div>
    </div>

    <div class="bg-gradient-to-br from-red-50 to-orange-50 rounded-2xl p-5 border border-red-100 mt-4">
      <div class="mb-3">
        <p class="text-xs font-semibold text-red-500 uppercase tracking-wider mb-1">Quick Mobile Pay</p>
        <p class="text-sm font-medium text-slate-700">Scan to pay via School App</p>
      </div>

      <div class="flex justify-center py-4">
        <div class="w-28 h-28 bg-primary rounded-xl p-2 flex items-center justify-center">
          <div class="w-full h-full grid grid-cols-5 gap-0.5">
            <div v-for="i in 25" :key="i" :class="getQRPattern(i)" class="rounded-sm"></div>
          </div>
        </div>
      </div>

      <p class="text-xs text-slate-500 text-center leading-relaxed">
        Securely authorise payments from your mobile device using Biometric ID.
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Plus, Building2 } from 'lucide-vue-next'

const getQRPattern = (index: number) => {
  const patterns = [0, 1, 0, 1, 1, 1, 0, 1, 0, 1, 1, 0, 0, 1, 1, 0, 1, 0, 0, 0, 1, 0, 1, 1, 0]
  return patterns[index] ? 'bg-white' : 'bg-slate-700'
}
</script>
