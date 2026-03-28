<script setup lang="ts">
import { Phone, MoreHorizontal, Plus } from 'lucide-vue-next'

const students = [
  { name: 'Julian Thorne', email: 'j.thorne@academy.edu', id: 'PA-2024-0812', grade: 'Grade 12-A', phone: '+1 (555) 012-9844', attendance: '98.4%', status: 'ACTIVE', statusColor: 'bg-emerald-100 text-emerald-600', avatar: 'https://ui-avatars.com/api/?name=Julian+Thorne&background=6366F1&color=fff' },
  { name: 'Elena Rodriguez', email: 'e.rodriguez@academy.edu', id: 'PA-2024-0922', grade: 'Grade 11-B', phone: '+1 (555) 012-7732', attendance: '82.1%', status: 'ON LEAVE', statusColor: 'bg-amber-100 text-amber-600', avatar: 'https://ui-avatars.com/api/?name=Elena+Rodriguez&background=6366F1&color=fff' },
  { name: 'Marcus Vance', email: 'm.vance@academy.edu', id: 'PA-2024-0411', grade: 'Grade 12-A', phone: '+1 (555) 012-1190', attendance: '94.5%', status: 'ACTIVE', statusColor: 'bg-emerald-100 text-emerald-600', avatar: 'https://ui-avatars.com/api/?name=Marcus+Vance&background=6366F1&color=fff' },
  { name: 'Sophia Chen', email: 's.chen@academy.edu', id: 'PA-2024-0019', grade: 'Grade 10-C', phone: '+1 (555) 012-3321', attendance: '100%', status: 'GRADUATED', statusColor: 'bg-indigo-100 text-indigo-600', avatar: 'https://ui-avatars.com/api/?name=Sophia+Chen&background=6366F1&color=fff' },
]
</script>

<template>
  <div class="glass-card-static overflow-hidden">
    <div class="grid grid-cols-7 gap-4 items-center px-6 py-4 bg-slate-50/80 border-b border-slate-100">
      <span class="text-[10px] font-semibold text-slate-400 uppercase tracking-wider">Name</span>
      <span class="text-[10px] font-semibold text-slate-400 uppercase tracking-wider">Student ID</span>
      <span class="text-[10px] font-semibold text-slate-400 uppercase tracking-wider">Grade</span>
      <span class="text-[10px] font-semibold text-slate-400 uppercase tracking-wider">Contact</span>
      <span class="text-[10px] font-semibold text-slate-400 uppercase tracking-wider">Attendance</span>
      <span class="text-[10px] font-semibold text-slate-400 uppercase tracking-wider">Status</span>
      <span class="text-[10px] font-semibold text-slate-400 uppercase tracking-wider">Actions</span>
    </div>

    <div class="divide-y divide-slate-50">
      <div 
        v-for="student in students" 
        :key="student.id"
        class="grid grid-cols-7 gap-4 items-center px-6 py-4 transition-all hover:bg-slate-50/50 cursor-pointer"
      >
        <div class="flex items-center space-x-3">
          <img :src="student.avatar" :alt="student.name" class="w-10 h-10 rounded-xl object-cover">
          <div>
            <h4 class="text-sm font-semibold text-slate-800">{{ student.name }}</h4>
            <p class="text-xs text-slate-400">{{ student.email }}</p>
          </div>
        </div>

        <div>
          <p class="text-sm font-medium text-slate-600">{{ student.id }}</p>
        </div>

        <div>
          <span class="px-3 py-1 bg-indigo-50 text-indigo-600 rounded-lg text-xs font-medium">
            {{ student.grade }}
          </span>
        </div>

        <div class="flex items-center space-x-2">
          <div class="p-1.5 bg-slate-100 rounded-lg text-slate-400">
            <Phone class="w-3.5 h-3.5" stroke-width="2" />
          </div>
          <p class="text-xs font-medium text-slate-600">{{ student.phone }}</p>
        </div>

        <div>
          <div class="relative w-20 h-1.5 bg-slate-100 rounded-full overflow-hidden mb-1.5">
            <div 
              class="h-full bg-accent rounded-full"
              :style="{ width: student.attendance }"
            ></div>
          </div>
          <p class="text-sm font-semibold text-slate-700">{{ student.attendance }}</p>
        </div>

        <div>
          <span :class="['px-3 py-1.5 rounded-full text-[10px] font-semibold uppercase', student.statusColor]">
            {{ student.status }}
          </span>
        </div>

        <div class="flex items-center space-x-2">
          <NuxtLink :to="`/students/${student.id}`" class="p-2 text-slate-300 hover:text-accent transition-colors">
            <MoreHorizontal class="w-5 h-5" />
          </NuxtLink>
        </div>
      </div>
    </div>

    <div class="px-6 py-4 border-t border-slate-100 flex items-center justify-between">
      <p class="text-xs text-slate-400">Showing 1 to 4 of 1,284 students</p>
      
      <div class="flex items-center space-x-2">
        <button class="w-9 h-9 flex items-center justify-center rounded-lg bg-accent text-white font-medium text-sm shadow-md">1</button>
        <button class="w-9 h-9 flex items-center justify-center rounded-lg bg-white text-slate-400 font-medium text-sm shadow-sm border border-slate-100 hover:bg-slate-50">2</button>
        <button class="w-9 h-9 flex items-center justify-center rounded-lg bg-white text-slate-400 font-medium text-sm shadow-sm border border-slate-100 hover:bg-slate-50">3</button>
        <span class="text-slate-200">...</span>
        <button class="w-9 h-9 flex items-center justify-center rounded-lg bg-white text-slate-400 font-medium text-sm shadow-sm border border-slate-100 hover:bg-slate-50">321</button>
      </div>
    </div>

    <button class="absolute bottom-6 right-6 w-14 h-14 bg-accent text-white rounded-2xl shadow-xl shadow-accent/30 flex items-center justify-center hover:scale-110 hover:rotate-90 transition-all">
      <Plus class="w-6 h-6" stroke-width="2.5" />
    </button>
  </div>
</template>
