<script setup lang="ts">
import { GraduationCap, BookOpen, ShieldCheck, UserCircle, ArrowRight } from 'lucide-vue-next'

definePageMeta({
  layout: false
})

const { login } = useAuth()

const roles = [
  { 
    id: 'teacher', 
    name: 'Teacher', 
    desc: 'Manage your classes, grades, and attendance', 
    icon: BookOpen,
    color: 'from-blue-500 to-indigo-600'
  },
  { 
    id: 'student', 
    name: 'Student', 
    desc: 'Check your progress, schedule, and resources', 
    icon: GraduationCap,
    color: 'from-emerald-500 to-teal-600'
  },
  { 
    id: 'parent', 
    name: 'Parent', 
    desc: 'Monitor your child academic journey', 
    icon: UserCircle,
    color: 'from-purple-500 to-pink-600'
  },
  { 
    id: 'admin', 
    name: 'Administrator', 
    desc: 'Full system control and reporting', 
    icon: ShieldCheck,
    color: 'from-slate-700 to-slate-900'
  }
]
</script>

<template>
  <div class="min-h-screen bg-[#F1F5F9] flex flex-col justify-center items-center p-6">
    <div class="w-full max-w-[1000px] grid grid-cols-1 lg:grid-cols-2 bg-white rounded-[2rem] shadow-2xl overflow-hidden">
      <!-- Left side: Welcome Content -->
      <div class="bg-indigo-600 p-12 lg:p-16 flex flex-col justify-between relative overflow-hidden text-white">
        <div class="relative z-10">
          <div class="flex items-center gap-3 mb-10">
            <div class="w-12 h-12 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center border border-white/20">
              <GraduationCap class="w-7 h-7 text-white" />
            </div>
            <h1 class="text-2xl font-black tracking-tight uppercase">St. Edwards</h1>
          </div>
          
          <h2 class="text-4xl lg:text-5xl font-bold leading-tight mb-6">Empowering the next generation of global leaders.</h2>
          <p class="text-indigo-100 text-lg leading-relaxed max-w-md">Access your academic hub for grades, attendance, and collaborative learning.</p>
        </div>

        <div class="relative z-10 mt-12 flex items-center gap-4 text-sm font-medium text-indigo-200">
          <span>Trusted by 200+ International Schools</span>
          <div class="w-1 h-1 bg-indigo-300 rounded-full"></div>
          <span>ISO 27001 Certified</span>
        </div>

        <!-- Decorative elements -->
        <div class="absolute -top-24 -right-24 w-96 h-96 bg-indigo-500 rounded-full opacity-50 blur-3xl"></div>
        <div class="absolute -bottom-24 -left-24 w-96 h-96 bg-blue-500 rounded-full opacity-30 blur-3xl"></div>
      </div>

      <!-- Right side: Role Selection -->
      <div class="p-10 lg:p-16 flex flex-col justify-center">
        <div class="mb-10">
          <h3 class="text-2xl font-bold text-slate-800 mb-2">Welcome Back</h3>
          <p class="text-slate-500">Please select your portal to continue</p>
        </div>

        <div class="space-y-4">
          <button 
            v-for="role in roles" 
            :key="role.id"
            @click="login(role.id as any)"
            class="group w-full flex items-center gap-4 p-4 rounded-2xl border border-slate-100 bg-white hover:border-indigo-500 hover:shadow-xl hover:shadow-indigo-500/10 transition-all duration-300"
          >
            <div :class="['w-14 h-14 rounded-xl flex items-center justify-center text-white bg-gradient-to-br transition-transform group-hover:scale-110 shadow-lg shadow-indigo-500/10', role.color]">
              <component :is="role.icon" class="w-7 h-7" />
            </div>
            <div class="flex-1 text-left">
              <h4 class="font-bold text-slate-800 text-lg group-hover:text-indigo-600 transition-colors">{{ role.name }}</h4>
              <p class="text-xs text-slate-400 font-medium">{{ role.desc }}</p>
            </div>
            <div class="w-10 h-10 rounded-full flex items-center justify-center bg-slate-50 group-hover:bg-indigo-50 group-hover:text-indigo-600 transition-colors">
              <ArrowRight class="w-5 h-5" />
            </div>
          </button>
        </div>

        <div class="mt-12 text-center">
          <p class="text-sm text-slate-400">Need help accessing your account? <a href="#" class="text-indigo-600 font-semibold hover:underline">Contact Support</a></p>
        </div>
      </div>
    </div>
  </div>
</template>
