<script setup lang="ts">
const { selectedGrade, selectedTeacher, viewMode, setGrade, setTeacher, setViewMode, grades, teachers } = useSchedule()

const gradeOptions = grades.map(g => ({ value: g, label: g }))
const teacherOptions = teachers.map(t => ({ value: t, label: t }))

const viewOptions = [
  { label: 'Week View', value: 'Week View' },
  { label: 'Day View', value: 'Day View' },
]
</script>

<template>
  <div class="flex flex-col sm:flex-row sm:items-center justify-between mb-6 gap-4">
    <div class="flex flex-wrap items-center gap-3">
      <span class="text-xs font-medium text-slate-400 uppercase tracking-wider">Filters:</span>
      <div class="flex flex-wrap items-center gap-2">
        <BaseDropdown 
          :options="gradeOptions" 
          v-model="selectedGrade"
          placeholder="Filter by Grade"
        />
        <BaseDropdown 
          :options="teacherOptions" 
          v-model="selectedTeacher"
          placeholder="Filter by Teacher"
        />
      </div>
    </div>

    <div class="bg-slate-100 p-1 rounded-xl flex items-center">
      <button 
        v-for="option in viewOptions" 
        :key="option.label"
        @click="setViewMode(option.value)"
        class="px-4 py-2 text-sm font-medium rounded-lg transition-all"
        :class="viewMode === option.value ? 'bg-white text-accent shadow-sm' : 'text-slate-400 hover:text-slate-600'"
      >
        {{ option.label }}
      </button>
    </div>
  </div>
</template>
