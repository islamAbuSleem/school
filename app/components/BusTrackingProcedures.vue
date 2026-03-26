<script setup lang="ts">
import { ShieldCheck } from 'lucide-vue-next'
</script>

<template>
  <div class="mt-8 bg-red-50/50 rounded-[40px] p-10 border-l-8 border-red-600 shadow-sm ring-1 ring-red-100 relative group overflow-hidden">
    <div class="absolute -top-12 -right-12 w-64 h-64 bg-red-500/5 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
    
    <div class="flex items-start space-x-8 relative">
      <div class="p-4 bg-white rounded-2xl shadow-xl ring-1 ring-red-50 group-hover:scale-110 transition-transform">
        <ShieldCheck class="w-8 h-8 text-red-600" stroke-width="2.5" />
      </div>
      <div>
        <h4 class="text-xl font-black text-[#0F172A] tracking-tight mb-3 uppercase">Standard Procedures</h4>
        <p class="text-xs font-bold text-red-600/60 leading-relaxed max-w-sm uppercase tracking-widest">
          The bus is following all safety protocols. GPS updates every 5 seconds. In-cabin surveillance is active.
        </p>
      </div>
    </div>
  </div>
</template>
