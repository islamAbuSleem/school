<script setup lang="ts">
import { ref, computed } from 'vue'
import { X, CheckCircle, AlertCircle, Info, AlertTriangle } from 'lucide-vue-next'

interface Toast {
  id: number
  type: 'success' | 'error' | 'info' | 'warning'
  title: string
  message?: string
  duration?: number
}

const toasts = ref<Toast[]>([])

const addToast = (toast: Omit<Toast, 'id'>) => {
  const id = Date.now()
  const newToast = { ...toast, id }
  toasts.value.push(newToast)
  
  const duration = toast.duration || 5000
  setTimeout(() => {
    removeToast(id)
  }, duration)
}

const removeToast = (id: number) => {
  const index = toasts.value.findIndex(t => t.id === id)
  if (index > -1) {
    toasts.value.splice(index, 1)
  }
}

defineExpose({ addToast, removeToast })

const getTypeStyles = (type: string) => {
  switch (type) {
    case 'success': return 'bg-emerald-50 border-emerald-200 text-emerald-800'
    case 'error': return 'bg-red-50 border-red-200 text-red-800'
    case 'warning': return 'bg-amber-50 border-amber-200 text-amber-800'
    default: return 'bg-blue-50 border-blue-200 text-blue-800'
  }
}

const getIcon = (type: string) => {
  switch (type) {
    case 'success': return CheckCircle
    case 'error': return AlertCircle
    case 'warning': return AlertTriangle
    default: return Info
  }
}
</script>

<template>
  <Teleport to="body">
    <div class="fixed top-4 right-4 z-[100] space-y-3 max-w-sm w-full pointer-events-none">
      <TransitionGroup
        enter-active-class="transition ease-out duration-300"
        enter-from-class="opacity-0 translate-x-full"
        enter-to-class="opacity-100 translate-x-0"
        leave-active-class="transition ease-in duration-200"
        leave-from-class="opacity-100 translate-x-0"
        leave-to-class="opacity-0 translate-x-full"
      >
        <div
          v-for="toast in toasts"
          :key="toast.id"
          :class="['p-4 rounded-xl border shadow-lg pointer-events-auto flex items-start gap-3', getTypeStyles(toast.type)]"
        >
          <component :is="getIcon(toast.type)" class="w-5 h-5 flex-shrink-0 mt-0.5" />
          <div class="flex-1">
            <p class="font-semibold text-sm">{{ toast.title }}</p>
            <p v-if="toast.message" class="text-xs mt-1 opacity-80">{{ toast.message }}</p>
          </div>
          <button @click="removeToast(toast.id)" class="flex-shrink-0 opacity-60 hover:opacity-100">
            <X class="w-4 h-4" />
          </button>
        </div>
      </TransitionGroup>
    </div>
  </Teleport>
</template>
