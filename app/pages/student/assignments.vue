<script setup lang="ts">
import { ClipboardList, Clock, CheckCircle2, AlertCircle, FileText } from 'lucide-vue-next'

const { currentUser, studentProfile } = useAuth()

const assignments = [
  { id: 1, title: 'Physics Lab Report', subject: 'Physics', due: 'Tomorrow', status: 'pending', priority: 'high', description: 'Complete the lab report for the optics experiment conducted on Monday.' },
  { id: 2, title: 'Math Problem Set #12', subject: 'Mathematics', due: 'Jan 20', status: 'pending', priority: 'medium', description: 'Solve problems 1-20 from Chapter 8 of the textbook.' },
  { id: 3, title: 'History Essay Draft', subject: 'History', due: 'Jan 25', status: 'pending', priority: 'low', description: 'Submit the first draft of your essay on the Industrial Revolution.' },
  { id: 4, title: 'English Literature Review', subject: 'English', due: 'Jan 10', status: 'submitted', priority: 'completed', description: 'Write a 1000-word review of the assigned novel.' },
  { id: 5, title: 'Physics Quiz Prep', subject: 'Physics', due: 'Jan 8', status: 'graded', priority: 'completed', description: 'Score: 91/100 - Excellent work!' },
]

const filteredAssignments = computed(() => assignments)

const getStatusIcon = (status: string) => {
  switch (status) {
    case 'submitted': return CheckCircle2
    case 'graded': return FileText
    default: return AlertCircle
  }
}

const getStatusColor = (status: string) => {
  switch (status) {
    case 'submitted': return 'text-emerald-600 bg-emerald-50'
    case 'graded': return 'text-blue-600 bg-blue-50'
    default: return 'text-amber-600 bg-amber-50'
  }
}
</script>

<template>
  <div class="max-w-[1600px] mx-auto pb-16 px-4 md:px-10">
    <div class="mb-8">
      <p class="text-xs font-semibold text-accent uppercase tracking-wider mb-2">Student Portal</p>
      <h2 class="page-title">My Assignments</h2>
      <p class="text-slate-500 mt-2">Track your assignments and submissions</p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
      <div class="glass-card-static p-6 text-center">
        <p class="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Total</p>
        <p class="text-3xl font-black text-slate-800">{{ assignments.length }}</p>
      </div>
      <div class="glass-card-static p-6 text-center">
        <p class="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Pending</p>
        <p class="text-3xl font-black text-amber-600">{{ assignments.filter(a => a.status === 'pending').length }}</p>
      </div>
      <div class="glass-card-static p-6 text-center">
        <p class="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Submitted</p>
        <p class="text-3xl font-black text-emerald-600">{{ assignments.filter(a => a.status === 'submitted').length }}</p>
      </div>
      <div class="glass-card-static p-6 text-center">
        <p class="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Graded</p>
        <p class="text-3xl font-black text-blue-600">{{ assignments.filter(a => a.status === 'graded').length }}</p>
      </div>
    </div>

    <div class="glass-card-static p-6">
      <div class="space-y-4">
        <div v-for="assignment in filteredAssignments" :key="assignment.id" 
          class="p-5 rounded-2xl border transition-all hover:shadow-md cursor-pointer"
          :class="assignment.status === 'pending' ? 'bg-amber-50/30 border-amber-100 hover:border-amber-200' : 'bg-slate-50/50 border-slate-100 hover:border-indigo-200'"
        >
          <div class="flex items-start justify-between">
            <div class="flex items-start gap-4">
              <div class="w-12 h-12 rounded-xl flex items-center justify-center" :class="getStatusColor(assignment.status)">
                <component :is="getStatusIcon(assignment.status)" class="w-6 h-6" />
              </div>
              <div>
                <h4 class="font-bold text-slate-800">{{ assignment.title }}</h4>
                <p class="text-xs text-slate-500 mt-1">{{ assignment.subject }} • {{ assignment.description }}</p>
                <div class="flex items-center gap-3 mt-3">
                  <span class="text-[10px] font-bold text-slate-400 flex items-center gap-1">
                    <Clock class="w-3 h-3" />
                    Due: {{ assignment.due }}
                  </span>
                  <span v-if="assignment.status === 'pending'" :class="[
                    'text-[10px] font-black uppercase px-2 py-0.5 rounded-lg',
                    assignment.priority === 'high' ? 'text-rose-600 bg-rose-100' : assignment.priority === 'medium' ? 'text-amber-600 bg-amber-100' : 'text-emerald-600 bg-emerald-100'
                  ]">
                    {{ assignment.priority }}
                  </span>
                  <span v-else :class="['text-[10px] font-black uppercase px-2 py-0.5 rounded-lg', getStatusColor(assignment.status)]">
                    {{ assignment.status }}
                  </span>
                </div>
              </div>
            </div>
            <button v-if="assignment.status === 'pending'" class="btn-primary px-4 py-2 text-xs">
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
