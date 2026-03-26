<script setup lang="ts">
import { UserPlus } from 'lucide-vue-next'
</script>

<template>
  <div class="flex items-end justify-between mb-12">
    <div>
      <div class="flex items-center space-x-3 text-[10px] font-black tracking-[0.3em] text-slate-300 uppercase mb-4">
        <span>DASHBOARD</span>
        <span class="text-slate-200">/</span>
        <span class="text-slate-400">STUDENT DIRECTORY</span>
      </div>
      <h2 class="text-5xl font-black text-[#0F172A] tracking-tighter">Student Management</h2>
      <p class="text-lg font-bold text-slate-400 mt-4 leading-relaxed max-w-xl">
        Maintain high-prestige academic records and institutional integrity through our editorial data suite.
      </p>
    </div>
    
    <button class="bg-[#0F172A] text-white px-10 py-5 rounded-[24px] font-black text-[11px] tracking-widest flex items-center shadow-2xl shadow-slate-200 hover:bg-slate-800 transition-all uppercase">
      <UserPlus class="w-5 h-5 mr-4" />
      Add New Student
    </button>
  </div>
</template>
