<script setup lang="ts">
import { ShieldCheck } from 'lucide-vue-next'
</script>

<template>
  <div class="bg-red-50/50 rounded-[40px] p-10 border-l-8 border-red-600 shadow-sm ring-1 ring-red-100 relative group overflow-hidden">
    <div class="absolute -top-12 -right-12 w-64 h-64 bg-red-500/5 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
    
    <div class="flex flex-col space-y-6 relative">
      <div class="flex items-start space-x-6">
        <div class="p-4 bg-white rounded-2xl shadow-xl ring-1 ring-red-50 group-hover:scale-110 transition-transform flex-shrink-0">
          <ShieldCheck class="w-8 h-8 text-red-600" stroke-width="2.5" />
        </div>
        <div>
          <h4 class="text-xl font-black text-[#0F172A] tracking-tight mb-2 uppercase">Safety Protocols</h4>
          <p class="text-[10px] font-bold text-slate-500 leading-relaxed uppercase tracking-widest">
            Real-time GPS Monitoring • Biometric Driver Auth • AI-Powered Collision Warning Active
          </p>
        </div>
      </div>

      <div class="space-y-3 pt-4 border-t border-red-100">
        <div class="flex items-center justify-between">
          <span class="text-[9px] font-black text-red-600/60 uppercase tracking-widest">Emergency Contact</span>
          <span class="text-[10px] font-black text-[#0F172A]">+1 (800) 555-SAFE</span>
        </div>
        <div class="flex items-center justify-between">
          <span class="text-[9px] font-black text-red-600/60 uppercase tracking-widest">Dispatch Center</span>
          <span class="text-[10px] font-black text-[#0F172A]">Active - 24/7</span>
        </div>
      </div>
    </div>
  </div>
</template>
