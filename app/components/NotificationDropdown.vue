<script setup lang="ts">
import { ref } from 'vue'

const props = defineProps<{
  notifications?: Array<{
    id: number
    title: string
    message: string
    time: string
    read: boolean
    type: 'alert' | 'success' | 'info' | 'warning'
  }>
}>()

const isOpen = ref(false)
const notifications = ref(props.notifications || [
  { id: 1, title: 'Attendance Alert', message: '5 students marked absent in Class 10A', time: '2 min ago', read: false, type: 'warning' },
  { id: 2, title: 'Fee Payment Received', message: '$1,200 payment from Julian Edwards family', time: '15 min ago', read: false, type: 'success' },
  { id: 3, title: 'Bus Delay Update', message: 'Bus Route 42B running 20 mins late', time: '1 hour ago', read: true, type: 'alert' },
  { id: 4, title: 'New Enrollment', message: 'Amina Ahmed registered for Grade 9', time: '2 hours ago', read: true, type: 'info' },
])

const unreadCount = computed(() => notifications.value.filter(n => !n.read).length)

const markAllRead = () => {
  notifications.value.forEach(n => n.read = true)
}

const markRead = (id: number) => {
  const notification = notifications.value.find(n => n.id === id)
  if (notification) notification.read = true
}

const getTypeStyles = (type: string) => {
  switch (type) {
    case 'success': return 'bg-emerald-100 text-emerald-600'
    case 'warning': return 'bg-amber-100 text-amber-600'
    case 'alert': return 'bg-red-100 text-red-600'
    default: return 'bg-blue-100 text-blue-600'
  }
}

const getTypeIcon = (type: string) => {
  switch (type) {
    case 'success': return '✓'
    case 'warning': return '!'
    case 'alert': return '⚠'
    default: return 'i'
  }
}
</script>

<template>
  <div class="relative">
    <button 
      @click="isOpen = !isOpen"
      class="relative p-3 text-slate-500 hover:text-accent bg-white/60 rounded-xl shadow-sm border border-white/50 transition-all hover:scale-105"
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M10.268 21a2 2 0 0 0 3.464 0"></path>
        <path d="M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326"></path>
      </svg>
      <span v-if="unreadCount > 0" class="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-[10px] font-bold rounded-full flex items-center justify-center">
        {{ unreadCount }}
      </span>
    </button>

    <Transition
      enter-active-class="transition ease-out duration-200"
      enter-from-class="opacity-0 translate-y-2"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition ease-in duration-150"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 translate-y-2"
    >
      <div v-if="isOpen" class="absolute right-0 mt-3 w-80 bg-white rounded-2xl shadow-xl border border-slate-100 overflow-hidden z-[100]">
        <div class="p-4 border-b border-slate-100 flex items-center justify-between">
          <h3 class="font-semibold text-slate-800">Notifications</h3>
          <button @click="markAllRead" class="text-xs text-accent hover:text-accent-hover font-medium">
            Mark all read
          </button>
        </div>
        
        <div class="max-h-96 overflow-y-auto">
          <div 
            v-for="notification in notifications" 
            :key="notification.id"
            @click="markRead(notification.id)"
            class="p-4 border-b border-slate-50 hover:bg-slate-50 cursor-pointer transition-colors"
            :class="{ 'bg-accent/5': !notification.read }"
          >
            <div class="flex items-start gap-3">
              <div :class="['w-8 h-8 rounded-lg flex items-center justify-center text-xs font-bold flex-shrink-0', getTypeStyles(notification.type)]">
                {{ getTypeIcon(notification.type) }}
              </div>
              <div class="flex-1 min-w-0">
                <p class="text-sm font-semibold text-slate-800">{{ notification.title }}</p>
                <p class="text-xs text-slate-500 mt-0.5">{{ notification.message }}</p>
                <p class="text-[10px] text-slate-400 mt-1">{{ notification.time }}</p>
              </div>
              <div v-if="!notification.read" class="w-2 h-2 bg-accent rounded-full flex-shrink-0 mt-1"></div>
            </div>
          </div>
        </div>
        
        <div class="p-3 border-t border-slate-100">
          <button class="w-full text-center text-sm text-accent font-medium hover:text-accent-hover py-2">
            View All Notifications
          </button>
        </div>
      </div>
    </Transition>

    <div v-if="isOpen" @click="isOpen = false" class="fixed inset-0 z-[90]"></div>
  </div>
</template>
