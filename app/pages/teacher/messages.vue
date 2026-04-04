<script setup lang="ts">
import { MessageSquare, Send, User, Clock, Search, GraduationCap } from 'lucide-vue-next'

const { currentUser, teacherProfile } = useAuth()
const { students } = useData()

const conversations = [
  { id: 1, name: 'Marcus Thorne', student: 'Julian Thorne', lastMessage: 'Thank you for the update on Julian\'s progress.', time: '2 hours ago', unread: 0, avatar: 'https://ui-avatars.com/api/?name=MT&background=6366F1&color=fff' },
  { id: 2, name: 'Sarah Edwards', student: 'Alexander Edwards', lastMessage: 'Could we schedule a meeting about Alexander?', time: 'Yesterday', unread: 2, avatar: 'https://ui-avatars.com/api/?name=SE&background=10B981&color=fff' },
  { id: 3, name: 'School Administration', student: '', lastMessage: 'Staff meeting reminder for Friday.', time: '3 days ago', unread: 0, avatar: 'https://ui-avatars.com/api/?name=SA&background=F59E0B&color=fff' },
]

const messages = [
  { id: 1, sender: 'parent', name: 'Marcus Thorne', message: 'Hello Prof. Wilson, I wanted to check on Julian\'s recent performance in Mathematics.', time: '10:30 AM' },
  { id: 2, sender: 'teacher', name: currentUser.value?.name || 'Teacher', message: 'Hello Mr. Thorne! Julian is doing exceptionally well. He scored 94% on the latest exam.', time: '11:00 AM' },
  { id: 3, sender: 'parent', name: 'Marcus Thorne', message: 'Thank you for the update on Julian\'s progress.', time: '2 hours ago' },
]

const newMessage = ref('')
const selectedConversation = ref(1)

const sendMessage = () => {
  if (newMessage.value.trim()) {
    messages.push({
      id: messages.length + 1,
      sender: 'teacher',
      name: currentUser.value?.name || 'Teacher',
      message: newMessage.value,
      time: 'Just now'
    })
    newMessage.value = ''
  }
}
</script>

<template>
  <div class="max-w-[1600px] mx-auto pb-16 px-4 md:px-10">
    <div class="mb-8">
      <p class="text-xs font-semibold text-accent uppercase tracking-wider mb-2">Teacher Portal</p>
      <h2 class="page-title">Messages</h2>
      <p class="text-slate-500 mt-2">Communicate with parents and school staff</p>
    </div>

    <div class="grid grid-cols-1 lg:grid-cols-[350px,1fr] gap-8">
      <div class="glass-card-static overflow-hidden">
        <div class="p-4 border-b border-slate-100">
          <div class="relative">
            <Search class="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input type="text" placeholder="Search conversations..." class="w-full bg-slate-50 border border-slate-200 text-sm rounded-xl pl-10 pr-4 py-2.5 focus:outline-none focus:border-indigo-500" />
          </div>
        </div>
        <div class="divide-y divide-slate-50">
          <div v-for="conv in conversations" :key="conv.id" 
            @click="selectedConversation = conv.id"
            class="flex items-center gap-4 p-4 cursor-pointer transition-all hover:bg-slate-50/50"
            :class="selectedConversation === conv.id ? 'bg-indigo-50/50 border-l-4 border-l-indigo-500' : ''"
          >
            <img :src="conv.avatar" class="w-12 h-12 rounded-xl object-cover" />
            <div class="flex-1 min-w-0">
              <div class="flex items-center justify-between mb-1">
                <h4 class="font-bold text-slate-800 text-sm">{{ conv.name }}</h4>
                <span class="text-[10px] text-slate-400">{{ conv.time }}</span>
              </div>
              <p class="text-xs text-slate-500 truncate">{{ conv.lastMessage }}</p>
              <p v-if="conv.student" class="text-[10px] text-indigo-500 mt-0.5">{{ conv.student }}</p>
            </div>
            <div v-if="conv.unread > 0" class="w-5 h-5 bg-indigo-600 rounded-full flex items-center justify-center">
              <span class="text-[9px] font-black text-white">{{ conv.unread }}</span>
            </div>
          </div>
        </div>
      </div>

      <div class="glass-card-static flex flex-col">
        <div class="p-6 border-b border-slate-100">
          <div class="flex items-center gap-4">
            <img :src="conversations.find(c => c.id === selectedConversation)?.avatar" class="w-12 h-12 rounded-xl object-cover" />
            <div>
              <h3 class="font-bold text-slate-800">{{ conversations.find(c => c.id === selectedConversation)?.name }}</h3>
              <p v-if="conversations.find(c => c.id === selectedConversation)?.student" class="text-xs text-slate-500">Parent of {{ conversations.find(c => c.id === selectedConversation)?.student }}</p>
            </div>
          </div>
        </div>

        <div class="flex-1 overflow-y-auto p-6 space-y-4 min-h-[400px]">
          <div v-for="msg in messages" :key="msg.id" 
            class="flex"
            :class="msg.sender === 'teacher' ? 'justify-end' : 'justify-start'"
          >
            <div :class="[
              'max-w-[70%] p-4 rounded-2xl',
              msg.sender === 'teacher' ? 'bg-indigo-600 text-white rounded-br-sm' : 'bg-slate-50 text-slate-800 rounded-bl-sm'
            ]">
              <p class="text-sm">{{ msg.message }}</p>
              <p :class="['text-[10px] mt-2', msg.sender === 'teacher' ? 'text-indigo-200' : 'text-slate-400']">{{ msg.time }}</p>
            </div>
          </div>
        </div>

        <div class="p-4 border-t border-slate-100">
          <div class="flex items-center gap-3">
            <input 
              v-model="newMessage" 
              @keyup.enter="sendMessage"
              type="text" 
              placeholder="Type a message..." 
              class="flex-1 bg-slate-50 border border-slate-200 text-sm rounded-xl px-4 py-3 focus:outline-none focus:border-indigo-500"
            />
            <button @click="sendMessage" class="p-3 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 transition-colors">
              <Send class="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
