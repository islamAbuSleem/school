<script setup lang="ts">
import { 
  ArrowLeft, 
  Download, 
  Printer, 
  CheckCircle2, 
  Building2, 
  CreditCard, 
  Calendar,
  FileText,
  Mail
} from 'lucide-vue-next'

const route = useRoute()
const invoiceId = route.params.id

const invoice = {
  id: invoiceId,
  status: 'PAID',
  date: 'Sep 12, 2023',
  dueDate: 'Sep 30, 2023',
  amount: 12000.00,
  tax: 600.00,
  total: 12600.00,
  method: 'Visa •••• 4242',
  description: 'Fall Quarter Tuition - Grade 12',
  items: [
    { name: 'Base Tuition Fee', description: 'Academic Year 2023/24 - Q1', amount: 10500.00 },
    { name: 'Technology & Resource Fee', description: 'Software licenses & lab access', amount: 800.00 },
    { name: 'Extracurricular Activities', description: 'Mandatory student union & clubs', amount: 700.00 },
  ],
  student: {
    name: 'Julian Thorne',
    id: 'PA-2024-0812',
    grade: 'Grade 12-A'
  }
}

const { success } = useToast()
const handlePrint = () => {
  window.print()
}
const handleDownload = () => {
  success('Invoice Downloaded', `Invoice ${invoice.id} has been saved as PDF.`)
}
</script>

<template>
  <div class="max-w-[1000px] mx-auto pb-16 px-4 md:px-10">
    <!-- Actions -->
    <div class="flex items-center justify-between mb-8 no-print">
      <NuxtLink to="/fees" class="flex items-center text-sm font-bold text-slate-400 hover:text-accent transition-colors group">
        <ArrowLeft class="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
        Back to Accounts
      </NuxtLink>
      
      <div class="flex items-center gap-3">
        <button @click="handlePrint" class="btn-secondary px-4 py-2 flex items-center text-xs">
          <Printer class="w-4 h-4 mr-2" />
          Print
        </button>
        <button @click="handleDownload" class="btn-primary px-4 py-2 flex items-center text-xs">
          <Download class="w-4 h-4 mr-2" />
          Download PDF
        </button>
      </div>
    </div>

    <!-- Invoice Card -->
    <div class="bg-white rounded-[2rem] shadow-2xl shadow-slate-200/50 overflow-hidden border border-slate-100">
      <!-- Header -->
      <div class="p-8 md:p-12 bg-slate-50 border-b border-slate-100 flex flex-col md:flex-row justify-between gap-8">
        <div>
          <div class="flex items-center gap-3 mb-6">
            <div class="w-12 h-12 bg-accent rounded-2xl flex items-center justify-center">
              <Building2 class="w-6 h-6 text-white" />
            </div>
            <div>
              <h2 class="text-xl font-black text-slate-800 tracking-tight">St. Edwards Academy</h2>
              <p class="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Financial Department</p>
            </div>
          </div>
          <div class="space-y-1">
            <p class="text-sm text-slate-500">1200 Academy Way</p>
            <p class="text-sm text-slate-500">Oxford, OX1 2JD</p>
            <p class="text-sm text-slate-500">United Kingdom</p>
          </div>
        </div>

        <div class="text-left md:text-right">
          <h1 class="text-4xl font-black text-slate-800 mb-2">INVOICE</h1>
          <p class="text-lg font-bold text-accent mb-4">{{ invoice.id }}</p>
          <div class="inline-flex items-center px-4 py-1.5 bg-emerald-100 text-emerald-600 rounded-full text-[10px] font-black uppercase tracking-widest">
            <CheckCircle2 class="w-3.5 h-3.5 mr-2" />
            {{ invoice.status }}
          </div>
        </div>
      </div>

      <!-- Details Grid -->
      <div class="p-8 md:p-12 grid grid-cols-1 md:grid-cols-3 gap-12">
        <div>
          <h4 class="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-4">Billed To</h4>
          <p class="font-bold text-slate-800 text-lg mb-1">{{ invoice.student.name }}</p>
          <p class="text-sm text-slate-500 mb-1">ID: {{ invoice.student.id }}</p>
          <p class="text-sm text-slate-500">{{ invoice.student.grade }}</p>
        </div>

        <div>
          <h4 class="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-4">Payment Details</h4>
          <div class="flex items-center gap-3 mb-2">
            <CreditCard class="w-4 h-4 text-slate-400" />
            <p class="text-sm font-semibold text-slate-700">{{ invoice.method }}</p>
          </div>
          <div class="flex items-center gap-3">
            <Calendar class="w-4 h-4 text-slate-400" />
            <p class="text-sm font-semibold text-slate-700">Paid on {{ invoice.date }}</p>
          </div>
        </div>

        <div>
          <h4 class="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-4">Summary</h4>
          <div class="space-y-2">
            <div class="flex justify-between text-sm">
              <span class="text-slate-400">Date Issued</span>
              <span class="font-bold text-slate-700">{{ invoice.date }}</span>
            </div>
            <div class="flex justify-between text-sm">
              <span class="text-slate-400">Due Date</span>
              <span class="font-bold text-slate-700">{{ invoice.dueDate }}</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Table -->
      <div class="px-8 md:px-12 pb-12">
        <div class="bg-slate-50 rounded-3xl overflow-hidden border border-slate-100">
          <table class="w-full text-left">
            <thead>
              <tr class="border-b border-slate-200">
                <th class="px-8 py-5 text-[10px] font-black text-slate-400 uppercase tracking-widest">Description</th>
                <th class="px-8 py-5 text-right text-[10px] font-black text-slate-400 uppercase tracking-widest">Amount</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-slate-100">
              <tr v-for="item in invoice.items" :key="item.name">
                <td class="px-8 py-6">
                  <p class="font-bold text-slate-800 mb-1">{{ item.name }}</p>
                  <p class="text-xs text-slate-400">{{ item.description }}</p>
                </td>
                <td class="px-8 py-6 text-right font-bold text-slate-700">
                  ${{ item.amount.toLocaleString(undefined, { minimumFractionDigits: 2 }) }}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <!-- Footer Totals -->
      <div class="p-8 md:p-12 bg-slate-900 text-white flex flex-col md:flex-row justify-between items-center gap-8">
        <div class="flex items-center gap-4 opacity-50">
          <FileText class="w-8 h-8" />
          <p class="text-[10px] font-medium leading-relaxed max-w-[200px] uppercase tracking-wider">
            Thank you for your timely payment. This is a computer generated document and requires no signature.
          </p>
        </div>

        <div class="w-full md:w-64 space-y-3">
          <div class="flex justify-between text-slate-400 text-sm">
            <span>Subtotal</span>
            <span>${{ invoice.amount.toLocaleString(undefined, { minimumFractionDigits: 2 }) }}</span>
          </div>
          <div class="flex justify-between text-slate-400 text-sm">
            <span>Tax (5%)</span>
            <span>${{ invoice.tax.toLocaleString(undefined, { minimumFractionDigits: 2 }) }}</span>
          </div>
          <div class="pt-3 border-t border-white/10 flex justify-between items-end">
            <span class="text-[10px] font-black uppercase tracking-widest text-accent">Total Paid</span>
            <span class="text-3xl font-black">${{ invoice.total.toLocaleString(undefined, { minimumFractionDigits: 2 }) }}</span>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<style scoped>
@media print {
  .no-print { display: none !important; }
  body { background: white !important; padding: 0 !important; }
  .max-w-\[1000px\] { max-width: 100% !important; padding: 0 !important; }
  .shadow-2xl { box-shadow: none !important; }
  .rounded-\[2rem\] { border-radius: 0 !important; }
}
</style>
