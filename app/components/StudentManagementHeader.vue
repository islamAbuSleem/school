<script setup lang="ts">
import { UserPlus } from 'lucide-vue-next'
</script>

<template>
  <div class="flex flex-col lg:flex-row lg:items-end justify-between mb-8 gap-4">
    <div>
      <div class="flex items-center space-x-2 text-xs font-medium text-slate-400 uppercase tracking-wider mb-3">
        <span>Dashboard</span>
        <span class="text-slate-300">/</span>
        <span class="text-accent">Student Directory</span>
      </div>
      <h2 class="page-title">Student Management</h2>
      <p class="text-slate-500 mt-2 leading-relaxed max-w-xl">
        Maintain academic records and institutional integrity through our comprehensive data suite.
      </p>
    </div>
    
    <button class="btn-primary flex items-center self-start lg:self-auto">
      <UserPlus class="w-4 h-4 mr-2" />
      Add New Student
    </button>
  </div>
</template>
