<script setup lang="ts">
import { Wallet, CreditCard, Download, AlertCircle, CheckCircle2 } from 'lucide-vue-next'

const { myChildren, activeChild } = useParent()

const invoices = [
  { id: 'INV-2024-001', child: activeChild.value?.name || 'Child', type: 'Tuition', amount: 2500, dueDate: 'Jan 15, 2024', status: 'paid', paidDate: 'Jan 10, 2024' },
  { id: 'INV-2024-002', child: activeChild.value?.name || 'Child', type: 'Books & Materials', amount: 350, dueDate: 'Jan 20, 2024', status: 'paid', paidDate: 'Jan 18, 2024' },
  { id: 'INV-2024-003', child: activeChild.value?.name || 'Child', type: 'Transportation', amount: 400, dueDate: 'Feb 1, 2024', status: 'pending' },
  { id: 'INV-2024-004', child: activeChild.value?.name || 'Child', type: 'Activity Fee', amount: 150, dueDate: 'Feb 15, 2024', status: 'pending' },
]

const totalPending = computed(() => {
  return invoices.filter(i => i.status === 'pending').reduce((sum, i) => sum + i.amount, 0)
})

const totalPaid = computed(() => {
  return invoices.filter(i => i.status === 'paid').reduce((sum, i) => sum + i.amount, 0)
})

const payNow = (invoice: any) => {
  console.log('Processing payment for', invoice.id)
}
</script>

<template>
  <div class="max-w-[1600px] mx-auto pb-16 px-4 md:px-10">
    <div class="flex flex-col lg:flex-row lg:items-center justify-between mb-8 gap-4">
      <div>
        <p class="text-xs font-semibold text-accent uppercase tracking-wider mb-2">Parent Portal</p>
        <h2 class="page-title">Fees & Payments</h2>
      </div>
    </div>

    <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
      <div class="lg:col-span-2 space-y-6">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div class="glass-card-static p-6 border-l-4 border-l-rose-500">
            <div class="flex items-center justify-between mb-4">
              <div class="w-10 h-10 bg-rose-50 rounded-xl flex items-center justify-center text-rose-600">
                <AlertCircle class="w-5 h-5" />
              </div>
            </div>
            <p class="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Total Pending</p>
            <p class="text-3xl font-black text-slate-800">${{ totalPending.toLocaleString() }}</p>
          </div>
          
          <div class="glass-card-static p-6 border-l-4 border-l-emerald-500">
            <div class="flex items-center justify-between mb-4">
              <div class="w-10 h-10 bg-emerald-50 rounded-xl flex items-center justify-center text-emerald-600">
                <CheckCircle2 class="w-5 h-5" />
              </div>
            </div>
            <p class="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Total Paid</p>
            <p class="text-3xl font-black text-slate-800">${{ totalPaid.toLocaleString() }}</p>
          </div>
          
          <div class="glass-card-static p-6 border-l-4 border-l-indigo-500">
            <div class="flex items-center justify-between mb-4">
              <div class="w-10 h-10 bg-indigo-50 rounded-xl flex items-center justify-center text-indigo-600">
                <Wallet class="w-5 h-5" />
              </div>
            </div>
            <p class="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Children</p>
            <p class="text-3xl font-black text-slate-800">{{ myChildren.length }}</p>
          </div>
        </div>

        <div class="glass-card-static p-6">
          <h3 class="text-lg font-black text-slate-800 tracking-tight mb-6">Invoice History</h3>
          <div class="space-y-3">
            <div v-for="invoice in invoices" :key="invoice.id" 
              class="flex items-center justify-between p-5 bg-slate-50/50 rounded-2xl border border-slate-100 hover:border-indigo-200 transition-all"
            >
              <div class="flex items-center gap-4">
                <div class="w-12 h-12 rounded-xl flex items-center justify-center"
                  :class="invoice.status === 'paid' ? 'bg-emerald-50 text-emerald-600' : 'bg-amber-50 text-amber-600'"
                >
                  <CheckCircle2 v-if="invoice.status === 'paid'" class="w-6 h-6" />
                  <AlertCircle v-else class="w-6 h-6" />
                </div>
                <div>
                  <h4 class="font-bold text-slate-800">{{ invoice.type }}</h4>
                  <p class="text-xs text-slate-500">{{ invoice.id }}</p>
                </div>
              </div>
              <div class="flex items-center gap-6">
                <div class="text-right">
                  <p class="font-black text-slate-800">${{ invoice.amount.toLocaleString() }}</p>
                  <p class="text-xs text-slate-500">{{ invoice.status === 'paid' ? 'Paid ' + invoice.paidDate : 'Due ' + invoice.dueDate }}</p>
                </div>
                <span :class="[
                  'text-xs font-black uppercase px-3 py-1.5 rounded-lg',
                  invoice.status === 'paid' ? 'text-emerald-600 bg-emerald-100' : 'text-amber-600 bg-amber-100'
                ]">
                  {{ invoice.status }}
                </span>
                <button v-if="invoice.status === 'pending'" @click="payNow(invoice)" class="btn-primary px-4 py-2 text-xs">
                  Pay Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="space-y-6">
        <div class="glass-card-static p-6">
          <h3 class="text-lg font-black text-slate-800 tracking-tight mb-6">Payment Methods</h3>
          <div class="space-y-3">
            <div class="flex items-center justify-between p-4 bg-slate-50 rounded-xl border border-indigo-200">
              <div class="flex items-center gap-3">
                <div class="w-10 h-10 bg-white rounded-lg flex items-center justify-center shadow-sm">
                  <CreditCard class="w-5 h-5 text-slate-600" />
                </div>
                <div>
                  <p class="text-sm font-bold text-slate-800">Visa ending in 4242</p>
                  <p class="text-xs text-slate-500">Expires 12/25</p>
                </div>
              </div>
              <span class="text-[10px] font-black text-indigo-600 bg-indigo-100 px-2 py-1 rounded-full uppercase">Default</span>
            </div>
            <button class="w-full py-3 border-2 border-dashed border-slate-200 rounded-xl text-slate-400 text-sm font-bold hover:border-indigo-300 hover:text-indigo-500 transition-all">
              + Add Payment Method
            </button>
          </div>
        </div>

        <div class="glass-card-static p-6 bg-primary text-white">
          <h3 class="text-lg font-black tracking-tight mb-4">Auto-Pay</h3>
          <p class="text-xs text-slate-400 leading-relaxed mb-6">
            Enable auto-pay to automatically settle invoices on their due date.
          </p>
          <button class="w-full py-3 bg-white text-primary font-bold rounded-xl hover:bg-slate-100 transition-colors">
            Enable Auto-Pay
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
