<template>
  <div class="space-y-6">
    <div class="flex items-center justify-between">
      <h3 class="text-2xl font-black text-[#0F172A] tracking-tighter">Transaction History</h3>
      <button class="flex items-center space-x-2 px-4 py-2 text-xs font-black text-slate-600 tracking-wider uppercase hover:text-[#0F172A] transition-colors">
        <Download class="w-4 h-4" />
        <span>Download Statement</span>
      </button>
    </div>

    <div class="bg-white rounded-2xl shadow-sm ring-1 ring-slate-100 overflow-hidden">
      <table class="w-full">
        <thead>
          <tr class="border-b border-slate-100">
            <th class="px-6 py-4 text-left text-xs font-black text-slate-400 tracking-widest uppercase">DESCRIPTION</th>
            <th class="px-6 py-4 text-left text-xs font-black text-slate-400 tracking-widest uppercase">DATE</th>
            <th class="px-6 py-4 text-left text-xs font-black text-slate-400 tracking-widest uppercase">METHOD</th>
            <th class="px-6 py-4 text-left text-xs font-black text-slate-400 tracking-widest uppercase">AMOUNT</th>
          </tr>
        </thead>
        <tbody>
          <!-- Transaction Row 1 -->
          <tr class="border-b border-slate-50 hover:bg-slate-50 transition-colors">
            <td class="px-6 py-6">
              <div class="flex items-center space-x-4">
                <div class="w-12 h-12 bg-slate-100 rounded-xl flex items-center justify-center">
                  <GraduationCap class="w-6 h-6 text-slate-400" />
                </div>
                <div>
                  <p class="text-sm font-black text-[#0F172A]">Fall Quarter Tuition</p>
                  <p class="text-xs text-slate-400 font-semibold">INV-2023-089</p>
                </div>
              </div>
            </td>
            <td class="px-6 py-6">
              <p class="text-sm font-bold text-slate-600">Sep 12, 2023</p>
            </td>
            <td class="px-6 py-6">
              <div class="flex items-center space-x-2 text-slate-700">
                <CreditCard class="w-4 h-4" />
                <span class="text-sm font-bold">Visa ••••</span>
                <span class="text-xs text-slate-400">4242</span>
              </div>
            </td>
            <td class="px-6 py-6">
              <p class="text-sm font-bold text-slate-900">$12,000.00</p>
            </td>
          </tr>

          <!-- Transaction Row 2 -->
          <tr class="border-b border-slate-50 hover:bg-slate-50 transition-colors">
            <td class="px-6 py-6">
              <div class="flex items-center space-x-4">
                <div class="w-12 h-12 bg-amber-50 rounded-xl flex items-center justify-center">
                  <Zap class="w-6 h-6 text-amber-600" />
                </div>
                <div>
                  <p class="text-sm font-black text-[#0F172A]">Athletics & Club Fees</p>
                  <p class="text-xs text-slate-400 font-semibold">ACT-9921</p>
                </div>
              </div>
            </td>
            <td class="px-6 py-6">
              <p class="text-sm font-bold text-slate-600">Sep 15, 2023</p>
            </td>
            <td class="px-6 py-6">
              <div class="flex items-center space-x-2 text-slate-700">
                <Building2 class="w-4 h-4" />
                <span class="text-sm font-bold">Bank ••••</span>
                <span class="text-xs text-slate-400">1009</span>
              </div>
            </td>
            <td class="px-6 py-6">
              <p class="text-sm font-bold text-slate-900">$450.00</p>
            </td>
          </tr>

          <!-- Transaction Row 3 -->
          <tr class="hover:bg-slate-50 transition-colors">
            <td class="px-6 py-6">
              <div class="flex items-center space-x-4">
                <div class="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center">
                  <BookOpen class="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <p class="text-sm font-black text-[#0F172A]">Resource & Tech Lab Fee</p>
                  <p class="text-xs text-slate-400 font-semibold">LAB-4402</p>
                </div>
              </div>
            </td>
            <td class="px-6 py-6">
              <p class="text-sm font-bold text-slate-600">Sep 18, 2023</p>
            </td>
            <td class="px-6 py-6">
              <div class="flex items-center space-x-2 text-slate-700">
                <CreditCard class="w-4 h-4" />
                <span class="text-sm font-bold">Visa ••••</span>
                <span class="text-xs text-slate-400">4242</span>
              </div>
            </td>
            <td class="px-6 py-6">
              <p class="text-sm font-bold text-slate-900">$350.00</p>
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
