<script setup lang="ts">
import { ShieldCheck, TrendingUp, Award, Star, Target } from 'lucide-vue-next'

const props = defineProps<{
  studentId?: string
}>()

const summary = {
  totalPoints: 145,
  positivePoints: 160,
  negativePoints: -15,
  currentStreak: 12,
  longestStreak: 28,
  rank: 3,
  totalStudents: 156
}

const categories = [
  { name: 'Participation', points: 45, color: 'bg-blue-500' },
  { name: 'Conduct', points: 35, color: 'bg-emerald-500' },
  { name: 'Achievement', points: 50, color: 'bg-purple-500' },
  { name: 'Assignment', points: -10, color: 'bg-rose-500' },
  { name: 'Tardiness', points: -5, color: 'bg-amber-500' },
]

const topStudents = [
  { name: 'Emma Wilson', points: 168, avatar: 'https://ui-avatars.com/api/?name=EW&background=6366F1&color=fff' },
  { name: 'Julian Thorne', points: 145, avatar: 'https://ui-avatars.com/api/?name=JT&background=10B981&color=fff' },
  { name: 'Liam Johnson', points: 138, avatar: 'https://ui-avatars.com/api/?name=LJ&background=F59E0B&color=fff' },
]
</script>

<template>
  <div class="space-y-6">
    <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
      <div class="glass-card-static p-5 text-center">
        <div class="w-10 h-10 bg-indigo-50 rounded-xl flex items-center justify-center mx-auto mb-3">
          <ShieldCheck class="w-5 h-5 text-indigo-600" />
        </div>
        <p class="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Total Points</p>
        <p class="text-2xl font-black text-slate-800">{{ summary.totalPoints }}</p>
      </div>
      <div class="glass-card-static p-5 text-center">
        <div class="w-10 h-10 bg-emerald-50 rounded-xl flex items-center justify-center mx-auto mb-3">
          <TrendingUp class="w-5 h-5 text-emerald-600" />
        </div>
        <p class="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Positive</p>
        <p class="text-2xl font-black text-emerald-600">+{{ summary.positivePoints }}</p>
      </div>
      <div class="glass-card-static p-5 text-center">
        <div class="w-10 h-10 bg-rose-50 rounded-xl flex items-center justify-center mx-auto mb-3">
          <Target class="w-5 h-5 text-rose-600" />
        </div>
        <p class="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Negative</p>
        <p class="text-2xl font-black text-rose-600">{{ summary.negativePoints }}</p>
      </div>
      <div class="glass-card-static p-5 text-center">
        <div class="w-10 h-10 bg-amber-50 rounded-xl flex items-center justify-center mx-auto mb-3">
          <Star class="w-5 h-5 text-amber-600" />
        </div>
        <p class="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Rank</p>
        <p class="text-2xl font-black text-slate-800">#{{ summary.rank }}</p>
      </div>
    </div>

    <div class="glass-card-static p-6">
      <h3 class="text-lg font-black text-slate-800 tracking-tight mb-6">Points by Category</h3>
      <div class="space-y-4">
        <div v-for="cat in categories" :key="cat.name" class="flex items-center gap-4">
          <span class="text-xs font-bold text-slate-600 w-28">{{ cat.name }}</span>
          <div class="flex-1 h-3 bg-slate-100 rounded-full overflow-hidden">
            <div 
              class="h-full rounded-full transition-all" 
              :class="cat.color" 
              :style="{ width: `${Math.abs(cat.points) / 50 * 100}%` }"
            ></div>
          </div>
          <span :class="['text-xs font-black w-12 text-right', cat.points > 0 ? 'text-emerald-600' : 'text-rose-600']">
            {{ cat.points > 0 ? '+' : '' }}{{ cat.points }}
          </span>
        </div>
      </div>
    </div>

    <div class="glass-card-static p-6 bg-gradient-to-br from-indigo-50/50 to-purple-50/50">
      <h3 class="text-lg font-black text-slate-800 tracking-tight mb-6">Class Leaderboard</h3>
      <div class="space-y-3">
        <div v-for="(student, index) in topStudents" :key="student.name" 
          class="flex items-center gap-4 p-4 rounded-2xl transition-all hover:scale-[1.01]"
          :class="index === 1 ? 'bg-white border-2 border-indigo-200 shadow-lg' : 'bg-white/60 border border-slate-100'"
        >
          <div class="w-8 h-8 rounded-xl flex items-center justify-center font-black text-sm"
            :class="index === 0 ? 'bg-amber-100 text-amber-600' : index === 1 ? 'bg-slate-100 text-slate-600' : 'bg-amber-50 text-amber-500'"
          >
            {{ index + 1 }}
          </div>
          <img :src="student.avatar" :alt="student.name" class="w-10 h-10 rounded-xl object-cover" />
          <div class="flex-1">
            <h4 class="font-bold text-slate-800">{{ student.name }}</h4>
            <p class="text-xs text-slate-500">Grade 12-A</p>
          </div>
          <div class="text-right">
            <p class="font-black text-indigo-600">{{ student.points }} pts</p>
          </div>
        </div>
      </div>
    </div>

    <div class="grid grid-cols-2 gap-4">
      <div class="glass-card-static p-5 text-center">
        <p class="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2">Current Streak</p>
        <p class="text-3xl font-black text-emerald-600">{{ summary.currentStreak }}</p>
        <p class="text-xs text-slate-500 mt-1">days positive</p>
      </div>
      <div class="glass-card-static p-5 text-center">
        <p class="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2">Longest Streak</p>
        <p class="text-3xl font-black text-indigo-600">{{ summary.longestStreak }}</p>
        <p class="text-xs text-slate-500 mt-1">days positive</p>
      </div>
    </div>
  </div>
</template>
