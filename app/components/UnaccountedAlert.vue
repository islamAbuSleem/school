<script setup lang="ts">
import { AlertTriangle } from 'lucide-vue-next'
</script>

<template>
  <div class="bg-amber-50 border border-amber-100 rounded-2xl p-4 flex items-center gap-4">
    <div class="bg-white p-3 rounded-xl shadow-sm">
      <AlertTriangle class="w-6 h-6 text-amber-500" fill="currentColor" />
    </div>
    <div>
      <h4 class="text-base font-semibold text-amber-900">4 Students Unaccounted</h4>
      <p class="text-sm text-amber-600 mt-0.5">
        System will mark as absent in 15 mins
      </p>
    </div>
  </div>
</template>
