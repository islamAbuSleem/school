<script setup lang="ts">
import { AlertTriangle } from 'lucide-vue-next'
</script>

<template>
  <div class="bg-red-50 border border-red-100 rounded-3xl p-6 flex items-center space-x-6 mt-8">
    <div class="bg-white p-4 rounded-2xl shadow-sm">
      <AlertTriangle class="w-8 h-8 text-red-600" fill="currentColor" />
    </div>
    <div>
      <h4 class="text-lg font-bold text-red-900 leading-tight">4 Students Unaccounted</h4>
      <p class="text-sm font-medium text-red-600 mt-1">
        System will mark as absent in 15 mins
      </p>
    </div>
  </div>
</template>
