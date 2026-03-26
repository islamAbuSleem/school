<template>
  <div class="max-w-[1600px] mx-auto pb-16">
    <div class="flex items-center justify-between mb-12">
      <div>
        <h2 class="text-5xl font-black text-[#0F172A] tracking-tighter">Fees & Payments</h2>
      </div>
      
      <button class="flex items-center space-x-3 px-8 py-4 bg-[#0F172A] text-white rounded-2xl shadow-lg hover:shadow-xl transition-all hover:scale-[1.02]">
        <CreditCard class="w-5 h-5" />
        <span class="text-sm font-black tracking-wider">Make a Payment</span>
      </button>
    </div>

    <div class="grid grid-cols-[1fr,380px] gap-12">
      <div class="space-y-12">
        <!-- Accounts Overview -->
        <FeesAccountsOverview />
        
        <!-- Transaction History -->
        <FeesTransactionHistory />
      </div>
      
      <div class="space-y-12">
        <!-- Saved Methods -->
        <FeesSavedMethods />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { CreditCard } from 'lucide-vue-next'
// Components are auto-imported by Nuxt
</script>
