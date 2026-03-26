<script setup lang="ts">
import { MapPin, Bus, Navigation, Plus, Minus, Target } from 'lucide-vue-next'
</script>

<template>
  <div class="bg-indigo-100 rounded-[48px] h-[600px] relative overflow-hidden group shadow-inner ring-1 ring-slate-200">
    <!-- Stylized Map Background -->
    <div class="absolute inset-0 bg-[#A5B4FC] opacity-50">
      <div class="absolute top-20 left-40 w-1 h-80 bg-white/40 rotate-45"></div>
      <div class="absolute top-40 left-80 w-1 h-80 bg-white/40 -rotate-12"></div>
      <div class="absolute bottom-20 right-40 w-1 h-80 bg-white/40 rotate-12"></div>
      <div class="absolute top-1/2 left-0 w-full h-1 bg-white/20"></div>
      <div class="absolute left-1/2 top-0 h-full w-1 bg-white/20"></div>
    </div>

    <!-- Map Markers -->
    <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
      <div class="relative">
        <div class="absolute -top-12 -left-12 w-24 h-24 bg-red-500/20 rounded-full animate-ping"></div>
        <div class="w-12 h-12 bg-white rounded-2xl shadow-2xl flex items-center justify-center relative z-10 border-4 border-red-500">
          <Bus class="w-6 h-6 text-red-500" />
        </div>
      </div>
    </div>

    <div class="absolute top-40 left-1/3">
      <div class="flex flex-col items-center">
        <div class="w-4 h-4 bg-indigo-600 rounded-full border-2 border-white shadow-lg"></div>
        <div class="mt-2 bg-white px-3 py-1 rounded-lg shadow-xl ring-1 ring-slate-100">
          <p class="text-[8px] font-black text-[#0F172A] tracking-widest uppercase">North Park Station</p>
        </div>
      </div>
    </div>

    <!-- Overlay Info -->
    <div class="absolute top-10 left-10 bg-white/90 backdrop-blur-xl p-8 rounded-[32px] shadow-2xl ring-1 ring-white/50 group-hover:scale-105 transition-transform">
      <p class="text-[9px] font-black text-slate-400 tracking-[0.2em] uppercase mb-2">ESTIMATED ARRIVAL</p>
      <h3 class="text-5xl font-black text-[#0F172A] tracking-tighter">12 Minutes</h3>
    </div>

    <!-- Status Bar -->
    <div class="absolute bottom-10 left-10 right-10 bg-[#051139] p-8 rounded-[32px] shadow-2xl ring-1 ring-white/10 flex items-center space-x-8">
      <div class="p-4 bg-white/10 rounded-2xl">
        <Navigation class="w-8 h-8 text-indigo-400 animate-pulse" stroke-width="2.5" />
      </div>
      <div>
        <h4 class="text-xl font-black text-white tracking-tight mb-1">Current Progress</h4>
        <p class="text-indigo-200/50 text-sm font-bold leading-relaxed uppercase tracking-widest">Approaching Oak Ridge Dr. & 5th Ave. Traffic is light.</p>
      </div>
    </div>

    <!-- Map Controls -->
    <div class="absolute bottom-10 right-10 flex flex-col space-y-4">
      <button class="p-4 bg-white rounded-2xl shadow-xl hover:bg-slate-50 transition-all"><Plus class="w-6 h-6 text-[#0F172A]" /></button>
      <button class="p-4 bg-white rounded-2xl shadow-xl hover:bg-slate-50 transition-all"><Minus class="w-6 h-6 text-[#0F172A]" /></button>
      <button class="p-4 bg-white rounded-2xl shadow-xl hover:bg-slate-50 transition-all"><Target class="w-6 h-6 text-[#0F172A]" /></button>
    </div>
  </div>
</template>
