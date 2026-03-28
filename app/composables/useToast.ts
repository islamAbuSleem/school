import { ref } from 'vue'

interface Toast {
  id: number
  type: 'success' | 'error' | 'info' | 'warning'
  title: string
  message?: string
  duration?: number
}

const toasts = ref<Toast[]>([])

export const useToast = () => {
  const addToast = (toast: Omit<Toast, 'id'>) => {
    const id = Date.now() + Math.random()
    const newToast = { ...toast, id }
    toasts.value.push(newToast)
    
    const duration = toast.duration || 5000
    setTimeout(() => {
      removeToast(id)
    }, duration)
    
    return id
  }

  const removeToast = (id: number) => {
    const index = toasts.value.findIndex(t => t.id === id)
    if (index > -1) {
      toasts.value.splice(index, 1)
    }
  }

  const success = (title: string, message?: string) => addToast({ type: 'success', title, message })
  const error = (title: string, message?: string) => addToast({ type: 'error', title, message })
  const info = (title: string, message?: string) => addToast({ type: 'info', title, message })
  const warning = (title: string, message?: string) => addToast({ type: 'warning', title, message })

  return {
    toasts,
    addToast,
    removeToast,
    success,
    error,
    info,
    warning
  }
}
