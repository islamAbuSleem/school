<template>
  <div class="max-w-[1600px] mx-auto pb-16 px-4 md:px-10">
    <div class="flex flex-col md:flex-row items-start md:items-center justify-between mb-8 md:mb-12 gap-4">
      <div>
        <h2 class="text-3xl md:text-5xl font-black text-[#0F172A] tracking-tighter">Fees & Payments</h2>
      </div>
      
      <button class="w-full md:w-auto flex items-center justify-center md:justify-start space-x-3 px-6 md:px-8 py-3 md:py-4 bg-[#0F172A] text-white rounded-xl md:rounded-2xl shadow-lg hover:shadow-xl transition-all hover:scale-[1.02]">
        <CreditCard class="w-4 md:w-5 h-4 md:h-5" />
        <span class="text-xs md:text-sm font-black tracking-wider">Make a Payment</span>
      </button>
    </div>

    <div class="grid grid-cols-1 lg:grid-cols-[1fr,380px] gap-8 md:gap-12">
      <div class="space-y-8 md:space-y-12">
        <!-- Accounts Overview -->
        <FeesAccountsOverview />
        
        <!-- Transaction History -->
        <FeesTransactionHistory />
      </div>
      
      <div class="space-y-8 md:space-y-12">
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
