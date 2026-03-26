<template>
  <div class="space-y-6">
    <div class="flex items-center justify-between">
      <h3 class="text-2xl font-black text-[#0F172A] tracking-tighter">Saved Methods</h3>
      <button class="p-2 text-slate-400 hover:text-[#0F172A] transition-colors">
        <Plus class="w-6 h-6" />
      </button>
    </div>

    <div class="space-y-3">
      <!-- Visa Platinum Card -->
      <div class="bg-white rounded-xl p-4 shadow-sm ring-1 ring-slate-100 hover:shadow-md transition-all cursor-pointer group">
        <div class="flex items-center justify-between">
          <div class="flex items-center space-x-3">
            <div class="w-12 h-12 bg-[#0F172A] rounded-lg flex items-center justify-center">
              <span class="text-white font-black text-xs">VISA</span>
            </div>
            <div>
              <p class="text-sm font-bold text-[#0F172A]">Visa Platinum</p>
              <p class="text-xs text-slate-400 font-semibold">•••• 4242 | Exp 12/26</p>
            </div>
          </div>
          <div class="w-6 h-6 border-2 border-slate-200 rounded-full group-hover:border-[#0F172A] transition-colors"></div>
        </div>
      </div>

      <!-- St. Edwards Credit Union Card -->
      <div class="bg-white rounded-xl p-4 shadow-sm ring-1 ring-slate-100 hover:shadow-md transition-all cursor-pointer group">
        <div class="flex items-center justify-between">
          <div class="flex items-center space-x-3">
            <div class="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center">
              <Building2 class="w-6 h-6 text-slate-600" />
            </div>
            <div>
              <p class="text-sm font-bold text-[#0F172A]">St. Edwards Credit Union</p>
              <p class="text-xs text-slate-400 font-semibold">•••• 1009 | Savings</p>
            </div>
          </div>
          <div class="w-6 h-6 border-2 border-slate-200 rounded-full group-hover:border-[#0F172A] transition-colors"></div>
        </div>
      </div>
    </div>

    <!-- Quick Mobile Pay Section -->
    <div class="bg-gradient-to-br from-red-50 to-orange-50 rounded-2xl p-6 space-y-4 border border-red-100">
      <div>
        <p class="text-xs font-black text-red-600 tracking-widest uppercase mb-1">QUICK MOBILE PAY</p>
        <p class="text-sm font-bold text-slate-700">Scan to pay via School App</p>
      </div>

      <div class="flex justify-center py-4">
        <div class="w-32 h-32 bg-[#0F172A] rounded-lg p-2 flex items-center justify-center">
          <!-- QR Code representation -->
          <div class="w-full h-full grid grid-cols-5 gap-0.5">
            <div v-for="i in 25" :key="i" :class="getQRPattern(i)" class="rounded-sm"></div>
          </div>
        </div>
      </div>

      <p class="text-xs text-slate-600 text-center font-semibold">
        Securely authorise payments from your mobile device using Biometric ID.
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Plus, Building2 } from 'lucide-vue-next'

// Generate a pseudo-random QR pattern for visual representation
const getQRPattern = (index: number) => {
  const patterns = [0, 1, 0, 1, 1, 1, 0, 1, 0, 1, 1, 0, 0, 1, 1, 0, 1, 0, 0, 0, 1, 0, 1, 1, 0]
  return patterns[index] ? 'bg-white' : 'bg-slate-700'
}
</script>
