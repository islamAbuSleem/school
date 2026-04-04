<script setup lang="ts">
import { BookOpen, FileText, Video, Link, Download } from 'lucide-vue-next'

const { currentUser, studentProfile } = useAuth()
const { classes } = useData()

const myClasses = computed(() => {
  const profile = studentProfile.value
  if (!profile) return []
  return classes.value.filter(c => c.studentIds.includes(profile.id))
})

const courses = computed(() => {
  return myClasses.value.map(cls => ({
    ...cls,
    resources: [
      { title: 'Course Syllabus', type: 'pdf' as const, url: '#' },
      { title: 'Lecture Notes - Week 1', type: 'document' as const, url: '#' },
      { title: 'Introduction Video', type: 'video' as const, url: '#' },
    ]
  }))
})

const getResourceIcon = (type: string) => {
  switch (type) {
    case 'pdf': return FileText
    case 'video': return Video
    case 'link': return Link
    default: return FileText
  }
}
</script>

<template>
  <div class="max-w-[1600px] mx-auto pb-16 px-4 md:px-10">
    <div class="mb-8">
      <p class="text-xs font-semibold text-accent uppercase tracking-wider mb-2">Student Portal</p>
      <h2 class="page-title">My Courses</h2>
      <p class="text-slate-500 mt-2">Your enrolled courses and learning materials</p>
    </div>

    <div class="space-y-8">
      <div v-for="course in courses" :key="course.id" class="glass-card-static overflow-hidden">
        <div class="bg-gradient-to-r from-indigo-500 to-purple-600 p-6 text-white">
          <div class="flex items-center justify-between">
            <div>
              <h3 class="text-xl font-black">{{ course.name }}</h3>
              <p class="text-sm text-indigo-100 mt-1">{{ course.subject }} • {{ course.grade }} • {{ course.room }}</p>
            </div>
            <div class="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
              <BookOpen class="w-6 h-6" />
            </div>
          </div>
        </div>
        <div class="p-6">
          <h4 class="text-sm font-black text-slate-800 uppercase tracking-widest mb-4">Course Resources</h4>
          <div class="space-y-3">
            <div v-for="resource in course.resources" :key="resource.title" class="flex items-center justify-between p-4 bg-slate-50/50 rounded-2xl border border-slate-100 hover:border-indigo-200 transition-all cursor-pointer group">
              <div class="flex items-center gap-4">
                <div class="w-10 h-10 bg-indigo-50 rounded-xl flex items-center justify-center text-indigo-600 group-hover:bg-indigo-100">
                  <component :is="getResourceIcon(resource.type)" class="w-5 h-5" />
                </div>
                <div>
                  <h4 class="font-bold text-slate-800">{{ resource.title }}</h4>
                  <p class="text-xs text-slate-500 uppercase">{{ resource.type }}</p>
                </div>
              </div>
              <Download class="w-4 h-4 text-slate-300 group-hover:text-indigo-500 transition-colors" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
