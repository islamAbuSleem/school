<template>
  <div class="max-w-[1600px] mx-auto pb-16">
    <div class="flex flex-col lg:flex-row lg:items-center justify-between mb-8 gap-4">
      <div>
        <h2 class="page-title">Fees & Payments</h2>
      </div>
      
      <button class="btn-primary flex items-center self-start lg:self-auto">
        <CreditCard class="w-4 h-4 mr-2" />
        Make a Payment
      </button>
    </div>

    <div class="grid grid-cols-1 lg:grid-cols-[1fr,350px] gap-6">
      <div class="space-y-6">
        <FeesAccountsOverview />
        <FeesTransactionHistory />
      </div>
      
      <div>
        <FeesSavedMethods />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { CreditCard } from 'lucide-vue-next'
</script>
