<template>
  <div class="space-y-4 md:space-y-6">
    <div class="flex flex-col md:flex-row items-start md:items-center justify-between gap-2">
      <h3 class="text-xl md:text-2xl font-black text-[#0F172A] tracking-tighter">Transaction History</h3>
      <button class="flex items-center space-x-2 px-3 md:px-4 py-2 text-[10px] md:text-xs font-black text-slate-600 tracking-wider uppercase hover:text-[#0F172A] transition-colors whitespace-nowrap">
        <Download class="w-3 md:w-4 h-3 md:h-4" />
        <span>Download Statement</span>
      </button>
    </div>

    <!-- Desktop Table View -->
    <div class="hidden md:block bg-white rounded-2xl shadow-sm ring-1 ring-slate-100 overflow-hidden">
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

    <!-- Mobile Card View -->
    <div class="md:hidden space-y-3">
      <!-- Transaction Card 1 -->
      <div class="bg-white rounded-lg p-4 shadow-sm ring-1 ring-slate-100">
        <div class="flex items-start space-x-3 mb-3">
          <div class="w-10 h-10 bg-slate-100 rounded-lg flex items-center justify-center flex-shrink-0">
            <GraduationCap class="w-5 h-5 text-slate-400" />
          </div>
          <div class="flex-1 min-w-0">
            <p class="text-sm font-black text-[#0F172A] truncate">Fall Quarter Tuition</p>
            <p class="text-xs text-slate-400 font-semibold">INV-2023-089</p>
          </div>
        </div>
        <div class="space-y-2 border-t border-slate-100 pt-3">
          <div class="flex justify-between text-xs">
            <span class="text-slate-500 font-semibold">Date:</span>
            <span class="font-bold text-slate-700">Sep 12, 2023</span>
          </div>
          <div class="flex justify-between text-xs">
            <span class="text-slate-500 font-semibold">Method:</span>
            <div class="flex items-center space-x-1">
              <CreditCard class="w-3 h-3" />
              <span class="font-bold text-slate-700">Visa •• 4242</span>
            </div>
          </div>
          <div class="flex justify-between text-xs pt-1 border-t border-slate-100">
            <span class="text-slate-500 font-semibold">Amount:</span>
            <span class="font-bold text-slate-900">$12,000.00</span>
          </div>
        </div>
      </div>

      <!-- Transaction Card 2 -->
      <div class="bg-white rounded-lg p-4 shadow-sm ring-1 ring-slate-100">
        <div class="flex items-start space-x-3 mb-3">
          <div class="w-10 h-10 bg-amber-50 rounded-lg flex items-center justify-center flex-shrink-0">
            <Zap class="w-5 h-5 text-amber-600" />
          </div>
          <div class="flex-1 min-w-0">
            <p class="text-sm font-black text-[#0F172A] truncate">Athletics & Club Fees</p>
            <p class="text-xs text-slate-400 font-semibold">ACT-9921</p>
          </div>
        </div>
        <div class="space-y-2 border-t border-slate-100 pt-3">
          <div class="flex justify-between text-xs">
            <span class="text-slate-500 font-semibold">Date:</span>
            <span class="font-bold text-slate-700">Sep 15, 2023</span>
          </div>
          <div class="flex justify-between text-xs">
            <span class="text-slate-500 font-semibold">Method:</span>
            <div class="flex items-center space-x-1">
              <Building2 class="w-3 h-3" />
              <span class="font-bold text-slate-700">Bank •• 1009</span>
            </div>
          </div>
          <div class="flex justify-between text-xs pt-1 border-t border-slate-100">
            <span class="text-slate-500 font-semibold">Amount:</span>
            <span class="font-bold text-slate-900">$450.00</span>
          </div>
        </div>
      </div>

      <!-- Transaction Card 3 -->
      <div class="bg-white rounded-lg p-4 shadow-sm ring-1 ring-slate-100">
        <div class="flex items-start space-x-3 mb-3">
          <div class="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center flex-shrink-0">
            <BookOpen class="w-5 h-5 text-blue-600" />
          </div>
          <div class="flex-1 min-w-0">
            <p class="text-sm font-black text-[#0F172A] truncate">Resource & Tech Lab Fee</p>
            <p class="text-xs text-slate-400 font-semibold">LAB-4402</p>
          </div>
        </div>
        <div class="space-y-2 border-t border-slate-100 pt-3">
          <div class="flex justify-between text-xs">
            <span class="text-slate-500 font-semibold">Date:</span>
            <span class="font-bold text-slate-700">Sep 18, 2023</span>
          </div>
          <div class="flex justify-between text-xs">
            <span class="text-slate-500 font-semibold">Method:</span>
            <div class="flex items-center space-x-1">
              <CreditCard class="w-3 h-3" />
              <span class="font-bold text-slate-700">Visa •• 4242</span>
            </div>
          </div>
          <div class="flex justify-between text-xs pt-1 border-t border-slate-100">
            <span class="text-slate-500 font-semibold">Amount:</span>
            <span class="font-bold text-slate-900">$350.00</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Download, GraduationCap, CreditCard, Zap, Building2, BookOpen } from 'lucide-vue-next'
</script>
