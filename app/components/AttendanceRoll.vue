<script setup lang="ts">
import { ChevronDown } from 'lucide-vue-next'

const students = [
  { id: '#2024-0012', name: 'Alexander Abernathy', initials: 'AA', status: 'present' },
  { id: '#2024-0045', name: 'Beatrice Bennett', initials: 'BB', status: 'late' },
  { id: '#2024-0089', name: 'Caleb Hughes', initials: 'CH', status: 'excused' },
  { id: '#2024-0102', name: 'Diana Lawrence', initials: 'DL', status: 'present' },
  { id: '#2024-0134', name: 'Ethan Miller', initials: 'EM', status: 'present' },
]

const statusColors: Record<string, string> = {
  AA: 'bg-blue-100 text-blue-600',
  BB: 'bg-orange-100 text-orange-600',
  CH: 'bg-red-100 text-red-600',
  DL: 'bg-indigo-100 text-indigo-600',
  EM: 'bg-orange-100 text-orange-600',
}
</script>

<template>
  <div class="glass-card-static p-6">
    <div class="flex flex-wrap items-center justify-between gap-4 mb-6">
      <h3 class="section-title">Attendance Roll</h3>
      <div class="flex items-center gap-2">
        <button class="flex items-center px-3 py-2 bg-slate-50 text-slate-500 text-xs font-medium rounded-lg hover:bg-slate-100 transition-colors">
          Sort by Name
          <ChevronDown class="w-4 h-4 ml-1" />
        </button>
        <button class="flex items-center px-3 py-2 bg-slate-50 text-slate-500 text-xs font-medium rounded-lg hover:bg-slate-100 transition-colors">
          Status Filter
          <ChevronDown class="w-4 h-4 ml-1" />
        </button>
      </div>
    </div>

    <div class="grid grid-cols-[1fr,repeat(4,60px)] gap-y-4 items-center">
      <div class="text-[10px] font-medium text-slate-400 uppercase tracking-wider pb-2 border-b border-slate-100">Student Name</div>
      <div class="text-[10px] font-medium text-slate-400 uppercase tracking-wider pb-2 border-b border-slate-100 text-center">Present</div>
      <div class="text-[10px] font-medium text-slate-400 uppercase tracking-wider pb-2 border-b border-slate-100 text-center">Late</div>
      <div class="text-[10px] font-medium text-slate-400 uppercase tracking-wider pb-2 border-b border-slate-100 text-center">Absent</div>
      <div class="text-[10px] font-medium text-slate-400 uppercase tracking-wider pb-2 border-b border-slate-100 text-center">Excused</div>

      <template v-for="student in students" :key="student.id">
        <div class="flex items-center gap-3 py-2">
          <div :class="['w-10 h-10 rounded-xl flex items-center justify-center font-semibold text-sm', statusColors[student.initials]]">
            {{ student.initials }}
          </div>
          <div>
            <div class="font-semibold text-slate-700 text-sm">{{ student.name }}</div>
            <div class="text-[10px] text-slate-400">ID: {{ student.id }}</div>
          </div>
        </div>

        <div class="flex justify-center">
          <div :class="['w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all cursor-pointer', student.status === 'present' ? 'border-accent bg-accent' : 'border-slate-200 hover:border-accent']">
            <div v-if="student.status === 'present'" class="w-2 h-2 bg-white rounded-full"></div>
          </div>
        </div>
        <div class="flex justify-center">
          <div :class="['w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all cursor-pointer', student.status === 'late' ? 'border-orange-500 bg-orange-500' : 'border-slate-200 hover:border-orange-500']">
            <div v-if="student.status === 'late'" class="w-2 h-2 bg-white rounded-full"></div>
          </div>
        </div>
        <div class="flex justify-center">
          <div class="w-5 h-5 rounded-full border-2 border-slate-200 hover:border-red-500 hover:bg-red-50 transition-all cursor-pointer flex items-center justify-center">
          </div>
        </div>
        <div class="flex justify-center">
          <div :class="['w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all cursor-pointer', student.status === 'excused' ? 'border-purple-500 bg-purple-500' : 'border-slate-200 hover:border-purple-500']">
            <div v-if="student.status === 'excused'" class="w-2 h-2 bg-white rounded-full"></div>
          </div>
        </div>
      </template>
    </div>

    <button class="w-full mt-8 py-3 text-sm font-medium text-slate-500 hover:text-accent hover:bg-slate-50 rounded-xl transition-colors">
      Load Next 10 Students
    </button>
  </div>
</template>
