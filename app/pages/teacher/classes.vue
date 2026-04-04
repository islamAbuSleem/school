<script setup lang="ts">
import { BookOpen, Users, MapPin, ChevronRight, TrendingUp } from 'lucide-vue-next'

const { currentUser, teacherProfile } = useAuth()
const { classes, students } = useData()

const myClasses = computed(() => {
  const profile = teacherProfile.value
  if (!profile) return []
  return classes.value.filter(c => c.teacherId === profile.id)
})

const getStudentsForClass = (classId: string) => {
  const cls = myClasses.value.find(c => c.id === classId)
  if (!cls) return []
  return students.value.filter(s => cls.studentIds.includes(s.id))
}
</script>

<template>
  <div class="max-w-[1600px] mx-auto pb-16 px-4 md:px-10">
    <div class="mb-8">
      <p class="text-xs font-semibold text-accent uppercase tracking-wider mb-2">Teacher Portal</p>
      <h2 class="page-title">My Classes</h2>
      <p class="text-slate-500 mt-2">Manage your assigned classes and student rosters</p>
    </div>

    <div class="space-y-8">
      <div v-for="cls in myClasses" :key="cls.id" class="glass-card-static overflow-hidden">
        <div class="bg-gradient-to-r from-indigo-500 to-purple-600 p-6 text-white">
          <div class="flex items-center justify-between">
            <div>
              <h3 class="text-xl font-black">{{ cls.name }}</h3>
              <p class="text-sm text-indigo-100 mt-1">{{ cls.grade }} • Section {{ cls.section }} • {{ cls.room }}</p>
            </div>
            <div class="flex items-center gap-6">
              <div class="text-center">
                <p class="text-2xl font-black">{{ cls.studentIds.length }}</p>
                <p class="text-[10px] uppercase tracking-widest text-indigo-200">Students</p>
              </div>
            </div>
          </div>
        </div>

        <div class="p-6">
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <NuxtLink v-for="student in getStudentsForClass(cls.id)" :key="student.id" :to="`/students/${student.id}`"
              class="flex items-center gap-4 p-4 bg-slate-50/50 rounded-2xl border border-slate-100 hover:border-indigo-200 hover:shadow-lg transition-all group"
            >
              <img :src="`https://ui-avatars.com/api/?name=${student.name}&background=6366F1&color=fff`" class="w-12 h-12 rounded-xl object-cover" />
              <div class="flex-1">
                <h4 class="font-bold text-slate-800 group-hover:text-accent transition-colors">{{ student.name }}</h4>
                <p class="text-xs text-slate-500">{{ student.email }}</p>
              </div>
              <div class="text-right">
                <p class="text-xs font-bold text-slate-600">{{ student.attendanceRate }}%</p>
                <p class="text-[10px] text-slate-400">Attendance</p>
              </div>
            </NuxtLink>
          </div>
        </div>
      </div>

      <div v-if="myClasses.length === 0" class="glass-card-static p-12 text-center">
        <BookOpen class="w-12 h-12 text-slate-300 mx-auto mb-4" />
        <h3 class="text-xl font-black text-slate-800 tracking-tight">No Classes Assigned</h3>
        <p class="text-sm text-slate-500 mt-2">Contact your administrator to be assigned classes</p>
      </div>
    </div>
  </div>
</template>
