<template>
  <div class="space-y-6">
    <div class="flex items-center justify-between">
      <h3 class="section-title">Transaction History</h3>
      <button class="flex items-center gap-2 px-4 py-2 text-sm font-medium text-slate-500 hover:text-accent transition-colors">
        <Download class="w-4 h-4" />
        Download Statement
      </button>
    </div>

    <div class="glass-card-static overflow-hidden">
      <table class="w-full">
        <thead>
          <tr class="border-b border-slate-100">
            <th class="px-6 py-4 text-left text-xs font-medium text-slate-400 uppercase tracking-wider">Description</th>
            <th class="px-6 py-4 text-left text-xs font-medium text-slate-400 uppercase tracking-wider">Date</th>
            <th class="px-6 py-4 text-left text-xs font-medium text-slate-400 uppercase tracking-wider">Method</th>
            <th class="px-6 py-4 text-left text-xs font-medium text-slate-400 uppercase tracking-wider">Amount</th>
          </tr>
        </thead>
        <tbody>
          <tr class="border-b border-slate-50 hover:bg-slate-50 transition-colors">
            <td class="px-6 py-5">
              <div class="flex items-center gap-4">
                <div class="w-10 h-10 bg-slate-100 rounded-xl flex items-center justify-center">
                  <GraduationCap class="w-5 h-5 text-slate-400" />
                </div>
                <div>
                  <p class="text-sm font-semibold text-slate-700">Fall Quarter Tuition</p>
                  <p class="text-xs text-slate-400">INV-2023-089</p>
                </div>
              </div>
            </td>
            <td class="px-6 py-5">
              <p class="text-sm font-medium text-slate-600">Sep 12, 2023</p>
            </td>
            <td class="px-6 py-5">
              <div class="flex items-center gap-2 text-slate-600">
                <CreditCard class="w-4 h-4" />
                <span class="text-sm font-medium">Visa ••••</span>
                <span class="text-xs text-slate-400">4242</span>
              </div>
            </td>
            <td class="px-6 py-5">
              <p class="text-sm font-bold text-slate-800">$12,000.00</p>
            </td>
          </tr>

          <tr class="border-b border-slate-50 hover:bg-slate-50 transition-colors">
            <td class="px-6 py-5">
              <div class="flex items-center gap-4">
                <div class="w-10 h-10 bg-amber-50 rounded-xl flex items-center justify-center">
                  <Zap class="w-5 h-5 text-amber-500" />
                </div>
                <div>
                  <p class="text-sm font-semibold text-slate-700">Athletics & Club Fees</p>
                  <p class="text-xs text-slate-400">ACT-9921</p>
                </div>
              </div>
            </td>
            <td class="px-6 py-5">
              <p class="text-sm font-medium text-slate-600">Sep 15, 2023</p>
            </td>
            <td class="px-6 py-5">
              <div class="flex items-center gap-2 text-slate-600">
                <Building2 class="w-4 h-4" />
                <span class="text-sm font-medium">Bank ••••</span>
                <span class="text-xs text-slate-400">1009</span>
              </div>
            </td>
            <td class="px-6 py-5">
              <p class="text-sm font-bold text-slate-800">$450.00</p>
            </td>
          </tr>

          <tr class="hover:bg-slate-50 transition-colors">
            <td class="px-6 py-5">
              <div class="flex items-center gap-4">
                <div class="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center">
                  <BookOpen class="w-5 h-5 text-blue-500" />
                </div>
                <div>
                  <p class="text-sm font-semibold text-slate-700">Resource & Tech Lab Fee</p>
                  <p class="text-xs text-slate-400">LAB-4402</p>
                </div>
              </div>
            </td>
            <td class="px-6 py-5">
              <p class="text-sm font-medium text-slate-600">Sep 18, 2023</p>
            </td>
            <td class="px-6 py-5">
              <div class="flex items-center gap-2 text-slate-600">
                <CreditCard class="w-4 h-4" />
                <span class="text-sm font-medium">Visa ••••</span>
                <span class="text-xs text-slate-400">4242</span>
              </div>
            </td>
            <td class="px-6 py-5">
              <p class="text-sm font-bold text-slate-800">$350.00</p>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Download, GraduationCap, CreditCard, Zap, Building2, BookOpen } from 'lucide-vue-next'
</script>
