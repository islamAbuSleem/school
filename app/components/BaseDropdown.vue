<script setup lang="ts">
import { ref } from 'vue'
import { ChevronDown } from 'lucide-vue-next'

interface Option {
  value: string
  label: string
}

const props = defineProps<{
  label?: string
  options: Option[]
  modelValue?: string
  placeholder?: string
}>()

const emit = defineEmits(['update:modelValue'])

const isOpen = ref(false)
const selected = ref(props.modelValue || props.placeholder || props.options[0]?.label || 'Select...')

const selectOption = (option: Option) => {
  selected.value = option.label
  emit('update:modelValue', option.value)
  isOpen.value = false
}
</script>

<template>
  <div class="relative">
    <button 
      @click="isOpen = !isOpen"
      class="flex items-center justify-between px-4 py-2.5 bg-white text-slate-600 text-sm font-medium rounded-xl transition-all hover:bg-slate-50 border border-slate-200 hover:border-slate-300 min-w-[140px]"
    >
      <span>{{ selected }}</span>
      <ChevronDown class="w-4 h-4 ml-2 text-slate-400" :class="{ 'rotate-180': isOpen }" />
    </button>

    <Transition
      enter-active-class="transition ease-out duration-150"
      enter-from-class="opacity-0 scale-95"
      enter-to-class="opacity-100 scale-100"
      leave-active-class="transition ease-in duration-100"
      leave-from-class="opacity-100 scale-100"
      leave-to-class="opacity-0 scale-95"
    >
      <div v-if="isOpen" class="absolute left-0 mt-2 w-full min-w-[180px] bg-white rounded-xl shadow-lg border border-slate-100 overflow-hidden z-[100]">
        <div class="py-1">
          <button
            v-for="option in options"
            :key="option.value"
            @click="selectOption(option)"
            class="w-full px-4 py-2.5 text-left text-sm text-slate-600 hover:bg-slate-50 hover:text-accent transition-colors flex items-center justify-between"
            :class="{ 'text-accent bg-accent/5': selected === option.label }"
          >
            {{ option.label }}
            <svg v-if="selected === option.label" class="w-4 h-4 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
            </svg>
          </button>
        </div>
      </div>
    </Transition>

    <div v-if="isOpen" @click="isOpen = false" class="fixed inset-0 z-[90]"></div>
  </div>
</template>
