<script setup lang="ts">
import { QrCode, Camera } from 'lucide-vue-next'

const { info, success } = useToast()

const handleScan = () => {
  info('QR Scanner', 'Opening camera for QR code scanning...')
  setTimeout(() => {
    success('QR Code Scanned', 'Guest registration link generated')
  }, 1500)
}
</script>

<template>
  <div class="glass-card-static p-8 flex flex-col items-center justify-center relative overflow-hidden group">
    <div class="absolute -top-8 -right-8 w-24 h-24 bg-indigo-100 rounded-full blur-3xl opacity-50 group-hover:opacity-100 transition-opacity"></div>
    <div class="absolute -bottom-8 -left-8 w-24 h-24 bg-purple-100 rounded-full blur-3xl opacity-50 group-hover:opacity-100 transition-opacity"></div>

    <div class="relative w-36 h-36 mb-6 bg-white p-4 rounded-2xl shadow-lg flex items-center justify-center transform group-hover:scale-105 transition-all duration-300 cursor-pointer" @click="handleScan">
      <QrCode class="w-full h-full text-slate-800" stroke-width="1.5" />
      <div class="absolute inset-0 flex items-center justify-center bg-black/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity">
        <div class="w-12 h-12 bg-accent rounded-full flex items-center justify-center shadow-lg">
          <Camera class="w-6 h-6 text-white" />
        </div>
      </div>
    </div>

    <h3 class="text-lg font-bold text-slate-800 text-center mb-2" style="font-family: var(--font-display)">Quick Connect</h3>
    <p class="text-xs text-slate-400 text-center leading-relaxed max-w-[220px]">
      Scan for immediate Guest Registration or Visitor Logs.
    </p>

    <button 
      @click="handleScan"
      class="mt-4 px-4 py-2 bg-accent text-white text-xs font-medium rounded-lg shadow-md hover:shadow-lg hover:shadow-accent/30 transition-all hover:scale-105"
    >
      Start Scanning
    </button>
  </div>
</template>
