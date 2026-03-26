<script setup lang="ts">
import { ChevronDown, Filter } from 'lucide-vue-next'

const students = [
  { id: '#2024-0012', name: 'Alexander Abernathy', initials: 'AA', status: 'present' },
  { id: '#2024-0045', name: 'Beatrice Bennett', initials: 'BB', status: 'late' },
  { id: '#2024-0089', name: 'Caleb Hughes', initials: 'CH', status: 'excused' },
  { id: '#2024-0102', name: 'Diana Lawrence', initials: 'DL', status: 'present' },
  { id: '#2024-0134', name: 'Ethan Miller', initials: 'EM', status: 'present' },
]

const statusColors = {
  AA: 'bg-blue-100 text-blue-600',
  BB: 'bg-orange-100 text-orange-600',
  CH: 'bg-red-100 text-red-600',
  DL: 'bg-indigo-100 text-indigo-600',
  EM: 'bg-orange-100 text-orange-600',
}
</script>

<template>
  <div class="bg-white rounded-3xl p-10 shadow-sm ring-1 ring-slate-100">
    <div class="flex items-center justify-between mb-12">
      <h3 class="text-xl font-bold text-[#0F172A]">Attendance Roll</h3>
      <div class="flex items-center space-x-3">
        <button class="flex items-center px-4 py-2 bg-slate-50 text-slate-500 text-xs font-bold rounded-lg hover:bg-slate-100 transition-colors">
          Sort by Name
          <ChevronDown class="w-4 h-4 ml-2" />
        </button>
        <button class="flex items-center px-4 py-2 bg-slate-50 text-slate-500 text-xs font-bold rounded-lg hover:bg-slate-100 transition-colors">
          Status Filter
          <ChevronDown class="w-4 h-4 ml-2" />
        </button>
      </div>
    </div>

    <div class="grid grid-cols-[1fr,auto,auto,auto,auto] gap-y-6 items-center">
      <!-- Table Header -->
      <div class="text-[10px] font-bold text-slate-400 tracking-widest uppercase mb-4">STUDENT NAME</div>
      <div class="text-[10px] font-bold text-slate-400 tracking-widest uppercase mb-4 px-4 text-center">PRESENT</div>
      <div class="text-[10px] font-bold text-slate-400 tracking-widest uppercase mb-4 px-4 text-center">LATE</div>
      <div class="text-[10px] font-bold text-slate-400 tracking-widest uppercase mb-4 px-4 text-center">ABSENT</div>
      <div class="text-[10px] font-bold text-slate-400 tracking-widest uppercase mb-4 px-4 text-center">EXCUSED</div>

      <!-- Student Rows -->
      <template v-for="student in students" :key="student.id">
        <div class="flex items-center space-x-5 py-3">
          <div :class="['w-12 h-12 rounded-2xl flex items-center justify-center font-bold text-sm', statusColors[student.initials as keyof typeof statusColors]]">
            {{ student.initials }}
          </div>
          <div>
            <div class="font-bold text-[#0F172A] leading-tight">{{ student.name }}</div>
            <div class="text-[10px] font-bold text-slate-400 mt-0.5 tracking-wider uppercase">ID: {{ student.id }}</div>
          </div>
        </div>

        <!-- Status Radios -->
        <div class="flex justify-center px-4">
          <div :class="['w-6 h-6 rounded-full border-2 border-slate-200 flex items-center justify-center', student.status === 'present' ? 'border-[#0F172A]' : '']">
            <div v-if="student.status === 'present'" class="w-2.5 h-2.5 bg-[#0F172A] rounded-full"></div>
          </div>
        </div>
        <div class="flex justify-center px-4">
          <div :class="['w-6 h-6 rounded-full border-2 border-slate-200 flex items-center justify-center', student.status === 'late' ? 'border-[#0F172A]' : '']">
            <div v-if="student.status === 'late'" class="w-2.5 h-2.5 bg-[#0F172A] rounded-full"></div>
          </div>
        </div>
        <div class="flex justify-center px-4">
          <div :class="['w-6 h-6 rounded-full border-2 border-slate-200 flex items-center justify-center', student.status === 'absent' ? 'border-[#0F172A]' : '']">
            <div v-if="student.status === 'absent'" class="w-2.5 h-2.5 bg-[#0F172A] rounded-full"></div>
          </div>
        </div>
        <div class="flex justify-center px-4">
          <div :class="['w-6 h-6 rounded-full border-2 border-slate-200 flex items-center justify-center', student.status === 'excused' ? 'border-[#0F172A]' : '']">
            <div v-if="student.status === 'excused'" class="w-2.5 h-2.5 bg-[#0F172A] rounded-full"></div>
          </div>
        </div>
      </template>
    </div>

    <button class="w-full mt-12 py-4 text-xs font-bold text-slate-500 uppercase tracking-widest hover:bg-slate-50 rounded-2xl transition-colors">
      Load Next 10 Students
    </button>
  </div>
</template>
