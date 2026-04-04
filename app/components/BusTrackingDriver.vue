<script setup lang="ts">
import { User, Star, MessageSquare } from 'lucide-vue-next'
</script>

<template>
  <div class="bg-[#051139] rounded-[40px] p-10 shadow-2xl ring-1 ring-white/5 relative group overflow-hidden">
    <div class="absolute -top-12 -right-12 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
    
    <div class="relative">
      <div class="flex items-center space-x-4 mb-10">
        <User class="w-6 h-6 text-indigo-400" />
        <h3 class="text-xl font-black text-white tracking-tight uppercase">Driver Profile</h3>
      </div>

      <div class="flex items-center space-x-8 mb-12">
        <img src="https://ui-avatars.com/api/?name=MH&background=random" class="w-24 h-24 rounded-[32px] object-cover ring-4 ring-white/10 shadow-2xl group-hover:scale-105 transition-transform" />
        <div>
          <h4 class="text-2xl font-black text-white leading-tight mb-2">Marcus Halloway</h4>
          <p class="text-[10px] font-bold text-white/40 uppercase tracking-[0.2em] mb-4">Verified Staff • 12Y Exp</p>
          <div class="flex items-center space-x-1">
            <Star v-for="i in 5" :key="i" class="w-4 h-4 text-orange-400 fill-orange-400" />
            <span class="ml-2 text-xs font-black text-white">4.8</span>
          </div>
        </div>
      </div>

      <div class="grid grid-cols-2 gap-4 mb-10">
        <div class="bg-white/5 p-5 rounded-3xl border border-white/5">
          <p class="text-[9px] font-black text-white/30 uppercase tracking-widest mb-1">LICENSE</p>
          <p class="text-xs font-black text-white tracking-widest">TX–8821–B</p>
        </div>
        <div class="bg-white/5 p-5 rounded-3xl border border-white/5">
          <p class="text-[9px] font-black text-white/30 uppercase tracking-widest mb-1">PHONE</p>
          <p class="text-xs font-black text-indigo-400 tracking-widest">+1 (555) 928-31</p>
        </div>
        <div class="bg-white/5 p-5 rounded-3xl border border-white/5">
          <p class="text-[9px] font-black text-white/30 uppercase tracking-widest mb-1">SAFETY</p>
          <p class="text-xs font-black text-green-400 tracking-widest">98.2%</p>
        </div>
        <div class="bg-white/5 p-5 rounded-3xl border border-white/5">
          <p class="text-[9px] font-black text-white/30 uppercase tracking-widest mb-1">INCIDENTS</p>
          <p class="text-xs font-black text-white tracking-widest">0</p>
        </div>
      </div>

      <div class="flex flex-col space-y-3">
        <button class="w-full py-5 bg-indigo-600 text-white rounded-[24px] font-black text-[11px] tracking-widest uppercase shadow-2xl hover:bg-indigo-700 transition-all transform hover:translate-y-[-2px] flex items-center justify-center border border-indigo-500">
          <MessageSquare class="w-5 h-5 mr-4" />
          Quick Message
        </button>
        <button class="w-full py-5 bg-white/5 text-white/60 rounded-[24px] font-black text-[11px] tracking-widest uppercase hover:bg-white/10 transition-all flex items-center justify-center border border-white/5">
          Full Driver Records
        </button>
      </div>
    </div>
  </div>
</template>
