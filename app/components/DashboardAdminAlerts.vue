<script setup lang="ts">
import { AlertTriangle, Bus, X, Check } from 'lucide-vue-next'

const { success, info } = useToast()

const alerts = ref([
  { 
    id: 1,
    title: '5 students at high risk of academic failure.', 
    description: 'Immediate counselor review required.', 
    icon: AlertTriangle, 
    color: 'text-orange-500',
    bg: 'bg-orange-100',
    dismissible: true
  },
  { 
    id: 2,
    title: 'Bus 03 delay reported (Route 12).', 
    description: 'ETA: 20 mins late due to roadworks.', 
    icon: Bus, 
    color: 'text-indigo-500',
    bg: 'bg-indigo-100',
    dismissible: true
  },
])

const dismissAlert = (id: number) => {
  const index = alerts.value.findIndex(a => a.id === id)
  if (index > -1) {
    alerts.value.splice(index, 1)
    success('Alert dismissed', 'The alert has been removed')
  }
}

const dismissAll = () => {
  alerts.value = []
  success('All alerts dismissed', 'All administrative alerts have been cleared')
}
</script>

<template>
  <div class="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-2xl p-6 shadow-xl relative overflow-hidden group">
    <div class="absolute inset-0 bg-gradient-to-br from-accent/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
    
    <div class="flex items-center justify-between mb-6 relative">
      <h3 class="text-sm font-bold text-white uppercase tracking-wider flex items-center">
        <AlertTriangle class="w-5 h-5 mr-2 text-orange-400" />
        Administrative Alerts
      </h3>
      <span v-if="alerts.length > 0" class="px-2 py-1 bg-red-500/20 text-red-400 text-xs font-medium rounded-full">
        {{ alerts.length }} active
      </span>
    </div>

    <div class="space-y-4 relative">
      <TransitionGroup
        enter-active-class="transition ease-out duration-300"
        enter-from-class="opacity-0 -translate-x-4"
        enter-to-class="opacity-100 translate-x-0"
        leave-active-class="transition ease-in duration-200"
        leave-from-class="opacity-100 translate-x-0"
        leave-to-class="opacity-0 translate-x-4"
      >
        <div 
          v-for="alert in alerts" 
          :key="alert.id"
          class="flex items-start space-x-4 transition-all hover:translate-x-1 cursor-pointer p-3 rounded-xl hover:bg-white/5 group/alert"
        >
          <div :class="['p-3 rounded-xl flex-shrink-0', alert.bg]">
            <component :is="alert.icon" class="w-5 h-5" :class="alert.color" stroke-width="2" />
          </div>
          <div class="flex-1">
            <h4 class="text-sm font-bold text-white leading-snug">{{ alert.title }}</h4>
            <p class="text-xs text-slate-400 mt-1">{{ alert.description }}</p>
          </div>
          <button 
            v-if="alert.dismissible"
            @click.stop="dismissAlert(alert.id)"
            class="p-1.5 rounded-lg opacity-0 group-hover/alert:opacity-100 hover:bg-white/10 transition-all"
          >
            <X class="w-4 h-4 text-slate-400" />
          </button>
        </div>
      </TransitionGroup>

      <div v-if="alerts.length === 0" class="flex flex-col items-center justify-center py-8 text-center">
        <div class="w-16 h-16 bg-emerald-500/20 rounded-full flex items-center justify-center mb-4">
          <Check class="w-8 h-8 text-emerald-400" />
        </div>
        <p class="text-slate-300 font-medium">All clear!</p>
        <p class="text-slate-500 text-sm">No administrative alerts at this time</p>
      </div>
    </div>

    <button 
      v-if="alerts.length > 0"
      @click="dismissAll" 
      class="w-full mt-6 py-3 text-xs font-medium text-slate-400 hover:text-white transition-colors border-t border-white/10 pt-4"
    >
      DISMISS ALL
    </button>
  </div>
</template>
