<script setup lang="ts">
import { Phone, MoreHorizontal, Plus } from 'lucide-vue-next'

const students = [
  { name: 'Julian Thorne', email: 'j.thorne@academy.edu', id: 'PA-2024-0812', grade: 'Grade 12-A', phone: '+1 (555) 012-9844', attendance: '98.4%', status: 'ACTIVE', statusColor: 'bg-green-50 text-green-600 ring-green-100', avatar: 'https://ui-avatars.com/api/?name=Julian+Thorne&background=0F172A&color=fff' },
  { name: 'Elena Rodriguez', email: 'e.rodriguez@academy.edu', id: 'PA-2024-0922', grade: 'Grade 11-B', phone: '+1 (555) 012-7732', attendance: '82.1%', status: 'ON LEAVE', statusColor: 'bg-orange-50 text-orange-600 ring-orange-100', avatar: 'https://ui-avatars.com/api/?name=Elena+Rodriguez&background=1E293B&color=fff' },
  { name: 'Marcus Vance', email: 'm.vance@academy.edu', id: 'PA-2024-0411', grade: 'Grade 12-A', phone: '+1 (555) 012-1190', attendance: '94.5%', status: 'ACTIVE', statusColor: 'bg-green-50 text-green-600 ring-green-100', avatar: 'https://ui-avatars.com/api/?name=Marcus+Vance&background=0F172A&color=fff' },
  { name: 'Sophia Chen', email: 's.chen@academy.edu', id: 'PA-2024-0019', grade: 'Grade 10-C', phone: '+1 (555) 012-3321', attendance: '100%', status: 'GRADUATED', statusColor: 'bg-indigo-50 text-indigo-600 ring-indigo-100', avatar: 'https://ui-avatars.com/api/?name=Sophia+Chen&background=1E293B&color=fff' },
]
</script>

<template>
  <div class="bg-white rounded-[40px] shadow-sm ring-1 ring-slate-100 overflow-hidden relative group">
    <div class="grid grid-cols-[1.5fr,1fr,0.8fr,1fr,1fr,0.8fr,auto] gap-x-12 items-center p-12 bg-slate-50 border-b border-slate-100">
      <span class="text-[10px] font-black text-slate-300 tracking-[0.25em] uppercase">NAME</span>
      <span class="text-[10px] font-black text-slate-300 tracking-[0.25em] uppercase">STUDENT ID</span>
      <span class="text-[10px] font-black text-slate-300 tracking-[0.25em] uppercase">GRADE</span>
      <span class="text-[10px] font-black text-slate-300 tracking-[0.25em] uppercase">PARENT CONTACT</span>
      <span class="text-[10px] font-black text-slate-300 tracking-[0.25em] uppercase">ATTENDANCE</span>
      <span class="text-[10px] font-black text-slate-300 tracking-[0.25em] uppercase">STATUS</span>
      <span class="text-[10px] font-black text-slate-300 tracking-[0.25em] uppercase">ACTIONS</span>
    </div>

    <div class="p-4 space-y-4">
      <div 
        v-for="student in students" 
        :key="student.id"
        class="grid grid-cols-[1.5fr,1fr,0.8fr,1fr,1fr,0.8fr,auto] gap-x-12 items-center p-8 rounded-[32px] transition-all hover:bg-[#F8FAFC] cursor-pointer"
      >
        <div class="flex items-center space-x-6">
          <img :src="student.avatar" :alt="student.name" class="w-14 h-14 rounded-2xl object-cover shadow-lg shadow-slate-200">
          <div>
            <h4 class="text-base font-black text-[#0F172A] leading-tight">{{ student.name }}</h4>
            <p class="text-[10px] font-bold text-slate-300 mt-1 uppercase tracking-widest">{{ student.email }}</p>
          </div>
        </div>

        <div>
          <p class="text-sm font-black text-[#0F172A] tracking-tighter">{{ student.id }}</p>
        </div>

        <div>
          <span class="px-4 py-1.5 bg-indigo-50 text-indigo-600 rounded-lg text-[9px] font-black tracking-widest uppercase shadow-sm ring-1 ring-indigo-100">
            {{ student.grade }}
          </span>
        </div>

        <div class="flex items-center space-x-4">
          <div class="p-3 bg-white rounded-xl shadow-sm ring-1 ring-slate-100 text-slate-400">
            <Phone class="w-4 h-4" stroke-width="2.5" />
          </div>
          <p class="text-[11px] font-black text-[#0F172A] leading-tight">{{ student.phone }}</p>
        </div>

        <div>
          <div class="relative w-24 h-2 bg-slate-100 rounded-full overflow-hidden mb-2">
            <div 
              class="h-full bg-[#0F172A] rounded-full"
              :style="{ width: student.attendance }"
            ></div>
          </div>
          <p class="text-lg font-black text-[#0F172A] tracking-tighter">{{ student.attendance }}</p>
        </div>

        <div>
          <span :class="['px-5 py-2 rounded-full text-[9px] font-black tracking-widest ring-1 shadow-sm uppercase', student.statusColor]">
            {{ student.status }}
          </span>
        </div>

        <button class="p-3 text-slate-200 hover:text-slate-400 transition-colors">
          <MoreHorizontal class="w-6 h-6" />
        </button>
      </div>
    </div>

    <!-- Pagination & Footer Info -->
    <div class="p-10 border-t border-slate-50 flex items-center justify-between">
      <p class="text-[11px] font-bold text-slate-300 tracking-widest uppercase">Showing 1 to 4 of 1,284 students</p>
      
      <div class="flex items-center space-x-4">
        <button class="w-12 h-12 flex items-center justify-center rounded-2xl bg-[#0F172A] text-white font-black text-sm shadow-xl shadow-slate-200">1</button>
        <button class="w-12 h-12 flex items-center justify-center rounded-2xl bg-white text-slate-400 font-black text-sm shadow-sm ring-1 ring-slate-100 hover:bg-slate-50">2</button>
        <button class="w-12 h-12 flex items-center justify-center rounded-2xl bg-white text-slate-400 font-black text-sm shadow-sm ring-1 ring-slate-100 hover:bg-slate-50">3</button>
        <span class="text-slate-200">...</span>
        <button class="w-12 h-12 flex items-center justify-center rounded-2xl bg-white text-slate-400 font-black text-sm shadow-sm ring-1 ring-slate-100 hover:bg-slate-50">321</button>
      </div>
    </div>

    <!-- Floating Action Button -->
    <button class="absolute bottom-10 right-10 w-20 h-20 bg-red-600 text-white rounded-[24px] shadow-2xl shadow-red-200 flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-12 transition-all">
      <Plus class="w-10 h-10" stroke-width="3" />
    </button>
  </div>
</template>
